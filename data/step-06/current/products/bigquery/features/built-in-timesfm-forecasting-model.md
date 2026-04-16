---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.270Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Built-in TimesFM forecasting model"
feature_slug: "built-in-timesfm-forecasting-model"
latest_feature_date: "2025-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
keywords:
  - "built"
  - "timesfm"
  - "forecasting"
  - "model"
  - "bigquery"
  - "ml"
  - "provides"
  - "univariate"
---

# Built-in TimesFM forecasting model

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML provides a built-in TimesFM univariate time series forecasting model for forecasting and forecast evaluation.

## Extended Definition

BigQuery ML provides a built-in TimesFM univariate time series forecasting model for forecasting and forecast evaluation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)

## Supporting Pages

### "Forecast multiple time series with a TimesFM univariate model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This tutorial teaches you how to use the AI.FORECAST function with BigQuery ML's built-in TimesFM univariate model to forecast the future value for a given column, based on the historical value of that column.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with a TimesFM univariate model Stay organized with collections Save and categorize content based on your preferences.
- Objectives This tutorial guides you through using the AI.FORECAST function with the built-in TimesFM model to forecast bike share trips.
- Follow these steps to forecast data with the TimesFM model: In the Google Cloud console, go to the BigQuery page.

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE TABLE bqml tutorial.googleio page views AS SELECT DATETIME TRUNC ( datehour , DAY ) AS date , SUM ( views ) AS views FROM bigquery-public-data.wikipedia.pageviews WHERE datehour >= '2017-01-01' AND datehour '2023-01-01' AND title = 'Google I/O' GROUP BY DATETIME TRUNC ( datehour , DAY ) Create a time-series forecasting model that uses built-in holidays Create a model that forecasts daily page views for the Wikipedia "Google I/O" page, based on page view data before 2022 and taking built-in holidays into account: Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ; Visualize the forecasted results After you create the model using built-in holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- HOLIDAY INFO ( MODEL bqml tutorial.forecast googleio with custom holiday ); The results show both Google I/O and the built-in holidays in the list of holidays: Evaluate the effects of the custom holidays Evaluate the effects of the custom holidays on the forecasted results by using the ML.EXPLAIN FORECAST function : Go to the BigQuery page.
- Use custom holidays in an ARIMA PLUS time-series forecasting model This tutorial shows you how to do the following tasks: Create an ARIMA PLUS time-series forecasting model that uses only built-in holidays.

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- Home Documentation Data analytics BigQuery Guides Send feedback Detect anomalies in multiple time series with the TimesFM model Stay organized with collections Save and categorize content based on your preferences.
- Objectives This tutorial guides you through using the AI.DETECT ANOMALIES function with the built-in TimesFM model to detect anomalies in bike share trips.
- Follow these steps to detect anomalies with the TimesFM model: In the Google Cloud console, go to the BigQuery page.

