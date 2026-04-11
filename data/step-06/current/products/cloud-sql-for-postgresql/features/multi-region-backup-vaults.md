---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.268Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Multi-region backup vaults"
feature_slug: "multi-region-backup-vaults"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options"
keywords:
  - "multi"
  - "region"
  - "backup"
  - "vaults"
  - "store"
  - "sql"
  - "enhanced"
  - "in"
---

# Multi-region backup vaults

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Multi-region backup vaults store Cloud SQL enhanced backup data in multi-region locations for higher availability and regional outage protection.

## Extended Definition

Multi-region backup vaults store Cloud SQL enhanced backup data in multi-region locations for higher availability and regional outage protection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)

## Supporting Pages

### "Restore an instance using a backup \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To restore your instance using a backup to an instance in a different project or region, do the following: gcloud To restore a backup from a backup vault to an existing instance, do the following: If restoring to an existing instance, determine if the target instance has any read replicas using the gcloud sql instances describe command: gcloud sql instances describe TARGET INSTANCE NAME Replace the following: TARGET INSTANCE NAME : the name of the target instance you want to restore your backup to.
- To restore your instance using a backup to an instance in a different project or region, do the following: gcloud If restoring to an existing instance, determine if the target instance has any read replicas using the gcloud sql instances describe command: gcloud sql instances describe TARGET INSTANCE NAME Replace the following: TARGET INSTANCE NAME : the name of the target instance you want to restore your backup to.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } Restore the backup to an instance in a different project: Before using any of the request data, make the following replacements: source-project-id : The source project ID target-project-id : The target project ID target-instance-id : The target instance ID source-instance-id : The source instance ID backup-id The backup ID HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ target-project-id /instances/ target-instance-id /restoreBackup Request JSON body: { "restoreBackupContext": { "backupRunId": backup-id , "project": " source-project-id ", "instanceId": " source-instance-id " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } Restore the backup to an instance in a different project: Before using any of the request data, make the following replacements: source-project-id : The source project ID target-project-id : The target project ID target-instance-id : The target instance ID source-instance-id : The source instance ID backup-id The backup ID HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ target-project-id /instances/ target-instance-id /restoreBackup Request JSON body: { "restoreBackupContext": { "backupRunId": backup-id , "project": " source-project-id ", "instanceId": " source-instance-id " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Manage enhanced backups \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-enhanced-backups)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "backups": [ { "name": " backup-name ", "state": "ACTIVE", "backupType": "ON DEMAND", "createTime": "", "expireTime": "", "CloudSqlInstanceBackupProperties": { "databaseInstalledVersion": " database-installed-version ", "finalBackup": "TRUE", "sourceInstance": " instance-name ", "instanceTier": "db-custom-1-3840" } }, { ... } ] } Disable enhanced backups You can disable enhanced backups by switching your Cloud SQL instance back to the standard backups option.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /dataSourceReferences:fetchForResourceType?filter=dataSourceGcpResourceInfo.gcp resourcename="projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ project-id /locations/ location /dataSourceReferences/ dataSourceId " "dataSourceBackupConfigState": "ACTIVE", "dataSourceBackupCount": "1", "dataSourceBackupConfigInfo": { "lastBackupState: "SUCCEEDED", "lastSuccessfulBackupConsistencyTime": "2024-09-19T18:00:00Z" }, "dataSourceGcpResourceInfo": { "gcpResourceName": "projects/ project-id /instances/ instance-id ", "type": "sqladmin.googleapis.com/Instance", "location": " location " "cloudSqlInstanceProperties": { "name": "projects/ project-id /instances/ instance-id " } } } List the instance's backups To list your the backups for your instance using the data source ID, use the backupVaults.dataSources.backups method in the Backup and DR API .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "state": "CREATING", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations.create", "name": " operation-id ", "dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name " } Manage enhanced backups After you instance is enabled for enhanced backups and a backup plan is associated with the instance, you can perform an on-demand backup , view all the backups in the backup vault , or change the associated backup plan .
- Before you begin Before you can manage enhanced backups for your Cloud SQL instances, you must do the following: Enable the Backup and DR API Confirm you have the required permissions Enable the Backup and DR API To use enhanced backups with your Cloud SQL instances, you must first enable the Backup and DR API: Enable the Backup and DR API Required permissions The following permissions are required to configure enhanced backups for your Cloud SQL instances: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForCloudSqlInstance backupdr.backupPlanAssociations.fetchForCloudSqlInstance backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.getForCloudSqlInstance backupdr.backupPlanAssociations.triggerBackupForCloudSqlInstance backupdr.backupPlanAssociations.deleteForCloudSqlInstance backupdr.backupPlans.useForCloudSqlInstance backupdr.bvdataSources.get backupdr.bvdataSources.list For more information about these permissions, see Backup and DR roles and permissions .

### "Choose your backup option \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- Limitations The following limitations apply when using enhanced backups: The Backup vault and your Cloud SQL instance must be in the same region or compatible with your instance's location for multi-region Backup vault.
- Default backup locations If you don't specify a storage location, then your backups are stored in the multi-region that is geographically closest to the location of your Cloud SQL instance.
- For example, if your Cloud SQL instance is in us-central1 , then your backups are stored in the us multi-region by default.

