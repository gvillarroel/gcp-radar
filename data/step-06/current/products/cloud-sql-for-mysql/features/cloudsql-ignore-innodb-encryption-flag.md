---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.864Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "cloudsql_ignore_innodb_encryption flag"
feature_slug: "cloudsql-ignore-innodb-encryption-flag"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig"
keywords:
  - "cloudsql"
  - "ignore"
  - "innodb"
  - "encryption"
  - "flag"
  - "sql"
  - "for"
  - "mysql"
---

# cloudsql_ignore_innodb_encryption flag

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports the cloudsql_ignore_innodb_encryption flag to ignore InnoDB table encryption during instance migration.

## Extended Definition

Cloud SQL for MySQL supports the cloudsql_ignore_innodb_encryption flag to ignore InnoDB table encryption during instance migration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- December 13, 2023 Feature You can now use the cloudsql ignore innodb encryption flag to ignore InnoDB table encryption when you migrate instances to Cloud SQL.
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .
- December 18, 2023 Feature Cloud SQL for MySQL now supports the following flags for MySQL 8.0: innodb buffer pool dump now innodb buffer pool load abort innodb buffer pool load now For more information about these flags, see supported flags .
- May 19, 2023 Feature Cloud SQL for MySQL has launched two database flags that impact the Cloud SQL SLA : innodb flush log at trx commit and sync binlog .

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Slow performance after restarting MySQL.
- Go to the Logs Explorer page for your project and run a query like this: resource.type = "cloudsql database" resource.labels.database id = " INSTANCE-ID " log name = "projects/ PROJECT-ID /logs/cloudsql.googleapis.com%2Fmysql-slow.log" You can download the logs in JSON or TEXT format for local processing.
- Connect to the database and run these commands for details on each type: SHOW VARIABLES LIKE 'innodb log file%' ; SELECT ROUND ( SUM ( LENGTH ( argument ) / POW ( 1024 , 2 ), 2 ) AS GB from mysql . general log ; SHOW BINARY LOGS ; Log files are hard to read.
- To learn more about using mysqldump flags for managed import migration, see Allowed and default initial sync flags The initial data migration was successful, but no data is being replicated.

### MySqlSyncConfig \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation SyncFlags JSON representation MySQL-specific external server sync settings.
- Currently used for the MySQL external server initial dump.
- SyncFlags Initial sync flags for certain Cloud SQL APIs.
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback MySqlSyncConfig Stay organized with collections Save and categorize content based on your preferences.

