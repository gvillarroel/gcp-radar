---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.941Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "SLA-impacting database flags"
feature_slug: "sla-impacting-database-flags"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/error-messages"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list"
keywords:
  - "sla"
  - "impacting"
  - "database"
  - "flags"
  - "sql"
  - "mysql"
  - "added"
  - "innodb"
---

# SLA-impacting database flags

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL added the innodb_flush_log_at_trx_commit and sync_binlog database flags that affect the Cloud SQL SLA.

## Extended Definition

Cloud SQL for MySQL added the innodb_flush_log_at_trx_commit and sync_binlog database flags that affect the Cloud SQL SLA.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Connect to the database and run these commands for details on each type: SHOW VARIABLES LIKE 'innodb log file%' ; SELECT ROUND ( SUM ( LENGTH ( argument ) / POW ( 1024 , 2 ), 2 ) AS GB from mysql . general log ; SHOW BINARY LOGS ; Log files are hard to read.
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Slow performance after restarting MySQL.
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- The following command lets you check the redo log size: SHOW VARIABLES LIKE 'innodb log file%'; You can check the size of general log , if it is enabled, with the help of this command: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) AS GB from mysql.general log; If needed, you can truncate your log tables by using the API.

### Cloud SQL error messages \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more about using mysqldump flags for managed import migration, see Allowed and default initial sync flags Error message Troubleshooting InnoDB: Write to file ./ibtmp1 failed at offset XXXX, YYYY bytes should have been written, only 0 were written.
- After a database restart, MySQL needs to load table(s) into the InnoDB dictionary cache on first access.
- Table db.table doesn't exist If one or more InnoDB table(s) disappeared after a MySQL restart and the MySQL error log has the following warnings at the same time, it is due to the foreign key and referenced key columns being out-of-sync. [ Warning ] InnoDB: Load table db.table failed, the table has missing foreign key indexes.
- Once the table is accessed and loaded into the dictionary cache, InnoDB doesn't check and complain about a foreign key mismatch until the next database restart The foreign key mismatch should be fixed to avoid any further issues.

### Method: flags.list \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/flags/list)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Method: flags.list Stay organized with collections Save and categorize content based on your preferences.
- By default, this method returns flags for all database types and versions. flagScope enum ( SqlFlagScope ) Optional.
- Query parameters Parameters databaseVersion string Database type and version you want to retrieve flags for.
- Lists all available database flags for Cloud SQL instances.

