---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.726Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Custom constraints"
feature_slug: "custom-constraints"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster"
keywords:
  - "custom"
  - "constraints"
  - "the"
  - "supports"
  - "for"
  - "memorystore"
  - "redis"
  - "cluster"
---

# Custom constraints

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports custom constraints for Memorystore for Redis Cluster resources.

## Extended Definition

The service supports custom constraints for Memorystore for Redis Cluster resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest](https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- Source ID: `site-iam-reference`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the Memorystore for Redis Cluster API is in the Deny policy list of services for this constraint, then you can't create non-CMEK-protected clusters. constraints/gcp.restrictCmekCryptoKeyProjects : use this constraint to limit which Cloud KMS keys you can use for CMEK protection.
- Persistence : Memorystore for Redis Cluster supports two types of persistence: RDB persistence: The Redis database (RDB) feature protects your data by saving snapshots of your data on durable storage.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Memorystore for Redis Cluster.
- Google-managed encryption versus customer-managed encryption The CMEK feature lets you use your own cryptographic keys for data at rest in Memorystore for Redis Cluster.

### Memorystore for Redis Cluster overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Redis version Memorystore for Redis Cluster is based on open-source Redis version 7.x and supports a subset of the total Redis command library .
- Key concepts and terms Hierarchical resource structure Memorystore for Redis Cluster gathers the various resources used in a Redis deployment into a hierarchical structure that simplifies administration and management.
- The terms instance and cluster can be used interchangeably when referring to a single Memorystore for Redis Cluster unit of deployment.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Memorystore for Redis Cluster overview Stay organized with collections Save and categorize content based on your preferences.

### "Google Cloud Memorystore for Redis API \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest](https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest)
- Source ID: `site-api-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha1.projects.locations.clusters Methods backup POST /v1alpha1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1alpha1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1alpha1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1alpha1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1alpha1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1alpha1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1alpha1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1alpha1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.
- REST Resource: v1beta1.projects.locations.clusters Methods backup POST /v1beta1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1beta1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1beta1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1beta1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1beta1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1beta1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1beta1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1beta1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.
- REST Resource: v1.projects.locations.clusters Methods backup POST /v1/{name=projects/ /locations/ /clusters/ }:backup Backup Redis Cluster. create POST /v1/{parent=projects/ /locations/ }/clusters Creates a Redis cluster based on the specified properties. delete DELETE /v1/{name=projects/ /locations/ /clusters/ } Deletes a specific Redis cluster. get GET /v1/{name=projects/ /locations/ /clusters/ } Gets the details of a specific Redis cluster. getCertificateAuthority GET /v1/{name=projects/ /locations/ /clusters/ /certificateAuthority} Gets the details of certificate authority information for Redis cluster. list GET /v1/{parent=projects/ /locations/ }/clusters Lists all Redis clusters owned by a project in either the specified location (region) or all locations. patch PATCH /v1/{cluster.name=projects/ /locations/ /clusters/ } Updates the metadata and configuration of a specific Redis cluster. rescheduleClusterMaintenance POST /v1/{name=projects/ /locations/ /clusters/ }:rescheduleClusterMaintenance Reschedules upcoming maintenance event.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Reference Send feedback Google Cloud Memorystore for Redis API Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/create_cluster)
- Source ID: `site-api-reference`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- Cluster JSON representation { "name" : string , "createTime" : string , "state" : enum ( State ) , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "pscConfigs" : [ { object ( PscConfig ) } ] , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "pscConnections" : [ { object ( PscConnection ) } ] , "stateInfo" : { object ( StateInfo ) } , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( ClusterPersistenceConfig ) } , "redisConfigs" : { string : string , ... } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "crossClusterReplicationConfig" : { object ( CrossClusterReplicationConfig ) } , "pscServiceAttachments" : [ { object ( PscServiceAttachment ) } ] , "clusterEndpoints" : [ { object ( ClusterEndpoint ) } ] , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "labels" : { string : string , ... } , "aclPolicy" : string , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field size gb can be only one of the following: "sizeGb" : integer // End of list of possible types for union field size gb . // Union field shard count can be only one of the following: "shardCount" : integer // End of list of possible types for union field shard count . // Union field precise size gb can be only one of the following: "preciseSizeGb" : number // End of list of possible types for union field precise size gb . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field maintenance policy can be only one of the following: "maintenancePolicy" : { object ( ClusterMaintenancePolicy ) } // End of list of possible types for union field maintenance policy . // Union field maintenance schedule can be only one of the following: "maintenanceSchedule" : { object ( ClusterMaintenanceSchedule ) } // End of list of possible types for union field maintenance schedule . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field async cluster endpoints deletion enabled can be only one of the // following: "asyncClusterEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async cluster endpoints deletion enabled . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Required.
- UpdateInfo JSON representation { // Union field target shard count can be only one of the following: "targetShardCount" : integer // End of list of possible types for union field target shard count . // Union field target replica count can be only one of the following: "targetReplicaCount" : integer // End of list of possible types for union field target replica count . // Union field target node type can be only one of the following: "targetNodeType" : enum ( NodeType ) // End of list of possible types for union field target node type . } Fields Union field target shard count . target shard count can be only one of the following: targetShardCount integer Target number of shards for redis cluster Union field target replica count . target replica count can be only one of the following: targetReplicaCount integer Target number of replica nodes per shard.
- A PSC connection to a cluster could either be created through Service Connectivity Automation (auto-registered connection) during the cluster creation, or it could be created by customer themselves (user-registered connection). connection can be only one of the following: pscAutoConnection object ( PscAutoConnection ) Detailed information of a PSC connection that is created through service connectivity automation. pscConnection object ( PscConnection ) Detailed information of a PSC connection that is created by the customer who owns the cluster.
- Curl Request curl --location 'https://redis.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create cluster", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for CreateCluster .

