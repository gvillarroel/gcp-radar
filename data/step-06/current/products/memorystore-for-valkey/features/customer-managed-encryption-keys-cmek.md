---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.263Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Customer-managed encryption keys (CMEK)"
feature_slug: "customer-managed-encryption-keys-cmek"
latest_feature_date: "2025-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "memorystore"
  - "for"
  - "valkey"
---

# Customer-managed encryption keys (CMEK)

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Valkey now supports customer-managed encryption keys for data encryption.

## Extended Definition

Memorystore for Valkey now supports customer-managed encryption keys for data encryption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)
- Source ID: `site-iam-reference`
- Final score: 435
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Memorystore for Valkey.
- Google-managed encryption versus customer-managed encryption The CMEK feature lets you use your own cryptographic keys for data at rest in Memorystore for Valkey.
- The following diagrams show how data-at-rest encryption works inside a Memorystore for Valkey instance when using default Google-managed encryption versus CMEK.

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS key : you want to manage the encryption of your data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Valkey.
- Cloud KMS key : you want to manage the encryption of your data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Valkey.
- Note: If you select this checkbox, then Memorystore for Valkey selects the Enable In-Transit Encryption (TLS) checkbox automatically and the Certificate authority management section is displayed.
- Note: If you select this checkbox, then Memorystore for Valkey selects the Enable In-Transit Encryption (TLS) checkbox automatically and the Certificate authority management section is displayed.

### "About in-transit encryption \_|\_ Memorystore for Valkey \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/valkey/about-in-transit-encryption)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are sample use cases for using in-transit encryption: Protect sensitive cached data : If you use Memorystore for Valkey to store high-value information, such as session tokens, Personal Identifiable Information (PII), or API keys, then in-transit encryption prevents attackers with VPC access from accessing your data.
- Server certificate rotation Every week, Memorystore for Valkey conducts server-side certificate rotation for instances that use the per-instance CA, shared CA, and customer-managed CA modes.
- In addition to Memorystore for Valkey conducting a weekly server-side certificate rotation, for the customer-managed CA mode, you can rotate the certificates on-demand.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About in-transit encryption Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- Home Documentation Databases Memorystore Memorystore for Valkey Reference Send feedback MCP Tools Reference: memorystore.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Configuration for migrating from a self-managed Valkey/Redis instance SelfManagedSource JSON representation { "ipAddress" : string , "port" : integer , "networkAttachment" : string } Fields ipAddress string Required.
- Tool: create instance Create a Memorystore for Valkey instance.

