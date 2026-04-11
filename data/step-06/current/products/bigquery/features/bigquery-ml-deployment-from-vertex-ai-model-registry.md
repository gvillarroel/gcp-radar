---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.696Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML deployment from Vertex AI Model Registry"
feature_slug: "bigquery-ml-deployment-from-vertex-ai-model-registry"
latest_feature_date: "2023-01-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
keywords:
  - "deploy model from Vertex AI Model Registry"
  - "deploy to endpoint"
  - "deploy from registry"
  - "Vertex AI endpoint target"
  - "publish BigQuery ML model"
  - "Model Registry deployment"
  - "registry-to-endpoint"
  - "Vertex AI endpoint"
---

# BigQuery ML deployment from Vertex AI Model Registry

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML models can be deployed directly from Vertex AI Model Registry to Vertex AI endpoints.

## Extended Definition

BigQuery ML supports deploying a model as a remote model to a Vertex AI endpoint by creating a Cloud resource connection, registering the Vertex AI endpoint in BigQuery, and then deploying to that endpoint. In SQL, the CREATE MODEL statement for remote models uses the ENDPOINT option to specify which Vertex AI endpoint will serve the model, with INPUT and OUTPUT fields aligned to the endpoint’s request and response schema. The provided excerpts do not explicitly show deployment originating from Vertex AI Model Registry specifically.

## Evidence Summary

These pages confirm BigQuery ML remote model deployment to Vertex AI endpoints and the SQL-based endpoint configuration, but provide limited evidence for direct deployment-from-Vertex-AI-Model-Registry behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a BigQuery Cloud resource connection You must have a Cloud resource connection to connect to a Vertex AI endpoint.
- Deploy the model to a Vertex AI endpoint Follow these steps to deploy the model to an endpoint.
- In this tutorial, you register a Vertex AI endpoint as a remote model in BigQuery.
- Deploy the model to a Vertex AI endpoint.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- See XGBoost INPUT OUTPUT clause for more details. field type Remote models support the following BigQuery data types for INPUT and OUTPUT clauses: Simple type: BOOL , INT64 , FLOAT64 , NUMERIC , BIGNUMERIC , STRING ARRAY <Simple type> XGBoost models only support numeric types for the INPUT field type and FLOAT64 for the OUTPUT field type. connection name BigQuery uses a CLOUD RESOURCE connection to interact with your Vertex AI endpoint.
- INPUT and OUTPUT INPUT and OUTPUT clauses are used to specify input and output format for remote models or XGBoost models . field name For remote models, INPUT and OUTPUT field names must be identical as the field names of the Vertex AI endpoint request and response.
- Remote models over open models ENDPOINT IDLE TTL Specifies the duration of inactivity after which a BigQuery-managed Vertex AI model is automatically undeployed from a Vertex AI endpoint.
- Linear & logistic regression , Boosted trees ENDPOINT Specifies the Vertex AI endpoint to use for a remote model.

