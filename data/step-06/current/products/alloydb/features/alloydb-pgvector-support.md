---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.884Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB pgvector support"
feature_slug: "alloydb-pgvector-support"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
  - "https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index"
keywords:
  - "scalar quantized vector index"
  - "scalar quantization"
  - "SQ vector index"
  - "vector indexes"
  - "vector query performance"
  - "pgvector extension"
  - "pgvector support"
  - "pgvector"
---

# AlloyDB pgvector support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB includes pgvector support with performance improvements for vector queries, including scalar-quantized vector indexes.

## Extended Definition

AlloyDB includes pgvector support with performance improvements for vector queries, including scalar-quantized vector indexes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index)

## Supporting Pages

### "Measure vector query recall \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inverted File with Flat Compression (IVFFLAT) and Inverted File Flat (IVF): types of vector indexes that are used for ANN searches, particularly in databases like the PostgreSQL pgvector extension.
- If the pgvector extension isn't installed, install the vector extension version 0.8.0.google-3 or later to store generated embeddings as vector values.
- If the pgvector extension is already installed, upgrade the vector extension to version 0.8.0.google-3 or later to get recall evaluator capabilities.
- Before you begin Install or update the pgvector extension.

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

### "Perform intelligent SQL queries using AI functions \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators](https://docs.cloud.google.com/alloydb/docs/ai/evaluate-semantic-queries-ai-operators)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Create an IVF index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable scalar quantization on a pgvector -based index, specify IVF as the index method, and SQ8 as the quantizer: CREATE INDEX INDEX NAME ON TABLE USING ivf ( EMBEDDING COLUMN DISTANCE FUNCTION ) WITH ( lists = LIST COUNT , quantizer = ' QUANTIZER ' ); Replace the following: INDEX NAME : the name of the index you want to create—for example, my-ivf-index .
- What's next Create a ScaNN index Run vector similarity searches Tune vector query performance Vector index metrics Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- CREATE EXTENSION IF NOT EXISTS vector ; Create an IVF index Stock pgvector supports approximate nearest-neighbor searching through indexing.
- You apply the vector to one of the pgvector nearest-neighbor operators, <-> for L2 distance, to find the database rows with the most semantically similar embeddings.

