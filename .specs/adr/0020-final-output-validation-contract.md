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
- every external HTTP(S) link in promoted artifact Markdown points to an
  official Google host
- every external HTTP(S) link in generated radar Markdown points to an official
  Google host
- `radar/products/*.md` exactly matches the promoted product directories under
  `artifacts/`
- `data/step-10/current/index.json` product and feature counts match promoted
  artifacts
- Step 10 product report paths exactly match the promoted product inventory
- fixed Step 10 report paths in `data/step-10/current/index.json` match the
  canonical radar report layout and resolve to existing files
- every promoted feature listed in a promotion manifest has both its artifact
  `card.json` and `README.md`
- promoted service and feature artifact cards have embedded slugs that match
  their artifact path and promotion manifest
- each product promotion manifest has an embedded product slug, promoted
  feature count, promoted feature slugs, and promoted artifact paths that match
  the containing artifact directory
- each product artifact index links every promoted feature README for that
  product
- product artifact indexes do not retain feature README links outside the
  product's promotion manifest
- each Step 10 product report links every promoted feature README for that
  product
- Step 10 product reports do not retain feature README links outside the
  product's promoted feature inventory
- Step 10 product reports and the IAM report keep explicit roles and
  permissions separate from derived roles and permissions
- the Step 10 services report links every promoted product service card and
  does not retain service-card links outside the promoted artifact inventory
- the Step 10 root index links every promoted product report and service card,
  and does not retain stale product or service-card links outside the promoted
  artifact inventory

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
