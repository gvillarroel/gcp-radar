---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.507Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Maintenance windows"
feature_slug: "maintenance-windows"
latest_feature_date: "2024-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "maintenance"
  - "windows"
  - "alloydb"
  - "clusters"
  - "can"
  - "configured"
  - "weekly"
  - "non"
---

# Maintenance windows

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB clusters can be configured with weekly maintenance windows for non-emergency maintenance events.

## Extended Definition

AlloyDB clusters can be configured with weekly maintenance windows for non-emergency maintenance events.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Non-emergency maintenance for an AlloyDB cluster with no configured maintenance windows can occur any time except for the hours between 6 AM and 10 PM on weekdays, in the local time of the region where the cluster is located.
- You can set maintenance windows for both primary and secondary AlloyDB clusters.
- Emergency maintenance events, such as urgent security patches, might occur outside default maintenance times or configured maintenance windows.
- Clusters with maintenance windows typically receive updates after the changelog and release notes are updated.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- AlloyDB regularly performs maintenance and upgrades on customer clusters.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- JSON representation { "maintenanceWindows" : [ { object ( MaintenanceWindow ) } ] , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] } Fields maintenanceWindows[] object ( MaintenanceWindow ) Preferred windows to perform maintenance.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://alloydb.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list clusters", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Message for requesting list of Clusters ListClustersRequest JSON representation { "parent" : string , "pageSize" : integer , "pageToken" : string , "filter" : string , "orderBy" : string } Fields parent string Required.
- MaintenanceUpdatePolicy JSON representation { "maintenanceWindows" : [ { object ( MaintenanceWindow ) } ] , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] } Fields maintenanceWindows[] object ( MaintenanceWindow ) Preferred windows to perform maintenance.
- Cluster JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- AutomatedBackupPolicy JSON representation { "backupWindow" : string , "encryptionConfig" : { object ( EncryptionConfig ) } , "location" : string , "labels" : { string : string , ... } , // Union field schedule can be only one of the following: "weeklySchedule" : { object ( WeeklySchedule ) } // End of list of possible types for union field schedule . // Union field retention can be only one of the following: "timeBasedRetention" : { object ( TimeBasedRetention ) } , "quantityBasedRetention" : { object ( QuantityBasedRetention ) } // End of list of possible types for union field retention . // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . } Fields backupWindow string ( Duration format) The length of the time window during which a backup can be taken.

