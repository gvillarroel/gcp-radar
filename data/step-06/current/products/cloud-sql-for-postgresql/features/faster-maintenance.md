---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.413Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Faster maintenance"
feature_slug: "faster-maintenance"
latest_feature_date: "2021-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
keywords:
  - "faster"
  - "maintenance"
  - "sql"
  - "reduces"
  - "average"
  - "connectivity"
  - "interruption"
  - "during"
---

# Faster maintenance

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL reduces average connectivity interruption during maintenance to less than 30 seconds; Cloud SQL for PostgreSQL provides maintenance operations with average connectivity interruption of less than 60 seconds.

## Extended Definition

Cloud SQL reduces average connectivity interruption during maintenance to less than 30 seconds; Cloud SQL for PostgreSQL provides maintenance operations with average connectivity interruption of less than 60 seconds.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2021 Change Cloud SQL now offers faster maintenance, with average connectivity loss lasting 90 seconds or less on average.
- August 17, 2021 Feature Cloud SQL now offers faster maintenance , with connectivity dropping for less than 30 seconds on average.
- June 07, 2021 Feature Cloud SQL now offers faster maintenance , with connectivity dropping for less than 60 seconds on average.
- February 08, 2022 Feature Cloud SQL supports the max parallel maintenance workers , max parallel workers , max parallel workers per gather , and max pred locks per transaction flags: max parallel maintenance workers sets the maximum number of parallel workers that can be started by a single utility command. max parallel workers sets the maximum number of workers that the system can support for parallel operations. max parallel workers per gather sets the maximum number of workers that can be started by a single Gather or Gather Merge node. max pred locks per transaction controls the average number of object locks allocated for each transaction.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2021 Cloud SQL for MySQL Change Cloud SQL now offers faster maintenance, with average connectivity loss lasting 90 seconds or less on average.
- June 07, 2021 Cloud SQL for MySQL Feature Cloud SQL now offers faster maintenance , with connectivity dropping for less than 60 seconds on average.
- Cloud SQL for PostgreSQL Change Cloud SQL now offers faster maintenance, with average connectivity loss lasting 90 seconds or less on average.
- Cloud SQL for SQL Server Feature Cloud SQL now offers faster maintenance , with connectivity dropping for less than 120 seconds on average.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). database/postgresql/insights/perquery/execution time GA (project) Per query execution times CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per query.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/io time GA (project) Per query IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. io type : The IO type (read/write). query hash : A unique hash of the query string. database/postgresql/insights/perquery/latencies GA (project) Per query latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/lock time GA (project) Per query lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. lock type : The lock type (lw/hw/buffer pin). query hash : A unique hash of the query string. database/postgresql/insights/perquery/row count GA (project) Per query affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/shared blk access count GA (project) Per query Shared blocks cache access CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accesssed by statement execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). query hash : A unique hash of the query string. database/postgresql/insights/pertag/execution time GA (project) Per tag execution time CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per tag.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/io time GA (project) Per tag IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO write time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. io type : The IO type (read/write). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/latencies GA (project) Per tag latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/lock time GA (project) Per tag lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. lock type : The lock type (lw/hw/buffer pin). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/row count GA (project) Per tag affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/shared blk access count GA (project) Per tag shared blocks cache accessed CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. access type : The block access type (hit/miss). tag hash : A unique hash of the tag string. database/postgresql/new connection count GA (project) PostgreSQL new connections count DELTA , INT64 , 1 cloudsql database Count of new connections added to the postgres instance.
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/io time GA (project) IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO time per user per database. user : The user of the database. client addr : The IP address of the database client. io type : The IO type (read/write). database/postgresql/insights/aggregate/latencies GA (project) Latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/lock time GA (project) Aggregated lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database. user : The user of the database. client addr : The IP address of the database client. lock type : The lock type (lw/hw/buffer pin). database/postgresql/insights/aggregate/row count GA (project) Affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/shared blk access count GA (project) Shared blocks cache access.
- After sampling, data is not visible for up to 165 seconds. database/mysql/conn pool/avg wait time GA (project) MySQL Connection Pool Average Wait Time GAUGE , INT64 , ms cloudsql database Average time spent by the connection on the work queue in milliseconds.

