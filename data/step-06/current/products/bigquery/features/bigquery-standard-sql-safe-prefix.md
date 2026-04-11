---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.880Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery standard SQL SAFE prefix"
feature_slug: "bigquery-standard-sql-safe-prefix"
latest_feature_date: "2018-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arrays"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
keywords:
  - "suppress expression errors"
  - "SAFE_ORDINAL"
  - "SAFE_DIVIDE"
  - "SAFE_OFFSET"
  - "safe prefix syntax"
  - "SAFE prefix"
  - "SAFE_CAST"
  - "safe operations"
---

# BigQuery standard SQL SAFE prefix

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added the SAFE prefix for suppressing errors in expressions.

## Extended Definition

BigQuery standard SQL added the SAFE prefix for suppressing errors in expressions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### Work with arrays \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/arrays](https://docs.cloud.google.com/bigquery/docs/arrays)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: SAFE OFFSET/SAFE ORDINAL are shown as safe alternatives that avoid index errors, giving partial but not general SAFE-expression coverage.

Evidence snippets:
- To avoid this, you can use SAFE OFFSET or SAFE ORDINAL to return NULL instead of raising an error.
- WITH Combinations AS ( SELECT [ 'a' , 'b' ] AS letters , [ 1 , 2 , 3 ] AS numbers ) SELECT ARRAY ( SELECT AS STRUCT letters [ SAFE OFFSET ( index ) ] AS letter , numbers [ SAFE OFFSET ( index ) ] AS number FROM Combinations INNER JOIN UNNEST ( GENERATE ARRAY ( 0 , LEAST ( ARRAY LENGTH ( letters ), ARRAY LENGTH ( numbers )) - 1 )) AS index ORDER BY index ) AS pairs ; / ------------------------------+ pairs +------------------------------+ [{ letter: "a", number: 1 }, { letter: "b", number: 2 }] +------------------------------ / You can use input arrays of different lengths as long as the first array is equal to or less than the length of the second array.
- WITH Combinations AS ( SELECT [ 'a' , 'b' ] AS letters , [ 1 , 2 , 3 ] AS numbers ) SELECT ARRAY ( SELECT AS STRUCT letters [ SAFE OFFSET ( index ) ] AS letter , numbers [ SAFE OFFSET ( index ) ] AS number FROM Combinations INNER JOIN UNNEST ( GENERATE ARRAY ( 0 , GREATEST ( ARRAY LENGTH ( letters ), ARRAY LENGTH ( numbers )) - 1 )) AS index ORDER BY index ) AS pairs ; / -------------------------------+ pairs +-------------------------------+ [{ letter: "a", number: 1 }, { letter: "b", number: 2 }, { letter: null, number: 3 }] +------------------------------- / Building arrays of arrays GoogleSQL doesn't support building arrays of arrays directly.
- The query returns NULL values for any empty arrays instead of an error: SELECT some numbers , some numbers [ SAFE OFFSET ( ARRAY LENGTH ( some numbers ) - 1 ) ] AS last element FROM Sequences ; / --------------------+--------------+ some numbers last element +--------------------+--------------+ [0, 1, 1, 2, 3, 5] 5 [2, 4, 8, 16, 32] 32 [] NULL +--------------------+-------------- / ARRAY LENGTH(array) returns the number of elements in the array.

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE TABLE bqml tutorial.iowa liquor sales with weather AS WITH sales AS ( SELECT DATE , store number , item number , bottles sold , SAFE CAST ( SAFE CAST ( zip code AS FLOAT64 ) AS INT64 ) AS zip code FROM bigquery-public-data.iowa liquor sales.sales AS sales WHERE SAFE CAST ( zip code AS FLOAT64 ) IS NOT NULL ), aggregated sales AS ( SELECT DATE , store number , item number , ANY VALUE ( zip code ) AS zip code , SUM ( bottles sold ) AS bottles sold , FROM sales GROUP BY DATE , store number , item number ), weather AS ( SELECT DATE , SAFE CAST ( postal code AS INT64 ) AS zip code , avg temperature air 2m f AS temperature , avg humidity specific 2m gpkg AS humidity , FROM bigquery-public-data.covid19 weathersource com.postal code day history WHERE country = 'US' AND SAFE CAST ( postal code AS INT64 ) IS NOT NULL ) SELECT aggregated sales . date , aggregated sales . store number , aggregated sales . item number , aggregated sales . bottles sold , weather . temperature AS temperature , weather . humidity AS humidity FROM aggregated sales LEFT JOIN weather ON aggregated sales . zip code = weather . zip code AND aggregated sales .

