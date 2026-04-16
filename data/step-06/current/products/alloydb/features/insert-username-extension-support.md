---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.517Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "insert_username extension support"
feature_slug: "insert-username-extension-support"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index"
keywords:
  - "insert"
  - "username"
  - "extension"
  - "alloydb"
  - "omni"
  - "includes"
---

# insert_username extension support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni includes support for the insert_username extension.

## Extended Definition

AlloyDB Omni includes support for the insert_username extension.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index](https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index)

## Supporting Pages

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.
- PostGIS extensions AlloyDB's PostGIS support includes the following extensions: postgis postgis raster postgis sfcgal postgis tiger geocoder postgis topology address standardizer address standardizer data us Enable an extension Enable an extension by connecting to a database in an AlloyDB cluster's primary instance, then running a CREATE EXTENSION command.
- Extension Included with AlloyDB Included with AlloyDB Omni Description amcheck Provides functions for verifying the logical consistency of the structure of relations, enabling the pg amcheck application to check for corruption. anon Helps you hide or replace personally identifiable information (PII) or commercially sensitive data.
- The table also marks which extensions are included with AlloyDB Omni , the containerized edition of AlloyDB that you can run in your own Linux-based environment.

### "Create and manage RUM index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index](https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a table to store queries: CREATE TABLE queries ( query text tsquery ); INSERT INTO queries ( query text ) VALUES ( plainto tsquery ( 'AlloyDB is fast!' )); Create a RUM index on the query text column: CREATE INDEX idx queries rum ON queries USING rum ( query text rum tsquery ops ); Run a query to find stored queries that match a document: SELECT FROM queries WHERE to tsvector ( 'english' , 'AlloyDB is fast' ) @@ query text ; Index for array search sorted by timestamp Use the rum anyarray addon ops operator class to index array columns along with an additional column for sorting.
- This document shows you how to create the RUM extension and create indexes to optimize full-text search in AlloyDB for PostgreSQL.
- Before you begin To create the RUM extension, you must have the alloydb superuser role.
- Create the RUM index using the hash operator class: CREATE INDEX idx docs rum hash ON documents USING rum ( search vector rum tsvector hash ops ); Populate documents table with more data: INSERT INTO documents ( title , content ) VALUES ( 'Title3' , 'That person was driving incredibly fast, however the routing was not very efficient' ); Run a standard match query: SELECT FROM documents WHERE search vector @@ to tsquery ( 'english' , 'fast & efficient' ); Index for search sorted by timestamp Use the rum tsvector addon ops operator class to optimize queries that filter by text and sort by another field, such as a timestamp.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- If you want to connect as a database user instead, set the following optional environment variables: #Optional: Set for database user authentication export ALLOYDB POSTGRES USER=" USERNAME " export ALLOYDB POSTGRES PASSWORD=" PASSWORD " To connect using a private IP address, you must also set the following environment variable: export ALLOYDB POSTGRES IP TYPE="private" Start the Gemini CLI in interactive mode: gemini The CLI automatically loads the AlloyDB extension for Gemini CLI extension and its tools, which you can use to interact with your database.
- AlloyDB extension The alloydb extension includes tools for querying the database, managing AlloyDB resources, and monitoring database health.
- Add the following configuration, replace the environment variables with your values, and save. { "mcpServers": { "alloydb": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","alloydb-postgres","--stdio"], "env": { "ALLOYDB POSTGRES PROJECT": " PROJECT ID ", "ALLOYDB POSTGRES REGION": " REGION ", "ALLOYDB POSTGRES CLUSTER": " CLUSTER NAME ", "ALLOYDB POSTGRES INSTANCE": " INSTANCE NAME ", "ALLOYDB POSTGRES DATABASE": " DATABASE NAME ", "ALLOYDB POSTGRES USER": " USERNAME ", "ALLOYDB POSTGRES PASSWORD": " PASSWORD " } } } } Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB POSTGRES IP TYPE": "private" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin To connect to your AlloyDB instance and use the available tools, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Use read-only tools to list and get AlloyDB resources AlloyDB Viewer roles/alloydb.viewer Connect to an instance and run queries Cloud AlloyDB Client roles/alloydb.client Service Usage Consumer roles/serviceusage.serviceUsageConsumer Perform administrative tasks (such as creating or managing clusters, instances, and users) AlloyDB Admin roles/alloydb.admin Use the observability extension Monitoring Viewer roles/monitoring.viewer Before you can connect to your AlloyDB instance, complete the following steps to set up your project and database.

