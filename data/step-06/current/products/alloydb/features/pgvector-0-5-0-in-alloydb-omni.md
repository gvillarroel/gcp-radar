---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.631Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "pgvector 0.5.0 in AlloyDB Omni"
feature_slug: "pgvector-0-5-0-in-alloydb-omni"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index"
keywords:
  - "pgvector extension in AlloyDB Omni"
  - "pgvector extension version 0.5.0"
  - "AlloyDB Omni pgvector 0.5.0"
  - "vector extension support"
  - "v0.5.0"
  - "pgvector 0.5.0"
  - "pgvector"
---

# pgvector 0.5.0 in AlloyDB Omni

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB Omni now includes pgvector updated to version 0.5.0.

## Extended Definition

AlloyDB Omni now includes pgvector updated to version 0.5.0.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- This version includes the following changes: pgvector is updated to version 0.5.0 PostgreSQL is updated to version 15.4 Feature The AlloyDB Omni Kubernetes Operator version 0.3.0 is now available in Preview , and includes bug fixes and improvements to the operator.
- AlloyDB support for the pgvector extension brings performance enhancements for vector queries that run up to ten times faster than standard PostgreSQL, including an optimization that lets you create indexes of stored vector data using scalar quantization .
- On every node that you enable transparent huge pages on, run the following command: echo within size > /sys/kernel/mm/transparent hugepage/shmem enabled April 05, 2024 Change The extension pgvector is updated to version 0.6.0.
- December 24, 2025 Change The extension vector , which includes pgvector functions and operators, is updated to version 0.8.1.

### "Measure vector query recall \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inverted File with Flat Compression (IVFFLAT) and Inverted File Flat (IVF): types of vector indexes that are used for ANN searches, particularly in databases like the PostgreSQL pgvector extension.
- If the pgvector extension isn't installed, install the vector extension version 0.8.0.google-3 or later to store generated embeddings as vector values.
- If the pgvector extension is already installed, upgrade the vector extension to version 0.8.0.google-3 or later to get recall evaluator capabilities.
- For more information about HNSW and IVF/IVFFLAT index methods, see pgvector .

### "Create an IVFFLAT index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index](https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CREATE EXTENSION IF NOT EXISTS vector ; Create an IVFFlat index Stock pgvector also provides a version of the IVF index named IVFFlat that provides faster build time and has a smaller memory footprint as compared to the hnsw index.
- What's next Create a ScaNN index Run vector similarity searches Tune vector query performance Vector index metrics Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
- You apply the vector to one of the pgvector nearest-neighbor operators, <-> for L2 distance, to find the database rows with the most semantically similar embeddings.
- Because embedding() returns a real array, you must explicitly cast the embedding() call to vector in order to use these values with pgvector operators.

