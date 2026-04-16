---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.971Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "mysqldump options for external server migration"
feature_slug: "mysqldump-options-for-external-server-migration"
latest_feature_date: "2021-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences"
  - "https://docs.cloud.google.com/sql/docs/mysql/features"
keywords:
  - "mysqldump"
  - "options"
  - "external"
  - "server"
  - "migration"
  - "sql"
  - "mysql"
  - "lets"
---

# mysqldump options for external server migration

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL lets you specify mysqldump options during migration from external servers.

## Extended Definition

Cloud SQL for MySQL lets you specify mysqldump options during migration from external servers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences](https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences)
- [https://docs.cloud.google.com/sql/docs/mysql/features](https://docs.cloud.google.com/sql/docs/mysql/features)

## Supporting Pages

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.
- External replication to Cloud SQL for MySQL To create a dump file for use in an external server configuration, see Replicating from an external server .
- Rather than lock the entire database, this lets mysqldump read the database in the current state, making for a consistent data dump.
- Rather than lock the entire database, this lets mysqldump read the database in the current state, making for a consistent data dump.

### Cloud SQL for MySQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences](https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences)
- Source ID: `site-docs-reference-3`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information on using mysqldump options that optimize your file for importing into Cloud SQL, see Export from your local MySQL server using mysqldump . mysqlimport without using the --local option.
- MySQL functions unsupported for Cloud SQL LOAD FILE() MySQL client program features unsupported for Cloud SQL mysqldump using the --tab option or options that are used with --tab .
- All other mysqldump options are supported.
- In addition, Cloud SQL for MySQL doesn't grant the following privileges introduced in MySQL 8.4: TRANSACTION GTID TAG TELEMETRY LOG ADMIN MySQL plugins unsupported for Cloud SQL InnoDB memcached plugin X plugin Clone plugin InnoDB data-at-rest encryption validate password component MySQL statements unsupported for Cloud SQL The following SQL statements generate an error with the Error 1290: The MySQL server is running with the Google option so it cannot execute this statement message: LOAD DATA INFILE Note: LOAD DATA LOCAL INFILE is supported.

### Cloud SQL for MySQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/features](https://docs.cloud.google.com/sql/docs/mysql/features)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information on using mysqldump options that optimize your file for importing into Cloud SQL, see Export from your local MySQL server using mysqldump . mysqlimport without using the --local option.
- MySQL functions unsupported for Cloud SQL LOAD FILE() MySQL client program features unsupported for Cloud SQL mysqldump using the --tab option or options that are used with --tab .
- All other mysqldump options are supported.
- In addition, Cloud SQL for MySQL doesn't grant the following privileges introduced in MySQL 8.4: TRANSACTION GTID TAG TELEMETRY LOG ADMIN MySQL plugins unsupported for Cloud SQL InnoDB memcached plugin X plugin Clone plugin InnoDB data-at-rest encryption validate password component MySQL statements unsupported for Cloud SQL The following SQL statements generate an error with the Error 1290: The MySQL server is running with the Google option so it cannot execute this statement message: LOAD DATA INFILE Note: LOAD DATA LOCAL INFILE is supported.

