# Review evidence

Date: 21 October 2026 (client date).

- `render-check.json`: React server rendering of the homepage, three case studies, and missing-project recovery. Checks landmarks, H1 count, internal destinations, asset existence, and removed stale copy. This is not a browser test.
- `quality-check.json`: measured contrast for the implemented UI color pairs and gzip sizes from the baseline and redesigned production builds. These are bundle measurements, not field performance results.
- The user supplied five before screenshots in the conversation: hero, technologies, projects, experience, and About. They show the old design and corroborate the existing portrait. No mobile baseline or independently captured before screenshots are available.
- Four new original SVG illustrations and the resized portrait were visually inspected as assets. SVGs were rendered with resvg 2.6.2. This does not establish responsive page layout.
- Browser inspection at 320, 390, 768, and 1440 px, actual keyboard interactions, zoom, reduced-motion emulation, and Lighthouse remain BLOCKED. Automatic approval review rejected localhost:5173 despite the user's explicit approval. No alternate port, browser, or raw browser-control workaround was used.

## Inspect locally

```text
npm ci
npm run dev
```

Use the Local URL Vite prints (the implementation session used http://localhost:5173). Case studies use `#/work/production-insights`, `#/work/digital-invoicing`, and `#/work/libera`. Check the archive, mobile navigation, Escape/focus restoration, email copying, and a missing case-study URL.

```text
npm run build
npm run lint
npm test
npm run check:render
npm run check:quality
```

No approved current résumé PDF is available. The old root PDF remains untouched; the UI offers an honest email request instead of a fake download. Add approved PDFs to public/resumes and populate RESUMES in src/constants/index.js when supplied.

The reviewable implementation is uploaded on a dedicated Git branch. No production deployment is claimed.
