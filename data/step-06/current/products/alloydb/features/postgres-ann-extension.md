---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.510Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "postgres_ann extension"
feature_slug: "postgres-ann-extension"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
keywords:
  - "postgres"
  - "ann"
  - "extension"
  - "provides"
  - "configurable"
  - "nearest"
  - "neighbor"
  - "index"
---

# postgres_ann extension

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The postgres_ann extension provides a configurable nearest-neighbor index powered by the ScaNN algorithm.

## Extended Definition

The postgres_ann extension provides a configurable nearest-neighbor index powered by the ScaNN algorithm.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)

## Supporting Pages

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AlloyDB alloydb scann , a PostgreSQL extension developed by Google that implements a highly efficient nearest-neighbor index powered by the ScaNN algorithm .
- Three-level tree index To create a three-level tree index using the ScaNN algorithm to a column containing stored vector embeddings, run the following DDL query: CREATE INDEX INDEX NAME ON TABLE USING scann ( EMBEDDING COLUMN DISTANCE FUNCTION ) WITH ( num leaves = NUM LEAVES VALUE , max num levels = 2 ); After you create the index, you can run nearest-neighbor search queries that make use of the index by following the instructions in Make a nearest-neighbor query with given text .
- The ScaNN index is a tree-based quantization index for approximate nearest neighbor search.
- The vector extension that is based on pgvector , extended by Google for AlloyDB, and the alloydb scann extension is installed: CREATE EXTENSION IF NOT EXISTS alloydb scann CASCADE ; Note: You can use the alloydb scann extension with PostgreSQL 14, 15, 16, and 17 compatible databases.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GiST indexes are better than GIN indexes in situations where the column being indexed is updated frequently. btree gin, pg trgm, and pg bigm extensions When you use GIN and GiST index types, you need additional extensions such as btree gin , pg trgm , and pg bigm , depending on the use case for the index. btree gin : this module provides sample generalized inverted index (GIN) operator classes that implement B-tree equivalent behavior for certain data types.
- Vector pgvector is an open source extension used to perform similarity and approximate nearest neighbor searches based on embedding models.
- Proprietary to Google Cloud is the Scalable Nearest Neighbors (ScaNN) index type.
- 554 ms The Bloom index also occupies less space than a similarly constructed B-tree index: \dt+ public.bloom test List of relations Schema Name Type Owner Persistence Access method Size Description --------+------------+-------+----------+-------------+---------------+---------+------------- public bloom test table postgres permanent heap 9663 MB NULL -------------------------------------------------------------------------------------------------------- \di+ idx bloom test List of relations Schema Name Type Owner Table Persistence Access method Size --------+----------------------+-------+----------+------------+-------------+---------------+---------+ public idx bloom test index postgres bloom test permanent bloom 2112 MB -------------------------------------------------------------------------------------------------------- \di+ idx btree bloom test List of relations Schema Name Type Owner Table Persistence Access method Size public idx btree bloom test index postgres bloom test permanent btree 4723 MB For multi-column or variable column predicate support that uses equality predicates, a Bloom index can be a good alternative to creating multiple single- or dual-column indexes.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg squeeze to the value on in the AlloyDB instance where you want to use the extension. pg stat statements Provides a means for tracking execution statistics of all SQL statements executed. pg trgm Provides functions and operators for determining the similarity of alphanumeric text based on trigram matching, as well as index operator classes that support fast searching for similar strings. pg visibility Provides a way to examine the visibility map (VM) and the page-level visibility information of a table. pg wait sampling Provides the ability to collect sampling statistics of wait events.
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.

