# Bounded Engineering Loop

A loop is a sequence of evidence-driven edits, not an infinite retry mechanism.

## Each iteration

1. Read the checkpoint and choose the highest-priority unblocked task from TASKS.md.
2. Inspect the affected code and current behavior. State one observable success condition.
3. Implement the smallest coherent change that satisfies it.
4. Run relevant available checks; record actual commands and outcomes.
5. Review the behavior visually when UI changed, at the required viewport sizes. Inspect console/runtime failures if relevant.
6. Compare results with CONTENT.md, DESIGN.md, and ACCEPTANCE.md. Fix the highest-impact failure rather than accumulating unrelated effects.
7. Mark the task done only with evidence. Update PROGRESS.md, then choose the next task.

## Task states

TODO: not started. IN_PROGRESS: actively being implemented. BLOCKED: needs specific missing input or capability. DONE: implemented and verified against the task's condition. DEFERRED: optional work excluded with a recorded reason. A blocked or deferred required release gate is not a pass.

Default to one IN_PROGRESS task at a time. If independent work proceeds around a blocker, leave that blocked task explicit.

## Retry budget

Try up to three materially different targeted fixes for the same failure. Investigate underlying causes rather than repeating identical commands. If still unresolved, record reproduction, attempts, evidence, and next action. Continue independent tasks. This limit is a checkpoint trigger, not permission to call broken work complete.

Review scope after five substantive iterations on one task. Split it if needed. Stop adding optional polish when it would delay correcting a required defect.

## When tools or inputs are missing

No source: report the missing checkout and avoid invented implementation.
No browser: complete available code/build checks and label visual QA unrun; do not fabricate screenshots.
Missing private screenshot: use a safe generic illustration in development and record the publication blocker.
Missing credentials: prepare everything reviewable locally; do not speculate about deployment state.

Do not stop solely because a routine implementation choice needs judgment. Choose a reversible approach and record material assumptions. Ask for a missing fact only when the dependent work cannot be done correctly without it.

## Context and runtime checkpoints

Before a run ends, save: current task, changed files, last verified state, failures, actual commands, preview process details if relevant, and next executable action. Never record credentials, tokens, or sensitive environment values. A later run resumes from that checkpoint and checks the actual working tree.

Do not claim the agent is still working after its response ends. No scheduler, automatic restart, or background persistence is configured by these documents.

## Completion

Implementation complete: required code and content tasks pass their checks.
Review-ready: implementation is inspectable, remaining limitations are explicit, and required visual checks are complete or clearly blocked.
Published: only after an authorized deployment succeeds and the actual deployed URL is verified. These states are distinct.
