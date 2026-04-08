# ADR 0004: CLI-First Orchestration Pattern

## Status

Accepted

## Context

The repository workflow will need to coordinate multiple external tools over time, including Google Cloud CLIs, extraction utilities, validators, and later stage-specific helpers.

A heavy in-process implementation style would increase script complexity early and make orchestration harder to inspect. For the current project phase, the faster path is to keep stage scripts small and let external tools do the work directly.

The project also prefers scripts that are easy to read and modify quickly, even when that means accepting less defensive handling or less abstraction than a more robust implementation might include.

## Decision

Adopt a CLI-first orchestration pattern for workflow scripts.

The default script shape should be:

- keep the script as small as possible
- keep the script easy to read from top to bottom
- prefer shorter code over more defensive code when the tradeoff is acceptable
- invoke external tools directly through the shell or process execution
- capture structured outputs such as JSON into variables when needed
- print or persist results with minimal transformation
- add logic only when orchestration, validation, or compatibility requires it

This means the preferred implementation for an early-stage script is a thin orchestrator around commands such as:

- `bq`
- `gcloud`
- `zx`
- other external tools introduced later in the workflow

## Consequences

Benefits:

- scripts stay easy to read and delegate
- scripts stay short and easy to modify
- orchestration remains explicit
- external tools remain the primary execution surface
- iteration speed is higher in early workflow stages

Costs:

- some workflows will depend on the behavior and availability of external CLIs
- portability details such as quoting and shell behavior must be handled carefully
- some scripts may be less robust or less defensive than a production-hardened alternative
