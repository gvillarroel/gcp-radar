---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.949Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 5.6.42 support"
feature_slug: "mysql-5-6-42-support"
latest_feature_date: "2020-02-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr"
keywords:
  - "mysql"
  - "42"
  - "sql"
  - "for"
  - "is"
  - "generally"
  - "available"
---

# MySQL 5.6.42 support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL 5.6.42 is generally available.

## Extended Definition

Cloud SQL for MySQL 5.6.42 is generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- July 29, 2024 Feature Migrating your external MySQL 5.7 and 8.0 databases into Cloud SQL for MySQL by using Percona XtraBackup physical files is now generally available (GA).
- Feature Query insights for Cloud SQL Enterprise Plus edition is now generally available (GA) for your Cloud SQL Enterprise Plus edition for MySQL instances.
- December 17, 2020 Feature In Cloud SQL for MySQL, parallel replication is generally available for improving replication performance.
- July 26, 2024 Feature IAM group authentication is now generally available (GA) for Cloud SQL for MySQL.

### MySqlSyncConfig \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Currently used for the MySQL external server initial dump.
- SyncFlags Initial sync flags for certain Cloud SQL APIs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback MySqlSyncConfig Stay organized with collections Save and categorize content based on your preferences.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample output from the SHOW BINLOG EVENTS command: +------------------+-----+-------------+-----------+-------------+-----------------------------------------------------+ Log name Pos Event type Server id End log pos Info +------------------+-----+-------------+-----------+-------------+-----------------------------------------------------+ mysql-bin.000011 4 Format desc 88955285 120 Server ver: 5.6.30-log, Binlog ver: 4 mysql-bin.000011 120 Query 88955285 211 create database db1 mysql-bin.000011 211 Query 88955285 310 use db1; CREATE TABLE t (c CHAR(20)) mysql-bin.000011 310 Query 88955285 381 BEGIN mysql-bin.000011 381 Table map 88955285 426 table id: 18 (db1.t) mysql-bin.000011 310 Query 88955285 381 BEGIN mysql-bin.000011 426 Write rows 88955285 464 table id: 18 flags: STMT END F mysql-bin.000011 464 Xid 88955285 495 COMMIT / xid=56 / mysql-bin.000011 495 Query 88955285 566 BEGIN mysql-bin.000011 566 Table map 88955285 611 table id: 18 (db1.t) mysql-bin.000011 611 Write rows 88955285 649 table id: 18 flags: STMT END F mysql-bin.000011 649 Xid 88955285 680 COMMIT / xid=57 / mysql-bin.000011 680 Query 88955285 751 BEGIN mysql-bin.000011 751 Table map 88955285 796 table id: 18 (db1.t) mysql-bin.000011 796 Write rows 88955285 834 table id: 18 flags: STMT END F mysql-bin.000011 834 Xid 88955285 865 COMMIT / xid=58 / mysql-bin.000011 865 Query 88955285 977 use db1; DROP TABLE t / generated by server / +------------------+-----+-------------+-----------+-------------+-----------------------------------------------------+ 16 rows in set (0.04 sec) To restore up to the DROP TABLE statement, bolded in the previous sample, you would use 865 in mysql-bin.000011 as the recovery position.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /getLatestRecoveryTime" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#getLatestRecoveryTime", "earliestRecoveryTime": "2023-06-10T17:23:59.648821586Z", "latestRecoveryTime": "2023-06-20T17:23:59.648821586Z" } REST v1beta4 Unavailable instance Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE NAME : the name of the instance for which you're querying for the latest recovery time HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME /getLatestRecoveryTime To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Get the earliest and latest recovery time For an available instance, you can perform a PITR to any timestamp in the instance's PITR window.
- REST v1 Unavailable instance Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE NAME : the name of the instance for which you're querying for the latest recovery time HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME /getLatestRecoveryTime To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

