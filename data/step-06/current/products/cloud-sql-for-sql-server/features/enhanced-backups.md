---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.529Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Enhanced backups"
feature_slug: "enhanced-backups"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
keywords:
  - "enhanced"
  - "backups"
  - "centralize"
  - "backup"
  - "management"
  - "project"
  - "dr"
  - "enforced"
---

# Enhanced backups

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Enhanced backups centralize backup management in a backup management project using Backup and DR with enforced retention and granular scheduling.

## Extended Definition

Enhanced backups centralize backup management in a backup management project using Backup and DR with enforced retention and granular scheduling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Supporting Pages

### "Manage enhanced backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "state": "CREATING", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations.create", "name": " operation-id ", "dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name " } Manage enhanced backups After you instance is enabled for enhanced backups and a backup plan is associated with the instance, you can perform an on-demand backup , view all the backups in the backup vault , or change the associated backup plan .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "backups": [ { "name": " backup-name ", "state": "ACTIVE", "backupType": "ON DEMAND", "createTime": "", "expireTime": "", "CloudSqlInstanceBackupProperties": { "databaseInstalledVersion": " database-installed-version ", "finalBackup": "TRUE", "sourceInstance": " instance-name ", "instanceTier": "db-custom-1-3840" } }, { ... } ] } Disable enhanced backups You can disable enhanced backups by switching your Cloud SQL instance back to the standard backups option.
- Your on-demand backup is created. gcloud To perform an on-demand backup for an instance with enhanced backups enabled, run the following command: gcloud backup-dr backup-plan-associations trigger-backup BACKUP PLAN ASSOCIATION NAME --backup-rule-id= BACKUP RULE ID --project= PROJECT ID --location= BACKUP VAULT LOCATION [--no-async] Replace the following: BACKUP PLAN ASSOCIATION NAME : the name of the backup plan association of your Cloud SQL instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /dataSourceReferences:fetchForResourceType?filter=dataSourceGcpResourceInfo.gcp resourcename="projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ project-id /locations/ location /dataSourceReferences/ dataSourceId " "dataSourceBackupConfigState": "ACTIVE", "dataSourceBackupCount": "1", "dataSourceBackupConfigInfo": { "lastBackupState: "SUCCEEDED", "lastSuccessfulBackupConsistencyTime": "2024-09-19T18:00:00Z" }, "dataSourceGcpResourceInfo": { "gcpResourceName": "projects/ project-id /instances/ instance-id ", "type": "sqladmin.googleapis.com/Instance", "location": " location " "cloudSqlInstanceProperties": { "name": "projects/ project-id /instances/ instance-id " } } } List the instance's backups To list your the backups for your instance using the data source ID, use the backupVaults.dataSources.backups method in the Backup and DR API .

### "Choose your backup option \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-4`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- Cloud SQL offers the following backup options: Enhanced backups : This option manages and stores backups in a centralized backup management project.
- With enhanced backups, you can use a centralized backup project that hosts your backup vault and backup plans that you associate across all your Cloud SQL instances.
- The plan containing your backup and restore settings is stored in the centralized backup project, and any backups created when the plan is active on your Cloud SQL instance are stored in the backup vault in the backups project.

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- For standard backups, since instance names can be used after an instance is deleted in Cloud SQL, retained backups are stored in your Google Cloud project with a field called instance deletion time .
- For standard backups, on-demand backups are kept indefinitely until either the backup is manually deleted, or the project containing the backup is deleted.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.

