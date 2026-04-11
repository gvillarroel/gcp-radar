---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.390Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ARRAY_LAST GoogleSQL function"
feature_slug: "array-last-googlesql-function"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arrays"
keywords:
  - "ARRAY_LAST function call"
  - "GoogleSQL array indexing"
  - "last array element"
  - "array element function"
  - "ARRAY_LAST function"
  - "ARRAY_LAST()"
  - "ARRAY_LAST"
---

# ARRAY_LAST GoogleSQL function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The ARRAY_LAST GoogleSQL function is now generally available in BigQuery.

## Extended Definition

ARRAY_LAST is a BigQuery GoogleSQL function used to get the last element from an array value. It is used in queries as ARRAY_LAST(<array_expression>) and returns the element at the end of the array. Per the documented behavior, invoking ARRAY_LAST on an empty array raises an error indicating it cannot get the last element of an empty array.

## Evidence Summary

The cited BigQuery arrays documentation shows ARRAY LAST usage, its result semantics, and explicit error behavior for empty arrays.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)

## Supporting Pages

### Work with arrays \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: It directly documents the ARRAY LAST/ARRAY_LAST function and demonstrates returning the last element of an array.

Evidence snippets:
- To access the first or last element in an array, use the ARRAY FIRST or ARRAY LAST function: SELECT some numbers , ARRAY FIRST ( some numbers ) AS first element , ARRAY LAST ( some numbers ) AS last element FROM Sequences ; / --------------------+---------------+--------------+ some numbers first element last element +--------------------+---------------+--------------+ [0, 1, 1, 2, 3, 5] 0 5 [2, 4, 8, 16, 32] 2 32 [5, 10] 5 10 +--------------------+---------------+-------------- / With the ARRAY FIRST and ARRAY LAST functions, if an array is empty, the function produces an error: WITH Sequences AS ( SELECT [ 0 , 1 , 1 , 2 , 3 , 5 ] AS some numbers UNION ALL SELECT [ 2 , 4 , 8 , 16 , 32 ] UNION ALL SELECT [] -- Empty array ) SELECT some numbers , ARRAY LAST ( some numbers ) AS last element FROM Sequences ; -- Error: ARRAY LAST can't get the last element of an empty array.

