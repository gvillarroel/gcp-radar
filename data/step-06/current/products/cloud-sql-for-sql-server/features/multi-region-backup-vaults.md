---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.525Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Multi-region backup vaults"
feature_slug: "multi-region-backup-vaults"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups"
keywords:
  - "multi"
  - "region"
  - "backup"
  - "vaults"
  - "store"
  - "enhanced"
  - "locations"
  - "higher"
---

# Multi-region backup vaults

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Multi-region backup vaults store enhanced backup data in multi-region locations for higher availability and regional outage protection.

## Extended Definition

Multi-region backup vaults store enhanced backup data in multi-region locations for higher availability and regional outage protection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)

## Supporting Pages

### "Choose your backup option \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-4`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- Default backup locations If you don't specify a storage location, then your backups are stored in the multi-region that is geographically closest to the location of your Cloud SQL instance.
- Limitations The following limitations apply when using enhanced backups: The Backup vault and your Cloud SQL instance must be in the same region or compatible with your instance's location for multi-region Backup vault.
- A backup vault stores backups in a single region or a multi-region as long as the selected location is compatible with your instance's location .

### "Manage enhanced backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-enhanced-backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "state": "CREATING", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations.create", "name": " operation-id ", "dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name " } Manage enhanced backups After you instance is enabled for enhanced backups and a backup plan is associated with the instance, you can perform an on-demand backup , view all the backups in the backup vault , or change the associated backup plan .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "backups": [ { "name": " backup-name ", "state": "ACTIVE", "backupType": "ON DEMAND", "createTime": "", "expireTime": "", "CloudSqlInstanceBackupProperties": { "databaseInstalledVersion": " database-installed-version ", "finalBackup": "TRUE", "sourceInstance": " instance-name ", "instanceTier": "db-custom-1-3840" } }, { ... } ] } Disable enhanced backups You can disable enhanced backups by switching your Cloud SQL instance back to the standard backups option.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /dataSourceReferences:fetchForResourceType?filter=dataSourceGcpResourceInfo.gcp resourcename="projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ project-id /locations/ location /dataSourceReferences/ dataSourceId " "dataSourceBackupConfigState": "ACTIVE", "dataSourceBackupCount": "1", "dataSourceBackupConfigInfo": { "lastBackupState: "SUCCEEDED", "lastSuccessfulBackupConsistencyTime": "2024-09-19T18:00:00Z" }, "dataSourceGcpResourceInfo": { "gcpResourceName": "projects/ project-id /instances/ instance-id ", "type": "sqladmin.googleapis.com/Instance", "location": " location " "cloudSqlInstanceProperties": { "name": "projects/ project-id /instances/ instance-id " } } } List the instance's backups To list your the backups for your instance using the data source ID, use the backupVaults.dataSources.backups method in the Backup and DR API .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupPlanAssociations" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "operation", "state": "CREATING", "user": "user@example.com", "updateTime": "2020-01-21T22:43:37.981Z", "operationType": "backupPlanAssociations.create", "name": " operation-id ", "dataSource": "projects/ project-id /locations/ location /backupVaults/ backup-vault-name /dataSources/ data-source-name " } Perform an on-demand backup You can perform an on-demand backup for a Cloud SQL instance with and associated backup plan using Google Cloud console, gcloud CLI , or the Cloud SQL API.

### "Manage standard backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the backups list, the Location column lists the type of location (multi-region or region) and the specific multi-region or region for each backup. gcloud For reference information, see gcloud sql instances describe .
- When there's an outage in a region where an instance has customer-managed encryption keys (CMEK) enabled, you can't restore the backups for that instance to a different region.
- If not required, use the default multi-region backup location.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } View a list of backups during an outage When an instance is in a region that is having an outage, you can only view backups for that instance using a wildcard ( - ) with the backupRuns.list API.

