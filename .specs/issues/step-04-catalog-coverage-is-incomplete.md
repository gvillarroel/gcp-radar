# Step 04 Catalog Coverage Is Incomplete

## Status

Open

## Severity

High

## Summary

Step 04 is not complete for the full product catalog. The current run state shows that only a subset of products has a usable documentation corpus.

## Current Evidence

- `24` products have a non-empty Step 04 corpus.
- `50` products are still marked `sync_failed`.
- `25` products are still marked `no_sources_selected`.
- The current aggregate count is `589` captured pages across all products.

Observed from:

- [data/step-04/current/products](C:/Users/villa/dev/gcp-radar/data/step-04/current/products)
- [data/step-04/current/index.json](C:/Users/villa/dev/gcp-radar/data/step-04/current/index.json)

## Impact

- Step 05 and later stages cannot assume catalog-wide Step 04 coverage.
- Any downstream completeness metric is currently misleading unless it excludes failed and unselected products.
- Product-level extraction quality is inconsistent across the catalog.

## Root Causes

- Some products fail during site synchronization.
- Some products never receive usable Step 03 seeds.
- Long-running Step 04 executions are interrupted before catalog completion.

## Expected Fix

- Complete Step 04 for all products that have official documentation seeds.
- Keep product state accurate even during interrupted long runs.
- Separate products with no official Step 03 evidence from products that failed acquisition.

## Validation

- Recompute the Step 04 summary from all product `state.json` files.
- Confirm that the number of `sync_failed` products drops materially.
- Confirm that each successful product has `corpus_page_summaries` with page counts greater than zero.
