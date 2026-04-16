---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.098Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "pg_ivm extension support"
feature_slug: "pg-ivm-extension-support"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "incremental"
  - "postgresql"
  - "extension"
  - "view"
  - "supports"
---

# pg_ivm extension support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB for PostgreSQL supports the pg_ivm extension for incremental view maintenance on materialized views.

## Extended Definition

AlloyDB for PostgreSQL supports the pg_ivm extension for incremental view maintenance on materialized views.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use materialized views to make incremental changes to the views instead of recomputing the contents from scratch. pg partman Enables you to create and manage time-based and serial-based table partition sets. pg prewarm Provides a convenient way to load relation data into either the operating system buffer cache or the PostgreSQL buffer cache.
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg bigm to the value on in the AlloyDB instance where you want to use the extension. pg buffercache Provides a means for examining what's happening in the shared buffer cache in real time. pg cron Provides a simple cron-based job scheduler for PostgreSQL that runs inside the database as an extension.

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CALL ai . initialize embeddings ( model id = > 'text-embedding-005' , table name = > 'user reviews' , content column = > 'content' , embedding column = > 'content embeddings' , batch size = > 50 ); Use a custom embedding model with batch support If you want to use a custom or externally supported model that supports batching, define the batch transform functions and specify them as model batch in transform fn and model batch out transform fn when you create a model.
- CALL ai . initialize embeddings ( model id = > 'text-embedding-005' , table name = > 'user reviews' , content column = > 'content' , embedding column = > 'content embeddings' , batch size = > 10 , incremental refresh mode = > 'transactional' ); In transactional mode, the ai.refresh embeddings() function is disabled because embeddings are kept in sync automatically using triggers.
- CALL ai . drop embedding config ( table name = > 'user reviews' , embedding column = > 'content embeddings' ); Work with partitioned tables The auto vector embedding feature supports partitioned tables.
- To give you control over consistency and performance, AlloyDB supports various modes for incremental embedding refreshes.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AlloyDB overview Stay organized with collections Save and categorize content based on your preferences.
- Extension support AlloyDB includes support for a number of popular PostgreSQL extensions.
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- Quickstart: Create and connect to a database Perform a vector search Migration overview Connection overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

