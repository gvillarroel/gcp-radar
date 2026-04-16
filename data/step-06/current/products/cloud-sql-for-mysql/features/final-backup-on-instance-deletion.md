---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.886Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Final backup on instance deletion"
feature_slug: "final-backup-on-instance-deletion"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up"
keywords:
  - "final"
  - "backup"
  - "instance"
  - "deletion"
  - "feature"
  - "lets"
  - "take"
  - "time"
---

# Final backup on instance deletion

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature lets an instance take a final backup at deletion time and lets you configure its retention period.

## Extended Definition

This feature lets an instance take a final backup at deletion time and lets you configure its retention period.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up)

## Supporting Pages

### Manage standard backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- Source ID: `site-docs-reference-required-5`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To preserve your data, you can either take a final backup of your instance at time of deletion, enable retained backups for your instance before you delete it, or export your data to Cloud Storage before you delete it.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "location": "us", "description": "view details about a backup", "maxChargeableBytes": " BYTE NUMBER ", "instance": " INSTANCE NAME " } Configure final backups You can set your instance to automatically take a backup by enabling the final backup instance setting and setting the final backup retention period .
- If you don't enable final backup for your instance prior to deletion, you can also take a final backup when you delete your instance .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta To update the final backup retention days setting, do the following: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID RETENTION DAYS : the number of days to retain final backups HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "FinalBackupConfig": { "retentionDays: RETENTION DAYS } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-5`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- If you elect to take a final backup of your instance prior to deletion, then you can set the backup retention for the final backup for up to 10 years as well.
- You can retain backups after instance deletion, or take a final backup of your instance prior to deletion.
- You can also select to retain all backups and take a final backup of your data at instance deletion.

### Manage standard backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up)
- Source ID: `site-docs-reference-3`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To preserve your data, you can either take a final backup of your instance at time of deletion, enable retained backups for your instance before you delete it, or export your data to Cloud Storage before you delete it.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "location": "us", "description": "view details about a backup", "maxChargeableBytes": " BYTE NUMBER ", "instance": " INSTANCE NAME " } Configure final backups You can set your instance to automatically take a backup by enabling the final backup instance setting and setting the final backup retention period .
- If you don't enable final backup for your instance prior to deletion, you can also take a final backup when you delete your instance .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta To update the final backup retention days setting, do the following: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID RETENTION DAYS : the number of days to retain final backups HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "FinalBackupConfig": { "retentionDays: RETENTION DAYS } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

