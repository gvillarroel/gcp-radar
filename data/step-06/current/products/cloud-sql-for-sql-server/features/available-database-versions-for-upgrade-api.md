---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.551Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Available database versions for upgrade API"
feature_slug: "available-database-versions-for-upgrade-api"
latest_feature_date: "2024-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/flags"
keywords:
  - "available"
  - "database"
  - "versions"
  - "upgrade"
  - "sql"
  - "lets"
  - "you"
  - "retrieve"
---

# Available database versions for upgrade API

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you retrieve the list of database versions available for upgrading a SQL Server instance.

## Extended Definition

Cloud SQL lets you retrieve the list of database versions available for upgrading a SQL Server instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- To see the available versions, click the Database version menu.
- The collation field (not shown in the following basic API call) lets you to set a default value for the type of collation used for the databases in your instance.
- The collation field (not shown in the following basic API call) lets you set a default value for the type of collation used for the databases in your instance.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .

### "Restore an instance overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- Source ID: `site-docs-reference-required-4`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Point-in-time recovery (PITR) PITR lets you restore your instance to a specific time of the database.
- Note: If your instance has a large number of transaction logs on disk and you want to save disk space, then we recommend that you slowly reduce the value of the following: transactionLogRetentionDays configuration setting expire logs days database flag binlog expire logs seconds database flag For example, to prevent performance issues, reduce the value of the flags by one day, each day, over several days.
- When you restore an instance using a backup, you can do the following: Restore to a new instance Restore to an existing instance Restore to an instance in another project or region In the event of an outage, you can still retrieve a list of backups in a particular project to restore from.
- If you upgrade a Cloud SQL Enterprise edition instance after May 31, 2024 that stores transaction logs for PITR on disk to Cloud SQL Enterprise Plus edition, then the upgrade process switches the storage location of the transaction logs used for PITR to Cloud Storage for you.

### "Configure database flags \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- 32767 No Special flags This section contains additional information about Cloud SQL for SQL Server flags. max degree of parallelism (MAXDOP) Max degree of parallelism (MAXDOP) is a Microsoft database flag available for use in Cloud SQL for SQL Server.
- 32767 No contained database authentication boolean on off No cross db ownership chaining boolean on off This flag is deprecated for all SQL Server versions.
- If left to the default value of 0 , then the database instance uses all available processors.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To clear all flags for an existing instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "databaseFlags": [] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

