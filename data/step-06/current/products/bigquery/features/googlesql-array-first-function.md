---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.417Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GoogleSQL ARRAY_FIRST function"
feature_slug: "googlesql-array-first-function"
latest_feature_date: "2025-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arrays"
keywords:
  - "return first array element"
  - "first element of array"
  - "array element function"
  - "GoogleSQL ARRAY_FIRST"
  - "first array function"
  - "ARRAY_FIRST()"
  - "ARRAY_FIRST"
---

# GoogleSQL ARRAY_FIRST function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ARRAY_FIRST GoogleSQL function is now available in preview and returns the first element of an array.

## Extended Definition

In BigQuery GoogleSQL, `ARRAY_FIRST` (shown as `ARRAY FIRST` in the provided example) is an array function that returns the first element from an array. The cited example demonstrates retrieving first values from array columns in a `SELECT` query, and it states that `ARRAY FIRST` together with `ARRAY LAST` produces an error when the array is empty. The provided excerpt does not include evidence for preview status or launch date.

## Evidence Summary

The official BigQuery arrays guide excerpt provides usage examples of `ARRAY FIRST` and documents its empty-array error behavior when used with `ARRAY LAST`.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)

## Supporting Pages

### Work with arrays \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- To access the first or last element in an array, use the ARRAY FIRST or ARRAY LAST function: SELECT some numbers , ARRAY FIRST ( some numbers ) AS first element , ARRAY LAST ( some numbers ) AS last element FROM Sequences ; / --------------------+---------------+--------------+ some numbers first element last element +--------------------+---------------+--------------+ [0, 1, 1, 2, 3, 5] 0 5 [2, 4, 8, 16, 32] 2 32 [5, 10] 5 10 +--------------------+---------------+-------------- / With the ARRAY FIRST and ARRAY LAST functions, if an array is empty, the function produces an error: WITH Sequences AS ( SELECT [ 0 , 1 , 1 , 2 , 3 , 5 ] AS some numbers UNION ALL SELECT [ 2 , 4 , 8 , 16 , 32 ] UNION ALL SELECT [] -- Empty array ) SELECT some numbers , ARRAY LAST ( some numbers ) AS last element FROM Sequences ; -- Error: ARRAY LAST can't get the last element of an empty array.

