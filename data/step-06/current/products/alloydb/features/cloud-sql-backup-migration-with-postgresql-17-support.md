---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.474Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cloud SQL backup migration with PostgreSQL 17 support"
feature_slug: "cloud-sql-backup-migration-with-postgresql-17-support"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "sql"
  - "backup"
  - "migration"
  - "postgresql"
  - "17"
  - "lets"
  - "you"
  - "migrate"
---

# Cloud SQL backup migration with PostgreSQL 17 support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL backup migration with PostgreSQL 17 support lets you migrate from Cloud SQL for PostgreSQL to AlloyDB using backups, with operations supported up to 15 TB.

## Extended Definition

Cloud SQL backup migration with PostgreSQL 17 support lets you migrate from Cloud SQL for PostgreSQL to AlloyDB using backups, with operations supported up to 15 TB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Migrate data from a vector database to AlloyDB Stay organized with collections Save and categorize content based on your preferences.
- A successful migration prints logs similar to the following without any errors: Migration completed, inserted all the batches of data to AlloyDB Open AlloyDB Studio to view your migrated data.
- This tutorial describes how to migrate data from a third-party vector database to AlloyDB for PostgreSQL using a LangChain VectorStore.
- In the Enable APIs step, click Enable to enable the following: AlloyDB API Compute Engine API Service Networking API Required roles To get the permissions that you need to complete the tasks in this tutorial, have the following Identity and Access Management (IAM) roles which allow for table creation and data insertion: Owner ( roles/owner ) or Editor ( roles/editor ) If the user is not an owner or editor, the following IAM roles and PostgreSQL privileges are required: AlloyDB Instance Client ( roles/alloydb.client ) Cloud AlloyDB Admin ( roles/alloydb.admin ) Compute Network User ( roles/compute.networkUser ) If you want to authenticate to your database using IAM authentication instead of using the built-in authentication in this tutorial, use the notebook that shows how to use AlloyDB for PostgreSQL to store vector embeddings with the AlloyDBVectorStore class .

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Partner references AlloyDB integration with Hightouch Sync data to AlloyDB with Hightouch Sync data from PostgreSQL to AlloyDB Partner Advantage page Direct link Integrate.io Integrate.io ETL Solution Integrate.io ETL Category Data integration and migration Description Integrate.io ETL platform lets organizations integrate, process, and prepare data for analytics on the cloud.
- These solutions are organized by the following categories: Application and Vertical ISVs Business intelligence and advanced analytics Data governance, modeling, and security Data integration, optimization, and migration Data quality and observability Application and Vertical ISVs Commvault Solution Commvault Cloud Platform Category Backup and Restore Description Commvault Platform - Essential provides enterprise-grade data protection and cyber resilience.
- For advanced database users, DBeaver suggests a powerful SQL editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more Partner references Database driver AlloyDB for PostgreSQL Powering AlloyDB with DBeaver Partner Advantage page Direct link Hex Solution Hex Category Advanced Analytics Description Hex is a platform for collaborative analytics and data science.
- Partner references CData Cloud Connectivity for AlloyDB Forging Solutions with CData Software and Google AlloyDB Partner Advantage page Direct link CData ODBC Driver Solution CData ODBC Driver for AlloyDB Category Data integration and migration Description CData AlloyDB ODBC Driver is a powerful tool that lets you connect with live data from AlloyDB, directly from any applications that support ODBC connectivity.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Data backup and disaster recovery AlloyDB features a continuous backup and recovery system that lets you create a new cluster based on any point in time within an adjustable retention period.
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- Quickstart: Create and connect to a database Perform a vector search Migration overview Connection overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can use the following tools to connect to and manage your databases: AlloyDB Studio: a web-based tool built directly into the Google Google Cloud console that lets you explore and manage your data using an interactive SQL interface.

