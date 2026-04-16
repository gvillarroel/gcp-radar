---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.140Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Simplified installation method for AlloyDB Omni"
feature_slug: "simplified-installation-method-for-alloydb-omni"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
keywords:
  - "installed"
  - "installation"
  - "simplified"
  - "method"
  - "managed"
  - "omni"
---

# Simplified installation method for AlloyDB Omni

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni can be installed and managed with common container-management tools such as Docker; AlloyDB Omni can be installed and run with portable open-source tools such as the Docker CLI.

## Extended Definition

AlloyDB Omni can be installed and managed with common container-management tools such as Docker; AlloyDB Omni can be installed and run with portable open-source tools such as the Docker CLI.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Key features AlloyDB distinguishes itself from a stock PostgreSQL installation in a number of ways beyond the vertical and horizontal scaling advantages inherent in the multi-node architecture described earlier.
- Security and encryption: protect data at rest using Google's default encryption or customer-managed encryption keys (CMEK), and manage access using integrated Google Cloud Identity and Access Management (IAM).
- This method led to challenges such as increased latency from data transfer, higher operational overhead from managing different systems, and duplicate storage.
- If you instead need to encrypt your data using a key that you provide, then you can specify a customer-managed encryption key (CMEK) when creating a cluster.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.
- However, you can manually install Orafce to an existing AlloyDB Omni installation. pageinspect Inspects the contents of database pages at a low level. pg background Lets you run arbitrary commands in a background worker. pg bigm Provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches.
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- In databases, a temporal table records the period of time for which a row is valid. tsm system rows Provides the table sampling method SYSTEM ROWS, which can be used in the TABLESAMPLE clause of a SELECT command. tsm system time Provides the table sampling method SYSTEM TIME, which can be used in the TABLESAMPLE clause of a SELECT command. unaccent A text search dictionary that removes accents and other diacritical signs from lexemes. uuid-ossp Provides functions to generate universally unique identifiers (UUIDs) using one of several standard algorithms.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Category Tools Example natural language prompt Database operations database overview Give me an overview of the current database. list tables Show me all the tables in the current database. execute sql Show me the 10 most expensive products in the "Laptops" category. list active queries What queries are running on the database? get query plan Explain the query plan for a query that finds all customers who have not placed an order in the last 6 months. list available extensions What are the available extensions I can install? list installed extensions List all the extensions that are installed. list indexes List all indexes in the products table. list locks Show all active locks on the database. list schemas List all schemas in the database. list sequences Show all sequences in the current schema. list triggers List all triggers for the orders table. list views Show me all the views in the sales schema.
- Resource management clusters, instances, users create cluster Create an AlloyDB cluster named sales-quarterly-db in the us-east1 region. get cluster Get the details for the cluster sales-quarterly-db . list clusters List all of my AlloyDB clusters. create instance Create a new read instance in the sales-quarterly-db cluster. get instance Show me the information for the instance sales-quarterly-db-rp . list instances List all instances in the sales-quarterly-db cluster. create user Note: The create user tool can create two types of database users: Database users with built-in authentication : these users are managed within the database and authenticate with a password.
- You must use Toolbox version v0.15.0 or later. linux/amd64 curl -O https://storage.googleapis.com/genai-toolbox/v0.15.0/linux/amd64/toolbox darwin/arm64 curl -O https://storage.googleapis.com/genai-toolbox/v0.15.0/darwin/arm64/toolbox darwin/amd64 curl -O https://storage.googleapis.com/genai-toolbox/v0.15.0/darwin/amd64/toolbox windows/amd64 curl -O https://storage.googleapis.com/genai-toolbox/v0.15.0/windows/amd64/toolbox Make the binary an executable. chmod +x toolbox Verify the installation. ./toolbox --version Configure your client Select your agent tool from the following options: Claude code Install Claude Code .
- Connect with Antigravity You can connect AlloyDB to Antigravity in the following ways: Using the MCP Store Using a custom configuration Note: You don't need to download the MCP Toolbox binary to use these methods.

