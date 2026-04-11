---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.639Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SQL JSON functions"
feature_slug: "bigquery-sql-json-functions"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "LAX_BOOL"
  - "LAX_* conversion functions"
  - "JSON_STRIP_NULLS"
  - "LAX_INT64"
  - "LAX_STRING"
  - "JSON_REMOVE"
  - "JSON_* SQL functions"
  - "JSON_OBJECT"
---

# BigQuery SQL JSON functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery made a set of JSON SQL functions generally available, including JSON_ARRAY*, JSON_OBJECT, JSON_REMOVE, JSON_SET, JSON_STRIP_NULLS, and LAX_* conversion functions.

## Extended Definition

BigQuery SQL JSON functions are built-in BigQuery Standard SQL functions for handling JSON data, including operations to remove data from JSON values and to drop null values from JSON objects or arrays (for example, JSON_REMOVE and JSON_STRIP_NULLS). The documented JSON-focused function set also includes LAX conversion functions that convert JSON values to SQL scalar types, such as LAX_STRING and LAX_INT64.

## Evidence Summary

The official BigQuery Standard SQL function reference page explicitly documents JSON function entries, including JSON_REMOVE, JSON_STRIP_NULLS, and LAX_* conversion functions like LAX_STRING and LAX_INT64.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- JSON STRIP NULLS Removes JSON nulls from JSON objects and JSON arrays.
- LAX STRING Attempts to convert a JSON value to a SQL STRING value.
- LAX INT64 Attempts to convert a JSON value to a SQL INT64 value.
- JSON REMOVE Produces JSON with the specified JSON data removed.

