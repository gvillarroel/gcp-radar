---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.845Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML regional availability in Frankfurt"
feature_slug: "bigquery-ml-regional-availability-in-frankfurt"
latest_feature_date: "2019-09-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
keywords:
  - "Frankfurt (europe-west3) support"
  - "europe-west3 BigQuery ML"
  - "BigQuery ML in Frankfurt"
  - "regional ML availability"
  - "BigQuery ML region"
  - "BigQuery ML"
  - "BQ ML"
---

# BigQuery ML regional availability in Frankfurt

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML is made available in the Frankfurt (europe-west3) region.

## Extended Definition

BigQuery ML is made available in the Frankfurt (europe-west3) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)

## Supporting Pages

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Costs This tutorial uses billable components of Google Cloud, including the following: BigQuery BigQuery ML For more information about BigQuery costs, see the BigQuery pricing page.
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- What's next For an overview of BigQuery ML, see Introduction to AI and ML in BigQuery .
- For more information about BigQuery ML costs, see BigQuery ML pricing .

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery ML offers the following types of ML models: Supervised learning models: Linear and logistic regression Deep neural network (DNN) Wide & Deep Boosted trees Random forest AutoML Unsupervised learning models: K-means clustering Matrix factorization Autoencoder Principal component analysis (PCA) Transform-only models: Transform-only models aren't typical ML models but are instead artifacts that transform raw data into features.
- To see the weights of the model, you can export the model from BigQuery ML to Cloud Storage and then use the XGBoost library or the TensorFlow library to visualize the tree structure for tree models or the graph structure for neural networks.
- End-to-end user journeys for ML models This document describes the user journeys for machine learning (ML) models that are trained in BigQuery ML, including the statements and functions that you can use to work with ML models.
- For more information, see EXPORT MODEL and Export a BigQuery ML model for online prediction .

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: The page notes edition-based availability constraints but does not state region-specific availability such as Frankfurt.

Evidence snippets:
- Machine learning With BigQuery ML, you can train, evaluate, and run inference on models for tasks such as time series forecasting, anomaly detection, classification, regression, clustering, dimensionality reduction, and recommendations.
- Because BigQuery ML lets SQL practitioners use existing SQL tools and skills to build and evaluate models, it democratizes ML and speeds up model development by bringing ML to the data instead of requiring data movement.
- You can work with BigQuery ML capabilities through the Google Cloud console, the bq command-line tool, the REST API, or in Colab Enterprise notebooks .
- You can use BigQuery ML to help you with the following types of ML tasks: Create and run ML models by using GoogleSQL queries.

