---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.904Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Advanced disaster recovery"
feature_slug: "advanced-disaster-recovery"
latest_feature_date: "2024-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
  - "https://docs.cloud.google.com/sql/docs/mysql/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
keywords:
  - "advanced"
  - "disaster"
  - "recovery"
  - "provides"
  - "capabilities"
  - "sql"
  - "enterprise"
  - "plus"
---

# Advanced disaster recovery

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Advanced disaster recovery provides disaster recovery capabilities for Cloud SQL Enterprise Plus edition instances; Advanced disaster recovery lets Cloud SQL Enterprise Plus users designate a cross-region DR replica, perform failover, and restore the original deployment with zero-data-loss switchover.

## Extended Definition

Advanced disaster recovery provides disaster recovery capabilities for Cloud SQL Enterprise Plus edition instances; Advanced disaster recovery lets Cloud SQL Enterprise Plus users designate a cross-region DR replica, perform failover, and restore the original deployment with zero-data-loss switchover.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)

## Supporting Pages

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- Observability Cloud SQL Enterprise Plus edition provides the following observability enhancements: Query insights : advanced query performance diagnostics and filtering with up to 30-day metric retention, up to 1 MB query length limit, and a 200 query plan sample maximum.
- Cloud SQL editions features The following table provides an overview of key features enhancements available for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- Availability Cloud SQL Enterprise Plus edition provides the following availability enhancements: Near-zero downtime : sub-second downtime for maintenance and planned operations, including patching and scaling.

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- Source ID: `site-docs-reference-required-5`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No What's next Plan and prepare to create a new instance.
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica.
- A DR replica is an optional configuration for Enterprise Plus edition instances.
- ReplicationCluster A primary instance and disaster recovery (DR) replica pair.

