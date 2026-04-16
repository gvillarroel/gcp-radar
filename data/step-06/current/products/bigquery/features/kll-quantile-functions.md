---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.373Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "KLL quantile functions"
feature_slug: "kll-quantile-functions"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "kll"
  - "quantile"
  - "functions"
  - "let"
  - "you"
  - "efficiently"
  - "compute"
  - "approximate"
---

# KLL quantile functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

KLL quantile functions let you efficiently compute approximate quantiles in BigQuery.

## Extended Definition

KLL quantile functions let you efficiently compute approximate quantiles in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### Approximate aggregate functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples SELECT APPROX QUANTILES ( x , 2 ) AS approx quantiles FROM UNNEST ( [ 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [1, 5, 10] +------------------ / SELECT APPROX QUANTILES ( x , 100 ) [ OFFSET ( 90 ) ] AS percentile 90 FROM UNNEST ( [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ---------------+ percentile 90 +---------------+ 9 +--------------- / SELECT APPROX QUANTILES ( DISTINCT x , 2 ) AS approx quantiles FROM UNNEST ( [ 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [1, 6, 10] +------------------ / SELECT FORMAT ( "%T" , APPROX QUANTILES ( x , 2 RESPECT NULLS )) AS approx quantiles FROM UNNEST ( [ NULL , NULL , 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [NULL, 4, 10] +------------------ / SELECT FORMAT ( "%T" , APPROX QUANTILES ( DISTINCT x , 2 RESPECT NULLS )) AS approx quantiles FROM UNNEST ( [ NULL , NULL , 1 , 1 , 1 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ) AS x ; / ------------------+ approx quantiles +------------------+ [NULL, 6, 10] +------------------ / APPROX TOP COUNT APPROX TOP COUNT ( expression , number ) Description Returns the approximate top elements of expression as an array of STRUCT s.
- Supported Argument Types Any data type except : ARRAY STRUCT INTERVAL Returned Data Types INT64 Examples SELECT APPROX COUNT DISTINCT ( x ) as approx distinct FROM UNNEST ( [ 0 , 1 , 1 , 2 , 3 , 5 ] ) as x ; / -----------------+ approx distinct +-----------------+ 5 +----------------- / APPROX QUANTILES APPROX QUANTILES ( [ DISTINCT ] expression , number [ { IGNORE RESPECT } NULLS ] ) Description Returns the approximate boundaries for a group of expression values, where number represents the number of quantiles to create.
- Home Documentation Data analytics BigQuery Reference Send feedback Approximate aggregate functions Stay organized with collections Save and categorize content based on your preferences.
- Approximate aggregate functions are scalable in terms of memory usage and time, but produce approximate results instead of exact results.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- APPROX QUANTILES Gets the approximate quantile boundaries.
- Home Documentation Data analytics BigQuery Reference Send feedback Functions (alphabetical) Stay organized with collections Save and categorize content based on your preferences.
- KLL QUANTILES.MERGE POINT FLOAT64 Merges FLOAT64 -initialized KLL sketches into a new sketch, and then gets a specific quantile from the new sketch.
- KLL QUANTILES.MERGE POINT INT64 Merges INT64 -initialized KLL sketches into a new sketch, and then gets a specific quantile from the new sketch.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- QUANTILES( expr [, buckets ]) Computes approximate minimum, maximum, and quantiles for the input expression.
- QUANTILES() Computes approximate minimum, maximum, and quantiles ...
- QUANTILES() Computes approximate minimum, maximum, and quantiles ...
- The window frame comprises two rows that move with the current row. legacySQL SELECT name , value , AVG ( value ) OVER ( ORDER BY value ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS MovingAverage FROM ( SELECT "a" AS name , 0 AS value ), ( SELECT "b" AS name , 1 AS value ), ( SELECT "c" AS name , 2 AS value ), ( SELECT "d" AS name , 3 AS value ), ( SELECT "e" AS name , 4 AS value ); Return value: +------+-------+---------------+ name value MovingAverage +------+-------+---------------+ a 0 0.0 b 1 0.5 c 2 1.5 d 3 2.5 e 4 3.5 +------+-------+---------------+ Syntax Window functions AVG() COUNT( ) COUNT([DISTINCT]) MAX() MIN() STDDEV() SUM() The same operation as the corresponding Aggregate functions , but are computed over a window defined by the OVER clause.

