---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.546Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Backup maxChargeableBytes field"
feature_slug: "backup-maxchargeablebytes-field"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring"
keywords:
  - "backup"
  - "maxchargeablebytes"
  - "field"
  - "sql"
  - "exposes"
  - "value"
  - "backupruns"
  - "get"
---

# Backup maxChargeableBytes field

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL exposes the maxChargeableBytes value in backupRuns.GET API and gcloud backup describe responses.

## Extended Definition

Cloud SQL exposes the maxChargeableBytes value in backupRuns.GET API and gcloud backup describe responses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)

## Supporting Pages

### "REST Resource: backupRuns \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "kind" : string , "status" : enum ( SqlBackupRunStatus ) , "enqueuedTime" : string , "id" : string , "startTime" : string , "endTime" : string , "error" : { object ( OperationError ) } , "type" : enum ( SqlBackupRunType ) , "description" : string , "windowStartTime" : string , "instance" : string , "selfLink" : string , "location" : string , "databaseVersion" : enum ( SqlDatabaseVersion ) , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "backupKind" : enum ( SqlBackupKind ) , "timeZone" : string , "maxChargeableBytes" : string } Fields kind string This is always sql#backupRun . status enum ( SqlBackupRunStatus ) The status of this run. enqueuedTime string ( Timestamp format) The time the run was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z .
- This field defaults to "ON DEMAND" and is ignored, when specified for insert requests. description string The description of this run, only applicable to on-demand backups. windowStartTime string ( Timestamp format) The start time of the backup window during which this the backup was attempted in RFC 3339 format, for example 2012-11-15T16:19:00.094Z .
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback REST Resource: backupRuns Stay organized with collections Save and categorize content based on your preferences.
- Resource: BackupRun JSON representation SqlBackupRunStatus SqlBackupRunType Methods Resource: BackupRun A BackupRun resource.

### "Manage standard backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "location": "us", "description": "view details about a backup", "maxChargeableBytes": " BYTE NUMBER ", "instance": " INSTANCE NAME " } Configure final backups You can set your instance to automatically take a backup by enabling the final backup instance setting and setting the final backup retention period .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE BACKUP", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 List the backups to obtain the ID for the backup you want to delete: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } Delete the backup: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID backup-id : The backup ID HTTP method and URL: DELETE https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } Delete the backup: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID backup-id : The backup ID HTTP method and URL: DELETE https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Restore an instance using a backup \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
- Source ID: `site-docs-reference-required-4`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } Restore the backup to an instance in a different project: Before using any of the request data, make the following replacements: source-project-id : The source project ID target-project-id : The target project ID target-instance-id : The target instance ID source-instance-id : The source instance ID backup-id The backup ID HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ target-project-id /instances/ target-instance-id /restoreBackup Request JSON body: { "restoreBackupContext": { "backupRunId": backup-id , "project": " source-project-id ", "instanceId": " source-instance-id " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#backupRun", "status": "SUCCESSFUL", "enqueuedTime": "2020-01-21T11:25:33.818Z", "id": " backup-id ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "windowStartTime": "2020-01-21T10:00:00.479Z", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id ", "location": "us" } Restore the backup to an instance in a different project: Before using any of the request data, make the following replacements: source-project-id : The source project ID target-project-id : The target project ID target-instance-id : The target instance ID source-instance-id : The source instance ID backup-id The backup ID HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ target-project-id /instances/ target-instance-id /restoreBackup Request JSON body: { "restoreBackupContext": { "backupRunId": backup-id , "project": " source-project-id ", "instanceId": " source-instance-id " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Restore to a different project Before using any of the request data, make the following replacements: PROJECT ID : the project ID TARGET INSTANCE ID : the target instance ID BACKUP ID : the backup ID HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ TARGET INSTANCE ID /restoreBackup Request JSON body: { backup: projects/ PROJECT ID /backups/ BACKUP ID } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Restore to a different project Before using any of the request data, make the following replacements: PROJECT ID : the project ID TARGET INSTANCE ID : the target instance ID BACKUP ID : the backup ID HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE ID /restoreBackup Request JSON body: { backup: projects/ PROJECT ID /backups/ BACKUP ID } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

