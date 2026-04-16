---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.157Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automatic backup plan copy to secondary clusters"
feature_slug: "automatic-backup-plan-copy-to-secondary-clusters"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups"
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
keywords:
  - "plans"
  - "copy"
  - "automatic"
  - "secondary"
  - "plan"
  - "primary"
  - "clusters"
  - "backup"
---

# Automatic backup plan copy to secondary clusters

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Backup plans on a primary cluster are automatically copied when a secondary cluster is created.

## Extended Definition

Backup plans on a primary cluster are automatically copied when a secondary cluster is created.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Supporting Pages

### "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable the Backup and DR API To use enhanced backups with your AlloyDB clusters, you must first enable the Backup and DR API: Enable the Backup and DR API Required permissions To configure enhanced backups for your AlloyDB clusters, you need the alloydb.backupDrAdmin role or the following permissions: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForAlloydbCluster backupdr.backupPlanAssociations.fetchForAlloydbCluster backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.getForAlloydbCluster backupdr.backupPlanAssociations.triggerBackupForAlloydbCluster backupdr.backupPlanAssociations.deleteForAlloydbCluster backupdr.backupPlans.useForAlloydbCluster backupdr.bvdataSources.get backupdr.bvdataSources.list Note: If your backup vault is in a different project than your AlloyDB cluster, you need to grant the backupdr.alloydbOperator role to the vault service agent.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate a backup plan with your AlloyDB cluster, run the following command: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID Replace the following: BPA ID : the backup plan association ID.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate the new backup plan with your cluster, follow these steps: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID \ Replace the following: BPA ID : the backup plan association ID.
- Associate the new backup plan with your cluster After you remove the existing backup plan, you can associate a new backup plan with your AlloyDB cluster: Console To associate the new backup plan with your cluster, follow these steps: In the Google Cloud console, go to the Clusters page.

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Find details about the cluster's backup plans in the Continuous backups and recovery policy and Automated backup policy tables. gcloud Use the gcloud alloydb clusters describe command to display details about the cluster.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Configure backup plans Stay organized with collections Save and categorize content based on your preferences.
- View backup plans You can view details about your cluster's automated or continuous backup plans.
- It also has continuous backup enabled, with a 10-day recovery window. automatedBackupPolicy : enabled : true location : us - central1 weeklySchedule : daysOfWeek : - MONDAY - THURSDAY startTimes : - hours : 1 clusterType : PRIMARY continuousBackupConfig : enabled : true recoveryWindowDays : 10 continuousBackupInfo : encryptionInfo : encryptionType : GOOGLE DEFAULT ENCRYPTION schedule : - MONDAY - TUESDAY - WEDNESDAY - THURSDAY - FRIDAY - SATURDAY - SUNDAY clusterType : PRIMARY createTime : '2023-01-23T02:42:56.953258476Z' databaseVersion : POSTGRES 14 encryptionInfo : encryptionType : GOOGLE DEFAULT ENCRYPTION name : [ ... ] reconciling : false state : READY uid : [ ... ] updateTime : '2023-02-06T19:08:57.367222025Z' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- Continuous backup properties for this cluster. secondaryConfig object ( SecondaryConfig ) Cross Region replication config specific to SECONDARY cluster. primaryConfig object ( PrimaryConfig ) Output only.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . backupPlanAssociation string The BackupPlanAssociation resource that was used to enable BackupDR protection for this cluster. dataSource string The DataSource resource that represents the cluster in BackupDR. continuousBackupPreviouslyEnabled boolean Whether continuous backup was previously enabled prior to enabling BackupDR protection for this cluster. continuousBackupPreviouslyEnabledTime string ( Timestamp format) The time when continuous backup was previously enabled prior to enabling BackupDR protection for this cluster.

