---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.561Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Differential backup import and export"
feature_slug: "differential-backup-import-and-export"
latest_feature_date: "2023-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
keywords:
  - "differential"
  - "backup"
  - "import"
  - "export"
  - "sql"
  - "supports"
  - "importing"
  - "exporting"
---

# Differential backup import and export

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports importing and exporting differential database backups.

## Extended Definition

Cloud SQL supports importing and exporting differential database backups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Supporting Pages

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using BAK files and importing data into Cloud SQL instances using transaction log files.
- This is because importing a database backup with --no-recovery is a prerequisite for importing differential database backups.
- Cloud SQL doesn't support importing differential database backups on instances that are enabled with point-in-time recovery.
- Export differential database backups Before exporting a differential database backup , you must export a differential base.

### "Export and import using SQL dump files \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using SQL dump files.
- For best practices, see Best Practices for Importing and Exporting Data .
- Learn more about best practices for importing and exporting data .
- If you're exporting to create a new instance from the exported file, consider restoring from a backup to a different instance or cloning the instance .

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Backups versus exports Backups are managed by Cloud SQL according to retention policies, and are stored separately from the Cloud SQL instance.
- To upgrade to a later version, perform an in-place major version upgrade , or export and then import your database to a new Cloud SQL instance.
- If you have done an export operation, create a new instance and then do an import operation to recreate the database.
- Cloud SQL backups differ from an export uploaded to Cloud Storage, where you manage the lifecycle.

