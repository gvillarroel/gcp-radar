---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.327Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AI.FORECAST latest timestamp parameter"
feature_slug: "ai-forecast-latest-timestamp-parameter"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
keywords:
  - "forecast start point"
  - "latest timestamp parameter"
  - "time series forecast"
  - "timestamp parameter"
  - "latest timestamp"
  - "AI.FORECAST"
  - "FORECAST"
---

# AI.FORECAST latest timestamp parameter

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The AI.FORECAST function now supports specifying the latest timestamp value used as the starting point for forecasting.

## Extended Definition

In BigQuery, AI.FORECAST now supports a "latest timestamp" parameter that defines the latest timestamp value used as the starting point for a forecast. This parameter allows callers to base generated forecast values on history up to a specified timestamp rather than only using an implicit endpoint.

## Evidence Summary

The release notes explicitly announce that AI.FORECAST supports specifying the latest timestamp for forecasting, while the linked ARIMA PLUS tutorial page provides adjacent AI time-series forecasting context but does not add explicit syntax for this specific parameter.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The AI.FORECAST function supports specifying the latest timestamp value for forecasting.
- This paper describes the algorithms behind the ARIMA PLUS and ARIMA PLUS XREG models for time series forecasting and anomaly detection, and demonstrates the high performance, scalability, explainability, and customizability of the models.
- November 06, 2025 Announcement The research paper ARIMA PLUS: Large-scale, Accurate, Automatic and Interpretable In-Database Time Series Forecasting and Anomaly Detection in Google BigQuery is now publicly available.
- You can use the TimesFM 2.5 model in the AI.FORECAST , AI.EVALUATE , and AI.DETECT ANOMALIES functions to achieve better forecasting accuracy and lower latency.

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: The page uses the ML.FORECAST function for inference, but it does not mention AI.FORECAST or a latest-timestamp parameter.

Evidence snippets:
- Complete the Single time series forecasting from Google Analytics data tutorial for an introduction to this topic.
- Before following this tutorial, you should be familiar with single time series forecasting.
- This option causes the model to only forecast values that are greater than 0, based on the values in the column specified by the time series data col argument, in this case num trips . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Run the CREATE MODEL query to create and train your model: In the Google Cloud console, click the Compose new query button.
- FORECAST ( MODEL bqml tutorial . nyc citibike arima model , STRUCT ( 365 AS horizon , 0.9 AS confidence level )) ) UNION ALL ( SELECT DATE ( date name ) AS forecast timestamp , num trips AS history value , NULL AS forecast value , start station id AS start station id , FROM ( SELECT EXTRACT ( DATE FROM starttime ) AS date name , COUNT ( ) AS num trips , start station id AS start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date name , start station id ) ) ) WHERE start station id = 79 ORDER BY forecast timestamp , start station id Click Run .

