---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.828Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "CSV import and export"
feature_slug: "csv-import-and-export"
latest_feature_date: "2018-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
keywords:
  - "importing"
  - "exporting"
  - "import"
  - "export"
  - "added"
---

# CSV import and export

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL added support for importing and exporting instances in CSV format.

## Extended Definition

Cloud SQL for PostgreSQL added support for importing and exporting instances in CSV format.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)

## Supporting Pages

### "Export and import using CSV files \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you're migrating an entire database from a supported database server (on-premises, in AWS, or Cloud SQL) to a new Cloud SQL instance, you can use the Database Migration Service instead of exporting and then importing files.
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using CSV files.
- Learn more about best practices for importing and exporting data .
- Follow the best practices for exporting and importing data.

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you're migrating an entire database from a supported database server (on-premises, in AWS, or Cloud SQL) to a new Cloud SQL instance, you can use the Database Migration Service instead of exporting and then importing files.
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using pg dump, pg dumpall, and pg restore.
- For best practices, see Best Practices for Importing and Exporting Data .
- Learn more about best practices for importing and exporting data .

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances Flags High availability Import and export Integrate with Vertex AI Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Import Issue Troubleshooting Error message: permission denied for schema public For PostgreSQL versions 15 and later, if the target database is created from template0 , then importing data might fail.
- Before importing a dump file, all the database users who own objects or were granted permissions on objects in the dumped database must exist in the target database.
- You can export data from your instance into a Cloud Storage bucket, create a new instance with the new name you want, and then import the data into the new instance.

