---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.254Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "PostgreSQL 15 target support for AlloyDB migrations"
feature_slug: "postgresql-15-target-support-for-alloydb-migrations"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/supported-databases"
keywords:
  - "postgresql"
  - "15"
  - "target"
  - "for"
  - "alloydb"
  - "migrations"
  - "database"
  - "migration"
---

# PostgreSQL 15 target support for AlloyDB migrations

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Database Migration Service now supports selecting PostgreSQL version 15 when migrating to AlloyDB for PostgreSQL.

## Extended Definition

Database Migration Service now supports selecting PostgreSQL version 15 when migrating to AlloyDB for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/supported-databases](https://docs.cloud.google.com/database-migration/docs/supported-databases)

## Supporting Pages

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 300
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 AlloyDB for PostgreSQL 12, 13, 14, 15, 16.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to AlloyDB for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to AlloyDB for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 298
- Re-rank relevance: N/A

Evidence snippets:
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Home Documentation Databases Database Migration Service SQL Server to Cloud SQL for AlloyDB Guides Send feedback Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 284
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.

### "Supported source and destination databases \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/supported-databases](https://docs.cloud.google.com/database-migration/docs/supported-databases)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 AlloyDB for PostgreSQL 12, 13, 14, 15, 16.
- SQL Server to AlloyDB for PostgreSQL Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web For more information, see Migrate from SQL Server to AlloyDB for PostgreSQL .
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
- Heterogeneous migrations supported source and destination databases Select your heterogeneous migration scenario to view which source and destination databases the migration supports: Oracle to Cloud SQL for PostgreSQL Supported source and destination databases Database Migration Service supports the following Oracle databases as migration sources: Amazon RDS for Oracle Self-hosted deployments, including: Oracle Single Instance Database Deployment Oracle Exadata Oracle Active Data Guard Oracle Real Application Clusters (RAC) Full support also depends on your source Oracle version.

