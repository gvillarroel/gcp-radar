---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.935Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Point-in-time recovery log storage in Cloud Storage"
feature_slug: "point-in-time-recovery-log-storage-in-cloud-storage"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr"
keywords:
  - "point"
  - "time"
  - "recovery"
  - "log"
  - "storage"
  - "sql"
  - "mysql"
  - "supports"
---

# Point-in-time recovery log storage in Cloud Storage

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports storing point-in-time recovery logs in Cloud Storage.

## Extended Definition

Cloud SQL for MySQL supports storing point-in-time recovery logs in Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)

## Supporting Pages

### "View audit logs for automated backups \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- Source ID: `site-docs-reference-3`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See how to perform a point-in-time recovery .
- Learn more about point-in-time recovery .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://logging.googleapis.com/v2/entries:list" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "entries": [ { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "message": "OK" }, "authenticationInfo": {}, "requestMetadata": { "requestAttributes": {}, "destinationAttributes": {} }, "serviceName": "cloudsql.googleapis.com", "methodName": "cloudsql.instances.automatedBackup", "resourceName": "projects/ PROJECT ID /instances/ INSTANCE NAME ", "metadata": { "windowStartTime": "2022-12-15T13:00:00Z", "message": "", "windowStatus": "STATUS SUCCEEDED", "@type": "type.googleapis.com/speckle.AutomatedBackupEventLog", "windowEndTime": "2022-12-15T17:00:00Z", "backupCompletionTime": "2022-12-15T14:11:57.347Z", "backupStartTime": "2022-12-15T14:11:16.631Z" } }, "insertId": " LOG ENTRY UNIQUE IDENTIFIER ", "resource": { "type": "cloudsql database", "labels": { "region": " REGION NAME ", "project id": " PROJECT ID ", "database id": " DATABASE ID " } }, "timestamp": "2022-12-15T14:11:57.391565Z", "severity": "INFO", "logName": "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event", "receiveTimestamp": "2022-12-15T14:11:57.785814800Z" }, ], } For more information about LOG ENTRY UNIQUE IDENTIFIER for the insertId field, see LogEntry .
- HTTP method and URL: POST https://logging.googleapis.com/v2/entries:list Request JSON body: { "resourceNames": [ "projects/ PROJECT ID " ], "pageSize": 5, "filter": "logName=projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event AND protoPayload.methodName = cloudsql.instances.automatedBackup AND resource.type=cloudsql database", "orderBy": "timestamp desc" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- Source ID: `site-docs-reference-required-5`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure point-in-time recovery (PITR) Stay organized with collections Save and categorize content based on your preferences.
- MySQL uses binary logging as the transaction logs for point-in-time recovery (PITR).
- Click Save . gcloud Deactivate point-in-time recovery: gcloud sql instances patch INSTANCE NAME \ --no-enable-bin-log Confirm your change: gcloud sql instances describe INSTANCE NAME In the backupConfiguration section, you see binaryLogEnabled: false if the change was successful.
- This page discusses point-in-time recovery (PITR) and automated backups .

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

