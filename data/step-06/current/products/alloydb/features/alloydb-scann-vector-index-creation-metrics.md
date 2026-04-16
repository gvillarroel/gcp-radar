---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.820Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "alloydb_scann vector index creation metrics"
feature_slug: "alloydb-scann-vector-index-creation-metrics"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview"
  - "https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
keywords:
  - "pg_stat_ann_index_creation"
  - "index creation stats"
  - "vector index creation metrics"
  - "ANN index creation"
  - "alloydb_scann extension"
  - "scann extension"
  - "alloydb_scann"
---

# alloydb_scann vector index creation metrics

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The alloydb_scann extension now provides new vector index creation metrics via the pg_stat_ann_index_creation view.

## Extended Definition

The alloydb_scann extension now provides new vector index creation metrics via the pg_stat_ann_index_creation view.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview)
- [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- [https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy](https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)

## Supporting Pages

### "Filtered vector search in AlloyDB overview \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview](https://docs.cloud.google.com/alloydb/docs/ai/filtered-vector-search-overview)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

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

### "Choose a vector index in AlloyDB AI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy](https://docs.cloud.google.com/alloydb/docs/ai/choose-index-strategy)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- The vector extension that is based on pgvector , extended by Google for AlloyDB, and the alloydb scann extension is installed: CREATE EXTENSION IF NOT EXISTS alloydb scann CASCADE ; Note: You can use the alloydb scann extension with PostgreSQL 14, 15, 16, and 17 compatible databases.
- You cannot run bulk search queries using the alloydb scann extension.
- AlloyDB alloydb scann , a PostgreSQL extension developed by Google that implements a highly efficient nearest-neighbor index powered by the ScaNN algorithm .

