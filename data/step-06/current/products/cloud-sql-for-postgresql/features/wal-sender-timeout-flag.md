---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.399Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "wal_sender_timeout flag"
feature_slug: "wal-sender-timeout-flag"
latest_feature_date: "2022-02-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
keywords:
  - "wal"
  - "sender"
  - "timeout"
  - "flag"
  - "the"
  - "terminates"
  - "inactive"
  - "replication"
---

# wal_sender_timeout flag

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The wal_sender_timeout flag terminates inactive replication connections after a configured interval on the sending server.

## Extended Definition

The wal_sender_timeout flag terminates inactive replication connections after a configured interval on the sending server.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- February 07, 2022 Cloud SQL for PostgreSQL Feature Cloud SQL supports the wal receiver timeout and wal sender timeout flags: The wal receiver timeout flag ends replication connections that are inactive for the specified time.
- The wal sender timeout flag, which is for detection by the ending server, ends replication connections that are inactive for the specified time.
- January 25, 2024 Cloud SQL for MySQL Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Cloud SQL for MySQL Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .
- August 27, 2021 Cloud SQL for PostgreSQL Feature Cloud SQL for PostgreSQL now supports the following flags: huge pages shared buffers wal buffers For more information about these flags, see the Cloud SQL for PostgreSQL flags documentation.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- February 07, 2022 Feature Cloud SQL supports the wal receiver timeout and wal sender timeout flags: The wal receiver timeout flag ends replication connections that are inactive for the specified time.
- The wal sender timeout flag, which is for detection by the ending server, ends replication connections that are inactive for the specified time.
- August 27, 2021 Feature Cloud SQL for PostgreSQL now supports the following flags: huge pages shared buffers wal buffers For more information about these flags, see the Cloud SQL for PostgreSQL flags documentation.
- Feature Cloud SQL for PostgreSQL now supports the min wal size flag.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. backend type : Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter]. wait event : Name of the wait event, such as AutoVacuumMain, ClientRead. wait event type : Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout]. database/postgresql/blocks read count GA (project) Number of disk blocks read.
- After sampling, data is not visible for up to 165 seconds. state : State of replication:"Running" - Replication is active and running;"Stopped" - Replication is inactive and stopped;"Error" - There is an error happening and replication is stopped. database/sqlserver/audits size GA (project) Size of stored audit files.
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. oldest transaction type : oldest transaction type can be one of [running, prepared, replication slot, replica]. database/postgresql/write ahead log/flushed bytes count GA (project) PostgreSQL WAL flushed bytes count DELTA , INT64 , 1 cloudsql database Total size (bytes) of WAL flushed for this instance.

