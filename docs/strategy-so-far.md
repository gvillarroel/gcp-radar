# Strategy So Far

## Purpose

This document explains the strategy that has emerged from the repository's
implemented work so far.

It complements `.specs/specs.md` by focusing on:

- why the stages were ordered this way
- what each stage is trying to de-risk
- what has been implemented already
- where the current bottlenecks are

Current state in this document is described as observed on April 9, 2026.

## Strategic Approach

The repository currently follows a six-part operating strategy.

### 1. Start from broad, official, machine-readable signals

The workflow begins with the official Google Cloud release notes dataset instead
of starting from hand-curated product pages.

This gives the project:

- a broad official catalog signal
- lifecycle-oriented evidence from the start
- an incremental acquisition model based on publication time
- a reproducible raw dataset that can be reprocessed later

The release-note snapshot is not treated as the final product taxonomy.
It is treated as the broadest official discovery spine available today.

### 2. Convert raw release-note evidence into stable per-product inventories

Step 02 exists to transform noisy release-note rows into a product-centered
working inventory.

The project does not yet assume that every inferred feature name from this
stage is canonical. Instead, Step 02 provides a practical intermediate layer
that answers:

- which release-note rows appear to belong to the same product
- which rows likely refer to the same feature candidate
- which features appear recent, repeated, or deprecated

This is a deliberate strategy choice: accept imperfect early feature inference
in exchange for gaining a scalable product-by-product processing unit for later
documentation work.

### 3. Discover official documentation before trying to define features deeply

The next strategic move is not direct extraction. It is URL discovery.

Step 03 ranks official Google URLs so later crawling can start from the best
possible documentation roots, references, IAM pages, and client-library roots.

This stage exists because the quality of all later extraction depends on the
quality of the official documentation entry points. If the seeds are poor,
later crawling and feature mapping become expensive and unreliable.

### 4. Build a local documentation corpus per product

Step 04 turns selected Step 03 seeds into a local product corpus by using
`know`.

The strategy here is to separate acquisition from interpretation:

- first capture and preserve the official documentation pages locally
- then perform feature-to-page matching and synthesis against local files

This reduces repeated scraping, preserves provenance, and allows later stages
to be rerun against a stable local corpus.

### 5. Extract IAM inventory as a separate authoritative track

IAM role and permission extraction was separated into Step 05 instead of being
left entirely inside product-document parsing.

This is intentional. Google exposes IAM role metadata through `gcloud` in a way
that is more systematic and reproducible than trying to infer the global IAM
catalog only from documentation pages.

The current strategy is therefore:

- use Step 04 corpora for product and feature documentation context
- use Step 05 for the authoritative role-permission inventory
- combine them in later mapping and validation stages

### 6. Extend feature definitions only after corpus capture exists

Step 06 keeps Step 02 as the feature spine and tries to improve it with Step 04
evidence.

This is a conservative strategy. The project does not attempt to invent a final
feature model from scratch. It starts with the observable release-note feature
candidates, then upgrades them only when documentation support is found.

That keeps the pipeline traceable:

- Step 02 provides the candidate feature list
- Step 04 provides the official document corpus
- Step 06 tries to connect both with explicit evidence links

## Why This Order Was Chosen

The current ordering is optimized for auditability and repeatability, not for
producing polished final cards as early as possible.

The strategy favors this sequence:

1. acquire a broad official signal
2. normalize it into product work units
3. find the best official documentation roots
4. capture the documentation locally
5. add orthogonal IAM inventory data
6. synthesize richer feature definitions
7. validate and promote only after evidence exists

This ordering avoids a common failure mode: generating polished summaries too
early from weak or mixed evidence.

## Current Implementation State

As of April 9, 2026, the repository contains implemented scripts for Steps
01 through 06:

- [download-release-notes.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-01/download-release-notes.mjs)
- [generate-product-feature-markdown.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-02/generate-product-feature-markdown.mjs)
- [score-product-documentation-urls.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-03/score-product-documentation-urls.mjs)
- [scrape-product-documentation-with-know.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-04/scrape-product-documentation-with-know.mjs)
- [extract-iam-role-permission-inventory.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-05/extract-iam-role-permission-inventory.mjs)
- [generate-extended-feature-definitions.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-06/generate-extended-feature-definitions.mjs)

Observed workspace state:

- Step 01 has a canonical release-note snapshot at [release_notes.parquet](C:/Users/villa/dev/gcp-radar/data/step-01/raw/google_cloud_release_notes/current/release_notes.parquet), last updated on April 6, 2026.
- Step 02 currently has `271` product Markdown files on disk under [data/step-02/current](C:/Users/villa/dev/gcp-radar/data/step-02/current).
- Step 03 currently has `272` product ranking directories on disk under [data/step-03/current/products](C:/Users/villa/dev/gcp-radar/data/step-03/current/products), but the latest [index.json](C:/Users/villa/dev/gcp-radar/data/step-03/current/index.json) reflects a targeted four-product rerun rather than a full-catalog summary.
- Step 04 currently has `154` product directories under [data/step-04/current/products](C:/Users/villa/dev/gcp-radar/data/step-04/current/products).
- Step 05 currently reflects a small sample run with `3` roles and `11` permissions in [data/step-05/current/index.json](C:/Users/villa/dev/gcp-radar/data/step-05/current/index.json), so the extraction shape exists but the inventory is not yet catalog-complete.
- Step 06 currently has one generated product output on disk, [bigquery](C:/Users/villa/dev/gcp-radar/data/step-06/current/products/bigquery).

## What The Current State Means

The important conclusion is that the project has moved past repository setup and
into pipeline implementation, but it has not yet crossed into reliable
catalog-wide extraction.

In practical terms:

- the acquisition and transformation stages exist
- the middle of the pipeline is the current risk concentration
- final validation, promotion into `artifacts/`, and report generation in `radar/` are still downstream work

## Main Bottlenecks

The current bottlenecks are centered on Steps 03 and 04.

### Step 03 seed quality still controls too much downstream success

Open issues show that Step 04 is often blocked before crawling even starts,
because some products never receive usable official seeds.

Relevant issues:

- [step-03-missing-seed-selection-blocks-step-04.md](C:/Users/villa/dev/gcp-radar/.specs/issues/step-03-missing-seed-selection-blocks-step-04.md)
- [step-03-should-prefer-crawlable-doc-roots-over-deep-leaf-seeds.md](C:/Users/villa/dev/gcp-radar/.specs/issues/step-03-should-prefer-crawlable-doc-roots-over-deep-leaf-seeds.md)

The strategic implication is clear: Step 03 is not just a convenience layer.
It is currently the main quality gate for the rest of the pipeline.

### Step 04 is operationally expensive and incomplete

Open issues also show that Step 04 still suffers from incomplete catalog
coverage, long-running batches, and some legacy corpus repair needs.

Relevant issues:

- [step-04-catalog-coverage-is-incomplete.md](C:/Users/villa/dev/gcp-radar/.specs/issues/step-04-catalog-coverage-is-incomplete.md)
- [step-04-batch-runs-do-not-finish-cleanly.md](C:/Users/villa/dev/gcp-radar/.specs/issues/step-04-batch-runs-do-not-finish-cleanly.md)
- [step-04-legacy-corpora-need-pages-index-repair.md](C:/Users/villa/dev/gcp-radar/.specs/issues/step-04-legacy-corpora-need-pages-index-repair.md)

Observed Step 04 product-state counts on April 9, 2026:

- `95` products are marked `sync_failed`
- `20` products are marked `no_sources_selected`
- `38` product directories currently have an empty status field
- `1` product directory is missing `state.json`

This means the corpus layer cannot yet be treated as complete or uniformly
healthy for downstream feature-definition work.

### Step 05 and Step 06 are structurally present but not yet scaled

Step 05 demonstrates the intended IAM extraction pattern, but the current data
reflects only a limited run.

Step 06 demonstrates the intended corpus-backed feature-definition pattern, but
the current on-disk output is a prototype rather than catalog-scale coverage.

## Current Strategic Priority

The highest-leverage strategy from here is:

1. improve Step 03 seed selection quality and crawlability
2. make Step 04 resumable, batch-friendly, and coverage-complete
3. rerun Step 04 until the corpus layer is reliable across the catalog
4. expand Step 05 to the full IAM predefined-role inventory
5. rerun and harden Step 06 only after Step 04 corpora are trustworthy
6. then define validation and promotion rules for `artifacts/`

This sequence matters. Investing heavily in later-stage validation or reporting
before fixing Step 03 and Step 04 would lock effort onto unstable inputs.

## What Has Not Been Finalized Yet

The repository still does not have a finalized implementation for:

- promotion rules from `data/` outputs into `artifacts/`
- validation gates for accepting feature facts as source-of-truth
- the final artifact schema per product and feature
- the final radar reporting layout in `radar/`
- catalog-wide corpus-backed feature definition generation

These are not omissions in strategy. They are intentionally downstream because
the project is still stabilizing the evidence-acquisition middle stages.

## Short Version

The strategy so far is:

- use official release notes as the broad discovery spine
- convert that signal into per-product working inventories
- discover the best official documentation roots
- capture a reusable local documentation corpus
- extract IAM inventory separately from `gcloud`
- extend feature definitions only when official corpus evidence exists
- postpone validation and final reporting until acquisition quality is stable

That strategy remains coherent. The current work is mainly about making the
middle stages reliable enough that the later validation and reporting layers
can be built on top of them without rework.
