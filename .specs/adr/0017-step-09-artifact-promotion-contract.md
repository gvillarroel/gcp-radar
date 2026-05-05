# ADR 0017: Step 09 Artifact Promotion Contract

## Status

Accepted

## Context

`artifacts/` is the repository's source-of-truth layer, but the promotion
contract from generated data into artifacts was not defined.

Step 07 PASS means a product or feature is eligible for promotion review. It is
not by itself final acceptance.

## Decision

Adopt Step 09 as the artifact promotion stage.

The canonical Step 09 script is:

- `scripts/step-09/promote-validated-artifacts.mjs`

The canonical Step 09 outputs are:

- `data/step-09/current/index.json`
- `artifacts/<product-slug>/card.json`
- `artifacts/<product-slug>/index.md`
- `artifacts/<product-slug>/promotion.json`
- `artifacts/<product-slug>/<feature-slug>/README.md`
- `artifacts/<product-slug>/<feature-slug>/card.json`

The promoted product `index.md` must render the promoted service card's
official source links, not only their count, so product-level provenance is
reviewable without opening JSON.

A feature can be promoted when:

- Step 07 passed for the feature
- no Step 07 failures are present
- the technical summary or extended definition is non-empty
- at least one official Google source link is present
- all source links used for promotion are official Google URLs
- the IAM mapping status is one of `explicit`,
  `derived_from_permission_prefix`, or `unknown`
- warning rules are accepted by the promotion policy or absent

By default, Step 09 promotes every product card under
`data/step-08/current/products/`. Targeted promotion can be requested with
`GCP_RADAR_STEP09_PRODUCTS`.

Warnings currently accepted as reviewed non-blocking classes are:

- `coverage_low`
- `thin_token_overlap`
- `support_matrix_only_evidence`
- `missing_exact_identifier_page`
- `generic_supporting_pages`

## Consequences

Benefits:

- `artifacts/` receives only reviewed, evidence-backed feature documentation
- skipped features are recorded with explicit reasons
- catalog-wide promotion can be run from the current Step 08 workspace inventory

Costs:

- changing promotion policy can change how many features are promoted
- warning classes must be revisited as Step 07 evolves
