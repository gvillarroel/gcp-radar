---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.818Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "database/memory/total_usage metric"
feature_slug: "database-memory-total-usage-metric"
latest_feature_date: "2021-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/postgres/best-practices"
  - "https://docs.cloud.google.com/sql/docs/postgres/quotas"
keywords:
  - "total"
  - "exposes"
  - "metric"
  - "show"
  - "usage"
  - "memory"
  - "database"
---

# database/memory/total_usage metric

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL exposes the database/memory/total_usage metric to show database working set memory usage including buffer cache.

## Extended Definition

Cloud SQL exposes the database/memory/total_usage metric to show database working set memory usage including buffer cache.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)

## Supporting Pages

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. database/memory/total usage GA (project) Total memory usage GAUGE , INT64 , By cloudsql database Total RAM usage in bytes.
- After sampling, data is not visible for up to 165 seconds. event type : Kind of Mysql event, one of [innodb hash0hash,innodb memory,innodb row0sel,sql table,sql thd main,sql dd,sql string,mysys iocache] database/mysql/memory/global GA (project) Global memory allocated GAUGE , DOUBLE , By cloudsql database The total allocated memory, reported by performance schema.
- After sampling, data is not visible for up to 165 seconds. database/sqlserver/memory/checkpoint page count GA (project) Checkpoint pages DELTA , INT64 , 1 cloudsql database Total number of pages flushed to disk by a checkpoint or other operation that requires all dirty pages to be flushed.
- After sampling, data is not visible for up to 165 seconds. state : The state of the instance. database/memory/components BETA (project) Memory components GAUGE , DOUBLE , 1 cloudsql database Memory stats components in percentage as usage, cache and free memory for the database.

### Quotas and limits \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud SQL Admin API produces detailed metrics that can help you track your usage of the API, monitor performance of your Cloud SQL instance and the API, and discover problems between your instance and the API.
- Each instance of a Cloud Run service or job can have 100 connections to the database, and as this service or job scales, the total number of connections per deployment can grow.
- Each instance of a Cloud Run service or job can have 100 connections to the database, and as this service or job scales, the total number of connections per deployment can grow.
- If there are more than 500 databases, then only the top 500 are included for a given metric.

### "General best practices \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also use the total usage metric to observe the percentage of available memory that your Cloud SQL instance is using, including memory used by the database container and memory allocated by the operating system cache.
- You can view the transaction ID usage of your instance on the Metrics Explorer page in the Google Cloud console by setting the Resource Type as Cloud SQL Database and Metric as Percentage of instance's transaction IDs consumed .
- When looking for signs of memory exhaustion, you should primarily use the usage metric.
- By observing the difference between the two metrics, you can identify how much memory is used by processes versus how much is used by the operating system cache.

