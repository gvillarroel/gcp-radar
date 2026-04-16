---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.161Z"
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
  - "username"
  - "insert"
  - "includes"
  - "extension"
  - "omni"
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
- This feature is available in ( Preview ). hstore Implements the hstore data type for storing sets of key/value pairs within a single PostgreSQL value. hypopg Provides support for hypothetical indexes. insert username Provides functions for storing the current user's name into a text field.

### "Create and manage RUM index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index](https://docs.cloud.google.com/alloydb/docs/ai/create-rum-index)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the RUM index using the hash operator class: CREATE INDEX idx docs rum hash ON documents USING rum ( search vector rum tsvector hash ops ); Populate documents table with more data: INSERT INTO documents ( title , content ) VALUES ( 'Title3' , 'That person was driving incredibly fast, however the routing was not very efficient' ); Run a standard match query: SELECT FROM documents WHERE search vector @@ to tsquery ( 'english' , 'fast & efficient' ); Index for search sorted by timestamp Use the rum tsvector addon ops operator class to optimize queries that filter by text and sort by another field, such as a timestamp.
- Add a tags column and populate it with data: ALTER TABLE documents ADD COLUMN tags TEXT []; INSERT INTO documents ( title , content , tags ) VALUES ( 'Title4' , 'Sample Text' , ARRAY [ 'ai' , 'ml' ] ); Create the RUM index on a TEXT[] column named tags : CREATE INDEX idx tags rum ON documents USING rum ( tags rum anyarray ops ); Run a query to find documents that have either ai or ml in their tags: SELECT FROM documents WHERE tags && '{"ai", "ml"}' ; Index for scalar types Use the rum <TYPE> ops operator classes to index columns that contain continuous values, such as integers, timestamps, or floating-point numbers.
- The <=> operator computes the relevance score, or distance, between the document and the query directly from the index, enabling fast sorting: SELECT title , content FROM documents WHERE search vector @@ to tsquery ( 'english' , 'search <-> engine' ) ORDER BY search vector < = > to tsquery ( 'english' , 'search <-> engine' ); Populate documents table with more data: INSERT INTO documents ( title , content ) VALUES ( 'Title1' , 'English is my primary language.' ); INSERT INTO documents ( title , content ) VALUES ( 'Title2' , 'Google has a great engineering culture' ); Run a prefix search query.
- Create a table to store queries: CREATE TABLE queries ( query text tsquery ); INSERT INTO queries ( query text ) VALUES ( plainto tsquery ( 'AlloyDB is fast!' )); Create a RUM index on the query text column: CREATE INDEX idx queries rum ON queries USING rum ( query text rum tsquery ops ); Run a query to find stored queries that match a document: SELECT FROM queries WHERE to tsvector ( 'english' , 'AlloyDB is fast' ) @@ query text ; Index for array search sorted by timestamp Use the rum anyarray addon ops operator class to index array columns along with an additional column for sorting.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- If you want to connect as a database user instead, set the following optional environment variables: #Optional: Set for database user authentication export ALLOYDB POSTGRES USER=" USERNAME " export ALLOYDB POSTGRES PASSWORD=" PASSWORD " To connect using a private IP address, you must also set the following environment variable: export ALLOYDB POSTGRES IP TYPE="private" Start the Gemini CLI in interactive mode: gemini The CLI automatically loads the AlloyDB extension for Gemini CLI extension and its tools, which you can use to interact with your database.
- AlloyDB extension The alloydb extension includes tools for querying the database, managing AlloyDB resources, and monitoring database health.
- Category Tools Example natural language prompt Database operations database overview Give me an overview of the current database. list tables Show me all the tables in the current database. execute sql Show me the 10 most expensive products in the "Laptops" category. list active queries What queries are running on the database? get query plan Explain the query plan for a query that finds all customers who have not placed an order in the last 6 months. list available extensions What are the available extensions I can install? list installed extensions List all the extensions that are installed. list indexes List all indexes in the products table. list locks Show all active locks on the database. list schemas List all schemas in the database. list sequences Show all sequences in the current schema. list triggers List all triggers for the orders table. list views Show me all the views in the sales schema.
- Add the following configuration, replace the environment variables with your values, and save. { "mcpServers": { "alloydb": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","alloydb-postgres","--stdio"], "env": { "ALLOYDB POSTGRES PROJECT": " PROJECT ID ", "ALLOYDB POSTGRES REGION": " REGION ", "ALLOYDB POSTGRES CLUSTER": " CLUSTER NAME ", "ALLOYDB POSTGRES INSTANCE": " INSTANCE NAME ", "ALLOYDB POSTGRES DATABASE": " DATABASE NAME ", "ALLOYDB POSTGRES USER": " USERNAME ", "ALLOYDB POSTGRES PASSWORD": " PASSWORD " } } } } Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB POSTGRES IP TYPE": "private" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

