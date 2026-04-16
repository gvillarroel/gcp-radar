---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.170Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "oracle_fdw extension support"
feature_slug: "oracle-fdw-extension-support"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
keywords:
  - "accessing"
  - "oracle"
  - "databases"
  - "extension"
  - "through"
  - "supports"
---

# oracle_fdw extension support

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports the oracle_fdw extension for accessing Oracle databases through a foreign data wrapper.

## Extended Definition

AlloyDB supports the oracle_fdw extension for accessing Oracle databases through a foreign data wrapper.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)

## Supporting Pages

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- You can use this function to track the last time that a row in a database table was modified. oracle fdw Provides a foreign data wrapper (fdw) for accessing Oracle databases easily and efficiently. orafce Emulates a subset of functions, packages, and operators from the Oracle RDBMS.
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- RUM indexes improve upon standard GIN indexes by storing positional information directly in the index, letting you perform faster phrase searches and relevance ranking without accessing the table data. sslinfo Provides information about the SSL certificate that the current client provided when it connected to the instance. tablefunc Provides various functions that return tables (multiple rows). tcn Provides a trigger function that notifies listeners of changes to the content of database tables. tds fdw Provides a foreign data wrapper ( fdw ) for accessing databases that use the Tabular Data Stream (TDS) protocol, such as Microsoft SQL Server or Sybase. temporal tables Provides support for temporal tables.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- To help you proactively identify and troubleshoot root causes of query performance issues, advanced query insights features let you do the following: Perform ad hoc analysis to diagnose difficult problems using near real-time query stats and correlation analysis across multiple dimensions like users, hosts, and databases.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Advanced query insights features overview Stay organized with collections Save and categorize content based on your preferences.
- Advanced query insights features load an extension that records query metrics and execution plans that are implemented using hooks.
- Java is a registered trademark of Oracle and/or its affiliates.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- GiST indexes are better than GIN indexes in situations where the column being indexed is updated frequently. btree gin, pg trgm, and pg bigm extensions When you use GIN and GiST index types, you need additional extensions such as btree gin , pg trgm , and pg bigm , depending on the use case for the index. btree gin : this module provides sample generalized inverted index (GIN) operator classes that implement B-tree equivalent behavior for certain data types.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback AlloyDB database indexing strategies Stay organized with collections Save and categorize content based on your preferences.
- However, when you have a multi-column index that supports many predicate possibilities, the Bloom index is still a good alternative over a B-tree with the same number of columns.
- Included with the extension are the Inverted File with Flat Compression (IVFFlat) and Hierarchical Navigable Small World (HNSW) index types.

