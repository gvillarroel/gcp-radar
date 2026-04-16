---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.068Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Enhanced backups"
feature_slug: "enhanced-backups"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "tier"
  - "project"
  - "enhanced"
  - "level"
  - "management"
  - "backups"
  - "backup"
---

# Enhanced backups

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Enhanced backups add an enhanced backup tier with project-level backup management and deletion capabilities for AlloyDB clusters; Enhanced backups add an enhanced backup tier with project-level backup management and deletion capabilities for AlloyDB clusters.

## Extended Definition

Enhanced backups add an enhanced backup tier with project-level backup management and deletion capabilities for AlloyDB clusters; Enhanced backups add an enhanced backup tier with project-level backup management and deletion capabilities for AlloyDB clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- Source ID: `site-docs-reference-2`
- Final score: 292
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View and manage enhanced backups at the project level To view and organize backups for all clusters in your project across both standard and enhanced storage tiers, follow these steps: In the Google Cloud console, go to the Backups page.
- The standard tier is the default, but you can choose Enhanced backups to use Backup and DR for centralized management.
- Enable the Backup and DR API To use enhanced backups with your AlloyDB clusters, you must first enable the Backup and DR API: Enable the Backup and DR API Required permissions To configure enhanced backups for your AlloyDB clusters, you need the alloydb.backupDrAdmin role or the following permissions: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForAlloydbCluster backupdr.backupPlanAssociations.fetchForAlloydbCluster backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.getForAlloydbCluster backupdr.backupPlanAssociations.triggerBackupForAlloydbCluster backupdr.backupPlanAssociations.deleteForAlloydbCluster backupdr.backupPlans.useForAlloydbCluster backupdr.bvdataSources.get backupdr.bvdataSources.list Note: If your backup vault is in a different project than your AlloyDB cluster, you need to grant the backupdr.alloydbOperator role to the vault service agent.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate a backup plan with your AlloyDB cluster, run the following command: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID Replace the following: BPA ID : the backup plan association ID.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- The name of the backup resource with the format: projects/{project}/locations/{location}/backupVaults/{backupvault id}/dataSources/{datasource id}/backups/{backupId} MaintenanceVersionSelectionPolicy Maintenance version selection policy defines the criteria to select the specific maintenance version to which to update the cluster's instances.
- The name of the backup resource with the format: projects/{project}/locations/{region}/backups/{backupId} MigrationSource Subset of the source instance configuration that is available when reading the cluster resource.
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- You can focus on your data and let AlloyDB handle the following operations: Backups: protect your data with on-demand and automated scheduled backups, and a continuous recovery system that enables point-in-time recovery.
- Database administration AlloyDB manages the underlying infrastructure of your database, such as automated backups, security patches, and resource allocation.
- In addition, AlloyDB can create and store complete backups of your cluster's data, either on demand or on a regular schedule.
- For more information, see About backups .

