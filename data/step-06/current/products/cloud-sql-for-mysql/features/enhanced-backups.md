---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.803Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Enhanced backups"
feature_slug: "enhanced-backups"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
keywords:
  - "enhanced"
  - "backups"
  - "this"
  - "provides"
  - "centralized"
  - "backup"
  - "management"
  - "with"
---

# Enhanced backups

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature provides centralized backup management with enforced retention, granular scheduling, and support for PITR after instance deletion; This feature provides a centralized backup service option with enforced retention, granular scheduling, and longer retention periods.

## Extended Definition

This feature provides centralized backup management with enforced retention, granular scheduling, and support for PITR after instance deletion; This feature provides a centralized backup service option with enforced retention, granular scheduling, and longer retention periods.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)

## Supporting Pages

### Manage enhanced backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "state": "CREATING", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations.create", "name": " operation-id ", "dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name " } Manage enhanced backups After you instance is enabled for enhanced backups and a backup plan is associated with the instance, you can perform an on-demand backup , view all the backups in the backup vault , or change the associated backup plan .
- Before you begin Before you can manage enhanced backups for your Cloud SQL instances, you must do the following: Enable the Backup and DR API Confirm you have the required permissions Enable the Backup and DR API To use enhanced backups with your Cloud SQL instances, you must first enable the Backup and DR API: Enable the Backup and DR API Required permissions The following permissions are required to configure enhanced backups for your Cloud SQL instances: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForCloudSqlInstance backupdr.backupPlanAssociations.fetchForCloudSqlInstance backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.getForCloudSqlInstance backupdr.backupPlanAssociations.triggerBackupForCloudSqlInstance backupdr.backupPlanAssociations.deleteForCloudSqlInstance backupdr.backupPlans.useForCloudSqlInstance backupdr.bvdataSources.get backupdr.bvdataSources.list For more information about these permissions, see Backup and DR roles and permissions .
- Your on-demand backup is created. gcloud To perform an on-demand backup for an instance with enhanced backups enabled, run the following command: gcloud backup-dr backup-plan-associations trigger-backup BACKUP PLAN ASSOCIATION NAME --backup-rule-id= BACKUP RULE ID --project= PROJECT ID --location= BACKUP VAULT LOCATION [--no-async] Replace the following: BACKUP PLAN ASSOCIATION NAME : the name of the backup plan association of your Cloud SQL instance.
- You can also manage enhanced backups for your instance by doing the following: Change your instance's associated backup plan Perform an on-demand backup List all backups in the backup vault for your instance For more information about how enhanced backups work and their integration with Backup and DR, see Enhanced backups .

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- Cloud SQL offers the following backup options: Enhanced backups : This option manages and stores backups in a centralized backup management project.
- With enhanced backups, you can use a centralized backup project that hosts your backup vault and backup plans that you associate across all your Cloud SQL instances.
- Limitations The following limitations apply when using enhanced backups: The Backup vault and your Cloud SQL instance must be in the same region or compatible with your instance's location for multi-region Backup vault.

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- This can range from 1 day to 365 days for standard backups, or 1 day to 10 years for enhanced backups.
- For standard backups, since instance names can be used after an instance is deleted in Cloud SQL, retained backups are stored in your Google Cloud project with a field called instance deletion time .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.

