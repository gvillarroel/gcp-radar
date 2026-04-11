---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.370Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_authid system catalog access"
feature_slug: "pg-authid-system-catalog-access"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "pg"
  - "authid"
  - "system"
  - "catalog"
  - "access"
  - "to"
  - "the"
  - "table"
---

# pg_authid system catalog access

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Access to the pg_authid catalog table is generally available for viewing hashed passwords and other database role properties.

## Extended Definition

Access to the pg_authid catalog table is generally available for viewing hashed passwords and other database role properties.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- If the role exists, then it has read-only ( SELECT ) access to the pg authid table.
- To export all PostgreSQL databases, run the following command: pg dumpall \ -h HOST NAME -l DATABASE NAME --exclude-database = cloudsqladmin \ --exclude-database = template > pg dumpall.sql To view role passwords when dumping roles with pg dumpall , set the cloudsql.pg authid select role flag to a PostgreSQL role name.
- To export all PostgreSQL databases in a Cloud SQL instance, use the pg dumpall utility with the following mandatory flags: exclude-database=cloudsqladmin exclude-database=template The pg dumpall utility doesn't have access to the cloudsqladmin or template databases.
- When importing using pg restore , specify the processed table of contents with the command-line argument "--use-list= DATABASE NAME .toc".

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Views and utilities pg authid: access this catalog table that contains hashed passwords and other properties for all database roles. pg dumpall: extract all PostgreSQL databases of a cluster into a single script file.
- Additionally, users with the cloudsqlsuperuser role have full access to the pg largeobject system catalog.
- Use this flag when you're deciding whether to run a VACUUM . autovacuum vacuum insert threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table. effective io concurrency : set the number of concurrent disk I/O operations that can run simultaneously. hash mem multiplier : compute the maximum amount of memory that hash-based operations can use. logical decoding work mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk. maintenance io concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions. vacuum failsafe age : specify the maximum age (in transactions) that a database table's pg class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs. vacuum multixact failsafe age : specify the maximum age (in multiple transactions) that a database table's pg class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.
- You can use the pg shadow view to work with the properties of roles that are marked as rolcanlogin in the pg authid catalog.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Views and utilities pg authid: access this catalog table that contains hashed passwords and other properties for all database roles. pg dumpall: extract all PostgreSQL databases of a cluster into a single script file.
- Additionally, users with the cloudsqlsuperuser role have full access to the pg largeobject system catalog.
- Use this flag when you're deciding whether to run a VACUUM . autovacuum vacuum insert threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table. effective io concurrency : set the number of concurrent disk I/O operations that can run simultaneously. hash mem multiplier : compute the maximum amount of memory that hash-based operations can use. logical decoding work mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk. maintenance io concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions. vacuum failsafe age : specify the maximum age (in transactions) that a database table's pg class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs. vacuum multixact failsafe age : specify the maximum age (in multiple transactions) that a database table's pg class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.
- You can use the pg shadow view to work with the properties of roles that are marked as rolcanlogin in the pg authid catalog.

