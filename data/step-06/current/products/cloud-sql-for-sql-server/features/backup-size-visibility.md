---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.546Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Backup size visibility"
feature_slug: "backup-size-visibility"
latest_feature_date: "2024-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore"
keywords:
  - "backup"
  - "size"
  - "visibility"
  - "sql"
  - "lets"
  - "you"
  - "view"
  - "instance"
---

# Backup size visibility

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you view the size of an instance backup.

## Extended Definition

Cloud SQL lets you view the size of an instance backup.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.
- This field lets you identify whether a particular backup belongs to a live or deleted instance.
- To view your instance's final backup instance configuration, see View instance information .
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.

### "Manage backups for deleted instances \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-backups-deleted-instance)
- Source ID: `site-docs-reference-required-4`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } View details for a retained backup Use this example to view the details of a retained or final backup.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "state": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "This is a final backup.", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } View details for a backup Use this example to view the details of a retained or final backup.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } Update a retained or final backup after instance deletion After you delete an instance, you can update the settings for any retained or final backups associated with that instance that are stored at the project level.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /backups/ BACKUP ID ", "kind": "sql#backup", "status": "SUCCESSFUL", "backupInterval": { "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", } "type": "FINAL", "instance": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /backups/ BACKUP ID ", "location": "us" "description": "final backup", "backupKind": "SNAPSHOT", "dataDiskSizeGB": "10", "expiryTime": "2020-01-30T11:26:18.663Z", "backup run": "projects/ PROJECT ID /instances/ INSTANCE ID /backupRuns/ BACKUP RUN ID ", "satisfies pzs": false, "satisfies pzi": false } REST v1beta4 Get a list of all retained backs Use this example to get a list of all retained and final backups associated Google Cloud project.

### "Restore an instance overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- Source ID: `site-docs-reference-required-4`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This lets you recover an instance to a specific period or time by either restoring the back to an existing instance, or restoring the backup to a new instance.
- Cloud SQL always sets the storage capacity of the target instance to the maximum value of the size of both the configured disk and the backup disk.
- MySQL PostgreSQL SQL Server Cloud SQL lets you restore your instances from a backup, or by performing point-in-time recovery (PITR).
- This means that whether restoring a backup to a new or existing instance, the instance will auto resize storage capacity as needed.

