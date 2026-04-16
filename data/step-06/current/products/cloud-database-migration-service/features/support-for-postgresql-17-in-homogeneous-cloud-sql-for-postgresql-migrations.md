---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.239Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Support for PostgreSQL 17 in homogeneous Cloud SQL for PostgreSQL migrations"
feature_slug: "support-for-postgresql-17-in-homogeneous-cloud-sql-for-postgresql-migrations"
latest_feature_date: "2024-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/supported-databases"
keywords:
  - "for"
  - "postgresql"
  - "17"
  - "in"
  - "homogeneous"
  - "sql"
  - "migrations"
  - "database"
---

# Support for PostgreSQL 17 in homogeneous Cloud SQL for PostgreSQL migrations

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Database Migration Service now supports PostgreSQL version 17 for homogeneous migrations to Cloud SQL for PostgreSQL.

## Extended Definition

Database Migration Service now supports PostgreSQL version 17 for homogeneous migrations to Cloud SQL for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/supported-databases](https://docs.cloud.google.com/database-migration/docs/supported-databases)

## Supporting Pages

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 298
- Re-rank relevance: N/A

Evidence snippets:
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
- Migration data flow For heterogeneous SQL Server migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 290
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- Migration data flow For heterogeneous Oracle migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 284
- Re-rank relevance: N/A

Evidence snippets:
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- Migration data flow For heterogeneous SQL Server migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.
- Supported source and destination databases The following table lists all supported SQL Server source and destination databases: Source databases Destination databases Amazon RDS for SQL Server AlloyDB for PostgreSQL 14, 15, 16 Microsoft Azure SQL Managed Instance Microsoft Azure SQL Database tier S3 and above Cloud SQL for SQL Server Self-managed SQL Server versions: Enterprise 2008 and later, Standard 2016 SP1 and later, Developer 2008 and later (on premises or on any cloud VM that you fully control) Unsupported source databases Database Migration Service doesn't support migrating from the following SQL Server versions: SQL Server Standard edition versions from 2008 to 2014 SQL Server Express SQL Server Web Code and schema conversion Database Migration Service conversion workspaces provide an interactive editor experience where you can convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.

### "Supported source and destination databases \_|\_ Database Migration Service\

- URL: [https://docs.cloud.google.com/database-migration/docs/supported-databases](https://docs.cloud.google.com/database-migration/docs/supported-databases)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
- Homogeneous migrations supported source and destination databases Select your homogeneous migration scenario to view which source and destination databases the migration supports: MySQL to Cloud SQL for MySQL Supported source databases Amazon RDS 5.6, 5.7, 8.0, 8.4 Self-managed MySQL (on premises or on any cloud VM that you fully control) 5.5, 5.6, 5.7, 8.0, 8.4 Cloud SQL for MySQL 5.6, 5.7, 8.0, 8.4 Amazon Aurora 5.6, 5.7, 8.0, 8.4 Microsoft Azure Database for MySQL 5.7, 8.0, 8.4 For MySQL 8.0 sources, Database Migration Service also supports the following minor versions: 8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37, 8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
- Heterogeneous migrations supported source and destination databases Select your heterogeneous migration scenario to view which source and destination databases the migration supports: Oracle to Cloud SQL for PostgreSQL Supported source and destination databases Database Migration Service supports the following Oracle databases as migration sources: Amazon RDS for Oracle Self-hosted deployments, including: Oracle Single Instance Database Deployment Oracle Exadata Oracle Active Data Guard Oracle Real Application Clusters (RAC) Full support also depends on your source Oracle version.
- PostgreSQL to AlloyDB for PostgreSQL Supported source databases Amazon RDS 9.6.10+, 10.5+, 11.1+, 12, 13, 14, 15, 16, 17 Amazon Aurora 10.11+, 11.6+, 12.4+, 13.3+, 14, 15, 16, 17 Self-managed PostgreSQL (on premises or on any cloud VM that you fully control) 9.4, 9.5, 9.6, 10, 11, 12, 13, 14, 15, 16, 17 Cloud SQL 9.6, 10, 11, 12, 13, 14, 15, 16, 17 Supported destination databases AlloyDB for PostgreSQL 14, 15, 16, 17, 18 For more information, see Migrate to AlloyDB for PostgreSQL .

