---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.957Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Database Migration Service Percona XtraBackup physical backup migrations for MySQL"
feature_slug: "database-migration-service-percona-xtrabackup-physical-backup-migrations-for-mysql"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/release-notes"
  - "https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations"
  - "https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations"
keywords:
  - "database"
  - "migration"
  - "percona"
  - "xtrabackup"
  - "physical"
  - "backup"
  - "migrations"
  - "for"
---

# Database Migration Service Percona XtraBackup physical backup migrations for MySQL

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Database Migration Service now generally offers support for homogeneous MySQL migrations to Cloud SQL for MySQL using Percona XtraBackup physical backup files.

## Extended Definition

Database Migration Service now generally offers support for homogeneous MySQL migrations to Cloud SQL for MySQL using Percona XtraBackup physical backup files.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)
- [https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations)
- [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations)

## Supporting Pages

### Database Migration Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see: Conversion workspaces for Oracle to AlloyDB for PostgreSQL Conversion workspaces for Oracle to CloudSQL for PostgreSQL April 05, 2024 Feature Database Migration Service now supports physical backup files created by using the Percona XtraBackup utility for homogeneous MySQL to Cloud SQL for MySQL migrations.
- July 29, 2024 Feature Database Migration Service support for homogeneous MySQL to Cloud SQL for MySQL migrations with physical backup files created by using the Percona XtraBackup utility is now Generally Available (GA).
- For more information, see Migrate your databases by using a Percona XtraBackup physical file .
- For more information, see Migrate your databases by using a Percona XtraBackup physical file .

### "Heterogeneous migrations \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/heterogeneous-migrations)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Supported scenarios Database Migration Service supports the following heterogeneous migrations: Migrate from Oracle to Cloud SQL for PostgreSQL Migrate from Oracle to AlloyDB for PostgreSQL Migrate from SQL Server to Cloud SQL for PostgreSQL Migrate from SQL Server to AlloyDB for PostgreSQL Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Database Migration Service provides tools, such as Gemini-assisted schema and code conversion, that help you convert the schema and objects from your source database into a format that is compatible with your destination database.
- Heterogeneous migrations are more complex than homogeneous migrations due to differences in schema structure, data types, and metadata components between the source database and the destination database.
- Home Documentation Databases Database Migration Service Guides Send feedback Heterogeneous migrations Stay organized with collections Save and categorize content based on your preferences.

### "Homogeneous migrations \_|\_ Database Migration Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations](https://docs.cloud.google.com/database-migration/docs/homogeneous-migrations)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Supported scenarios Database Migration Service supports the following homogeneous migrations: Migrate to Cloud SQL for MySQL Migrate to Cloud SQL for PostgreSQL Migrate to AlloyDB for PostgreSQL Migrate to Cloud SQL for SQL Server Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In some migrations, such as PostgreSQL to AlloyDB and SQL Server to Cloud SQL Server, you can selectively migrate a subset of databases from your source instance to either an existing or new destination instance.
- Home Documentation Databases Database Migration Service Guides Send feedback Homogeneous migrations Stay organized with collections Save and categorize content based on your preferences.
- Homogeneous migrations take place when you migrate data from a source database to a destination database that use the same database technology (have the same database engine).

