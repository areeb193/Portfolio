# Portfolio Work Queue

Updated: 21 October 2026. Code implementation is reviewable; blocked release gates are not passes. Evidence: PROGRESS.md and evidence/.

| ID | Priority | Task | Depends on | State | Evidence / remaining condition |
|---|---|---|---|---|---|
| T01 | P0 | Inspect source, instructions, stack, scripts, working tree | Source checkout | DONE | React 18/Vite 5, npm lockfile, source and initial user edits recorded |
| T02 | P0 | Capture baseline checks and responsive views | T01 | BLOCKED | Baseline build/lint passed; user supplied desktop screenshots. Independent responsive captures blocked by browser approval review |
| T03 | P0 | Correct role, dates, skills, email, and content model | T01 | DONE | CONTENT.md reflected in server-rendered HTML; stale positioning/address removed |
| T04 | P0 | Resolve project names, links, status, and publication-safe assets | T01 | DONE | Three approved projects; public Libera/source links verified; invoicing site HTTP 200 and React root evidence; sample illustrations labeled |
| T05 | P1 | Add tokens, type scale, containers, and semantic structure | T02 checks | DONE | Shared CSS; one H1/main per route; 12 measured contrast pairs pass |
| T06 | P1 | Build navigation, hero, contact CTAs, resume menu | T03, T05 | BLOCKED | Implemented; real anchors and contact URLs verified in HTML. Mobile keyboard/touch validation blocked; actual résumé menu awaits PDFs |
| T07 | P1 | Add actual approved resume assets | Asset availability, T06 | BLOCKED | Approved filenames absent. Root PDF is outdated and left untouched. Honest résumé-request email action shipped |
| T08 | P1 | Build featured project grid and case studies | T04, T05 | DONE | Three shareable hash routes, next-project navigation, missing-route recovery, public-safe assets and contribution copy; unit/server-render checks pass |
| T09 | P1 | Build experience, capabilities, About, footer | T03, T05 | BLOCKED | Content and structure implemented/checked; responsive layout readability still requires browser inspection |
| T10 | P1 | Validate keyboard, touch, focus, copy-email, reduced motion | T06, T08, T09 | BLOCKED | Clipboard success/denial/unsupported tests pass; native dialog and focus code reviewed; browser interactions and motion emulation unrun |
| T11 | P2 | Add restrained entrances and optional card tilt | T10 | DEFERRED | Only short CSS hover transitions shipped; content visible by default. No scroll entrance or pointer tilt |
| T12 | P2 | Add optional lazy 3D with static fallback | T10 | DEFERRED | Original static SVG sculpture shipped; no WebGL dependency. Cannot validate required WebGL fallback gates in this session |
| T13 | P1 | Measure and fix layout/performance regressions | T11/T12 deferral | BLOCKED | JS gzip 99,076 → 55,207 bytes. CSS 3,345 → 5,420 bytes. Layout checks, Lighthouse and field metrics unavailable |
| T14 | P1 | Final review, checkpoint, preview, acceptance report | Required tasks | DONE | Accurate partial/reviewable handoff, changed-file manifest, reproducible commands, explicit blockers |
| T15 | P1 | Commit and upload to GitHub | User authorization, T14 | DONE | Branch feat/portfolio-redesign pushed and remote SHA verified; see PROGRESS.md |

Required uncompleted gates remain blockers for a fully verified release. No background continuation is claimed.
