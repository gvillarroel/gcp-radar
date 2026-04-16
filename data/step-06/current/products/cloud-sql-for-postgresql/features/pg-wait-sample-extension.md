---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.800Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_wait_sample extension"
feature_slug: "pg-wait-sample-extension"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
keywords:
  - "statistics"
  - "collects"
  - "sample"
  - "event"
  - "sampling"
  - "extension"
  - "wait"
---

# pg_wait_sample extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pg_wait_sample extension collects wait event sampling statistics for PostgreSQL server processes.

## Extended Definition

The pg_wait_sample extension collects wait event sampling statistics for PostgreSQL server processes.

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
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. backend type : Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter]. wait event : Name of the wait event, such as AutoVacuumMain, ClientRead. wait event type : Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout]. database/postgresql/blocks read count GA (project) Number of disk blocks read.
- After sampling, data is not visible for up to 165 seconds. operation type : Operation type. database/mysql/innodb/buffer flush sync waits count GA (project) Innodb sync flushing waits DELTA , INT64 , 1 cloudsql database Number of times InnoDB has performed synchronous buffer flush operations and blocking the user transactions since last sample.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/row lock waits count GA (project) InnoDB Row Lock Waits Count DELTA , INT64 , 1 cloudsql database Times operations on InnoDB tables had to wait for a row lock, since the last sample.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/lock timeout count GA (project) Innodb Row Lock Wait Timeout Count DELTA , INT64 , 1 cloudsql database Row lock wait timeouts, since the last sample.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Connect to the database and run the following query: SELECT datname, username, application name as appname, client addr, state, now() - backend start as conn age, now() - xact start as xact age, now() - query start as query age, now() - state change as last activity age, wait event type, wait event, query FROM pg stat activity WHERE state <> 'idle' ORDER BY 8 DESC LIMIT 20; You want to find out what units are being used for a specific field.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- After you manually remove an IAM group user from the Cloud SQL instance, make sure that you also remove them from the IAM group in Cloud Identity to prevent further logins to the Cloud SQL instance.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In this tutorial, the file is referred to as main.tf . mkdir DIRECTORY && cd DIRECTORY && touch main.tf If you are following a tutorial, you can copy the sample code in each section or step.

