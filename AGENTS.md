# AGENTS.md

## Project Name

`gcp-radar`

## Purpose

This repository builds a structured, evolving map of Google Cloud Platform products and features using official Google sources only.

The goal is to collect, validate, and organize product intelligence into hierarchical "cards" that describe:

- product and feature names
- feature lifecycle status and dates
- security capabilities per feature
- IAM roles required by each feature
- related documentation and evidence
- relationships between products, features, and controls

## Decision Records

- Record durable technical or workflow decisions as ADRs under `.specs/adr/*.md`.
- Read existing ADRs before changing a previously chosen technical direction.

## Core Rule

All project documentation must be written in English.

All directory names must be lowercase.

This includes:

- `AGENTS.md`
- `.specs/specs.md`
- ADRs under `.specs/adr/*.md`
- canonical documentation under `docs/`
- knowledge documents under `knowledge/`
- evaluation notes, benchmarks, and skill-related documentation

## Canonical Documents

Agents working in this repository should read these documents in this order:

1. `AGENTS.md`
2. `.specs/specs.md`
3. relevant ADRs in `.specs/adr/*.md`
4. relevant knowledge entries in `knowledge/`

## Repository Structure

Expected top-level structure:

- `.specs/`
- `.specs/specs.md`
- `.specs/adr/`
- `artifacts/`
- `docs/`
- `radar/`
- `data/`
- `knowledge/`
- `scripts/`
- `skills/`
- `evaluations/`

Not every directory must exist immediately, but this is the intended structure.

## Meaning of Each Area

### `.specs/`

Project-level specifications and operating rules.

### `.specs/specs.md`

The main workflow document for the project.

Read this file to understand:

- the intended delivery model
- step-by-step pipeline stages
- data acquisition and validation expectations
- output shapes and quality bar

### `.specs/adr/`

Architecture Decision Records.

Store one ADR per decision. ADRs explain why a structural, workflow, storage, or evaluation decision was made.

### `docs/`

Canonical project documentation.

`docs/README.md` is the official user manual for the project and should explain the project end to end for human readers.

Use `docs/` for stable, user-facing, canonical documentation.

### `artifacts/`

Canonical validated documentation.

`artifacts/` is the source of truth for validated documentation that is considered correct enough to support final reporting.

Artifacts must be organized hierarchically:

- one folder per Google product
- within each product, one folder per feature
- within each feature folder, the validated documentation for that feature

### `radar/`

Final report outputs.

`radar/` stores the final reports generated from the validated source-of-truth content in `artifacts/`.

### `data/`

Canonical project data storage.

All project data should be organized under `data/`.

This includes raw inputs, normalized datasets, intermediate artifacts, generated cards, validation outputs, and other machine-readable project data.

Data must be separated by workflow stage.

Use step-oriented subdirectories such as:

- `data/step-01/`
- `data/step-02/`
- `data/step-03/`

### `knowledge/`

The local knowledge base for research gathered during the project.

Use it to preserve validated findings, source mappings, extraction heuristics, terminology, and reusable research conclusions.

### `scripts/`

Automation scripts, primarily implemented with `zx`.

These scripts are expected to execute the project workflow step by step.

Scripts must also be organized by workflow stage.

Use step-oriented subdirectories such as:

- `scripts/step-01/`
- `scripts/step-02/`
- `scripts/step-03/`

### `skills/`

Skills created or evolved in this repository for the agents used by the project.

### `evaluations/`

Artifacts related to Skill Arena runs, benchmarks, comparisons, and evolution results.

## Project Stack and Related Repositories

This project combines ideas and tooling patterns from other repositories in the broader workspace:

- `zx`-based scripting for pipeline execution
- CodeAssist / PMono-driven script generation and problem solving
- `knowledge` for incremental research capture and retrieval
- Skill Arena for evaluating and evolving repository-specific skills

Agents should preserve compatibility with those workflows when adding structure here.

## Workflow Summary

The project is expected to progress through explicit stages executed by scripts.

Current planned direction:

1. Identify GCP products and features from official Google sources.
2. Normalize names, IDs, statuses, and lifecycle dates.
3. Map official documentation to the correct product or feature.
4. Extract structured feature details, including security and IAM information.
5. Validate extracted information against source evidence.
6. Organize validated documentation in `artifacts/` by product and feature.
7. Generate final reports in `radar/` from the validated artifacts.
8. Evolve the extraction and evaluation skills over time.

## Source Policy

Only official Google sources should be treated as authoritative inputs for product intelligence.

If a non-official source is used for orientation, it must not be used as final evidence unless an official Google source confirms it.

## Documentation Expectations

When creating or updating documentation:

- prefer concise, factual writing
- separate facts from assumptions
- record source provenance whenever possible
- keep directory names lowercase in all examples and new paths
- update `.specs/specs.md` when the workflow changes
- add an ADR when a decision affects architecture, storage, workflow, evaluation strategy, or source policy

## ADR Expectations

Create an ADR when changing:

- repository structure
- step-oriented folder layout
- validated artifact organization
- final reporting layout
- canonical data model
- extraction pipeline design
- source selection policy
- evaluation methodology
- knowledge storage conventions
- skill evolution strategy

## Operating Principle for Agents

Do not invent project structure in isolated files without aligning with:

- `AGENTS.md` for repository-wide rules
- `.specs/specs.md` for workflow intent
- existing ADRs for prior decisions

When in doubt, document the decision as an ADR before expanding the implementation.
