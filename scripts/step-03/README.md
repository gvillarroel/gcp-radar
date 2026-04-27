# Step 03 Scripts

This directory stores scripts for workflow Step 03.

Step 03 is currently intended for official documentation URL discovery and scoring.

Current generator:

- `score-product-documentation-urls.mjs`

Purpose:

- read the canonical Step 02 product markdown files
- run multiple `bx` query rounds for each product
- aggregate and deduplicate official Google candidate URLs
- classify and score the best candidates through an API-backed rubric
- emit per-product scored rankings under `data/step-03/current/`

Canonical input:

- `data/step-02/current/products/<product-slug>.md`

Canonical output:

- `data/step-03/current/index.json`
- `data/step-03/current/products/<product-slug>/ranking.json`
- `data/step-03/current/products/<product-slug>/ranking.md`

Usage:

```bash
zx scripts/step-03/score-product-documentation-urls.mjs
```

Optional controls:

- set `GCP_RADAR_STEP03_INPUT_ROOT` to override the default Step 02 input root
- set `GCP_RADAR_STEP03_OUTPUT_ROOT` to override the default Step 03 output root
- set `GCP_RADAR_STEP03_PRODUCTS` to limit execution to a comma-separated list of product slugs
- set `GCP_RADAR_STEP03_MAX_PRODUCTS` to limit the number of products processed
- set `GCP_RADAR_STEP03_SEARCH_COUNT` to control how many Brave results are inspected per query
- set `GCP_RADAR_STEP03_ROUNDS` to control how many query rounds are executed
- set `GCP_RADAR_STEP03_MAX_CANDIDATES_FOR_API` to limit how many URLs per product are scored by the API rubric
- set `GCP_RADAR_STEP03_SEARCH_CONCURRENCY` to tune concurrent `bx` calls
- set `GCP_RADAR_STEP03_PI_MODEL` to override the API scoring model

## Coverage feedback from Step 06

Generate a Step 3 feedback artifact from Step 6 coverage outcomes and Step 4
corpus health:

```bash
node scripts/step-03/build-coverage-feedback.mjs
```

The command writes `data/step-03/current/coverage-feedback.json` and `.md` with
uncovered feature counts, missing feature terms, Step 4 corpus status, and
recommended actions such as adding feature-term seeds or increasing crawl budget.
