# JEBI Trust — jebitrust.com

Trust infrastructure for the coffee chain. Three codes (batch · asset · token), one ledger, one listing floor: **PCX 40**.

Static multi-language site (EN / 简体中文). No build step — plain HTML + shared CSS/JS.

## Pages

| File | Content |
|---|---|
| `index.html` | Thesis: coffee's proof problem, the Verified Event unit, six revenue lines, refusals |
| `structure.html` | Entity map, separation of duties, Trust Charter (9 articles), governance, intercompany contracts |
| `pcx.html` | Provenance Confidence indeX: 5×20 rubric, bands & gates, worked example (radar), surveillance, disclosure ledger |
| `assets.html` | Asset ladder: receipt → carbon → equipment → IP → cash flow → REIT, plus the "never tokenise" list |
| `roadmap.html` | Gates G0–G4 with exit evidence, kill criteria, falsifiable assumptions, failure modes |

## Stack

- Hand-written HTML, one CSS design system (`assets/css/style.css`), X.com-adjacent dark theme
- `assets/js/i18n.js` — EN/中文 toggle, persisted in `localStorage`, re-renders ECharts on `langchange`
- `assets/js/chrome.js` — shared floating header/footer, active-nav state
- ECharts 5 via jsDelivr (radar + bar charts, graceful text fallback offline)
- GitHub Pages, custom domain `www.jebitrust.com` (see `CNAME`)

## DNS (registrar-managed)

- `A` on `@` → 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
- `CNAME` on `www` → `erikcywong.github.io`

## Status

Pre-launch commercial & compliance planning framework. Not legal, tax or investment advice; not an offer of securities. All figures are design targets.
