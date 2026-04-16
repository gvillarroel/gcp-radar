---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.267Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Backups"
feature_slug: "backups"
latest_feature_date: "2025-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/backups"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek"
keywords:
  - "backups"
  - "allows"
  - "managing"
  - "for"
  - "memorystore"
  - "valkey"
  - "instances"
---

# Backups

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Allows managing backups for Memorystore for Valkey instances.

## Extended Definition

Allows managing backups for Memorystore for Valkey instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/backups](https://docs.cloud.google.com/memorystore/docs/valkey/backups)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)

## Supporting Pages

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create instance . gcloud To create a single-zone instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --zone-distribution-config-mode= ZONE DISTRIBUTION CONFIG MODE \ --zone-distribution-config= ZONE \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- Click Create instance . gcloud To create a Memorystore for Valkey instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Create instances Stay organized with collections Save and categorize content based on your preferences.
- In the Days to retain backups field, enter the number of days that you want Memorystore for Valkey to keep backups before they're deleted automatically.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Tool: list instances List all Memorystore for Valkey instances.
- Curl Request curl --location 'https://memorystore.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list instances", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for ListInstances .
- Home Documentation Databases Memorystore Memorystore for Valkey Reference Send feedback MCP Tools Reference: memorystore.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.

### About backups \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/backups](https://docs.cloud.google.com/memorystore/docs/valkey/backups)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backups let you restore your Memorystore for Valkey instances to a specific point in time.
- You can also restore backups from Memorystore for Valkey instances.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About backups Stay organized with collections Save and categorize content based on your preferences.
- Data migration : migrate data between different Memorystore for Valkey instances.

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)
- Source ID: `site-iam-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About service accounts When creating an instance with CMEK, you must grant the cloudkms.cryptoKeyEncrypterDecrypter role to the Memorystore for Valkey service account that has the following format: service- PROJECT NUMBER @gcp-sa-memorystore.iam.gserviceaccount.com Granting this permission allows the service account to request key access from Cloud KMS.
- If the Memorystore for Valkey API is in the Deny policy list of services for this constraint, then you can't create non-CMEK-protected instances. constraints/gcp.restrictCmekCryptoKeyProjects : use this constraint to limit which Cloud KMS keys you can use for CMEK protection.
- For CMEK-enabled Memorystore for Valkey instances, Google uses your keys to access all data at rest.
- You can't enable CMEK on existing Memorystore for Valkey instances.

