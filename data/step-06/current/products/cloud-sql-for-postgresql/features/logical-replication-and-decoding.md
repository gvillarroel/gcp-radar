---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.815Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Logical replication and decoding"
feature_slug: "logical-replication-and-decoding"
latest_feature_date: "2021-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
keywords:
  - "replication"
  - "decoding"
  - "enable"
  - "offers"
  - "preview"
  - "logical"
---

# Logical replication and decoding

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL offers preview support for logical replication and decoding to enable replication and change data capture workflows.

## Extended Definition

Cloud SQL for PostgreSQL offers preview support for logical replication and decoding to enable replication and change data capture workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)

## Supporting Pages

### Create read replicas \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- If you use the logical replication and decoding features in Cloud SQL, replication slots are created and dropped automatically.
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "masterInstanceName": " PRIMARY INSTANCE NAME ", "project": " PROJECT ID ", "databaseVersion": "POSTGRES 13", "name": " REPLICA INSTANCE NAME ", "region": " REGION NAME ", "kind": "sql#instance", "settings": { "tier": " MACHINE TYPE ", "availabilityType": " AVAILABILITY TYPE ", "settingsVersion": 0, "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ ALLOWED PROJECTS ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "ASYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "masterInstanceName": " PRIMARY INSTANCE NAME ", "project": " PROJECT ID ", "databaseVersion": "POSTGRES 13", "name": " REPLICA INSTANCE NAME ", "region": " REGION NAME ", "kind": "sql#instance", "settings": { "tier": " MACHINE TYPE ", "availabilityType": " AVAILABILITY TYPE ", "settingsVersion": 0, "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ ALLOWED PROJECTS ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "ASYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ REPLICA INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "CREATE REPLICA", "name": " OPERATION ID ", "targetId": " REPLICA INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure read replicas for IAM database authentication If you enable the cloudsql.iam authentication flag on the primary instance, Cloud SQL for PostgreSQL enables it on the read replicas automatically.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- If you use the logical replication and decoding features in Cloud SQL, replication slots are created and dropped automatically.
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances Flags High availability Import and export Integrate with Vertex AI Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- To turn this flag on, use the gcloud sql instances patch command: gcloud sql instances patch INSTANCE NAME --database-flags cloudsql.enable google ml integration=on Replace INSTANCE NAME with the name of the primary Cloud SQL instance.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. backend type : Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter]. wait event : Name of the wait event, such as AutoVacuumMain, ClientRead. wait event type : Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout]. database/postgresql/blocks read count GA (project) Number of disk blocks read.
- After sampling, data is not visible for up to 165 seconds. state : Database state, for example, 'ONLINE' or 'SUSPECT'. recovery model : Database recovery model, one of [FULL, BULK LOGGED, SIMPLE]. is cdc enabled : (BOOL) Indicates whether CDC is enabled. is published : (BOOL) Indicates whether a database is published. auto close : (BOOL) Indicates whether auto-close is enabled on a database. database/sqlserver/memory/buffer cache hit ratio GA (project) Buffer cache hit ratio GAUGE , DOUBLE , % cloudsql database Current percentage of pages found in the buffer cache without having to read from disk.
- After sampling, data is not visible for up to 165 seconds. type : Server principal type, one of [SQL LOGIN, WINDOWS LOGIN, WINDOWS GROUP, SERVER ROLE, CERTIFICATE MAPPED LOGIN, EXTERNAL LOGIN, EXTERNAL GROUP, ASYMMETRIC KEY MAPPED LOGIN]. is enabled : (BOOL) Indicates whether a server principal is enabled. database/sqlserver/sql agent/jobs GA (project) SQL Server agent jobs GAUGE , INT64 , 1 cloudsql database Current number of SQL Server agent jobs on the instance.
- After sampling, data is not visible for up to 165 seconds. is enabled : (BOOL) Indicates whether a job is enabled. last run outcome : Last outcome of a job run, one of [Fail, Succeed, Retry, Cancel, In progress, Unknown]. database/sqlserver/transactions/batch request count GA (project) Batch requests DELTA , INT64 , 1 cloudsql database Total number of Transact-SQL command batches received.

