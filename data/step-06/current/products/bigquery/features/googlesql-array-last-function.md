---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.417Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GoogleSQL ARRAY_LAST function"
feature_slug: "googlesql-array-last-function"
latest_feature_date: "2025-06-11"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/arrays"
keywords:
  - "return last array element"
  - "last element of array"
  - "array element function"
  - "GoogleSQL ARRAY_LAST"
  - "last array function"
  - "ARRAY_LAST()"
  - "ARRAY_LAST"
---

# GoogleSQL ARRAY_LAST function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The ARRAY_LAST GoogleSQL function is now available in preview and returns the last element of an array.

## Extended Definition

In GoogleSQL, `ARRAY LAST` returns the last element from an array value in a `SELECT` expression. The BigQuery arrays documentation shows it as the counterpart to `ARRAY FIRST`, and states that calling it on an empty array raises an error because it cannot return a last element.

## Evidence Summary

The cited BigQuery arrays page provides direct usage examples and explicit error behavior for `ARRAY LAST`, establishing its purpose and empty-array failure mode.

## Source Links

- [https://cloud.google.com/bigquery/docs/arrays](https://cloud.google.com/bigquery/docs/arrays)

## Supporting Pages

### Work with arrays \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: The page provides concrete usage of the ARRAY LAST function to return the last array element.

Evidence snippets:
- To access the first or last element in an array, use the ARRAY FIRST or ARRAY LAST function: SELECT some numbers , ARRAY FIRST ( some numbers ) AS first element , ARRAY LAST ( some numbers ) AS last element FROM Sequences ; / --------------------+---------------+--------------+ some numbers first element last element +--------------------+---------------+--------------+ [0, 1, 1, 2, 3, 5] 0 5 [2, 4, 8, 16, 32] 2 32 [5, 10] 5 10 +--------------------+---------------+-------------- / With the ARRAY FIRST and ARRAY LAST functions, if an array is empty, the function produces an error: WITH Sequences AS ( SELECT [ 0 , 1 , 1 , 2 , 3 , 5 ] AS some numbers UNION ALL SELECT [ 2 , 4 , 8 , 16 , 32 ] UNION ALL SELECT [] -- Empty array ) SELECT some numbers , ARRAY LAST ( some numbers ) AS last element FROM Sequences ; -- Error: ARRAY LAST can't get the last element of an empty array.

