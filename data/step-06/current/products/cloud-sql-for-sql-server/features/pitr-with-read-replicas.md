---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.561Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "PITR with read replicas"
feature_slug: "pitr-with-read-replicas"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring"
keywords:
  - "pitr"
  - "read"
  - "replicas"
  - "sql"
  - "supports"
  - "point"
  - "time"
  - "recovery"
---

# PITR with read replicas

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports using point-in-time recovery and read replicas on the same primary instance.

## Extended Definition

Cloud SQL supports using point-in-time recovery and read replicas on the same primary instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)

## Supporting Pages

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- Source ID: `site-docs-reference-required-4`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "pointInTimeRecoveryEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "pointInTimeRecoveryEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Unless specified otherwise, PITR is disabled by default. resource "google sql database instance" "enterprise" { name = "sqlserver-enterprise-instance-pitr" region = "asia-northeast1" database version = "SQLSERVER 2019 ENTERPRISE" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-4-26624" edition = "ENTERPRISE" backup configuration { enabled = true point in time recovery enabled = true } } Setting the deletion protection flag to true ensures you can't accidentally delete the instance using Terraform.
- Enable PITR: gcloud sql instances patch INSTANCE NAME \ --enable-point-in-time-recovery If you're enabling PITR on a primary instance, you can also configure the number of days for which you want to retain transaction logs by adding the following parameter: --retained-transaction-log-days = RETAINED TRANSACTION LOG DAYS Confirm your change: gcloud sql instances describe INSTANCE NAME In the backupConfiguration section, you see pointInTimeRecoveryEnabled: true if the change was successful.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)
- Source ID: `site-docs-reference-required-4`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Perform a PITR using the backup vault If your Cloud SQL instance is enabled to use enhanced backups , then you can perform point-in-time-recovery for your instance using the backup vault.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Perform point-in-time recovery (PITR) Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server You can use point-in-time-recovery (PITR) to restore your primary Cloud SQL instances whether the instance is live, or is deleted.
- Restore using PITR Before using any of the request data, make the following replacements: project-id : the project ID target-instance-id : the target instance ID source-instance-id : the source instance ID source-instance-deletion-time : the deletion time of the source instance restore-timestamp the point-in-time which you want to restore the instance In the JSON request, you optionally can specify up to one specific database name as the following: "databaseNames": "my-database" HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "kind": "sql#cloneContext", "destinationInstanceName": " target-instance-id ", "sourceInstanceDeletionTime: " source-instance-deletion-time ", "pointInTime": " restore-timestamp " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Restore an instance using a backup \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
- Source ID: `site-docs-reference-required-4`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Warning: The restore process overwrites all of the current data on the instance, including previous point-in-time recovery (PITR) logs.
- Warning: The restore process overwrites all of the current data on the instance, including previous point-in-time recovery (PITR) logs.
- Warning: The restore process overwrites all of the current data on the instance, including previous point-in-time recovery (PITR) logs.
- Warning: The restore process overwrites all of the current data on the instance, including previous point-in-time recovery (PITR) logs.

