---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.263Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Maintenance event simulation"
feature_slug: "maintenance-event-simulation"
latest_feature_date: "2025-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication"
keywords:
  - "maintenance"
  - "event"
  - "simulation"
  - "you"
  - "can"
  - "simulate"
  - "events"
  - "on"
---

# Maintenance event simulation

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

You can simulate maintenance events on Memorystore for Valkey instances to test application behavior during maintenance.

## Extended Definition

You can simulate maintenance events on Memorystore for Valkey instances to test application behavior during maintenance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication)

## Supporting Pages

### About maintenance \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- In this case, set your production instance's maintenance window to the following day and time: Day of the week : Sunday Start hour : 1 AM Upcoming maintenance notifications To ensure that you stay informed about maintenance events on your instance, set up email notifications about upcoming maintenance at least one week before maintenance is scheduled.
- As part of rescheduling maintenance , choose one of the following options: Update now : instead of waiting for the scheduled maintenance window, you can apply the updates to your instance immediately.
- When you reschedule maintenance, the following restrictions apply: If there's less than one hour remaining before the current scheduled maintenance time, then you can't reschedule the maintenance.
- Caution: Although Memorystore for Valkey doesn't provide you with the option to reschedule maintenance for multiple instances at once, you can reschedule maintenance in bulk programmatically.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- Union field simulate maintenance event . simulate maintenance event can be only one of the following: simulateMaintenanceEvent boolean Optional.
- Example: projects/{project}/locations/{location}/backupCollections/{collection} Union field maintenance version . maintenance version can be only one of the following: maintenanceVersion string Optional.
- If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- Union field simulate maintenance event . simulate maintenance event can be only one of the following: simulateMaintenanceEvent boolean Optional.
- Example: projects/{project}/locations/{location}/backupCollections/{collection} Union field maintenance version . maintenance version can be only one of the following: maintenanceVersion string Optional.
- If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request.

### "About cross-region replication \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Settings that a secondary instance copies from the primary instance When you create a secondary instance, this instance copies the following settings from the primary instance: Shard count IAM authentication mode In-transit encryption mode Instance configurations Valkey version Node type Persistence mode Cluster Mode Enabled and Cluster Mode Disabled modes Override default settings When you create a secondary instance, you can use the following settings to override the default settings: Zone distribution configuration Replica count Maintenance windows Deletion protection Automated backups Update instance settings When you update the settings for your Memorystore for Valkey instance, you can change some settings only on the primary instance.
- Shard count Instance configurations Persistence mode Valkey version Node type Configure local settings You configure the following settings locally: Deletion protection Replica count Maintenance windows Instance endpoints Automated backups Best practices for switching primary and secondary instances When you perform a switchover , we recommend that you follow the instructions in this section.
- Benefits Benefits of cross-region replication on Memorystore for Valkey include the following: Disaster recovery : If the primary instance's region becomes unavailable, then you can detach or switch over to a secondary instance in another region to serve read and write requests.
- You can perform a switchover for the following reasons: Test your disaster recovery setup Switch over during an actual disaster recovery scenario Perform a migration of your workload After you complete the switchover, Memorystore for Valkey reverses the direction of replication.

