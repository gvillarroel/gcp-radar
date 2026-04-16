---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.939Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Import and export cancellation"
feature_slug: "import-and-export-cancellation"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "import"
  - "export"
  - "cancellation"
  - "sql"
  - "supports"
  - "cancelling"
  - "operations"
  - "mysql"
---

# Import and export cancellation

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports cancelling data import and export operations for Cloud SQL for MySQL instances.

## Extended Definition

Cloud SQL supports cancelling data import and export operations for Cloud SQL for MySQL instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### "Export and import using CSV files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export data from your local MySQL server to a CSV file To export a MySQL table for import into Cloud SQL, we recommend that you format the file using the following command: mysql --host = INSTANCE IP --user = USER NAME --password DATABASE \ -e " SELECT FROM TABLE INTO OUTFILE ' FILE NAME ' CHARACTER SET 'utf8mb4' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ESCAPED BY '\"' " You can customize the format of your CSV export file.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Export and import using CSV files Stay organized with collections Save and categorize content based on your preferences.
- Export and import operations use database resources, but they do not interfere with normal database operations unless the instance is under-provisioned.
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using CSV files.

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Export and import using SQL dump files Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using SQL dump files.
- Note: If you intend to import the SQL dump file into a Cloud SQL database, do not export customer-created MySQL users.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Cloud SQL doesn't support the cancellation of the operation because it has an operation type other than IMPORT or EXPORT .
- To learn more about using mysqldump flags for managed import migration, see Allowed and default initial sync flags The initial data migration was successful, but no data is being replicated.
- Tables can have foreign key dependencies on other tables, and depending on the order of operations, one or more of those tables might not yet exist during the import operation.

