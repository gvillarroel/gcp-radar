---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.538Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Omni"
feature_slug: "alloydb-omni"
latest_feature_date: "2023-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/extensions"
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "alloydb"
  - "omni"
  - "downloadable"
  - "edition"
  - "postgresql"
  - "runs"
  - "containerized"
  - "database"
---

# AlloyDB Omni

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni is a downloadable edition of AlloyDB for PostgreSQL that runs a containerized AlloyDB database engine in your own environment.

## Extended Definition

AlloyDB Omni is a downloadable edition of AlloyDB for PostgreSQL that runs a containerized AlloyDB database engine in your own environment.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "Supported database extensions \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/extensions](https://docs.cloud.google.com/alloydb/docs/reference/extensions)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: Before you can use CREATE EXTENSION to enable this extension, you must first set the database flag alloydb.enable pg bigm to the value on in the AlloyDB instance where you want to use the extension. pg buffercache Provides a means for examining what's happening in the shared buffer cache in real time. pg cron Provides a simple cron-based job scheduler for PostgreSQL that runs inside the database as an extension.
- However, you can manually install Orafce to an existing AlloyDB Omni installation. pageinspect Inspects the contents of database pages at a low level. pg background Lets you run arbitrary commands in a background worker. pg bigm Provides full text search capability in PostgreSQL using 2-gram (bigram) indexes for faster full text searches.
- The table also marks which extensions are included with AlloyDB Omni , the containerized edition of AlloyDB that you can run in your own Linux-based environment.
- This extension is used along with the vector extension to enhance vector search capabilities and provides support for storing and querying vector embeddings. bloom Provides an index access method based on Bloom filters. btree gin Provides sample GIN operator classes that implement B-tree equivalent behavior. btree gist Provides GiST index operator classes that implement B-tree equivalent behavior. citext Provides a case-insensitive character string type citext . cube Implements a data type cube for representing multidimensional cubes. dblink Provides functions to connect to PostgreSQL databases from within a database session. dict int An add-on dictionary template for full-text search that controls the indexing of integers. earthdistance Provides two approaches to calculating great circle distances on the surface of the Earth. fuzzystrmatch Provides several functions to determine similarities and distance between strings. google columnar engine Provides the columnar engine feature of AlloyDB, which handles HTAP (hybrid transactional analytical processing) and OLAP (online analytical processing) workloads very efficiently.

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Major and minor version support AlloyDB supports compatibility with the following PostgreSQL database versions: PostgreSQL compatible version AlloyDB AlloyDB Omni PostgreSQL 18 18.1 Not applicable PostgreSQL 17 (default) 17.5 17.5 PostgreSQL 16 16.9 16.8 16.3 PostgreSQL 15 15.13 15.12 15.7 15.5 15.4 15.2 PostgreSQL 14 14.18 Not applicable PostgreSQL 18 compatibility Before you use PostgreSQL 18 as your database version, consider the following: PostgreSQL 18 isn't available with AlloyDB Omni.
- AlloyDB and AlloyDB Omni version policies AlloyDB for PostgreSQL , which runs in Google Cloud, and AlloyDB Omni , which you install and run on your own computing environment, have related but distinct versioning policies as described in this section.
- Every AlloyDB instance runs a database service that is compatible with a specific minor PostgreSQL version—for example, 16.3.
- Major version support timeline The following table shows the dates when AlloyDB support for compatible versions became generally available (GA): PostgreSQL compatible version AlloyDB version support GA date AlloyDB Omni version support GA Date PostgreSQL 18 March 18, 2026 Not applicable PostgreSQL 17 September 22, 2025 Not applicable PostgreSQL 16 October 23, 2024 April 8, 2025 PostgreSQL 15 January 19, 2024 October 11, 2023 PostgreSQL 14 December 12, 2022 Not applicable Major version compatibility release policy We aim to offer timely support for AlloyDB compatibility with new PostgreSQL major versions.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For advanced database users, DBeaver suggests a powerful SQL editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more Partner references Database driver AlloyDB for PostgreSQL Powering AlloyDB with DBeaver Partner Advantage page Direct link Hex Solution Hex Category Advanced Analytics Description Hex is a platform for collaborative analytics and data science.
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- Partner references AlloyDB for PostgreSQL Partner Advantage page Direct link Redis Solution Redis Cloud Category Data caching and proxy Description Redis is the home of the world's most popular in-memory database and commercial provider of Redis Enterprise, which delivers superior performance, unmatched reliability, and the best TCO.
- Partner references Connecting Dataiku DSS to AlloyDB Supported data sources Partner Advantage page Direct link DBeaver Solution DBeaver Team Edition Category Business intelligence and advanced analytics Description DBeaver is a universal database management tool for everyone who needs to work with data professionally.

