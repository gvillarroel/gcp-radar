---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.262Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Maintenance changelogs"
feature_slug: "maintenance-changelogs"
latest_feature_date: "2025-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance"
keywords:
  - "maintenance"
  - "changelogs"
  - "memorystore"
  - "for"
  - "valkey"
  - "now"
  - "provides"
  - "with"
---

# Maintenance changelogs

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Valkey now provides maintenance changelogs with details about updates in new maintenance versions.

## Extended Definition

Memorystore for Valkey now provides maintenance changelogs with details about updates in new maintenance versions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)

## Supporting Pages

### About maintenance \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- Source ID: `site-iam-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default maintenance windows By default, Memorystore updates your instance in the following windows according to your instance's time zone: Weekday window (Monday to Friday): 10 PM to 6 AM Weekend window: Friday, 10 PM to Monday, 6 AM Gradual deployment strategy Memorystore for Valkey performs deployments with a progressively increasing scope, and at a rate that allows for failure detection early enough to mitigate any impact and establish stability confidence.
- Memorystore for Valkey achieves zero-downtime maintenance by using the request redirection capabilities of the OSS Valkey instance protocol with the following Memorystore mechanisms: A coordinated failover without any loss of data.
- Caution: Although Memorystore for Valkey doesn't provide you with the option to reschedule maintenance for multiple instances at once, you can reschedule maintenance in bulk programmatically.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About maintenance Stay organized with collections Save and categorize content based on your preferences.

### Best practices for Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using these commands might result in the following performance issues: High latency and client timeouts Memory pressure caused by commands that increase memory usage Data loss during node replication and synchronization because the Valkey main thread is blocked Starved health checks, observability, and replication The following table lists examples of Valkey commands that are resource-intensive and provides you with alternatives that are resource-efficient.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Best practices for Memorystore for Valkey Stay organized with collections Save and categorize content based on your preferences.
- This can cause a snowball effect because Memorystore for Valkey attempts to re-establish timed-out connections, which increases the resources it uses to establish connections.
- This page provides guidance on using Memorystore for Valkey optimally.

### "High availability and replicas \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Using recommended best practices allows your client to handle the following items for your instance automatically and without any downtime: The role (automatic failovers) The endpoint (node replacement) Cluster Mode Enabled-related slot assignment changes (consumer scale out and in) Replicas A highly available Memorystore for Valkey instance is a regional resource.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback High availability and replicas Stay organized with collections Save and categorize content based on your preferences.
- This page explains how Memorystore for Valkey's architecture supports and provides high availability (HA).
- Memorystore for Valkey supports instances with 0-5 replicas per node.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Valkey Reference Send feedback MCP Tools Reference: memorystore.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- If not provided, the maintenance event will be performed based on Memorystore internal rollout schedule. maintenanceSchedule object ( MaintenanceSchedule ) Output only.
- Tool: create instance Create a Memorystore for Valkey instance.
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.

