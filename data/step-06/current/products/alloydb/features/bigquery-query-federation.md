---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.497Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "BigQuery query federation"
feature_slug: "bigquery-query-federation"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/query-insights-overview"
keywords:
  - "bigquery"
  - "query"
  - "federation"
  - "lets"
  - "stored"
  - "alloydb"
  - "databases"
---

# BigQuery query federation

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

BigQuery query federation lets BigQuery query data stored in AlloyDB databases.

## Extended Definition

BigQuery query federation lets BigQuery query data stored in AlloyDB databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)

## Supporting Pages

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Advanced query insights features overview Stay organized with collections Save and categorize content based on your preferences.
- To help you proactively identify and troubleshoot root causes of query performance issues, advanced query insights features let you do the following: Perform ad hoc analysis to diagnose difficult problems using near real-time query stats and correlation analysis across multiple dimensions like users, hosts, and databases.
- Traces from advanced query insights features are stored in Cloud Trace and have a 30-day retention period.
- The metrics are stored in AlloyDB tables, and normalized execution plans are stored in Cloud Trace .

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag google columnar engine.enabled to the value on in the AlloyDB instance where you want to use the extension. google db advisor Provides the index advisor feature of AlloyDB, which recommends indexes to speed up query processing. google ml integration Provides functions you use to register model endpoints and generate embeddings or invoke predictions in SQL. google plan management Provides functions you use to manage your query plans using query plan management for consistent query plan selection.

### About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback About query insights Stay organized with collections Save and categorize content based on your preferences.
- Query insights help you detect, diagnose, and prevent query performance problems for AlloyDB databases.
- What's Next Improve query performance using query insights AlloyDB metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Compatibility Query insights are supported on all AlloyDB machine types and available on all Google Cloud Platform regions.

