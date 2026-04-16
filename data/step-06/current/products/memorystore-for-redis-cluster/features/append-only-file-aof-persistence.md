---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.723Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Append-only file (AOF) persistence"
feature_slug: "append-only-file-aof-persistence"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster"
keywords:
  - "append"
  - "only"
  - "file"
  - "aof"
  - "persistence"
  - "the"
  - "supports"
---

# Append-only file (AOF) persistence

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports append-only file persistence.

## Extended Definition

The service supports append-only file persistence.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "About AOF persistence \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AOF persistence overview The Redis AOF (Append Only File) persistence mode prioritizes data durability.
- Memorystore for Redis Cluster also supports RDB persistence, but you must choose either the AOF or RDB persistence mode, because both can't be enabled at the same time.
- Sync setting The sync setting ( appendfsync ) for the AOF persistence mode determines how often the cached data in memory is saved to durable storage.
- If a system failure or restart occurs, the server replays AOF file commands sequentially to restore your data.

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- Source ID: `site-iam-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It stores data durably by recording every write command to a log file called the Append-Only File (AOF).
- Persistence : Memorystore for Redis Cluster supports two types of persistence: RDB persistence: The Redis database (RDB) feature protects your data by saving snapshots of your data on durable storage.
- If a system failure or restart occurs, then the server replays AOF file commands sequentially to restore your data.
- Rotate the primary CMEK key version If you rotate the primary key version of your CMEK and create a new primary key version, then the following conditions apply for backups and persistence: The latest primary key version of your CMEK encrypts new backups.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "createTime" : string , "state" : enum ( State ) , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "pscConfigs" : [ { object ( PscConfig ) } ] , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "pscConnections" : [ { object ( PscConnection ) } ] , "stateInfo" : { object ( StateInfo ) } , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( ClusterPersistenceConfig ) } , "redisConfigs" : { string : string , ... } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "crossClusterReplicationConfig" : { object ( CrossClusterReplicationConfig ) } , "pscServiceAttachments" : [ { object ( PscServiceAttachment ) } ] , "clusterEndpoints" : [ { object ( ClusterEndpoint ) } ] , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "labels" : { string : string , ... } , "aclPolicy" : string , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field size gb can be only one of the following: "sizeGb" : integer // End of list of possible types for union field size gb . // Union field shard count can be only one of the following: "shardCount" : integer // End of list of possible types for union field shard count . // Union field precise size gb can be only one of the following: "preciseSizeGb" : number // End of list of possible types for union field precise size gb . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field maintenance policy can be only one of the following: "maintenancePolicy" : { object ( ClusterMaintenancePolicy ) } // End of list of possible types for union field maintenance policy . // Union field maintenance schedule can be only one of the following: "maintenanceSchedule" : { object ( ClusterMaintenanceSchedule ) } // End of list of possible types for union field maintenance schedule . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field async cluster endpoints deletion enabled can be only one of the // following: "asyncClusterEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async cluster endpoints deletion enabled . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Required.
- Persistence config (RDB, AOF) for the cluster. redisConfigs map (key: string, value: string) Optional.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Target number of shards for redis cluster Union field target replica count . target replica count can be only one of the following: targetReplicaCount integer Target number of replica nodes per shard.
- A PSC connection to a cluster could either be created through Service Connectivity Automation (auto-registered connection) during the cluster creation, or it could be created by customer themselves (user-registered connection). connection can be only one of the following: pscAutoConnection object ( PscAutoConnection ) Detailed information of a PSC connection that is created through service connectivity automation. pscConnection object ( PscConnection ) Detailed information of a PSC connection that is created by the customer who owns the cluster.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "createTime" : string , "state" : enum ( State ) , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "pscConfigs" : [ { object ( PscConfig ) } ] , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "pscConnections" : [ { object ( PscConnection ) } ] , "stateInfo" : { object ( StateInfo ) } , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( ClusterPersistenceConfig ) } , "redisConfigs" : { string : string , ... } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "crossClusterReplicationConfig" : { object ( CrossClusterReplicationConfig ) } , "pscServiceAttachments" : [ { object ( PscServiceAttachment ) } ] , "clusterEndpoints" : [ { object ( ClusterEndpoint ) } ] , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "labels" : { string : string , ... } , "aclPolicy" : string , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field size gb can be only one of the following: "sizeGb" : integer // End of list of possible types for union field size gb . // Union field shard count can be only one of the following: "shardCount" : integer // End of list of possible types for union field shard count . // Union field precise size gb can be only one of the following: "preciseSizeGb" : number // End of list of possible types for union field precise size gb . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field maintenance policy can be only one of the following: "maintenancePolicy" : { object ( ClusterMaintenancePolicy ) } // End of list of possible types for union field maintenance policy . // Union field maintenance schedule can be only one of the following: "maintenanceSchedule" : { object ( ClusterMaintenanceSchedule ) } // End of list of possible types for union field maintenance schedule . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field async cluster endpoints deletion enabled can be only one of the // following: "asyncClusterEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async cluster endpoints deletion enabled . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Required.
- Persistence config (RDB, AOF) for the cluster. redisConfigs map (key: string, value: string) Optional.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Target number of shards for redis cluster Union field target replica count . target replica count can be only one of the following: targetReplicaCount integer Target number of replica nodes per shard.
- A PSC connection to a cluster could either be created through Service Connectivity Automation (auto-registered connection) during the cluster creation, or it could be created by customer themselves (user-registered connection). connection can be only one of the following: pscAutoConnection object ( PscAutoConnection ) Detailed information of a PSC connection that is created through service connectivity automation. pscConnection object ( PscConnection ) Detailed information of a PSC connection that is created by the customer who owns the cluster.

