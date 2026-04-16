---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.931Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "InnoDB page compression"
feature_slug: "innodb-page-compression"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "innodb"
  - "page"
  - "compression"
  - "sql"
  - "supports"
  - "mysql"
  - "later"
---

# InnoDB page compression

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports InnoDB page compression for MySQL 5.7 and 8.0 and later.

## Extended Definition

Cloud SQL supports InnoDB page compression for MySQL 5.7 and 8.0 and later.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. innodb page type : Kind of InnoDB page, one of [dirty, free, Total] database/mysql/innodb/buffer pool read requests count GA (project) Innodb Buffer Pool Read Requests Count DELTA , INT64 , 1 cloudsql database Logical read requests from InnoDB buffer pool, since the last sample.
- After sampling, data is not visible for up to 165 seconds. operation type : Kind of InnoDB row operations, one of [delete, insert, read, update] database/mysql/innodb buffer pool pages dirty GA (project) InnoDB dirty pages GAUGE , INT64 , 1 cloudsql database Number of unflushed pages in the InnoDB buffer pool.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/buffer pool pages GA (project) InnoDB Buffer Pool Pages GAUGE , INT64 , 1 cloudsql database Number of InnoDB buffer pool pages, innodb page type field stores count of InnoDB pages in each state.
- After sampling, data is not visible for up to 165 seconds. page type : Page types in data cache. database/mysql/innodb/data fsyncs count GA (project) Innodb Data Fsyncs Count DELTA , INT64 , 1 cloudsql database InnoDB fsync() calls, since the last sample.

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl If you are using MySQL version 5.7 or later, enable binary logging: To enable binary logging, save the following JSON in a file named request.JSON, then invoke the curl command to enable binary logging. { "settings" : { "backupConfiguration" : { "enabled" : false, "binaryLogEnabled" : true } } } To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Follow steps 4-6 for each new cascading replica that you want to create. gcloud If you're using MySQL version 5.7 or later, then enable binlogs for the primary of the new replica: gcloud sql instances patch --enable-bin-log PARENT REPLICA NAME Replace PARENT REPLICA NAME with the name of the parent replica.
- If you're creating a replica from a primary instance for MySQL 8.4 and later, and the Cloud SQL edition for the instance is either Enterprise or is Enterprise Plus, then you don't have to specify a value for this parameter.
- MySQL PostgreSQL SQL Server This page describes how to create a read replica for a Cloud SQL instance.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- The following command lets you check the redo log size: SHOW VARIABLES LIKE 'innodb log file%'; You can check the size of general log , if it is enabled, with the help of this command: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) AS GB from mysql.general log; If needed, you can truncate your log tables by using the API.
- Go to the Logs Explorer page for your project and run a query like this: resource.type = "cloudsql database" resource.labels.database id = " INSTANCE-ID " log name = "projects/ PROJECT-ID /logs/cloudsql.googleapis.com%2Fmysql-slow.log" You can download the logs in JSON or TEXT format for local processing.
- Connect to the database and run these commands for details on each type: SHOW VARIABLES LIKE 'innodb log file%' ; SELECT ROUND ( SUM ( LENGTH ( argument ) / POW ( 1024 , 2 ), 2 ) AS GB from mysql . general log ; SHOW BINARY LOGS ; Log files are hard to read.

