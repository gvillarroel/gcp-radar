---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.723Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Customer-managed encryption keys (CMEK)"
feature_slug: "customer-managed-encryption-keys-cmek"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "the"
  - "supports"
  - "for"
---

# Customer-managed encryption keys (CMEK)

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports customer-managed encryption keys for instances and instance management.

## Extended Definition

The service supports customer-managed encryption keys for instances and instance management.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- Source ID: `site-iam-reference`
- Final score: 375
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Memorystore for Redis Cluster.
- Google-managed encryption versus customer-managed encryption The CMEK feature lets you use your own cryptographic keys for data at rest in Memorystore for Redis Cluster.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback About customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS key : you want to manage the encryption of your data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Redis Cluster.
- Cloud KMS key : you want to manage the encryption of your data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Redis Cluster.
- For example: gcloud alpha redis clusters create my-instance \ --region=us-central1 \ --network=projects/my-project-335118/global/networks/default \ --replica-count=2 \ --node-type=redis-highmem-medium \ --shard-count=8 By default, in-transit encryption is disabled, and the authorized network is default .
- Note: If you select this checkbox, then Memorystore for Redis Cluster selects the Enable In-Transit Encryption (TLS) checkbox automatically and the Certificate authority management section is displayed.

### "About in-transit encryption \_|\_ Memorystore for Redis Cluster \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are sample use cases for using in-transit encryption: Protect sensitive cached data : If you use Memorystore for Redis Cluster to store high-value information, such as session tokens, Personal Identifiable Information (PII), or API keys, then in-transit encryption prevents attackers with VPC access from accessing your data.
- Server certificate rotation Every week, Memorystore for Redis Cluster conducts server-side certificate rotation for clusters that use the per-instance CA, shared CA, and customer-managed CA modes.
- In-transit encryption prerequisites To use in-transit encryption with Memorystore for Redis Cluster, you need the following: A Redis client that supports TLS or a third-party TLS sidecar.
- In addition to Memorystore for Redis Cluster conducting a weekly server-side certificate rotation, for the customer-managed CA mode, you can rotate the certificates on-demand.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "createTime" : string , "state" : enum ( State ) , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "pscConfigs" : [ { object ( PscConfig ) } ] , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "pscConnections" : [ { object ( PscConnection ) } ] , "stateInfo" : { object ( StateInfo ) } , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( ClusterPersistenceConfig ) } , "redisConfigs" : { string : string , ... } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "crossClusterReplicationConfig" : { object ( CrossClusterReplicationConfig ) } , "pscServiceAttachments" : [ { object ( PscServiceAttachment ) } ] , "clusterEndpoints" : [ { object ( ClusterEndpoint ) } ] , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "labels" : { string : string , ... } , "aclPolicy" : string , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field size gb can be only one of the following: "sizeGb" : integer // End of list of possible types for union field size gb . // Union field shard count can be only one of the following: "shardCount" : integer // End of list of possible types for union field shard count . // Union field precise size gb can be only one of the following: "preciseSizeGb" : number // End of list of possible types for union field precise size gb . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field maintenance policy can be only one of the following: "maintenancePolicy" : { object ( ClusterMaintenancePolicy ) } // End of list of possible types for union field maintenance policy . // Union field maintenance schedule can be only one of the following: "maintenanceSchedule" : { object ( ClusterMaintenanceSchedule ) } // End of list of possible types for union field maintenance schedule . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field async cluster endpoints deletion enabled can be only one of the // following: "asyncClusterEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async cluster endpoints deletion enabled . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Required.
- Customer-managed CA pool for the cluster.
- A PSC connection to a cluster could either be created through Service Connectivity Automation (auto-registered connection) during the cluster creation, or it could be created by customer themselves (user-registered connection). connection can be only one of the following: pscAutoConnection object ( PscAutoConnection ) Detailed information of a PSC connection that is created through service connectivity automation. pscConnection object ( PscConnection ) Detailed information of a PSC connection that is created by the customer who owns the cluster.
- If not provided, auth feature is disabled for the cluster. transitEncryptionMode enum ( TransitEncryptionMode ) Optional.

