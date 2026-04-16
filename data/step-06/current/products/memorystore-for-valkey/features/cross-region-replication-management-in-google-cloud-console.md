---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.265Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Cross-region replication management in Google Cloud console"
feature_slug: "cross-region-replication-management-in-google-cloud-console"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/networking"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance"
keywords:
  - "cross"
  - "region"
  - "replication"
  - "management"
  - "in"
  - "console"
  - "you"
  - "can"
---

# Cross-region replication management in Google Cloud console

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

You can use the Google Cloud console to work with cross-region replication for Memorystore for Valkey.

## Extended Definition

You can use the Google Cloud console to work with cross-region replication for Memorystore for Valkey.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication)
- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/networking](https://docs.cloud.google.com/memorystore/docs/valkey/networking)
- [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)

## Supporting Pages

### "About cross-region replication \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/valkey/about-cross-region-replication)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits Benefits of cross-region replication on Memorystore for Valkey include the following: Disaster recovery : If the primary instance's region becomes unavailable, then you can detach or switch over to a secondary instance in another region to serve read and write requests.
- How to manage cross-region replication Cross-region replication involves the following tasks: Create a secondary instance : create a secondary instance that replicates data from your primary instance continuously.
- Perform maintenance updates : To ensure compatibility with cross-region replication, while creating your secondary instance, your primary instance might undergo a maintenance update.
- Even though this diagram shows the same number of replicas in all regions, cross-region replication lets you have varying numbers of replicas according to your requirements.

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can only create instances in the supported regions for Memorystore for Valkey.
- Click Create instance . gcloud To create a single-zone instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --zone-distribution-config-mode= ZONE DISTRIBUTION CONFIG MODE \ --zone-distribution-config= ZONE \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- Click Create instance . gcloud To create a Memorystore for Valkey instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- Enable the Memorystore for Valkey API Memorystore for Valkey Enable the Network Connectivity API Network Connectivity API Enable the Service Consumer Management API Service Consumer Management API Other prerequisites You must have one of these IAM roles in the Google Cloud project you're using: roles/memorystore.admin (the Memorystore Admin predefined IAM role) roles/owner (the Owner basic IAM role) roles/editor (the Editor basic IAM role) Set up networking Read the Networking page to determine if you need to set up a service connection policy.

### Networking \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/networking](https://docs.cloud.google.com/memorystore/docs/valkey/networking)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each combination of a network, region, and service class, you can create only one policy.
- In addition to the guidance on this page, you can learn about setting up on-premises connectivity by using the following links: Access endpoints from hybrid networks On-premises and hybrid access Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- After you know that a service connection policy is established for your network, get the full network name (that has the format of projects/NETWORK PROJECT ID/global/networks/NETWORK ID ) from your Network Admin so that you can use it to create the instance.
- Communicate networking requirements If you're a Valkey Admin, then ask your Network Admin if a service connection policy exists for the region, network, and gcp-memorystore service class where you want to create your instance .

### "MCP Tools Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- However, for scenarios, where the primary instance is unavailable(e.g. regional outage), a Getinstance request can be sent to any other member instance and this field will list all the member instances participating in cross instance replication.
- Instance JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "stateInfo" : { object ( StateInfo ) } , "uid" : string , "authorizationMode" : enum ( AuthorizationMode ) , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "shardCount" : integer , "discoveryEndpoints" : [ { object ( DiscoveryEndpoint ) } ] , "nodeType" : enum ( NodeType ) , "persistenceConfig" : { object ( PersistenceConfig ) } , "engineVersion" : string , "engineConfigs" : { string : string , ... } , "nodeConfig" : { object ( NodeConfig ) } , "zoneDistributionConfig" : { object ( ZoneDistributionConfig ) } , "pscAutoConnections" : [ { object ( PscAutoConnection ) } ] , "pscAttachmentDetails" : [ { object ( PscAttachmentDetail ) } ] , "endpoints" : [ { object ( InstanceEndpoint ) } ] , "mode" : enum ( Mode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "crossInstanceReplicationConfig" : { object ( CrossInstanceReplicationConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "automatedBackupConfig" : { object ( AutomatedBackupConfig ) } , "availableMaintenanceVersions" : [ string ] , "allowFewerZonesDeployment" : boolean , "migrationConfig" : { object ( MigrationConfig ) } , // Union field import sources can be only one of the following: "gcsSource" : { object ( GcsBackupSource ) } , "managedBackupSource" : { object ( ManagedBackupSource ) } // End of list of possible types for union field import sources . // Union field replica count can be only one of the following: "replicaCount" : integer // End of list of possible types for union field replica count . // Union field deletion protection enabled can be only one of the following: "deletionProtectionEnabled" : boolean // End of list of possible types for union field deletion protection enabled . // Union field simulate maintenance event can be only one of the following: "simulateMaintenanceEvent" : boolean // End of list of possible types for union field simulate maintenance event . // Union field ondemand maintenance can be only one of the following: "ondemandMaintenance" : boolean // End of list of possible types for union field ondemand maintenance . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field async instance endpoints deletion enabled can be only one of // the following: "asyncInstanceEndpointsDeletionEnabled" : boolean // End of list of possible types for union field // async instance endpoints deletion enabled . // Union field kms key can be only one of the following: "kmsKey" : string // End of list of possible types for union field kms key . // Union field backup collection can be only one of the following: "backupCollection" : string // End of list of possible types for union field backup collection . // Union field maintenance version can be only one of the following: "maintenanceVersion" : string // End of list of possible types for union field maintenance version . // Union field effective maintenance version can be only one of the following: "effectiveMaintenanceVersion" : string // End of list of possible types for union field // effective maintenance version . // Union field server ca mode can be only one of the following: "serverCaMode" : enum ( ServerCaMode ) // End of list of possible types for union field server ca mode . // Union field server ca pool can be only one of the following: "serverCaPool" : string // End of list of possible types for union field server ca pool . // Union field rotate server certificate can be only one of the following: "rotateServerCertificate" : boolean // End of list of possible types for union field rotate server certificate . // Union field acl policy can be only one of the following: "aclPolicy" : string // End of list of possible types for union field acl policy . // Union field acl policy in sync can be only one of the following: "aclPolicyInSync" : boolean // End of list of possible types for union field acl policy in sync . } Fields name string Identifier.
- CrossInstanceReplicationConfig JSON representation { "instanceRole" : enum ( InstanceRole ) , "primaryInstance" : { object ( RemoteInstance ) } , "secondaryInstances" : [ { object ( RemoteInstance ) } ] , "updateTime" : string , "membership" : { object ( Membership ) } } Fields instanceRole enum ( InstanceRole ) Required.
- If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request.

