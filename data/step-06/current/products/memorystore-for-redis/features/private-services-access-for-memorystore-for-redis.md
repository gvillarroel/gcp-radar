---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.284Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Private services access for Memorystore for Redis"
feature_slug: "private-services-access-for-memorystore-for-redis"
latest_feature_date: "2020-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/establish-connection"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance"
keywords:
  - "private"
  - "services"
  - "access"
  - "for"
  - "memorystore"
  - "redis"
  - "allows"
  - "to"
---

# Private services access for Memorystore for Redis

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Allows Memorystore for Redis to use private services access for Shared VPC networks and centralized IP address management.

## Extended Definition

Allows Memorystore for Redis to use private services access for Shared VPC networks and centralized IP address management.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance)

## Supporting Pages

### "Establish a private services access connection \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection)
- Source ID: `site-docs-root-2`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Establish a private services access connection Stay organized with collections Save and categorize content based on your preferences.
- Private services access setup instructions Follow these steps to setup a private services access connection for your network: gcloud Enable the Service Networking API: Enable the Service Networking API If you are using Shared VPC, enable the API in both the Service Project and the Host Project.
- If you do not see this panel, the connection has already been established for your network, and any Redis instance created with this network uses the private services access connection mode .
- Establishing a private services access connection for a network is a prerequisite for creating a Redis instance with the private services access connection mode designated for that network.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=DIRECT PEERING --network=default --reserved-ip-range=10.0.0.0/24 Custom ranges with private services access If you only have one IP address range allocated for your private services access connection , that range is used by default for Memorystore instance creation.
- To choose one of the available OSS Redis versions for Memorystore for Redis, use the --redis-version flag with one of the following values: redis 7 2 redis 7 0 (Default) redis 6 X redis 5 0 redis 4 0 redis 3 2 For example: gcloud redis instances create myinstance --size=5 --region=us-central1 \ --zone=us-central1-a --redis-version=redis 6 X Networking You can create Redis instances using one of two connection modes : --connect-mode=PRIVATE SERVICE ACCESS or --connect-mode=DIRECT PEERING .
- Note: If you set up a private services access connection , but the No existing IP ranges available status appears when you set an IP range name, then add the compute.globalAddresses.list permission to your account . gcloud Important: You must Establish a private services access connection on the host project network before you can create a Redis instance with the --connect-mode=private-service-access flag listed below.
- If you have multiple address ranges allocated for private services access, you can select which one to use with the following gcloud command: gcloud redis instances create INSTANCE ID --region= REGION --size= SIZE --connect-mode=PRIVATE SERVICE ACCESS --network= VPC NETWORK NAME --reserved-ip-range= RESERVED RANGE NAME Where: VPC NETWORK NAME is the name of network used to create the instance.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.
- Combined with Dataflow, Memorystore for Redis provides a scalable, fast in-memory store for storing intermediate data that thousands of clients can access with very low latency.
- Memorystore for Redis provides a fully-managed service that is powered by the Redis in-memory data store to build application caches that provide sub-millisecond data access.
- Memorystore for Redis provides low latency access and high throughput for heavily accessed data, compared to accessing the data from a disk based backend store.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- For PRIVATE SERVICE ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto". host string Output only.
- Tool: create instance Create a Memorystore for Redis instance.
- A Redis [Instance] resource Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.

