---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.907Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery HyperLogLog++ functions"
feature_slug: "bigquery-hyperloglog-functions"
latest_feature_date: "2017-03-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "HLL_COUNT.INIT"
  - "approximate cardinality function"
  - "HLL_COUNT.MERGE_PARTIAL"
  - "HLL_COUNT.MERGE"
  - "approximate unique count"
  - "HyperLogLog plus plus"
  - "HyperLogLog++"
  - "HLL++"
---

# BigQuery HyperLogLog++ functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added HyperLogLog++-based functions for estimating unique values in large datasets.

## Extended Definition

BigQuery Standard SQL added HyperLogLog++-based functions for estimating unique values in large datasets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- HLL COUNT.MERGE PARTIAL Merges HLL++ sketches of the same underlying type into a new sketch.
- HLL COUNT.MERGE Merges HLL++ sketches of the same underlying type into a new sketch, and then gets the cardinality of the new sketch.
- HLL COUNT.INIT Aggregates values of the same underlying type into a new HLL++ sketch.
- HLL COUNT.EXTRACT Extracts a cardinality estimate of an HLL++ sketch.

