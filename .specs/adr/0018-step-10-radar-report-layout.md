# ADR 0018: Step 10 Radar Report Layout

## Status

Accepted

## Context

The repository needs final human-readable reports, but those reports must not
be generated from intermediate stage outputs. They must use promoted
`artifacts/` content as the source of truth.

## Decision

Adopt Step 10 as the final radar reporting stage.

The canonical Step 10 script is:

- `scripts/step-10/generate-radar-reports.mjs`

The canonical Step 10 outputs are:

- `radar/index.md`
- `radar/services/index.md`
- `radar/products/<product-slug>.md`
- `radar/iam/index.md`
- `radar/security/index.md`
- `radar/coverage.md`
- `data/step-10/current/index.json`

`radar/index.md` is the entry point. Product, IAM, security, and coverage
reports aggregate promoted artifact cards only.

Product reports must expose feature-level IAM detail. Each promoted feature
row should include the IAM mapping status, roles, permissions, and official
evidence links. Explicit roles and permissions must be shown separately from
derived roles and permissions. The dedicated IAM report must aggregate the same
feature-level roles and permissions across products with the same separation.

Reports must distinguish explicit feature IAM evidence from derived IAM
signals. Derived roles or permissions must not be described as required access
unless a promoted feature artifact contains official evidence for that exact
role or permission.

## Consequences

Benefits:

- final reports are clearly separated from intermediate generated data
- every report item traces back to a promoted artifact
- IAM and security summaries are reproducible from the source-of-truth layer

Costs:

- report coverage is limited to promoted artifacts
- incomplete promotion intentionally produces incomplete final reports
