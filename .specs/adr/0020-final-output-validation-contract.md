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
Step 09 metadata, Step 10 metadata, and radar reports.

The canonical final validation script is:

- `scripts/validate-final-outputs.mjs`

The validator must check:

- every promoted feature artifact has official Google source links
- promoted evidence source links use the `http` or `https` scheme on an
  official Google host
- security capability evidence links embedded in promoted service and feature
  artifact cards use the `http` or `https` scheme on an official Google host
- promoted feature cards still satisfy Step 09 promotion eligibility: Step 07
  pass status is true, failure count is zero, a technical summary is present,
  source links are official Google URLs, and feature warning rules are listed
  in the product promotion manifest's accepted warning rules
- artifact IAM roles and permissions still exist in the Step 08 inventory
- radar Markdown and JSON files do not reference intermediate `data/step-*`
  paths
- radar Markdown links that point to promoted `artifacts/` content resolve to
  existing artifact files or directories
- every external HTTP(S) link in promoted artifact Markdown points to an
  official Google host
- every external HTTP(S) link in generated radar Markdown points to an official
  Google host
- `data/step-08/current/index.json` uses the current Step 08 schema version
- `data/step-08/current/index.json` records the same Step 08 output root that
  final-output validation is checking
- Step 08 product entries, feature totals, IAM status totals, card paths, and
  per-product summary fields match the generated Step 08 product cards
- `radar/products/*.md` exactly matches the promoted product directories under
  `artifacts/`
- `data/step-09/current/index.json` product and feature counts match promoted
  artifacts
- `data/step-09/current/index.json` uses the current Step 09 schema version
- `data/step-09/current/index.json` records the same Step 08 root and
  artifacts root that final-output validation is checking
- Step 09 product entries exactly match the promoted artifact inventory without
  duplicate or stale product entries
- every promotion manifest, promoted service card, and promoted feature card
  uses the current Step 09 artifact-promotion schema version
- `data/step-10/current/index.json` product and feature counts match promoted
  artifacts
- `data/step-10/current/index.json` uses the current Step 10 schema version
- `data/step-10/current/index.json` records the same artifacts root and radar
  root that final-output validation is checking
- Step 10 product report paths exactly match the promoted product inventory
  without duplicate product report entries
- fixed Step 10 report paths in `data/step-10/current/index.json` match the
  canonical radar report layout and resolve to existing files
- every promoted feature listed in a promotion manifest has both its artifact
  `card.json` and `README.md`
- every promoted feature README includes at least one official Google evidence
  link from its promoted feature card
- every promoted feature README keeps its IAM mapping status and rendered IAM
  detail aligned with its promoted feature card, including explicit roles,
  explicit permissions, derived IAM qualifier text, derived permissions shown
  by the artifact renderer, and unknown-IAM qualifier text
- every promoted feature README keeps its rendered product name, feature slug,
  coverage status, and lifecycle lines aligned with its promoted feature card
- every promoted feature README keeps security capability names and official
  Google security evidence links aligned with its promoted feature card
- promoted service and feature artifact cards have embedded slugs that match
  their artifact path and promotion manifest
- promoted service and feature artifact cards have `source_step08_card`
  provenance that matches the canonical Step 08 product card path being
  validated
- promoted service and feature artifact cards keep their source-backed payload
  fields aligned with the canonical Step 08 product card referenced by
  `source_step08_card`
- each product promotion manifest has an embedded product slug, service-card
  path, promoted feature count, promoted feature slugs, and promoted artifact
  paths that match the containing artifact directory
- each product promotion manifest has `source_step08_card` provenance that
  matches an existing canonical Step 08 product card path
- each product promotion manifest has a skipped feature count that matches its
  skipped feature list, no duplicate skipped feature slugs, and no feature slug
  listed as both promoted and skipped
- each product promotion manifest keeps its product name and promoted or
  skipped feature names aligned with the promoted cards and canonical Step 08
  product card
- each product artifact index links every promoted feature README for that
  product
- each product artifact index links the promoted service card for that product
- product artifact indexes do not retain feature README links outside the
  product's promotion manifest
- each product artifact index keeps its rendered title, Step 08 provenance,
  promoted feature count, Step 07 status, corpus health, latest feature date,
  official source-link count, and feature link labels aligned with the
  promotion manifest, promoted service card, and canonical Step 08 product
  card
- each Step 10 product report links every promoted feature README for that
  product
- each Step 10 product report links the promoted service card and product
  artifact index for that product
- each Step 10 product report keeps its promoted and skipped feature summary
  counts aligned with the promotion manifest for that product
- each Step 10 product report includes at least one official Google evidence
  link from each promoted feature card for that product
- Step 10 product reports do not retain feature README links outside the
  product's promoted feature inventory
- Step 10 product reports and the IAM report keep explicit roles and
  permissions separate from derived roles and permissions
- the Step 10 IAM report links every promoted feature artifact and does not
  retain feature artifact links outside the promoted artifact inventory
- the Step 10 IAM report rows match promoted feature cards for product name,
  IAM mapping status, explicit roles, explicit permissions, derived roles, and
  derived permissions
- Step 10 product report feature rows match promoted feature cards for IAM
  mapping status, explicit roles, explicit permissions, derived roles, derived
  permissions, coverage status, and rendered source links
- Step 10 product reports keep their title, latest feature date, and service
  IAM status summary aligned with the promoted artifact manifest and service
  card
- the Step 10 services report links every promoted product service card and
  does not retain service-card links outside the promoted artifact inventory
- the Step 10 services report includes at least one official Google evidence
  link for each promoted service card that has service-level source links
- the Step 10 services report rows match promoted service cards and promotion
  manifests for status, feature count, latest feature date, explicit IAM count,
  derived IAM count, unknown IAM count, and rendered official source links
- the Step 10 root index links every promoted product report and service card,
  and does not retain stale product or service-card links outside the promoted
  artifact inventory
- the Step 10 root index service-card and promoted-feature summary counts match
  the promoted artifact inventory
- the Step 10 root index product rows match promoted artifacts for product
  name, promoted feature count, latest feature date, product report link, and
  service-card link
- the Step 10 coverage report includes every promoted product slug, does not
  retain stale product rows, and keeps promoted, skipped, explicit IAM,
  derived IAM, and unknown IAM counts aligned with promoted manifests and
  feature cards
- the Step 10 security report links every promoted feature artifact that has
  security capability signals, does not retain stale security feature links,
  includes official Google evidence links for those signals when promoted
  feature cards provide them, and keeps each security row's product name,
  capability list, and rendered evidence links aligned with the promoted
  feature card

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
