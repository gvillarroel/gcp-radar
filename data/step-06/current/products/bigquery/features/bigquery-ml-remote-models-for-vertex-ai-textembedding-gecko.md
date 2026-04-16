---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.509Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML remote models for Vertex AI textembedding-gecko"
feature_slug: "bigquery-ml-remote-models-for-vertex-ai-textembedding-gecko"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
keywords:
  - "bigquery"
  - "ml"
  - "remote"
  - "models"
  - "vertex"
  - "ai"
  - "textembedding"
  - "gecko"
---

# BigQuery ML remote models for Vertex AI textembedding-gecko

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can create remote models that reference Vertex AI textembedding-gecko text embedding models.

## Extended Definition

BigQuery ML can create remote models that reference Vertex AI textembedding-gecko text embedding models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- In the Connection type list, select Vertex AI remote models, remote functions and BigLake (Cloud Resource) .
- In this tutorial, you register a Vertex AI endpoint as a remote model in BigQuery.

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Deploy and undeploy a Vertex AI model: aiplatform.endpoints.deploy aiplatform.endpoints.undeploy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial . qwen3 embedding model REMOTE WITH CONNECTION DEFAULT OPTIONS ( HUGGING FACE MODEL ID = 'Qwen/Qwen3-Embedding-0.6B' ); The query takes up to 20 minutes to complete, after which the qwen3 embedding model model appears in the bqml tutorial dataset in the Explorer pane.
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Deploy and undeploy a Vertex AI model: aiplatform.endpoints.deploy aiplatform.endpoints.undeploy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial . gemma model REMOTE WITH CONNECTION DEFAULT OPTIONS ( MODEL GARDEN MODEL NAME = 'publishers/google/models/gemma3@gemma-3-270m-it' , MACHINE TYPE = 'g2-standard-12' ); The query takes up to 20 minutes to complete, after which the gemma model model appears in the bqml tutorial dataset in the Explorer pane.
- Generate text by using a Gemma open model and the AI.GENERATE TEXT function This tutorial shows you how to create a remote model that's based on the Gemma model , and then how to use that model with the AI.GENERATE TEXT function to extract keywords and perform sentiment analysis on movie reviews from the bigquery-public-data.imdb.reviews public table.

