---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.774Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_squeeze extension"
feature_slug: "pg-squeeze-extension"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager"
keywords:
  - "removes"
  - "unused"
  - "space"
  - "squeeze"
  - "tables"
  - "extension"
---

# pg_squeeze extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pg_squeeze extension removes unused space from tables and can use an index to sort tuples during processing.

## Extended Definition

The pg_squeeze extension removes unused space from tables and can use an index to sort tuples during processing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- One mitigation option is to create the temporary table with ROW FORMAT=COMPRESSED , so it is stored in file-per-table tablespaces in the temporary file directory.
- However, the downside is performance costs associated with creating and removing a file-per-table tablespace for each temporary table.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "compute#forwardingRule", "id": " ENDPOINT ID ", "creationTimestamp": "2024-05-09T12:03:21.383-07:00", "name": " ENDPOINT NAME ", "region": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME ", "IPAddress": " IP ADDRESS ", "target": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /serviceAttachments/ SERVICE ATTACHMENT NAME ", "selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME ", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/default", "serviceDirectoryRegistrations": [ { "namespace": "goog-psc-default" } ], "networkTier": "PREMIUM", "labelFingerprint": " LABEL FINGERPRINT ID ", "fingerprint": " FINGERPRINT ID ", "pscConnectionId": " CONNECTION ID ", "pscConnectionStatus": "ACCEPTED", "allowPscGlobalAccess": true } Verify that the status of the endpoint is ACCEPTED .
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). database/postgresql/insights/perquery/execution time GA (project) Per query execution times CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per query.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/io time GA (project) Per query IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. io type : The IO type (read/write). query hash : A unique hash of the query string. database/postgresql/insights/perquery/latencies GA (project) Per query latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/lock time GA (project) Per query lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. lock type : The lock type (lw/hw/buffer pin). query hash : A unique hash of the query string. database/postgresql/insights/perquery/row count GA (project) Per query affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/shared blk access count GA (project) Per query Shared blocks cache access CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accesssed by statement execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). query hash : A unique hash of the query string. database/postgresql/insights/pertag/execution time GA (project) Per tag execution time CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per tag.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/io time GA (project) Per tag IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO write time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. io type : The IO type (read/write). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/latencies GA (project) Per tag latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/lock time GA (project) Per tag lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. lock type : The lock type (lw/hw/buffer pin). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/row count GA (project) Per tag affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/shared blk access count GA (project) Per tag shared blocks cache accessed CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. access type : The block access type (hit/miss). tag hash : A unique hash of the tag string. database/postgresql/new connection count GA (project) PostgreSQL new connections count DELTA , INT64 , 1 cloudsql database Count of new connections added to the postgres instance.
- After sampling, data is not visible for up to 165 seconds. backend type : Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter]. wait event : Name of the wait event, such as AutoVacuumMain, ClientRead. wait event type : Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout]. database/postgresql/blocks read count GA (project) Number of disk blocks read.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/innodb log waits count GA (project) Transaction waits for Innodb logbuffer flush DELTA , INT64 , 1 cloudsql database Total number of transactions wait for space to become available in the InnoDB log buffer, to help tune innodb log buffer size configuration.
- After sampling, data is not visible for up to 165 seconds. database/mysql/tmp disk tables created count GA (project) MySQL Temporary Disk Tables Created Count DELTA , INT64 , 1 cloudsql database Internal on-disk temporary tables created by the MySQL server while executing statements, since the last sample.

### "Use Secret Manager to handle secrets in Cloud SQL \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager](https://docs.cloud.google.com/sql/docs/postgres/use-secret-manager)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

