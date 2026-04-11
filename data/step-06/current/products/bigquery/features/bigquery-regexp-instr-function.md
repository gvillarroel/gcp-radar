---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.808Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery REGEXP_INSTR function"
feature_slug: "bigquery-regexp-instr-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "REGEXP_INSTR(string_expr, regexp)"
  - "regex search position"
  - "standard SQL regex function"
  - "REGEXP_INSTR function"
  - "REGEXP_INSTR()"
  - "REGEXP_INSTR"
  - "return match index"
---

# BigQuery REGEXP_INSTR function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the REGEXP_INSTR function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the REGEXP_INSTR function and marked it generally available.

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
- Return type INT64 Examples SELECT REGEXP INSTR ( 'ab@cd-ef' , '@[^-] ' ) AS instr a , REGEXP INSTR ( 'ab@d-ef' , '@[^-] ' ) AS instr b , REGEXP INSTR ( 'abc@cd-ef' , '@[^-] ' ) AS instr c , REGEXP INSTR ( 'abc-ef' , '@[^-] ' ) AS instr d , / ---------------------------------------+ instr a instr b instr c instr d +---------------------------------------+ 3 3 4 0 +--------------------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 1 ) AS instr a , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 2 ) AS instr b , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 3 ) AS instr c , REGEXP INSTR ( 'a@cd-ef b@cd-ef' , '@[^-] ' , 4 ) AS instr d , / ---------------------------------------+ instr a instr b instr c instr d +---------------------------------------+ 2 2 10 10 +--------------------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 1 ) AS instr a , REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 2 ) AS instr b , REGEXP INSTR ( 'a@cd-ef b@cd-ef c@cd-ef' , '@[^-] ' , 1 , 3 ) AS instr c / -----------------------------+ instr a instr b instr c +-----------------------------+ 2 10 18 +----------------------------- / SELECT REGEXP INSTR ( 'a@cd-ef' , '@[^-] ' , 1 , 1 , 0 ) AS instr a , REGEXP INSTR ( 'a@cd-ef' , '@[^-] ' , 1 , 1 , 1 ) AS instr b / -------------------+ instr a instr b +-------------------+ 2 5 +------------------- / REGEXP REPLACE REGEXP REPLACE ( value , regexp , replacement ) Description Returns a STRING where all substrings of value that match regular expression regexp are replaced with replacement .
- REGEXP INSTR REGEXP INSTR ( source value , regexp [ , position [ , occurrence , [ occurrence position ]]] ) Description Returns the lowest 1-based position of a regular expression, regexp , in source value . source value and regexp must be the same type, either STRING or BYTES .
- REGEXP INSTR Finds the position of a regular expression match in a value, optionally starting the search at a given offset or occurrence.

