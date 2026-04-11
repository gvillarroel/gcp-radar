---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.439Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML TimesFM built-in forecasting model"
feature_slug: "bigquery-ml-timesfm-built-in-forecasting-model"
latest_feature_date: "2025-04-08"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Times FM"
  - "univariate time-series model"
  - "built-in TimesFM model"
  - "TimesFM in AI.FORECAST"
  - "TimesFM forecasting"
  - "BigQuery ML TimesFM"
  - "TimesFM"
  - "timesfm"
---

# BigQuery ML TimesFM built-in forecasting model

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML now includes a built-in TimesFM univariate time-series model accessible through AI.FORECAST.

## Extended Definition

BigQuery ML provides a built-in TimesFM univariate time-series model, described as a built-in forecasting model based on Google Research’s open source TimesFM, that can be used directly in SQL without creating and training a custom model. The model is used via AI.FORECAST to predict future values from historical time-series data, with release notes also indicating support for AI.EVALUATE and AI.DETECT ANOMALIES (TimesFM 2.5) in related workflows.

## Evidence Summary

The tutorials confirm practical usage of BigQuery ML’s built-in TimesFM model with AI.FORECAST/AI.DETECT ANOMALIES, while release notes confirm the feature as an added built-in univariate TimesFM forecasting capability (including TimesFM 2.5 usage in forecast/evaluate/detect functions).

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Forecast multiple time series with a TimesFM univariate model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 76
- Re-rank relevance: STRONG
- Re-rank rationale: The documentation directly explains how to run forecasts with the built-in TimesFM univariate model via `AI.FORECAST` in BigQuery ML.

Evidence snippets:
- Objectives This tutorial guides you through using the AI.FORECAST function with the built-in TimesFM model to forecast bike share trips.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with a TimesFM univariate model Stay organized with collections Save and categorize content based on your preferences.
- This tutorial teaches you how to use the AI.FORECAST function with BigQuery ML's built-in TimesFM univariate model to forecast the future value for a given column, based on the historical value of that column.
- Follow these steps to forecast data with the TimesFM model: In the Google Cloud console, go to the BigQuery page.

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: It references the built-in TimesFM model in BigQuery ML, yet the tutorial applies it to anomaly detection rather than forecasting access via AI.FORECAST.

Evidence snippets:
- Objectives This tutorial guides you through using the AI.DETECT ANOMALIES function with the built-in TimesFM model to detect anomalies in bike share trips.
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- Home Documentation Data analytics BigQuery Guides Send feedback Detect anomalies in multiple time series with the TimesFM model Stay organized with collections Save and categorize content based on your preferences.
- Follow these steps to detect anomalies with the TimesFM model: In the Google Cloud console, go to the BigQuery page.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- You can use BigQuery ML's built-in TimesFM model with the AI.FORECAST function to perform forecasting without having to create and train your own model.
- You can use BigQuery ML's built-in TimesFM model with the following functions: Use AI.FORECAST to perform forecasting.
- You can use the TimesFM 2.5 model in the AI.FORECAST , AI.EVALUATE , and AI.DETECT ANOMALIES functions to achieve better forecasting accuracy and lower latency.
- Feature BigQuery ML now offers a built-in TimesFM univariate time series forecasting model that implements Google Research's open source TimesFM model.

