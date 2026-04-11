---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.796Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Subset database migration from external server"
feature_slug: "subset-database-migration-from-external-server"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "subset"
  - "database"
  - "migration"
  - "from"
  - "external"
  - "server"
  - "this"
  - "lets"
---

# Subset database migration from external server

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature lets you migrate a subset of databases from an external server to a destination Cloud SQL for MySQL instance.

## Extended Definition

This feature lets you migrate a subset of databases from an external server to a destination Cloud SQL for MySQL instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- To use this replication option, see Configuring Cloud SQL to replicate from an external server and Using a custom import to set up replication from large external databases .
- March 31, 2026 Feature You can now migrate a subset of databases from an external server to a destination Cloud SQL for MySQL instance.
- For more information, see Configuring Cloud SQL to replicate from an external server and Using a managed import to set up replication from external databases .
- August 01, 2023 Feature You can now migrate large MySQL databases from external sources to Cloud SQL for MySQL faster using Database Migration Service .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- To use this replication option, see Configuring Cloud SQL to replicate from an external server and Using a custom import to set up replication from large external databases .
- March 31, 2026 Cloud SQL for MySQL Feature You can now migrate a subset of databases from an external server to a destination Cloud SQL for MySQL instance.
- Cloud SQL for PostgreSQL Feature You can now migrate a subset of databases from an external server to a destination Cloud SQL instance.
- You can use this to track the last time that a row in a database table is modified. pg background (version 1.2): lets you run arbitrary commands in a background worker. pg squeeze (version 1.5): removes unused space from a table and lets you use an index to sort records or rows (tuples) of the table. tcn (version 1.0): provides a trigger function that notifies listeners of changes to the content of database tables.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- The following command lets you check the redo log size: SHOW VARIABLES LIKE 'innodb log file%'; You can check the size of general log , if it is enabled, with the help of this command: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) AS GB from mysql.general log; If needed, you can truncate your log tables by using the API.
- You can find out the size of the general logs by connecting to the database and running this query: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) from mysql.general log; You want to find out what is using up storage.
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Slow performance after restarting MySQL.

