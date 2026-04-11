---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.599Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Backup service selection"
feature_slug: "backup-service-selection"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups"
keywords:
  - "backup"
  - "selection"
  - "lets"
  - "you"
  - "choose"
  - "between"
  - "enhanced"
  - "backups"
---

# Backup service selection

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Backup service selection lets you choose between enhanced backups and standard backups and switch between them as needed.

## Extended Definition

Backup service selection lets you choose between enhanced backups and standard backups and switch between them as needed.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)

## Supporting Pages

### "Choose your backup option \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations The following limitations apply when using enhanced backups: The Backup vault and your Cloud SQL instance must be in the same region or compatible with your instance's location for multi-region Backup vault.
- Enhanced backups With enhanced backups, you can use Backup and DR to manage and store all backups for your Cloud SQL instances across various projects in one central backup project.
- With enhanced backups, you can use a centralized backup project that hosts your backup vault and backup plans that you associate across all your Cloud SQL instances.
- Although instances can't use multiple backup options simultaneously, Cloud SQL lets you switch between these backup options as needed.

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.
- To upgrade your instance to the enhanced backups option, see Enable enhanced backups .
- If you enabled final backup using the final-backup instance setting, then the selection you make when you delete your instance must match the final backup instance configuration you set when you enabled final backup for your instance.

### "Manage enhanced backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "state": "CREATING", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations.create", "name": " operation-id ", "dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name " } Manage enhanced backups After you instance is enabled for enhanced backups and a backup plan is associated with the instance, you can perform an on-demand backup , view all the backups in the backup vault , or change the associated backup plan .
- Before you begin Before you can manage enhanced backups for your Cloud SQL instances, you must do the following: Enable the Backup and DR API Confirm you have the required permissions Enable the Backup and DR API To use enhanced backups with your Cloud SQL instances, you must first enable the Backup and DR API: Enable the Backup and DR API Required permissions The following permissions are required to configure enhanced backups for your Cloud SQL instances: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForCloudSqlInstance backupdr.backupPlanAssociations.fetchForCloudSqlInstance backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.getForCloudSqlInstance backupdr.backupPlanAssociations.triggerBackupForCloudSqlInstance backupdr.backupPlanAssociations.deleteForCloudSqlInstance backupdr.backupPlans.useForCloudSqlInstance backupdr.bvdataSources.get backupdr.bvdataSources.list For more information about these permissions, see Backup and DR roles and permissions .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "backups": [ { "name": " backup-name ", "state": "ACTIVE", "backupType": "ON DEMAND", "createTime": "", "expireTime": "", "CloudSqlInstanceBackupProperties": { "databaseInstalledVersion": " database-installed-version ", "finalBackup": "TRUE", "sourceInstance": " instance-name ", "instanceTier": "db-custom-1-3840" } }, { ... } ] } Disable enhanced backups You can disable enhanced backups by switching your Cloud SQL instance back to the standard backups option.
- Your instance's associated backup plan is deleted and your instance is now managed under the Standard backups option, managed by Cloud SQL. gcloud To disable enhanced backups and switch your instance back to the standard backups option, run the following command: gcloud backup-dr backup-plan-associations delete BACKUP PLAN ASSOCIATION NAME --location= BACKUP VAULT LOCATION Replace the following: BACKUP PLAN ASSOCIATION NAME : the name of the backup plan association you want to delete.

