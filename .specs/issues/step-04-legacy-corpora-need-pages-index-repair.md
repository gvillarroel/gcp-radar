# Step 04 Legacy Corpora Need Pages Index Repair

## Status

Open

## Severity

Medium

## Summary

Some older Step 04 corpora contain real Markdown pages under `corpus/site/<source-id>/pages/` but do not contain `pages.json`. Step 04 summary logic depends on `pages.json`, so those corpora can be undercounted or treated as incomplete.

## Current Evidence

- Temporary validation showed products with many Markdown files on disk but missing `pages.json`.
- A repair path was added to reconstruct `pages.json` from existing `pages/*.md`, but older product state may still reflect stale counts until reprocessed.

Relevant files:

- [scripts/step-04/scrape-product-documentation-with-know.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-04/scrape-product-documentation-with-know.mjs)
- [data/step-04/current/products](C:/Users/villa/dev/gcp-radar/data/step-04/current/products)

## Impact

- Step 04 coverage metrics can be lower than the actual content already present on disk.
- Some products may be retried unnecessarily because the summary logic thinks the corpus is empty or too small.

## Expected Fix

- Rebuild `pages.json` automatically when `pages/*.md` exists and the index is missing.
- Reprocess or resummarize older products so `state.json` reflects repaired page counts.

## Validation

- For a sampled legacy product, confirm that `pages.json` is recreated from existing Markdown.
- Confirm that the product `state.json` then reflects the repaired page count.
