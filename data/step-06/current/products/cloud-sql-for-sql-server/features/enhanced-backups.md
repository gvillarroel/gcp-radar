---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.573Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Enhanced backups"
feature_slug: "enhanced-backups"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
keywords:
  - "enhanced"
  - "backups"
  - "centralize"
  - "backup"
  - "management"
  - "in"
  - "project"
  - "using"
---

# Enhanced backups

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Enhanced backups centralize backup management in a backup management project using Backup and DR with enforced retention and granular scheduling.

## Extended Definition

Enhanced backups centralize backup management in a backup management project using Backup and DR with enforced retention and granular scheduling.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Supporting Pages

### "Manage enhanced backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /dataSourceReferences:fetchForResourceType?filter=dataSourceGcpResourceInfo.gcp resourcename="projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ project-id /locations/ location /dataSourceReferences/ dataSourceId " "dataSourceBackupConfigState": "ACTIVE", "dataSourceBackupCount": "1", "dataSourceBackupConfigInfo": { "lastBackupState: "SUCCEEDED", "lastSuccessfulBackupConsistencyTime": "2024-09-19T18:00:00Z" }, "dataSourceGcpResourceInfo": { "gcpResourceName": "projects/ project-id /instances/ instance-id ", "type": "sqladmin.googleapis.com/Instance", "location": " location " "cloudSqlInstanceProperties": { "name": "projects/ project-id /instances/ instance-id " } } } List the instance's backups To list your the backups for your instance using the data source ID, use the backupVaults.dataSources.backups method in the Backup and DR API .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "state": "CREATING", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations.create", "name": " operation-id ", "dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name " } Manage enhanced backups After you instance is enabled for enhanced backups and a backup plan is associated with the instance, you can perform an on-demand backup , view all the backups in the backup vault , or change the associated backup plan .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations/ backup-plan-association-id :triggerBackup" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "done": "true", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations:triggerBackup", "name": " operation-id " } List all the backups in a backup vault for your instance You can list all backups for in the backup vault for your Cloud SQL instance using Google Cloud console, gcloud CLI , or the Cloud SQL API.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "backups": [ { "name": " backup-name ", "state": "ACTIVE", "backupType": "ON DEMAND", "createTime": "", "expireTime": "", "CloudSqlInstanceBackupProperties": { "databaseInstalledVersion": " database-installed-version ", "finalBackup": "TRUE", "sourceInstance": " instance-name ", "instanceTier": "db-custom-1-3840" } }, { ... } ] } Disable enhanced backups You can disable enhanced backups by switching your Cloud SQL instance back to the standard backups option.

### "Restore an instance using a backup \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } If your instance is using enhanced backups, see List all backups in a backup vault .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } If your instance is using enhanced backups, see List all backups in a backup vault .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } If your instance is using enhanced backups, see List all backups in a backup vault .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } If your instance is using enhanced backups, see List all backups in a backup vault .

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.
- For standard backups, since instance names can be used after an instance is deleted in Cloud SQL, retained backups are stored in your Google Cloud project with a field called instance deletion time .
- For more information about how to enable retained backups for your new or existing instances using the standard backups option, see Configure retained backups .

