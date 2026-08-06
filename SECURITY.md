# Security Policy — annotation-analytics-dashboard

## Supported Versions

| Version | Supported |
|---------|------------------|
| `main`  | ✅ Active support |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

- **GitHub Private Vulnerability Reporting** (preferred):
  Navigate to **Security → Advisories → Report a vulnerability**.
- **Email:** noreply@users.noreply.github.com

Acknowledgment: **72 hours.** Status update: **7 days.**

## ⚠️ Data Privacy Note

This dashboard must not contain real employee names, IDs, or performance metrics.
All data rendered in the app must be anonymized or synthetic.
Real workforce analytics data must be served via an authenticated backend API—
never embedded in client-side JavaScript.

## Scope

In-scope:
- PII/employee data exposure in client-side JavaScript
- XSS vulnerabilities in dashboard rendering
- Missing authentication on data endpoints
- Dependency vulnerabilities in `package.json`

## Security Controls Active

| Control | Status |
|---------|--------|
| Employee PII removal | ✅ Synthetic data only |
| Content Security Policy | 🚧 Planned |
| Authenticated API backend | 🚧 Planned |
| Dependency scanning | 🚧 Planned (npm audit) |
