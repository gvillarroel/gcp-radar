---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.383Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML open model remote models"
feature_slug: "bigquery-ml-open-model-remote-models"
latest_feature_date: "2025-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
keywords:
  - "bigquery"
  - "ml"
  - "open"
  - "model"
  - "remote"
  - "models"
  - "supports"
  - "based"
---

# BigQuery ML open model remote models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports remote models based on Vertex Model Garden or Hugging Face open models for generation and evaluation.

## Extended Definition

BigQuery ML supports remote models based on Vertex Model Garden or Hugging Face open models for generation and evaluation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- You can use remote models when a model is too large to import into BigQuery.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- In a BigQuery multi-region ( US , EU ) dataset, you can only create a remote model that connects to an endpoint deployed in a region within the same multi-region location ( US , EU ).

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Deploy and undeploy a Vertex AI model: aiplatform.endpoints.deploy aiplatform.endpoints.undeploy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial . qwen3 embedding model REMOTE WITH CONNECTION DEFAULT OPTIONS ( HUGGING FACE MODEL ID = 'Qwen/Qwen3-Embedding-0.6B' ); The query takes up to 20 minutes to complete, after which the qwen3 embedding model model appears in the bqml tutorial dataset in the Explorer pane.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Remote models over open models ENDPOINT IDLE TTL Specifies the duration of inactivity after which a BigQuery-managed Vertex AI model is automatically undeployed from a Vertex AI endpoint.
- See XGBoost INPUT OUTPUT clause for more details. field type Remote models support the following BigQuery data types for INPUT and OUTPUT clauses: Simple type: BOOL , INT64 , FLOAT64 , NUMERIC , BIGNUMERIC , STRING ARRAY <Simple type> XGBoost models only support numeric types for the INPUT field type and FLOAT64 for the OUTPUT field type. connection name BigQuery uses a CLOUD RESOURCE connection to interact with your Vertex AI endpoint.
- To create a model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.connections.delegate (for remote models) The following predefined IAM roles grant these permissions: BigQuery Studio Admin BigQuery Admin For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .
- Remote models over open models RESERVATION AFFINITY TYPE Determines whether the deployed model uses Compute Engine reservations to provide assured virtual machine (VM) availability when serving predictions, and specifies whether the model uses VMs from all available reservations or just one specific reservation.

