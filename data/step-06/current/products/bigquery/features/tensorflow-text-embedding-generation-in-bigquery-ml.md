---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.565Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TensorFlow text embedding generation in BigQuery ML"
feature_slug: "tensorflow-text-embedding-generation-in-bigquery-ml"
latest_feature_date: "2023-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "tensorflow"
  - "text"
  - "embedding"
  - "generation"
  - "bigquery"
  - "ml"
  - "can"
  - "generate"
---

# TensorFlow text embedding generation in BigQuery ML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can generate text embeddings with the NNLM, SWIVEL, and BERT TensorFlow models.

## Extended Definition

BigQuery ML can generate text embeddings with the NNLM, SWIVEL, and BERT TensorFlow models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform text embedding Perform text embedding on IMDB movie reviews by using the remote model and the AI.GENERATE EMBEDDING function: In the Google Cloud console, go to the BigQuery page.
- GENERATE EMBEDDING ( MODEL bqml tutorial . qwen3 embedding model , ( SELECT review AS content , FROM bigquery - public - data . imdb . reviews LIMIT 5 ) ); The results include the following columns: embedding : an array of double to represent the generated embeddings. status : the API response status for the corresponding row.
- Go to BigQuery In the query editor, enter the following statement to perform text embedding on five movie reviews: SELECT FROM AI .

### Autonomous embedding generation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)
- Source ID: `site-docs-reference-5`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to enable autonomous embedding generation, ask your administrator to grant you the following IAM roles: To use a connection resource: BigQuery Connections User ( roles/bigquery.connectionUser ) on the connection To create or alter a table: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the table Grant the connection's service account the following role so that it can access models hosted in Vertex AI endpoints: Vertex AI User ( roles/aiplatform.user ) on the project that has the connection For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, you can use queries similar to the following to create a table with autonomous embedding generation enabled, insert data, and then perform semantic search: CREATE TABLE mydataset . products ( name STRING , description STRING , description embedding STRUCT<result ARRAY<FLOAT64> , status STRING > GENERATED ALWAYS AS ( AI .
- To track the progress of the embedding generation, you can use a query similar to the following: SELECT COUNT ( ) AS total num rows , COUNTIF ( description embedding IS NOT NULL AND description embedding . status = '' ) AS total num generated embeddings FROM PROJECT ID .
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com This document describes how to use autonomous embedding generation for your data, which lets BigQuery maintain a column of embeddings on a table based on a source column.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For alternative text embedding generation methods in BigQuery, see the Embed text with pretrained TensorFlow models tutorial .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- Generate text embeddings Generate text embeddings from patent abstracts using the AI.GENERATE EMBEDDING function , and then write them to a BigQuery table so that they can be searched.
- Using the remote model with the AI.GENERATE EMBEDDING function to generate embeddings from text in a BigQuery table.

