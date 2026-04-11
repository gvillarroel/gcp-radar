---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.937Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "innodb_buffer_pool_size flag"
feature_slug: "innodb-buffer-pool-size-flag"
latest_feature_date: "2021-03-12"
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
  - "size"
  - "flag"
  - "sql"
  - "for"
  - "mysql"
---

# innodb_buffer_pool_size flag

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports the innodb_buffer_pool_size database flag.

## Extended Definition

Cloud SQL for MySQL supports the innodb_buffer_pool_size database flag.

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
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- March 12, 2021 Feature Cloud SQL for MySQL now supports the innodb buffer pool size flag.
- December 18, 2023 Feature Cloud SQL for MySQL now supports the following flags for MySQL 8.0: innodb buffer pool dump now innodb buffer pool load abort innodb buffer pool load now For more information about these flags, see supported flags .
- After memory usage stabilizes at a lower value, MySQL increases the value of innodb buffer pool size incrementally to its original value.
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. innodb page type : Kind of InnoDB page, one of [dirty, free, Total] database/mysql/innodb/buffer pool read requests count GA (project) Innodb Buffer Pool Read Requests Count DELTA , INT64 , 1 cloudsql database Logical read requests from InnoDB buffer pool, since the last sample.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/innodb log waits count GA (project) Transaction waits for Innodb logbuffer flush DELTA , INT64 , 1 cloudsql database Total number of transactions wait for space to become available in the InnoDB log buffer, to help tune innodb log buffer size configuration.
- After sampling, data is not visible for up to 165 seconds. operation type : Kind of InnoDB row operations, one of [delete, insert, read, update] database/mysql/innodb buffer pool pages dirty GA (project) InnoDB dirty pages GAUGE , INT64 , 1 cloudsql database Number of unflushed pages in the InnoDB buffer pool.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/buffer pool reads count GA (project) Innodb Buffer Pool Reads Count DELTA , INT64 , 1 cloudsql database Logical reads that InnoDB could not satisfy from the buffer pool, and had to read directly from disk, since the last sample.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following command lets you check the redo log size: SHOW VARIABLES LIKE 'innodb log file%'; You can check the size of general log , if it is enabled, with the help of this command: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) AS GB from mysql.general log; If needed, you can truncate your log tables by using the API.
- Connect to the database and run these commands for details on each type: SHOW VARIABLES LIKE 'innodb log file%' ; SELECT ROUND ( SUM ( LENGTH ( argument ) / POW ( 1024 , 2 ), 2 ) AS GB from mysql . general log ; SHOW BINARY LOGS ; Log files are hard to read.
- To learn more about using mysqldump flags for managed import migration, see Allowed and default initial sync flags The initial data migration was successful, but no data is being replicated.
- Cloud SQL allows caching of data in the InnoDB buffer pool.

