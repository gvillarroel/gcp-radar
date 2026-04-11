---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.651Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Extended Events"
feature_slug: "extended-events"
latest_feature_date: "2024-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql"
keywords:
  - "extended"
  - "events"
  - "sql"
  - "supports"
  - "server"
  - "for"
  - "monitoring"
  - "and"
---

# Extended Events

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL supports SQL Server Extended Events for monitoring and troubleshooting database performance.

## Extended Definition

Cloud SQL supports SQL Server Extended Events for monitoring and troubleshooting database performance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- July 19, 2024 Feature You can now use Extended Events (XEvents) on your Cloud SQL for SQL Server instance to monitor, identify, and troubleshoot the performance of the databases on your instance.
- Feature Cloud SQL for SQL Server now supports SQL Server 2025 ( GA ): SQL Server 2025 Standard SQL Server 2025 Enterprise SQL Server 2025 Express For more information, see Database versions and version policies and Choose a machine series .
- August 31, 2020 Feature Cloud SQL for SQL Server supports cloning using the Cloud Console, the gcloud command, and the Cloud SQL Admin API.
- March 24, 2020 Feature Cloud SQL now supports 96-core machine types for MySQL, Postgres, and SQL Server instances.

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. backend type : Type of backend. object : Target object of the write operation. context : The context of the write operation. database/postgresql/external sync/initial sync complete ALPHA (project) Initial sync complete GAUGE , BOOL , cloudsql database Whether all databases on the Postgres External Server (ES) replica have completed the initial sync and are replicating changes from the source.
- After sampling, data is not visible for up to 165 seconds. is enabled : (BOOL) Indicates whether a job is enabled. last run outcome : Last outcome of a job run, one of [Fail, Succeed, Retry, Cancel, In progress, Unknown]. database/sqlserver/transactions/batch request count GA (project) Batch requests DELTA , INT64 , 1 cloudsql database Total number of Transact-SQL command batches received.
- After sampling, data is not visible for up to 165 seconds. channel name : Name of the channel on which the replica is connected to the external server. database/mysql/handler operations count GA (project) MySQL Handler Operations Count DELTA , INT64 , 1 cloudsql database MySQL handler operations, since the last sample.

### "Export and import using SQL dump files \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Import data to Cloud SQL for SQL Server Required roles and permissions for importing to Cloud SQL for SQL Server To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for striped import only) For help with IAM roles, see Identity and Access Management .
- Import a SQL dump file to Cloud SQL for SQL Server SQL files are plain text files with a sequence of SQL commands.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } For the complete list of parameters for the request, see the instances:import page.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } For the complete list of parameters for the request, see the instances:import page.

