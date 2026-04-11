---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.402Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_cron extension"
feature_slug: "pg-cron-extension"
latest_feature_date: "2021-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
keywords:
  - "pg"
  - "cron"
  - "extension"
  - "the"
  - "provides"
  - "based"
  - "job"
  - "scheduling"
---

# pg_cron extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The pg_cron extension provides cron-based job scheduling from within the database.

## Extended Definition

The pg_cron extension provides cron-based job scheduling from within the database.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- A cron-based job scheduler, this extension enables cron syntax to schedule commands from a database. pg hint plan.
- Extension and plugin versions pg cron is upgraded from 1.4.1 to 1.5. pg partman is upgraded from 4.7.0 to 4.7.3. postgresql-hll is upgraded from 2.16 to 2.17. pg repack is upgraded from 1.4.7 to 1.4.8. wal2json is upgraded from 2.4 to 2.5. pg hint plan is upgraded, as follows: from 1.3.7 to 1.3.8 (for PostgreSQL versions 11-13) from 1.4.0 to 1.4.1 (for PostgreSQL version 14) from 1.4.0 to 1.5.0 (for PostgreSQL version 15) If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window.
- October 27, 2025 Cloud SQL for PostgreSQL Feature The rollout of the following extension versions and plugin versions is underway: Extensions and plugins pg squeeze is upgraded from 1.8 to 1.9 for PostgreSQL version 13 and later. pg cron is upgraded from 1.6.4 to 1.6.7 for PostgreSQL version 10 and later. postgis is upgraded from 3.5.2 to 3.6.0 for PostgreSQL version 13 and later. rdkit is upgraded from 4.6.1 to 4.7.0.
- Feature Cloud SQL for PostgreSQL now supports the pg similarity extension, which provides support for similarity queries in PostgreSQL.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- A cron-based job scheduler, this extension enables cron syntax to schedule commands from a database. pg hint plan.
- Extension and plugin versions pg cron is upgraded from 1.4.1 to 1.5. pg partman is upgraded from 4.7.0 to 4.7.3. postgresql-hll is upgraded from 2.16 to 2.17. pg repack is upgraded from 1.4.7 to 1.4.8. wal2json is upgraded from 2.4 to 2.5. pg hint plan is upgraded, as follows: from 1.3.7 to 1.3.8 (for PostgreSQL versions 11-13) from 1.4.0 to 1.4.1 (for PostgreSQL version 14) from 1.4.0 to 1.5.0 (for PostgreSQL version 15) If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 05, 2025 Feature The rollout of the following extension versions, plugin versions, and extension support is underway: Extensions and plugins plpgsql check is upgraded from 2.8.1 to 2.8.3 for PostgreSQL versions 14 and later. pg wait sampling is upgraded from 1.1.6 to 1.1.9 for PostgreSQL versions 13 and later. tds fdw is upgraded from 2.0.4 to 2.0.5.
- October 27, 2025 Feature The rollout of the following extension versions and plugin versions is underway: Extensions and plugins pg squeeze is upgraded from 1.8 to 1.9 for PostgreSQL version 13 and later. pg cron is upgraded from 1.6.4 to 1.6.7 for PostgreSQL version 10 and later. postgis is upgraded from 3.5.2 to 3.6.0 for PostgreSQL version 13 and later. rdkit is upgraded from 4.6.1 to 4.7.0.

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- This format is not compatible with pg restore , and must be imported using the Google Cloud console import command or psql client. --no-acl This flag is required if your dump would otherwise contain statements to grant or revoke membership in a SUPERUSER role. --clean This optional flag enables you to include the DROP <object> SQL statement that's required to drop (clean) database objects before you import them. --if-exists This optional flag enables you to include the IF EXISTS SQL statement with each DROP statement that's produced by the clean flag.
- Export data using the custom format from Cloud SQL for PostgreSQL To use the custom format, from a command line, run pg dump : pg dump \ -U USERNAME \ --format = custom \ --no-owner \ --no-acl \ DATABASE NAME > DATABASE NAME .dmp Export data from multiple files in parallel from Cloud SQL for PostgreSQL You can only use the directory output format to export data from multiple files in parallel .
- Export data from an on-premises PostgreSQL server using pg dump To export a database that is not managed by Cloud SQL, for later import into Cloud SQL, use the pg dump utility with the following flags: --no-owner Ownership change commands must not be included in the dump file. --format The custom and directory formats are allowed if the dump file is intended for use with pg restore .
- To export all PostgreSQL databases, run the following command: pg dumpall \ -h HOST NAME -l DATABASE NAME --exclude-database = cloudsqladmin \ --exclude-database = template > pg dumpall.sql To view role passwords when dumping roles with pg dumpall , set the cloudsql.pg authid select role flag to a PostgreSQL role name.

