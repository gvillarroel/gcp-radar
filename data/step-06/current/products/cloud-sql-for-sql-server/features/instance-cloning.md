---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.589Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "instance cloning"
feature_slug: "instance-cloning"
latest_feature_date: "2020-08-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
keywords:
  - "instance"
  - "cloning"
  - "sql"
  - "server"
  - "supports"
  - "create"
  - "independent"
  - "copy"
---

# instance cloning

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server supports cloning an instance to create an independent copy.

## Extended Definition

Cloud SQL for SQL Server supports cloning an instance to create an independent copy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Supporting Pages

### "Restore an instance overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- Source ID: `site-docs-reference-required-4`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Restore an instance overview Stay organized with collections Save and categorize content based on your preferences.
- Note: For instances that were created before May 31, 2024, Cloud SQL switches the location of the transaction logs used for PITR automatically for you.
- If you are restoring to an instance with read replicas, then you must delete all replicas and recreate them after the restore operation completes.
- All Cloud SQL Enterprise edition instances that you create with PITR enabled after May 31, 2024 store logs used for PITR in Cloud Storage.

### Clone instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)
- Source ID: `site-docs-reference-required-4`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Overview Cloning a Cloud SQL instance creates a new instance that is a copy of the source instance.
- The new instance is a functionally independent copy of the source at the time the operation began.
- MySQL PostgreSQL SQL Server This page explains cloning, and describes how to clone an instance.
- Terraform To clone the instance, use a Terraform resource resource "google sql database instance" "clone" { name = "sqlserver-instance-clone-name" region = "us-central1" database version = "SQLSERVER 2017 STANDARD" root password = "INSERT-PASSWORD-HERE" clone { source instance name = google sql database instance.source.id } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- If you create a new instance with the final backup instance setting enabled, then you must update the final backup organization policy to apply the backup configurations to the primary instance only.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.
- You're unable to restore your instance using the Transact-SQL RESTORE command or the SQL Server Management Studio (SSMS) .

