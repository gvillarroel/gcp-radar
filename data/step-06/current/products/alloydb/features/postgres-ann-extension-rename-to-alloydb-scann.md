---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.604Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "postgres_ann extension rename to alloydb_scann"
feature_slug: "postgres-ann-extension-rename-to-alloydb-scann"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
  - "https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference"
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
Coverage: LOW

## Step 02 Summary

The PostgreSQL extension named postgres_ann has been renamed to alloydb_scann in AlloyDB Omni.

## Extended Definition

The PostgreSQL extension named postgres_ann has been renamed to alloydb_scann in AlloyDB Omni.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes](https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference)

## Supporting Pages

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

### "AlloyDB ScaNN Index reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference)
- Source ID: `site-api-reference`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback AlloyDB ScaNN Index reference Stay organized with collections Save and categorize content based on your preferences.
- Note: Before creating a ScaNN index, you must install the alloydb scann and vector extensions.

