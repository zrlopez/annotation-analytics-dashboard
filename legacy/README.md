# Legacy Implementation

This directory preserves the original vanilla HTML/CSS/JavaScript implementation of the Performance Analytics Tool dashboard, built in May 2026.

## Why This Exists

The dashboard has been rewritten as a production-grade application. This `legacy/` folder retains the v1 source so that:

- The original design decisions and chart configurations remain accessible for reference
- The component structure and data shapes can be compared against the new architecture
- There is an auditable record of what existed before the rewrite

## What's Here

| File | Description |
|---|---|
| `index.html` | Single-page app shell; tab-based navigation, Chart.js v4 integration |
| `app.js` | All application logic: data definitions, chart rendering, real-time update simulation, CSV export, theme toggle |
| `style.css` | Full CSS custom-property design system (light/dark mode, responsive breakpoints, component styles) |

## Tech Stack (Legacy)

- **HTML/CSS/JavaScript** — no build step, no framework
- **Chart.js 4.4.4** — loaded via CDN with SRI hash
- **LocalStorage** — theme preference persistence
- **Synthetic data** — all team/performance metrics were client-side mock data; no backend

## Why It Was Rewritten

The vanilla implementation served as a proof-of-concept but had clear limitations:

1. **No real data layer** — all data was hardcoded mock objects in `app.js`
2. **No authentication** — team performance data was visible to anyone with the HTML file
3. **No backend** — no API, no database, no persistent state
4. **Scalability** — adding new metrics or chart types required modifying a single monolithic `app.js`

The rewrite addresses all of these with a proper API layer, authentication, and a component-based frontend framework.

## Status

**Archived — do not modify.** The files in this directory are preserved as-is for historical reference. All active development happens in the project root and the rewritten application.
