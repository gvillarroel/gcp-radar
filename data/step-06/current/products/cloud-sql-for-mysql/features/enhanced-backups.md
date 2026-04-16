---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.880Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Enhanced backups"
feature_slug: "enhanced-backups"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups"
keywords:
  - "enhanced"
  - "backups"
  - "feature"
  - "provides"
  - "centralized"
  - "backup"
  - "management"
  - "enforced"
---

# Enhanced backups

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature provides centralized backup management with enforced retention, granular scheduling, and support for PITR after instance deletion; This feature provides a centralized backup service option with enforced retention, granular scheduling, and longer retention periods.

## Extended Definition

This feature provides centralized backup management with enforced retention, granular scheduling, and support for PITR after instance deletion; This feature provides a centralized backup service option with enforced retention, granular scheduling, and longer retention periods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups)

## Supporting Pages

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-5`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- Cloud SQL offers the following backup options: Enhanced backups : This option manages and stores backups in a centralized backup management project.
- With enhanced backups, you can use a centralized backup project that hosts your backup vault and backup plans that you associate across all your Cloud SQL instances.
- Backup and DR provides centralized management, monitoring, and reporting of day-to-day backup operations in one place.

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-reference-3`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.
- This can range from 1 day to 365 days for standard backups, or 1 day to 10 years for enhanced backups.
- To upgrade your instance to the enhanced backups option, see Enable enhanced backups .

### Manage enhanced backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups)
- Source ID: `site-docs-reference-required-5`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "state": "CREATING", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations.create", "name": " operation-id ", "dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name " } Manage enhanced backups After you instance is enabled for enhanced backups and a backup plan is associated with the instance, you can perform an on-demand backup , view all the backups in the backup vault , or change the associated backup plan .
- Before you begin Before you can manage enhanced backups for your Cloud SQL instances, you must do the following: Enable the Backup and DR API Confirm you have the required permissions Enable the Backup and DR API To use enhanced backups with your Cloud SQL instances, you must first enable the Backup and DR API: Enable the Backup and DR API Required permissions The following permissions are required to configure enhanced backups for your Cloud SQL instances: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForCloudSqlInstance backupdr.backupPlanAssociations.fetchForCloudSqlInstance backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.getForCloudSqlInstance backupdr.backupPlanAssociations.triggerBackupForCloudSqlInstance backupdr.backupPlanAssociations.deleteForCloudSqlInstance backupdr.backupPlans.useForCloudSqlInstance backupdr.bvdataSources.get backupdr.bvdataSources.list For more information about these permissions, see Backup and DR roles and permissions .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "backups": [ { "name": " backup-name ", "state": "ACTIVE", "backupType": "ON DEMAND", "createTime": "", "expireTime": "", "CloudSqlInstanceBackupProperties": { "databaseInstalledVersion": " database-installed-version ", "finalBackup": "TRUE", "sourceInstance": " instance-name ", "instanceTier": "db-custom-1-3840" } }, { ... } ] } Disable enhanced backups You can disable enhanced backups by switching your Cloud SQL instance back to the standard backups option.
- Your instance's associated backup plan is deleted and your instance is now managed under the Standard backups option, managed by Cloud SQL. gcloud To disable enhanced backups and switch your instance back to the standard backups option, run the following command: gcloud backup-dr backup-plan-associations delete BACKUP PLAN ASSOCIATION NAME --location= BACKUP VAULT LOCATION Replace the following: BACKUP PLAN ASSOCIATION NAME : the name of the backup plan association you want to delete.

