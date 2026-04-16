---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.421Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery vector search"
feature_slug: "bigquery-vector-search"
latest_feature_date: "2024-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "bigquery"
  - "vector"
  - "search"
  - "lets"
  - "users"
  - "embeddings"
  - "identify"
  - "semantically"
---

# BigQuery vector search

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery vector search lets users search embeddings to identify semantically similar entities.

## Extended Definition

BigQuery vector search lets users search embeddings to identify semantically similar entities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a notebook that illustrates this scenario, see Log Anomaly Detection & Investigation with Text Embeddings + BigQuery Vector Search .
- Introduction to embeddings and vector search This document provides an overview of embeddings and vector search in BigQuery.
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com You can use autonomous embedding generation to simplify the process of creating, maintaining, and querying embeddings.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Depending on the dataset, the embedding model, and the distance type used during VECTOR SEARCH , normalizing the embeddings might improve recall.
- A vector index lets you perform a vector search more quickly, with the trade-off of reducing recall and so returning more approximate results.
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, run the following SQL statement: SELECT query . query , base . publication number , base . title , base . abstract FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- GENERATE TEXT ( MODEL bqml tutorial.text model , ( SELECT CONCAT ( 'Propose some project ideas to improve user password security using the context below: ' , STRING AGG ( FORMAT ( "patent title: %s, patent abstract: %s" , base . title , base . abstract ), ', \n ' ) ) AS prompt , FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Go to BigQuery In the query editor, run the following SQL statement: CREATE OR REPLACE VECTOR INDEX my index ON bqml tutorial.embeddings ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":500}' ) Creating a vector index typically takes only a few seconds.
- Generate text augmented by vector search results Feed the search results as prompts to generate text with the AI.GENERATE TEXT function In the Google Cloud console, go to the BigQuery page.

