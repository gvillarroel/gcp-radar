---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.427Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 13"
feature_slug: "postgresql-13"
latest_feature_date: "2020-11-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "postgresql"
  - "13"
  - "sql"
  - "for"
  - "supports"
  - "major"
  - "version"
---

# PostgreSQL 13

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports PostgreSQL major version 13.

## Extended Definition

Cloud SQL for PostgreSQL supports PostgreSQL major version 13.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- April 11, 2022 Feature Cloud SQL for PostgreSQL supports in-place major version upgrades in Preview.
- September 30, 2022 Feature Cloud SQL for PostgreSQL supports in-place major version upgrades in GA.
- Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available: PostgreSQL version Maintenance version PostgreSQL 9.6 POSTGRES 9 6 24.R20220710.01 02 PostgreSQL 10 POSTGRES 10 21.R20220710.01 02 PostgreSQL 11 POSTGRES 11 16.R20220710.01 02 PostgreSQL 12 POSTGRES 12 11.R20220710.01 02 PostgreSQL 13 POSTGRES 13 7.R20220710.01 02 After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).
- Extension and plugin versions pg cron is upgraded from 1.4.1 to 1.5. pg partman is upgraded from 4.7.0 to 4.7.3. postgresql-hll is upgraded from 2.16 to 2.17. pg repack is upgraded from 1.4.7 to 1.4.8. wal2json is upgraded from 2.4 to 2.5. pg hint plan is upgraded, as follows: from 1.3.7 to 1.3.8 (for PostgreSQL versions 11-13) from 1.4.0 to 1.4.1 (for PostgreSQL version 14) from 1.4.0 to 1.5.0 (for PostgreSQL version 15) If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window.

### SqlDatabaseVersion \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- POSTGRES 13 The database version is PostgreSQL 13.
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback SqlDatabaseVersion Stay organized with collections Save and categorize content based on your preferences.
- POSTGRES 9 6 The database version is PostgreSQL 9.6.
- POSTGRES 10 The database version is PostgreSQL 10.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- February 20, 2024 Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise Plus edition now supports versions 12 and 13 of PostgreSQL.
- April 11, 2022 Cloud SQL for PostgreSQL Feature Cloud SQL for PostgreSQL supports in-place major version upgrades in Preview.
- September 30, 2022 Cloud SQL for PostgreSQL Feature Cloud SQL for PostgreSQL supports in-place major version upgrades in GA.
- December 05, 2024 Cloud SQL for MySQL Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) Cloud SQL for SQL Server Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 04, 2024 Cloud SQL for MySQL Feature Cloud SQL for MySQL now supports minor version 8.0.40.

