---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.269Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Multi-VPC support"
feature_slug: "multi-vpc-support"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-multiple-vpc-networking"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/networking"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance"
keywords:
  - "multi"
  - "vpc"
  - "lets"
  - "multiple"
  - "vpcs"
  - "connect"
  - "to"
  - "the"
---

# Multi-VPC support

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Lets multiple VPCs connect to the same Memorystore for Valkey instance through Private Service Connect endpoints.

## Extended Definition

Lets multiple VPCs connect to the same Memorystore for Valkey instance through Private Service Connect endpoints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-multiple-vpc-networking](https://docs.cloud.google.com/memorystore/docs/valkey/about-multiple-vpc-networking)
- [https://docs.cloud.google.com/memorystore/docs/valkey/networking](https://docs.cloud.google.com/memorystore/docs/valkey/networking)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance)

## Supporting Pages

### "About multiple VPC networking \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-multiple-vpc-networking](https://docs.cloud.google.com/memorystore/docs/valkey/about-multiple-vpc-networking)
- Source ID: `site-iam-reference`
- Final score: 278
- Re-rank relevance: N/A

Evidence snippets:
- For a tutorial on setting up multiple VPCs for instances provisioned with automatically registered connections, see Configure an existing instance to use multiple VPC networks .
- For a tutorial on setting up multiple VPCs using only user-registered connections, see Set up multiple VPC networks using user-registered Private Service Connect connections .
- Application connection requirements To connect your application using a multiple VPC networking setup, Memorystore has networking requirements that you must meet.
- If you want to keep these connections because your existing application uses them, you can keep them and only add user-registered connections for new VPCs.

### Networking \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/networking](https://docs.cloud.google.com/memorystore/docs/valkey/networking)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about deploying Private Service Connect endpoints in Google Cloud projects other than the project that hosts the instance, see Set up multiple VPC networks using user-registered Private Service Connect connections and Set up multiple VPC networks for instances provisioned with automatically registered Private Service Connect connections .
- To connect to Memorystore for Valkey across multiple VPC networks, do one of the following: If the instance has automatically registered Private Service Connect connections , then set up connectivity from the VPC networks to the instance.
- The page also describes the following information about networking: Networking setup guidance Supported networking architectures Frequently asked questions Note: Memorystore for Valkey also supports networking for multiple VPCs.
- If the instance isn't provisioned with automatically registered Private Service Connect connections, then set up multiple VPC networks by using user-registered VPC connections .

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- PscAutoConnection JSON representation { "pscConnectionId" : string , "ipAddress" : string , "forwardingRule" : string , "projectId" : string , "network" : string , "serviceAttachment" : string , "pscConnectionStatus" : enum ( PscConnectionStatus ) , "connectionType" : enum ( ConnectionType ) , // Union field ports can be only one of the following: "port" : integer // End of list of possible types for union field ports . } Fields pscConnectionId string Output only.
- A PSC connection to an instance could either be created through Service Connectivity Automation (auto connection) during the cluster creation, or it could be created by customer themeslves (user-created connection). connection can be only one of the following: pscAutoConnection object ( PscAutoConnection ) Immutable.
- ConnectionDetail JSON representation { // Union field connection can be only one of the following: "pscAutoConnection" : { object ( PscAutoConnection ) } , "pscConnection" : { object ( PscConnection ) } // End of list of possible types for union field connection . } Fields Union field connection .

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- PscAutoConnection JSON representation { "pscConnectionId" : string , "ipAddress" : string , "forwardingRule" : string , "projectId" : string , "network" : string , "serviceAttachment" : string , "pscConnectionStatus" : enum ( PscConnectionStatus ) , "connectionType" : enum ( ConnectionType ) , // Union field ports can be only one of the following: "port" : integer // End of list of possible types for union field ports . } Fields pscConnectionId string Output only.
- A PSC connection to an instance could either be created through Service Connectivity Automation (auto connection) during the cluster creation, or it could be created by customer themeslves (user-created connection). connection can be only one of the following: pscAutoConnection object ( PscAutoConnection ) Immutable.
- ConnectionDetail JSON representation { // Union field connection can be only one of the following: "pscAutoConnection" : { object ( PscAutoConnection ) } , "pscConnection" : { object ( PscConnection ) } // End of list of possible types for union field connection . } Fields Union field connection .

