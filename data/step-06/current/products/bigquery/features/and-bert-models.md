---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.589Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "and BERT models"
feature_slug: "and-bert-models"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
keywords:
  - "TensorFlow embedding model"
  - "text embedding models"
  - "SWIVEL model"
  - "BERT model"
  - "NNLM model"
  - "SWIVEL"
  - "NNLM"
  - "BERT"
---

# and BERT models

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Adds support for generating text embeddings in BigQuery using NNLM, SWIVEL, and BERT TensorFlow models.

## Extended Definition

The evidence shows BigQuery ML can call a remote Vertex AI model from BigQuery using a `CREATE MODEL ... REMOTE` statement with a Vertex AI endpoint, and then run predictions via `ML.PREDICT` on text input. In the cited tutorial, this pattern is demonstrated with a BERT-based sentiment model and IMDB text reviews, returning `scores` as an `ARRAY<FLOAT64>` from the query results. Evidence for NNLM or SWIVEL models, or for explicit text-embedding generation behavior, is not provided in the excerpt.

## Evidence Summary

The cited BigQuery ML remote model tutorial documents how to configure and use a remote BERT model endpoint in BigQuery and run `ML.PREDICT`, but does not substantiate NNLM/SWIVEL support or explicit embedding-generation features.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- It is a customized sentiment analysis model that was created by fine-tuning a BERT model with plain text IMDB movie reviews.
- PREDICT ( MODEL PROJECT ID .bqml tutorial.bert sentiment , ( SELECT review as text FROM bigquery-public-data.imdb.reviews LIMIT 10000 ) ) The query results should look similar to the following: bq Enter this command to run the query that uses ML.PREDICT . bq query --use legacy sql=false \ 'SELECT FROM ML.PREDICT ( MODEL PROJECT ID .bqml tutorial.bert sentiment , ( SELECT review as text FROM bigquery-public-data.imdb.reviews LIMIT 10000 ) )' Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- If you select the new model in the Resources panel, information about the model appears below the Query editor . bq Create the remote model by entering the following CREATE MODEL statement: bq query -- use legacy sql = false \ " CREATE OR REPLACE MODEL PROJECT ID . bqml tutorial . bert sentiment INPUT ( text STRING ) OUTPUT ( scores ARRAY<FLOAT64 > ) REMOTE WITH CONNECTION PROJECT ID . us . bqml tutorial OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/endpoints/ ENDPOINT ID ' ) " Replace the following: PROJECT ID : your project name.
- In the query editor, enter this CREATE MODEL statement, and then click Run : CREATE OR REPLACE MODEL PROJECT ID .bqml tutorial.bert sentiment INPUT ( text STRING ) OUTPUT ( scores ARRAY<FLOAT64 > ) REMOTE WITH CONNECTION PROJECT ID .us.bqml tutorial OPTIONS ( ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/endpoints/ ENDPOINT ID ' ) Replace the following: PROJECT ID : your project name.

