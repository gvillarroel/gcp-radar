---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.858Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Expanded Cloud SQL metrics"
feature_slug: "expanded-cloud-sql-metrics"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "expanded"
  - "sql"
  - "metrics"
  - "exposes"
  - "38"
  - "new"
  - "to"
  - "improve"
---

# Expanded Cloud SQL metrics

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL exposes 38 new metrics to improve observability for SQL Server instances.

## Extended Definition

Cloud SQL exposes 38 new metrics to improve observability for SQL Server instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud SQL now exposes 38 new metrics.
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .
- April 30, 2021 Feature The following version upgrade applies to Cloud SQL for SQL Server: SQL Server 2017 is upgraded from 14.0.3257.3 to 14.0.3370.1 If you use maintenance windows, the new version will be available after your maintenance update.
- Based on your application workloads and resource utilization, the recommender helps you optimize performance by identifying SQL Server instances that might see performance improvements when upgraded to Cloud SQL Enterprise Plus edition.

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). database/postgresql/insights/perquery/execution time GA (project) Per query execution times CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per query.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/io time GA (project) Per query IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. io type : The IO type (read/write). query hash : A unique hash of the query string. database/postgresql/insights/perquery/latencies GA (project) Per query latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/lock time GA (project) Per query lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. lock type : The lock type (lw/hw/buffer pin). query hash : A unique hash of the query string. database/postgresql/insights/perquery/row count GA (project) Per query affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/shared blk access count GA (project) Per query Shared blocks cache access CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accesssed by statement execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). query hash : A unique hash of the query string. database/postgresql/insights/pertag/execution time GA (project) Per tag execution time CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per tag.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/io time GA (project) Per tag IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO write time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. io type : The IO type (read/write). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/latencies GA (project) Per tag latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/lock time GA (project) Per tag lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. lock type : The lock type (lw/hw/buffer pin). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/row count GA (project) Per tag affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/shared blk access count GA (project) Per tag shared blocks cache accessed CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. access type : The block access type (hit/miss). tag hash : A unique hash of the tag string. database/postgresql/new connection count GA (project) PostgreSQL new connections count DELTA , INT64 , 1 cloudsql database Count of new connections added to the postgres instance.
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/io time GA (project) IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO time per user per database. user : The user of the database. client addr : The IP address of the database client. io type : The IO type (read/write). database/postgresql/insights/aggregate/latencies GA (project) Latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/lock time GA (project) Aggregated lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database. user : The user of the database. client addr : The IP address of the database client. lock type : The lock type (lw/hw/buffer pin). database/postgresql/insights/aggregate/row count GA (project) Affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/shared blk access count GA (project) Shared blocks cache access.
- After sampling, data is not visible for up to 165 seconds. state : Database state, for example, 'ONLINE' or 'SUSPECT'. recovery model : Database recovery model, one of [FULL, BULK LOGGED, SIMPLE]. is cdc enabled : (BOOL) Indicates whether CDC is enabled. is published : (BOOL) Indicates whether a database is published. auto close : (BOOL) Indicates whether auto-close is enabled on a database. database/sqlserver/memory/buffer cache hit ratio GA (project) Buffer cache hit ratio GAUGE , DOUBLE , % cloudsql database Current percentage of pages found in the buffer cache without having to read from disk.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud SQL now exposes 38 new metrics.
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .

