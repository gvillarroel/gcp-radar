---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.483Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML model monitoring: ML.VALIDATE_DATA_SKEW"
feature_slug: "bigquery-ml-model-monitoring-ml-validate-data-skew"
latest_feature_date: "2024-09-19"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial"
keywords:
  - "data skew validation"
  - "compare training and serving data"
  - "ML.VALIDATE_DATA_SKEW"
  - "VALIDATE_DATA_SKEW"
  - "skew detection"
  - "serving statistics"
  - "training statistics"
  - "data skew"
---

# BigQuery ML model monitoring: ML.VALIDATE_DATA_SKEW

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML adds ML.VALIDATE_DATA_SKEW to compare serving data statistics against training data statistics and detect skew.

## Extended Definition

ML.VALIDATE_DATA_SKEW is a BigQuery ML monitoring function that computes statistics on serving data and compares them to statistics from the data used to train a model, so you can identify anomalous differences between the two datasets. In Google Cloud documentation it is listed as one of BigQuery ML’s metric-visualization functions for monitoring data quality/signal changes. BigQuery ML training statistics are also available in the console and via ML.TRAINING_INFO, which provides the training-side reference data for such comparisons.

## Evidence Summary

The release notes define ML.VALIDATE_DATA_SKEW’s behavior as serving-versus-training statistics comparison for anomaly detection, while the tutorial confirms where training statistics are accessible for BigQuery ML models.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The following functions support metric visualization: ML.VALIDATE DATA SKEW : compute the statistics for a set of serving data, and then compare them to the statistics for the data used to train a BigQuery ML model in order to identify anomalous differences between the two data sets.
- You can use metric visualization with the ML.VALIDATE DATA SKEW and ML.VALIDATE DATA DRIFT functions.

### "Create recommendations based on explicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Follow these steps to view the model's training statistics: In the Google Cloud console, go to the BigQuery page.
- Get training statistics Optionally, you can view the model's training statistics in the Google Cloud console.
- The model's training statistics let you see the loss associated with each iteration of the model.
- You can also use the ML.TRAINING INFO function to see model training statistics.

