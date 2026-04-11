---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.617Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Transaction log export"
feature_slug: "transaction-log-export"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
keywords:
  - "transaction"
  - "log"
  - "export"
  - "lets"
  - "you"
  - "pitr"
  - "logs"
  - "for"
---

# Transaction log export

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Transaction log export lets you export PITR transaction logs for Cloud SQL for SQL Server instances to Cloud Storage.

## Extended Definition

Transaction log export lets you export PITR transaction logs for Cloud SQL for SQL Server instances to Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)

## Supporting Pages

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export transaction logs You can export the transaction logs for all Cloud SQL for SQL Server instances that have point-in-time recovery (PITR) enabled and their logs stored in Cloud Storage. gcloud Create a Cloud Storage bucket for the export. gcloud storage buckets create gs:// BUCKET NAME --location = LOCATION NAME --project = PROJECT NAME This step isn't required, but strongly recommended, so you don't open up access to any other data.
- If you don't provide a start date and time and an end date and time for the parameters, then Cloud SQL exports all transaction logs within the log retention period in the Cloud Storage bucket.
- If you don't provide a start date and time and an end date and time for the parameters, then Cloud SQL exports all transaction logs in the Cloud Storage bucket.
- Export your database: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID BUCKET NAME : the Cloud Storage bucket name PATH TO DUMP FILE : the path to the SQL dump file DATABASE NAME 1 : the name of a database inside the Cloud SQL instance DATABASE NAME 2 : the name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /export Request JSON body: To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "View audit logs for automated backups \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://logging.googleapis.com/v2/entries:list" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "entries": [ { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "message": "OK" }, "authenticationInfo": {}, "requestMetadata": { "requestAttributes": {}, "destinationAttributes": {} }, "serviceName": "cloudsql.googleapis.com", "methodName": "cloudsql.instances.automatedBackup", "resourceName": "projects/ PROJECT ID /instances/ INSTANCE NAME ", "metadata": { "windowStartTime": "2022-12-15T13:00:00Z", "message": "", "windowStatus": "STATUS SUCCEEDED", "@type": "type.googleapis.com/speckle.AutomatedBackupEventLog", "windowEndTime": "2022-12-15T17:00:00Z", "backupCompletionTime": "2022-12-15T14:11:57.347Z", "backupStartTime": "2022-12-15T14:11:16.631Z" } }, "insertId": " LOG ENTRY UNIQUE IDENTIFIER ", "resource": { "type": "cloudsql database", "labels": { "region": " REGION NAME ", "project id": " PROJECT ID ", "database id": " DATABASE ID " } }, "timestamp": "2022-12-15T14:11:57.391565Z", "severity": "INFO", "logName": "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event", "receiveTimestamp": "2022-12-15T14:11:57.785814800Z" }, ], } For more information about LOG ENTRY UNIQUE IDENTIFIER for the insertId field, see LogEntry .
- Click the metadata field. gcloud To filter for audit logs for automated backups of Cloud SQL instances, run the following query: gcloud logging read \ "logName=projects/ PROJECT NAME /logs/cloudaudit.googleapis.com%2Fsystem event AND protoPayload.methodName=cloudsql.instances.automatedBackup AND resource.type=cloudsql database" \ --project = PROJECT NAME Replace PROJECT NAME with your Google Cloud project's name.
- Go to Logs Explorer To filter for audit logs for automated backups of Cloud SQL instances, run the following query: logName = "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event" protoPayload.methodName = "cloudsql.instances.automatedBackup" resource.type = "cloudsql database" Replace PROJECT ID with your Google Cloud project's ID.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback View audit logs for automated backups Stay organized with collections Save and categorize content based on your preferences.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- March 24, 2025 Feature You can export the transaction logs for all Cloud SQL for SQL Server instances that have point-in-time recovery (PITR) enabled and their logs stored in Cloud Storage .
- October 09, 2024 Feature You can export the transaction logs for point-in-time recovery (PITR) that Cloud SQL stores in Cloud Storage.
- Note: If your Cloud SQL for SQL Server instance is on the old network architecture, the transaction logs for PITR may still remain on disk until migrated to the new network architecture.
- To verify the storage of your instance's transaction logs for PITR, see Check the storage location of transaction logs used for PITR .

