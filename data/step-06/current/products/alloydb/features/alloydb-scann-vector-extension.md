---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.597Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "alloydb_scann vector extension"
feature_slug: "alloydb-scann-vector-extension"
latest_feature_date: "2024-10-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai"
  - "https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
keywords:
  - "vector index tuning"
  - "vector extension GA"
  - "postgres_scann"
  - "alloydb_scann extension"
  - "vector storage extension"
  - "scann extension"
  - "alloydb_scann"
---

# alloydb_scann vector extension

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

The alloydb_scann (formerly postgres_scann) extension is now generally available in AlloyDB for vector storage and index tuning use cases.

## Extended Definition

The alloydb_scann (formerly postgres_scann) extension is now generally available in AlloyDB for vector storage and index tuning use cases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai](https://docs.cloud.google.com/alloydb/docs/ai)
- [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)

## Supporting Pages

### "Build generative AI applications using AlloyDB AI \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai](https://docs.cloud.google.com/alloydb/docs/ai)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly introduces the AlloyDB scann extension and explains its ScaNN-based nearest-neighbor vector indexing use.

Evidence snippets:
- You can use the alloydb scann extension with PostgreSQL 14, 15, 16, and 17. google columnar engine extension: ScaNN index can be loaded into the columnar engine for further accelerating the vector search. google ml integration extension: the google ml integration extension provides AI functions for generating embeddings, semantic ranking, and implementing AI-based filters, joins and text generation/summarization.
- You can also create an IVFFlat index or HSNW index that are available with stock pgvector . alloydb scann extension: the alloydb scann extension implements a highly efficient nearest-neighbor index powered by the ScaNN algorithm .

### "Maintain vector indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- Source ID: `site-docs-root-2`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE EXTENSION IF NOT EXISTS alloydb scann ; If the vector and alloydb scann extensions are already installed, upgrade the extensions to the latest version.
- If the vector and alloydb scann extensions aren't installed, install the latest extension versions.
- Before you begin Install or update the vector and alloydb scann extensions.
- ALTER EXTENSION vector UPDATE ; ALTER EXTENSION alloydb scann UPDATE ; View vector index metrics If your table is prone to frequent updates or insertions, then we recommend periodically reindexing the existing ScaNN index in order to improve the recall accuracy for your index.

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The vector extension that is based on pgvector , extended by Google for AlloyDB, and the alloydb scann extension is installed: CREATE EXTENSION IF NOT EXISTS alloydb scann CASCADE ; Note: You can use the alloydb scann extension with PostgreSQL 14, 15, 16, and 17 compatible databases.
- You cannot run bulk search queries using the alloydb scann extension.
- AlloyDB alloydb scann , a PostgreSQL extension developed by Google that implements a highly efficient nearest-neighbor index powered by the ScaNN algorithm .

