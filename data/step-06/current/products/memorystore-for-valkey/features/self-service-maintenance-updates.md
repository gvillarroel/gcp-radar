---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.261Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Self-service maintenance updates"
feature_slug: "self-service-maintenance-updates"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/rest"
keywords:
  - "self"
  - "maintenance"
  - "updates"
  - "you"
  - "can"
  - "update"
  - "memorystore"
  - "for"
---

# Self-service maintenance updates

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

You can update a Memorystore for Valkey instance to a newer version through self-service maintenance.

## Extended Definition

You can update a Memorystore for Valkey instance to a newer version through self-service maintenance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/rest](https://docs.cloud.google.com/memorystore/docs/valkey/reference/rest)

## Supporting Pages

### About maintenance \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default maintenance windows If you don't set a maintenance window, then Memorystore for Valkey updates your instance in one of the following windows, according to your instance's time zone: Weekday window (Monday to Friday) : 10:00 PM to 6:00 AM Weekend window : Friday, 10:00 PM to Monday, 6:00 AM Maintenance example As a developer managing a shopping cart service at a retailer, you oversee a production environment that includes a Memorystore for Valkey instance.
- Default maintenance windows By default, Memorystore updates your instance in the following windows according to your instance's time zone: Weekday window (Monday to Friday): 10 PM to 6 AM Weekend window: Friday, 10 PM to Monday, 6 AM Gradual deployment strategy Memorystore for Valkey performs deployments with a progressively increasing scope, and at a rate that allows for failure detection early enough to mitigate any impact and establish stability confidence.
- As part of rescheduling maintenance , choose one of the following options: Update now : instead of waiting for the scheduled maintenance window, you can apply the updates to your instance immediately.
- For your instance configured for high availability , at most, Memorystore for Valkey updates one fault-domain or zone at any time to make sure that an instance shard, including both primary and replicas, has high availability throughout the update.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/update_instance)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- This field is used to determine the available maintenance versions for the self service update. allowFewerZonesDeployment (deprecated) boolean This item is deprecated!
- This field can be used to trigger self service update to indicate the desired maintenance version.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target engine version can be only one of the following: "targetEngineVersion" : string // End of list of possible types for union field target engine version . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Output only.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- This field is used to determine the available maintenance versions for the self service update. allowFewerZonesDeployment (deprecated) boolean This item is deprecated!
- This field can be used to trigger self service update to indicate the desired maintenance version.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target engine version can be only one of the following: "targetEngineVersion" : string // End of list of possible types for union field target engine version . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Output only.

### Memorystore API \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/rest](https://docs.cloud.google.com/memorystore/docs/valkey/reference/rest)
- Source ID: `site-api-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha.projects.locations.instances Methods backup POST /v1alpha/{name=projects/ /locations/ /instances/ }:backup Backup Instance. create POST /v1alpha/{parent=projects/ /locations/ }/instances Creates a new Instance in a given project and location. delete DELETE /v1alpha/{name=projects/ /locations/ /instances/ } Deletes a single Instance. get GET /v1alpha/{name=projects/ /locations/ /instances/ } Gets details of a single Instance. getCertificateAuthority GET /v1alpha/{name=projects/ /locations/ /instances/ }/certificateAuthority Gets details about the certificate authority for an Instance. list GET /v1alpha/{parent=projects/ /locations/ }/instances Lists Instances in a given project and location. patch PATCH /v1alpha/{instance.name=projects/ /locations/ /instances/ } Updates the parameters of a single Instance. rescheduleMaintenance POST /v1alpha/{name=projects/ /locations/ /instances/ }:rescheduleMaintenance Reschedules upcoming maintenance event.
- REST Resource: v1beta.projects.locations.instances Methods backup POST /v1beta/{name=projects/ /locations/ /instances/ }:backup Backup Instance. create POST /v1beta/{parent=projects/ /locations/ }/instances Creates a new Instance in a given project and location. delete DELETE /v1beta/{name=projects/ /locations/ /instances/ } Deletes a single Instance. get GET /v1beta/{name=projects/ /locations/ /instances/ } Gets details of a single Instance. getCertificateAuthority GET /v1beta/{name=projects/ /locations/ /instances/ }/certificateAuthority Gets details about the certificate authority for an Instance. list GET /v1beta/{parent=projects/ /locations/ }/instances Lists Instances in a given project and location. patch PATCH /v1beta/{instance.name=projects/ /locations/ /instances/ } Updates the parameters of a single Instance. rescheduleMaintenance POST /v1beta/{name=projects/ /locations/ /instances/ }:rescheduleMaintenance Reschedules upcoming maintenance event.
- REST Resource: v1.projects.locations.instances Methods backup POST /v1/{name=projects/ /locations/ /instances/ }:backup Backup Instance. create POST /v1/{parent=projects/ /locations/ }/instances Creates a new Instance in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /instances/ } Deletes a single Instance. get GET /v1/{name=projects/ /locations/ /instances/ } Gets details of a single Instance. getCertificateAuthority GET /v1/{name=projects/ /locations/ /instances/ }/certificateAuthority Gets details about the certificate authority for an Instance. list GET /v1/{parent=projects/ /locations/ }/instances Lists Instances in a given project and location. patch PATCH /v1/{instance.name=projects/ /locations/ /instances/ } Updates the parameters of a single Instance. rescheduleMaintenance POST /v1/{name=projects/ /locations/ /instances/ }:rescheduleMaintenance Reschedules upcoming maintenance event.
- Home Documentation Databases Memorystore Memorystore for Valkey Reference Send feedback Memorystore API Stay organized with collections Save and categorize content based on your preferences.

