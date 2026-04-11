---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:10:29.994Z"
product_name: "Cloud Database Migration Service"
product_slug: "cloud-database-migration-service"
feature_name: "Migration of PostgreSQL tables without primary keys"
feature_slug: "migration-of-postgresql-tables-without-primary-keys"
latest_feature_date: "2022-06-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview"
  - "https://docs.cloud.google.com/database-migration/docs/release-notes"
  - "https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview"
keywords:
  - "migration"
  - "of"
  - "postgresql"
  - "tables"
  - "without"
  - "primary"
  - "keys"
  - "database"
---

# Migration of PostgreSQL tables without primary keys

Product: Cloud Database Migration Service
Coverage: LOW

## Step 02 Summary

Cloud Database Migration Service introduced support for initial snapshot and INSERT CDC migration of PostgreSQL tables that lack primary keys.

## Extended Definition

Cloud Database Migration Service introduced support for initial snapshot and INSERT CDC migration of PostgreSQL tables that lack primary keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)
- [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)

## Supporting Pages

### "Oracle to Cloud SQL for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-postgresql/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.

### Database Migration Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/database-migration/docs/release-notes](https://docs.cloud.google.com/database-migration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- June 24, 2022 Feature Database Migration Service now supports the migration of tables without primary keys in PostgreSQL.
- For more information, see: Convert Oracle code and schema with Gemini assistance for Oracle to AlloyDB for PostgreSQL Convert Oracle code and schema with Gemini assistance for Oracle to CloudSQL for PostgreSQL July 08, 2024 Change Database Migration Service for heterogeneous Oracle migrations can now migrate tables without primary or unique constraints that have more than 500 million rows.
- For tables that don't have primary keys, Database Migration Service supports the migration of the initial snapshot and INSERT statements during the change data capture (CDC) phase .
- December 16, 2021 Feature Database Migration Service now supports creating Cloud SQL for MySQL , Cloud SQL for PostgreSQL , and Cloud SQL for SQL Server instances with customer-managed encryption keys (CMEK) enabled.

### "Oracle to AlloyDB for PostgreSQL migration overview \_|\_ Database Migration\

- URL: [https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview](https://docs.cloud.google.com/database-migration/docs/oracle-to-alloydb/scenario-overview)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- There are two ways in which you can complete full dump: Automatic: Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- During this phase, Database Migration Service connects to your source instance, reads the contents of the tables you selected for migration, and then loads the data to the AlloyDB for PostgreSQL destination instance.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.
- The goal of this stage is to prepare your destination databases so that Database Migration Service can later replicate the data from source tables to their correct equivalents in AlloyDB for PostgreSQL.

