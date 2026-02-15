/* =============================================================================
   HOROZ LOJISTIK - DETAY PANELI
   Plotly.js chart, anomali overlay, model karsilastirma, anomali ozet tablolari
   ============================================================================= */

(function () {
  "use strict";

  // =========================================================================
  // STATE
  // =========================================================================

  var currentMerkez = null;
  var selectedModels = [];
  var showAnomaly = false;

  // Renk paleti (modeller icin)
  var MODEL_COLORS = [
    { line: "#2563eb", fill: "rgba(37,99,235,0.08)" },
    { line: "#16a34a", fill: "rgba(22,163,74,0.08)" },
    { line: "#dc2626", fill: "rgba(220,38,38,0.08)" },
  ];

  // Anomali renkleri
  var ANOMALY_COLORS = {
    "Kritik": { color: "#dc2626", size: 14, symbol: "circle" },
    "Supheli": { color: "#f97316", size: 11, symbol: "diamond" },
    "Olasi":   { color: "#eab308", size: 9, symbol: "circle-open" },
  };

  // =========================================================================
  // GLOBAL ERISIM
  // =========================================================================

  window.HOROZ_DETAIL = {
    initDetail: initDetail,
  };

  // =========================================================================
  // INIT
  // =========================================================================

  function initDetail(merkez_id) {
    var app = window.HOROZ_APP;
    var merkez = app.getMerkez(merkez_id);
    if (!merkez) return;

    currentMerkez = merkez;
    showAnomaly = false;

    document.getElementById("anomaly-toggle").checked = false;

    // Baslik
    var title = merkez.sehir;
    if (merkez.sehir !== merkez.id) {
      title += " (" + merkez.id + ")";
    }
    document.getElementById("detail-title").textContent = title + " - Detay";

    // Merkez dropdown
    initDetailMerkezDropdown(merkez_id);

    // Model checkboxlari
    updateModelCheckboxes(merkez);

    // Ilk chart
    renderAllCharts();

    // Anomali tablolari
    renderAnomalyTables();

    // Event binding (tekrar baglamayacak sekilde)
    bindDetailEvents();
  }

  // =========================================================================
  // MERKEZ DROPDOWN
  // =========================================================================

  function initDetailMerkezDropdown(selectedId) {
    var select = document.getElementById("detail-merkez-select");
    select.innerHTML = "";

    var app = window.HOROZ_APP;
    var sorted = app.merkezler.slice().sort(function (a, b) {
      return a.sehir.localeCompare(b.sehir, "tr");
    });

    sorted.forEach(function (m) {
      var opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.sehir + (m.sehir !== m.id ? " (" + m.id + ")" : "");
      if (m.id === selectedId) opt.selected = true;
      select.appendChild(opt);
    });
  }

  // =========================================================================
  // MODEL CHECKBOXLARI
  // =========================================================================

  function updateModelCheckboxes(merkez) {
    var container = document.getElementById("model-checkbox-group");
    container.innerHTML = "";

    if (!merkez || !merkez.tum_modeller) return;

    // Kombine puana gore sirala (en iyi ilk)
    var models = merkez.tum_modeller.slice().sort(function (a, b) {
      return a.kombine - b.kombine;
    });

    // Varsayilan: en iyi model secili
    selectedModels = models.length > 0 ? [models[0].model] : [];

    models.forEach(function (mod, i) {
      var label = document.createElement("label");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = mod.model;
      checkbox.dataset.kombine = mod.kombine;

      if (i === 0) {
        checkbox.checked = true;
        label.classList.add("checked");
      }

      var span = document.createElement("span");
      span.textContent = mod.model + " (" + mod.kombine + ")";

      label.appendChild(checkbox);
      label.appendChild(span);
      container.appendChild(label);

      checkbox.addEventListener("change", function () {
        onModelCheckboxChange();
      });
    });
  }

  function onModelCheckboxChange() {
    var container = document.getElementById("model-checkbox-group");
    var checkboxes = container.querySelectorAll("input[type='checkbox']");
    var checkedCount = 0;

    selectedModels = [];
    checkboxes.forEach(function (cb) {
      if (cb.checked) {
        checkedCount++;
        selectedModels.push(cb.value);
      }
    });

    // Max 3 kisitlamasi
    checkboxes.forEach(function (cb) {
      var label = cb.parentElement;
      if (cb.checked) {
        label.classList.add("checked");
        label.classList.remove("disabled");
      } else {
        label.classList.remove("checked");
        if (checkedCount >= 3) {
          cb.disabled = true;
          label.classList.add("disabled");
        } else {
          cb.disabled = false;
          label.classList.remove("disabled");
        }
      }
    });

    renderAllCharts();
    renderAnomalyTables();
  }

  // =========================================================================
  // CHART RENDER (PLOTLY.JS)
  // =========================================================================

  function renderAllCharts() {
    for (var i = 0; i < 3; i++) {
      var slot = document.getElementById("chart-slot-" + i);
      if (i < selectedModels.length) {
        renderChart(slot, selectedModels[i], i);
        slot.style.display = "block";
      } else {
        slot.innerHTML = "";
        slot.style.display = "none";
      }
    }
  }

  function renderChart(container, modelName, colorIdx) {
    container.innerHTML = "";

    var merkez = currentMerkez;
    if (!merkez || !merkez.daily || !merkez.daily[modelName]) {
      container.innerHTML =
        '<div class="no-data-msg">' +
        '<span class="no-data-icon">&#128202;</span>' +
        'Bu model icin gunluk tahmin verisi bulunamadi.' +
        '</div>';
      return;
    }

    // Baslik
    var titleDiv = document.createElement("div");
    titleDiv.className = "chart-title";
    titleDiv.textContent = modelName + " - Validation (Gercek vs Tahmin)";
    container.appendChild(titleDiv);

    // Chart container
    var chartDiv = document.createElement("div");
    chartDiv.className = "chart-container";
    container.appendChild(chartDiv);

    var dailyData = merkez.daily[modelName];
    var colors = MODEL_COLORS[colorIdx % MODEL_COLORS.length];

    // Traces
    var traces = [];

    // Gercek (y)
    traces.push({
      x: dailyData.ds,
      y: dailyData.y,
      type: "scatter",
      mode: "lines",
      name: "Gercek",
      line: { color: colors.line, width: 2 },
      fill: "tozeroy",
      fillcolor: colors.fill,
      hovertemplate: "<b>%{x}</b><br>Gercek: %{y:,.0f}<extra></extra>",
    });

    // Tahmin (y_pred)
    traces.push({
      x: dailyData.ds,
      y: dailyData.y_pred,
      type: "scatter",
      mode: "lines",
      name: "Tahmin",
      line: { color: "#f97316", width: 2, dash: "dash" },
      hovertemplate: "<b>%{x}</b><br>Tahmin: %{y:,.0f}<extra></extra>",
    });

    // Anomali overlay
    if (showAnomaly && merkez.anomali && merkez.anomali[modelName]) {
      var anomData = merkez.anomali[modelName];
      var groups = { "Kritik": [], "Supheli": [], "Olasi": [] };

      anomData.forEach(function (a) {
        if (groups[a.seviye]) {
          groups[a.seviye].push(a);
        }
      });

      Object.keys(groups).forEach(function (seviye) {
        var items = groups[seviye];
        if (items.length === 0) return;

        var cfg = ANOMALY_COLORS[seviye];
        traces.push({
          x: items.map(function (a) { return a.ds; }),
          y: items.map(function (a) { return a.y; }),
          type: "scatter",
          mode: "markers",
          name: seviye + " (" + items.length + ")",
          marker: {
            color: cfg.color,
            size: cfg.size,
            symbol: cfg.symbol,
            line: { color: "#000", width: 1 },
          },
          hovertemplate:
            "<b>%{x}</b><br>" +
            "Gercek: %{y:,.0f}<br>" +
            seviye + " Anomali (Oy: " + items[0].votes + ")" +
            "<extra></extra>",
        });
      });
    }

    var layout = {
      margin: { l: 60, r: 20, t: 10, b: 50 },
      xaxis: {
        title: { text: "Tarih", font: { size: 12 } },
        showgrid: true,
        gridcolor: "#f0f0f0",
      },
      yaxis: {
        title: { text: "Desi", font: { size: 12 } },
        showgrid: true,
        gridcolor: "#f0f0f0",
        separatethousands: true,
      },
      legend: {
        orientation: "h",
        yanchor: "bottom",
        y: 1.02,
        xanchor: "right",
        x: 1,
        font: { size: 11 },
      },
      hovermode: "x unified",
      plot_bgcolor: "#ffffff",
      paper_bgcolor: "#ffffff",
      font: { family: "Inter, system-ui, sans-serif" },
    };

    var config = {
      responsive: true,
      displayModeBar: true,
      modeBarButtonsToRemove: ["lasso2d", "select2d", "autoScale2d"],
      displaylogo: false,
      locale: "tr",
    };

    Plotly.newPlot(chartDiv, traces, layout, config);
  }

  // =========================================================================
  // ANOMALI OZET TABLOLARI
  // =========================================================================

  function renderAnomalyTables() {
    renderAnomalySummaryTable();
    renderAnomalyDatesTable();
  }

  function renderAnomalySummaryTable() {
    var tbody = document.querySelector("#table-anomaly-summary tbody");
    tbody.innerHTML = "";

    var merkez = currentMerkez;
    if (!merkez || !merkez.anomali) {
      tbody.innerHTML = '<tr><td colspan="5" class="no-data-msg">Anomali verisi yok</td></tr>';
      return;
    }

    // Secili modeller icin anomali ozeti
    var models = selectedModels.length > 0 ? selectedModels : Object.keys(merkez.anomali);

    var hasAnyData = false;

    models.forEach(function (modelName) {
      var anomData = merkez.anomali[modelName];
      if (!anomData || anomData.length === 0) return;

      hasAnyData = true;

      var counts = { total: anomData.length, kritik: 0, supheli: 0, olasi: 0 };
      anomData.forEach(function (a) {
        if (a.seviye === "Kritik") counts.kritik++;
        else if (a.seviye === "Supheli") counts.supheli++;
        else if (a.seviye === "Olasi") counts.olasi++;
      });

      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td><strong>" + modelName + "</strong></td>" +
        '<td class="cell-number">' + counts.total + "</td>" +
        '<td class="cell-number" style="color:#dc2626;font-weight:600">' + counts.kritik + "</td>" +
        '<td class="cell-number" style="color:#f97316;font-weight:600">' + counts.supheli + "</td>" +
        '<td class="cell-number" style="color:#eab308;font-weight:600">' + counts.olasi + "</td>";
      tbody.appendChild(tr);
    });

    if (!hasAnyData) {
      tbody.innerHTML = '<tr><td colspan="5" class="no-data-msg">Secili modeller icin anomali verisi yok</td></tr>';
    }
  }

  function renderAnomalyDatesTable() {
    var tbody = document.querySelector("#table-anomaly-dates tbody");
    tbody.innerHTML = "";

    var merkez = currentMerkez;
    if (!merkez || !merkez.anomali) {
      tbody.innerHTML = '<tr><td colspan="2" class="no-data-msg">Anomali verisi yok</td></tr>';
      return;
    }

    // Secili modellerin anomali gunlerini topla
    var dateCounts = {};
    var models = selectedModels.length > 0 ? selectedModels : Object.keys(merkez.anomali);

    models.forEach(function (modelName) {
      var anomData = merkez.anomali[modelName];
      if (!anomData) return;

      var modelDates = {};
      anomData.forEach(function (a) {
        modelDates[a.ds] = true;
      });

      Object.keys(modelDates).forEach(function (ds) {
        dateCounts[ds] = (dateCounts[ds] || 0) + 1;
      });
    });

    // Sadece birden fazla modelin isaretledigi gunler
    var multiModelDates = [];
    Object.keys(dateCounts).forEach(function (ds) {
      if (dateCounts[ds] > 1) {
        multiModelDates.push({ ds: ds, count: dateCounts[ds] });
      }
    });

    // Buyukten kucuge sirala
    multiModelDates.sort(function (a, b) { return b.count - a.count; });

    if (multiModelDates.length === 0) {
      tbody.innerHTML = '<tr><td colspan="2" class="no-data-msg">Birden fazla modelin ortak isaretledigi gun yok</td></tr>';
      return;
    }

    multiModelDates.forEach(function (item) {
      var tr = document.createElement("tr");
      var countColor = item.count >= 3 ? "#dc2626" : (item.count >= 2 ? "#f97316" : "#374151");
      tr.innerHTML =
        "<td>" + item.ds + "</td>" +
        '<td class="cell-number" style="color:' + countColor + ';font-weight:600">' + item.count + "</td>";
      tbody.appendChild(tr);
    });
  }

  // =========================================================================
  // EVENT BINDING
  // =========================================================================

  var _detailEventsBound = false;

  function bindDetailEvents() {
    if (_detailEventsBound) return;
    _detailEventsBound = true;

    // Merkez dropdown degisimi
    document.getElementById("detail-merkez-select").addEventListener("change", function () {
      var newMerkez = this.value;
      if (newMerkez && newMerkez !== currentMerkez.id) {
        var app = window.HOROZ_APP;
        var m = app.getMerkez(newMerkez);
        if (m) {
          currentMerkez = m;
          var title = m.sehir;
          if (m.sehir !== m.id) title += " (" + m.id + ")";
          document.getElementById("detail-title").textContent = title + " - Detay";
          updateModelCheckboxes(m);
          renderAllCharts();
          renderAnomalyTables();
        }
      }
    });

    // Anomali toggle
    document.getElementById("anomaly-toggle").addEventListener("change", function () {
      showAnomaly = this.checked;
      renderAllCharts();
    });
  }

})();
