# GCP Radar: repository guide

A staged evidence pipeline for mapping Google Cloud products, features, lifecycle changes, security capabilities, and IAM requirements. It collects official Google sources, validates feature evidence, and produces product cards and reports.

## Layout

| Path | Responsibility |
| --- | --- |
| `scripts/` | Stage-specific orchestration and validators. |
| `data/` | Inputs and intermediate outputs organized by step. |
| `artifacts/` | Validated evidence organized by product and feature. |
| `radar/` | Reports derived from validated artifacts. |
| `knowledge/` | Reusable research and source mappings. |
| `docs/` | Human manual, pipeline contracts, and maintenance. |
| `.specs/` | Workflow specifications and architecture decisions. |

## Documentation policy

- Keep the root `README.md` focused on purpose, critical constraints, and the first useful action. Put detailed procedures in `docs/`.
- Maintain `docs/README.md` as the navigation index whenever a guide is added or moved.
- Preserve existing specification, ADR, skill-contract, and evidence locations. Link to their owners instead of copying authoritative content.
- Keep implementation, configuration, source data, and generated output separate. Do not create empty folder hierarchies without a concrete need.
- Use portable relative links. Update both outgoing links and inbound references when moving a document.
- Document prerequisites, commands, expected outcomes, and limitations. Never describe an unrun check as verified.

## Change workflow

1. Read `AGENTS.md`, this index, and the relevant source contract.
2. Inspect `git status` and preserve pre-existing changes and staged files.
3. Make a focused change and update affected documentation in the same change.
4. Run the applicable checks below, inspect the diff, and record any unavailable prerequisite.
5. Stage explicit paths. Publish only when authorized; do not force-push or merge unrelated work.

## Validation

Run `node --check` on changed JavaScript/ZX files and the validator documented by the affected `scripts/step-XX/README.md`. For documentation-only changes, check local links, command paths, and `git diff --check`; do not rerun acquisition, IAM extraction, or model stages.

## Data and operating boundaries

Use official Google sources as final evidence, retain provenance and prior evaluation outputs, and never commit populated `.env` files or cloud/API credentials. A linked worktree is not a separate product: publish one reviewed change to the shared remote main without merging unrelated branch histories.

[Back to the documentation index](README.md).
