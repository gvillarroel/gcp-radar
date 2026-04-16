---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.807Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TensorFlow model import"
feature_slug: "tensorflow-model-import"
latest_feature_date: "2019-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
keywords:
  - "tensorflow"
  - "model"
  - "import"
  - "bigquery"
  - "ml"
  - "can"
  - "models"
  - "use"
---

# TensorFlow model import

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can import TensorFlow models for use in BigQuery; BigQuery ML can import TensorFlow models for use in BigQuery.

## Extended Definition

BigQuery ML can import TensorFlow models for use in BigQuery; BigQuery ML can import TensorFlow models for use in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- You can use remote models when a model is too large to import into BigQuery.
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- To learn more about importing models in Vertex AI Model Registry, see Import models to Vertex AI .

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MODEL statement for Contribution Analysis Importing models 'TENSORFLOW' Create a model by importing a TensorFlow model into BigQuery.
- CREATE MODEL statement for TensorFlow models 'TENSORFLOW LITE' Create a model by importing a TensorFlow Lite model into BigQuery.
- CREATE MODEL statement for TensorFlow Lite models 'ONNX' Create a model by importing an ONNX model into BigQuery.
- For more information about supported SQL statements and functions for each model type, see the following documents: End-to-end user journeys for generative AI models End-to-end user journeys for time series forecasting models End-to-end user journeys for ML models End-to-end user journeys for imported models Contribution analysis user journey Required permissions To create a dataset to store the model, you need the bigquery.datasets.create IAM permission.

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- To see the weights of the model, you can export the model from BigQuery ML to Cloud Storage and then use the XGBoost library or the TensorFlow library to visualize the tree structure for tree models or the graph structure for neural networks.
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.
- BigQuery ML offers the following types of ML models: Supervised learning models: Linear and logistic regression Deep neural network (DNN) Wide & Deep Boosted trees Random forest AutoML Unsupervised learning models: K-means clustering Matrix factorization Autoencoder Principal component analysis (PCA) Transform-only models: Transform-only models aren't typical ML models but are instead artifacts that transform raw data into features.
- End-to-end user journeys for ML models This document describes the user journeys for machine learning (ML) models that are trained in BigQuery ML, including the statements and functions that you can use to work with ML models.

