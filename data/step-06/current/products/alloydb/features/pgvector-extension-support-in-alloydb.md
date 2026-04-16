---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.889Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "pgvector extension support in AlloyDB"
feature_slug: "pgvector-extension-support-in-alloydb"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall"
  - "https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting"
keywords:
  - "vector similarity search"
  - "CREATE EXTENSION pgvector"
  - "pgvector installation"
  - "AlloyDB supports pgvector"
  - "pgvector extension"
  - "pgvector for AlloyDB"
  - "vector index"
  - "pgvector"
---

# pgvector extension support in AlloyDB

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB has added support for the pgvector PostgreSQL extension.

## Extended Definition

AlloyDB has added support for the pgvector PostgreSQL extension.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index](https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)

## Supporting Pages

### "Measure vector query recall \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inverted File with Flat Compression (IVFFLAT) and Inverted File Flat (IVF): types of vector indexes that are used for ANN searches, particularly in databases like the PostgreSQL pgvector extension.
- You can measure the recall of your vector search query for different vector indexes, including the following: Scalable Nearest Neighbors (ScaNN): an algorithm for efficient vector similarity search.
- If the pgvector extension isn't installed, install the vector extension version 0.8.0.google-3 or later to store generated embeddings as vector values.
- If the pgvector extension is already installed, upgrade the vector extension to version 0.8.0.google-3 or later to get recall evaluator capabilities.

### "Run a hybrid vector similarity search \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search](https://docs.cloud.google.com/alloydb/docs/ai/run-hybrid-vector-similarity-search)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- INSERT INTO documents ( doc id , content ) VALUES ( 'doc1' , 'AlloyDB is a fully managed, PostgreSQL-compatible database service.' ), ( 'doc2' , 'It offers enterprise-grade performance, availability, and security.' ), ( 'doc3' , 'You can use it for demanding transactional and analytical workloads.' ), ( 'doc4' , 'AlloyDB integrates with Google Cloud services like Vertex AI.' ), ( 'doc5' , 'The database supports vector embeddings for semantic search.' ), ( 'doc6' , 'alloydb scann is an AlloyDB specific extension that provides scann index for vector search.' ), ( 'doc7' , 'alloydb scann extension depends upon pgvector extension ' ), ( 'doc8' , 'With alloydb scann extension' ), ( 'doc9' , 'customers can create scann index' ), ( 'doc10' , 'to speed up their vector search workloads' ); Create indexes to accelerate search performance.
- You can create vector indexes like ScaNN or HNSW for vector similarity search.
- Enable preview AI functions: SET google ml integration . enable preview ai functions = true ; Run a similarity search with text and vector input To perform a hybrid search in AlloyDB, you create a vector index and a text search index on your table.
- Explanation of the Hybrid Search Query and related Common Table Expression (CTE): vector search CTE: Performs a standard vector similarity search, ordering results by cosine distance and assigning a rank.

### Create indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index](https://docs.cloud.google.com/alloydb/docs/ai/create-hnsw-index)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Create a ScaNN index Run vector similarity searches Tune vector query performance Vector index metrics Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- CREATE EXTENSION IF NOT EXISTS vector ; Create an HNSW index AlloyDB supports creating a graph-based hnsw index available with stock pgvector using the AlloyDB pgvector extension.
- You apply the vector to one of the pgvector nearest-neighbor operators, <-> for L2 distance, to find the database rows with the most semantically similar embeddings.
- Because embedding() returns a real array, you must explicitly cast the embedding() call to vector in order to use these values with pgvector operators.

### "Perform time-series forecasting \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: N/A

