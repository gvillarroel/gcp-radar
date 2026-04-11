---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.440Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Upcoming maintenance notifications"
feature_slug: "upcoming-maintenance-notifications"
latest_feature_date: "2019-12-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
keywords:
  - "upcoming"
  - "maintenance"
  - "notifications"
  - "sql"
  - "provides"
  - "for"
  - "events"
  - "on"
---

# Upcoming maintenance notifications

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL provides notifications for upcoming maintenance events on instances.

## Extended Definition

Cloud SQL provides notifications for upcoming maintenance events on instances.

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
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- December 10, 2019 Feature Cloud SQL now offers notifications for upcoming maintenance.
- In addition, you can also simulate near-zero downtime for planned maintenance events on standalone Cloud SQL Enterprise Plus edition primary instances.
- To find out how to sign up for notifications and check your instances for upcoming maintenance, see Finding and setting maintenance windows .
- To find out how to sign up for notifications and check your instances for upcoming maintenance, see Find and set maintenance windows .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- December 10, 2019 Cloud SQL for MySQL Feature Cloud SQL now offers notifications for upcoming maintenance.
- Cloud SQL for PostgreSQL Feature Cloud SQL now offers notifications for upcoming maintenance.
- Cloud SQL for SQL Server Feature Cloud SQL now offers notifications for upcoming maintenance.
- In addition, you can also simulate near-zero downtime for planned maintenance events on standalone Cloud SQL Enterprise Plus edition primary instances.

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. code area group : Kind of Mysql code area, one of [innodb engine,sql,performance schema,temptable engine,memory engine,mysys] database/mysql/memory/by event GA (project) Memory allocated by events GAUGE , DOUBLE , By cloudsql database Memory allocated by each event, reported by performance schema.
- After sampling, data is not visible for up to 165 seconds. state : The slave io running state of the slave. database/mysql/replication/slave sql running GA (project) Slave SQL thread running GAUGE , STRING , cloudsql database Indicates whether the SQL thread for executing events in the relay log is running.
- After sampling, data is not visible for up to 165 seconds. database/mysql/replication/slave sql running state GA (project) Slave SQL thread running state GAUGE , BOOL , cloudsql database Indicates whether the SQL thread for executing events in the relay log is running.
- After sampling, data is not visible for up to 165 seconds. upload status : Upload status of latest XEvents file. database/state DEPRECATED (project) State GAUGE , STRING , cloudsql database The current serving state of the Cloud SQL instance.

