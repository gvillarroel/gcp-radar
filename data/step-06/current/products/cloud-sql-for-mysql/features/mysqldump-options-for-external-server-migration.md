---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.924Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "mysqldump options for external server migration"
feature_slug: "mysqldump-options-for-external-server-migration"
latest_feature_date: "2021-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/features"
keywords:
  - "mysqldump"
  - "options"
  - "for"
  - "external"
  - "server"
  - "migration"
  - "sql"
  - "mysql"
---

# mysqldump options for external server migration

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL lets you specify mysqldump options during migration from external servers.

## Extended Definition

Cloud SQL for MySQL lets you specify mysqldump options during migration from external servers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/features](https://docs.cloud.google.com/sql/docs/mysql/features)

## Supporting Pages

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.
- External replication to Cloud SQL for MySQL To create a dump file for use in an external server configuration, see Replicating from an external server .
- Rather than lock the entire database, this lets mysqldump read the database in the current state, making for a consistent data dump.
- Rather than lock the entire database, this lets mysqldump read the database in the current state, making for a consistent data dump.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- September 08, 2021 Feature Cloud SQL for MySQL now allows you to specify mysqldump options during migration from external servers.
- August 01, 2023 Feature You can now migrate large MySQL databases from external sources to Cloud SQL for MySQL faster using Database Migration Service .
- March 31, 2026 Feature You can now migrate a subset of databases from an external server to a destination Cloud SQL for MySQL instance.
- Feature Support for replication from an external MySQL server to a Cloud SQL Second Generation replica .

### Cloud SQL for MySQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/features](https://docs.cloud.google.com/sql/docs/mysql/features)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information on using mysqldump options that optimize your file for importing into Cloud SQL, see Export from your local MySQL server using mysqldump . mysqlimport without using the --local option.
- MySQL functions unsupported for Cloud SQL LOAD FILE() MySQL client program features unsupported for Cloud SQL mysqldump using the --tab option or options that are used with --tab .
- In addition, Cloud SQL for MySQL doesn't grant the following privileges introduced in MySQL 8.4: TRANSACTION GTID TAG TELEMETRY LOG ADMIN MySQL plugins unsupported for Cloud SQL InnoDB memcached plugin X plugin Clone plugin InnoDB data-at-rest encryption validate password component MySQL statements unsupported for Cloud SQL The following SQL statements generate an error with the Error 1290: The MySQL server is running with the Google option so it cannot execute this statement message: LOAD DATA INFILE Note: LOAD DATA LOCAL INFILE is supported.
- How you can connect to Cloud SQL for MySQL instances You can connect to a Cloud SQL instance from the following: A mysql client Third-party tools like SQL Workbench or Toad for MySQL External applications App Engine applications Applications running on Compute Engine Applications running on Google Kubernetes Engine Cloud Run functions Cloud Run Google Apps Script scripts Connecting to Cloud SQL with Private Google Access isn't supported.

