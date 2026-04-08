# gcp-radar User Manual

## Overview

`gcp-radar` is a research and data-construction repository for building a structured, evidence-backed map of Google Cloud Platform products and features.

The project is designed to answer a practical question:

How can GCP product intelligence be collected, normalized, validated, and represented in a way that stays traceable to official Google evidence?

The repository does not treat informal summaries as final truth. Its purpose is to build durable, machine-readable project artifacts that can be audited back to authoritative Google sources.

## Project Goals

The long-term goal is to produce structured product and feature cards that capture:

- product identity
- feature identity
- lifecycle status and dates
- relationships between products and features
- security capabilities
- IAM roles and permissions when explicitly documented
- evidence links and supporting documentation
- validated source-of-truth feature documentation
- final radar reports

Each important fact should eventually be attributable to source evidence.

## Source Policy

Only official Google sources are authoritative for final product intelligence in this repository.

Authoritative examples include:

- Google Cloud product documentation
- Google Cloud release notes
- official product pages
- official IAM documentation
- official security documentation
- official Google datasets or catalogs when relevant

Non-official sources may be used for orientation only. They must not be treated as final evidence unless an official Google source confirms the same claim.

## Workflow Summary

The repository is organized as a stage-based workflow.

The current intended flow is:

1. discover GCP products and features from official sources
2. segregate those findings into stable per-product product and feature inventories
3. discover and score the best official Google documentation URLs for each product
4. clean and curate the documentation selected from those Step 03 rankings before deep research
5. extract the current IAM role and permission inventory with `gcloud` and
   materialize it into reusable JSON outputs with optional Parquet exports
6. validate extracted facts against source evidence
7. organize validated documentation in `artifacts/`
8. generate final reports in `radar/`
9. capture reusable knowledge and improve the skills that support the workflow

This workflow is intentionally explicit so that scripts, data outputs, and validation steps remain easy to audit.

## Repository Layout

The repository uses a canonical structure defined by accepted ADRs.

- `docs/` stores canonical user-facing documentation
- `.specs/` stores workflow specifications and architecture decisions
- `artifacts/` stores validated source-of-truth documentation organized by product and feature
- `radar/` stores final report outputs
- `data/` stores canonical machine-readable project artifacts
- `knowledge/` stores reusable validated research findings
- `scripts/` stores executable workflow stages
- `skills/` stores repository-specific skills
- `evaluations/` stores evaluation and Skill Arena artifacts

## Step-Oriented Conventions

Workflow logic and data are both organized by numbered stages.

Examples:

- `scripts/step-01/`
- `scripts/step-02/`
- `scripts/step-03/`
- `data/step-01/`
- `data/step-02/`
- `data/step-03/`

The `step-XX` naming pattern is used so directories sort predictably as the workflow grows.

## What Belongs in Each Area

### docs

Use `docs/` for stable, human-readable, canonical project documentation.

This file, `docs/README.md`, is the official user manual for the repository.

### .specs

Use `.specs/specs.md` for the current workflow definition and project rules.

Use `.specs/ADRs/` to record important decisions such as structure, workflow design, data models, source policy, and evaluation strategy.

### data

Use `data/` for canonical machine-readable artifacts produced by the workflow.

Expected contents include raw captures, normalized outputs, intermediate artifacts, validation outputs, and generated cards.

This directory is not the final source of truth for validated feature documentation.

Validated documentation should be promoted into `artifacts/`, and final reports should be generated into `radar/`.

### artifacts

Use `artifacts/` for validated source-of-truth documentation.

Expected structure:

- one folder per Google product
- within each product, one folder per feature
- within each feature, the validated documentation for that feature

This content is the authoritative source used to generate final reports.

### radar

Use `radar/` for final report outputs.

Final reports should be generated from the validated content stored in `artifacts/`.

### knowledge

Use `knowledge/` for reusable research findings that should survive beyond a single execution.

Examples include terminology notes, source inventories, naming conventions, lifecycle interpretation guidance, and extraction heuristics.

### scripts

Use `scripts/` for executable workflow stages, primarily implemented with `zx`.

Scripts should be aligned to the same numbered stages used in `data/`.

### skills

Use `skills/` for repository-specific skills that support discovery, extraction, validation, and card construction.

### evaluations

Use `evaluations/` for Skill Arena benchmarks, comparison outputs, evolution results, and evaluation notes.

## Current Project State

The repository currently defines the operating model, structure, and workflow direction.

At this stage, the project should be understood as a scaffold for the first implementation wave, not as a completed extractor.

The next practical milestones are:

1. define the canonical schema for products, features, and evidence
2. implement the first Step 1 discovery scripts
3. define the stage-specific data layout in more detail
4. define the promotion rules from workflow data into `artifacts/`
5. define the report structure under `radar/`
6. add validation checks for source coverage and lifecycle evidence
7. establish the first evaluation loop for repository-specific skills

## Documentation Rules

All project documentation must be written in English.

All directory names must be lowercase.

When documentation changes the workflow, storage model, evaluation methodology, or source policy, the change should also be reflected in `.specs/specs.md` and, when material, recorded as an ADR.

Documentation should remain:

- concise
- factual
- explicit about evidence versus assumptions
- aligned with accepted ADRs

## Reading Order

If you are new to the repository, read the documents in this order:

1. `AGENTS.md`
2. `.specs/specs.md`
3. relevant ADRs in `.specs/ADRs/`
4. relevant entries in `knowledge/`
5. this manual and the README files inside the stage directories you plan to work on

## Intended Audience

This repository is intended for:

- contributors building extraction or validation scripts
- agents working within the repository workflow
- reviewers checking whether outputs remain evidence-backed
- future maintainers who need to understand how data moves through the pipeline

## What This Manual Covers

This manual explains the repository's purpose, scope, layout, and operating model.

Detailed implementation choices such as card schemas, evidence schemas, and
script interfaces should be documented through future ADRs and stage-specific
documentation as those decisions become concrete.
