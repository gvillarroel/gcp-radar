# Step 04 Batch Runs Do Not Finish Cleanly

## Status

Open

## Severity

Medium

## Summary

Catalog-wide Step 04 executions are too long and often exceed execution time limits. When that happens, some progress is preserved, but the run is not reliably completed in one pass.

## Current Evidence

- Full Step 04 runs have exceeded multi-hour execution windows.
- Partial progress is written, but catalog completion still requires repeated retries and batch slicing.
- Interrupted runs previously left stale or incomplete aggregate state.

Observed from:

- [scripts/step-04/scrape-product-documentation-with-know.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-04/scrape-product-documentation-with-know.mjs)
- [data/step-04/current/index.json](C:/Users/villa/dev/gcp-radar/data/step-04/current/index.json)

## Impact

- Operational reliability is poor for full-catalog processing.
- Aggregate status can lag behind per-product state if a long run is interrupted.
- Manual supervision is still required.

## Expected Fix

- Process the catalog in smaller resumable batches by default.
- Keep `index.json` current after each product, not only at the end of a perfect run.
- Make retries and scheduling explicit instead of relying on one very long execution.

## Validation

- Run Step 04 in repeated batches and confirm each batch leaves a valid `index.json`.
- Confirm interrupted runs can resume without losing already successful product state.
