---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.876Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Regional availability in me-west1"
feature_slug: "regional-availability-in-me-west1"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/availability"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "me"
  - "west1"
  - "sql"
  - "for"
  - "server"
---

# Regional availability in me-west1

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server instances can be deployed in the me-west1 (Tel Aviv) region.

## Extended Definition

Cloud SQL for SQL Server instances can be deployed in the me-west1 (Tel Aviv) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/availability](https://docs.cloud.google.com/sql/docs/sqlserver/availability)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)

## Supporting Pages

### "Availability in Cloud SQL \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/availability](https://docs.cloud.google.com/sql/docs/sqlserver/availability)
- Source ID: `site-iam-reference`
- Final score: 268
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.
- Maintenance , which includes the following operations with sub-second downtime: Automatic maintenance that Cloud SQL performs every quarter Self-service maintenance that you can initiate at any time Maintenance simulation that you can initiate to test the sub-second downtime behavior What's next Learn about high availability (HA) Enable or disable high availability (HA) Read about disaster recovery (DR) View all the Google Cloud services available in locations worldwide .
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Availability in Cloud SQL Stay organized with collections Save and categorize content based on your preferences.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Based on your application workloads and resource utilization, the recommender helps you optimize performance by identifying SQL Server instances that might see performance improvements when upgraded to Cloud SQL Enterprise Plus edition.
- June 02, 2023 Security A vulnerability was recently discovered in Cloud SQL for SQL Server that allowed customer administrator accounts to create triggers in the tempdb database and use those to gain sysadmin privileges in the instance.
- December 11, 2025 Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( Preview ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.
- Feature Cloud SQL for SQL Server integration with Microsoft Entra ID ( GA ) provides centralized identity and access management (IAM) for your databases using your existing Microsoft Entra ID tenant.

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. state : Database state, for example, 'ONLINE' or 'SUSPECT'. recovery model : Database recovery model, one of [FULL, BULK LOGGED, SIMPLE]. is cdc enabled : (BOOL) Indicates whether CDC is enabled. is published : (BOOL) Indicates whether a database is published. auto close : (BOOL) Indicates whether auto-close is enabled on a database. database/sqlserver/memory/buffer cache hit ratio GA (project) Buffer cache hit ratio GAUGE , DOUBLE , % cloudsql database Current percentage of pages found in the buffer cache without having to read from disk.
- After sampling, data is not visible for up to 165 seconds. type : Server principal type, one of [SQL LOGIN, WINDOWS LOGIN, WINDOWS GROUP, SERVER ROLE, CERTIFICATE MAPPED LOGIN, EXTERNAL LOGIN, EXTERNAL GROUP, ASYMMETRIC KEY MAPPED LOGIN]. is enabled : (BOOL) Indicates whether a server principal is enabled. database/sqlserver/sql agent/jobs GA (project) SQL Server agent jobs GAUGE , INT64 , 1 cloudsql database Current number of SQL Server agent jobs on the instance.
- After sampling, data is not visible for up to 165 seconds. is enabled : (BOOL) Indicates whether a job is enabled. last run outcome : Last outcome of a job run, one of [Fail, Succeed, Retry, Cancel, In progress, Unknown]. database/sqlserver/transactions/batch request count GA (project) Batch requests DELTA , INT64 , 1 cloudsql database Total number of Transact-SQL command batches received.

