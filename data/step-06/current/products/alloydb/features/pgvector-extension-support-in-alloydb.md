---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.646Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "pgvector extension support in AlloyDB"
feature_slug: "pgvector-extension-support-in-alloydb"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy"
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
Coverage: LOW

## Step 02 Summary

AlloyDB has added support for the pgvector PostgreSQL extension.

## Extended Definition

AlloyDB has added support for the pgvector PostgreSQL extension.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy](https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy)

## Supporting Pages

### "Measure vector query recall \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall](https://docs.cloud.google.com/alloydb/docs/ai/measure-vector-query-recall)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inverted File with Flat Compression (IVFFLAT) and Inverted File Flat (IVF): types of vector indexes that are used for ANN searches, particularly in databases like the PostgreSQL pgvector extension.
- You can measure the recall of your vector search query for different vector indexes, including the following: Scalable Nearest Neighbors (ScaNN): an algorithm for efficient vector similarity search.
- If the pgvector extension isn't installed, install the vector extension version 0.8.0.google-3 or later to store generated embeddings as vector values.
- If the pgvector extension is already installed, upgrade the vector extension to version 0.8.0.google-3 or later to get recall evaluator capabilities.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- AlloyDB support for the pgvector extension brings performance enhancements for vector queries that run up to ten times faster than standard PostgreSQL, including an optimization that lets you create indexes of stored vector data using scalar quantization .
- This version includes the following changes: pgvector is updated to version 0.5.0 PostgreSQL is updated to version 15.4 Feature The AlloyDB Omni Kubernetes Operator version 0.3.0 is now available in Preview , and includes bug fixes and improvements to the operator.
- On every node that you enable transparent huge pages on, run the following command: echo within size > /sys/kernel/mm/transparent hugepage/shmem enabled April 05, 2024 Change The extension pgvector is updated to version 0.6.0.
- June 17, 2025 Feature You can use the columnar engine to improve the performance of vector similarity searches, specifically K-Nearest Neighbor (KNN) searches, when combined with highly-selective predicate filtering.

### "Choose a vector index in AlloyDB AI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy](https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Choose a vector index in AlloyDB AI Stay organized with collections Save and categorize content based on your preferences.
- When you create a vector index in AlloyDB for PostgreSQL, it typically uses ANN, which might partition vectors according to similarity to facilitate faster retrieval.
- Google recommends that you create a vector index to optimize performance on your vector search queries.
- When you create a vector index, AlloyDB AI uses ANN, which provides better performance than KNN.

