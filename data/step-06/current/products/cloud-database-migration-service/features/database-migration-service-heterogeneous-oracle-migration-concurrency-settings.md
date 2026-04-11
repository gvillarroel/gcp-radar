---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.948Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Database Migration Service heterogeneous Oracle migration concurrency settings"
feature_slug: "database-migration-service-heterogeneous-oracle-migration-concurrency-settings"
latest_feature_date: "2024-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/release-notes"
keywords:
  - "database"
  - "migration"
  - "heterogeneous"
  - "oracle"
  - "concurrency"
  - "settings"
  - "now"
  - "provides"
---

# Database Migration Service heterogeneous Oracle migration concurrency settings

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Database Migration Service now provides additional concurrency settings for heterogeneous Oracle migration jobs, including full dump and maximum concurrent connection options.

## Extended Definition

Database Migration Service now provides additional concurrency settings for heterogeneous Oracle migration jobs, including full dump and maximum concurrent connection options.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)

## Supporting Pages

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to AlloyDB for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to AlloyDB for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 AlloyDB for PostgreSQL 12, 13, 14, 15, 16.
- Migration data flow For heterogeneous Oracle migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- This page provides an overview of the key Database Migration Service features for heterogeneous Oracle to Cloud SQL for PostgreSQL migrations: Supported source and destination lists all Oracle versions supported by Database Migration Service.
- Continuous data movement during a Database Migration Service heterogeneous migration from Oracle to Cloud SQL for PostgreSQL. (click to enlarge) At a high level, your data moves through the migration phases as follows: One-time migrations You use Database Migration Service conversion workspace to convert your schemas, tables, and other objects from Oracle syntax to PostgreSQL syntax.
- The following table lists all supported versions for heterogeneous Oracle migrations: Source databases Destination databases Oracle 11g, Version 11.2.0.4 Cloud SQL for PostgreSQL 12, 13, 14, 15, 16, 17.
- Migration data flow For heterogeneous Oracle migrations to PostgreSQL, Database Migration Service supports continuous and one-time migration flows.

### Database Migration Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- October 21, 2024 Feature You can now use additional concurrency settings for heterogeneous Oracle migration jobs with Database Migration Service.
- May 08, 2025 Feature You can now use additional concurrency settings for heterogeneous SQL Server migration jobs with Database Migration Service.
- For more information, see the following pages: Source connectivity methods for Oracle to Cloud SQL for PostgreSQL Source connectivity methods for Oracle to AlloyDB for PostgreSQL Source connectivity methods for SQL Server to Cloud SQL for PostgreSQL Source connectivity methods for SQL Server to AlloyDB for PostgreSQL September 15, 2025 Announcement Gemini-powered conversion features for heterogeneous migrations in Database Migration Service are now generally available ( GA ).
- For more information, see the page relevant for your migration scenario: Failback migration guide for SQL Server to Cloud SQL for PostgreSQL Failback migration guide for SQL Server to AlloyDB for PostgreSQL February 27, 2026 Feature Database Migration Service for heterogeneous migrations now supports RENAME- , MOVE- , CASE HANDLING and GENERATE MISSING PK directives to provide improved control over converting Oracle and SQL Server objects to PostgreSQL.

