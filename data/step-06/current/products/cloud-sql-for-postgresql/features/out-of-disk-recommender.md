---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.408Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Out-of-disk recommender"
feature_slug: "out-of-disk-recommender"
latest_feature_date: "2021-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
keywords:
  - "out"
  - "of"
  - "disk"
  - "recommender"
  - "the"
  - "proactively"
  - "recommends"
  - "actions"
---

# Out-of-disk recommender

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The out-of-disk recommender proactively recommends actions to reduce downtime risk from low disk space; Cloud SQL provides a preview recommender that warns when an instance is trending toward running out of disk space.

## Extended Definition

The out-of-disk recommender proactively recommends actions to reduce downtime risk from low disk space; Cloud SQL provides a preview recommender that warns when an instance is trending toward running out of disk space.

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
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The minor versions for various extensions have also been upgraded: 9.6 10 11 12 13 address standardizer not avail 2.4.9 2.5.5 3.0.2 3.0.2 hll 2.14 2.14 2.14 2.14 2.14 pg repack 1.4.6 1.4.6 1.4.6 1.4.6 1.4.6 pgaudit 1.1.3 1.2.3 1.3.2 1.4.1 no change pglogical 2.3.3 2.3.3 2.3.3 2.3.3 2.3.3 pl/proxy 2.10.0 2.10.0 2.10.0 2.10.0 2.10.0 postgis 2.3.11 2.4.9 2.5.5 3.0.2 3.0.2 May 19, 2021 Cloud SQL for MySQL Feature Cloud SQL supports the preview version of the out-of-disk recommender .
- This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space.
- This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space.
- This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The minor versions for various extensions have also been upgraded: 9.6 10 11 12 13 address standardizer not avail 2.4.9 2.5.5 3.0.2 3.0.2 hll 2.14 2.14 2.14 2.14 2.14 pg repack 1.4.6 1.4.6 1.4.6 1.4.6 1.4.6 pgaudit 1.1.3 1.2.3 1.3.2 1.4.1 no change pglogical 2.3.3 2.3.3 2.3.3 2.3.3 2.3.3 pl/proxy 2.10.0 2.10.0 2.10.0 2.10.0 2.10.0 postgis 2.3.11 2.4.9 2.5.5 3.0.2 3.0.2 May 19, 2021 Feature Cloud SQL supports the preview version of the out-of-disk recommender .
- This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space.
- This feature proactively generates recommendations that help you reduce the risk of downtime that might be caused by your instances running out of disk space.
- September 10, 2021 Feature The Cloud SQL out-of-disk recommender is now generally available.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. state : Database state, for example, 'ONLINE' or 'SUSPECT'. recovery model : Database recovery model, one of [FULL, BULK LOGGED, SIMPLE]. is cdc enabled : (BOOL) Indicates whether CDC is enabled. is published : (BOOL) Indicates whether a database is published. auto close : (BOOL) Indicates whether auto-close is enabled on a database. database/sqlserver/memory/buffer cache hit ratio GA (project) Buffer cache hit ratio GAUGE , DOUBLE , % cloudsql database Current percentage of pages found in the buffer cache without having to read from disk.
- After sampling, data is not visible for up to 165 seconds. backend type : Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter]. wait event : Name of the wait event, such as AutoVacuumMain, ClientRead. wait event type : Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout]. database/postgresql/blocks read count GA (project) Number of disk blocks read.
- After sampling, data is not visible for up to 165 seconds. is enabled : (BOOL) Indicates whether a job is enabled. last run outcome : Last outcome of a job run, one of [Fail, Succeed, Retry, Cancel, In progress, Unknown]. database/sqlserver/transactions/batch request count GA (project) Batch requests DELTA , INT64 , 1 cloudsql database Total number of Transact-SQL command batches received.
- The lazy writer is a system process that flushes out batches of dirty, aged buffers (buffers that contain changes that must be written back to disk before the buffer can be reused for a different page) and makes them available to user processes.

