---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.571Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Transactional replication to external subscribers"
feature_slug: "transactional-replication-to-external-subscribers"
latest_feature_date: "2022-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/ExternalSyncMode"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages"
keywords:
  - "transactional"
  - "replication"
  - "external"
  - "subscribers"
  - "sql"
  - "server"
  - "can"
  - "publish"
---

# Transactional replication to external subscribers

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for SQL Server can publish to internal or external subscribers by using transactional replication.

## Extended Definition

Cloud SQL for SQL Server can publish to internal or external subscribers by using transactional replication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/ExternalSyncMode](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/ExternalSyncMode)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages)

## Supporting Pages

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- This only applies to instances that are replicating from an external server. per database/postgresql/external sync/replication byte lag GA (project) Exernal server replication byte lag GAUGE , INT64 , 1 cloudsql instance database Replication lag in bytes of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. database/postgresql/external sync/max replica byte lag ALPHA (project) Max lag bytes GAUGE , INT64 , By cloudsql database Replication lag in bytes for Postgres External Server (ES) replicas.
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. state : Database state, for example, 'ONLINE' or 'SUSPECT'. recovery model : Database recovery model, one of [FULL, BULK LOGGED, SIMPLE]. is cdc enabled : (BOOL) Indicates whether CDC is enabled. is published : (BOOL) Indicates whether a database is published. auto close : (BOOL) Indicates whether auto-close is enabled on a database. database/sqlserver/memory/buffer cache hit ratio GA (project) Buffer cache hit ratio GAUGE , DOUBLE , % cloudsql database Current percentage of pages found in the buffer cache without having to read from disk.

### ExternalSyncMode \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/ExternalSyncMode](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/ExternalSyncMode)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Enums EXTERNAL SYNC MODE UNSPECIFIED Unknown external sync mode, will be defaulted to ONLINE mode ONLINE Online external sync will set up replication after initial data external sync OFFLINE Offline external sync only dumps and loads a one-time snapshot of the primary instance's data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback ExternalSyncMode Stay organized with collections Save and categorize content based on your preferences.

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR READ REPLICA UNDER EXTERNAL SERVER REPLICA NOT SYNCED To have a read replica, there must be an initial sync completed on the external server replica.
- ERROR EXTERNAL SERVER REPLICA GTID MODE External server replica must have gtid mode=ON in order to have a read replica.

