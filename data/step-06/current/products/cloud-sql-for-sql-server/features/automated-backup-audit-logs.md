---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.567Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Automated backup audit logs"
feature_slug: "automated-backup-audit-logs"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups"
keywords:
  - "automated"
  - "backup"
  - "audit"
  - "logs"
  - "backups"
  - "let"
  - "users"
  - "verify"
---

# Automated backup audit logs

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Audit logs for automated backups let users verify backup completion status and create log-based alerts.

## Extended Definition

Audit logs for automated backups let users verify backup completion status and create log-based alerts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)

## Supporting Pages

### "View audit logs for automated backups \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://logging.googleapis.com/v2/entries:list" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "entries": [ { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "message": "OK" }, "authenticationInfo": {}, "requestMetadata": { "requestAttributes": {}, "destinationAttributes": {} }, "serviceName": "cloudsql.googleapis.com", "methodName": "cloudsql.instances.automatedBackup", "resourceName": "projects/ PROJECT ID /instances/ INSTANCE NAME ", "metadata": { "windowStartTime": "2022-12-15T13:00:00Z", "message": "", "windowStatus": "STATUS SUCCEEDED", "@type": "type.googleapis.com/speckle.AutomatedBackupEventLog", "windowEndTime": "2022-12-15T17:00:00Z", "backupCompletionTime": "2022-12-15T14:11:57.347Z", "backupStartTime": "2022-12-15T14:11:16.631Z" } }, "insertId": " LOG ENTRY UNIQUE IDENTIFIER ", "resource": { "type": "cloudsql database", "labels": { "region": " REGION NAME ", "project id": " PROJECT ID ", "database id": " DATABASE ID " } }, "timestamp": "2022-12-15T14:11:57.391565Z", "severity": "INFO", "logName": "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event", "receiveTimestamp": "2022-12-15T14:11:57.785814800Z" }, ], } For more information about LOG ENTRY UNIQUE IDENTIFIER for the insertId field, see LogEntry .
- Click the metadata field. gcloud To filter for audit logs for automated backups of Cloud SQL instances, run the following query: gcloud logging read \ "logName=projects/ PROJECT NAME /logs/cloudaudit.googleapis.com%2Fsystem event AND protoPayload.methodName=cloudsql.instances.automatedBackup AND resource.type=cloudsql database" \ --project = PROJECT NAME Replace PROJECT NAME with your Google Cloud project's name.
- Go to Logs Explorer To filter for audit logs for automated backups of Cloud SQL instances, run the following query: logName = "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event" protoPayload.methodName = "cloudsql.instances.automatedBackup" resource.type = "cloudsql database" Replace PROJECT ID with your Google Cloud project's ID.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback View audit logs for automated backups Stay organized with collections Save and categorize content based on your preferences.

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recovery backups Cloud SQL attempts to retain at least one last daily backup of every active instance, if there are no good backups available as part of the automated backup policy.
- Automated backups Automated backups are taken on a scheduled cadence, such as hourly, daily, weekly, or monthly, while your instance is running.
- It's also recommended that you don't manually delete any automated backups because they're needed to support point-in-time recovery .
- To keep backups indefinitely, you can create an on-demand backup , as they are not deleted in the same way as automated backups.

### "Manage standard backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta To update the final backup retention days setting, do the following: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID RETENTION DAYS : the number of days to retain final backups HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "FinalBackupConfig": { "retentionDays: RETENTION DAYS } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta To enable final backups, do the following: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID RETENTION DAYS : the number of days to retain final backups HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "FinalBackupConfig": { "enabled": true, "retentionDays: RETENTION DAYS } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta To disable final backups, do the following: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "FinalBackupConfig": { "enabled": false } }s } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta To disable retained backups, do the following: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "retainBackupsOnDelete": true } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

