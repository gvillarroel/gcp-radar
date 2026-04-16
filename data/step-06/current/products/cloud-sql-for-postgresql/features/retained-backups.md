---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.755Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Retained backups"
feature_slug: "retained-backups"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance"
keywords:
  - "demand"
  - "retained"
  - "keep"
  - "existing"
  - "automatic"
  - "backups"
---

# Retained backups

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Retained backups let you keep existing automatic and on-demand backups after deleting a Cloud SQL instance.

## Extended Definition

Retained backups let you keep existing automatic and on-demand backups after deleting a Cloud SQL instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about how to enable retained backups for your new or existing instances using the standard backups option, see Configure retained backups .
- To keep backups indefinitely, you can create an on-demand backup , as they are not deleted in the same way as automated backups.
- You can create on-demand backups for any instance, whether the instance has automatic backups enabled or not.
- You want to increase the number of days that you can keep automatic backups from seven to 30 days, or longer.

### "Manage standard backups \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure retained backups You can set your instance to automatically retain all automated and on-demand backups when you delete your instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta To disable retained backups, do the following: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "retainBackupsOnDelete": true } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta To enable retained backups, do the following: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "retainBackupsOnDelete": true } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The currently supported (and default) values are 1 or "COUNT". num-to-retain : The number of automated backups to retain, from 1 to 365. project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "backupConfiguration": { "backupRetentionSettings": { "retentionUnit": unit , "retainedBackups": " num-to-retain " } } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Manage backups for deleted instances \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ?update mask=description" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2024-02-15T00:10:22.078Z", "operationType": "UPDATE BACKUP", "name": " OPERATION ID ", "targetId": " BACKUP ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Delete a backup associated with a deleted instance You can delete a final or retained on-demand and automated backup for a deleted instance at any time.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ?update mask=description" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2024-02-15T00:10:22.078Z", "operationType": "UPDATE BACKUP", "name": " OPERATION ID ", "targetId": " BACKUP ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Update a retained backup You can update the description of retained on-demand and automated backups.
- This page lists all retained automed and on-demand backups, and the final backup, if available, for your deleted instance. gcloud To get a list of all backups that are associated with a Google Cloud project, use the gcloud sql backups list command: gcloud sql backups list --project= PROJECT ID Replace the following: PROJECT ID : the ID of your Google Cloud project.
- However, for on-demand or automated backups that are retained after instance deletion, you can only update the description of for these backups.

