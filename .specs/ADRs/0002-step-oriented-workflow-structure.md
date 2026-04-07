# ADR 0002: Step-Oriented Workflow Structure

## Status

Accepted

## Context

The project is intended to be executed as a sequence of explicit workflow stages.

Both scripts and generated data need a structure that makes stage boundaries obvious, keeps artifacts easy to locate, and reduces ambiguity when multiple agents or systems work on the repository.

Without a stage-oriented layout, it becomes harder to answer basic operational questions such as:

- which script implements a given stage
- where the outputs of a given stage are stored
- which artifacts are inputs to later stages

## Decision

Adopt a step-oriented folder structure for both executable workflow logic and project data.

Use:

- `scripts/step-XX/` for scripts belonging to a workflow stage
- `data/step-XX/` for data produced or consumed by the same workflow stage

The `step-XX` naming format is used instead of `step-1`, `step-2`, and similar forms so that directories sort predictably as the number of stages grows.

Examples:

- `scripts/step-01/`
- `scripts/step-02/`
- `data/step-01/`
- `data/step-02/`

Every new workflow stage should define both:

- its script location under `scripts/step-XX/`
- its canonical data location under `data/step-XX/`

## Consequences

Benefits:

- stage boundaries are explicit
- scripts and outputs are easy to correlate
- agents can reason about the workflow with less ambiguity
- the structure scales cleanly as more stages are added

Costs:

- stage numbering must be maintained consistently
- cross-stage shared utilities may require additional conventions later
