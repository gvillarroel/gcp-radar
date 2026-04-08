# Step 03 Missing Seed Selection Blocks Step 04

## Status

Open

## Severity

High

## Summary

A significant part of Step 04 failure is not caused by crawling itself. Many products never receive usable Step 03 seeds, so Step 04 has nothing to process and ends as `no_sources_selected`.

## Current Evidence

- `25` products are currently marked `no_sources_selected`.
- This is a Step 03 discovery and ranking problem, not a Step 04 crawler problem.

Observed from:

- [data/step-04/current/products](C:/Users/villa/dev/gcp-radar/data/step-04/current/products)
- [data/step-03/current/products](C:/Users/villa/dev/gcp-radar/data/step-03/current/products)

## Example

BigQuery previously showed a related symptom: a valid official page such as `https://docs.cloud.google.com/bigquery/docs/data-clean-rooms` was not present in the Step 03 ranking and therefore had to be recovered later during Step 04.

## Impact

- Step 04 cannot be complete until Step 03 produces broader and more accurate official seeds.
- Crawl improvements alone cannot fix products that never receive eligible URLs.

## Expected Fix

- Improve Step 03 query generation and ranking breadth.
- Prefer official product docs roots, overview pages, API roots, IAM roots, and client-library roots more consistently.
- Add product-specific recovery queries where discovery repeatedly fails.

## Validation

- Reduce the count of Step 04 `no_sources_selected` products.
- For a sampled set of previously unselected products, confirm that `selection.json` now contains at least one official seed.
