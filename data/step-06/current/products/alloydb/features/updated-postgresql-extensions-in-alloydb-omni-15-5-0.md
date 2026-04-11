---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.627Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Updated PostgreSQL extensions in AlloyDB Omni 15.5.0"
feature_slug: "updated-postgresql-extensions-in-alloydb-omni-15-5-0"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
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

AlloyDB documentation indicates that in an AlloyDB release, several PostgreSQL extensions were updated, including pglogical (2.4.4 to 2.4.5), pg_cron (updated to 1.6), vector/pgvector (0.7.0 to 0.7.4), and pg_partman (4.7.4 to 5.0.1), with pgvector described as a customized AlloyDB variant called `vector`. The AlloyDB flags and supported extensions references also state that pglogical and pg_cron are extension capabilities gated by instance database flags (for example, `alloydb.enable pglogical`), but the provided excerpts do not explicitly confirm updates for pg_repack or pgfincore.

## Evidence Summary

The release notes page supplies specific extension version changes, while the flags and extension reference pages provide evidence on which extensions are available/enabled and how AlloyDB identifies pgvector as `vector`.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags](https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags](https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions extension-related flags (such as `alloydb.enable pg cron`) and how to enable them, but it does not cover AlloyDB Omni 15.5.0 or the full listed extension update set.

Evidence snippets:
- The pg bigm extension provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches. alloydb.enable pg cron Type boolean Default off Instance restarts Yes Controls the availability of the pg cron extension in an AlloyDB instance.
- To enable the PostgreSQL log, set logging collector to on and allobydb.enable pgaudit to false . alloydb.enable pglogical Type boolean Default off Instance restarts Yes Controls the availability of the pglogical extension in an AlloyDB instance.
- The pglogical extension provides logical streaming replication for PostgreSQL using a publish-subscribe model. alloydb.enable named hints Type boolean Default off Instance restarts No Enables the AlloyDB named hints feature.
- The pg cron extension provides a cron-based job scheduler for PostgreSQL that runs inside the database as an extension.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Logical decoding plugins In addition to the extensions listed earlier on this page, AlloyDB supports the following plugins used by the pglogical extension for formatting that extension's streamed output.
- AlloyDB includes a number of plugins used by the pglogical extension.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg bigm to the value on in the AlloyDB instance where you want to use the extension. pg buffercache Provides a means for examining what's happening in the shared buffer cache in real time. pg cron Provides a simple cron-based job scheduler for PostgreSQL that runs inside the database as an extension.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- This version includes the following: Compatibility with PostgreSQL server version 15 A command-line interface for easier installation and maintenance of AlloyDB Omni Integration with Vertex AI Guides for data protection using Barman and pglogical Various bug fixes and query performance improvements Feature A separate Technology Preview edition of AlloyDB Omni is available.
- The following extensions are updated: google ml integration from 1.3 to 1.4.2 pg partman from 4.7.4 to 5.0.1 pglogical from 2.4.4 to 2.4.5 pgtt from 3.0.0 to 4.0.0 vector is updated from 0.7.0 to 0.7.4 Note: pg partman contains breaking changes when upgrading from version 4.x to 5.x.
- AlloyDB support for the pgvector extension brings performance enhancements for vector queries that run up to ten times faster than standard PostgreSQL, including an optimization that lets you create indexes of stored vector data using scalar quantization .
- The following extensions are updated: Updated pg cron to version 1.6.

