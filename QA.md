# Quality Review Protocol

Record actual results in PROGRESS.md. This is a checklist to execute, not evidence that any check has passed.

## Discover checks

Read package scripts, CI configuration, lockfile, framework docs as needed, and existing tests. Record exact install/build/type/lint/test/preview commands. Use available project conventions. Document absent checks instead of inventing passing output.

## Content and functional checks

Verify role/dates, correct email, appropriate skill claims, project status, and real personal contributions. Test navigation anchors and sticky-header offsets. Test every featured case study, real external link, mobile menu, resume variant, copy-email success/failure, and contact path. Confirm unavailable destinations are omitted rather than simulated.

Do not submit real contact forms or send messages as a test without authorization. Use a local mock/test transport when available and label it accurately. Do not open private production admin systems to obtain screenshots.

## Responsive and visual checks

Inspect 320px, 390px, 768px, and 1440px widths. Record viewport height when capturing screenshots. Compare before/after views at the same dimensions.

Check: no horizontal overflow; readable text; sensible line breaks; correct screenshot crops; usable menus; stable layout during loading; no hidden sections; sufficient space around CTAs; no clipped dialogs. Inspect hero, featured work, experience, and contact, not just the first screen. Check long labels and 200% zoom.

## Accessibility checks

One H1; logical headings; skip link; landmark structure; meaningful link names; alt text; named icon controls; keyboard order; visible focus; menu close/escape and focus restoration. Check actual color contrast; aim for WCAG AA text contrast of 4.5:1 for normal text and 3:1 for large text. Use approximately 44px touch targets as a design goal.

Test reduced motion explicitly. Decorative canvas must not contain essential text or capture the keyboard. Automation can supplement, not replace, keyboard and visual inspection.

## 3D and animation checks

Static poster visible before scene load. No layout jump. Simulated network/load failure and WebGL unavailability retain a usable page. Mobile defaults and reduced motion work. Continuous motion can be paused, suspends offscreen/in hidden tabs, and does not restart against preferences. Ensure event listeners and GPU resources are cleaned up appropriately.

Use one compatible runtime. Verify installed React/R3F version compatibility before installing. Avoid effect chains that make the canvas mandatory for rendering the rest of the page.

## Performance checks

Measure production builds, not only a hot-reloading dev server. Record tool, device/network profile, URL, and baseline/redesign results. Compare static and 3D versions using repeatable conditions.

Targets from DESIGN.md: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 when field data exists; initial compressed app JS budget approximately 250KB where feasible, with 3D loaded separately. Treat these as targets, not promises. Lab Lighthouse scores do not establish field INP. If field data is absent, say so.

Inspect responsive images, font loading, canvas chunking, and network failures. Report concrete regressions and budget exceptions rather than claiming “optimized” without measurements.

## Evidence format

For each meaningful check record: task ID, command/action, environment or viewport, actual outcome, relevant artifact/path, and remaining issue. Never insert invented log output. Avoid keeping sensitive URLs or credentials in evidence files.
