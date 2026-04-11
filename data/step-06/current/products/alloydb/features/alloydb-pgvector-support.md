---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.642Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB pgvector support"
feature_slug: "alloydb-pgvector-support"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
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
Coverage: HIGH

## Step 02 Summary

AlloyDB includes pgvector support with performance improvements for vector queries, including scalar-quantized vector indexes.

## Extended Definition

AlloyDB pgvector support enables PostgreSQL vector workloads using the pgvector extension, including approximate nearest-neighbor vector search via pgvector indexes and operators. It includes AlloyDB-specific vector index features such as IVF-based indexes with scalar quantization (for example, IVF with quantizer `SQ8`) and vector query recall evaluation to tune recall/performance tradeoffs, providing faster vector query performance compared with standard PostgreSQL behavior.

## Evidence Summary

These official AlloyDB pages collectively document pgvector extension version requirements, IVF/SQ vector index creation, and release-note confirmation of scalar-quantized vector index performance enhancements.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index)

## Supporting Pages

### "Measure vector query recall \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- Source ID: `site-docs-root-2`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inverted File with Flat Compression (IVFFLAT) and Inverted File Flat (IVF): types of vector indexes that are used for ANN searches, particularly in databases like the PostgreSQL pgvector extension.
- If the pgvector extension isn't installed, install the vector extension version 0.8.0.google-3 or later to store generated embeddings as vector values.
- If the pgvector extension is already installed, upgrade the vector extension to version 0.8.0.google-3 or later to get recall evaluator capabilities.
- Before you begin Install or update the pgvector extension.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- AlloyDB support for the pgvector extension brings performance enhancements for vector queries that run up to ten times faster than standard PostgreSQL, including an optimization that lets you create indexes of stored vector data using scalar quantization .
- This version includes the following changes: pgvector is updated to version 0.5.0 PostgreSQL is updated to version 15.4 Feature The AlloyDB Omni Kubernetes Operator version 0.3.0 is now available in Preview , and includes bug fixes and improvements to the operator.
- On every node that you enable transparent huge pages on, run the following command: echo within size > /sys/kernel/mm/transparent hugepage/shmem enabled April 05, 2024 Change The extension pgvector is updated to version 0.6.0.
- You can use a query recall evaluator to find the recall for a vector query for a given configuration, and to tune your parameters to achieve the desired vector query recall results for different vector indexes.

### Create an IVF index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivf-index)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable scalar quantization on a pgvector -based index, specify IVF as the index method, and SQ8 as the quantizer: CREATE INDEX INDEX NAME ON TABLE USING ivf ( EMBEDDING COLUMN DISTANCE FUNCTION ) WITH ( lists = LIST COUNT , quantizer = ' QUANTIZER ' ); Replace the following: INDEX NAME : the name of the index you want to create—for example, my-ivf-index .
- What's next Create a ScaNN index Run vector similarity searches Tune vector query performance Vector index metrics Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- CREATE EXTENSION IF NOT EXISTS vector ; Create an IVF index Stock pgvector supports approximate nearest-neighbor searching through indexing.
- You apply the vector to one of the pgvector nearest-neighbor operators, <-> for L2 distance, to find the database rows with the most semantically similar embeddings.

