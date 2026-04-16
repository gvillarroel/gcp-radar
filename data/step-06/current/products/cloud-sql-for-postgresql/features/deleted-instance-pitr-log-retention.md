---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.748Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Deleted instance PITR log retention"
feature_slug: "deleted-instance-pitr-log-retention"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore"
keywords:
  - "keeps"
  - "retention"
  - "deleted"
  - "pitr"
  - "point"
  - "instance"
  - "time"
---

# Deleted instance PITR log retention

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Deleted instance PITR log retention keeps point-in-time recovery logs after instance deletion so the instance can be restored later.

## Extended Definition

Deleted instance PITR log retention keeps point-in-time recovery logs after instance deletion so the instance can be restored later.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)

## Supporting Pages

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restore using a PITR To restore your deleted instance using a PITR, run the following command: gcloud sql instances clone SOURCE INSTANCE NAME \ NEW INSTANCE NAME \ --point-in-time=' PITR TIMESTAMP ' \ --source-instance-deletion-time= SOURCE INSTANCE DELETION TIMESTAMP Replace the following: SOURCE INSTANCE NAME : the name of the source instance that you want to restore.
- Restore using a PITR To restore your deleted instance using a PITR, run the following command: gcloud sql instances point-in-time-restore DATA SOURCE \ --point-in-time=' PITR TIMESTAMP ' \ --project=' TARGET PROJECT ' \ Replace the following: DATA SOURCE : the path of the data-source for the backup that is closest to the PITR timestamp you want to recover to.
- If the instance is unavailable and the instance logs are stored in Cloud Storage , or the instance was deleted and had PITR retention enabled , then you can retrieve the earliest and latest recovery time, and perform the PITR to any timestamp in that window.
- MySQL PostgreSQL SQL Server You can use point-in-time-recovery (PITR) to restore your primary Cloud SQL instances whether the instance is live, or is deleted.

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform To enable PITR, use a Terraform resource . resource "google sql database instance" "postgres instance pitr" { name = "" region = "us-central1" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" backup configuration { enabled = true point in time recovery enabled = true start time = "20:55" transaction log retention days = "3" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Enable PITR: gcloud sql instances patch INSTANCE NAME \ --enable-point-in-time-recovery If you're enabling PITR on a primary instance, you can also configure the number of days for which you want to retain transaction logs by adding the following parameter: --retained-transaction-log-days = RETAINED TRANSACTION LOG DAYS Confirm your change: gcloud sql instances describe INSTANCE NAME In the backupConfiguration section, you see pointInTimeRecoveryEnabled: true if the change was successful.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "pointInTimeRecoveryEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "backupConfiguration": { "enabled": false, "pointInTimeRecoveryEnabled": false } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Restore an instance overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Since instance names can be reused after an instance is deleted in Cloud SQL, retained PITR logs can be identified in Google Cloud with the following fields: instance deletion time log retention days These fields allow you to identify if a PITR log belongs to a deleted instance.
- For example, if your Cloud SQL Enterprise Plus edition instance has PITR retention set to 14 days, then the latest PITR log will be deleted 14 days after instance deletion.
- MySQL PostgreSQL SQL Server Cloud SQL lets you restore your instances from a backup, or by performing point-in-time recovery (PITR).
- After an instance is deleted, the PITR logs continue to follow the retention settings defined by the instance when it was live.

