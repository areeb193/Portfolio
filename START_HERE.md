# Start Here

Copy the files into the portfolio repository as described in README.md. Merge existing instruction files first. Then paste the following prompt into Codex with that repository open.

## Kickoff prompt

```text
Implement my portfolio redesign using this repository's instruction files and the supplied Markdown pack.

Read AGENTS.md, CONTENT.md, DESIGN.md, IMPLEMENTATION_PLAN.md, TASKS.md, LOOP.md, QA.md, ACCEPTANCE.md, DECISIONS.md, and PROGRESS.md. Inspect the actual project before choosing tools or commands. Preserve the existing framework and working functionality unless there is a documented reason to change them.

Work through the queue autonomously within the authorized redesign scope. Use a bounded inspect → implement → run → visually review → fix loop. Begin by auditing the repo and correcting facts/links. Complete the static responsive design before optional effects. Add the compact 3D hero only with loading, reduced-motion, mobile, and WebGL-failure fallbacks.

Use my Associate Software Engineer role at Mindravel and the approved resume facts. Do not invent metrics, screenshots, project details, or delivery status. Record unresolved content items and continue unrelated work. Do not stop after writing a plan: implement a reviewable result, run the relevant checks, and correct failures.

Update TASKS.md and PROGRESS.md as you complete meaningful work. Continue until the acceptance criteria are met or a concrete blocker prevents further progress. If context or runtime limits approach, save a clear checkpoint and report the next executable task. Do not claim that work is continuing after the run ends.

Before finishing, provide a local preview when supported, actual validation results, before/after screenshots where available, remaining limitations, and the exact changed files. Do not publish, push to a production branch, or trigger a production deployment without authorization. If I already gave explicit authorization for a specific action in this session, use it without asking again.
```

## Resume prompt

```text
Resume the portfolio redesign from PROGRESS.md. Inspect the current working tree and applicable instructions. Reconcile the task states with the actual code and evidence; preserve existing user edits. Continue the next unblocked task using LOOP.md. Do not repeat completed work without a concrete reason. Validate the affected behavior and update the checkpoint before ending.
```

## If the source is unavailable

Report that implementation needs the portfolio source checkout or uploaded project. Do not reconstruct the source from the public site and pretend it is the original repository. The live site is a design/content reference.
