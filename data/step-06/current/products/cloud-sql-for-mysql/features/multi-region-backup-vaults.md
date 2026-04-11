---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.797Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Multi-region backup vaults"
feature_slug: "multi-region-backup-vaults"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups"
keywords:
  - "multi"
  - "region"
  - "backup"
  - "vaults"
  - "this"
  - "stores"
  - "sql"
  - "enhanced"
---

# Multi-region backup vaults

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature stores Cloud SQL enhanced backup data in multi-region locations for higher availability and regional outage protection.

## Extended Definition

This feature stores Cloud SQL enhanced backup data in multi-region locations for higher availability and regional outage protection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)

## Supporting Pages

### Manage enhanced backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-enhanced-backups)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /backupVaults/ backup-vault-id /dataSources/ data-source-id /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "backups": [ { "name": " backup-name ", "state": "ACTIVE", "backupType": "ON DEMAND", "createTime": "", "expireTime": "", "CloudSqlInstanceBackupProperties": { "databaseInstalledVersion": " database-installed-version ", "finalBackup": "TRUE", "sourceInstance": " instance-name ", "instanceTier": "db-custom-1-3840" } }, { ... } ] } Disable enhanced backups You can disable enhanced backups by switching your Cloud SQL instance back to the standard backups option.
- Caution: This might cause your instance to restart. gcloud To associate a backup plan with your Cloud SQL instance, run the following command: gcloud backup - dr backup - plan - associations create BACKUP PLAN ASSOCIATION NAME -- project = PROJECT ID -- resource = INSTANCE ID -- backup - plan = BACKUP PLAN NAME -- resource - type = sqladmin . googleapis . com / Instance -- location = REGION ID Replace the following: BACKUP PLAN ASSOCIATION NAME : the name of the backup plan association.
- Note: This will cause your instance to restart. gcloud To associate the new backup plan with your instance, do the following: gcloud backup - dr backup - plan - associations create BACKUP PLAN ASSOCIATION NAME -- project = PROJECT ID -- resource = INSTANCE ID -- backup - plan = BACKUP PLAN NAME -- resource - type = sqladmin . googleapis . com / Instance -- location = REGION ID Replace the following: BACKUP PLAN ASSOCIATION NAME : the name of the backup plan association.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://backupdr.googleapis.com/v1/projects/ project-id /locations/ location /dataSourceReferences:fetchForResourceType?filter=dataSourceGcpResourceInfo.gcp resourcename="projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ project-id /locations/ location /dataSourceReferences/ dataSourceId " "dataSourceBackupConfigState": "ACTIVE", "dataSourceBackupCount": "1", "dataSourceBackupConfigInfo": { "lastBackupState: "SUCCEEDED", "lastSuccessfulBackupConsistencyTime": "2024-09-19T18:00:00Z" }, "dataSourceGcpResourceInfo": { "gcpResourceName": "projects/ project-id /instances/ instance-id ", "type": "sqladmin.googleapis.com/Instance", "location": " location " "cloudSqlInstanceProperties": { "name": "projects/ project-id /instances/ instance-id " } } } List the instance's backups To list your the backups for your instance using the data source ID, use the backupVaults.dataSources.backups method in the Backup and DR API .

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations The following limitations apply when using enhanced backups: The Backup vault and your Cloud SQL instance must be in the same region or compatible with your instance's location for multi-region Backup vault.
- Cloud SQL offers the following backup options: Enhanced backups : This option manages and stores backups in a centralized backup management project.
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- Default backup locations If you don't specify a storage location, then your backups are stored in the multi-region that is geographically closest to the location of your Cloud SQL instance.

### Manage standard backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To create a backup for a database, use a Terraform resource . resource "google sql database instance" "instance" { name = "mysql-instance-backup" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" backup configuration { enabled = true binary log enabled = true start time = "20:55" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- In the backups list, the Location column lists the type of location (multi-region or region) and the specific multi-region or region for each backup. gcloud For reference information, see gcloud sql instances describe .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } View a list of backups during an outage When an instance is in a region that is having an outage, you can only view backups for that instance using a wildcard ( - ) with the backupRuns.list API.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns", "location": "us", "description": "get a list of backups", "instance": " INSTANCE NAME " } View details about a backup Use this example to view the details about a backup, including the backup size.

