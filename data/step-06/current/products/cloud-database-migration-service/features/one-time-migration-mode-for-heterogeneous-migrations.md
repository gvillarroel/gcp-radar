---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.897Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "One-time migration mode for heterogeneous migrations"
feature_slug: "one-time-migration-mode-for-heterogeneous-migrations"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations"
keywords:
  - "one"
  - "time"
  - "migration"
  - "mode"
  - "for"
  - "heterogeneous"
  - "migrations"
  - "database"
---

# One-time migration mode for heterogeneous migrations

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Database Migration Service added one-time migration support across all heterogeneous migration scenarios.

## Extended Definition

Database Migration Service added one-time migration support across all heterogeneous migration scenarios.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations)

## Supporting Pages

### "Database Migration Service for heterogeneous SQL Server to AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Migration data flow For heterogeneous SQL Server migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.
- For one-time migrations, we recommend that you disable writes on the source database during the full dump phase.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to AlloyDB for PostgreSQL migrations: Supported sources and destinations lists all SQL Server versions supported by Database Migration Service.

### "Database Migration Service for heterogeneous SQL Server to Cloud SQL for\

- URL: [https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/sqlserver-to-csql-pgsql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Continuous data movement during Database Migration Service for SQL Server heterogeneous migrations. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from SQL Server syntax to PostgreSQL syntax.
- Migration data flow For heterogeneous SQL Server migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.
- For one-time migrations, we recommend that you disable writes on the source database during the full dump phase.
- This page provides an overview of the key Database Migration Service features for heterogeneous SQL Server to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all SQL Server versions supported by Database Migration Service.

### "Heterogeneous migrations \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported scenarios Database Migration Service supports the following heterogeneous migrations: Migrate from Oracle to Cloud SQL for PostgreSQL Migrate from Oracle to AlloyDB for PostgreSQL Migrate from SQL Server to Cloud SQL for PostgreSQL Migrate from SQL Server to AlloyDB for PostgreSQL Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Heterogeneous migrations are more complex than homogeneous migrations due to differences in schema structure, data types, and metadata components between the source database and the destination database.
- Home Documentation Databases Database Migration Service Guides Send feedback Heterogeneous migrations Stay organized with collections Save and categorize content based on your preferences.
- Database Migration Service provides tools, such as Gemini-assisted schema and code conversion, that help you convert the schema and objects from your source database into a format that is compatible with your destination database.

