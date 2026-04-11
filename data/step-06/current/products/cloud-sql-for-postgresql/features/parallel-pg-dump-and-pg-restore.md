---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.341Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Parallel pg_dump and pg_restore"
feature_slug: "parallel-pg-dump-and-pg-restore"
latest_feature_date: "2024-01-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "parallel"
  - "pg"
  - "dump"
  - "and"
  - "restore"
  - "let"
  - "you"
  - "export"
---

# Parallel pg_dump and pg_restore

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Parallel pg_dump and pg_restore let you export and import data across multiple files in parallel.

## Extended Definition

Parallel pg_dump and pg_restore let you export and import data across multiple files in parallel.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export data using the custom format from Cloud SQL for PostgreSQL To use the custom format, from a command line, run pg dump : pg dump \ -U USERNAME \ --format = custom \ --no-owner \ --no-acl \ DATABASE NAME > DATABASE NAME .dmp Export data from multiple files in parallel from Cloud SQL for PostgreSQL You can only use the directory output format to export data from multiple files in parallel .
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Export and import using pg dump, pg dumpall, and pg restore Stay organized with collections Save and categorize content based on your preferences.
- This format is not compatible with pg restore , and must be imported using the Google Cloud console import command or psql client. --no-acl This flag is required if your dump would otherwise contain statements to grant or revoke membership in a SUPERUSER role. --clean This optional flag enables you to include the DROP <object> SQL statement that's required to drop (clean) database objects before you import them. --if-exists This optional flag enables you to include the IF EXISTS SQL statement with each DROP statement that's produced by the clean flag.
- Export data from an on-premises PostgreSQL server using pg dump To export a database that is not managed by Cloud SQL, for later import into Cloud SQL, use the pg dump utility with the following flags: --no-owner Ownership change commands must not be included in the dump file. --format The custom and directory formats are allowed if the dump file is intended for use with pg restore .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for PostgreSQL Feature You can now use the pg dump and pg restore utilities to export and import data for multiple files in parallel.
- January 30, 2024 Cloud SQL for MySQL Feature You can now use the MySQL Shell dumpInstance and loadDump utilities to export and import data for multiple files in parallel.
- You can use this to track the last time that a row in a database table is modified. pg background (version 1.2): lets you run arbitrary commands in a background worker. pg squeeze (version 1.5): removes unused space from a table and lets you use an index to sort records or rows (tuples) of the table. tcn (version 1.0): provides a trigger function that notifies listeners of changes to the content of database tables.
- Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available: PostgreSQL version Maintenance version PostgreSQL 9.6 POSTGRES 9 6 24.R20220710.01 02 PostgreSQL 10 POSTGRES 10 21.R20220710.01 02 PostgreSQL 11 POSTGRES 11 16.R20220710.01 02 PostgreSQL 12 POSTGRES 12 11.R20220710.01 02 PostgreSQL 13 POSTGRES 13 7.R20220710.01 02 After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- January 30, 2024 Feature You can now use the pg dump and pg restore utilities to export and import data for multiple files in parallel.
- You can use this to track the last time that a row in a database table is modified. pg background (version 1.2): lets you run arbitrary commands in a background worker. pg squeeze (version 1.5): removes unused space from a table and lets you use an index to sort records or rows (tuples) of the table. tcn (version 1.0): provides a trigger function that notifies listeners of changes to the content of database tables.
- Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available: PostgreSQL version Maintenance version PostgreSQL 9.6 POSTGRES 9 6 24.R20220710.01 02 PostgreSQL 10 POSTGRES 10 21.R20220710.01 02 PostgreSQL 11 POSTGRES 11 16.R20220710.01 02 PostgreSQL 12 POSTGRES 12 11.R20220710.01 02 PostgreSQL 13 POSTGRES 13 7.R20220710.01 02 After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).
- Extension and plugin versions pg cron is upgraded from 1.4.1 to 1.5. pg partman is upgraded from 4.7.0 to 4.7.3. postgresql-hll is upgraded from 2.16 to 2.17. pg repack is upgraded from 1.4.7 to 1.4.8. wal2json is upgraded from 2.4 to 2.5. pg hint plan is upgraded, as follows: from 1.3.7 to 1.3.8 (for PostgreSQL versions 11-13) from 1.4.0 to 1.4.1 (for PostgreSQL version 14) from 1.4.0 to 1.5.0 (for PostgreSQL version 15) If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window.

