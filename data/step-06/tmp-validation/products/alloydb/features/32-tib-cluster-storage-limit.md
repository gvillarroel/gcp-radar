---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.194Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "32 TiB cluster storage limit"
feature_slug: "32-tib-cluster-storage-limit"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-settings"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies"
keywords:
  - "increases"
  - "limit"
  - "storage"
  - "cluster"
---

# 32 TiB cluster storage limit

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB increases the storage limit per cluster to 32 TiB.

## Extended Definition

AlloyDB increases the storage limit per cluster to 32 TiB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-settings](https://docs.cloud.google.com/alloydb/docs/cluster-settings)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- All cluster resources share a storage layer, which scales as needed.
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . backupPlanAssociation string The BackupPlanAssociation resource that was used to enable BackupDR protection for this cluster. dataSource string The DataSource resource that represents the cluster in BackupDR. continuousBackupPreviouslyEnabled boolean Whether continuous backup was previously enabled prior to enabling BackupDR protection for this cluster. continuousBackupPreviouslyEnabledTime string ( Timestamp format) The time when continuous backup was previously enabled prior to enabling BackupDR protection for this cluster.

### "View cluster and instance settings \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-settings](https://docs.cloud.google.com/alloydb/docs/cluster-settings)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Since AlloyDB auto scales storage, so you don't need to explicitly set a storage limit.
- Private networking: Private services access or Private Service Connect N AlloyDB supports private IP through one of the following: Private services access : To create a private services access-enabled AlloyDB cluster, select Network: Private IP in the Google Cloud console.
- Private networking: Private services access settings N If you create a private services access-enabled AlloyDB cluster, then you must also configure the following: Network : Select the VPC network that is already configured with private services access.
- Primary cluster Primary instance Secondary cluster Secondary instance Read pool instance Settings Modifiable after creation Values Cluster ID N Enter a cluster ID to uniquely identify your cluster.

### "AlloyDB database indexing strategies \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies](https://docs.cloud.google.com/alloydb/docs/reference/indexing-strategies)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- You can also run the advisor manually at any time by altering the search path in the session and following these steps: Given the following table with 10m rows in it and no indexes: Table "idx advisor.user test" + ------------------+--------------------------------+-----------+----------+---------+---------+-------- Column Type Collation Nullable Default Storage + ------------------+--------------------------------+-----------+----------+---------+---------+-------- id integer not null plain value numeric main user id integer plain product id integer plain product meas val integer plain effective date timestamp ( 3 ) without time zone plain + ------------------+--------------------------------+-----------+----------+---------+---------+-------- Access method : heap Run a query that could possibly benefit from an index: SELECT from idx advisor . user test where id = 500533 ; + ------------------------------------------------------------------------------------------------------- QUERY PLAN + ------------------------------------------------------------------------------------------------------- Gather ( cost = 1000 .
- 106 ms Manually execute the advisor: SELECT FROM google db advisor recommend indexes (); + -------------------------------------------------+------------------------------+ index estimated storage size in mb + -------------------------------------------------+------------------------------+ CREATE INDEX ON "idx advisor" . "user test" ( "id" ) 2492 + -------------------------------------------------+------------------------------+ ( 1 row ) Time : 219 .
- 347 ) SELECT p . id , creationdate , score , title , viewcount , SUBSTRING ( p . body , 0 , 50 ) as body FROM posts p WHERE 1 = 1 AND title is not null ORDER BY body embeddings < = > embedding ( 'textembedding-gecko@003' , 'What are left turning tendencies' ):: vector LIMIT 5 ; - [ RECORD 1 ] + ----------------------------------------------------------------------------------------- id 55164 creationdate 2018 - 09 - 18 03 : 34 : 15 .
- 569 ) SELECT p . id , creationdate , score , title , viewcount , SUBSTRING ( p . body , 0 , 50 ) as body FROM posts p WHERE 1 = 1 AND title is not null ORDER BY body embeddings < = > embedding ( 'textembedding-gecko@003' , 'What are left turning tendencies' ):: vector LIMIT 5 ; - [ RECORD 1 ] + ----------------------------------------------------------------------------------------- id 55164 creationdate 2018 - 09 - 18 03 : 34 : 15 .

