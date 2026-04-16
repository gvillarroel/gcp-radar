---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.978Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "database/memory/total_usage metric"
feature_slug: "database-memory-total-usage-metric"
latest_feature_date: "2021-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/mysql/quotas"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "database"
  - "memory"
  - "total"
  - "usage"
  - "metric"
  - "sql"
  - "exposes"
  - "show"
---

# database/memory/total_usage metric

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL exposes the database/memory/total_usage metric to show database working set usage including buffer cache.

## Extended Definition

Cloud SQL exposes the database/memory/total_usage metric to show database working set usage including buffer cache.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. database/memory/total usage GA (project) Total memory usage GAUGE , INT64 , By cloudsql database Total RAM usage in bytes.
- After sampling, data is not visible for up to 165 seconds. event type : Kind of Mysql event, one of [innodb hash0hash,innodb memory,innodb row0sel,sql table,sql thd main,sql dd,sql string,mysys iocache] database/mysql/memory/global GA (project) Global memory allocated GAUGE , DOUBLE , By cloudsql database The total allocated memory, reported by performance schema.
- After sampling, data is not visible for up to 165 seconds. database/sqlserver/memory/checkpoint page count GA (project) Checkpoint pages DELTA , INT64 , 1 cloudsql database Total number of pages flushed to disk by a checkpoint or other operation that requires all dirty pages to be flushed.
- After sampling, data is not visible for up to 165 seconds. state : The state of the instance. database/memory/components BETA (project) Memory components GAUGE , DOUBLE , 1 cloudsql database Memory stats components in percentage as usage, cache and free memory for the database.

### Quotas and limits \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can find the connections limit for your instance by connecting to your database and running this command: SHOW VARIABLES LIKE "max connections"; Caveats Quota usage for Cloud SQL Connectors The Cloud SQL Auth Proxy and other Cloud SQL Connectors use Cloud SQL Admin API's quota.
- The Cloud SQL Admin API produces detailed metrics that can help you track your usage of the API, monitor performance of your Cloud SQL instance and the API, and discover problems between your instance and the API.
- Each instance of a Cloud Run service or job can have 100 connections to the database, and as this service or job scales, the total number of connections per deployment can grow.
- Each instance of a Cloud Run service or job can have 100 connections to the database, and as this service or job scales, the total number of connections per deployment can grow.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Connect to the database and run these commands for details on each type: SHOW VARIABLES LIKE 'innodb log file%' ; SELECT ROUND ( SUM ( LENGTH ( argument ) / POW ( 1024 , 2 ), 2 ) AS GB from mysql . general log ; SHOW BINARY LOGS ; Log files are hard to read.
- To find information about temporary file usage, connect to the database and execute the following query: SELECT FROM INFORMATION SCHEMA.FILES WHERE TABLESPACE NAME='innodb temporary'\G You want to find out about table sizes.
- There are other factors beside your workload that can impact memory usage, such as the number of active connections and internal overhead processes.
- An instance can fail and report Out of memory but the Google Cloud console or Cloud Monitoring charts seem to show there's still memory remaining.

