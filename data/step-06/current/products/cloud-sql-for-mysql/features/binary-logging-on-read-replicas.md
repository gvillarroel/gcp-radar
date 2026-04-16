---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.979Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Binary logging on read replicas"
feature_slug: "binary-logging-on-read-replicas"
latest_feature_date: "2020-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages"
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
keywords:
  - "binary"
  - "logging"
  - "read"
  - "replicas"
  - "sql"
  - "mysql"
  - "supports"
---

# Binary logging on read replicas

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports binary logging on read replicas for MySQL 5.7 and 8.0.

## Extended Definition

Cloud SQL for MySQL supports binary logging on read replicas for MySQL 5.7 and 8.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)

## Supporting Pages

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ERROR BINLOG NOT ENABLED The requested operation isn't allowed with an instance that doesn't have a binary log or binary logging enabled.
- ERROR DISALLOWED ENABLING BACKUPS FOR READ REPLICA A backup can't be enabled for read replicas.
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Cloud SQL Admin API error messages Stay organized with collections Save and categorize content based on your preferences.
- ERROR SSL CERTIFICATE COMMON NAME ALREADY EXISTS The operation failed to generate a client certificate because another certificate with the same common name exists.

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl If you are using MySQL version 5.7 or later, enable binary logging: To enable binary logging, save the following JSON in a file named request.JSON, then invoke the curl command to enable binary logging. { "settings" : { "backupConfiguration" : { "enabled" : false, "binaryLogEnabled" : true } } } To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Binary logging is supported on read replica instances (MySQL 5.7 and later only).
- Binary logging is supported on read replica instances (MySQL 5.7 and later only.
- Enable binary logging on a replica with the same gcloud CLI command, using the replica's instance name instead of the primary's instance name. gcloud sql instances patch REPLICA INSTANCE NAME \ --enable-bin-log \ --enforce-new-sql-network-architecture Binary logging durability on the replica (but not on the primary) instance can be set with the sync binlog flag, which controls how often the MySQL server synchronizes the binary log to disk.

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-reference-3`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- For PITR binary logs that are stored on disk , that are being switched to Cloud Storage, or that are already switched to Cloud Storage, Cloud SQL retains the logs for the minimum value set for one of the following configurations: The transactionLogRetentionDays backup configuration setting The expire logs days or the binlog expire logs seconds flag Cloud SQL doesn't set any values for these flags if the binary logs are stored on disk, are being switched to Cloud Storage, or have already been switched to Cloud Storage.
- If you want additional logs to be available on disk — for example, to browse the binary logs with the mysqlbinlog utility — then increase the values of these flags.
- If you are restoring to an instance with read replicas, then you must delete all replicas and recreate them after the restore operation completes.
- Log storage for PITR PITR uses binary logging to archive logs.

