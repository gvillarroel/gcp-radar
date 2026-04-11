---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.863Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "InnoDB buffer pool management flags"
feature_slug: "innodb-buffer-pool-management-flags"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "innodb"
  - "buffer"
  - "pool"
  - "management"
  - "flags"
  - "sql"
  - "for"
  - "mysql"
---

# InnoDB buffer pool management flags

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports the innodb_buffer_pool_dump_now, innodb_buffer_pool_load_abort, and innodb_buffer_pool_load_now flags for MySQL 8.0.

## Extended Definition

Cloud SQL for MySQL supports the innodb_buffer_pool_dump_now, innodb_buffer_pool_load_abort, and innodb_buffer_pool_load_now flags for MySQL 8.0.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- December 18, 2023 Feature Cloud SQL for MySQL now supports the following flags for MySQL 8.0: innodb buffer pool dump now innodb buffer pool load abort innodb buffer pool load now For more information about these flags, see supported flags .
- March 12, 2021 Feature Cloud SQL for MySQL now supports the innodb buffer pool size flag.
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .
- November 21, 2025 Feature To help prevent out-of-memory (OOM) events, you can enable managed buffer pool for Cloud SQL for MySQL 8.0 and later instances.

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. innodb page type : Kind of InnoDB page, one of [dirty, free, Total] database/mysql/innodb/buffer pool read requests count GA (project) Innodb Buffer Pool Read Requests Count DELTA , INT64 , 1 cloudsql database Logical read requests from InnoDB buffer pool, since the last sample.
- After sampling, data is not visible for up to 165 seconds. operation type : Kind of InnoDB row operations, one of [delete, insert, read, update] database/mysql/innodb buffer pool pages dirty GA (project) InnoDB dirty pages GAUGE , INT64 , 1 cloudsql database Number of unflushed pages in the InnoDB buffer pool.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/buffer pool reads count GA (project) Innodb Buffer Pool Reads Count DELTA , INT64 , 1 cloudsql database Logical reads that InnoDB could not satisfy from the buffer pool, and had to read directly from disk, since the last sample.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/buffer pool pages GA (project) InnoDB Buffer Pool Pages GAUGE , INT64 , 1 cloudsql database Number of InnoDB buffer pool pages, innodb page type field stores count of InnoDB pages in each state.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connect to the database and run these commands for details on each type: SHOW VARIABLES LIKE 'innodb log file%' ; SELECT ROUND ( SUM ( LENGTH ( argument ) / POW ( 1024 , 2 ), 2 ) AS GB from mysql . general log ; SHOW BINARY LOGS ; Log files are hard to read.
- To learn more about using mysqldump flags for managed import migration, see Allowed and default initial sync flags The initial data migration was successful, but no data is being replicated.
- Cloud SQL allows caching of data in the InnoDB buffer pool.
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Slow performance after restarting MySQL.

