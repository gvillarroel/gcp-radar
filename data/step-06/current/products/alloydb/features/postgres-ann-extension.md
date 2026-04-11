---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.617Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "postgres_ann extension"
feature_slug: "postgres-ann-extension"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
  - "https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes"
keywords:
  - "nearest-neighbor indexing"
  - "ScaNN algorithm"
  - "postgres_ann extension"
  - "vector index in AlloyDB Omni"
  - "Postgres ANN"
  - "postgres_ann"
  - "ANN extension"
  - "scann extension"
---

# postgres_ann extension

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

The postgres_ann extension is available in AlloyDB Omni for scalable nearest-neighbor indexing with the ScaNN algorithm.

## Extended Definition

The postgres_ann extension is available in AlloyDB Omni for scalable nearest-neighbor indexing with the ScaNN algorithm.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)

## Supporting Pages

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The vector extension that is based on pgvector , extended by Google for AlloyDB, and the alloydb scann extension is installed: CREATE EXTENSION IF NOT EXISTS alloydb scann CASCADE ; Note: You can use the alloydb scann extension with PostgreSQL 14, 15, 16, and 17 compatible databases.
- You cannot run bulk search queries using the alloydb scann extension.
- Three-level tree index To create a three-level tree index using the ScaNN algorithm to a column containing stored vector embeddings, run the following DDL query: CREATE INDEX INDEX NAME ON TABLE USING scann ( EMBEDDING COLUMN DISTANCE FUNCTION ) WITH ( num leaves = NUM LEAVES VALUE , max num levels = 2 ); After you create the index, you can run nearest-neighbor search queries that make use of the index by following the instructions in Make a nearest-neighbor query with given text .
- Two-level tree index To apply a two-level tree index using the ScaNN algorithm to a column containing stored vector embeddings, run the following DDL query: CREATE INDEX INDEX NAME ON TABLE USING scann ( EMBEDDING COLUMN DISTANCE FUNCTION ) WITH ( num leaves = NUM LEAVES VALUE , quantizer = QUANTIZER ); Replace the following: INDEX NAME : the name of the index you want to create—for example, my scann index .

### "Maintain vector indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE EXTENSION IF NOT EXISTS alloydb scann ; If the vector and alloydb scann extensions are already installed, upgrade the extensions to the latest version.
- If the vector and alloydb scann extensions aren't installed, install the latest extension versions.
- Before you begin Install or update the vector and alloydb scann extensions.

