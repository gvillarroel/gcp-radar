---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.516Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML.GENERATE_TEXT with Vertex AI Gemini 1.5 Flash"
feature_slug: "bigquery-ml-generate-text-with-vertex-ai-gemini-1-5-flash"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "Vertex AI Gemini 1.5 Flash"
  - "GENERATE_TEXT with Flash"
  - "Vertex Gemini 1.5 Flash"
  - "table text input"
  - "Gemini Flash"
  - "ML.GENERATE_TEXT"
  - "text generation"
  - "remote model"
---

# BigQuery ML.GENERATE_TEXT with Vertex AI Gemini 1.5 Flash

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML.GENERATE_TEXT supports using remote Gemini 1.5 Flash models to perform text-based generative AI tasks on BigQuery table text.

## Extended Definition

BigQuery ML’s `ML.GENERATE_TEXT` function supports text generation workflows using **remote models** to run generative natural-language tasks on text data stored in BigQuery tables. The documented workflow for remote models in BigQuery ML is to create a remote model and then use it in SQL-based prediction/generation functions, with the model defined via `CREATE MODEL ... REMOTE ... OPTIONS(ENDPOINT=...)`. The provided excerpts confirm support for remote-model usage generally, but do not explicitly document the model family/version (for example, Gemini 1.5 Flash) in the cited text.

## Evidence Summary

The release notes and BigQuery ML remote-model tutorial pages collectively show that `ML.GENERATE_TEXT` is intended for generative tasks on table text via remote models, while the snippets stop short of explicitly naming Gemini 1.5 Flash.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Use the ML.GENERATE TEXT function with these remote models to perform generative natural language tasks for text stored in BigQuery tables.
- Use the ML.GENERATE TEXT function with these remote models to perform generative natural language tasks for text stored in BigQuery tables.
- Using the ML.GENERATE TEXT function with this remote model to perform a broad range of generative AI tasks.
- Change BigQuery ML has improved throughput by more than 100x for the following generative AI functions: ML.GENERATE TEXT AI.GENERATE TABLE AI.GENERATE AI.GENERATE BOOL AI.GENERATE DOUBLE AI.GENERATE INT Actual performance varies based on the number of input and output tokens in the request, but a typical 6-hour job can now process millions of rows.

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

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Methods for improving security in data... +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ Create the remote model for text generation Create a remote model that represents a hosted Vertex AI text generation model: In the Google Cloud console, go to the BigQuery page.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- Using the remote model with the AI.GENERATE EMBEDDING function to generate embeddings from text in a BigQuery table.
- This tutorial covers the following tasks: Creating a BigQuery ML remote model over a Vertex AI embedding model.

