# gcp-radar

`gcp-radar` builds a traceable map of Google Cloud products and features from official Google sources. It is organized as a staged evidence pipeline: acquire source signals, normalize them into product feature inventories, capture official documentation corpora, synthesize evidence-backed feature definitions, validate quality, and generate downstream product cards.

For the fuller project manual, start with [`docs/README.md`](docs/README.md), then read [`docs/pipeline.md`](docs/pipeline.md) for the stage-by-stage execution model and [`docs/repository-map.md`](docs/repository-map.md) for the repository layout.

## Prerequisites

The pipeline scripts are primarily `zx` scripts and some stages depend on local cloud, search, crawl, and model tooling.

Install or make available:

- Node.js and `zx`
- Python for the Parquet and helper scripts used by some stages
- Google Cloud CLI (`gcloud`) for IAM inventory extraction in Step 05
- Google Cloud credentials and a GCS bucket for the Step 01 release-note snapshot
- `pi` for model-backed extraction and synthesis stages
- `bx` or Brave-backed search tooling for Step 03 URL discovery
- `know` for Step 04 documentation corpus capture

Copy `.env.example` to `.env` only for local convenience, or provide the same values through your shell/user profile environment. Do not commit populated secrets.

Useful variables include:

- `GOOGLE_CLOUD_PROJECT`
- `GOOGLE_APPLICATION_CREDENTIALS`
- `BRAVE_API_KEY`
- `OPENAI_API_KEY`
- `GCP_RADAR_STEP03_PI_MODEL`
- `GCP_RADAR_STEP04_KNOW_BIN`

## Quickstart

From the repository root:

```bash
# Install zx if it is not already available.
npm install --global zx

# Optional: load local environment variables if you use a .env file.
# set -a && source .env && set +a
```

Run the pipeline stages in order. Several stages are expensive or require external credentials, so use the documented environment controls for targeted runs during iteration.

```bash
# Step 01: acquire the official Google Cloud release-note snapshot.
zx scripts/step-01/download-release-notes.mjs <gcs-bucket> [gcp-project]

# Step 02: generate per-product feature inventories.
zx scripts/step-02/generate-product-feature-markdown.mjs

# Step 03: discover and score official documentation URLs.
zx scripts/step-03/score-product-documentation-urls.mjs

# Step 04: capture product documentation corpora with know.
zx scripts/step-04/scrape-product-documentation-with-know.mjs

# Step 05: extract Google Cloud IAM role and permission inventory.
zx scripts/step-05/extract-iam-role-permission-inventory.mjs

# Step 06: generate extended feature definitions from Step 02 + Step 04 evidence.
zx scripts/step-06/generate-extended-feature-definitions.mjs

# Step 07: evaluate Step 06 outputs with the quality gate.
zx scripts/step-07/evaluate-step-06-quality-gate.mjs

# Step 08: build product-level cards from validated feature outputs.
zx scripts/step-08/build-product-cards.mjs
```

For smoke tests or targeted reruns, prefer the per-step product and max-count controls documented in each `scripts/step-XX/README.md` file, such as `GCP_RADAR_STEP03_PRODUCTS`, `GCP_RADAR_STEP04_MAX_PRODUCTS`, `GCP_RADAR_STEP06_PRODUCTS`, or `GCP_RADAR_STEP08_PRODUCTS`.

## Output locations

The repository uses stage-aligned output directories:

- `data/step-01/` stores raw source snapshots and release-note sync state.
- `data/step-02/current/` stores product feature inventory Markdown files.
- `data/step-03/current/` stores scored documentation URL rankings.
- `data/step-04/current/` stores selected crawl sources and compact `know` corpora.
- `data/step-05/current/` stores IAM role and permission inventory outputs.
- `data/step-06/current/` stores extended feature definitions and per-feature evidence files.
- `data/step-07/current/` stores quality-gate results and feedback.
- `data/step-08/current/` stores generated product cards.

Validated, durable evidence belongs under `artifacts/`; final report outputs belong under `radar/`.

## Troubleshooting

- If `zx` is missing, install it globally with `npm install --global zx` or run the scripts through your preferred package runner.
- If Step 01 fails, verify Google Cloud authentication, `GOOGLE_CLOUD_PROJECT`, and the target GCS bucket.
- If Step 03 fails, verify search credentials/tooling and use `GCP_RADAR_STEP03_PRODUCTS` or `GCP_RADAR_STEP03_MAX_PRODUCTS` for a smaller run.
- If Step 04 captures Google `sorry` pages or sparse corpora, use the browser-assisted `know` mode described in [`scripts/step-04/README.md`](scripts/step-04/README.md).
- If Step 05 fails, verify that `gcloud` is installed and authenticated, or set `GCP_RADAR_STEP05_GCLOUD_BIN`.
- If Step 06 output quality is weak, inspect Step 04 corpus coverage first, then rerun Step 07 to get actionable feedback.

## More documentation

- [`docs/README.md`](docs/README.md): project overview and documentation map
- [`docs/pipeline.md`](docs/pipeline.md): pipeline purpose, stage contracts, and feedback loop
- [`docs/repository-map.md`](docs/repository-map.md): top-level repository structure
- [`docs/strategy-so-far.md`](docs/strategy-so-far.md): current strategy, bottlenecks, and implementation notes
- [`scripts/README.md`](scripts/README.md): script organization conventions
