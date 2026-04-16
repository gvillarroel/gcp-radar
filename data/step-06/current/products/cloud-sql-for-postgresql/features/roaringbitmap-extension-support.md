---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.749Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "roaringbitmap extension support"
feature_slug: "roaringbitmap-extension-support"
latest_feature_date: "2025-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/postgres/features"
keywords:
  - "roaringbitmap"
  - "makes"
  - "available"
  - "extension"
---

# roaringbitmap extension support

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Roaringbitmap extension support makes the roaringbitmap extension available in Cloud SQL for PostgreSQL.

## Extended Definition

Roaringbitmap extension support makes the roaringbitmap extension available in Cloud SQL for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- Relevant log files include: cloudsql.googleapis.com/postgres.log If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- The consumer network is either not configured correctly, or not configured at all, and therefore, no endpoint is available to connect to.
- Check the CPU and memory usage of your Cloud SQL instance to make sure there are plenty of resources available.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- The lazy writer is a system process that flushes out batches of dirty, aged buffers (buffers that contain changes that must be written back to disk before the buffer can be reused for a different page) and makes them available to user processes.
- After sampling, data is not visible for up to 165 seconds. backend type : Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter]. wait event : Name of the wait event, such as AutoVacuumMain, ClientRead. wait event type : Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout]. database/postgresql/blocks read count GA (project) Number of disk blocks read.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/innodb log waits count GA (project) Transaction waits for Innodb logbuffer flush DELTA , INT64 , 1 cloudsql database Total number of transactions wait for space to become available in the InnoDB log buffer, to help tune innodb log buffer size configuration.
- After sampling, data is not visible for up to 165 seconds. database/mysql/replication/available for failover DEPRECATED (project) Available for failover (Deprecated) GAUGE , INT64 , 1 cloudsql database This is > 0 if the failover operation is available on the master instance.master.

### Cloud SQL for PostgreSQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- Source ID: `site-docs-root`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Unsupported features for Cloud SQL for PostgreSQL Any feature that requires SUPERUSER privileges with the following exceptions: You can use the CREATE EXTENSION statement only for supported extensions .
- Supported PostgreSQL extensions for Cloud SQL Cloud SQL supports many PostgreSQL extensions.
- For a complete list of these extensions, see Configure PostgreSQL extensions .
- Instances available in the Americas, EU, Asia, and Australia.

