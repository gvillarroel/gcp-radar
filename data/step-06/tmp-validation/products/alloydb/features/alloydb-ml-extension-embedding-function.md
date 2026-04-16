---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.176Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB ML extension embedding function"
feature_slug: "alloydb-ml-extension-embedding-function"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "learning"
  - "embedding"
  - "machine"
  - "extension"
  - "provides"
---

# AlloyDB ML extension embedding function

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The AlloyDB machine learning extension provides an embedding SQL function that creates vector embeddings from text using ML models.

## Extended Definition

The AlloyDB machine learning extension provides an embedding SQL function that creates vector embeddings from text using ML models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To check the progress, run the following query: SELECT table name , content column , embedding column , model id , percent progress , status , elapsed time , rows processed , partition root FROM ai . embedding progress view ; The view provides the following information: Column Description table name The name of the table or partition being processed. content column The column containing the source content for the embedding. embedding column The column where the embeddings are being stored. model id The model being used for generation. percent progress The percentage of the operation that is complete. status The current status of the operation (e.g., running, success). elapsed time The time that has passed since the operation began. rows processed The number of rows processed so far. partition root The name of the root partitioned table.
- Examples for generating embeddings in auto This section provides examples for generating embeddings in auto using registered model endpoints.
- The ai.embedding prepare partition procedure ensures the schema is compatible with any parent table in the hierarchy: -- Prepare a sub-partition for a non-root parent table CALL ai . embedding prepare partition ( parent table = > 'documents eu' , -- An existing partition child table = > 'documents eu germany' ); -- Attach the new sub-partition ALTER TABLE documents eu ATTACH PARTITION documents eu germany FOR VALUES IN ( 'germany' ); -- Refresh embeddings for the new sub-partition CALL ai . refresh embeddings ( table name = > 'documents eu germany' , embedding column = > 'content embeddings' ); Monitor embedding generation progress You can monitor the real-time status of active initialize embeddings and refresh embeddings calls by querying the ai.embedding progress view .
- For example, the following function defines a custom batch input transform for a model that requires an output dimensionality of 768: CREATE OR REPLACE FUNCTION google ml . vertexai text embedding batch input transform with 768 dims ( model id VARCHAR ( 100 ), input list TEXT []) RETURNS JSON LANGUAGE SQL AS $$ SELECT pg catalog . json build object ( 'instances' , pg catalog . json agg ( pg catalog . json build object ( 'content' , content )), 'parameters' , pg catalog . json build object ( 'outputDimensionality' , 768 ) ) FROM unnest ( input list ) AS content ; $$ ; Use JSONB optimization with custom models You can use the JSONB data type in your custom output transform functions for improved performance.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag google columnar engine.enabled to the value on in the AlloyDB instance where you want to use the extension. google db advisor Provides the index advisor feature of AlloyDB, which recommends indexes to speed up query processing. google ml integration Provides functions you use to register model endpoints and generate embeddings or invoke predictions in SQL. google plan management Provides functions you use to manage your query plans using query plan management for consistent query plan selection.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg squeeze to the value on in the AlloyDB instance where you want to use the extension. pg stat statements Provides a means for tracking execution statistics of all SQL statements executed. pg trgm Provides functions and operators for determining the similarity of alphanumeric text based on trigram matching, as well as index operator classes that support fast searching for similar strings. pg visibility Provides a way to examine the visibility map (VM) and the page-level visibility information of a table. pg wait sampling Provides the ability to collect sampling statistics of wait events.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- To facilitate the development of AI applications, AlloyDB AI provides the following extensions: vector (a version of pgvector customized for AlloyDB AI): stores and indexes vector embeddings for semantic search.
- For more information, see Create a ScaNN index . google ml integration : provides access to the AI functions, which enables ML model invocation from AlloyDB for tasks such as generating embeddings, semantic ranking, AI-based filters and joins, and text generation and summarization.
- Low-latency AI applications: build generative AI applications by leveraging AlloyDB AI, which integrates vector search and machine learning model invocation directly into the database engine, removing the need for high-latency external data movement.
- To get started with vector search, see Perform a vector search . alloydb scann : provides high-performance approximate nearest-neighbor search by implementing a highly efficient nearest-neighbor index powered by the ScaNN algorithm.

