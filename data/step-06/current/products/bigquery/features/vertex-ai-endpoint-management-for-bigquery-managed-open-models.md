---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.272Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Vertex AI endpoint management for BigQuery-managed open models"
feature_slug: "vertex-ai-endpoint-management-for-bigquery-managed-open-models"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
keywords:
  - "vertex"
  - "ai"
  - "endpoint"
  - "management"
  - "bigquery"
  - "managed"
  - "open"
  - "models"
---

# Vertex AI endpoint management for BigQuery-managed open models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can fully manage open models as Vertex AI endpoints, including deployment, undeployment, and machine type customization.

## Extended Definition

BigQuery ML can fully manage open models as Vertex AI endpoints, including deployment, undeployment, and machine type customization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)

## Supporting Pages

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Deploy and undeploy a Vertex AI model: aiplatform.endpoints.deploy aiplatform.endpoints.undeploy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Required permissions To run this tutorial, you need the following Identity and Access Management (IAM) roles: Create and use BigQuery datasets, connections, and models: BigQuery Admin ( roles/bigquery.admin ).
- Open models that you deploy to Vertex AI are charged per machine-hour.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a BigQuery Cloud resource connection You must have a Cloud resource connection to connect to a Vertex AI endpoint.
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- This option turns on the autoscaling capability in Vertex AI, and it allows the endpoint to process more requests when your BigQuery table has a large number of rows.
- In this tutorial, you register a Vertex AI endpoint as a remote model in BigQuery.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Remote models over open models ENDPOINT IDLE TTL Specifies the duration of inactivity after which a BigQuery-managed Vertex AI model is automatically undeployed from a Vertex AI endpoint.
- See XGBoost INPUT OUTPUT clause for more details. field type Remote models support the following BigQuery data types for INPUT and OUTPUT clauses: Simple type: BOOL , INT64 , FLOAT64 , NUMERIC , BIGNUMERIC , STRING ARRAY <Simple type> XGBoost models only support numeric types for the INPUT field type and FLOAT64 for the OUTPUT field type. connection name BigQuery uses a CLOUD RESOURCE connection to interact with your Vertex AI endpoint.
- Remote models over Cloud AI services SPEECH RECOGNIZER Identifies the speech recognizer to use when the REMOTE SERVICE TYPE option value is CLOUD AI SPEECH TO TEXT V2 Remote models over Cloud AI services KMS KEY NAME Specifies the Cloud Key Management Service customer-managed encryption key (CMEK) to use to encrypt the model.
- INPUT and OUTPUT INPUT and OUTPUT clauses are used to specify input and output format for remote models or XGBoost models . field name For remote models, INPUT and OUTPUT field names must be identical as the field names of the Vertex AI endpoint request and response.

