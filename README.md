# JEBI Trust — jebitrust.com

Trust infrastructure for the coffee chain. Three codes (batch · asset · token), one ledger, nine admission checks: all of them, or no token.

Static multi-language site (EN / 简体中文). No build step — plain HTML + shared CSS/JS.

## Pages

| File | Content |
|---|---|
| `index.html` | Thesis: coffee's proof problem, the Verified Event unit, six revenue lines, the nine checks, refusals; embedded concept film (87s, 8 chapters) |
| `assets/video/` | `jebi-data-engine.mp4` (87s, 1080p, h264+aac, ~4.3MB) + poster.jpg; chapter times in `assets/js/film.js` mirror `_video/film.html` scene starts |
| `data.html` | Data engine: pod-level primary data → eight sectors, mutual-empowerment matrix, four compounding loops with kill conditions, falsifiers, investor lenses |
| `structure.html` | Entity map, separation of duties, Trust Charter (9 articles), governance, intercompany contracts |
| `trust.html` | Admission test in full (9 checks, evidence + fail condition), access tiers, disclosure ledger, post-admission rules |
| `assets.html` | Asset ladder: receipt → carbon → equipment → IP → cash flow → REIT, plus the "never tokenise" list |
| `roadmap.html` | Gates G0–G4 with exit evidence, kill criteria, falsifiable assumptions, failure modes |

## Logo

`assets/img/logo.svg` — hexagon seal + three code bars (batch / asset / token) + ledger spine, with the wordmark set at **40px character size** in a 264×64 viewBox. Rendered 1:1 (64px tall) in the header so the type stays at true 40px; `favicon.svg` is the mark alone.

## Stack

- Hand-written HTML, one CSS design system (`assets/css/style.css`), X.com-adjacent dark theme
- `assets/js/i18n.js` — EN/中文 toggle, persisted in `localStorage`, fires `langchange` for chart re-render
- `assets/js/chrome.js` — shared floating header/footer, active-nav state
- `assets/js/film.js` — index film player: cover click, hero CTA, chapter seek/highlight; native controls only while playing
- No JS framework, no chart library, no runtime dependencies
- GitHub Pages, custom domain `www.jebitrust.com` (see `CNAME`)

## DNS (registrar-managed)

- `A` on `@` → 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
- `CNAME` on `www` → `erikcywong.github.io`

## Status

Pre-launch commercial & compliance planning framework. Not legal, tax or investment advice; not an offer of securities. All figures are design targets.
