/* =============================================================================
   HOROZ LOJISTIK - DASHBOARD APPLICATION
   Leaflet harita, tablo render, click-to-filter etkilesimi
   ============================================================================= */

(function () {
  "use strict";

  // =========================================================================
  // YARDIMCI FONKSIYONLAR
  // =========================================================================

  /** Sayi formatlama: 1234567 -> "1.234.567" (Turkce) */
  function formatNumber(n) {
    if (n == null || isNaN(n)) return "-";
    return Math.round(n).toLocaleString("tr-TR");
  }

  /** Yuzde formatlama: 47.067 -> "%47,07" */
  function formatPercent(n) {
    if (n == null || isNaN(n)) return "-";
    return "%" + n.toFixed(2).replace(".", ",");
  }

  /** WMAE formatlama: 0.3548 -> "0,3548" */
  function formatWMAE(n) {
    if (n == null || isNaN(n)) return "-";
    return n.toFixed(4).replace(".", ",");
  }

  /** Hata oranina gore renk: dusuk=yesil, yuksek=kirmizi */
  function hataToColor(hata) {
    // 0% -> tamamen yesil, 50%+ -> tamamen kirmizi
    var t = Math.min(hata / 50, 1);
    var r = Math.round(39 + t * (231 - 39));
    var g = Math.round(174 - t * (174 - 76));
    var b = Math.round(96 - t * (96 - 60));
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  /** Tahmini desi degerinden marker yaricapi hesapla */
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
  var markers = {};          // merkez_id -> L.circleMarker
  var selectedMerkez = null; // secili merkez id'si

  var data = DASHBOARD_DATA;
  var merkezler = data.merkezler;

  // Desi min/max (marker radius icin)
  var desiValues = merkezler.map(function (m) { return m.tahmini_desi; });
  var minDesi = Math.min.apply(null, desiValues);
  var maxDesi = Math.max.apply(null, desiValues);

  // =========================================================================
  // INIT
  // =========================================================================

  document.addEventListener("DOMContentLoaded", function () {
    initSummaryCards();
    initMap();
    initDropdown();
    initTables();
    bindEvents();
  });

  // =========================================================================
  // OZET KARTLAR
  // =========================================================================

  function initSummaryCards() {
    // Toplam merkez
    document.getElementById("stat-merkez").textContent = data.meta.toplam_merkez;

    // En sik top-3'e giren model
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

    // Ortalama hata
    var totalHata = 0;
    merkezler.forEach(function (m) { totalHata += m.ort_hata; });
    var avgHata = totalHata / merkezler.length;
    document.getElementById("stat-avg-hata").textContent = formatPercent(avgHata);

    // Son guncelleme
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

    // CartoDB Positron tile (temiz, acik gorunum)
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 18,
      }
    ).addTo(map);

    // Marker'lari olustur
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

      // Tooltip
      var tooltipHTML = buildTooltipHTML(m);
      marker.bindTooltip(tooltipHTML, {
        className: "merkez-tooltip",
        direction: "top",
        offset: [0, -radius],
        sticky: false,
      });

      // Click
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
    // Sehir adina gore sirala
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

    // Sehir sonra WMAE rank'a gore sirala
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

    // Dropdown guncelle
    document.getElementById("merkez-select").value = merkez_id;

    // Reset butonu goster
    document.getElementById("btn-reset").style.display = "inline-block";

    // Tablolari filtrele
    initTables(merkez_id);

    // Haritada secili marker'i vurgula
    Object.keys(markers).forEach(function (id) {
      var m = markers[id];
      if (id === merkez_id) {
        m.setStyle({ weight: 4, color: "#f39c12", fillOpacity: 0.9 });
        m.bringToFront();
        // Haritayi bu noktaya yaklas
        var merkez = merkezler.find(function (x) { return x.id === id; });
        if (merkez) {
          map.setView([merkez.lat, merkez.lng], 8, { animate: true });
        }
      } else {
        m.setStyle({ weight: 2, color: "#ffffff", fillOpacity: 0.45 });
      }
    });

    // Tablo bolumune scroll
    document.querySelector(".tables-section").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function resetFilter() {
    selectedMerkez = null;

    // Dropdown sifirla
    document.getElementById("merkez-select").value = "";

    // Butonu gizle
    document.getElementById("btn-reset").style.display = "none";

    // Tablolari tam goster
    initTables(null);

    // Harita marker'larini eski haline getir
    Object.keys(markers).forEach(function (id) {
      markers[id].setStyle({ weight: 2, color: "#ffffff", fillOpacity: 0.75 });
    });

    // Haritayi Turkiye gorunumune dondur
    map.setView([39.0, 35.0], 6, { animate: true });
  }

  // =========================================================================
  // EVENT BINDING
  // =========================================================================

  function bindEvents() {
    // Dropdown degisince
    document.getElementById("merkez-select").addEventListener("change", function () {
      var val = this.value;
      if (val) {
        filterByMerkez(val);
      } else {
        resetFilter();
      }
    });

    // Reset butonu
    document.getElementById("btn-reset").addEventListener("click", function () {
      resetFilter();
    });
  }

})();
