---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.155Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Point-in-time recovery for AlloyDB Omni backups"
feature_slug: "point-in-time-recovery-for-alloydb-omni-backups"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
keywords:
  - "point"
  - "recovery"
  - "time"
  - "backups"
  - "omni"
---

# Point-in-time recovery for AlloyDB Omni backups

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni backups support point-in-time recovery.

## Extended Definition

AlloyDB Omni backups support point-in-time recovery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- You can focus on your data and let AlloyDB handle the following operations: Backups: protect your data with on-demand and automated scheduled backups, and a continuous recovery system that enables point-in-time recovery.
- Data backup and disaster recovery AlloyDB features a continuous backup and recovery system that lets you create a new cluster based on any point in time within an adjustable retention period.
- For more information, see Register a model endpoint and Evaluate semantic queries with AI operators . alloydb ai nl : Enables interaction with your database using natural language.
- At any time, you can restore from a backup to a new AlloyDB cluster that contains all the data from the original cluster at the moment of the backup's creation.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- If continuous backups and recovery was recently enabled, the earliest restorable time is the creation time of the earliest eligible backup within this cluster's continuous backup recovery window.
- For example, assuming a point in time recovery is attempted at 04/16/2025 3:23:00PM with a 14d recovery window, the earliest restorable time would be 04/02/2025 3:23:00PM.
- After a cluster has had continuous backups enabled for the duration of its recovery window, the earliest restorable time becomes "now minus the recovery window".
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The value of this argument defines both of the following aspects of continuous backup and recovery: The maximum distance into the past, relative to the present, that you can perform a point-in-time recovery based on continuous backups.
- The value of this argument defines both of the following aspects of continuous backup and recovery: The maximum distance into the past, relative to the present, that you can perform a point-in-time recovery based on continuous backups.
- To ensure that you can restore to any point in time within your recovery window, AlloyDB retains backups and logs for one day longer than the specified value.
- To ensure that you can restore to any point in time within your recovery window, AlloyDB retains backups and logs for one day longer than the specified value.

