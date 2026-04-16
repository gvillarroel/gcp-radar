---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.942Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "External server cascading replicas"
feature_slug: "external-server-cascading-replicas"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
keywords:
  - "external"
  - "server"
  - "cascading"
  - "replicas"
  - "became"
  - "generally"
  - "available"
  - "migrations"
---

# External server cascading replicas

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cascading Replicas became generally available for migrations from external servers, allowing migrated replicas to have read replicas before promotion.

## Extended Definition

Cascading Replicas became generally available for migrations from external servers, allowing migrated replicas to have read replicas before promotion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)

## Supporting Pages

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR READ REPLICA UNDER EXTERNAL SERVER REPLICA NOT SYNCED To have a read replica, there must be an initial sync completed on the external server replica.
- ERROR REPLICA DEPTH LIMIT EXCEEDED Requested operation would cause exceeding the limit of 4 levels on the depth of cascading replicas.

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. database/postgresql/external sync/max replica byte lag ALPHA (project) Max lag bytes GAUGE , INT64 , By cloudsql database Replication lag in bytes for Postgres External Server (ES) replicas.
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. type : Server principal type, one of [SQL LOGIN, WINDOWS LOGIN, WINDOWS GROUP, SERVER ROLE, CERTIFICATE MAPPED LOGIN, EXTERNAL LOGIN, EXTERNAL GROUP, ASYMMETRIC KEY MAPPED LOGIN]. is enabled : (BOOL) Indicates whether a server principal is enabled. database/sqlserver/sql agent/jobs GA (project) SQL Server agent jobs GAUGE , INT64 , 1 cloudsql database Current number of SQL Server agent jobs on the instance.
- After sampling, data is not visible for up to 165 seconds. backend type : Type of backend. object : Target object of the write operation. context : The context of the write operation. database/postgresql/external sync/initial sync complete ALPHA (project) Initial sync complete GAUGE , BOOL , cloudsql database Whether all databases on the Postgres External Server (ES) replica have completed the initial sync and are replicating changes from the source.

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl If you are using MySQL version 5.7 or later, enable binary logging: To enable binary logging, save the following JSON in a file named request.JSON, then invoke the curl command to enable binary logging. { "settings" : { "backupConfiguration" : { "enabled" : false, "binaryLogEnabled" : true } } } To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Create cascading replicas This section describes how to create and manage cascading replicas.
- For information about how cascading replicas work, see Cascading replicas .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ REPLICA INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "CREATE REPLICA", "name": " OPERATION ID ", "targetId": " REPLICA INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure read replicas for IAM database authentication Read replicas do not have the cloudsql iam authentication flag enabled automatically when it is enabled on the primary instance.

