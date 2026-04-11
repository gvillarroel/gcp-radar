---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.328Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "4-week query metric retention"
feature_slug: "4-week-query-metric-retention"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
keywords:
  - "week"
  - "query"
  - "metric"
  - "retention"
  - "keeps"
  - "insights"
  - "dashboard"
  - "metrics"
---

# 4-week query metric retention

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

4-week query metric retention keeps Query Insights dashboard metrics available for four weeks.

## Extended Definition

4-week query metric retention keeps Query Insights dashboard metrics available for four weeks.

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
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- 4-week query metric retention in the Query Insights dashboard .
- 4-week query metric retention in the Query Insights dashboard .
- When you enable query insights for Enterprise Plus, you can access additional features in query insights such as 30 days of metrics retention, granular query plan details, and a higher query length limit.
- When you enable query insights for Enterprise Plus, you can access additional features in query insights such as 30 days of metrics retention, granular query plan details, and a higher query length limit.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- 4-week query metric retention in the Query Insights dashboard .
- When you enable query insights for Enterprise Plus, you can access additional features in query insights such as 30 days of metrics retention, granular query plan details, and a higher query length limit.
- Query insights for Cloud SQL Enterprise Plus edition offers fine-grained metrics such as wait events and granular query plan samples for faster root-cause analysis and intelligent index recommendations.
- December 13, 2022 Feature The Cloud SQL System insights dashboard now shows additional metrics and an events timeline.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). database/postgresql/insights/perquery/execution time GA (project) Per query execution times CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per query.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/io time GA (project) Per query IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. io type : The IO type (read/write). query hash : A unique hash of the query string. database/postgresql/insights/perquery/latencies GA (project) Per query latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/lock time GA (project) Per query lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per query. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. lock type : The lock type (lw/hw/buffer pin). query hash : A unique hash of the query string. database/postgresql/insights/perquery/row count GA (project) Per query affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. query hash : A unique hash of the query string. database/postgresql/insights/perquery/shared blk access count GA (project) Per query Shared blocks cache access CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accesssed by statement execution. querystring : The normalized query. user : The user of the database. client addr : The IP address of the database client. access type : The block access type (hit/miss). query hash : A unique hash of the query string. database/postgresql/insights/pertag/execution time GA (project) Per tag execution time CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated execution times per user per database per tag.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/io time GA (project) Per tag IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO write time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. io type : The IO type (read/write). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/latencies GA (project) Per tag latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/lock time GA (project) Per tag lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database per tag. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. lock type : The lock type (lw/hw/buffer pin). tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/row count GA (project) Per tag affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. tag hash : A unique hash of the tag string. database/postgresql/insights/pertag/shared blk access count GA (project) Per tag shared blocks cache accessed CUMULATIVE , INT64 , 1 cloudsql instance database Shared blocks (regular tables & indexed) accessed by statement execution. user : The user of the database. client addr : The IP address of the database client. action : The name of the action. application : The name of the application. controller : The name of the controller. db driver : The name of the db driver. framework : The name of the framework. route : The name of the route. access type : The block access type (hit/miss). tag hash : A unique hash of the tag string. database/postgresql/new connection count GA (project) PostgreSQL new connections count DELTA , INT64 , 1 cloudsql database Count of new connections added to the postgres instance.
- This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/io time GA (project) IO time CUMULATIVE , INT64 , us cloudsql instance database Accumulated IO time per user per database. user : The user of the database. client addr : The IP address of the database client. io type : The IO type (read/write). database/postgresql/insights/aggregate/latencies GA (project) Latency CUMULATIVE , DISTRIBUTION , us cloudsql instance database Query latency distribution per user per database. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/lock time GA (project) Aggregated lock time CUMULATIVE , INT64 , us cloudsql instance database Accumulated lock wait time per user per database. user : The user of the database. client addr : The IP address of the database client. lock type : The lock type (lw/hw/buffer pin). database/postgresql/insights/aggregate/row count GA (project) Affected rows CUMULATIVE , INT64 , 1 cloudsql instance database Total number of rows affected during query execution. user : The user of the database. client addr : The IP address of the database client. database/postgresql/insights/aggregate/shared blk access count GA (project) Shared blocks cache access.
- After sampling, data is not visible for up to 165 seconds. database/postgresql/insights/aggregate/execution time GA (project) Execution time CUMULATIVE , INT64 , us{CPU} cloudsql instance database Accumulated query execution time per user per database.
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback Cloud SQL metrics Stay organized with collections Save and categorize content based on your preferences.

