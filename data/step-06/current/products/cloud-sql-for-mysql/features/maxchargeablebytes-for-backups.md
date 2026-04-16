---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.909Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "maxChargeableBytes for backups"
feature_slug: "maxchargeablebytes-for-backups"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up"
keywords:
  - "maxchargeablebytes"
  - "backups"
  - "backupruns"
  - "get"
  - "gcloud"
  - "backup"
  - "describe"
  - "output"
---

# maxChargeableBytes for backups

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

The backupRuns.GET API and gcloud backup describe output now include maxChargeableBytes for backups.

## Extended Definition

The backupRuns.GET API and gcloud backup describe output now include maxChargeableBytes for backups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up)

## Supporting Pages

### Manage standard backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- Source ID: `site-docs-reference-required-5`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To list the details of one backup, use the ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- View the details of a backup by specifying the backup ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 You can also use the APIs Explorer on the BackupRuns:list page to send the REST API request.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "location": "us", "description": "view details about a backup", "maxChargeableBytes": " BYTE NUMBER ", "instance": " INSTANCE NAME " } Configure final backups You can set your instance to automatically take a backup by enabling the final backup instance setting and setting the final backup retention period .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE BACKUP", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 List the backups to obtain the ID for the backup you want to delete: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Manage backups for deleted instances \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance)
- Source ID: `site-docs-reference-required-5`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To manage retained backups in a Google Cloud project, you need the following permissions: Console Task Required permissions List backups cloudsql.backupRuns.list Describe a backup cloudsql.backupRuns.get Update a backup cloudsql.backupRuns.update Delete a backup cloudsql.backupRuns.delete gcloud Action Command Required permissions List backups gcloud sql backups list cloudsql.backupRuns.list Describe a backup gcloud sql backups describe cloudsql.backupRuns.get Update a backup gcloud sql backups patch cloudsql.backupRuns.update Delete a backup gcloud sql backups delete cloudsql.backupRuns.delete REST Action Method Required permissions List backups backups.listBackup cloudsql.backupRuns.list Describe a backup backups.getBackup cloudsql.backupRuns.get Update a backup backups.updateBackup cloudsql.backupRuns.update Delete a backup backups.deleteBackup cloudsql.backupRuns.delete List all backups for a deleted instance You can see a list of all retained and final backups for a deleted instance for your Google Cloud console project.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Update a retained or final backup after instance deletion After you delete an instance, you can update the settings for any retained or final backups associated with that instance that are stored at the project level.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } REST v1beta4 Get a list of all retained backs Use this example to get a list of all retained and final backups associated Google Cloud project.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } View details for a retained backup Use this example to view the details of a retained or final backup.

### Manage standard backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backing-up)
- Source ID: `site-docs-reference-3`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To list the details of one backup, use the ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- View the details of a backup by specifying the backup ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 You can also use the APIs Explorer on the BackupRuns:list page to send the REST API request.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "location": "us", "description": "view details about a backup", "maxChargeableBytes": " BYTE NUMBER ", "instance": " INSTANCE NAME " } Configure final backups You can set your instance to automatically take a backup by enabling the final backup instance setting and setting the final backup retention period .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns/ backup-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE BACKUP", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 List the backups to obtain the ID for the backup you want to delete: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

