---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.954Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Database Migration Service homogeneous SQL Server migration differential backup support"
feature_slug: "database-migration-service-homogeneous-sql-server-migration-differential-backup-support"
latest_feature_date: "2024-08-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
keywords:
  - "database"
  - "migration"
  - "homogeneous"
  - "sql"
  - "server"
  - "differential"
  - "backup"
  - "for"
---

# Database Migration Service homogeneous SQL Server migration differential backup support

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Database Migration Service for homogeneous migrations to Cloud SQL for SQL Server now supports differential backup files.

## Extended Definition

Database Migration Service for homogeneous migrations to Cloud SQL for SQL Server now supports differential backup files.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)

## Supporting Pages

### Database Migration Service for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For details on how Database Migration Service uses different types of backup files in homogeneous SQL Server migrations, see Supported backup file types .
- The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS Cloud SQL for SQL Server versions 2022, 2019, 2017 Self-managed SQL Server (on premises or on any cloud VM that you fully control) Continuous migrations data flow For homogeneous SQL Server migrations to Cloud SQL, Database Migration Service supports the continuous migration flow.
- Home Documentation Databases Database Migration Service Homogeneous migration to SQL Server Send feedback Database Migration Service for SQL Server Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the key Database Migration Service features for homogeneous SQL Server migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Home Documentation Databases Database Migration Service SQL Server to Cloud SQL for PostgreSQL Guides Send feedback Database Migration Service for heterogeneous SQL Server to Cloud SQL for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Home Documentation Databases Database Migration Service SQL Server to Cloud SQL for AlloyDB Guides Send feedback Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.

