---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.482Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML model monitoring: ML.VALIDATE_DATA_DRIFT"
feature_slug: "bigquery-ml-model-monitoring-ml-validate-data-drift"
latest_feature_date: "2024-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "statistics drift check"
  - "data drift validation"
  - "compare serving statistics"
  - "ML.VALIDATE_DATA_DRIFT"
  - "serving dataset drift"
  - "VALIDATE_DATA_DRIFT"
  - "model monitoring drift"
  - "data drift"
---

# BigQuery ML model monitoring: ML.VALIDATE_DATA_DRIFT

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML adds ML.VALIDATE_DATA_DRIFT to compare statistics across serving datasets and detect data drift.

## Extended Definition

BigQuery ML includes a function named ML.VALIDATE_DATA_DRIFT (written as ML.VALIDATE DATA DRIFT in release notes) that computes and compares statistics between two serving datasets. This comparison is used to identify anomalous differences, supporting data-drift validation for model monitoring scenarios. The feature is also referenced alongside ML.VALIDATE_DATA_SKEW for use in metric visualization.

## Evidence Summary

The cited release-note entry identifies ML.VALIDATE_DATA_DRIFT, its purpose, and its relation to serving-data statistics comparison and drift visualization usage.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- ML.VALIDATE DATA DRIFT : compute and compare the statistics for two sets of serving data in order to identify anomalous differences between the two data sets.
- You can use metric visualization with the ML.VALIDATE DATA SKEW and ML.VALIDATE DATA DRIFT functions.

