---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.580Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EDIT_DISTANCE function"
feature_slug: "edit-distance-function"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "Levenshtein distance"
  - "EDIT_DISTANCE function"
  - "edit distance function"
  - "string edit distance"
  - "EDIT_DISTANCE SQL"
  - "EDIT_DISTANCE()"
  - "EDIT_DISTANCE"
  - "edit distance"
---

# EDIT_DISTANCE function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now generally supports the EDIT_DISTANCE advanced processing function.

## Extended Definition

In BigQuery Standard SQL, `EDIT_DISTANCE` is a string function that computes the Levenshtein distance between two `STRING` or `BYTES` values. Its return type is `INT64`, and it accepts an optional `max distance` argument to set an upper bound on the computation. When a maximum is provided, the function can stop early and return that maximum when the edit distance exceeds the threshold.

## Evidence Summary

The BigQuery String Functions reference explicitly defines `EDIT_DISTANCE`, lists supported input types, return type, and demonstrates behavior for the optional maximum-distance parameter.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- SELECT CONTAINS SUBSTR ( JSON '{"lunch":"soup"}' , "lunch" , json scope = > "JSON KEYS" ) AS result ; / --------+ result +--------+ TRUE +-------- / EDIT DISTANCE EDIT DISTANCE ( value1 , value2 , [ max distance = > max distance value ] ) Description Computes the Levenshtein distance between two STRING or BYTES values.
- EDIT DISTANCE Computes the Levenshtein distance between two STRING or BYTES values.
- Return type INT64 Examples In the following example, the first character in both strings is different: SELECT EDIT DISTANCE ( 'a' , 'b' ) AS results ; / ---------+ results +---------+ 1 +--------- / In the following example, the first and second characters in both strings are different: SELECT EDIT DISTANCE ( 'aa' , 'b' ) AS results ; / ---------+ results +---------+ 2 +--------- / In the following example, only the first character in both strings is different: SELECT EDIT DISTANCE ( 'aa' , 'ba' ) AS results ; / ---------+ results +---------+ 1 +--------- / In the following example, the last six characters are different, but because the maximum distance is 2 , this function exits early and returns 2 , the maximum distance: SELECT EDIT DISTANCE ( 'abcdefg' , 'a' , max distance = > 2 ) AS results ; / ---------+ results +---------+ 2 +--------- / ENDS WITH ENDS WITH ( value , suffix ) Description Takes two STRING or BYTES values.

