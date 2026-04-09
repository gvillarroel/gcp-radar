# Step 03 Should Prefer Crawlable Doc Roots Over Deep Leaf Seeds

## Status

Resolved

## Severity

High

## Summary

Step 03 currently emits some official URLs that are technically valid but operationally poor as Step 04 crawl seeds. For several large products, the ranking favors deep leaf pages, language-specific changelog pages, or narrow reference pages instead of stable product roots and section roots. That makes Step 04 slower, more fragile, and more likely to stall before writing `state.json`.

## Current Evidence

The issue was reproduced on April 9, 2026 and then fixed by strengthening Step 03 crawlability scoring and Step 04 family selection. The problematic seed shapes that motivated the fix included:

- `https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/datacatalog/latest/apiv1`
- `https://googleapis.dev/python/datacatalog/latest/changelog.html`
- `https://docs.cloud.google.com/dataflow/docs/reference/rest`
- `https://docs.cloud.google.com/dataform/docs/access-control`
- `https://docs.cloud.google.com/dataplex/docs/release-notes`

The original validation set for this issue was:

- [data-catalog](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/data-catalog)
- [dataflow](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/dataflow)
- [dataform](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/dataform)
- [dataplex](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/dataplex)

Observed from:

- [data/step-03/current/products](C:/Users/villa/dev/gcp-radar/data/step-03/current/products)
- [data/step-04/current/products](C:/Users/villa/dev/gcp-radar/data/step-04/current/products)

## Impact

- Step 04 spends too much time crawling low-value or overly deep entry points.
- Product runs can stall before finalizing `state.json`.
- Reprocessing the full catalog becomes inefficient even when Step 03 improved broad coverage.

## Expected Fix

- Update Step 03 scoring to strongly prefer stable, crawlable section roots over deep leaves when selecting Step 04 seeds.
- Prefer these shapes first:
  - product docs root
  - product reference root
  - IAM or access-control root
  - product-scoped client-library root
- Down-rank these shapes as initial Step 04 seeds:
  - changelog pages
  - single class or single method references
  - release-note pages when a docs root exists
  - deep resource-doc leaves under Config Connector and similar products
- Add a crawlability heuristic so Step 03 optimizes not only for topical relevance but also for Step 04 acquisition quality.

## Validation

- Re-ran Step 03 on April 9, 2026 for `data-catalog`, `dataflow`, `dataform`, and `dataplex` after adding canonical query families, stronger forbidden-path handling, and a crawlability heuristic.
- Re-ran Step 04 on April 9, 2026 for the same four products and confirmed each one now has a valid `selection.json` and `state.json`.
- Confirmed that the selected Step 04 seeds are now broad section roots instead of the original deep leaves:
  - `data-catalog`: docs root `https://docs.cloud.google.com/data-catalog/docs`, docs reference `https://docs.cloud.google.com/data-catalog/docs/reference`, IAM `https://docs.cloud.google.com/iam/docs/roles-permissions/datacatalog`
  - `dataflow`: docs root `https://docs.cloud.google.com/dataflow/docs`, docs reference `https://docs.cloud.google.com/dataflow/docs/apis`, API root `https://docs.cloud.google.com/dataflow/docs/reference/rest`
  - `dataform`: docs root `https://docs.cloud.google.com/dataform/docs`, IAM `https://docs.cloud.google.com/dataform/docs/access-control`, API root `https://docs.cloud.google.com/dataform/reference/rest`
  - `dataplex`: docs root `https://docs.cloud.google.com/dataplex/docs`, docs reference `https://docs.cloud.google.com/dataplex/docs/reference`, API root `https://docs.cloud.google.com/dataplex/docs/reference/rest`, IAM `https://docs.cloud.google.com/dataplex/docs/iam-and-access-control`
- Confirmed that the affected Step 04 product states now complete with materialized corpus pages:
  - `data-catalog`: 117 pages
  - `dataflow`: 100 pages
  - `dataform`: 95 pages
  - `dataplex`: 127 pages
- Restored the global Step 03 and Step 04 indexes after the focused reprocess runs so the repository remains in a consistent state.
