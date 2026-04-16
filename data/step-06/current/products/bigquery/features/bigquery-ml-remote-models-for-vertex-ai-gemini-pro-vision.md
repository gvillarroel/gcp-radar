---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.483Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML remote models for Vertex AI gemini-pro-vision"
feature_slug: "bigquery-ml-remote-models-for-vertex-ai-gemini-pro-vision"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "bigquery"
  - "ml"
  - "remote"
  - "models"
  - "vertex"
  - "ai"
  - "gemini"
  - "pro"
---

# BigQuery ML remote models for Vertex AI gemini-pro-vision

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can create remote models based on the Vertex AI gemini-pro-vision model for vision generative AI tasks.

## Extended Definition

BigQuery ML can create remote models based on the Vertex AI gemini-pro-vision model for vision generative AI tasks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Make predictions with remote models on Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- In the Connection type list, select Vertex AI remote models, remote functions and BigLake (Cloud Resource) .
- In this tutorial, you register a Vertex AI endpoint as a remote model in BigQuery.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Create the remote model Use the CREATE MODEL statement to create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.gemini model REMOTE WITH CONNECTION LOCATION .
- For Connection type , choose Vertex AI remote models, remote functions, BigLake and Spanner (Cloud Resource) .
- GENERATE TEXT ( MODEL bqml tutorial.gemini model , ( SELECT CONCAT ( " "" Perform sentiment analysis on the following text and return one the following categories: positive, negative: "" " , review ) AS prompt , FROM bigquery-public-data.imdb.reviews LIMIT 5 ), STRUCT ( 0.2 AS temperature , 100 AS max output tokens )); The output is similar to the following: +----------+----------+------------------------------------------------+ title result review +----------+----------+------------------------------------------------+ Quitting Positive This movie is amazing because the fact that...

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" ], }, ) Create a text generation model Create a BigQuery ML remote model that represents a Vertex AI Gemini model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.gemini REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'gemini-2.0-flash' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . gemini model = bbq . ml . create model ( "cymbal pets.gemini" , replace = True , connection name = "us.cymbal conn" , options = { "endpoint" : "gemini-2.5-flash" }, ) Create an embedding generation model Create a BigQuery ML remote model that represents a Vertex AI multimodal embedding model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.embedding model REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'multimodalembedding@001' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- In the Connection type list, select Vertex AI remote models, remote functions, BigLake and Spanner (Cloud Resource) .
- Click the Vertex AI Models: BigQuery Federation solution card.

