---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:22.235Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Enhanced concurrency configuration for heterogeneous SQL Server migration jobs"
feature_slug: "enhanced-concurrency-configuration-for-heterogeneous-sql-server-migration-jobs"
latest_feature_date: "2025-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job"
  - "https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs"
keywords:
  - "enhanced"
  - "concurrency"
  - "configuration"
  - "for"
  - "heterogeneous"
  - "sql"
  - "server"
  - "migration"
---

# Enhanced concurrency configuration for heterogeneous SQL Server migration jobs

Product: Cloud Database Migration Service
Coverage: MEDIUM

## Step 02 Summary

Heterogeneous SQL Server migration jobs now support additional concurrency controls, including full dump configuration and maximum concurrent connection settings.

## Extended Definition

Heterogeneous SQL Server migration jobs now support additional concurrency controls, including full dump configuration and maximum concurrent connection settings.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)

## Supporting Pages

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 294
- Re-rank relevance: N/A

Evidence snippets:
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Home Documentation Databases Database Migration Service SQL Server to Cloud SQL for PostgreSQL Guides Send feedback Database Migration Service for heterogeneous SQL Server to Cloud SQL for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.
- Migration data flow For heterogeneous SQL Server migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Home Documentation Databases Database Migration Service SQL Server to Cloud SQL for AlloyDB Guides Send feedback Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.
- Migration data flow For heterogeneous SQL Server migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/get_migration_job)
- Source ID: `site-api-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- Configuration for PostgreSQL homogeneous migration. sqlserverHomogeneousMigrationJobConfig object ( SqlServerHomogeneousMigrationJobConfig ) Optional.
- Configuration for distributed availability group (DAG) for the SQL Server homogeneous migration.
- Configuration for SQL Server homogeneous migration. dumpType enum ( DumpType ) Optional.

### "MCP Tools Reference: datamigration \_|\_ Database Migration Service \_|\_\

- URL: [https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs](https://docs.cloud.google.com/database-migration/docs/reference/mcp/tools_list/list_migration_jobs)
- Source ID: `site-api-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Configuration for migration. config can be only one of the following: oracleToPostgresConfig object ( OracleToPostgresConfig ) Configuration for heterogeneous Oracle to Cloud SQL for PostgreSQL and Oracle to AlloyDB for PostgreSQL migrations. sqlserverToPostgresConfig object ( SqlServerToPostgresConfig ) Configuration for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations. postgresToSqlserverConfig object ( PostgresToSqlServerConfig ) Configuration for heterogeneous failback migrations from PostgreSQL to SQL Server .
- Configuration for PostgreSQL homogeneous migration. sqlserverHomogeneousMigrationJobConfig object ( SqlServerHomogeneousMigrationJobConfig ) Optional.
- Configuration for distributed availability group (DAG) for the SQL Server homogeneous migration.
- Configuration for SQL Server homogeneous migration. dumpType enum ( DumpType ) Optional.

