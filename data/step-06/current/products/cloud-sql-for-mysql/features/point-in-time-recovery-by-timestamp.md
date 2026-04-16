---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.963Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Point-in-time recovery by timestamp"
feature_slug: "point-in-time-recovery-by-timestamp"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/best-practices"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr"
keywords:
  - "point"
  - "time"
  - "recovery"
  - "timestamp"
  - "sql"
  - "mysql"
  - "supports"
---

# Point-in-time recovery by timestamp

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports point-in-time recovery using a timestamp.

## Extended Definition

Cloud SQL for MySQL supports point-in-time recovery using a timestamp.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)

## Supporting Pages

### "View audit logs for automated backups \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- Source ID: `site-docs-reference-3`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See how to perform a point-in-time recovery .
- Learn more about point-in-time recovery .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://logging.googleapis.com/v2/entries:list" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "entries": [ { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "message": "OK" }, "authenticationInfo": {}, "requestMetadata": { "requestAttributes": {}, "destinationAttributes": {} }, "serviceName": "cloudsql.googleapis.com", "methodName": "cloudsql.instances.automatedBackup", "resourceName": "projects/ PROJECT ID /instances/ INSTANCE NAME ", "metadata": { "windowStartTime": "2022-12-15T13:00:00Z", "message": "", "windowStatus": "STATUS SUCCEEDED", "@type": "type.googleapis.com/speckle.AutomatedBackupEventLog", "windowEndTime": "2022-12-15T17:00:00Z", "backupCompletionTime": "2022-12-15T14:11:57.347Z", "backupStartTime": "2022-12-15T14:11:16.631Z" } }, "insertId": " LOG ENTRY UNIQUE IDENTIFIER ", "resource": { "type": "cloudsql database", "labels": { "region": " REGION NAME ", "project id": " PROJECT ID ", "database id": " DATABASE ID " } }, "timestamp": "2022-12-15T14:11:57.391565Z", "severity": "INFO", "logName": "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event", "receiveTimestamp": "2022-12-15T14:11:57.785814800Z" }, ], } For more information about LOG ENTRY UNIQUE IDENTIFIER for the insertId field, see LogEntry .
- HTTP method and URL: POST https://logging.googleapis.com/v2/entries:list Request JSON body: { "resourceNames": [ "projects/ PROJECT ID " ], "pageSize": 5, "filter": "logName=projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event AND protoPayload.methodName = cloudsql.instances.automatedBackup AND resource.type=cloudsql database", "orderBy": "timestamp desc" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### General best practices \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices)
- Source ID: `site-docs-reference-required-5`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A point-in-time recovery always creates a new instance; you cannot perform a point-in-time recovery to an existing instance.
- Backups, point-in-time recovery, and exports are ways to provide data redundancy and protection.
- Point-in-time recovery helps you recover an instance to a specific point in time.
- If you delete and recreate instances regularly, use a timestamp in the instance ID to increase the likelihood that new instance IDs are usable.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- Source ID: `site-docs-reference-3`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /getLatestRecoveryTime" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#getLatestRecoveryTime", "earliestRecoveryTime": "2023-06-10T17:23:59.648821586Z", "latestRecoveryTime": "2023-06-20T17:23:59.648821586Z" } Troubleshoot Issue Troubleshooting argument --point-in-time: Failed to parse date/time: Unknown string format: 2021-0928T30:54:03.094; received: 2021-0928T30:54:03.094Z OR Invalid value at 'body.clone context.point in time' (type.googleapis.com/google.protobuf.Timestamp), Field 'pointInTime', Invalid time format: Failed to parse input, The timestamp you provided is invalid.
- If you try to create a PITR clone at a time after the latest recoverable time, then the following error message is given: The timestamp for point-in-time recovery is after the latest recovery time of Timestamp of latest recovery time .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Perform point-in-time recovery (PITR) Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server You can use point-in-time-recovery (PITR) to restore your primary Cloud SQL instances whether the instance is live, or is deleted.

