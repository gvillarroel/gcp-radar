---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.808Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery REGEXP_SUBSTR function"
feature_slug: "bigquery-regexp-substr-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "regex substring extraction"
  - "REGEXP_SUBSTR(string_expr, regexp)"
  - "occurrence argument"
  - "standard SQL regex function"
  - "REGEXP_SUBSTR()"
  - "REGEXP_SUBSTR"
  - "regexp_substr"
---

# BigQuery REGEXP_SUBSTR function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the REGEXP_SUBSTR function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the REGEXP_SUBSTR function and marked it generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRING or BYTES Examples WITH example AS ( SELECT 'Hello World Helloo' AS value , 'H?ello+' AS regex , 1 AS position , 1 AS occurrence ) SELECT value , regex , position , occurrence , REGEXP SUBSTR ( value , regex , position , occurrence ) AS regexp value FROM example ; / --------------------+---------+----------+------------+--------------+ value regex position occurrence regexp value +--------------------+---------+----------+------------+--------------+ Hello World Helloo H?ello+ 1 1 Hello +--------------------+---------+----------+------------+-------------- / REPEAT REPEAT ( original value , repetitions ) Description Returns a STRING or BYTES value that consists of original value , repeated.
- Return type STRING or BYTES Examples SELECT REGEXP REPLACE ( '# Heading' , r '^# ([a-zA-Z0-9 \ s]+$)' , '<h1> \\ 1</h1>' ) AS html / --------------------------+ html +--------------------------+ <h1>Heading</h1> +-------------------------- / REGEXP SUBSTR REGEXP SUBSTR ( value , regexp [ , position [ , occurrence ]] ) Description Synonym for REGEXP EXTRACT .
- REGEXP SUBSTR Synonym for REGEXP EXTRACT .

