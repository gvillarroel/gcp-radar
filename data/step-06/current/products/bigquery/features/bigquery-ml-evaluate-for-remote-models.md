---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.457Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML.EVALUATE for remote models"
feature_slug: "bigquery-ml-evaluate-for-remote-models"
latest_feature_date: "2025-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial"
keywords:
  - "remote model evaluation"
  - "evaluate remote model"
  - "evaluation query"
  - "BigQuery ML.EVALUATE"
  - "generative AI model"
  - "EVALUATE function"
  - "ML.EVALUATE"
  - "remote model"
---

# BigQuery ML.EVALUATE for remote models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML now supports ML.EVALUATE for evaluating remote generative AI models.

## Extended Definition

BigQuery ML supports using ML.EVALUATE to evaluate remote models, including remote generative AI models (for example, Anthropic Claude models) through a BigQuery query interface. Evaluation is performed with the ML.EVALUATE function, which can consume a TABLE of ground-truth data and return model quality/forecasting metrics, as shown in BigQuery ML evaluation usage patterns.

## Evidence Summary

The release notes confirm ML.EVALUATE support for evaluating remote Anthropic Claude models, while the ARIMA tutorial documents how ML.EVALUATE uses a TABLE-based ground-truth input and returns evaluation metrics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Using the ML.EVALUATE function to evaluate the remote model.
- Feature In BigQuery ML, you can now evaluate Anthropic Claude models by using the ML.EVALUATE function .
- You can also evaluate Claude models by using the ML.EVALUATE function .
- March 06, 2026 Feature You can create a remote model based on the Vertex AI gemini-embedding-001 model, or a remote model based on an open embedding model from Vertex Model Garden or Hugging Face that is deployed to Vertex AI.

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- If you select the new model in the Resources panel, information about the model appears below the Query editor . bq Create the remote model by entering the following CREATE MODEL statement: bq query -- use legacy sql = false \ " CREATE OR REPLACE MODEL PROJECT ID . bqml tutorial . bert sentiment INPUT ( text STRING ) OUTPUT ( scores ARRAY<FLOAT64 > ) REMOTE WITH CONNECTION PROJECT ID . us . bqml tutorial OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/endpoints/ ENDPOINT ID ' ) " Replace the following: PROJECT ID : your project name.
- After you create the model, verify that the model appears in the dataset: bq ls -m bqml tutorial The output is similar to the following: Id Model Type Labels Creation Time ---------------- ------------ -------- ----------------- bert sentiment 28 Jan 17 :39:43 Get predictions using ML.PREDICT You use the ML.PREDICT function to get sentiment predictions from the remote model.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.

### "Scale an ARIMA_PLUS univariate time series model to millions of time series\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- EVALUATE ( MODEL bqml tutorial.nyc citibike arima model default , TABLE bqml tutorial.nyc citibike time series , STRUCT ( 7 AS horizon , TRUE AS perform aggregation )); This query reports several forecasting metrics, including: The results should look similar to the following: The TABLE clause in the ML.EVALUATE function identifies a table containing the ground truth data.
- This example leaves out the time points in the time series after June 1, 2016 so that those time points can be used to evaluate the forecasting accuracy later by using the ML.EVALUATE function.
- Evaluate forecasting accuracy for each time series Evaluate the forecasting accuracy of the model by using the ML.EVALUATE function.
- The STRUCT clause in the ML.EVALUATE function specified parameters for the function.

