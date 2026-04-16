---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.848Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "postgres_ann extension rename to alloydb_scann"
feature_slug: "postgres-ann-extension-rename-to-alloydb-scann"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/best-practices-tuning-scann"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
  - "https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/columnar-engine/about"
keywords:
  - "PostgreSQL extension rename"
  - "postgres_ann extension"
  - "postgres_ann"
  - "alloydb_scann extension"
  - "extension migration"
  - "scann extension"
  - "alloydb_scann"
---

# postgres_ann extension rename to alloydb_scann

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The PostgreSQL extension named postgres_ann has been renamed to alloydb_scann in AlloyDB Omni.

## Extended Definition

The PostgreSQL extension named postgres_ann has been renamed to alloydb_scann in AlloyDB Omni.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/best-practices-tuning-scann](https://docs.cloud.google.com/alloydb/docs/ai/best-practices-tuning-scann)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)

## Supporting Pages

### "Best practices for tuning ScaNN indexes in AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/best-practices-tuning-scann](https://docs.cloud.google.com/alloydb/docs/ai/best-practices-tuning-scann)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The vector extension that is based on pgvector , extended by Google for AlloyDB, and the alloydb scann extension is installed: CREATE EXTENSION IF NOT EXISTS alloydb scann CASCADE ; Note: You can use the alloydb scann extension with PostgreSQL 14, 15, 16, and 17 compatible databases.
- You cannot run bulk search queries using the alloydb scann extension.
- AlloyDB alloydb scann , a PostgreSQL extension developed by Google that implements a highly efficient nearest-neighbor index powered by the ScaNN algorithm .

### "Maintain vector indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- Source ID: `site-docs-root-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE EXTENSION IF NOT EXISTS vector ; CREATE EXTENSION IF NOT EXISTS alloydb scann ; If the vector and alloydb scann extensions are already installed, upgrade the extensions to the latest version.
- If the vector and alloydb scann extensions aren't installed, install the latest extension versions.
- Before you begin Install or update the vector and alloydb scann extensions.
- ALTER EXTENSION vector UPDATE ; ALTER EXTENSION alloydb scann UPDATE ; View vector index metrics If your table is prone to frequent updates or insertions, then we recommend periodically reindexing the existing ScaNN index in order to improve the recall accuracy for your index.

### "About the AlloyDB columnar engine \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/columnar-engine/about](https://docs.cloud.google.com/alloydb/docs/columnar-engine/about)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

