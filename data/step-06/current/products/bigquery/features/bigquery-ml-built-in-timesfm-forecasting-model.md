---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.376Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML built-in TimesFM forecasting model"
feature_slug: "bigquery-ml-built-in-timesfm-forecasting-model"
latest_feature_date: "2025-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "univariate time-series model"
  - "forecast context window"
  - "historical reference series"
  - "built-in forecasting model"
  - "TimesFM forecasting"
  - "TimesFM model"
  - "TimesFM"
  - "AI.FORECAST"
---

# BigQuery ML built-in TimesFM forecasting model

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML now offers a built-in TimesFM univariate time-series model with AI.FORECAST support for a larger context window and AI.EVALUATE for comparing forecasts against historical reference series.

## Extended Definition

BigQuery ML provides a built-in TimesFM univariate time-series model that can be used with the AI.FORECAST function to predict future values for a column based on its historical values. According to the BigQuery release notes and tutorial content, this TimesFM capability is available as a managed BigQuery ML model so users can apply forecasting in SQL without creating and training their own model, and Google Cloud documentation shows guided workflows for doing so in BigQuery.

## Evidence Summary

The provided pages collectively confirm that BigQuery ML includes a built-in TimesFM univariate model used with AI.FORECAST for time-series forecasting and that it is treated as a managed built-in model, while also showing TimesFM is documented in anomaly-detection tutorials.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Forecast multiple time series with a TimesFM univariate model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a tutorial specifically on using `AI.FORECAST` with BigQuery ML’s built-in TimesFM univariate model for time-series forecasting.

Evidence snippets:
- Objectives This tutorial guides you through using the AI.FORECAST function with the built-in TimesFM model to forecast bike share trips.
- This tutorial teaches you how to use the AI.FORECAST function with BigQuery ML's built-in TimesFM univariate model to forecast the future value for a given column, based on the historical value of that column.
- Follow these steps to forecast data with the TimesFM model: In the Google Cloud console, go to the BigQuery page.
- Follow these steps to forecast data with the TimesFM model: In the Google Cloud console, go to the BigQuery page.

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: The page confirms BigQuery ML can use a built-in TimesFM model, but the content focuses on anomaly detection and does not describe forecasting or AI.FORECAST/AI.EVALUATE behavior.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Detect anomalies in multiple time series with the TimesFM model Stay organized with collections Save and categorize content based on your preferences.
- Objectives This tutorial guides you through using the AI.DETECT ANOMALIES function with the built-in TimesFM model to detect anomalies in bike share trips.
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- Follow these steps to detect anomalies with the TimesFM model: In the Google Cloud console, go to the BigQuery page.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- You can use BigQuery ML's built-in TimesFM model with the AI.FORECAST function to perform forecasting without having to create and train your own model.
- To try using a TimesFM model with the AI.FORECAST function, see Forecast a time series with a TimesFM univariate model .
- To try using a TimesFM model with the AI.FORECAST function, see Forecast a time series with a TimesFM univariate model .
- You can use BigQuery ML's built-in TimesFM model with the following functions: Use AI.FORECAST to perform forecasting.

