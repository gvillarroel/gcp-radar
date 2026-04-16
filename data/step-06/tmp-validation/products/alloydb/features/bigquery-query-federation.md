---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.130Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "BigQuery query federation"
feature_slug: "bigquery-query-federation"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
keywords:
  - "federation"
  - "stored"
  - "databases"
  - "query"
  - "lets"
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
- [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)

## Supporting Pages

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- To help you proactively identify and troubleshoot root causes of query performance issues, advanced query insights features let you do the following: Perform ad hoc analysis to diagnose difficult problems using near real-time query stats and correlation analysis across multiple dimensions like users, hosts, and databases.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Advanced query insights features overview Stay organized with collections Save and categorize content based on your preferences.
- Traces from advanced query insights features are stored in Cloud Trace and have a 30-day retention period.
- Benefits of advanced query insights features The following advanced query insights features are available to help you detect and fix query performance problems: Prebuilt dashboards that help you identify query performance problems early and let you identify, diagnose, and resolve issues in a single page on the Google Cloud console.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- RUM indexes improve upon standard GIN indexes by storing positional information directly in the index, letting you perform faster phrase searches and relevance ranking without accessing the table data. sslinfo Provides information about the SSL certificate that the current client provided when it connected to the instance. tablefunc Provides various functions that return tables (multiple rows). tcn Provides a trigger function that notifies listeners of changes to the content of database tables. tds fdw Provides a foreign data wrapper ( fdw ) for accessing databases that use the Tabular Data Stream (TDS) protocol, such as Microsoft SQL Server or Sybase. temporal tables Provides support for temporal tables.
- You can use this function to track which user last modified a row in a database table. intagg Provides an integer aggregator and an enumerator. intarray Provides a set of functions and operators for manipulating null-free arrays of integers and performing indexed searches on them. ip4r Provides data types for IPv4/v6 addresses, and address ranges, plus index support. isn Provides data types for some international product numbering standards. lo Support for managing Large Objects (also called LOs or BLOBs). ltree Implements a data type ltree for representing labels of data stored in a hierarchical tree-like structure. moddatetime Provides functions for storing the current time into a timestamp field.

### About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback About query insights Stay organized with collections Save and categorize content based on your preferences.
- Query insights help you detect, diagnose, and prevent query performance problems for AlloyDB databases.
- Query insights traces are stored in Cloud Trace .
- Limitations The limitations of query insights are as follows: When client IP address tracking is enabled and a high number of clients, for example, exceeding 100, send traffic to an instance, query insights capture the client addresses that contribute to the highest cumulative execution time.

