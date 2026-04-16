---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.761Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Backup size visibility"
feature_slug: "backup-size-visibility"
latest_feature_date: "2024-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups"
keywords:
  - "display"
  - "visibility"
  - "instance"
  - "backup"
  - "size"
---

# Backup size visibility

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL can now display the size of an instance backup.

## Extended Definition

Cloud SQL can now display the size of an instance backup.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)

## Supporting Pages

### "Manage backups for deleted instances \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Update a retained or final backup after instance deletion After you delete an instance, you can update the settings for any retained or final backups associated with that instance that are stored at the project level.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } REST v1beta4 Get a list of all retained backs Use this example to get a list of all retained and final backups associated Google Cloud project.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } View details for a retained backup Use this example to view the details of a retained or final backup.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Update the description Use this example to update the description of the retained backup.

### "Restore an instance using a backup \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Restore to a different project Before using any of the request data, make the following replacements: PROJECT ID : the project ID TARGET INSTANCE ID : the target instance ID BACKUP ID : the backup ID HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ TARGET INSTANCE ID /restoreBackup Request JSON body: { backup: projects/ PROJECT ID /backups/ BACKUP ID } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Restore to a different project Before using any of the request data, make the following replacements: PROJECT ID : the project ID TARGET INSTANCE ID : the target instance ID BACKUP ID : the backup ID HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE ID /restoreBackup Request JSON body: { backup: projects/ PROJECT ID /backups/ BACKUP ID } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Restore the target instance from the retained or final backup.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Restore the target instance from the retained or final backup.

### "Manage standard backups \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns", "location": "us", "description": "get a list of backups", "instance": " INSTANCE NAME " } View details about a backup Use this example to view the details about a backup, including the backup size.
- View backup size You can view the size of a backup for a Cloud SQL instance by using gcloud CLI or the API. gcloud To get a list of all backups that are associated with a Google Cloud project, use the gcloud sql backups list command: gcloud sql backups list Note : By using this command, you can retrieve information about the backups, including their IDs.
- To view the size of a backup, use the gcloud sql backups describe command: gcloud sql backups describe BACKUP ID \ --instance = INSTANCE NAME \ --project = PROJECT ID Make the following replacements: BACKUP ID : the ID of the backup.
- In the output, the maxChargeableBytes parameter displays the size of the backup (in bytes).

