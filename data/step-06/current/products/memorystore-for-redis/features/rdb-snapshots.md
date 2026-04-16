---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.274Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "RDB snapshots"
feature_slug: "rdb-snapshots"
latest_feature_date: "2022-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance"
keywords:
  - "rdb"
  - "snapshots"
  - "are"
  - "generally"
  - "available"
  - "for"
  - "memorystore"
  - "redis"
---

# RDB snapshots

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

RDB snapshots are generally available for Memorystore for Redis; RDB Snapshots let Memorystore for Redis create RDB-based snapshots.

## Extended Definition

RDB snapshots are generally available for Memorystore for Redis; RDB Snapshots let Memorystore for Redis create RDB-based snapshots.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots](https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance)

## Supporting Pages

### About RDB snapshots \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots](https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots)
- Source ID: `site-docs-root-2`
- Final score: 356
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About RDB snapshots Stay organized with collections Save and categorize content based on your preferences.
- This page gives an overview of RDB snapshots for Memorystore for Redis.
- If your system has a constant load and requires frequent snapshots, you should carefully evaluate the performance impact, and weigh the benefits of using RDB snapshots for the workload.
- This page assumes you know about open source Redis RDB Snapshots and the Memorystore import/export feature.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Memorystore for Redis currently supports RDB snapshots and exporting data .
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Memorystore for Redis provides low latency access and high throughput for heavily accessed data, compared to accessing the data from a disk based backend store.
- High availability: Memorystore for Redis instances in the Standard Tier are replicated across zones, monitored for health and have fast automatic failover.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- A Redis [Instance] resource Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.
- Unique name of the resource in this scope including project and location using the form: projects/{project id}/locations/{location id}/instances/{instance id} Note: Redis instances are managed and addressed at regional level so location id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in.
- Currently, the supported values are: REDIS 3 2 for Redis 3.2 compatibility REDIS 4 0 for Redis 4.0 compatibility REDIS 5 0 for Redis 5.0 compatibility REDIS 6 X for Redis 6.x compatibility REDIS 7 0 for Redis 7.0 compatibility (default) REDIS 7 2 for Redis 7.2 compatibility reservedIpRange string Optional.
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.
- Unique name of the resource in this scope including project and location using the form: projects/{project id}/locations/{location id}/instances/{instance id} Note: Redis instances are managed and addressed at regional level so location id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in.
- Currently, the supported values are: REDIS 3 2 for Redis 3.2 compatibility REDIS 4 0 for Redis 4.0 compatibility REDIS 5 0 for Redis 5.0 compatibility REDIS 6 X for Redis 6.x compatibility REDIS 7 0 for Redis 7.0 compatibility (default) REDIS 7 2 for Redis 7.2 compatibility reservedIpRange string Optional.
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

