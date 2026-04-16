---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.260Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "PostgreSQL-to-AlloyDB for PostgreSQL migration support"
feature_slug: "postgresql-to-alloydb-for-postgresql-migration-support"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/postgresql-to-alloydb/migration-src-and-dest"
keywords:
  - "postgresql"
  - "to"
  - "alloydb"
  - "for"
  - "migration"
  - "database"
  - "added"
  - "migrating"
---

# PostgreSQL-to-AlloyDB for PostgreSQL migration support

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Cloud Database Migration Service added support for migrating PostgreSQL workloads to AlloyDB for PostgreSQL.

## Extended Definition

Cloud Database Migration Service added support for migrating PostgreSQL workloads to AlloyDB for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/postgresql-to-alloydb/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/postgresql-to-alloydb/migration-src-and-dest)

## Supporting Pages

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 337
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Failback migration describes the failback replication feature, where you can keep replicating data back to the original source database after migrating to AlloyDB for PostgreSQL.
- Home Documentation Databases Database Migration Service SQL Server to Cloud SQL for AlloyDB Guides Send feedback Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 335
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to AlloyDB for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- Home Documentation Databases Database Migration Service Oracle to AlloyDB for PostgreSQL Guides Send feedback Oracle to AlloyDB for PostgreSQL migration overview Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to AlloyDB for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 313
- Re-rank relevance: N/A

Evidence snippets:
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.

### "Supported source and destination databases \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/postgresql-to-alloydb/migration-src-and-dest](https://docs.cloud.google.com/database-migration/docs/postgresql-to-alloydb/migration-src-and-dest)
- Source ID: `site-api-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL PostgreSQL to AlloyDB Overview Database Migration Service supports continuous migrations from source databases to AlloyDB for PostgreSQL.
- Home Documentation Databases Database Migration Service PostgreSQL to AlloyDB Guides Send feedback Supported source and destination databases Stay organized with collections Save and categorize content based on your preferences.
- Supported destination databases AlloyDB for PostgreSQL 14, 15, 16, 17, 18 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

