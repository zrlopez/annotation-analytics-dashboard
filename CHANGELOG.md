# Changelog

All notable changes to this project are documented here. This project follows [Semantic Versioning](https://semver.org/).

---

## [1.4.0] — 2026-08-05

### Repository

- **Repo rename** — GitHub repository renamed from `performance-analytics-tool` to `annotation-analytics-dashboard` to match the rebuilt project name. GitHub automatically redirects all old URLs.
- **CI workflow added** — New `.github/workflows/ci.yml` runs on every push and pull request to `main`: installs dependencies, runs TypeScript type-check (`tsc --noEmit`), and executes the Next.js build (`next build`). Ensures the app compiles cleanly before any merge.
- **README CI badge** — Added live CI status badge linking to the new workflow.
- **Copyright year corrected** — Updated from 2025 → 2026 in README footer.

---

## [1.3.0] — 2026-05-22

### Improvements

- **Theme persistence** — `localStorage.setItem('theme', newTheme)` now saves the user's dark/light preference across page reloads. Previously the theme reset on every visit.

- **CSV export guard** — `exportThroughputCSV()` now checks for `data.throughputData.daily` before execution, logging a `console.error` and returning early if data is unavailable. Prevents a silent crash if export is triggered before data loads.

- **Upfront canvas resolution in `loadThroughputTab`** — All four canvas contexts (`hourly`, `daily`, `process`, `peak`) are now resolved at the top of the function with a single combined null check. Previously each canvas was checked mid-function with sequential early returns, allowing partial renders where some charts loaded and others failed silently.

- **`.getContext('2d')` fix across `loadErrorsTab`** — `errorClassification`, `errorTrend`, `errorSeverity`, and `resolutionTime` charts were being passed raw canvas elements instead of 2D rendering contexts. Fixed to use `.getContext('2d')` consistently, matching Chart.js expectations and preventing errors in strict mode.

### Documentation

- Screenshots reorganized into `screenshots/` folder with descriptive sequential filenames (`00-live-demo`, `01-overview`, etc.)
- README updated to reference local screenshot paths instead of GitHub attachment URLs
- Updated screenshots reflect the rebuilt Next.js version of the dashboard

---

## [1.2.0] — 2026-05-22

### Major Changes

- **Full rebuild as Annotation Analytics Dashboard** — Project migrated from HTML/CSS/JavaScript (Chart.js) to **Next.js 14 + TypeScript + Recharts**. The rebuild introduces live 5-second KPI state updates, a custom `useLiveKpis` React hook, Tailwind CSS styling, Framer Motion animations, and accessible ARIA-labeled tab navigation. The original single-page app is superseded by this version.

### Features Added in Rebuild

- Live KPI cards: throughput, error rate, team efficiency, capacity utilization — updating every 5 seconds with independent ±2.5% variation per metric
- Alert threshold engine syncing live to KPI values with automatic warning state detection
- Team performance view: per-member productivity cards, task completion bar charts, weekly utilization heatmap
- Capacity forecasting tab with historical vs. predicted trend chart and forward-looking forecast bands
- Dark/light theme toggle with instant transition
- Full ARIA accessibility: labeled tabpanels, keyboard navigation support

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

First public release of the **Performance Analytics Tool** — a standalone single-page application built with HTML, CSS, and JavaScript (Chart.js).

- Interactive single-page dashboard with six tabbed views: Overview, Throughput, Errors, Team Metrics, Capacity Planning, and Alerts
- Real-time KPI cards with live 5-second update cycle
- Chart.js visualizations: line, bar, pie, doughnut charts with mini sparklines
- Predictive capacity forecast with historical vs. predicted overlay
- Team utilization heatmap and member performance cards
- Configurable alert thresholds and alert history
- Responsive dark-themed UI with custom CSS
- MIT License, README, and initial documentation

> **Note:** This version has been superseded by the Next.js rebuild in v1.2.0, now named **Annotation Analytics Dashboard**.
