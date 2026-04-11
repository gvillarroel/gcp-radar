---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.809Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SOUNDEX function"
feature_slug: "bigquery-soundex-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "SOUNDEX(string_expr)"
  - "phonetic key"
  - "SOUNDEX function"
  - "SOUNDEX()"
  - "SOUNDEX"
  - "standard SQL string function"
---

# BigQuery SOUNDEX function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the SOUNDEX function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the SOUNDEX function and marked it generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRING Examples SELECT 'Ashcraft' AS value , SOUNDEX ( 'Ashcraft' ) AS soundex / ----------------------+---------+ value soundex +----------------------+---------+ Ashcraft A261 +----------------------+--------- / SPLIT SPLIT ( value [ , delimiter ] ) Description Splits a STRING or BYTES value, using a delimiter.
- SELECT SAFE CONVERT BYTES TO STRING ( b ' \ xc2' ) as safe convert ; SOUNDEX SOUNDEX ( value ) Description Returns a STRING that represents the Soundex code for value .
- The result of the SOUNDEX consists of a letter followed by 3 digits.
- SOUNDEX Gets the Soundex codes for words in a STRING value.

