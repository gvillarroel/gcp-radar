---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.114Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cross-region replication with up to five secondary regions"
feature_slug: "cross-region-replication-with-up-to-five-secondary-regions"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "five"
  - "replication"
  - "secondary"
  - "regions"
  - "region"
  - "cross"
---

# Cross-region replication with up to five secondary regions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB cross-region replication supports up to five secondary regions for stronger disaster recovery and geographically distributed workloads.

## Extended Definition

AlloyDB cross-region replication supports up to five secondary regions for stronger disaster recovery and geographically distributed workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- As a further method of disaster recovery, you can achieve cross-region replication by creating secondary clusters in separate Google Cloud regions.
- For more information, see About cross-region replication .
- For more information about region-specific considerations, see Geography and regions .
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- If you want to create secondary clusters that automatically track and replicate data changes made in their source clusters, see About cross-region replication .
- C4A is supported in the following regions: asia-east1 asia-southeast1 europe-west1 europe-west2 europe-west3 europe-west4 us-central1 us-east1 us-east4 Note: For asia-southeast1 , only 1 vCPU is supported.
- Note: For developmental and sandbox workloads, consider the 1 vCPU shape, which is available in selected regions.
- For developmental and sandbox workloads, consider the 1 vCPU shape, which is available in selected regions.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Continuous backup properties for this cluster. secondaryConfig object ( SecondaryConfig ) Cross Region replication config specific to SECONDARY cluster. primaryConfig object ( PrimaryConfig ) Output only.
- Cross Region replication config specific to PRIMARY cluster. satisfiesPzs boolean Output only.
- SecondaryConfig JSON representation { "primaryClusterName" : string } Fields primaryClusterName string The name of the primary cluster name with the format: projects/{project}/locations/{region}/clusters/{cluster id} PrimaryConfig JSON representation { "secondaryClusterNames" : [ string ] } Fields secondaryClusterNames[] string Output only.
- Cluster JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.

