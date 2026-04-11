---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.613Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ST_HAUSDORFFDISTANCE geography function"
feature_slug: "st-hausdorffdistance-geography-function"
latest_feature_date: "2023-10-12"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "discrete Hausdorff distance"
  - "geography distance calculation"
  - "Hausdorff distance function"
  - "GEOGRAPHY ST_HAUSDORFFDISTANCE"
  - "Hausdorff distance"
  - "ST_HAUSDORFFDISTANCE"
  - "ST_HAUSDORFF"
---

# ST_HAUSDORFFDISTANCE geography function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the GA geography function ST_HAUSDORFFDISTANCE for calculating discrete Hausdorff distance between geometries.

## Extended Definition

ST_HAUSDORFFDISTANCE is a BigQuery geography/geometry function in Standard SQL that returns the discrete Hausdorff distance between two geometries. The function appears in BigQuery’s alphabetical function reference as a documented function name and description, confirming it is an available SQL function for Hausdorff-based distance calculation.

## Evidence Summary

The cited BigQuery function reference lists ST_HAUSDORFFDISTANCE and describes it as computing discrete Hausdorff distance between two geometries, with a related ST_HAUSDORFFDWITHIN function checking distance against a threshold.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- ST HAUSDORFFDISTANCE Gets the discrete Hausdorff distance between two geometries.
- ST HAUSDORFFDWITHIN Checks if the Hausdorff distance between two GEOGRAPHY values is within a given distance.

