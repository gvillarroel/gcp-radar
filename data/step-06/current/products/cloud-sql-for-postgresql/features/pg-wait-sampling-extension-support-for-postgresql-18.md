---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.743Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_wait_sampling extension support for PostgreSQL 18"
feature_slug: "pg-wait-sampling-extension-support-for-postgresql-18"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
keywords:
  - "sampling"
  - "makes"
  - "available"
  - "extension"
  - "wait"
---

# pg_wait_sampling extension support for PostgreSQL 18

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Pg_wait_sampling extension support for PostgreSQL 18 makes the pg_wait_sampling extension available on PostgreSQL 18; pg_wait_sampling extension support for PostgreSQL 18 makes the pg_wait_sampling extension available on PostgreSQL 18.

## Extended Definition

Pg_wait_sampling extension support for PostgreSQL 18 makes the pg_wait_sampling extension available on PostgreSQL 18; pg_wait_sampling extension support for PostgreSQL 18 makes the pg_wait_sampling extension available on PostgreSQL 18.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)

## Supporting Pages

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. backend type : Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter]. wait event : Name of the wait event, such as AutoVacuumMain, ClientRead. wait event type : Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout]. database/postgresql/blocks read count GA (project) Number of disk blocks read.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/innodb log waits count GA (project) Transaction waits for Innodb logbuffer flush DELTA , INT64 , 1 cloudsql database Total number of transactions wait for space to become available in the InnoDB log buffer, to help tune innodb log buffer size configuration.
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. operation type : Kind of operation handler type, one of [delete, read first, read key, read last, read next, read prev, read rnd, read rnd next, update, write]. database/mysql/innodb/active transactions GA (project) InnoDB Active Transactions GAUGE , INT64 , 1 cloudsql database Number of active Transaction details(trx which are in progress), Values in bracket are meant for innodb transaction state (Total/running/lock wait/rolling back/committing).

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Connect to the database and run the following query: SELECT datname, username, application name as appname, client addr, state, now() - backend start as conn age, now() - xact start as xact age, now() - query start as query age, now() - state change as last activity age, wait event type, wait event, query FROM pg stat activity WHERE state <> 'idle' ORDER BY 8 DESC LIMIT 20; You want to find out what units are being used for a specific field.
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- Relevant log files include: cloudsql.googleapis.com/postgres.log If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- The consumer network is either not configured correctly, or not configured at all, and therefore, no endpoint is available to connect to.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Apply the Terraform configuration by running the following command and entering yes at the prompt: terraform apply Wait until Terraform displays the "Apply complete!" message.
- Apply the Terraform configuration by running the following command and entering yes at the prompt: terraform apply Wait until Terraform displays the "Apply complete!" message.
- Apply the Terraform configuration by running the following command and entering yes at the prompt: terraform apply Wait until Terraform displays the "Apply complete!" message.
- Apply the Terraform configuration by running the following command and entering yes at the prompt: terraform apply Wait until Terraform displays the "Apply complete!" message.

