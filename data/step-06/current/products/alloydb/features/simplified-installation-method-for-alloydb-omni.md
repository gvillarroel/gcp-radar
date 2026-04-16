---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.505Z"
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
  - "simplified"
  - "installation"
  - "method"
  - "alloydb"
  - "omni"
  - "can"
  - "installed"
  - "managed"
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
- A self-hosted alternative: AlloyDB Omni As an alternative to running AlloyDB within Google Cloud, Google offers AlloyDB Omni.
- Encryption AlloyDB protects all data at rest using Google's encryption methods by default.
- Use cases for AlloyDB AlloyDB provides a scalable alternative to self-managed PostgreSQL.

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- However, you can manually install PostGIS to an existing AlloyDB Omni installation. postgres fdw Provides a foreign-data wrapper that you can use to access data stored in external PostgreSQL servers. postgresql-hll Introduces a new data type, hll , which is a HyperLogLog data structure. prefix Provides prefix-matching, plus index support. rdkit Provides functions for comparing, manipulating, and identifying molecular structures. refint Includes functions to check foreign key restraints, the referencing table, and the referenced table. rum Implements support to create RUM indexes for high-performance full-text search.
- However, you can manually install Orafce to an existing AlloyDB Omni installation. pageinspect Inspects the contents of database pages at a low level. pg background Lets you run arbitrary commands in a background worker. pg bigm Provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches.
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.
- Extension Included with AlloyDB Included with AlloyDB Omni Description amcheck Provides functions for verifying the logical consistency of the structure of relations, enabling the pg amcheck application to check for corruption. anon Helps you hide or replace personally identifiable information (PII) or commercially sensitive data.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Resource management clusters, instances, users create cluster Create an AlloyDB cluster named sales-quarterly-db in the us-east1 region. get cluster Get the details for the cluster sales-quarterly-db . list clusters List all of my AlloyDB clusters. create instance Create a new read instance in the sales-quarterly-db cluster. get instance Show me the information for the instance sales-quarterly-db-rp . list instances List all instances in the sales-quarterly-db cluster. create user Note: The create user tool can create two types of database users: Database users with built-in authentication : these users are managed within the database and authenticate with a password.
- Connect with Antigravity You can connect AlloyDB to Antigravity in the following ways: Using the MCP Store Using a custom configuration Note: You don't need to download the MCP Toolbox binary to use these methods.
- The following sections describe the alloydb and alloydb-observability extensions, which offer an installation process and a set of tools.
- MCP Store The most recommended method to connect to AlloyDB in Antigravity is by using the built-in MCP Store.

