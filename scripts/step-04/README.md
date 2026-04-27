# Step 04 Scripts

This directory stores scripts for workflow Step 04.

Step 04 is currently intended for per-product documentation corpus capture using `know`.

Current generator:

- `scrape-product-documentation-with-know.mjs`

Purpose:

- read the canonical Step 03 product rankings
- select a minimal non-redundant set of official crawl seeds
- synchronize those sources with `know`
- skip unnecessary rescraping when the selected seed set is unchanged

Canonical input:

- `data/step-03/current/products/<product-slug>/ranking.json`

Canonical output:

- `data/step-04/current/index.json`
- `data/step-04/current/products/<product-slug>/selection.json`
- `data/step-04/current/products/<product-slug>/state.json`
- `data/step-04/current/products/<product-slug>/corpus/metadata.yaml`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/pages.json`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/pages/*.md`
- `data/step-04/current/products/<product-slug>/corpus/site/<source-id>/source-metadata.yaml`

Usage:

```bash
zx scripts/step-04/scrape-product-documentation-with-know.mjs
```

Optional controls:

- set `GCP_RADAR_STEP04_INPUT_ROOT` to override the default Step 03 input root
- set `GCP_RADAR_STEP04_OUTPUT_ROOT` to override the default Step 04 output root
- set `GCP_RADAR_STEP04_PRODUCTS` to limit execution to a comma-separated list of product slugs
- set `GCP_RADAR_STEP04_MAX_PRODUCTS` to limit the number of products processed
- set `GCP_RADAR_STEP04_FAMILIES` to limit selected crawl families
- set `KNOW_SITE_CDP_URL` to reuse a live Chrome or Brave session for browser-assisted site capture
- set `GCP_RADAR_STEP04_SITE_COMPACT=0` only if you explicitly want the older verbose site layout
- set `GCP_RADAR_STEP04_ROOT_MAX_DEPTH` and `GCP_RADAR_STEP04_ROOT_MAX_PAGES` to tune product-root crawl size
- set `GCP_RADAR_STEP04_REFERENCE_MAX_DEPTH` and `GCP_RADAR_STEP04_REFERENCE_MAX_PAGES` to tune reference crawl size
- pass `--reprocess` to force a fresh sync and export even when the selected source signature is unchanged

Recommended capture mode for `docs.cloud.google.com`:

- launch Chrome or Brave with a persistent profile and `--remote-debugging-port=9222`
- open the target documentation pages in that browser
- set `KNOW_SITE_CDP_URL=http://127.0.0.1:9222`
- install `know` with Python 3.12:
  `uv python install 3.12`
  `uv tool install --python 3.12 --force --editable "C:\\Users\\villa\\dev\\knowledge[crawl4ai]"`
- run Step 04 with `GCP_RADAR_STEP04_KNOW_BIN` pointing to that `uv`-installed `know.exe`
- set `GCP_RADAR_STEP04_DISABLE_LOCAL_KNOW=1` so Step 04 does not fall back to `python -m knowledge.cli` from a different interpreter

In this mode, `know` reuses browser cookies for the site crawler, which avoids Google `sorry` pages more reliably than plain HTTP scraping from the same machine.

Current default behavior:

- Step 04 registers each `site` source with `--compact`
- Step 04 skips `know export` for compact site sources
- the retained corpus is only `site/` plus key metadata, without `raw/` or `library/`

## Corpus coverage dashboard

Summarize captured corpus health without network access:

```bash
node scripts/step-04/build-corpus-coverage-dashboard.mjs
```

The command writes `data/step-04/current/coverage-dashboard.json` and
`data/step-04/current/coverage-dashboard.md`, including source counts, captured
page counts, failed-source counts, anti-bot detections, and low-coverage flags.
Use `GCP_RADAR_STEP04_MIN_HEALTHY_PAGES` to tune the warning threshold.
