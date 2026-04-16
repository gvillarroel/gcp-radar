---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.867Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Updated PostgreSQL extensions in AlloyDB Omni 15.5.0"
feature_slug: "updated-postgresql-extensions-in-alloydb-omni-15-5-0"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization"
keywords:
  - "pg_repack extension"
  - "pg_cron extension"
  - "pgfincore extension"
  - "AlloyDB Omni 15.5.0 extension updates"
  - "pg_cron"
  - "pglogical extension"
  - "pgvector extension"
  - "pglogical"
---

# Updated PostgreSQL extensions in AlloyDB Omni 15.5.0

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni 15.5.0 updates major extensions including pg_cron, pg_repack, pgfincore, pglogical, and pgvector.

## Extended Definition

AlloyDB Omni 15.5.0 updates major extensions including pg_cron, pg_repack, pgfincore, pglogical, and pgvector.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags](https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)

## Supporting Pages

### AlloyDB flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags](https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The pg bigm extension provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches. alloydb.enable pg cron Type boolean Default off Instance restarts Yes Controls the availability of the pg cron extension in an AlloyDB instance.
- To enable the PostgreSQL log, set logging collector to on and allobydb.enable pgaudit to false . alloydb.enable pglogical Type boolean Default off Instance restarts Yes Controls the availability of the pglogical extension in an AlloyDB instance.
- The pglogical extension provides logical streaming replication for PostgreSQL using a publish-subscribe model. alloydb.enable named hints Type boolean Default off Instance restarts No Enables the AlloyDB named hints feature.
- The pg cron extension provides a cron-based job scheduler for PostgreSQL that runs inside the database as an extension.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Logical decoding plugins In addition to the extensions listed earlier on this page, AlloyDB supports the following plugins used by the pglogical extension for formatting that extension's streamed output.
- AlloyDB includes a number of plugins used by the pglogical extension.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg bigm to the value on in the AlloyDB instance where you want to use the extension. pg buffercache Provides a means for examining what's happening in the shared buffer cache in real time. pg cron Provides a simple cron-based job scheduler for PostgreSQL that runs inside the database as an extension.

### "AlloyDB query tuning and optimization \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: N/A

