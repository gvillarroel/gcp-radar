---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.899Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Lagging replica recreation"
feature_slug: "lagging-replica-recreation"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "lagging"
  - "replica"
  - "recreation"
  - "lets"
  - "sql"
  - "mysql"
  - "recreate"
  - "when"
---

# Lagging replica recreation

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Lagging replica recreation lets Cloud SQL for MySQL recreate a replica when replication falls behind a predefined threshold.

## Extended Definition

Lagging replica recreation lets Cloud SQL for MySQL recreate a replica when replication falls behind a predefined threshold.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl If you are using MySQL version 5.7 or later, enable binary logging: To enable binary logging, save the following JSON in a file named request.JSON, then invoke the curl command to enable binary logging. { "settings" : { "backupConfiguration" : { "enabled" : false, "binaryLogEnabled" : true } } } To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ REPLICA INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "CREATE REPLICA", "name": " OPERATION ID ", "targetId": " REPLICA INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure read replicas for IAM database authentication Read replicas do not have the cloudsql iam authentication flag enabled automatically when it is enabled on the primary instance.
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "masterInstanceName": " PRIMARY INSTANCE NAME ", "project": " PROJECT ID ", "databaseVersion": "MYSQL 8 0", "name": " REPLICA INSTANCE NAME ", "region": " REGION NAME ", "kind": "sql#instance", "settings": { "tier": " MACHINE TYPE ", "availabilityType": " AVAILABILITY TYPE ", "settingsVersion": 0, "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ ALLOWED PROJECTS ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "ASYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "masterInstanceName": " PRIMARY INSTANCE NAME ", "project": " PROJECT ID ", "databaseVersion": "MYSQL 8 0", "name": " REPLICA INSTANCE NAME ", "region": " REGION NAME ", "kind": "sql#instance", "settings": { "tier": " MACHINE TYPE ", "availabilityType": " AVAILABILITY TYPE ", "settingsVersion": 0, "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ ALLOWED PROJECTS ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "ASYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Restore an instance using a backup \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restoring)
- Source ID: `site-docs-reference-required-5`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE ID /restoreBackup" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "RESTORE BACKUP", "name": " OPERATION ID ", "targetId": " TARGET INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 When restoring to an existing instance, all replicas must be deleted from your target instance prior to restoring.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /restoreBackup" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ TARGET INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "RESTORE BACKUP", "name": " OPERATION ID ", "targetId": " TARGET INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } After the restore operation completes, recreate any replicas that you deleted in this procedure.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id /restoreBackup" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "RESTORE BACKUP", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } After the restore operation completes, recreate any replicas that you deleted in this procedure.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id /restoreBackup" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "RESTORE BACKUP", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } After the restore operation completes, recreate any replicas that you deleted in this procedure.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- The following command lets you check the redo log size: SHOW VARIABLES LIKE 'innodb log file%'; You can check the size of general log , if it is enabled, with the help of this command: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) AS GB from mysql.general log; If needed, you can truncate your log tables by using the API.
- To learn more about using mysqldump flags for managed import migration, see Allowed and default initial sync flags The initial data migration was successful, but no data is being replicated.
- Create a new dump file using the correct flag settings, and configure the external replica using that file Connect to your mysql client through a Compute Engine instance .

