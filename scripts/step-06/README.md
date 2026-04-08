# Step 06 Scripts

This directory stores scripts for workflow Step 06.

Step 06 currently extends the Step 02 feature inventory by combining it with the Step 04 official documentation corpus.

Current generator:

- `generate-extended-feature-definitions.mjs`

Purpose:

- read the canonical Step 02 product markdown inventory
- read the canonical Step 04 per-product documentation corpus
- extract discriminative per-feature keywords with `pi`
- rank likely documentation pages for each feature
- re-rank shared pages by comparing multiple candidate features against the same page
- synthesize an extended feature definition backed by official documentation URLs
- emit a machine-readable and human-readable extended feature inventory per product
- emit one Markdown file per feature with frontmatter and evidence sections

Canonical inputs:

- `data/step-02/current/<product-slug>.md`
- `data/step-04/current/products/<product-slug>/corpus/site/*/pages.json`
- `data/step-04/current/products/<product-slug>/corpus/site/*/pages/*.md`

Canonical outputs:

- `data/step-06/current/index.json`
- `data/step-06/current/products/<product-slug>/extended-features.json`
- `data/step-06/current/products/<product-slug>/extended-features.md`
- `data/step-06/current/products/<product-slug>/features/<feature-slug>.md`
- `data/step-06/.state/current/products/<product-slug>/state.json`

Usage:

```bash
zx scripts/step-06/generate-extended-feature-definitions.mjs
```

Optional controls:

- set `GCP_RADAR_STEP06_PRODUCTS` to limit execution to a comma-separated list of product slugs
- set `GCP_RADAR_STEP06_MAX_FEATURES` to limit the number of Step 02 features processed during iteration
- set `GCP_RADAR_STEP06_STEP02_ROOT` to override the Step 02 input root
- set `GCP_RADAR_STEP06_STEP04_ROOT` to override the Step 04 input root
- set `GCP_RADAR_STEP06_OUTPUT_ROOT` to override the Step 06 output root
- set `GCP_RADAR_STEP06_STATE_ROOT` to override the Step 06 cache and state root
- set `GCP_RADAR_STEP06_MIN_BASE_SCORE` to adjust the initial lexical ranking threshold
- set `GCP_RADAR_STEP06_MIN_FINAL_SCORE` to adjust the post-rerank keep threshold
- set `GCP_RADAR_STEP06_MAX_CANDIDATE_PAGES` to cap the first-pass page candidates per feature
- set `GCP_RADAR_STEP06_MAX_DEFINITION_PAGES` to cap the final supporting pages per feature
- set `GCP_RADAR_STEP06_KEYWORD_BATCH_SIZE` to change the `pi` keyword-extraction batch size
- set `GCP_RADAR_STEP06_DEFINITION_CONCURRENCY` to change concurrent definition synthesis requests
- set `GCP_RADAR_STEP06_PI_MODEL` to override the default `pi` model
- set `GCP_RADAR_STEP06_PI_REQUEST_TIMEOUT_MS` to override the per-request timeout

Current default behavior:

- Step 06 fails explicitly if `pi` is not available
- keyword extraction, page-competition reranking, and definition synthesis are cached under `data/step-06/.state/current/`
- the generated feature definition links use the real official URL from the Step 04 page frontmatter, not the local markdown path
