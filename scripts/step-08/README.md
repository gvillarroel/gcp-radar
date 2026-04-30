# Step 08 Scripts

This directory stores scripts for workflow Step 08.

Step 08 builds product and feature cards from validated intermediate outputs.

Current script:

- `build-product-feature-cards.mjs`

Purpose:

- read Step 06 extended feature definitions
- read Step 07 quality gate findings
- read Step 05 IAM role and permission inventory
- read Step 04 corpus state and selected source metadata
- emit per-product card JSON and Markdown under `data/step-08/current/`
- include one explicit service-level card object per product in each product card

Canonical inputs:

- `data/step-06/current/products/<product-slug>/extended-features.json`
- `data/step-07/current/products/<product-slug>/gate.json`
- `data/step-05/current/roles/index.json`
- `data/step-05/current/permissions/index.json`
- `data/step-04/current/products/<product-slug>/selection.json`
- `data/step-04/current/products/<product-slug>/state.json`

Canonical outputs:

- `data/step-08/current/index.json`
- `data/step-08/current/products/<product-slug>/card.json`
- `data/step-08/current/products/<product-slug>/card.md`

Each product `card.json` contains:

- `service_card`, the unique service-level card for the product
- `features`, the existing feature-card list

The service card aggregates feature count, Step 07 validation summary, IAM
status counts, official source links, security capabilities, the latest observed
feature lifecycle date, corpus metadata, and `generated_at`.

Usage:

```bash
zx scripts/step-08/build-product-feature-cards.mjs
```

Optional controls:

- set `GCP_RADAR_STEP08_PRODUCTS` to limit execution to a comma-separated list of product slugs
- set `GCP_RADAR_STEP08_STEP04_ROOT` to override the Step 04 input root
- set `GCP_RADAR_STEP08_STEP05_ROOT` to override the Step 05 input root
- set `GCP_RADAR_STEP08_STEP06_ROOT` to override the Step 06 input root
- set `GCP_RADAR_STEP08_STEP07_ROOT` to override the Step 07 input root
- set `GCP_RADAR_STEP08_OUTPUT_ROOT` to override the Step 08 output root
- set `GCP_RADAR_PRINT_FULL_INDEX=1` to print the complete run index instead
  of the default compact CLI summary

IAM mapping statuses:

- `explicit` means a role or permission was mentioned in Step 06 evidence and exists in Step 05 inventory
- `derived_from_permission_prefix` means a product permission group can be associated conservatively, but the feature did not explicitly name a role or permission
- `unknown` means no defensible IAM mapping was found

All script-facing documentation must be written in English.
