# ADR 0003: Artifacts And Radar Structure

## Status

Accepted

## Context

The project needs a clear distinction between:

- workflow data and intermediate outputs
- validated documentation that is considered correct
- final report outputs

Without that separation, intermediate pipeline data can be confused with validated knowledge, and report generation may not have a stable source of truth.

## Decision

Adopt the following responsibilities:

- `data/` stores workflow data, intermediate outputs, and stage-specific machine-readable artifacts
- `artifacts/` stores validated source-of-truth documentation
- `radar/` stores final reports generated from `artifacts/`

The `artifacts/` directory must be organized hierarchically:

- one folder per Google product
- within each product folder, one folder per feature
- within each feature folder, the validated documentation for that feature

Expected pattern:

- `artifacts/<product>/`
- `artifacts/<product>/<feature>/`

The documentation stored in `artifacts/` is the authoritative source used to generate final reports.

`radar/` is the canonical home for those final reports.

## Consequences

Benefits:

- validated knowledge is clearly separated from intermediate pipeline data
- final reporting has a stable and explicit source of truth
- product and feature documentation scales naturally as coverage grows

Costs:

- promotion into `artifacts/` requires validation discipline
- naming conventions for products and features will need to be defined carefully
