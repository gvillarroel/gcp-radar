---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.307Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "AlloyDB cluster creation from Cloud SQL backup"
feature_slug: "alloydb-cluster-creation-from-cloud-sql-backup"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups"
keywords:
  - "alloydb"
  - "cluster"
  - "creation"
  - "from"
  - "sql"
  - "backup"
  - "backups"
  - "can"
---

# AlloyDB cluster creation from Cloud SQL backup

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL backups can be used to set up AlloyDB clusters.

## Extended Definition

Cloud SQL backups can be used to set up AlloyDB clusters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For standard backups, since instance names can be used after an instance is deleted in Cloud SQL, retained backups are stored in your Google Cloud project with a field called instance deletion time .
- Backups versus exports Backups are managed by Cloud SQL according to retention policies, and are stored separately from the Cloud SQL instance.
- Unfortunately, this means that the currently visible backups are the only automated backups you can restore from.
- For automated backups, retention can range from 1 day to 10 years , depending on your instance's backup option.

### "Method: Backups.ListBackups \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/Backups/ListBackups)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "backups" : [ { object ( Backup ) } ] , "nextPageToken" : string , "warnings" : [ { object ( ApiWarning ) } ] } Fields backups[] object ( Backup ) A list of backups. nextPageToken string A token, which can be sent as pageToken to retrieve the next page.
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback Method: Backups.ListBackups Stay organized with collections Save and categorize content based on your preferences.
- Any values that you set, which are greater than 2,000, are changed to 2,000. pageToken string A page token, received from a previous Backups.ListBackups call.
- HTTP request GET https://sqladmin.googleapis.com/v1/{parent=projects/ }/backups The URL uses gRPC Transcoding syntax.

### "Manage standard backups \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/manage-standard-backups)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Select Backups from the SQL navigation menu to view recent backups, along with creation time and type of backup. gcloud List the backups of the instance: gcloud sql backups list \ --instance INSTANCE NAME You can filter and control the results using the standard list parameters.
- View the details of a backup by specifying the backup ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 You can also use the APIs Explorer on the BackupRuns:list page to send the REST API request.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "kind": "sql#backupRun", "enqueuedTime": "2024-04-24T22:16:02.208Z", "id": " INSTANCE ID ", "startTime": "2020-01-21T11:25:33.858Z", "endTime": "2020-01-21T11:26:18.663Z", "type": "AUTOMATED", "selfLink": "https://sqladmin.googleapis.com/v1/projects/instances/ INSTANCE NAME /backupRuns/ BACKUP ID ", "location": "us", "description": "view details about a backup", "maxChargeableBytes": " BYTE NUMBER ", "instance": " INSTANCE NAME " } Configure final backups You can set your instance to automatically take a backup by enabling the final backup instance setting and setting the final backup retention period .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure retained backups You can set your instance to automatically retain all automated and on-demand backups when you delete your instance.

