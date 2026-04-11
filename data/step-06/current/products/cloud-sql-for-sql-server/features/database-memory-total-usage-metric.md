---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.927Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "database/memory/total_usage metric"
feature_slug: "database-memory-total-usage-metric"
latest_feature_date: "2021-01-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
keywords:
  - "database"
  - "memory"
  - "total"
  - "usage"
  - "metric"
  - "sql"
  - "exposes"
  - "monitoring"
---

# database/memory/total_usage metric

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL exposes a Monitoring metric for total database memory usage including buffer cache.

## Extended Definition

Cloud SQL exposes a Monitoring metric for total database memory usage including buffer cache.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)

## Supporting Pages

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. database/memory/total usage GA (project) Total memory usage GAUGE , INT64 , By cloudsql database Total RAM usage in bytes.
- After sampling, data is not visible for up to 165 seconds. event type : Kind of Mysql event, one of [innodb hash0hash,innodb memory,innodb row0sel,sql table,sql thd main,sql dd,sql string,mysys iocache] database/mysql/memory/global GA (project) Global memory allocated GAUGE , DOUBLE , By cloudsql database The total allocated memory, reported by performance schema.
- After sampling, data is not visible for up to 165 seconds. database/sqlserver/memory/checkpoint page count GA (project) Checkpoint pages DELTA , INT64 , 1 cloudsql database Total number of pages flushed to disk by a checkpoint or other operation that requires all dirty pages to be flushed.
- After sampling, data is not visible for up to 165 seconds. state : The state of the instance. database/memory/components BETA (project) Memory components GAUGE , DOUBLE , 1 cloudsql database Memory stats components in percentage as usage, cache and free memory for the database.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- January 13, 2021 Cloud SQL for MySQL Feature Cloud SQL now exposes the metric database/memory/total usage .
- Cloud SQL for PostgreSQL Feature Cloud SQL now exposes the metric database/memory/total usage .
- Cloud SQL for SQL Server Feature Cloud SQL now exposes the metric database/memory/total usage .
- For more information about database/memory/total usage , see Cloud SQL Metrics .

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- January 13, 2021 Feature Cloud SQL now exposes the metric database/memory/total usage .
- For more information about database/memory/total usage , see Cloud SQL Metrics .
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .
- Feature Cloud SQL now exposes 38 new metrics.

