---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.912Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL IGNORE NULLS/RESPECT NULLS in APPROX_QUANTILES"
feature_slug: "bigquery-standard-sql-ignore-nulls-respect-nulls-in-approx-quantiles"
latest_feature_date: "2017-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions"
keywords:
  - "APPROX_QUANTILES RESPECT NULLS"
  - "RESPECT NULLS APPROX_QUANTILES"
  - "APPROX_QUANTILES IGNORE NULLS"
  - "IGNORE NULLS APPROX_QUANTILES"
  - "null handling in APPROX_QUANTILES"
  - "Approx quantiles null options"
  - "APPROX_QUANTILES"
  - "IGNORE NULLS / RESPECT NULLS"
---

# BigQuery Standard SQL IGNORE NULLS/RESPECT NULLS in APPROX_QUANTILES

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports IGNORE NULLS and RESPECT NULLS modifiers for APPROX_QUANTILES.

## Extended Definition

BigQuery Standard SQL now supports IGNORE NULLS and RESPECT NULLS modifiers for APPROX_QUANTILES.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)

## Supporting Pages

### Approximate aggregate functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: STRONG
- Re-rank rationale: The function signature and syntax in this page explicitly document APPROX_QUANTILES support for IGNORE NULLS and RESPECT NULLS.

Evidence snippets:
- Examples SELECT APPROX QUANTILES ( x , 2 ) AS approx quantiles FROM UNNEST ( [ 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [1, 5, 10] +------------------ / SELECT APPROX QUANTILES ( x , 100 ) [ OFFSET ( 90 ) ] AS percentile 90 FROM UNNEST ( [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ---------------+ percentile 90 +---------------+ 9 +--------------- / SELECT APPROX QUANTILES ( DISTINCT x , 2 ) AS approx quantiles FROM UNNEST ( [ 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [1, 6, 10] +------------------ / SELECT FORMAT ( "%T" , APPROX QUANTILES ( x , 2 RESPECT NULLS )) AS approx quantiles FROM UNNEST ( [ NULL , NULL , 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [NULL, 4, 10] +------------------ / SELECT FORMAT ( "%T" , APPROX QUANTILES ( DISTINCT x , 2 RESPECT NULLS )) AS approx quantiles FROM UNNEST ( [ NULL , NULL , 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [NULL, 6, 10] +------------------ / APPROX TOP COUNT APPROX TOP COUNT ( expression , number ) Description Returns the approximate top elements of expression as an array of STRUCT s.
- Supported Argument Types Any data type except : ARRAY STRUCT INTERVAL Returned Data Types INT64 Examples SELECT APPROX COUNT DISTINCT ( x ) as approx distinct FROM UNNEST ( [ 0 , 1 , 1 , 2 , 3 , 5 ] ) as x ; / -----------------+ approx distinct +-----------------+ 5 +----------------- / APPROX QUANTILES APPROX QUANTILES ( [ DISTINCT ] expression , number [ { IGNORE RESPECT } NULLS ] ) Description Returns the approximate boundaries for a group of expression values, where number represents the number of quantiles to create.
- APPROX QUANTILES Gets the approximate quantile boundaries.

