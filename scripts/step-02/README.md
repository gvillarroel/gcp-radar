# Step 02 Scripts

This directory stores scripts for workflow Step 02.

Step 02 is currently intended for product and feature segregation.

Current generator:

- `generate-product-feature-markdown.mjs`

Purpose:

- read the canonical Step 01 release-note Parquet snapshot
- extract feature and deprecation events from release-note entries with `pi`
- deduplicate events into one feature row per product feature
- order features from newest to oldest by latest feature event
- include deprecation dates when matching deprecation events are found
- emit a flat markdown set under `data/step-02/current/`

Implementation style:

- keep the `zx` script as a thin orchestrator
- use `python` to read the Parquet snapshot
- use `pi` as the inference backend
- fail explicitly if `pi` is not available
- compensate for `pi` output drift with deterministic post-processing:
- split compound model outputs into one feature per canonical model when needed
- normalize aliases before merge-key generation
- merge close variants such as deprecation aliases, PSC/DNS variants, and cross-project copy aliases into stable buckets

Usage:

```bash
zx scripts/step-02/generate-product-feature-markdown.mjs
```

Optional controls:

- set `GCP_RADAR_STEP02_PI_MODEL` to override the default `pi` model
- set `GCP_RADAR_STEP02_MAX_CONCURRENCY` to override the hardware-aware concurrent `pi` request limit
- set `GCP_RADAR_STEP02_BATCH_SIZE` to override the default row batch size sent to `pi`
- set `GCP_RADAR_STEP02_PI_REQUEST_TIMEOUT_MS` to override the per-request `pi` timeout before the process tree is killed
- set `GCP_RADAR_STEP02_MAX_ROWS` for smoke tests or partial runs
- set `GCP_RADAR_STEP02_PRODUCTS` to limit execution to a comma-separated list of product names during iteration
- set `GCP_RADAR_STEP02_OUTPUT_ROOT` to write into an alternate output directory

Incremental execution:

- the canonical Step 02 output is a single readable folder: `data/step-02/current/`
- `index.md` and every product markdown live directly in that folder
- internal state is stored outside the readable output under `data/step-02/.state/current/` by default
- row-level `pi` extraction is cached in `data/step-02/.state/current/assistant-results.json`
- product-level render state is tracked in `data/step-02/.state/current/product-state.json`
- a product is skipped only when both conditions hold:
- every current source row for that product already has cached extracted events
- the current product row-set signature matches the last rendered signature
- this means repeated runs avoid both re-inference and re-render when there is no delta
- if new rows arrive for a product, only the uncached rows are sent to `pi`, then that product markdown is rebuilt
- if the row set changes because rows were removed or replaced, the product is rebuilt even if all remaining rows are cached

Default `pi` model:

- `openai-codex/gpt-5.3-codex-spark`

Default max concurrency:

- computed as roughly 75% of detected parallelism, capped at `12`

Default batch size:

- `12`

Default `pi` request timeout:

- `300000` ms

Reproducibility note:

- during iteration, validate one product with repeated clean runs before expanding scope
- the current `Vertex AI` reproducibility harness used `GCP_RADAR_STEP02_PRODUCTS='Vertex AI'`, `GCP_RADAR_STEP02_MAX_ROWS='40'`, and three fresh output roots
- the acceptance bar is structural consistency across runs:
- same feature count
- same deprecation mapping
- same canonical merge groups
