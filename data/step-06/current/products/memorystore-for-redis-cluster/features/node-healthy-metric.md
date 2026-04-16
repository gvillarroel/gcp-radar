---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.718Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "node healthy metric"
feature_slug: "node-healthy-metric"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification"
keywords:
  - "node"
  - "healthy"
  - "metric"
  - "the"
  - "server"
  - "indicates"
  - "whether"
  - "cluster"
---

# node healthy metric

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The /node/server/healthy metric indicates whether a cluster node is available and functioning correctly.

## Extended Definition

The /node/server/healthy metric indicates whether a cluster node is available and functioning correctly.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster)
- [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)

## Supporting Pages

### Best practices for Memorystore for Redis Cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Client discovery Client discovery is usually done by issuing a CLUSTER SLOT , CLUSTER NODE , or CLUSTER SHARDS command to the Redis server.
- Depending on the number of replicas you provision per node, we recommend the following /cluster/cpu/maximum utilization CPU usage targets: For instances with one replica per node, target a /cluster/cpu/maximum utilization value of 0.5 seconds for the primary and 0.5 seconds for the replica.
- For example, when the client application starts up or loses connection from the server and must perform cluster discovery, one common mistake is that the client application makes several reconnection and discovery requests without adding exponential backoff upon retry.
- When a MOVED redirection is received from the server, such as in the situation of a failover when all slots served by the former primary node are taken over by the replica, or re-sharding when slots are being moved from the source primary to the target primary node.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "createTime" : string , "state" : enum ( State ) , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "pscConfigs" : [ { object ( PscConfig ) } ] , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "pscConnections" : [ { object ( PscConnection ) } ] , "stateInfo" : { object ( StateInfo ) } , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( ClusterPersistenceConfig ) } , "redisConfigs" : { string : string , ... } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "crossClusterReplicationConfig" : { object ( CrossClusterReplicationConfig ) } , "pscServiceAttachments" : [ { object ( PscServiceAttachment ) } ] , "clusterEndpoints" : [ { object ( ClusterEndpoint ) } ] , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "labels" : { string : string , ... } , "aclPolicy" : string , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field size gb can be only one of the following: "sizeGb" : integer // End of list of possible types for union field size gb . // Union field shard count can be only one of the following: "shardCount" : integer // End of list of possible types for union field shard count . // Union field precise size gb can be only one of the following: "preciseSizeGb" : number // End of list of possible types for union field precise size gb . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field maintenance policy can be only one of the following: "maintenancePolicy" : { object ( ClusterMaintenancePolicy ) } // End of list of possible types for union field maintenance policy . // Union field maintenance schedule can be only one of the following: "maintenanceSchedule" : { object ( ClusterMaintenanceSchedule ) } // End of list of possible types for union field maintenance schedule . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field async cluster endpoints deletion enabled can be only one of the // following: "asyncClusterEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async cluster endpoints deletion enabled . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Required.
- Indicates whether the ACL rules applied to the cluster are in sync with the latest ACL policy rules.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Target number of shards for redis cluster Union field target replica count . target replica count can be only one of the following: targetReplicaCount integer Target number of replica nodes per shard.
- If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique id} . metadata object { createTime : The time the operation was created. endTime : The time the operation finished running. target : Server-defined resource path for the target of the operation. verb : Name of the verb executed by the operation. statusDetail : Human-readable status of the operation, if any. cancelRequested : Identifies whether the user has requested cancellation of the operation.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/update_cluster)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "createTime" : string , "state" : enum ( State ) , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "pscConfigs" : [ { object ( PscConfig ) } ] , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "pscConnections" : [ { object ( PscConnection ) } ] , "stateInfo" : { object ( StateInfo ) } , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( ClusterPersistenceConfig ) } , "redisConfigs" : { string : string , ... } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "crossClusterReplicationConfig" : { object ( CrossClusterReplicationConfig ) } , "pscServiceAttachments" : [ { object ( PscServiceAttachment ) } ] , "clusterEndpoints" : [ { object ( ClusterEndpoint ) } ] , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "labels" : { string : string , ... } , "aclPolicy" : string , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field size gb can be only one of the following: "sizeGb" : integer // End of list of possible types for union field size gb . // Union field shard count can be only one of the following: "shardCount" : integer // End of list of possible types for union field shard count . // Union field precise size gb can be only one of the following: "preciseSizeGb" : number // End of list of possible types for union field precise size gb . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field maintenance policy can be only one of the following: "maintenancePolicy" : { object ( ClusterMaintenancePolicy ) } // End of list of possible types for union field maintenance policy . // Union field maintenance schedule can be only one of the following: "maintenanceSchedule" : { object ( ClusterMaintenanceSchedule ) } // End of list of possible types for union field maintenance schedule . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field async cluster endpoints deletion enabled can be only one of the // following: "asyncClusterEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async cluster endpoints deletion enabled . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Required.
- Indicates whether the ACL rules applied to the cluster are in sync with the latest ACL policy rules.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Target number of shards for redis cluster Union field target replica count . target replica count can be only one of the following: targetReplicaCount integer Target number of replica nodes per shard.
- If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique id} . metadata object { createTime : The time the operation was created. endTime : The time the operation finished running. target : Server-defined resource path for the target of the operation. verb : Name of the verb executed by the operation. statusDetail : Human-readable status of the operation, if any. cancelRequested : Identifies whether the user has requested cancellation of the operation.

### "Cluster and node specification \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Maximum writable capacity Node type and size Max capacity given cluster shape of 250 primary nodes and 0 replicas per node Max capacity given cluster shape of 125 primary nodes and 1 replicas per node Max capacity given cluster shape of 83 primary nodes and 2 replicas per node Max capacity given cluster shape of 62 primary nodes and 3 replicas per node Max capacity given cluster shape of 50 primary nodes and 4 replicas per node Max capacity given cluster shape of 41 primary nodes and 5 replicas per node redis-shared-core-nano - 1.4 GB 350 GB 175 GB 116.2 GB 86.8 GB 70 GB 57.4 GB redis-standard-small - 6.5 GB 1,625 GB 812.5 GB 539.5 GB 403 GB 325 GB 266.5 GB redis-highmem-medium - 13 GB 3,250 GB 1,625 GB 1,079 GB 806 GB 650 GB 533 GB redis-highmem-xlarge - 58 GB 14,500 GB 7,250 GB 4,814 GB 3,596 GB 2,900 GB 2,378 GB Performance Using the OSS memtier benchmarking tool in the us-central1 region yielded 120,000 - 130,000 operations per second per 2 vCPU node ( redis-standard-small and redis-highmem-medium ) with microseconds latency and 1KiB data size.
- The redis-standard-small node type lets you provision small clusters, and grow your cluster by smaller increments at potentially lower costs than other node types. redis-standard-small also offers the advantage of distributing your keyspace across more nodes with a higher total vCPU count.
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.
- Scale an instance As part of creating a Memorystore for Redis Cluster instance, you choose a node type for the instance and specify the number of shards for the instance.

