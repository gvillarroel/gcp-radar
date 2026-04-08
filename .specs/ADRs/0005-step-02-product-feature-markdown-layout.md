# ADR 0005: Step 02 Product Feature Markdown Layout

## Status

Accepted

## Context

Step 02 needs a stable output shape that maps the Step 01 release-note dataset into product-oriented markdown files.

The repository rules require stage-oriented storage under `data/step-02/`, but the internal layout for Step 02 outputs had not yet been defined.

This stage also needs to support two execution modes:

- an assistant-backed mode that infers a concise feature name and objective from each release-note row
- a deterministic fallback mode when no assistant credentials are configured

## Decision

Adopt the following Step 02 output layout:

- `data/step-02/current/index.md` as the canonical product index
- `data/step-02/current/products/<product-slug>.md` as the canonical markdown file for each product
- `data/step-02/current/cache/assistant-results.json` as the optional cache for assistant-derived feature names and summaries

Each per-product markdown file is generated from the canonical Step 01 Parquet file at:

- `data/step-01/raw/google_cloud_release_notes/current/release_notes.parquet`

Each table row in the Step 02 markdown represents one release-note entry grouped under its product, with:

- publication date
- release-note type
- inferred feature name
- inferred feature objective summary

When assistant configuration is unavailable, the generator must still produce the canonical markdown output using deterministic text-cleaning and title-extraction heuristics.

## Consequences

Benefits:

- Step 02 outputs are explicit and easy to inspect
- downstream stages can consume stable product markdown paths
- assistant usage is optional rather than a hard dependency
- repeated runs can reuse cached assistant results when configured

Costs:

- inferred feature names are not yet canonical feature identities
- heuristic fallback summaries will be lower quality than assistant-backed summaries
