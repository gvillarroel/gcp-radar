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
- promoted feature cards use one of the documented IAM mapping statuses:
  `explicit`, `derived_from_permission_prefix`, or `unknown`
- artifact IAM roles and permissions still exist in the Step 08 inventory
- radar Markdown and JSON files do not reference intermediate `data/step-*`
  paths
- final output directories under `artifacts/`, `radar/`,
  `data/step-08/current/`, `data/step-09/current/`, and
  `data/step-10/current/` use lowercase directory names
- radar Markdown links that point to promoted `artifacts/` content resolve to
  existing artifact files or directories
- every external HTTP(S) link in promoted artifact Markdown points to an
  official Google host
- every external HTTP(S) link in generated radar Markdown points to an official
  Google host
- `data/step-08/current/index.json` uses the current Step 08 schema version
- `data/step-08/current/index.json` records a non-empty ISO 8601
  `generated_at` timestamp
- `data/step-08/current/index.json` records the same Step 08 output root that
  final-output validation is checking
- `data/step-08/current/index.json` records the same Step 02, Step 04, Step
  05, Step 06, and Step 07 input roots that final-output validation is checking
- Step 08 product entries, feature totals, IAM status totals, card paths, and
  per-product summary fields match the generated Step 08 product cards
- every Step 08 feature card uses one of the documented IAM mapping statuses:
  `explicit`, `derived_from_permission_prefix`, or `unknown`
- Step 08 product entries are sorted and duplicate-free
- every Step 08 product entry still has a generated product `card.json` and
  `card.md`
- every generated Step 08 product `card.md` keeps its rendered product title,
  schema version, generation timestamp, Step 07 summary, corpus health, IAM
  summary, service-card summary, and feature rows aligned with the matching
  Step 08 `card.json`
- every generated Step 08 product `card.md` feature table is the exact ordered
  projection of the matching Step 08 `card.json` feature inventory, with no
  extra or stale rendered feature rows
- generated Step 08 product cards record non-empty ISO 8601 `generated_at`
  timestamps
- `data/step-08/current/index.json` records a `generated_at` timestamp that is
  not older than any generated Step 08 product card timestamp
- generated Step 08 product cards use the current Step 08 card-construction
  schema version
- generated Step 08 product cards have a duplicate-free feature inventory, and
  every feature in that inventory has a non-empty feature slug
- each generated Step 08 product card's embedded service card keeps its service
  slug, service name, generated timestamp, feature count, and security
  capability count aligned with the enclosing product card
- Step 08 service-card source links, Step 08 feature source links, Step 08
  feature supporting page URLs, and Step 08 security capability evidence links
  use official Google HTTP(S) URLs when present
- `radar/products/*.md` exactly matches the promoted product directories under
  `artifacts/`
- `data/step-09/current/index.json` product and feature counts match promoted
  artifacts
- `data/step-09/current/index.json` uses the current Step 09 schema version
- `data/step-09/current/index.json` records a non-empty ISO 8601
  `generated_at` timestamp
- `data/step-09/current/index.json` records the same Step 08 root and
  artifacts root that final-output validation is checking
- Step 09 product entries are sorted and exactly match the promoted artifact
  inventory without duplicate or stale product entries, including product names
  from the corresponding promotion manifests
- `data/step-09/current/index.json` exposes `accepted_warning_rules` as a
  sorted, duplicate-free array of non-empty string rule IDs, and every product
  promotion manifest keeps its own `accepted_warning_rules` array aligned with
  that index policy
- `data/step-09/current/index.json` latest-run scope metadata is internally
  consistent: `processed_products` is a sorted duplicate-free list of products
  with canonical Step 08 cards, `processed_product_count` matches that list,
  and `stale_feature_artifact_dir_count` matches the sum of per-product stale
  cleanup counts
- each Step 09 index product entry exposes `stale_feature_artifact_dirs_removed`
  as a sorted, duplicate-free array, keeps its stale cleanup count aligned with
  that list, keeps every removed path under that product's artifact directory,
  and only lists directories that no longer exist
- each product promotion manifest exposes `stale_feature_artifact_dirs_removed`
  as a sorted, duplicate-free array, keeps every removed path under that
  product's artifact directory, and only lists directories that no longer exist
- every promotion manifest, promoted service card, and promoted feature card
  uses the current Step 09 artifact-promotion schema version
- every promotion manifest, promoted service card, and promoted feature card
  records a non-empty ISO 8601 `generated_at` timestamp
- every promoted service card and promoted feature card records the same
  `generated_at` timestamp as its product promotion manifest
- `data/step-09/current/index.json` records a `generated_at` timestamp that is
  not older than any product promotion manifest timestamp
- `data/step-10/current/index.json` product and feature counts match promoted
  artifacts
- `data/step-10/current/index.json` uses the current Step 10 schema version
- `data/step-10/current/index.json` records a non-empty ISO 8601
  `generated_at` timestamp
- `data/step-10/current/index.json` records a `generated_at` timestamp that is
  not older than the Step 09 index timestamp
- `data/step-10/current/index.json` records the same artifacts root and radar
  root that final-output validation is checking
- `data/step-10/current/index.json` keeps `fixed_report_count`,
  `product_report_count`, and `report_count` aligned with the canonical fixed
  report inventory and promoted product report inventory
- Step 10 product report paths are sorted and exactly match the promoted
  product inventory without duplicate product report entries
- fixed Step 10 report paths in `data/step-10/current/index.json` match the
  canonical radar report layout and resolve to existing files
- `data/step-10/current/index.json` does not retain unknown report keys outside
  the canonical fixed reports and `products` report list
- product report paths in `data/step-10/current/index.json` resolve to existing
  generated product report files
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
- promoted service cards carry both `product_slug` and `service_slug`, and
  both match their artifact product directory
- promoted feature artifact cards have embedded slugs that match their
  artifact path and promotion manifest
- promoted service and feature artifact cards have `source_step08_card`
  provenance that matches the canonical Step 08 product card path being
  validated
- promoted service and feature artifact cards keep their source-backed payload
  fields aligned with the canonical Step 08 product card referenced by
  `source_step08_card`
- each product promotion manifest has an embedded product slug, service-card
  path, promoted feature count, promoted feature slugs, and promoted artifact
  paths that match the containing artifact directory
- each product promotion manifest exposes `promoted_features` and
  `skipped_features` as arrays before their counts, paths, labels, and report
  rows are validated
- each product promotion manifest keeps `promoted_features` and
  `skipped_features` sorted by `feature_slug`
- each product promotion manifest has `source_step08_card` provenance that
  matches an existing canonical Step 08 product card path
- each product promotion manifest has a skipped feature count that matches its
  skipped feature list, no duplicate skipped feature slugs, and no feature slug
  listed as both promoted and skipped
- each product promotion manifest gives every feature in the canonical Step 08
  product card exactly one promoted or skipped disposition, with no unknown
  feature slugs outside the Step 08 card
- each product promotion manifest keeps its product name and promoted or
  skipped feature names aligned with the promoted cards and canonical Step 08
  product card
- each product artifact index links every promoted feature README for that
  product
- each product artifact index links the promoted service card for that product
- product artifact indexes do not retain feature README links outside the
  product's promotion manifest
- product artifact indexes do not duplicate promoted feature README links or
  the promoted service-card link
- each product artifact index keeps its rendered title, Step 08 provenance,
  promoted feature count, Step 07 status, corpus health, latest feature date,
  official source-link count, official service evidence links, and feature link
  labels aligned with the promotion manifest, promoted service card, and
  canonical Step 08 product card
- each Step 10 product report links every promoted feature README for that
  product
- each Step 10 product report links the promoted service card and product
  artifact index for that product
- each Step 10 product report does not duplicate promoted feature README,
  promoted service-card, or product artifact-index links
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
- the Step 10 root index does not duplicate valid promoted product-report or
  service-card links
- the Step 10 root index service-card and promoted-feature summary counts match
  the promoted artifact inventory
- the Step 10 root index product rows match promoted artifacts for product
  name, promoted feature count, latest feature date, product report link, and
  service-card link
- every generated Step 10 Markdown report renders the same `generated_at`
  timestamp recorded in `data/step-10/current/index.json`
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
