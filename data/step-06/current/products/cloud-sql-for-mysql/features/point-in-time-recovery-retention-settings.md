---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.979Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Point-in-time recovery retention settings"
feature_slug: "point-in-time-recovery-retention-settings"
latest_feature_date: "2020-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr"
keywords:
  - "point"
  - "time"
  - "recovery"
  - "retention"
  - "settings"
  - "sql"
  - "mysql"
  - "supports"
---

# Point-in-time recovery retention settings

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports configurable log retention periods for point-in-time recovery from 1 to 7 days.

## Extended Definition

Cloud SQL for MySQL supports configurable log retention periods for point-in-time recovery from 1 to 7 days.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)

## Supporting Pages

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ERROR PITR BACKUP RUN NOT DELETABLE This upgrade backup cannot be deleted because it's within the point-in-time recovery retention period for the instance.
- You can delete it earlier if you adjust the retention period or disable point-in-time recovery.
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Cloud SQL Admin API error messages Stay organized with collections Save and categorize content based on your preferences.
- To disable deletion protection, update the instance settings with deletionProtectionEnabled set to false.

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- Source ID: `site-docs-reference-required-5`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To enable PITR, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance-pitr" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" backup configuration { enabled = true binary log enabled = true start time = "20:55" transaction log retention days = "3" } } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure point-in-time recovery (PITR) Stay organized with collections Save and categorize content based on your preferences.
- MySQL uses binary logging as the transaction logs for point-in-time recovery (PITR).
- Click Save . gcloud Deactivate point-in-time recovery: gcloud sql instances patch INSTANCE NAME \ --no-enable-bin-log Confirm your change: gcloud sql instances describe INSTANCE NAME In the backupConfiguration section, you see binaryLogEnabled: false if the change was successful.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- Source ID: `site-docs-reference-3`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Perform point-in-time recovery (PITR) Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server You can use point-in-time-recovery (PITR) to restore your primary Cloud SQL instances whether the instance is live, or is deleted.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Perform a PITR using the backup vault If your Cloud SQL instance is enabled to use enhanced backups , then you can perform point-in-time-recovery for your instance using the backup vault.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID :pointInTimeRestore" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " TARGET INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To perform point-in-time recovery using a data source from the backup vault, use the instances.pointInTimeRestore method with a POST request.

