---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.266Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Version upgrade"
feature_slug: "version-upgrade"
latest_feature_date: "2025-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance"
keywords:
  - "version"
  - "upgrade"
  - "allows"
  - "upgrading"
  - "memorystore"
  - "for"
  - "valkey"
  - "instance"
---

# Version upgrade

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Allows upgrading a Memorystore for Valkey instance to a newer Valkey version; Allows upgrading a Memorystore for Valkey instance from Valkey 7.2 to 8.0.

## Extended Definition

Allows upgrading a Memorystore for Valkey instance to a newer Valkey version; Allows upgrading a Memorystore for Valkey instance from Valkey 7.2 to 8.0.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version)
- [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance)

## Supporting Pages

### "About upgrading the Valkey version of an instance \_|\_ Memorystore for\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version)
- Source ID: `site-iam-reference`
- Final score: 346
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page contains the following information: Best practices to upgrade the version of your Memorystore for Valkey instance How your instance behaves during a version upgrade operation For more information about upgrading your instance's version, see Upgrade the Valkey version of an instance .
- Best practices to upgrade your instance's version This section provides guidance for upgrading the version of your Memorystore for Valkey instance.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About upgrading the Valkey version of an instance Stay organized with collections Save and categorize content based on your preferences.
- Version upgrade behavior Memorystore for Valkey upgrades the version of your instance by updating all nodes within the instance.

### Supported versions \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions](https://docs.cloud.google.com/memorystore/docs/valkey/supported-versions)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Valkey version 8.0 The following table outlines Memorystore support of some major features introduced by Valkey 8.0: Feature Description Asynchronous I/O threading for performance boost This feature significantly improves performance by enabling parallel processing between the main thread and I/O threads.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Supported versions Stay organized with collections Save and categorize content based on your preferences.
- Memorystore for Valkey supports Valkey versions 7.2, 8.0, and 9.0.
- Current versions This table shows the supported Valkey versions and when each version was last updated: Valkey major version Last update 9.0 March 11, 2026 8.0 October 2, 2024 7.2 August 30, 2024 Valkey version 9.0 Valkey 9.0's major features focus on performance and scalability enhancements, including hash field expiration for more granular data management.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Tool: create instance Create a Memorystore for Valkey instance.
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- Curl Request curl --location 'https://memorystore.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create instance", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for CreateInstance .
- Home Documentation Databases Memorystore Memorystore for Valkey Reference Send feedback MCP Tools Reference: memorystore.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Tool: get instance Get detailed information about a Memorystore for Valkey instance.
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- Curl Request curl --location 'https://memorystore.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get instance", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for GetInstance .
- Home Documentation Databases Memorystore Memorystore for Valkey Reference Send feedback MCP Tools Reference: memorystore.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

