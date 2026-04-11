---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.448Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "KLL quantile functions"
feature_slug: "kll-quantile-functions"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "quantile approximation"
  - "KLL quantiles"
  - "KLL quantile"
  - "KLL sketch"
  - "approximate quantiles"
  - "KLL function"
  - "KLL"
---

# KLL quantile functions

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports KLL quantile functions for efficient approximate quantile calculations.

## Extended Definition

KLL quantile functions in BigQuery are SQL functions used to efficiently compute approximate quantiles via the KLL sketch method. The referenced function documentation lists `KLL.QUANTILES.MERGE` and `KLL.QUANTILES.MERGE_POINT` variants for both INT64 and FLOAT64 that merge initialized KLL sketches into a new sketch and return quantile values from that merged sketch. BigQuery release notes confirm these KLL quantile functions are available for this purpose.

## Evidence Summary

The release notes provide feature availability for efficient approximate quantile computation, while the function reference provides concrete KLL function names and their merge-to-quantile behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a general SQL function index that shows quantile-related functions (for example, APPROX_QUANTILES), but it does not clearly document KLL-specific quantile APIs.

Evidence snippets:
- KLL QUANTILES.MERGE POINT FLOAT64 Merges FLOAT64 -initialized KLL sketches into a new sketch, and then gets a specific quantile from the new sketch.
- KLL QUANTILES.MERGE POINT INT64 Merges INT64 -initialized KLL sketches into a new sketch, and then gets a specific quantile from the new sketch.
- KLL QUANTILES.MERGE FLOAT64 Merges FLOAT64 -initialized KLL sketches into a new sketch, and then gets the quantiles from the new sketch.
- KLL QUANTILES.MERGE INT64 Merges INT64 -initialized KLL sketches into a new sketch, and then gets the quantiles from the new sketch.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use KLL quantile functions to efficiently compute approximate quantiles.

