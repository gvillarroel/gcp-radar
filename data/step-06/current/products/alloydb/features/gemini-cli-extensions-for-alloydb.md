---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.476Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Gemini CLI extensions for AlloyDB"
feature_slug: "gemini-cli-extensions-for-alloydb"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
  - "https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
keywords:
  - "gemini"
  - "cli"
  - "extensions"
  - "alloydb"
  - "provide"
  - "database"
  - "provisioning"
  - "management"
---

# Gemini CLI extensions for AlloyDB

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Gemini CLI extensions for AlloyDB provide database provisioning, management, querying, schema exploration, and troubleshooting from the command line.

## Extended Definition

Gemini CLI extensions for AlloyDB provide database provisioning, management, querying, schema exploration, and troubleshooting from the command line.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli](https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)

## Supporting Pages

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install the AlloyDB extension for Gemini CLI from the GitHub repository using the following command: gemini extensions install https://github.com/gemini-cli-extensions/alloydb Set environment variables to connect to your AlloyDB instance: export ALLOYDB POSTGRES PROJECT=" PROJECT ID " export ALLOYDB POSTGRES REGION=" REGION " export ALLOYDB POSTGRES CLUSTER=" CLUSTER NAME " export ALLOYDB POSTGRES INSTANCE=" INSTANCE NAME " export ALLOYDB POSTGRES DATABASE=" DATABASE NAME " The Gemini CLI extension for AlloyDB uses your application default credentials (ADC) for authentication by default.
- AlloyDB Observability extension The alloydb-observability extension provides a unified interface for managing and monitoring database performance and health directly from the Gemini CLI.
- Use the Gemini CLI extensions for AlloyDB Note: The AlloyDB Gemini CLI extension is based on MCP Toolbox for Databases.
- Before you begin To connect to your AlloyDB instance and use the available tools, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Use read-only tools to list and get AlloyDB resources AlloyDB Viewer roles/alloydb.viewer Connect to an instance and run queries Cloud AlloyDB Client roles/alloydb.client Service Usage Consumer roles/serviceusage.serviceUsageConsumer Perform administrative tasks (such as creating or managing clusters, instances, and users) AlloyDB Admin roles/alloydb.admin Use the observability extension Monitoring Viewer roles/monitoring.viewer Before you can connect to your AlloyDB instance, complete the following steps to set up your project and database.

### "Build context sets using Gemini CLI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli](https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Knowledge Catalog API Prepare an AlloyDB for PostgreSQL cluster, instance, and database Make sure that you have access to an existing AlloyDB cluster and instance or create a new one .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Build context sets using Gemini CLI Stay organized with collections Save and categorize content based on your preferences.
- Grant the alloydb.databaseUser , the serviceusage.serviceUsageConsumer , and the geminidataanalytics.queryDataUser roles to the IAM user at the project level.
- To update the DB Context Enrichment extension, run the following command: gemini extensions update mcp-db-context-enrichment To update the DB Context Enrichment extension or to replace the GEMINI API KEY , run the following command: gemini extensions config mcp-db-context-enrichment GEMINI API KEY Replace GEMINI API KEY with your Gemini API key.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag google columnar engine.enabled to the value on in the AlloyDB instance where you want to use the extension. google db advisor Provides the index advisor feature of AlloyDB, which recommends indexes to speed up query processing. google ml integration Provides functions you use to register model endpoints and generate embeddings or invoke predictions in SQL. google plan management Provides functions you use to manage your query plans using query plan management for consistent query plan selection.
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flags alloydb.enable pglogical and alloydb.logical decoding to the value on in the AlloyDB instance where you want to use the extension. pgrowlocks Provides row locking information for the specified table. pgRouting Extends PostGIS , enabling geospatial processing through network routing and analysis. pgstattuple Provides various functions to obtain tuple-level statistics. pgtap Provides a unit testing framework for PostgreSQL, written in PL/pgSQL and PL/SQL. pgtt Adds support for global temporary tables to your databases. vector The stock pgvector PostgreSQL extension is customized for AlloyDB, and referred to as vector .
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg squeeze to the value on in the AlloyDB instance where you want to use the extension. pg stat statements Provides a means for tracking execution statistics of all SQL statements executed. pg trgm Provides functions and operators for determining the similarity of alphanumeric text based on trigram matching, as well as index operator classes that support fast searching for similar strings. pg visibility Provides a way to examine the visibility map (VM) and the page-level visibility information of a table. pg wait sampling Provides the ability to collect sampling statistics of wait events.

