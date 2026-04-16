---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.867Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cross-project point-in-time recovery"
feature_slug: "cross-project-point-in-time-recovery"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
keywords:
  - "cross"
  - "project"
  - "point"
  - "time"
  - "recovery"
  - "feature"
  - "lets"
  - "you"
---

# Cross-project point-in-time recovery

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature lets you restore a Cloud SQL instance to a different project than the source instance or backup vault project.

## Extended Definition

This feature lets you restore a Cloud SQL instance to a different project than the source instance or backup vault project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)

## Supporting Pages

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- Source ID: `site-docs-reference-3`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Perform a PITR using the backup vault If your Cloud SQL instance is enabled to use enhanced backups , then you can perform point-in-time-recovery for your instance using the backup vault.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID :pointInTimeRestore" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ TARGET INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " TARGET INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Perform a cross-project PITR With enhanced backups, you can restore a Cloud SQL instance to a project other than the one where either the source instance or backup vault is located.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID :pointInTimeRestore" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " TARGET INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 To perform point-in-time recovery using a data source from the backup vault, use the instances.pointInTimeRestore method with a POST request.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /getLatestRecoveryTime" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#getLatestRecoveryTime", "earliestRecoveryTime": "2023-06-10T17:23:59.648821586Z", "latestRecoveryTime": "2023-06-20T17:23:59.648821586Z" } Troubleshoot Issue Troubleshooting argument --point-in-time: Failed to parse date/time: Unknown string format: 2021-0928T30:54:03.094; received: 2021-0928T30:54:03.094Z OR Invalid value at 'body.clone context.point in time' (type.googleapis.com/google.protobuf.Timestamp), Field 'pointInTime', Invalid time format: Failed to parse input, The timestamp you provided is invalid.

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- Source ID: `site-docs-reference-required-5`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save . gcloud Deactivate point-in-time recovery: gcloud sql instances patch INSTANCE NAME \ --no-enable-bin-log Confirm your change: gcloud sql instances describe INSTANCE NAME In the backupConfiguration section, you see binaryLogEnabled: false if the change was successful.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure point-in-time recovery (PITR) Stay organized with collections Save and categorize content based on your preferences.
- MySQL uses binary logging as the transaction logs for point-in-time recovery (PITR).
- This page discusses point-in-time recovery (PITR) and automated backups .

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-reference-3`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server Cloud SQL lets you restore your instances from a backup, or by performing point-in-time recovery (PITR).
- Point-in-time recovery (PITR) PITR lets you restore your instance to a specific time of the database.
- What's next Perform a restore from a backup Use point-in-time recovery (PITR) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For step-by-step instructions for performing PITR, see [Use point-in-time recovery (PITR)][perform-pitr].

