---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.920Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "faster maintenance"
feature_slug: "faster-maintenance"
latest_feature_date: "2021-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
keywords:
  - "faster"
  - "maintenance"
  - "sql"
  - "operations"
  - "reduce"
  - "average"
  - "connectivity"
  - "interruption"
---

# faster maintenance

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL maintenance operations reduce average connectivity interruption to under 120 seconds.

## Extended Definition

Cloud SQL maintenance operations reduce average connectivity interruption to under 120 seconds.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2021 Cloud SQL for MySQL Change Cloud SQL now offers faster maintenance, with average connectivity loss lasting 90 seconds or less on average.
- June 07, 2021 Cloud SQL for MySQL Feature Cloud SQL now offers faster maintenance , with connectivity dropping for less than 60 seconds on average.
- Cloud SQL for PostgreSQL Change Cloud SQL now offers faster maintenance, with average connectivity loss lasting 90 seconds or less on average.
- Cloud SQL for SQL Server Feature Cloud SQL now offers faster maintenance , with connectivity dropping for less than 120 seconds on average.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- June 07, 2021 Feature Cloud SQL now offers faster maintenance , with connectivity dropping for less than 120 seconds on average.
- June 10, 2022 Feature Cloud SQL now supports faster machine type changes, with connectivity dropping to less than 60 seconds.
- The functions include (and are not limited to) the following: cdc.fn cdc get all changes <capture instance> Sys.fn cdc get max lsn To turn on this feature for a database, run this command: exec msdb .[ dbo ].[ gcloudsql cdc enable db ] 'demo' To turn off this feature for a database, run this command: exec msdb.[dbo].[gcloudsql cdc disable db] 'demo' Feature Cloud SQL for SQL Server enables you to perform common operations on a tempdb database .
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 03, 2024 Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. operation type : Kind of DML operations, one of [insert, insert select, update, delete, replace, replace select]. database/mysql/external sync/replica lag BETA (project) Replica lag GAUGE , INT64 , s cloudsql database An approximation of the lag (seconds behind primary) between the Cloud SQL MySQL external replica and its primary.
- After sampling, data is not visible for up to 165 seconds. operation type : Operation type. database/mysql/innodb/buffer flush sync waits count GA (project) Innodb sync flushing waits DELTA , INT64 , 1 cloudsql database Number of times InnoDB has performed synchronous buffer flush operations and blocking the user transactions since last sample.
- After sampling, data is not visible for up to 165 seconds. scheduler id : Identifier of the scheduler, for example, '3' or 'Internal'. database/sqlserver/schedulers/pending disk io GA (project) Number of pending I/O operations per scheduler GAUGE , INT64 , 1 cloudsql database Current number of pending I/Os that are waiting to be completed.

