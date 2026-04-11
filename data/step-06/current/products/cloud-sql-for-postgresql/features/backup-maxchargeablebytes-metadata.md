---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.312Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Backup maxChargeableBytes metadata"
feature_slug: "backup-maxchargeablebytes-metadata"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups"
keywords:
  - "backup"
  - "maxchargeablebytes"
  - "metadata"
  - "describe"
  - "responses"
  - "now"
  - "include"
  - "to"
---

# Backup maxChargeableBytes metadata

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Backup describe responses now include maxChargeableBytes to show the maximum billable size for a backup.

## Extended Definition

Backup describe responses now include maxChargeableBytes to show the maximum billable size for a backup.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)

## Supporting Pages

### "Restore an instance using a backup \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- To restore your instance using a backup to an instance in a different project or region, do the following: gcloud To restore a backup from a backup vault to an existing instance, do the following: If restoring to an existing instance, determine if the target instance has any read replicas using the gcloud sql instances describe command: gcloud sql instances describe TARGET INSTANCE NAME Replace the following: TARGET INSTANCE NAME : the name of the target instance you want to restore your backup to.
- To restore your instance using a backup to an instance in a different project or region, do the following: gcloud If restoring to an existing instance, determine if the target instance has any read replicas using the gcloud sql instances describe command: gcloud sql instances describe TARGET INSTANCE NAME Replace the following: TARGET INSTANCE NAME : the name of the target instance you want to restore your backup to.
- You'll need to include the full path of the backup in this field.
- You'll need to include the full path of the backup in this field.

### "Manage backups for deleted instances \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-backups-deleted-instance)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To manage retained backups in a Google Cloud project, you need the following permissions: Console Task Required permissions List backups cloudsql.backupRuns.list Describe a backup cloudsql.backupRuns.get Update a backup cloudsql.backupRuns.update Delete a backup cloudsql.backupRuns.delete gcloud Action Command Required permissions List backups gcloud sql backups list cloudsql.backupRuns.list Describe a backup gcloud sql backups describe cloudsql.backupRuns.get Update a backup gcloud sql backups patch cloudsql.backupRuns.update Delete a backup gcloud sql backups delete cloudsql.backupRuns.delete REST Action Method Required permissions List backups backups.listBackup cloudsql.backupRuns.list Describe a backup backups.getBackup cloudsql.backupRuns.get Update a backup backups.updateBackup cloudsql.backupRuns.update Delete a backup backups.deleteBackup cloudsql.backupRuns.delete List all backups for a deleted instance You can see a list of all retained and final backups for a deleted instance for your Google Cloud console project.
- To view details about a specific retained backup, use the gcloud sql backups describe command: gcloud sql backups describe BACKUP NAME --project= PROJECT ID Replace the following: BACKUP NAME : the name of your retained backup.
- Backups include details such as the name of the backup, the instance it belonged to, the type of backup, and the time the instance was deleted.
- Retained backups include automated and on-demand backups that were taken when the instance was live.

### "Manage standard backups \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "location": "us", "description": "view details about a backup", "maxChargeableBytes": " BYTE NUMBER ", "instance": " INSTANCE NAME " } Configure final backups You can set your instance to automatically take a backup by enabling the final backup instance setting and setting the final backup retention period .
- To list the details of one backup, use the ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- View the details of a backup by specifying the backup ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 You can also use the APIs Explorer on the BackupRuns:list page to send the REST API request.
- To view the size of a backup, use the gcloud sql backups describe command: gcloud sql backups describe BACKUP ID \ --instance = INSTANCE NAME \ --project = PROJECT ID Make the following replacements: BACKUP ID : the ID of the backup.

