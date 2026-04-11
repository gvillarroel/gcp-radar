---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.334Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery conversational analytics support for BigQuery ML functions"
feature_slug: "bigquery-conversational-analytics-support-for-bigquery-ml-functions"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
keywords:
  - "AI.DETECT_ANOMALIES in CA"
  - "conversational analytics function calls"
  - "AI.DETECT_ANOMALIES"
  - "AI.FORECAST in analytics"
  - "BigQuery ML functions"
  - "AI.GENERATE function"
  - "AI function support"
  - "AI.FORECAST"
---

# BigQuery conversational analytics support for BigQuery ML functions

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery conversational analytics now supports BigQuery ML functions, including AI.FORECAST, AI.DETECT_ANOMALIES, and AI.GENERATE.

## Extended Definition

BigQuery conversational analytics now supports BigQuery ML function calls, specifically AI.FORECAST, AI.DETECT ANOMALIES, and AI.GENERATE. The documented behavior for AI.DETECT ANOMALIES includes use with BigQuery ML’s built-in TimesFM model in conversational analytics, including support for a custom context window.

## Evidence Summary

The release notes provide the feature-level announcement and function list, and the TimesFM anomaly tutorial provides concrete usage evidence for AI.DETECT_ANOMALIES within BigQuery ML.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- BQML support: BigQuery conversational analytics now supports a set of BigQuery ML functions , including AI.FORECAST, AI.DETECT ANOMALIES, and AI.GENERATE.
- You can use the TimesFM 2.5 model in the AI.FORECAST , AI.EVALUATE , and AI.DETECT ANOMALIES functions to achieve better forecasting accuracy and lower latency.
- March 30, 2026 Feature The following forecasting and anomaly detection functions and updates are generally available (GA): The AI.DETECT ANOMALIES function supports providing a custom context window that determines how many of the most recent data points should be used by the model.
- Feature For supported Gemini models , you can now use Vertex AI Provisioned Throughput with the ML.GENERATE TEXT and AI.GENERATE functions to provide consistent high throughput for requests.

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Objectives This tutorial guides you through using the AI.DETECT ANOMALIES function with the built-in TimesFM model to detect anomalies in bike share trips.
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- Enable the API Detect anomalies in a single bike share trips time series Detect anomalies in time series data by using the AI.DETECT ANOMALIES function.

