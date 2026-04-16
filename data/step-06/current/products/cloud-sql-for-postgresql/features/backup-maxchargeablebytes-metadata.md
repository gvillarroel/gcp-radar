---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.761Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Backup maxChargeableBytes metadata"
feature_slug: "backup-maxchargeablebytes-metadata"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring"
keywords:
  - "maxchargeablebytes"
  - "responses"
  - "metadata"
  - "describe"
  - "show"
  - "include"
  - "backup"
---

# Backup maxChargeableBytes metadata

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Backup describe responses now include maxChargeableBytes to show the maximum billable size for a backup.

## Extended Definition

Backup describe responses now include maxChargeableBytes to show the maximum billable size for a backup.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)

## Supporting Pages

### "Manage standard backups \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "location": "us", "description": "view details about a backup", "maxChargeableBytes": " BYTE NUMBER ", "instance": " INSTANCE NAME " } Configure final backups You can set your instance to automatically take a backup by enabling the final backup instance setting and setting the final backup retention period .
- To list the details of one backup, use the ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- View the details of a backup by specifying the backup ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 You can also use the APIs Explorer on the BackupRuns:list page to send the REST API request.
- To view the size of a backup, use the gcloud sql backups describe command: gcloud sql backups describe BACKUP ID \ --instance = INSTANCE NAME \ --project = PROJECT ID Make the following replacements: BACKUP ID : the ID of the backup.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances Flags High availability Import and export Integrate with Vertex AI Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- These tables are not included in a restore from a backup: The contents of unlogged tables doesn't survive failover on an HA instance.
- Check the endpoint's status. gcloud To check the status, use the gcloud compute forwarding-rules describe command. gcloud compute forwarding-rules describe ENDPOINT NAME \ --project = PROJECT ID \ --region = REGION NAME \ grep pscConnectionStatus Make the following replacements: ENDPOINT NAME : the name of the endpoint PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint REGION NAME : the region name for the endpoint REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint REGION NAME : the name of the region ENDPOINT NAME : the name of the endpoint HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Use the following command to verify the accepted connections in your network attachment: gcloud compute network-attachments describe default --region = REGION ID If the Private Service Connect interface isn't on the accepted list, then update your network attachment .

### "Restore an instance using a backup \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restoring)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To restore your instance using a backup to an instance in a different project or region, do the following: gcloud To restore a backup from a backup vault to an existing instance, do the following: If restoring to an existing instance, determine if the target instance has any read replicas using the gcloud sql instances describe command: gcloud sql instances describe TARGET INSTANCE NAME Replace the following: TARGET INSTANCE NAME : the name of the target instance you want to restore your backup to.
- To restore your instance using a backup to an instance in a different project or region, do the following: gcloud If restoring to an existing instance, determine if the target instance has any read replicas using the gcloud sql instances describe command: gcloud sql instances describe TARGET INSTANCE NAME Replace the following: TARGET INSTANCE NAME : the name of the target instance you want to restore your backup to.
- You'll need to include the full path of the backup in this field.
- You'll need to include the full path of the backup in this field.

