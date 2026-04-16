---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.766Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Preferred zone selection for point-in-time recovery"
feature_slug: "preferred-zone-selection-for-point-in-time-recovery"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr"
keywords:
  - "preferred"
  - "zone"
  - "selection"
  - "restore"
  - "recovery"
  - "point"
  - "time"
---

# Preferred zone selection for point-in-time recovery

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Point-in-time recovery can restore zonal and regional instances into specified preferred primary and secondary zones.

## Extended Definition

Point-in-time recovery can restore zonal and regional instances into specified preferred primary and secondary zones.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)

## Supporting Pages

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In all cases, you can restore the instance to a different primary or secondary zone by providing values for the preferred zones. gcloud Unavailable instance To get the earliest and latest time to which you can recover a Cloud SQL instance that's not available, run the following command: gcloud sql instances get-latest-recovery-time INSTANCE NAME Replace the following: INSTANCE NAME : the name of the instance you want to find the latest recovery time for.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID :pointInTimeRestore" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " TARGET INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To perform point-in-time recovery using a data source from the backup vault, use the instances.pointInTimeRestore method with a POST request.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " TARGET INSTANCE NAME ", "pointInTime": " DATE AND TIME STAMP ", "preferredZone": " ZONE NAME ", "preferredSecondaryZone": " SECONDARY ZONE NAME " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " TARGET INSTANCE NAME ", "pointInTime": " DATE AND TIME STAMP ", "preferredZone": " ZONE NAME ", "preferredSecondaryZone": " SECONDARY ZONE NAME " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Restore an instance overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Perform a restore from a backup Use point-in-time recovery (PITR) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- MySQL PostgreSQL SQL Server Cloud SQL lets you restore your instances from a backup, or by performing point-in-time recovery (PITR).
- Point-in-time recovery (PITR) PITR lets you restore your instance to a specific time of the database.
- If the zone in which the instance is configured isn't accessible, then you can restore the instance to a different primary or secondary zone by providing values for the preferred zones.

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "pointInTimeRecoveryEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "backupConfiguration": { "enabled": false, "pointInTimeRecoveryEnabled": false } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "pointInTimeRecoveryEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Terraform To enable PITR, use a Terraform resource . resource "google sql database instance" "postgres instance pitr" { name = "" region = "us-central1" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" backup configuration { enabled = true point in time recovery enabled = true start time = "20:55" transaction log retention days = "3" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

