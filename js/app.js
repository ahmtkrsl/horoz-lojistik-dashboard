/* =============================================================================
   HOROZ LOJISTIK - DASHBOARD APPLICATION
   Leaflet harita, tablo render, click-to-filter etkilesimi
   v2: Detay paneli gosterme/gizleme eklendi
   ============================================================================= */

(function () {
  "use strict";

  // =========================================================================
  // YARDIMCI FONKSIYONLAR
  // =========================================================================

  function formatNumber(n) {
    if (n == null || isNaN(n)) return "-";
    return Math.round(n).toLocaleString("tr-TR");
  }

  function formatPercent(n) {
    if (n == null || isNaN(n)) return "-";
    return "%" + n.toFixed(2).replace(".", ",");
  }

  function formatWMAE(n) {
    if (n == null || isNaN(n)) return "-";
    return n.toFixed(4).replace(".", ",");
  }

  function hataToColor(hata) {
    var t = Math.min(hata / 50, 1);
    var r = Math.round(39 + t * (231 - 39));
    var g = Math.round(174 - t * (174 - 76));
    var b = Math.round(96 - t * (96 - 60));
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function desiToRadius(desi, minDesi, maxDesi) {
    var MIN_R = 8;
    var MAX_R = 32;
    if (maxDesi === minDesi) return (MIN_R + MAX_R) / 2;
    var t = (desi - minDesi) / (maxDesi - minDesi);
    return MIN_R + t * (MAX_R - MIN_R);
  }

  // =========================================================================
  // GLOBAL STATE
  // =========================================================================

  var map;
  var markers = {};
  var selectedMerkez = null;

  var data = DASHBOARD_DATA;
  var merkezler = data.merkezler;

  var desiValues = merkezler.map(function (m) { return m.tahmini_desi; });
  var minDesi = Math.min.apply(null, desiValues);
  var maxDesi = Math.max.apply(null, desiValues);

  // Global erisim (detail.js icin)
  window.HOROZ_APP = {
    data: data,
    merkezler: merkezler,
    formatNumber: formatNumber,
    formatPercent: formatPercent,
    formatWMAE: formatWMAE,
    showDetail: showDetail,
    hideDetail: hideDetail,
    getMerkez: function (id) {
      return merkezler.find(function (m) { return m.id === id; });
    },
  };

  // =========================================================================
  // INIT
  // =========================================================================

  document.addEventListener("DOMContentLoaded", function () {
    initSummaryCards();
    initMap();
    initDropdown();
    initTables();
    bindEvents();
    initWelcomePopup();
  });

  // =========================================================================
  // OZET KARTLAR
  // =========================================================================

  function initSummaryCards() {
    document.getElementById("stat-merkez").textContent = data.meta.toplam_merkez;

    var modelCounts = {};
    merkezler.forEach(function (m) {
      m.top3_models.forEach(function (t) {
        modelCounts[t.model] = (modelCounts[t.model] || 0) + 1;
      });
    });
    var bestModel = Object.keys(modelCounts).reduce(function (a, b) {
      return modelCounts[a] > modelCounts[b] ? a : b;
    });
    document.getElementById("stat-best-model").textContent =
      bestModel + " (" + modelCounts[bestModel] + "x)";

    var totalHata = 0;
    merkezler.forEach(function (m) { totalHata += m.ort_hata; });
    var avgHata = totalHata / merkezler.length;
    document.getElementById("stat-avg-hata").textContent = formatPercent(avgHata);

    document.getElementById("stat-update").textContent = data.meta.guncelleme;
  }

  // =========================================================================
  // HARITA
  // =========================================================================

  function initMap() {
    map = L.map("map", {
      center: [39.0, 35.0],
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 18,
      }
    ).addTo(map);

    merkezler.forEach(function (m) {
      var radius = desiToRadius(m.tahmini_desi, minDesi, maxDesi);
      var color = hataToColor(m.ort_hata);

      var marker = L.circleMarker([m.lat, m.lng], {
        radius: radius,
        fillColor: color,
        color: "#ffffff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.75,
      }).addTo(map);

      var tooltipHTML = buildTooltipHTML(m);
      marker.bindTooltip(tooltipHTML, {
        className: "merkez-tooltip",
        direction: "top",
        offset: [0, -radius],
        sticky: false,
      });

      marker.on("click", function () {
        filterByMerkez(m.id);
      });

      markers[m.id] = marker;
    });
  }

  function buildTooltipHTML(m) {
    var html = '<div class="tooltip-title">' + m.sehir;
    if (m.sehir !== m.id) {
      html += ' <span style="font-weight:400;font-size:0.75rem;color:#6b7280">(' + m.id + ')</span>';
    }
    html += "</div>";

    html += '<div class="tooltip-models">';
    m.top3_models.forEach(function (t, i) {
      html +=
        '<div class="tooltip-model-row">' +
        '<span class="tooltip-model-name">' + (i + 1) + ". " + t.model + "</span>" +
        '<span class="tooltip-model-score">Puan: ' + t.kombine + "</span>" +
        "</div>";
    });
    html += "</div>";

    html += '<div class="tooltip-stats">';
    html +=
      '<div class="tooltip-stat">' +
      "<span>Tahmini Desi</span>" +
      '<span class="tooltip-stat-value">' + formatNumber(m.tahmini_desi) + "</span>" +
      "</div>";
    html +=
      '<div class="tooltip-stat">' +
      "<span>Gercek Desi</span>" +
      '<span class="tooltip-stat-value">' + formatNumber(m.gercek_toplam) + "</span>" +
      "</div>";
    html +=
      '<div class="tooltip-stat">' +
      "<span>Ort. Hata</span>" +
      '<span class="tooltip-stat-value">' + formatPercent(m.ort_hata) + "</span>" +
      "</div>";
    html += "</div>";

    return html;
  }

  // =========================================================================
  // DROPDOWN
  // =========================================================================

  function initDropdown() {
    var select = document.getElementById("merkez-select");
    var sorted = merkezler.slice().sort(function (a, b) {
      return a.sehir.localeCompare(b.sehir, "tr");
    });
    sorted.forEach(function (m) {
      var opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.sehir + (m.sehir !== m.id ? " (" + m.id + ")" : "");
      select.appendChild(opt);
    });
  }

  // =========================================================================
  // TABLOLAR
  // =========================================================================

  function initTables(filterMerkez) {
    renderWMAETable(filterMerkez);
    renderHoldoutTable(filterMerkez);
  }

  function renderWMAETable(filterMerkez) {
    var tbody = document.querySelector("#table-wmae tbody");
    tbody.innerHTML = "";

    var items = [];
    merkezler.forEach(function (m) {
      if (filterMerkez && m.id !== filterMerkez) return;
      m.tum_modeller.forEach(function (mod) {
        items.push({
          merkez: m.sehir,
          merkez_id: m.id,
          model: mod.model,
          wmae: mod.wmae,
          rank: mod.wmae_rank,
          kombine: mod.kombine,
        });
      });
    });

    items.sort(function (a, b) {
      var c = a.merkez.localeCompare(b.merkez, "tr");
      if (c !== 0) return c;
      return a.rank - b.rank;
    });

    items.forEach(function (item) {
      var tr = document.createElement("tr");
      var isTop3 = item.rank <= 3;
      if (isTop3) tr.classList.add("row-top3");

      tr.innerHTML =
        '<td class="cell-merkez">' + item.merkez + "</td>" +
        "<td>" + item.model + "</td>" +
        '<td class="cell-number">' + formatWMAE(item.wmae) + "</td>" +
        '<td class="cell-rank rank-' + item.rank + '">' + item.rank + "</td>";

      tr.style.cursor = "pointer";
      tr.addEventListener("click", function () {
        filterByMerkez(item.merkez_id);
      });

      tbody.appendChild(tr);
    });
  }

  function renderHoldoutTable(filterMerkez) {
    var tbody = document.querySelector("#table-holdout tbody");
    tbody.innerHTML = "";

    var items = [];
    merkezler.forEach(function (m) {
      if (filterMerkez && m.id !== filterMerkez) return;
      m.tum_modeller.forEach(function (mod) {
        items.push({
          merkez: m.sehir,
          merkez_id: m.id,
          model: mod.model,
          tahmin: mod.tahmin_toplam,
          gercek: mod.gercek_toplam,
          hata: mod.hata,
          rank: mod.hata_rank,
        });
      });
    });

    items.sort(function (a, b) {
      var c = a.merkez.localeCompare(b.merkez, "tr");
      if (c !== 0) return c;
      return a.rank - b.rank;
    });

    items.forEach(function (item) {
      var tr = document.createElement("tr");
      var isTop3 = item.rank <= 3;
      if (isTop3) tr.classList.add("row-top3");

      tr.innerHTML =
        '<td class="cell-merkez">' + item.merkez + "</td>" +
        "<td>" + item.model + "</td>" +
        '<td class="cell-number">' + formatNumber(item.tahmin) + "</td>" +
        '<td class="cell-number">' + formatNumber(item.gercek) + "</td>" +
        '<td class="cell-number">' + formatPercent(item.hata) + "</td>" +
        '<td class="cell-rank rank-' + item.rank + '">' + item.rank + "</td>";

      tr.style.cursor = "pointer";
      tr.addEventListener("click", function () {
        filterByMerkez(item.merkez_id);
      });

      tbody.appendChild(tr);
    });
  }

  // =========================================================================
  // FILTRE / ETKILESIM
  // =========================================================================

  function filterByMerkez(merkez_id) {
    selectedMerkez = merkez_id;

    document.getElementById("merkez-select").value = merkez_id;
    document.getElementById("btn-reset").style.display = "inline-block";

    // Detay butonu: sadece detay verisi varsa goster
    var merkez = merkezler.find(function (m) { return m.id === merkez_id; });
    var hasDaily = merkez && merkez.daily && Object.keys(merkez.daily).length > 0;
    document.getElementById("btn-detail").style.display = hasDaily ? "inline-block" : "none";

    initTables(merkez_id);

    Object.keys(markers).forEach(function (id) {
      var m = markers[id];
      if (id === merkez_id) {
        m.setStyle({ weight: 4, color: "#f39c12", fillOpacity: 0.9 });
        m.bringToFront();
        var mk = merkezler.find(function (x) { return x.id === id; });
        if (mk) {
          map.setView([mk.lat, mk.lng], 8, { animate: true });
        }
      } else {
        m.setStyle({ weight: 2, color: "#ffffff", fillOpacity: 0.45 });
      }
    });

    document.querySelector(".tables-section").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function resetFilter() {
    selectedMerkez = null;

    document.getElementById("merkez-select").value = "";
    document.getElementById("btn-reset").style.display = "none";
    document.getElementById("btn-detail").style.display = "none";

    initTables(null);

    Object.keys(markers).forEach(function (id) {
      markers[id].setStyle({ weight: 2, color: "#ffffff", fillOpacity: 0.75 });
    });

    map.setView([39.0, 35.0], 6, { animate: true });
  }

  // =========================================================================
  // DETAY GOSTER / GIZLE
  // =========================================================================

  function showDetail(merkez_id) {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("detail-panel").style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.HOROZ_DETAIL && window.HOROZ_DETAIL.initDetail) {
      window.HOROZ_DETAIL.initDetail(merkez_id);
    }
  }

  function hideDetail() {
    document.getElementById("detail-panel").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    setTimeout(function () {
      if (map) map.invalidateSize();
    }, 100);

    if (selectedMerkez) {
      document.querySelector(".tables-section").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // =========================================================================
  // EVENT BINDING
  // =========================================================================

  function bindEvents() {
    document.getElementById("merkez-select").addEventListener("change", function () {
      var val = this.value;
      if (val) {
        filterByMerkez(val);
      } else {
        resetFilter();
      }
    });

    document.getElementById("btn-reset").addEventListener("click", function () {
      resetFilter();
    });

    document.getElementById("btn-detail").addEventListener("click", function () {
      if (selectedMerkez) {
        showDetail(selectedMerkez);
      }
    });

    document.getElementById("btn-back").addEventListener("click", function () {
      hideDetail();
    });

    // Sticky compact header
    var header = document.querySelector(".header");
    var SCROLL_THRESHOLD = 60;
    window.addEventListener("scroll", function () {
      if (window.scrollY > SCROLL_THRESHOLD) {
        header.classList.add("compact");
      } else {
        header.classList.remove("compact");
      }
    });

    // Bilgi sidebar ac/kapa
    document.getElementById("btn-info").addEventListener("click", function () {
      openInfoSidebar();
    });

    document.getElementById("btn-sidebar-close").addEventListener("click", function () {
      closeInfoSidebar();
    });

    document.getElementById("info-overlay").addEventListener("click", function () {
      closeInfoSidebar();
    });

    // ESC ile sidebar kapat
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeInfoSidebar();
      }
    });
  }

  // =========================================================================
  // BILGI SIDEBAR
  // =========================================================================

  function openInfoSidebar() {
    document.getElementById("info-sidebar").classList.add("sidebar-open");
    document.getElementById("info-overlay").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeInfoSidebar() {
    document.getElementById("info-sidebar").classList.remove("sidebar-open");
    document.getElementById("info-overlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  // =========================================================================
  // ILK GIRIS POP-UP
  // =========================================================================

  function initWelcomePopup() {
    var STORAGE_KEY = "horoz_welcome_seen";

    if (localStorage.getItem(STORAGE_KEY)) {
      return;
    }

    var popup = document.getElementById("welcome-popup");
    popup.style.display = "flex";

    document.getElementById("btn-welcome-ok").addEventListener("click", function () {
      popup.style.display = "none";
      localStorage.setItem(STORAGE_KEY, "1");
    });
  }

})();
