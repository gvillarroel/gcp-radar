---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.556Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Bulk insert support"
feature_slug: "bulk-insert-support"
latest_feature_date: "2023-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/features"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "bulk"
  - "insert"
  - "sql"
  - "supports"
  - "server"
  - "importing"
  - "2022"
  - "instances"
---

# Bulk insert support

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports SQL Server bulk insert for importing data on SQL Server 2022 instances.

## Extended Definition

Cloud SQL supports SQL Server bulk insert for importing data on SQL Server 2022 instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For example, Cloud SQL for SQL Server supports change data capture (CDC) for the following database versions: SQL Server 2017 Standard SQL Server 2017 Enterprise SQL Server 2019 Standard SQL Server 2019 Enterprise SQL Server 2022 Standard SQL Server 2022 Enterprise When importing a CDC-enabled database, the KEEP CDC flag is retained.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "EXPORT", "exportContext": { "uri": {uri}, "databases": [ database name ], "kind": "sql#exportContext", "fileType": "BAK", "bakExportOptions": { "bakType": FULL, "differentialBase": true, } }, "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Export a differential backup: Before using any of the request data, make the following replacements: project-id : the project ID instance-id : the instance ID bucket name : the Cloud Storage bucket name path to dump file : the path to the SQL dump fle database name 1 : the name of a database inside the Cloud SQL instance database name 2 : the name of a database inside the Cloud SQL instance offload : to enable and use serverless exports, set this value to true .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2022-09-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } To use a different user for the import, specify the importContext.importUser property.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2022-09-29T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } If you don't need to retain the IAM role you set previously, then remove it now.

### Cloud SQL for SQL Server features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/features](https://docs.cloud.google.com/sql/docs/sqlserver/features)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Other SQL Server operations unavailable for Cloud SQL ADMINISTER BULK OPERATIONS ALTER ANY CREDENTIAL ALTER ANY EVENT NOTIFICATION ALTER ANY EVENT SESSION ALTER RESOURCES ALTER SETTINGS AUTHENTICATE SERVER CONTROL SERVER CREATE DDL EVENT NOTIFICATION CREATE ENDPOINT CREATE TRACE EVENT NOTIFICATION EXTERNAL ACCESS ASSEMBLY RESTORE SHUTDOWN CLR ASSEMBLIES Supported syntax for Cloud SQL for SQL Server Cloud SQL supports the Transact-SQL syntax .
- For more information, see Use bulk insert for importing data .
- Bulk insert for importing data.
- Supported languages for Cloud SQL for SQL Server You can use Cloud SQL with App Engine applications running in the flexible environment that are written in: C# Go Java Node.js PHP Python Ruby How you can connect to Cloud SQL for SQL Server instances You can connect to a Cloud SQL instance from: SQL Server Management Studio (SSMS) .

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

