# Changelog

All notable changes to this project are documented here.

---

## [1.1.0] — 2026-05-21

### Bug Fixes

- **`borderDash` on predicted dataset** (`loadCapacityTab`) — Property was present but ineffective due to incorrect placement. Moved to the dataset object where Chart.js expects it; the forecast line now renders as dashed. *(🔴 Bug #1)*

- **Capacity mini chart null guard** (`loadOverviewTab`) — Added `.filter(v => v !== null)` before passing historical actuals to `createMiniChart`, preventing broken/empty line renders if any `actual` values are `null`. *(🔴 Bug #2)*

- **`peakHours` source data mutation** (`loadThroughputTab`) — Changed `data.throughputData.hourly.sort(...)` to `data.throughputData.hourly.slice().sort(...)` so the original chronological array is never reordered in place. *(🔴 Bug #3)*

- **Tab lazy-load recovery** (`initializeApp`) — All tab click handlers now use a `tryLoadTab(chartKey, loaderFn)` wrapper that catches errors, logs them to `console.error`, and resets `charts[chartKey]` to `null` so the next click can attempt re-initialization. *(🔴 Bug #4)*

- **`simulateDataUpdate()` unbounded drift** — Replaced compounding `(1 + variation)` multipliers with oscillation around fixed base constants (`BASE_THROUGHPUT`, `BASE_ERROR_RATE`, etc.), preventing KPI values from drifting to unrealistic extremes over time. *(🔴 Bug #5)*

- **Team productivity y-axis** (`loadTeamTab`) — Added `max: 110` to the y-axis scale and updated the axis title to `"Productivity Score (100 = target)"`, giving above-100 values visible context without hiding them. *(🔴 Bug #6)*

### Code Quality

- **`Chart.destroy()` before re-init** — Added a `destroyChart(key)` helper that calls `.destroy()` on any existing chart instance and nulls its reference before a new one is created on the same canvas. Applied across all 5 tab loaders and `createMiniChart`. Prevents the "Canvas is already in use" error on any future re-render path. *(🟡 Quality #1)*

- **`index.html` canvas ID audit** — Cross-checked all 13 canvas element IDs in `index.html` against every canvas lookup in `app.js`. All IDs match exactly; no orphaned or mismatched references found. *(🟡 Quality #2)*

- **Silent canvas failure logging** — Replaced all bare `document.getElementById(...)` canvas lookups with a centralized `getCanvas(id)` helper. If an element is missing from the DOM, the helper now emits `console.error('Canvas element not found: #<id>')` instead of failing silently. *(🟡 Quality #3)*

---

## [1.0.0] — 2025-09-25

### Initial Release

- Interactive single-page dashboard with six tabbed views: Overview, Throughput, Errors, Team Metrics, Capacity Planning, and Alerts
- Real-time KPI cards with live 5-second update cycle
- Chart.js visualizations: line, bar, pie, doughnut charts with mini sparklines
- Predictive capacity forecast with historical vs. predicted overlay
- Team utilization heatmap and member performance cards
- Configurable alert thresholds and alert history
- Responsive dark-themed UI with custom CSS
