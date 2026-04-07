# ADR 0001: Initial Repository Structure

## Status

Accepted

## Context

The repository needs a clear, agent-readable structure before implementation begins.

Multiple systems are expected to collaborate in this repository, including script generation, knowledge capture, and skill evaluation workflows. Without a canonical layout, documentation and outputs would drift quickly.

The project also requires a dedicated place for:

- workflow specifications
- architecture decisions
- canonical user documentation
- project data
- accumulated research knowledge
- automation scripts
- skills
- evaluation artifacts

## Decision

Adopt the following repository structure as the initial standard:

- `AGENTS.md` as the repository-wide operating guide
- `.specs/specs.md` as the workflow and project specification
- `.specs/ADRs/` for architecture decision records
- `docs/` for canonical user-facing documentation
- `data/` for all project data
- `Knowledge/` for reusable validated research
- `scripts/` for executable workflow stages
- `skills/` for repository-specific skills
- `evaluations/` for Skill Arena and related evaluation artifacts

All project documentation must be written in English.

`docs/README.md` is designated as the official user manual for the project.
All project data must be organized under `data/`.

Agents should read documents in this order:

1. `AGENTS.md`
2. `.specs/specs.md`
3. relevant ADRs
4. relevant `Knowledge/` entries

## Consequences

Benefits:

- agents have a shared entry point
- workflow intent is separated from implementation
- user-facing canonical documentation has a clear home
- project data has a single canonical home
- important decisions are preserved explicitly
- research and evaluations have dedicated homes

Costs:

- future structural changes should be recorded through additional ADRs
- contributors must keep the documentation in sync with implementation
