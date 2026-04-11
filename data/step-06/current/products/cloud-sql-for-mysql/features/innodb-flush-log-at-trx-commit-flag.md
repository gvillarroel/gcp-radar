---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.930Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "innodb_flush_log_at_trx_commit flag"
feature_slug: "innodb-flush-log-at-trx-commit-flag"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
keywords:
  - "innodb"
  - "flush"
  - "log"
  - "at"
  - "trx"
  - "commit"
  - "flag"
  - "sql"
---

# innodb_flush_log_at_trx_commit flag

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports the innodb_flush_log_at_trx_commit database flag.

## Extended Definition

Cloud SQL for MySQL supports the innodb_flush_log_at_trx_commit database flag.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- May 19, 2023 Feature Cloud SQL for MySQL has launched two database flags that impact the Cloud SQL SLA : innodb flush log at trx commit and sync binlog .
- June 29, 2021 Feature Cloud SQL for MySQL now supports the innodb flush log at trx commit flag .
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .
- Note : The data type for the innodb flush log at timeout flag has changed from an unsigned integer to a double.

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. operation type : Kind of operation handler type, one of [delete, read first, read key, read last, read next, read prev, read rnd, read rnd next, update, write]. database/mysql/innodb/active transactions GA (project) InnoDB Active Transactions GAUGE , INT64 , 1 cloudsql database Number of active Transaction details(trx which are in progress), Values in bracket are meant for innodb transaction state (Total/running/lock wait/rolling back/committing).
- After sampling, data is not visible for up to 165 seconds. state : Values in bracket are meant for innodb transaction state, one of [Total, running, lock wait, rolling back, committing]. database/mysql/innodb/active trx longest time GA (project) InnoDB Active TRX Longest Time GAUGE , INT64 , 1 cloudsql database Largest transaction time from currently active innodb transactions.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/innodb log waits count GA (project) Transaction waits for Innodb logbuffer flush DELTA , INT64 , 1 cloudsql database Total number of transactions wait for space to become available in the InnoDB log buffer, to help tune innodb log buffer size configuration.
- After sampling, data is not visible for up to 165 seconds. database/mysql/innodb/lsn GA (project) InnoDB LSN GAUGE , INT64 , By cloudsql database Value of Innodb current/flushed/last checkpoint log sequence number.

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Set the innodb flush log at trx commit flag on the read replica to 2.
- Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl If you are using MySQL version 5.7 or later, enable binary logging: To enable binary logging, save the following JSON in a file named request.JSON, then invoke the curl command to enable binary logging. { "settings" : { "backupConfiguration" : { "enabled" : false, "binaryLogEnabled" : true } } } To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- On the primary instance that's displaying the error message, set the parallel replication flags: Modify the binlog transaction dependency tracking and transaction write set extraction flags: binlog transaction dependency tracking=COMMIT ORDER transaction write set extraction=OFF Add the slave pending jobs size max flag: slave pending jobs size max=33554432 Modify the transaction write set extraction flag: transaction write set extraction=XXHASH64 Modify the binlog transaction dependency tracking flag: binlog transaction dependency tracking=WRITESET Replica creation fails with timeout.
- Enable binary logging on a replica with the same gcloud CLI command, using the replica's instance name instead of the primary's instance name. gcloud sql instances patch REPLICA INSTANCE NAME \ --enable-bin-log \ --enforce-new-sql-network-architecture Binary logging durability on the replica (but not on the primary) instance can be set with the sync binlog flag, which controls how often the MySQL server synchronizes the binary log to disk.

