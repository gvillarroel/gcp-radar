# Step 09 Scripts

This directory stores scripts for workflow Step 09.

Step 09 promotes validated Step 08 product and feature cards into `artifacts/`.

Current script:

- `promote-validated-artifacts.mjs`

Purpose:

- read Step 08 card outputs
- apply promotion rules
- write validated product and feature documentation under `artifacts/<product-slug>/<feature-slug>/`
- record skipped features and promotion decisions

Canonical inputs:

- `data/step-08/current/products/<product-slug>/card.json`

Canonical outputs:

- `data/step-09/current/index.json`
- `artifacts/<product-slug>/index.md`
- `artifacts/<product-slug>/promotion.json`
- `artifacts/<product-slug>/<feature-slug>/README.md`
- `artifacts/<product-slug>/<feature-slug>/card.json`

Usage:

```bash
zx scripts/step-09/promote-validated-artifacts.mjs
```

Default behavior:

- promotes every product card under `data/step-08/current/products/`
- writes one unique service card to `artifacts/<product-slug>/card.json`
- removes stale feature artifact directories that are no longer promoted for each processed product
- accepts the current Step 07 warning rules as reviewed non-blocking warnings
- blocks features with Step 07 failures, missing summaries, missing official source links, or non-official source links

Optional controls:

- set `GCP_RADAR_STEP09_PRODUCTS` to change the comma-separated product slug set
- set `GCP_RADAR_STEP09_STEP08_ROOT` to override the Step 08 input root
- set `GCP_RADAR_STEP09_ARTIFACTS_ROOT` to override the artifacts root
- set `GCP_RADAR_STEP09_OUTPUT_ROOT` to override the Step 09 output root
- set `GCP_RADAR_STEP09_ACCEPTED_WARNING_RULES` to override reviewed warning rules
- set `GCP_RADAR_STEP09_CLEAN_PRODUCT_ARTIFACTS=1` to remove an existing product artifact directory before promotion; this is broader than the default stale-feature cleanup
- set `GCP_RADAR_PRINT_FULL_INDEX=1` to print the complete run index instead
  of the default compact CLI summary

All script-facing documentation must be written in English.
