---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.933Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SAFE_CAST functions in BigQuery standard SQL"
feature_slug: "safe-cast-functions-in-bigquery-standard-sql"
latest_feature_date: "2016-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
keywords:
  - "returns NULL on invalid cast"
  - "cast error handling"
  - "SAFE_CAST function"
  - "safe cast function"
  - "SAFE_CAST()"
  - "SAFE_CAST"
  - "safe cast"
  - "safe_cast"
---

# SAFE_CAST functions in BigQuery standard SQL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added standard SQL safe casting functions that return NULL instead of errors on invalid casts.

## Extended Definition

BigQuery added standard SQL safe casting functions that return NULL instead of errors on invalid casts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE TABLE bqml tutorial.iowa liquor sales with weather AS WITH sales AS ( SELECT DATE , store number , item number , bottles sold , SAFE CAST ( SAFE CAST ( zip code AS FLOAT64 ) AS INT64 ) AS zip code FROM bigquery-public-data.iowa liquor sales.sales AS sales WHERE SAFE CAST ( zip code AS FLOAT64 ) IS NOT NULL ), aggregated sales AS ( SELECT DATE , store number , item number , ANY VALUE ( zip code ) AS zip code , SUM ( bottles sold ) AS bottles sold , FROM sales GROUP BY DATE , store number , item number ), weather AS ( SELECT DATE , SAFE CAST ( postal code AS INT64 ) AS zip code , avg temperature air 2m f AS temperature , avg humidity specific 2m gpkg AS humidity , FROM bigquery-public-data.covid19 weathersource com.postal code day history WHERE country = 'US' AND SAFE CAST ( postal code AS INT64 ) IS NOT NULL ) SELECT aggregated sales . date , aggregated sales . store number , aggregated sales . item number , aggregated sales . bottles sold , weather . temperature AS temperature , weather . humidity AS humidity FROM aggregated sales LEFT JOIN weather ON aggregated sales . zip code = weather . zip code AND aggregated sales .

