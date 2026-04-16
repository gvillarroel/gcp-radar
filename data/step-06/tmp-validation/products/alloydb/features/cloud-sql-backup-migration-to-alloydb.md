---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.100Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cloud SQL backup migration to AlloyDB"
feature_slug: "cloud-sql-backup-migration-to-alloydb"
latest_feature_date: "2025-05-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "including"
  - "migration"
  - "postgresql"
  - "supports"
  - "backup"
---

# Cloud SQL backup migration to AlloyDB

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports migration from Cloud SQL for PostgreSQL by using a Cloud SQL backup, including Google Cloud CLI support; AlloyDB supports setting up clusters by using a copy of a Cloud SQL for PostgreSQL backup.

## Extended Definition

AlloyDB supports migration from Cloud SQL for PostgreSQL by using a Cloud SQL backup, including Google Cloud CLI support; AlloyDB supports setting up clusters by using a copy of a Cloud SQL for PostgreSQL backup.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- Quickstart: Create and connect to a database Perform a vector search Migration overview Connection overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- AlloyDB is designed for demanding workloads, including: Hybrid Transactional and Analytical Processing (HTAP): run complex analytical queries against your live transactional data without impacting performance or availability.
- You can focus on your data and let AlloyDB handle the following operations: Backups: protect your data with on-demand and automated scheduled backups, and a continuous recovery system that enables point-in-time recovery.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- These solutions are organized by the following categories: Application and Vertical ISVs Business intelligence and advanced analytics Data governance, modeling, and security Data integration, optimization, and migration Data quality and observability Application and Vertical ISVs Commvault Solution Commvault Cloud Platform Category Backup and Restore Description Commvault Platform - Essential provides enterprise-grade data protection and cyber resilience.
- For advanced database users, DBeaver suggests a powerful SQL editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more Partner references Database driver AlloyDB for PostgreSQL Powering AlloyDB with DBeaver Partner Advantage page Direct link Hex Solution Hex Category Advanced Analytics Description Hex is a platform for collaborative analytics and data science.
- Partner references AlloyDB integration with Hightouch Sync data to AlloyDB with Hightouch Sync data from PostgreSQL to AlloyDB Partner Advantage page Direct link Integrate.io Integrate.io ETL Solution Integrate.io ETL Category Data integration and migration Description Integrate.io ETL platform lets organizations integrate, process, and prepare data for analytics on the cloud.
- It is specifically designed to handle complex migrations to PostgreSQL-compatible engines like AlloyDB, automating schema conversion, code remediation, and data validation to accelerate the modernization journey.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- The name of the backup resource with the format: projects/{project}/locations/{region}/backups/{backup id} MigrationSource JSON representation { "hostPort" : string , "referenceId" : string , "sourceType" : enum ( MigrationSourceType ) } Fields hostPort string Output only.
- Cluster created via DMS migration. cloudsqlBackupRunSource object ( CloudSQLBackupRunSource ) Output only.
- Cluster created from backup. migrationSource object ( MigrationSource ) Output only.

