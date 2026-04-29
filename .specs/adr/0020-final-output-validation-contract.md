# ADR 0020: Final Output Validation Contract

## Status

Accepted

## Context

Steps 09 and 10 create the source-of-truth artifact layer and final radar
reports. The final validation script already verifies promoted artifact source
links and blocks radar files that reference intermediate `data/step-*` paths.

That was not enough to detect stale or missing product reports when the
promoted artifact inventory changes. A final radar can pass link validation
while still containing product reports that no longer correspond to promoted
artifacts, or while omitting reports for newly promoted products.

## Decision

Treat final-output validation as the contract between promoted artifacts,
Step 10 metadata, and radar reports.

The canonical final validation script is:

- `scripts/validate-final-outputs.mjs`

The validator must check:

- every promoted feature artifact has official Google source links
- artifact IAM roles and permissions still exist in the Step 08 inventory
- radar Markdown and JSON files do not reference intermediate `data/step-*`
  paths
- radar Markdown links that point to promoted `artifacts/` content resolve to
  existing artifact files or directories
- `radar/products/*.md` exactly matches the promoted product directories under
  `artifacts/`
- `data/step-10/current/index.json` product and feature counts match promoted
  artifacts
- Step 10 product report paths exactly match the promoted product inventory
- each Step 10 product report links every promoted feature README for that
  product
- Step 10 product reports do not retain feature README links outside the
  product's promoted feature inventory

## Consequences

Benefits:

- stale final product reports are detected before delivery
- missing product reports are detected before delivery
- incomplete final product reports are detected before delivery
- Step 10 metadata can be trusted as a summary of promoted artifacts

Costs:

- final validation must be rerun after any Step 09 or Step 10 output change
- targeted artifact experiments should use the validation environment
  variables to point at matching temporary roots
