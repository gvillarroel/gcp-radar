---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.869Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Automated backup audit logs"
feature_slug: "automated-backup-audit-logs"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
keywords:
  - "automated"
  - "backup"
  - "audit"
  - "logs"
  - "for"
  - "backups"
  - "let"
  - "users"
---

# Automated backup audit logs

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Audit logs for automated backups let users verify backup completion status and create log-based alerts.

## Extended Definition

Audit logs for automated backups let users verify backup completion status and create log-based alerts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Supporting Pages

### "View audit logs for automated backups \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/view-audit-logs-for-automated-backups)
- Source ID: `site-iam-reference`
- Final score: 314
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://logging.googleapis.com/v2/entries:list" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "entries": [ { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "message": "OK" }, "authenticationInfo": {}, "requestMetadata": { "requestAttributes": {}, "destinationAttributes": {} }, "serviceName": "cloudsql.googleapis.com", "methodName": "cloudsql.instances.automatedBackup", "resourceName": "projects/ PROJECT ID /instances/ INSTANCE NAME ", "metadata": { "windowStartTime": "2022-12-15T13:00:00Z", "message": "", "windowStatus": "STATUS SUCCEEDED", "@type": "type.googleapis.com/speckle.AutomatedBackupEventLog", "windowEndTime": "2022-12-15T17:00:00Z", "backupCompletionTime": "2022-12-15T14:11:57.347Z", "backupStartTime": "2022-12-15T14:11:16.631Z" } }, "insertId": " LOG ENTRY UNIQUE IDENTIFIER ", "resource": { "type": "cloudsql database", "labels": { "region": " REGION NAME ", "project id": " PROJECT ID ", "database id": " DATABASE ID " } }, "timestamp": "2022-12-15T14:11:57.391565Z", "severity": "INFO", "logName": "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event", "receiveTimestamp": "2022-12-15T14:11:57.785814800Z" }, ], } For more information about LOG ENTRY UNIQUE IDENTIFIER for the insertId field, see LogEntry .
- Click the metadata field. gcloud To filter for audit logs for automated backups of Cloud SQL instances, run the following query: gcloud logging read \ "logName=projects/ PROJECT NAME /logs/cloudaudit.googleapis.com%2Fsystem event AND protoPayload.methodName=cloudsql.instances.automatedBackup AND resource.type=cloudsql database" \ --project = PROJECT NAME Replace PROJECT NAME with your Google Cloud project's name.
- Go to Logs Explorer To filter for audit logs for automated backups of Cloud SQL instances, run the following query: logName = "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event" protoPayload.methodName = "cloudsql.instances.automatedBackup" resource.type = "cloudsql database" Replace PROJECT ID with your Google Cloud project's ID.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback View audit logs for automated backups Stay organized with collections Save and categorize content based on your preferences.

### "Manage backups for deleted instances \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ?update mask=description" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2024-02-15T00:10:22.078Z", "operationType": "UPDATE BACKUP", "name": " OPERATION ID ", "targetId": " BACKUP ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Delete a backup associated with a deleted instance You can delete a final or retained on-demand and automated backup for a deleted instance at any time.
- However, for on-demand or automated backups that are retained after instance deletion, you can only update the description of for these backups.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Update a retained or final backup after instance deletion After you delete an instance, you can update the settings for any retained or final backups associated with that instance that are stored at the project level.
- Before you begin To manage retained backups in a Google Cloud project, you need the following permissions: Console Task Required permissions List backups cloudsql.backupRuns.list Describe a backup cloudsql.backupRuns.get Update a backup cloudsql.backupRuns.update Delete a backup cloudsql.backupRuns.delete gcloud Action Command Required permissions List backups gcloud sql backups list cloudsql.backupRuns.list Describe a backup gcloud sql backups describe cloudsql.backupRuns.get Update a backup gcloud sql backups patch cloudsql.backupRuns.update Delete a backup gcloud sql backups delete cloudsql.backupRuns.delete REST Action Method Required permissions List backups backups.listBackup cloudsql.backupRuns.list Describe a backup backups.getBackup cloudsql.backupRuns.get Update a backup backups.updateBackup cloudsql.backupRuns.update Delete a backup backups.deleteBackup cloudsql.backupRuns.delete List all backups for a deleted instance You can see a list of all retained and final backups for a deleted instance for your Google Cloud console project.

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For standard backups, since instance names can be used after an instance is deleted in Cloud SQL, retained backups are stored in your Google Cloud project with a field called instance deletion time .
- For example, if your instance's automated backup retention setting was set to 7, then the latest automated backup is deleted 7 days after the instance deletion.
- For standard backups, on-demand backups are kept indefinitely until either the backup is manually deleted, or the project containing the backup is deleted.
- To restore your instance, including the IP address in the case of accidental deletion, Cloud SQL retains the backups of deleted instances for four days.

