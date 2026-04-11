---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.658Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "PITR transaction logs in Cloud Storage"
feature_slug: "pitr-transaction-logs-in-cloud-storage"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr"
keywords:
  - "pitr"
  - "transaction"
  - "logs"
  - "in"
  - "storage"
  - "sql"
  - "stores"
  - "point"
---

# PITR transaction logs in Cloud Storage

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL stores point-in-time recovery transaction logs in Cloud Storage.

## Extended Definition

Cloud SQL stores point-in-time recovery transaction logs in Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)

## Supporting Pages

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Check the storage location of transaction logs used for PITR You can check where your Cloud SQL instance is storing the transaction logs used for PITR. gcloud To determine whether your instance stores logs for PITR on disk or Cloud Storage, use the following command: gcloud sql instances describe INSTANCE NAME Replace INSTANCE NAME with the name of the instance.
- Enable PITR: gcloud sql instances patch INSTANCE NAME \ --enable-point-in-time-recovery If you're enabling PITR on a primary instance, you can also configure the number of days for which you want to retain transaction logs by adding the following parameter: --retained-transaction-log-days = RETAINED TRANSACTION LOG DAYS Confirm your change: gcloud sql instances describe INSTANCE NAME In the backupConfiguration section, you see pointInTimeRecoveryEnabled: true if the change was successful.
- The possible transaction log storage states are the following: DISK : the instance stores the transaction logs used for PITR on disk.
- CLOUD STORAGE : the instance stores the transaction logs used for PITR in Cloud Storage.

### "Restore an instance overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PITR limitations The following limitations are associated with your instance having PITR enabled and the size of your transaction logs on disk causing an issue for your instance: You can deactivate PITR and re-enable it to ensure that Cloud SQL stores logs in Cloud Storage in the same region as the instance.
- If you upgrade a Cloud SQL Enterprise edition instance after May 31, 2024 that stores transaction logs for PITR on disk to Cloud SQL Enterprise Plus edition, then the upgrade process switches the storage location of the transaction logs used for PITR to Cloud Storage for you.
- For PITR transaction logs that are stored on disk , that are being switched to Cloud Storage, or that are already switched to Cloud Storage, Cloud SQL retains the logs for the minimum value set for one of the following configurations: The transactionLogRetentionDays backup configuration setting The expire logs days or the binlog expire logs seconds flag Cloud SQL doesn't set any values for these flags if the transaction logs are stored on disk, are being switched to Cloud Storage, or have already been switched to Cloud Storage.
- Although an instance stores the transaction logs used for PITR in Cloud Storage, the instance also keeps a smaller number of duplicate transaction logs on disk to allow for replication of the logs to Cloud Storage.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/pitr)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Restore using PITR Before using any of the request data, make the following replacements: project-id : the project ID target-instance-id : the target instance ID source-instance-id : the source instance ID source-instance-deletion-time : the deletion time of the source instance restore-timestamp the point-in-time which you want to restore the instance In the JSON request, you optionally can specify up to one specific database name as the following: "databaseNames": "my-database" HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "kind": "sql#cloneContext", "destinationInstanceName": " target-instance-id ", "sourceInstanceDeletionTime: " source-instance-deletion-time ", "pointInTime": " restore-timestamp " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Restore using a PITR Before using any of the request data, make the following replacements: project-id : the project ID target-instance-id : the target instance ID source-instance-id : the source instance ID source-instance-deletion-time : the deletion time of the source instance restore-timestamp the point-in-time which you want to restore the instance HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "kind": "sql#cloneContext", "destinationInstanceName": " target-instance-id ", "sourceInstanceDeletionTime: " source-instance-deletion-time ", "pointInTime": " restore-timestamp " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID :pointInTimeRestore Request JSON body: { "datasource": " DATASOURCE ", "pointInTime": " PITR TIMESTAMP ", "targetInstanceName": " TARGET INSTANCE NAME ", "region": " REGION " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID :pointInTimeRestore Request JSON body: { "datasource": " DATASOURCE ", "pointInTime": " PITR TIMESTAMP ", "targetInstanceName": " TARGET INSTANCE NAME ", "region": " REGION " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

