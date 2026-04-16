---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.547Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "PITR transaction log export"
feature_slug: "pitr-transaction-log-export"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr"
keywords:
  - "pitr"
  - "transaction"
  - "log"
  - "export"
  - "sql"
  - "can"
  - "point"
  - "time"
---

# PITR transaction log export

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL can export point-in-time recovery transaction logs stored in Cloud Storage.

## Extended Definition

Cloud SQL can export point-in-time recovery transaction logs stored in Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)

## Supporting Pages

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- Source ID: `site-docs-reference-required-4`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable PITR: gcloud sql instances patch INSTANCE NAME \ --enable-point-in-time-recovery If you're enabling PITR on a primary instance, you can also configure the number of days for which you want to retain transaction logs by adding the following parameter: --retained-transaction-log-days = RETAINED TRANSACTION LOG DAYS Confirm your change: gcloud sql instances describe INSTANCE NAME In the backupConfiguration section, you see pointInTimeRecoveryEnabled: true if the change was successful.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Check the storage location of transaction logs used for PITR You can check where your Cloud SQL instance is storing the transaction logs used for PITR. gcloud To determine whether your instance stores logs for PITR on disk or Cloud Storage, use the following command: gcloud sql instances describe INSTANCE NAME Replace INSTANCE NAME with the name of the instance.
- Unless specified otherwise, PITR is disabled by default. resource "google sql database instance" "enterprise" { name = "sqlserver-enterprise-instance-pitr" region = "asia-northeast1" database version = "SQLSERVER 2019 ENTERPRISE" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-4-26624" edition = "ENTERPRISE" backup configuration { enabled = true point in time recovery enabled = true } } Setting the deletion protection flag to true ensures you can't accidentally delete the instance using Terraform.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Configure point-in-time recovery (PITR) Stay organized with collections Save and categorize content based on your preferences.

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export transaction logs You can export the transaction logs for all Cloud SQL for SQL Server instances that have point-in-time recovery (PITR) enabled and their logs stored in Cloud Storage. gcloud Create a Cloud Storage bucket for the export. gcloud storage buckets create gs:// BUCKET NAME --location = LOCATION NAME --project = PROJECT NAME This step isn't required, but strongly recommended, so you don't open up access to any other data.
- Export the transaction logs. gcloud sql export bak INSTANCE NAME gs:// BUCKET NAME / FOLDER PATH --export-log-start-time = START DATE AND TIME / --export-log-end-time = END DATE AND TIME / --database = DATABASE NAME --bak-type = TLOG Note: The export-log-start-time and export-log-end-time parameters are optional.
- DATABASE NAME : the name of the database inside of the Cloud SQL instance. exportLogStartTime : the start date and time of the trasnasction logs to export. exportLogEndTime : the end date and time of the transaction logs to export.
- If other services or features, such as point-in-time recovery and read replica, trigger a full backup between your full backup export and differential backup export, then you must trigger a full backup export again.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)
- Source ID: `site-docs-reference-required-4`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Perform a PITR using the backup vault If your Cloud SQL instance is enabled to use enhanced backups , then you can perform point-in-time-recovery for your instance using the backup vault.
- Restore using PITR Before using any of the request data, make the following replacements: project-id : the project ID target-instance-id : the target instance ID source-instance-id : the source instance ID source-instance-deletion-time : the deletion time of the source instance restore-timestamp the point-in-time which you want to restore the instance In the JSON request, you optionally can specify up to one specific database name as the following: "databaseNames": "my-database" HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "kind": "sql#cloneContext", "destinationInstanceName": " target-instance-id ", "sourceInstanceDeletionTime: " source-instance-deletion-time ", "pointInTime": " restore-timestamp " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID :pointInTimeRestore" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ TARGET INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " TARGET INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Perform a cross-project PITR With enhanced backups, you can restore a Cloud SQL instance to a project other than the one where either the source instance or backup vault is located.
- Restore using a PITR Before using any of the request data, make the following replacements: project-id : the project ID target-instance-id : the target instance ID source-instance-id : the source instance ID source-instance-deletion-time : the deletion time of the source instance restore-timestamp the point-in-time which you want to restore the instance HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "kind": "sql#cloneContext", "destinationInstanceName": " target-instance-id ", "sourceInstanceDeletionTime: " source-instance-deletion-time ", "pointInTime": " restore-timestamp " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

