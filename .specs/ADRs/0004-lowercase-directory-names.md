# ADR 0004: Lowercase Directory Names

## Status

Accepted

## Context

The repository now contains multiple top-level and nested directories that will be referenced by scripts, agents, and documentation.

Mixed-case directory names increase the chance of inconsistency across documentation, automation, and future tooling. A single naming rule reduces ambiguity and makes path conventions easier to remember and validate.

## Decision

All directories in this repository must use lowercase names.

This rule applies to:

- top-level directories
- step-oriented directories
- product directories under `artifacts/`
- feature directories under `artifacts/`

Examples:

- `knowledge/`, not `Knowledge/`
- `radar/`, not `Radar/`
- `data/step-01/`
- `artifacts/compute-engine/instance-groups/`

## Consequences

Benefits:

- repository paths are consistent
- documentation and automation use a single convention
- path matching is simpler across tools and environments

Costs:

- existing mixed-case directories must be renamed
- future contributors must preserve the naming rule
