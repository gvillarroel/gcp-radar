---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.982Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 8.0 support"
feature_slug: "mysql-8-0-support"
latest_feature_date: "2020-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
keywords:
  - "mysql"
  - "sql"
  - "generally"
  - "available"
---

# MySQL 8.0 support

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL 8.0 is generally available.

## Extended Definition

Cloud SQL for MySQL 8.0 is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Relevant log files include: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Slow performance after restarting MySQL.
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- The following command lets you check the redo log size: SHOW VARIABLES LIKE 'innodb log file%'; You can check the size of general log , if it is enabled, with the help of this command: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) AS GB from mysql.general log; If needed, you can truncate your log tables by using the API.

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-reference-3`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Relevant log files include: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- Recovery backups Cloud SQL attempts to retain at least one last daily backup of every active instance, if there are no good backups available as part of the automated backup policy.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-reference-3`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- If you want additional logs to be available on disk — for example, to browse the binary logs with the mysqlbinlog utility — then increase the values of these flags.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Restore an instance overview Stay organized with collections Save and categorize content based on your preferences.
- If the instance is unavailable, then you can use the API to get the earliest and latest recovery time to which you can restore the instance and perform the recovery to that time.
- MySQL PostgreSQL SQL Server Cloud SQL lets you restore your instances from a backup, or by performing point-in-time recovery (PITR).

