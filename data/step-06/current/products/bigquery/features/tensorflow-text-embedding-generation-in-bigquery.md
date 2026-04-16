---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.510Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TensorFlow text embedding generation in BigQuery"
feature_slug: "tensorflow-text-embedding-generation-in-bigquery"
latest_feature_date: "2024-02-22"
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
  - "can"
  - "generate"
  - "embeddings"
---

# TensorFlow text embedding generation in BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can generate text embeddings with the NNLM, SWIVEL, and BERT TensorFlow models.

## Extended Definition

BigQuery can generate text embeddings with the NNLM, SWIVEL, and BERT TensorFlow models.

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
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- GENERATE EMBEDDING ( MODEL bqml tutorial . qwen3 embedding model , ( SELECT review AS content , FROM bigquery - public - data . imdb . reviews LIMIT 5 ) ); The results include the following columns: embedding : an array of double to represent the generated embeddings. status : the API response status for the corresponding row.
- Perform text embedding Perform text embedding on IMDB movie reviews by using the remote model and the AI.GENERATE EMBEDDING function: In the Google Cloud console, go to the BigQuery page.
- What's next Learn how to use text embeddings for semantic search and retrieval-augmented generation (RAG) .

### Autonomous embedding generation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)
- Source ID: `site-docs-reference-5`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To track the progress of the embedding generation, you can use a query similar to the following: SELECT COUNT ( ) AS total num rows , COUNTIF ( description embedding IS NOT NULL AND description embedding . status = '' ) AS total num generated embeddings FROM PROJECT ID .
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com This document describes how to use autonomous embedding generation for your data, which lets BigQuery maintain a column of embeddings on a table based on a source column.
- Create a table with an automatically generated embedding column You can use autonomous embedding generation to generate embeddings by using the AI.EMBED function in a CREATE TABLE statement .
- COLUMNS WHERE is generated = 'ALWAYS' ; The generation expression field shows you the call to the AI.EMBED function that is used to generate the embeddings on the column.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate text embeddings Generate text embeddings from patent abstracts using the AI.GENERATE EMBEDDING function , and then write them to a BigQuery table so that they can be searched.
- For alternative text embedding generation methods in BigQuery, see the Embed text with pretrained TensorFlow models tutorial .
- Using the remote model with the AI.GENERATE EMBEDDING function to generate embeddings from text in a BigQuery table.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.

