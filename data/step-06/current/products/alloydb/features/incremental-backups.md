---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.521Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Incremental backups"
feature_slug: "incremental-backups"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "incremental"
  - "backups"
  - "alloydb"
  - "automated"
  - "continuous"
  - "now"
  - "use"
  - "reduce"
---

# Incremental backups

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB automated and continuous backups now use incremental backups to reduce storage use and improve backup speed.

## Extended Definition

AlloyDB automated and continuous backups now use incremental backups to reduce storage use and improve backup speed.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Find details about the cluster's backup plans in the Continuous backups and recovery policy and Automated backup policy tables. gcloud Use the gcloud alloydb clusters describe command to display details about the cluster.
- This example sets a cluster to take an automated backup at midnight UTC on every Monday and Thursday: gcloud alloydb clusters update my - cluster \ -- automated - backup - days - of - week = MONDAY , THURSDAY \ -- automated - backup - start - times = 00 : 00 \ -- region = us - central1 \ -- project = my - project To encrypt scheduled backups using a CMEK key instead of the default Google-managed encryption, provide these additional arguments: --automated-backup-encryption-key= KEY ID : the ID of the CMEK key to use. --automated-backup-encryption-key-keyring= KEYRING ID : the ID of the key's keyring. --automated-backup-encryption-key-location= LOCATION ID : the ID of that keyring's region.
- Use the gcloud alloydb clusters update command to define a schedule for creating automated backups: gcloud alloydb clusters update CLUSTER ID \ --automated-backup-days-of-week = DAYS LIST \ --automated-backup-start-times = UTC TIMES LIST \ --region = REGION ID \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster you want to define the schedule for.
- Click Update . gcloud To disable automated backups, use the gcloud alloydb clusters update command. gcloud alloydb clusters update CLUSTER ID \ --disable-automated-backup \ --region = REGION ID \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster to disable automated backups on.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- BackupDrEnabledWindow JSON representation { "enabledTime" : string , "backupPlanAssociation" : string , "dataSource" : string , "continuousBackupPreviouslyEnabled" : boolean , "continuousBackupPreviouslyEnabledTime" : string , "continuousBackupPreviousRecoveryWindowDays" : integer , "automatedBackupPreviouslyEnabled" : boolean , "logRetentionPeriod" : string , // Union field disabled time can be only one of the following: "disabledTime" : string // End of list of possible types for union field disabled time . } Fields enabledTime string ( Timestamp format) Time when the BackupDR protection for this cluster was enabled.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . continuousBackupPreviousRecoveryWindowDays integer The retention set for the continuous backup that was previously enabled prior to enabling BackupDR protection for this cluster. automatedBackupPreviouslyEnabled boolean Whether automated backup was previously enabled prior to enabling BackupDR protection for this cluster. logRetentionPeriod string ( Duration format) The retention period for logs generated by BackupDR for this cluster.
- If continuous backups and recovery was recently enabled, the earliest restorable time is the creation time of the earliest eligible backup within this cluster's continuous backup recovery window.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- BackupDrEnabledWindow JSON representation { "enabledTime" : string , "backupPlanAssociation" : string , "dataSource" : string , "continuousBackupPreviouslyEnabled" : boolean , "continuousBackupPreviouslyEnabledTime" : string , "continuousBackupPreviousRecoveryWindowDays" : integer , "automatedBackupPreviouslyEnabled" : boolean , "logRetentionPeriod" : string , // Union field disabled time can be only one of the following: "disabledTime" : string // End of list of possible types for union field disabled time . } Fields enabledTime string ( Timestamp format) Time when the BackupDR protection for this cluster was enabled.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . continuousBackupPreviousRecoveryWindowDays integer The retention set for the continuous backup that was previously enabled prior to enabling BackupDR protection for this cluster. automatedBackupPreviouslyEnabled boolean Whether automated backup was previously enabled prior to enabling BackupDR protection for this cluster. logRetentionPeriod string ( Duration format) The retention period for logs generated by BackupDR for this cluster.
- If continuous backups and recovery was recently enabled, the earliest restorable time is the creation time of the earliest eligible backup within this cluster's continuous backup recovery window.

