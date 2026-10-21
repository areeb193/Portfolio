# Areeb Zakir — Portfolio Redesign Brief

Status: researched design specification; implementation has not started.
Reviewed: 15 November 2026.
Current site: https://portfolio-nu-ten-53.vercel.app/
Audience: recruiters, engineering managers, and clients evaluating backend, MERN, and React Native work.

## 1. Recommended direction

Build an original, dark editorial portfolio that presents production software as the main evidence of skill. Combine a concise introduction, large product screenshots, readable case studies, and one restrained interactive 3D hero visual.

The visual concept is **Production Studio**: warm off-white typography, charcoal surfaces, a restrained blue accent, precise grids, and small operational details such as “Currently at Mindravel Interactive.” The name is a design concept, not a business name.

The visitor should understand Areeb’s role, strongest project, and contact options within the first screen. Animation enhances those elements; it must never gate access to them.

### Research references and what to borrow

| Reference | Useful pattern | Application here |
|---|---|---|
| [Brittany Chiang](https://brittanychiang.com/) | Concise identity, structured experience, project evidence | Clear writing and hierarchy; create an original layout and visual identity |
| [Bruno Simon](https://www.bruno-simon.com/) | Distinctive Three.js interaction | A memorable, contained hero scene rather than navigation through a game |
| [Magic UI Bento Grid](https://magicui.design/docs/components/bento-grid) | Flexible cards with different visual weights | One featured project plus smaller supporting cards |
| [Aceternity 3D Card](https://ui.aceternity.com/components/3d-card-effect) | Pointer-driven perspective | Optional mild tilt on screenshot surfaces only |

These are selected references, not an objective ranking of all portfolios. The recommended combination is a design judgment tailored to Areeb’s current experience. No single ready-made Markdown template represents this exact design; this file is the custom implementation brief.

## 2. Live-site audit

Method: inspected the public desktop page visually and read its rendered accessibility content. Repository code, actual mobile rendering, contact delivery, and performance measurements were not audited. Treat diagnoses that require those checks as implementation tasks, not proven defects.

| Priority | Observed condition | Required change |
|---|---|---|
| P0 | Mindravel role is absent | Add Associate Software Engineer, Aug 2026–Present, Lahore, on-site |
| P0 | Optimum is dated Jan–Feb 2025 on the site; updated CV says Jun–Jul 2025 | Use Jun 2025–Jul 2025 consistently |
| P0 | Trifaar is dated Mar–Jun 2026 on the site; updated CV says Feb–May 2026 | Use Feb 2026–May 2026 consistently |
| P0 | Intro/about and skills emphasize Azure and Terraform | Remove Azure, AKS, Terraform, and Ansible from professional positioning, matching the approved CV edits |
| P0 | Footer displays `areebzakir1114@gamil.com`; its link resolves to `#` | Use `mailto:areebzakir1114@gmail.com`; add a working copy-email action |
| P0 | “Stride Zone” describes fitness/GPS work but links to a shoes-store repository | Verify the actual project; align title, screenshot, description, and link before publication |
| P1 | Hero contains a long paragraph and a dominant portrait | Replace with two short sentences, clear CTAs, and a smaller portrait in About |
| P1 | No section navigation or prominent project/resume CTA was visible in the hero | Add sticky navigation, View Work, and Resume actions |
| P1 | Projects appear as a long series of similarly weighted rows | Feature three strong projects; move the rest into an expandable archive |
| P1 | Some screenshots are small or generic stock photos | Use genuine project captures with consistent crops |
| P1 | Body text and purple tags appear muted against the dark background | Measure and improve contrast; use named design tokens |
| P1 | Technology section is a large wall of logos | Group skills by capability, with readable names and project evidence |
| P1 | Rendered heading outline mixes multiple H1s and H6 project titles | Use one H1; H2 sections and H3 project/experience titles |
| P2 | Personal social icons occupy the first visible navigation area | Prioritize GitHub, LinkedIn, Resume, and email; personal profiles may live in the footer |
| P2 | A detailed street address is displayed | Use “Lahore, Pakistan” in the redesigned contact area |

Some scrolled content appeared after a delay. Investigate animation timing and ensure sections remain visible if animation fails; this observation alone does not establish a rendering bug.

## 3. Information architecture

Order: navigation → hero → selected work → experience → capabilities → about → contact → footer.

### Navigation

Desktop: AZ wordmark, Work, Experience, About, Contact, Resume.
Mobile: wordmark, accessible menu button, compact resume link. Use a Sheet component for the menu. Add a skip-to-content link, section anchors, active-section indication, and scroll offsets beneath the sticky header.

Resume should open a small menu: General Software Engineer, MERN Stack, React Native. Use the approved PDFs. Ensure public download URLs are deployed assets, not scratch or local filesystem links.

### Hero

Eyebrow: **Associate Software Engineer · Mindravel Interactive**

Headline: **I build the systems behind better digital products.**

Supporting text: **I’m Areeb Zakir, a software engineer in Lahore building backend services, production dashboards, and cross-platform mobile apps. My current work includes Node.js, PostgreSQL, Amazon Aurora, MongoDB, and Valkey.**

Primary CTA: View selected work.
Secondary CTA: Download resume.
Small links: GitHub / LinkedIn / Email.

Use a 55/45 text/visual split on desktop. Keep the headline to two or three lines, with generous leading. On mobile, text and CTAs come before any illustration. Do not advertise “open to work” or invent availability; use the verified current-employment label.

### Selected work

Show three featured projects with large screenshots:

1. **Production Insights & Admin Dashboard** — PostgreSQL, Valkey, REST APIs. Explain the production context, Areeb’s contribution, data access, and insights workflows. Publish only approved screenshots with synthetic data. Do not invent a project/company name or expose private infrastructure.
2. **Digital Invoicing System** — explain invoice creation, tracking, and dashboard workflows. The existing CV states 100+ users; retain this as a user-provided claim, and verify before public publication if its meaning or freshness is uncertain. Avoid public client pricing. Confirm framework labels because the live site and CV differ.
3. **Wevibe or Libera** — prefer Wevibe when a shareable visual and contribution description are available; otherwise use the clearly labeled Libera prototype. Distinguish prototype, MVP, and production accurately.

Optional archive: INTERNFLOW, SwiftCart, Fitness Pro, M.A. Traders, agency work, JobLens AI. Resolve mismatched names/links before inclusion. De-emphasize the old portfolio and basic store-management exercise. Remove the Azure/Terraform infrastructure item from the featured selection to match the updated positioning.

Every featured card includes: status, name, one-sentence problem, personal contribution, three or four technology labels, project preview, and explicit links. Use “View case study,” “Live site,” or “Source” only where a working destination exists. For private work show “Private production project” and a public-safe case study, rather than a disabled or fake demo link.

### Case-study template

Use a shareable page or existing-router route rather than hiding all detail in a modal. Include:

- Context and intended users.
- My role, team context, dates, and delivery stage.
- The problem and main constraint.
- Two or three important decisions and why they were made.
- A real screenshot or sanitized system illustration.
- Outcome, with evidence or a qualitative result when measurements are unavailable.
- Stack, links, and next-project navigation.

An architecture illustration must describe the implemented system. Keep decorative hero geometry separate from factual architecture diagrams.

### Experience

Place Mindravel first. Present two or three short contribution bullets about backend services, database workflows, Valkey, and Lightsail. Follow with Trifaar, Optimum, and a separate freelance entry. Do not imply Mindravel was a mobile-development position solely to fit a target role.

Keep existing Plasmocode work only if its relationship, dates, and ownership are verified. The current site’s 2026–Present Plasmocode entry and CV’s freelance work since 2023 should not be merged into an invented company timeline.

### Capabilities, About, and contact

Replace the logo wall with four concise groups: Backend & APIs; Databases & caching; Web & mobile; Deployment & testing. Each group should point to one piece of project evidence. No percentage skill bars.

About: 80–120 words, small authentic portrait, COMSATS degree, Lahore location, and current engineering interests. Avoid repeating the hero or listing every tool again.

Contact: “Have a product or engineering problem to discuss?” plus email, copy-email button, LinkedIn, GitHub, and resume. A contact form is optional and should only appear if delivery, validation, errors, and success states work. No decorative form that silently drops submissions.

## 4. Visual system

All values below are proposed design decisions, not measurements of the current site.

| Token | Value / rule |
|---|---|
| Page background | `#0B0F14` |
| Card surface | `#131A23` |
| Elevated surface | `#1A2430` |
| Primary text | `#F4F2ED` |
| Secondary text | `#B5BEC9` |
| Accent | `#8BBEFF` |
| Border | `#2B3645`; check non-text contrast where functionally significant |
| Display font | Manrope, weight 600–700 |
| Body font | Inter, weight 400–500 |
| Optional metadata | System monospace; avoid loading a third font solely for labels |
| Container | Maximum 1200px; 24px mobile and 40–48px desktop gutters |
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64, 96px |
| Headline | `clamp(2.5rem, 5vw, 4.75rem)`; line-height 1.05–1.12 |
| Body | 16–18px; line-height 1.6–1.75; readable text width around 60–70 characters |
| Cards | 16–20px radius; thin border; restrained shadow |
| Section separation | 80–112px desktop, 48–64px mobile |

Validate contrast for the actual foreground/background combinations. Keep links visibly identifiable without relying only on color. Use a quiet background with one small area of light, rather than a full-page animated gradient.

Responsive layouts: one column below 768px; two-column project cards where space permits; hero split at approximately 1024px. Preserve logical DOM reading order. Avoid fixed viewport-height sections that clip content on small screens.

## 5. Component and library shortlist

Choose a coherent base stack. Retain the existing framework unless a repository inspection establishes a concrete reason to change it. Do not assume the deployed React site uses Next.js.

| Component | Preferred implementation | Scope |
|---|---|---|
| Buttons, badges, menus, mobile menu | [shadcn/ui](https://ui.shadcn.com/docs/components/base/sheet) | Use one primitive family consistently; inspect existing setup before adding |
| Project grid | CSS Grid; [Magic UI Bento Grid](https://magicui.design/docs/components/bento-grid) as reference | One wide featured card and two supporting cards |
| Screenshot depth | [Aceternity 3D Card](https://ui.aceternity.com/components/3d-card-effect) or a small CSS implementation | Optional, desktop pointer only; keep action links stable |
| Hover light | [Aceternity Card Spotlight](https://ui.aceternity.com/components/card-spotlight) | Optional on the featured card; do not combine many effects |
| Entrances and transitions | [Motion](https://motion.dev/docs/react-use-reduced-motion) | One motion system; respect reduced motion |
| Hero scene | [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) + Three.js | Lazy-loaded, isolated component |
| Imported model support | [Drei useGLTF](https://drei.docs.pmnd.rs/loaders/gltf-use-gltf) | Only when a licensed GLB model is actually needed |
| Icons | Existing icon system, or Lucide React after checking dependencies | Name icon-only links accessibly; keep style consistent |

Use ordinary semantic HTML for the timeline, skill groups, and links. A library is not necessary for every component. Check component licenses, attribution obligations, pricing, framework compatibility, and existing versions before importing code. Avoid blindly running latest-version registry commands in the project.

### Existing Markdown/MDX resources for the implementing agent

- [R3F introduction source](https://github.com/pmndrs/react-three-fiber/blob/master/docs/getting-started/introduction.mdx)
- [Drei useGLTF source](https://github.com/pmndrs/drei/blob/master/docs/loaders/gltf-use-gltf.mdx)
- [Spline React README](https://github.com/splinetool/react-spline/blob/main/README.md?plain=1)

These explain library usage; they are not ready-made portfolio design specifications. Follow current stable documentation and the installed versions rather than assuming a source branch matches the project.

## 6. 3D concept: a small systems sculpture

Recommended visual: a compact isometric stack of three rounded forms suggesting application, database, and cache layers. Add one small mobile-device silhouette to connect the scene to React Native work. Build the initial scene from procedural geometry so the first version needs no externally licensed model.

The visual is illustrative, not a factual architecture map. Keep any labels as accessible HTML adjacent to the canvas. Use a blue edge light, matte charcoal materials, simple lighting, and a quiet background. No autoplay audio, particle storm, large environment texture, or full-page game navigation.

Interactions: bounded pointer tilt of roughly 4–6 degrees, a subtle highlight on hover, and a visible “Pause animation” control if any motion continues. Prefer a still scene at rest with interaction-driven rendering. If adding continuous float, use an active render loop only while visible; `frameloop="demand"` alone will not animate changing objects without invalidation.

Implementation constraints:

- Render heading, CTAs, and a static poster immediately; load 3D separately.
- Start with a static poster on mobile; allow an explicit “Enable 3D” action if appropriate.
- Respect reduced motion; show a static scene or poster and disable parallax/tilt.
- Provide WebGL failure and context-loss fallbacks that preserve the same layout.
- Pause/unmount when outside the viewport or the document is hidden.
- Keep device pixel ratio conservative; start at 1 and cap near 1.5 after measuring.
- Avoid real-time shadows and postprocessing until a measured need exists.
- Use a reserved aspect ratio to prevent layout shift.
- If decorative, hide the canvas from assistive technology; all meaningful content stays in HTML.

[React Three Fiber’s performance guide](https://r3f.docs.pmnd.rs/advanced/scaling-performance) explains on-demand rendering and adapting quality. [Motion’s reduced-motion hook](https://motion.dev/docs/react-use-reduced-motion) supports motion preferences.

Alternative: [Spline React](https://github.com/splinetool/react-spline/blob/main/README.md?plain=1) for a scene maintained visually. Verify export permissions, hosting, pricing, and loading behavior before adoption. Choose either Spline or R3F for the hero, not both.

## 7. Motion, accessibility, and performance

Design targets:

- Hover/focus transitions: 120–180ms.
- Section reveals: approximately 240–360ms; movement at most 12px; play once.
- Default content visible; no long opacity-zero wait for an observer.
- Native scrolling; no scroll hijacking or custom cursor replacement.
- Focus-visible styles, usable keyboard navigation, named controls, meaningful alt text, and a logical heading hierarchy.
- Mobile targets approximately 44px; verify zoom, text wrapping, and menu focus behavior.
- Reduced motion disables decorative transforms and continuous movement.

Proposed engineering budgets, to be validated rather than promised:

- Keep the base page independent of the 3D bundle.
- Aim for no more than 250KB compressed initial application JS where feasible for the current stack.
- Target a maximum of 1MB for any optional compressed hero model; procedural geometry is preferred.
- Optimize screenshots to AVIF/WebP with responsive sizes and explicit dimensions.
- Use a static poster immediately; show a graceful fallback on scene-load failure.
- Measure on a mobile profile and a lower-powered device when available.

Core Web Vitals goals: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile, assessed separately for mobile and desktop when sufficient field data exists. These are targets, not measured results for this portfolio. Use Lighthouse for repeatable lab comparisons; do not present its score as field INP or proof of real-world performance. Sources: [web.dev](https://web.dev/articles/vitals?authuser=4), [Google’s threshold definitions](https://web.dev/articles/defining-core-web-vitals-thresholds?authuser=1&hl=en).

## 8. Agent implementation loop

This is a staged execution plan for a future agent, not a claim that changes are already implemented.

### Loop 0 — inspect and establish a baseline

Read repository instructions; identify framework, router, package manager, versions, data sources, assets, and deployment workflow. Record existing build/test results and screenshots at 390px, 768px, and 1440px widths. Create a change checklist and preserve existing verified links. Avoid an unnecessary framework migration.

### Loop 1 — correct content and navigation

Fix contact email, experience dates, role, and stack. Audit every project link against its description. Move content to structured data. Add navigation and real resume downloads. Build and inspect before adding animation.

### Loop 2 — implement the static design

Implement tokens, typography, hero, selected work, case-study layout, timeline, capabilities, About, and contact. Use real screenshots or clearly marked development placeholders. Finish responsive layout, keyboard behavior, and useful empty/error states.

### Loop 3 — add restrained motion

Add one-time reveals, hover states, reduced-motion behavior, and optional screenshot tilt. Confirm there is no hidden content, keyboard-only loss of functionality, or mobile overflow.

### Loop 4 — add optional 3D

Implement the hero poster and lazy scene. Validate pause behavior, offscreen suspension, mobile fallback, reduced motion, WebGL failure, and load failure. Compare bundle sizes and performance before and after.

### Loop 5 — verify and refine

Run the project’s relevant checks, production build, link checks, and accessibility review. Capture the same viewports and compare against this brief. Fix the highest-impact defect, rerun the affected checks, and repeat until the acceptance criteria pass. Keep a short change/evidence log; do not repeatedly run unrelated checks that already passed.

### Stop and report conditions

Missing private project assets, uncertain ownership, contradictory job/project facts, or inaccessible deployment credentials should be recorded explicitly. Continue independent work using safe placeholders in development, but do not publish invented facts or placeholder projects. Provide a concrete preview and a list of unresolved items. Deploy only within the user’s authorized scope.

## 9. Acceptance checklist

- [ ] Current role and dates match the approved CV.
- [ ] Azure/Terraform/Ansible positioning removed consistently.
- [ ] Email is correct and every visible action has a working destination.
- [ ] Three featured projects show personal contribution and accurate delivery status.
- [ ] No private production data, invented metrics, or misleading project descriptions.
- [ ] Hero includes clear identity, current role, View Work, and Resume actions.
- [ ] Resume variants download as real public PDF assets.
- [ ] One H1; readable H2/H3 structure and accessible navigation.
- [ ] No horizontal overflow at 390px, 768px, and 1440px; also inspect at 320px.
- [ ] Keyboard and reduced-motion paths work.
- [ ] 3D can fail or be disabled without losing content or shifting layout.
- [ ] Build and relevant project checks pass, or existing blockers are documented.
- [ ] Before/after screenshots and measured performance comparison accompany the preview.

## 10. Ready-to-use agent prompt

> Read DESIGN.md and the repository instructions. Audit the existing portfolio and implement this redesign in the current framework. Work through the inspect → implement → run → visually review → fix loop. First correct the content and links, then finish the static responsive design, then add restrained motion, and only then implement the optional 3D hero with fallbacks. Preserve verified project facts and use the approved CV for role/dates/skills. Record unresolved content questions rather than inventing answers. Produce a reviewable preview, screenshots at the specified widths, and a concise validation report. Do not assume permission to expose private work or publish to production.
