# Implementation Plan

This plan is framework-neutral until the repository is inspected. Actual commands, paths, and deployment conventions belong in PROGRESS.md after discovery.

## Phase A — baseline and corrections

Inspect repo rules, working tree, dependencies, scripts, routes, and assets. Identify where content lives. Run available baseline checks. Capture current desktop/mobile views when browser tooling permits. Correct experience, email, skills, and mismatched links using CONTENT.md.

Deliverable: factual content model and a baseline report. Dependency: source checkout.

## Phase B — static UI and content structure

Implement shared tokens, type scale, container, navigation, hero CTAs, featured work, readable case studies, experience timeline, capability groups, About, and contact. Preserve existing framework/routing and meaningful URLs. Add the approved resume files when available.

Suggested component responsibilities, adapted to existing conventions:

- SiteNavigation: section links, mobile menu, resume selection.
- Hero: heading, current role, CTAs, immediate static visual.
- FeaturedWork / ProjectCard: screenshot, role, result, real links.
- ProjectCaseStudy: context, contribution, decisions, outcome.
- ExperienceTimeline / Capabilities / About / Contact.
- HeroVisual: static poster with optional lazy 3D child.

Keep content in an existing data layer or a typed local data module; no database needed for a static portfolio. Do not create both a modal-only case study and a duplicate route without purpose.

Deliverable: usable responsive page before animation. Dependency: Phase A.

## Phase C — interaction and accessibility

Add short transitions, current-section feedback, keyboard support, reduced-motion behavior, and optional subtle card tilt. Make copy-email success depend on actual clipboard success; provide manual selection fallback. A contact form requires functioning delivery and explicit states.

Deliverable: all primary paths work by keyboard and touch. Dependency: Phase B.

## Phase D — optional 3D

Implement one compact procedural systems sculpture with React Three Fiber if compatible with the existing React version. Start from the static poster. Keep core content independent of the scene. Handle mobile, reduced motion, loading, failure, hidden tabs, and offscreen behavior. Compare performance with the static baseline.

If 3D cannot meet the usability/performance gates, ship the static visual in the reviewable build and record the deferred enhancement. Do not let this optional feature block correcting content or delivering a working page.

Deliverable: measured, optional enhancement. Dependencies: B/C and compatible dependencies.

## Phase E — reviewable delivery

Apply QA.md, resolve failures, and record evidence. Update acceptance states and document remaining limitations. Provide local preview details or an artifact supported by the environment. Deployment is separate and follows user authorization.

Deliverable: verified changes, preview, and accurate handoff. Dependency: relevant prior gates.
