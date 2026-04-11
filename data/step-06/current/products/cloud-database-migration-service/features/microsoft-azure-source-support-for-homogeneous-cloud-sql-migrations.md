---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.938Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Microsoft Azure source support for homogeneous Cloud SQL migrations"
feature_slug: "microsoft-azure-source-support-for-homogeneous-cloud-sql-migrations"
latest_feature_date: "2025-01-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/supported-databases"
keywords:
  - "microsoft"
  - "azure"
  - "source"
  - "for"
  - "homogeneous"
  - "sql"
  - "migrations"
  - "database"
---

# Microsoft Azure source support for homogeneous Cloud SQL migrations

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Database Migration Service now supports Microsoft Azure as a source for homogeneous MySQL and PostgreSQL migrations to Cloud SQL.

## Extended Definition

Database Migration Service now supports Microsoft Azure as a source for homogeneous MySQL and PostgreSQL migrations to Cloud SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/supported-databases](https://docs.cloud.google.com/database-migration/docs/supported-databases)

## Supporting Pages

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Database Migration Service offers support for multiple different SQL Server sources, including Amazon RDS, Microsoft Azure SQL Managed Instance, and self-managed SQL Server instances.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Database Migration Service offers support for multiple different SQL Server sources, including Amazon RDS, Microsoft Azure SQL Managed Instance, and self-managed SQL Server instances.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.

### "Supported source and destination databases \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/supported-databases](https://docs.cloud.google.com/database-migration/docs/supported-databases)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Homogeneous migrations supported source and destination databases Select your homogeneous migration scenario to view which source and destination databases the migration supports: MySQL to Cloud SQL for MySQL Supported source databases Amazon RDS 5.6, 5.7, 8.0, 8.4 Self-managed MySQL (on premises or on any cloud VM that you fully control) 5.5, 5.6, 5.7, 8.0, 8.4 Cloud SQL for MySQL 5.6, 5.7, 8.0, 8.4 Amazon Aurora 5.6, 5.7, 8.0, 8.4 Microsoft Azure Database for MySQL 5.7, 8.0, 8.4 For MySQL 8.0 sources, Database Migration Service also supports the following minor versions: 8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37, 8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
- SQL Server to AlloyDB for PostgreSQL Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web For more information, see Migrate from SQL Server to AlloyDB for PostgreSQL .
- Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web For more information, see Migrate from SQL Server to Cloud SQL for PostgreSQL .
- Heterogeneous migrations supported source and destination databases Select your heterogeneous migration scenario to view which source and destination databases the migration supports: Oracle to Cloud SQL for PostgreSQL Supported source and destination databases Database Migration Service supports the following Oracle databases as migration sources: Amazon RDS for Oracle Self-hosted deployments, including: Oracle Single Instance Database Deployment Oracle Exadata Oracle Active Data Guard Oracle Real Application Clusters (RAC) Full support also depends on your source Oracle version.

