# Completion and Release Gates

Updated: 21 October 2026. **Reviewable implementation with explicit limitations; not a fully verified release.** Evidence: [PROGRESS.md](PROGRESS.md), [render checks](evidence/render-check.json), [quality checks](evidence/quality-check.json).

## Required implementation gates

- [x] G01 Current Mindravel role and internship dates match CONTENT.md. Server-rendered content inspected.
- [x] G02 Azure/AKS/Terraform/Ansible claims removed from active professional positioning. Server-render checks enforce this.
- [ ] G03 Correct email and working primary navigation/contact links. Destinations resolve in rendered HTML; actual browser navigation/clipboard UI checks are blocked.
- [x] G04 Three featured projects accurately describe stage and personal contribution; public-safe, explicitly labeled sample illustrations only.
- [x] G05 Mismatched shoes-store/fitness project omitted. Existing old PDF identifies a shoe-shopping project, supporting the decision not to retain the fitness description.
- [ ] G06 Clear hero, View Work CTA, and real resume downloads. Hero and CTA implemented; approved résumé PDFs are missing. Request-résumé email is offered honestly.
- [ ] G07 Responsive layout at 320, 390, 768, and 1440px with no horizontal overflow. CSS implemented; browser measurement blocked.
- [ ] G08 Keyboard, focus, headings, alt text, and measured contrast reviewed. One H1/main per route, alt attributes, and 12 contrast pairs pass. Actual keyboard/focus behavior remains unrun.
- [ ] G09 Reduced-motion and animation-failure paths preserve usable content. Static content and reduced-motion CSS reviewed; browser preference/failure simulation unrun.
- [x] G10 Build, lint, six unit tests, server-render checks, quality checks, and whitespace checks pass. Baseline failures/warnings recorded separately.
- [ ] G11 Before/after visual evidence and repeatable performance comparison. User's before screenshots and measured production bundle comparison available; after-page screenshots and lab runtime comparison blocked.
- [x] G12 No invented metrics, fake links, private production data, or development placeholders in delivery. Final illustrations explicitly identify sample/concept content.

## Optional enhancement gates

- O01 N/A: no WebGL/3D runtime ships. Original static sculpture retained; see DECISIONS.md.
- O02 N/A: no pointer-driven card tilt ships. Small CSS image hover scale is disabled by reduced-motion CSS.
- O03 N/A: no contact form. Working mailto links and a clipboard action are provided; no test messages sent.

## Reviewable delivery

- [x] D01 Changed files, preview instructions, exact checks, and blockers recorded in PROGRESS.md and evidence/.
- [x] D02 TASKS.md and PROGRESS.md distinguish implementation, verification, and blockers.
- [x] D03 User edits preserved; React/Vite retained. Only existing prop-types package promoted to a direct dependency; no framework/dependency upgrades.
- [x] D04 Review branch pushed to GitHub and remote commit SHA verified; see PROGRESS.md.

## Git upload and production release

The user explicitly requested Git upload. The work is prepared on `feat/portfolio-redesign` so open résumé and browser validation gates remain visible during review. Git upload is distinct from a production deployment; no production deployment or live-site update is claimed.
