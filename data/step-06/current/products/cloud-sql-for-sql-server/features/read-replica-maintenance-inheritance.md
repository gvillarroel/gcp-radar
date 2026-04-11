---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.859Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Read replica maintenance inheritance"
feature_slug: "read-replica-maintenance-inheritance"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
keywords:
  - "read"
  - "replica"
  - "maintenance"
  - "inheritance"
  - "sql"
  - "replicas"
  - "follow"
  - "the"
---

# Read replica maintenance inheritance

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance; Read replicas inherit maintenance settings from the primary instance, including window, rescheduling, and deny periods, and are maintained before the primary.

## Extended Definition

Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance; Read replicas inherit maintenance settings from the primary instance, including window, rescheduling, and deny periods, and are maintained before the primary.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)

## Supporting Pages

### About read pools \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to operations that aren't supported on read replicas, the following operations aren't supported on read pools: Enable and disable replication Customer-managed Active Directory Managed Microsoft AD Promote replica Restart Import Export Failover Re-encrypt Clone SSL/TLS certificates with shared CA or customer-managed CA can't be used with a read pool.
- The following types of updates aren't supported: While read pools still receive Cloud SQL maintenance updates, you can't update your read pool or its associated primary instance to a new major database version.
- Like read replicas, read pools receive maintenance during the primary instance's maintenance window.
- Limitations The following limitations apply: Read pools are only available for Cloud SQL Enterprise Plus edition instances on the new network architecture .

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- September 15, 2022 Feature Cloud SQL read replicas now follow the maintenance settings for the primary instance, including the maintenance window, rescheduling, and the deny maintenance period.
- Cloud SQL read replicas follow the maintenance settings for the primary instance, including the maintenance window, rescheduling, and the deny maintenance period.
- February 09, 2024 Feature Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance.
- During the maintenance event, Cloud SQL maintains the replicas before maintaining the primary instance.

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. backend type : Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter]. wait event : Name of the wait event, such as AutoVacuumMain, ClientRead. wait event type : Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout]. database/postgresql/blocks read count GA (project) Number of disk blocks read.
- After sampling, data is not visible for up to 165 seconds. state : The slave io running state of the slave. database/mysql/replication/slave sql running GA (project) Slave SQL thread running GAUGE , STRING , cloudsql database Indicates whether the SQL thread for executing events in the relay log is running.
- After sampling, data is not visible for up to 165 seconds. operation : Page operation, one of [Read, Write]. database/sqlserver/replication/bytes sent to replica count GA (project) Bytes sent to replica DELTA , INT64 , By cloudsql database Total number of bytes sent to the remote availability replica.
- After sampling, data is not visible for up to 165 seconds. database/mysql/replication/slave sql running state GA (project) Slave SQL thread running state GAUGE , BOOL , cloudsql database Indicates whether the SQL thread for executing events in the relay log is running.

