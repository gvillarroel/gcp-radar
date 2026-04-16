---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.325Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle multi-tenant architecture support"
feature_slug: "oracle-multi-tenant-architecture-support"
latest_feature_date: "2023-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle"
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database"
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
keywords:
  - "oracle"
  - "multi"
  - "tenant"
  - "architecture"
  - "datastream"
  - "supports"
  - "cdb"
  - "and"
---

# Oracle multi-tenant architecture support

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports Oracle multi-tenant CDB and PDB architecture.

## Extended Definition

Datastream supports Oracle multi-tenant CDB and PDB architecture.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database](https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)

## Supporting Pages

### "Configure a pluggable Oracle database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Datastream supports Oracle multi-tenant architecture, where a single container database (CDB) contains one or more pluggable databases (PDBs).
- To connect to a container in a multi-tenant architecture setup, or to switch between container sessions, use the following command: ALTER SESSION SET CONTAINER = CONTAINER NAME ; Replace CONTAINER NAME with the name of your container, for example your pluggable database or the CDB$ROOT container.
- Define a data retention policy for your database by running the following Oracle Recovery Manager (RMAN) command from the CDB$ROOT container: CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; The command defines the data retention policy for all pluggable databases in your container database.
- Home Documentation Data analytics Datastream Guides Send feedback Configure a pluggable Oracle database for CDC Stay organized with collections Save and categorize content based on your preferences.

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Yes, Datastream supports Oracle multi-tenant architecture (CDB/PDB), however, you can only replicate a single pluggable database in a stream.
- Does Datastream support Oracle multi-tenant architecture, specifically Container Databases (CDBs) and Pluggable Databases (PDBs)?
- Datastream supports streaming data from Oracle, MySQL, PostgreSQL, AlloyDB for PostgreSQL, SQL Server, Salesforce, and MongoDB sources, both cloud-hosted and self-managed.
- This FAQ is associated with: General questions about Datastream and change data capture (CDC) General source behavior and limitations MySQL source behavior and limitations Oracle source behavior and limitations PostgreSQL source behavior and limitations (including AlloyDB for PostgreSQL) SQL Server source behavior and limitations Salesforce source behavior and limitations BigQuery destination behavior Cloud Storage destination behavior Common use cases for using Datastream How Datastream integrates with Google Cloud data services Security and connectivity Monitoring Datastream Pricing Additional information about Datastream General questions about Datastream and change data capture (CDC) Question Answer What's Datastream?

### Configure a source Oracle database \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database](https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Datastream Guides Send feedback Configure a source Oracle database Stay organized with collections Save and categorize content based on your preferences.
- However, this method supports most data types and Oracle database features.
- This method is multithreaded and supports low-latency CDC.
- Supported databases Datastream works with the following types of Oracle databases: Amazon RDS for Oracle Self-managed Oracle database Self-hosted Oracle pluggable database What's next Learn how to configure an Amazon RDS for Oracle database to work with Datastream.

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Oracle user permissions Datastream verifies that the user which it uses to connect to the source database has all of the necessary permissions to retrieve schemas, tables, and data from the database so that Datastream can stream this information into the destination.
- Configure an Oracle source database In the Select objects to include section, use the Objects to include drop-down menu to specify the tables and schemas in the source database that Datastream can transfer into the destination.
- This is because change streams are divided into partitions, and limiting concurrency prevents Datastream from reading multiple partitions simultaneously.
- LogMiner supports most options available for Oracle, such as encryption and compression options.

