# Performance Analytics Tool

**Performance Analytics Tool** is an interactive, single-page dashboard for real-time monitoring, analysis, and optimization of team and process performance. This project showcases advanced data visualization, predictive analytics, and operational insights as part of my technical portfolio.

## Features

- **Real-Time Throughput Monitoring:** Hourly and historical tracking with live charts and trends
- **Error Classification & Reduction Tracking:** Categorization by type and severity, trend visualization, and resolution time analysis
- **Team Productivity Metrics:** Individual and team KPIs, task and utilization insights, workload heatmaps
- **Predictive Capacity Planning:** Data-driven resource forecasts, bottleneck identification, scenario modeling
- **Customizable Alerts & Reporting:** Configurable thresholds, notifications, export-ready reports
- **Modern UX/UI:** Responsive, dark-themed, accessible SPA with intuitive tab navigation

## Tech Stack

- **Frontend:** HTML, CSS (custom), JavaScript (Chart.js)
- **Architecture:** Single-page app, modular components, simulated real-time data flows

## Stability & Code Quality

This project underwent a full bug audit and patch pass. Key improvements include:

- **Safe chart initialization** — All Chart.js instances are destroyed before re-creation, preventing "Canvas is already in use" errors on re-renders
- **Resilient tab loading** — Tab chart loaders are wrapped in `try/catch`; a failed init clears the reference so the next click recovers cleanly
- **Anchored real-time updates** — Live KPI updates oscillate around fixed base values instead of compounding, preventing unbounded drift
- **Immutable source data** — Sort operations use `.slice()` to avoid mutating the original data arrays
- **Null-safe mini charts** — The capacity mini chart filters out `null` actuals before rendering
- **Visible canvas errors** — A centralized `getCanvas()` helper logs a clear `console.error` for any missing DOM element instead of failing silently
- **Calibrated productivity axis** — Team productivity y-axis is capped at 110 with a labeled target of 100, making above-target values contextually clear
- **Correct dashed forecast line** — `borderDash` is properly applied to the predicted dataset in the capacity forecast chart

See [CHANGELOG.md](./CHANGELOG.md) for the full patch history.

## Usage

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Explore performance, errors, team analytics, planning, and alerts via tabbed navigation.

## More Projects

Explore additional analytics and web solutions at [zrl.dev](https://zrl.dev).

## Screenshots

<details>
<summary>View screenshots (6)</summary>

<br>

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/f9e8ee67-8847-4bad-8609-1778954118ee" width="320" alt="Overview"/></td>
    <td><img src="https://github.com/user-attachments/assets/c6713a27-6e69-4213-aa47-dccb413088fd" width="320" alt="Throughput"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/15b59fca-348b-4a75-8604-eed17c51614c" width="320" alt="Errors"/></td>
    <td><img src="https://github.com/user-attachments/assets/e8634533-9ab3-49a2-8184-155e5988ef91" width="320" alt="Team Metrics"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/1a3ff948-175a-4f86-bf64-b17b8ada5f72" width="320" alt="Capacity Planning"/></td>
    <td><img src="https://github.com/user-attachments/assets/0eb932c4-8b58-463e-9dcd-ef8a908848c8" width="320" alt="Alerts"/></td>
  </tr>
</table>

</details>

## License

MIT License © 2025 Zachary Ryan (Rothschild) Lopez.   
See `LICENSE` for details.
