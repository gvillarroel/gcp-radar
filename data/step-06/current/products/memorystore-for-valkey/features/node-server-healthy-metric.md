---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.261Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "/node/server/healthy metric"
feature_slug: "node-server-healthy-metric"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance"
keywords:
  - "node"
  - "server"
  - "healthy"
  - "metric"
  - "the"
  - "is"
  - "generally"
  - "available"
---

# /node/server/healthy metric

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

The /node/server/healthy metric is generally available for Memorystore for Valkey; The /node/server/healthy metric shows whether a Memorystore for Valkey instance node is available and functioning correctly.

## Extended Definition

The /node/server/healthy metric is generally available for Memorystore for Valkey; The /node/server/healthy metric shows whether a Memorystore for Valkey instance node is available and functioning correctly.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence)
- [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)

## Supporting Pages

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target engine version can be only one of the following: "targetEngineVersion" : string // End of list of possible types for union field target engine version . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Output only.
- However, for scenarios, where the primary instance is unavailable(e.g. regional outage), a Getinstance request can be sent to any other member instance and this field will list all the member instances participating in cross instance replication.
- This field is used to determine the available maintenance versions for the self service update. allowFewerZonesDeployment (deprecated) boolean This item is deprecated!

### About RDB persistence \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recovery time If a node fails and needs to recover data from a snapshot, the node is unavailable during recovery.
- Manage a snapshot's performance impact You can monitor the performance impact that a snapshot has on your Memorystore instance by viewing the metrics available through Cloud Monitoring such as CPU usage and memory usage.
- Recovery behavior Memorystore for Valkey nodes failover to replicas as the primary recovery mechanism, rather than loading from a snapshot.
- Data consistency on recovery Important: An RDB snapshot is a point in time snapshot of node data based on the snapshot interval you set.

### Best practices for Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- When a MOVED redirection is received from the server, such as in the situation of a failover when all slots served by the former primary node are taken over by the replica, or re-sharding when slots are being moved from the source primary to the target primary node.
- For example, when the client application starts up or loses connection from the server and must perform node discovery, one common mistake is that the client application makes several reconnection and discovery requests without adding exponential backoff upon retry.
- CPU usage best practices If an unexpected zonal outage occurs, this leads to reduced CPU resources for your instance due to lost capacity from nodes in the unavailable zone.
- There's a 33% chance that the zone where your instance is located goes down, as opposed to a 100% chance that nodes, which are located in the unavailable zone, are impacted.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target engine version can be only one of the following: "targetEngineVersion" : string // End of list of possible types for union field target engine version . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Output only.
- Operation JSON representation { "name" : string , "metadata" : { "@type" : string , field1 : ... , ... } , "done" : boolean , // Union field result can be only one of the following: "error" : { object ( Status ) } , "response" : { "@type" : string , field1 : ... , ... } // End of list of possible types for union field result . } Fields name string The server-assigned name, which is only unique within the same service that originally returns it.
- However, for scenarios, where the primary instance is unavailable(e.g. regional outage), a Getinstance request can be sent to any other member instance and this field will list all the member instances participating in cross instance replication.

