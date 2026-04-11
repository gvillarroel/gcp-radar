---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.930Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL stored procedures"
feature_slug: "cloud-sql-stored-procedures"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr"
keywords:
  - "sql"
  - "stored"
  - "procedures"
  - "for"
  - "mysql"
  - "provides"
  - "operations"
  - "such"
---

# Cloud SQL stored procedures

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL provides stored procedures for operations such as adding or dropping secondary indexes on read replicas.

## Extended Definition

Cloud SQL for MySQL provides stored procedures for operations such as adding or dropping secondary indexes on read replicas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- June 30, 2021 Feature Cloud SQL for MySQL now offers stored procedures that you can execute on your instances.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- July 31, 2025 Feature Cloud SQL now offers two options of backup services to manage your instance's backups: Enhanced backups ( Preview ): backups are managed and stored in a centralized backup management project that leverages the Backup and DR service , and provides enforced retention, granular scheduling, and longer retention.
- December 15, 2022 Feature You can now allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL for MySQL and make queries against this data over a private connection.

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- From a command line, run mysqldump : mysqldump --databases DATABASE NAME -h INSTANCE IP -u USERNAME -p \ --hex-blob --single-transaction --set-gtid-purged = OFF \ --default-character-set = utf8mb4 > SQL FILE .sql Note: To export stored procedures from a Cloud SQL instance, include the --routines flag.
- If your SQL dump file contains DEFINER clauses (views, triggers, stored procedures, and so on), then depending on the order these statements are executed, using this file for import could fail.
- If binary logging is enabled and you want to export triggers and stored procedures, you must also set the log bin trust function creators flag in your MySQL database.
- To export triggers and/or stored procedures, use the mysqldump tool.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- POSITION : The position in the binary log to restore up to, such as 50001356 . gcloud sql instances clone SOURCE INSTANCE NAME \ NEW INSTANCE NAME \ --bin-log-file-name = " BINLOG FILE NAME " \ --bin-log-position = POSITION For example, a gcloud sql instances clone command might look similar to the following: gcloud sql instances clone instance1 \ instance1-clone \ --bin-log-file-name = mysql-bin.0000031 \ --bin-log-position = 107 \ Use the operation ID returned from the clone command to check the status of the restore operation. gcloud sql operations describe OPERATION ID When the operation is in progress, a state of RUNNING is returned.
- Note: MySQL provides a more sophisticated tool for examining binary logs called mysqlbinlog .
- BINLOG FILE NAME : Name for the binary log, such as mysql-bin.187288 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 Create the new instance using the binary log filename and recovery position you have identified: Before using any of the request data, make the following replacements: project-id : The project ID target-instance-id : The target instance ID source-instance-id : The source instance ID binary-log-file-name The name of the binary log file binary-log-position The position within the binary log file HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "kind": "sql#cloneContext", "destinationInstanceName": " target-instance-id ", "binLogCoordinates": { "kind": "sql#binLogCoordinates", "binLogFileName": " binary-log-file-name ", "binLogPosition": " binary-log-position " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

