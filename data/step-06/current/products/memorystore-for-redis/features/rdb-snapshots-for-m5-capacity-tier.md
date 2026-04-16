---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.271Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "RDB snapshots for M5 capacity tier"
feature_slug: "rdb-snapshots-for-m5-capacity-tier"
latest_feature_date: "2023-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance"
keywords:
  - "rdb"
  - "snapshots"
  - "for"
  - "m5"
  - "capacity"
  - "tier"
  - "memorystore"
  - "redis"
---

# RDB snapshots for M5 capacity tier

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis supports RDB snapshots on the M5 capacity tier.

## Extended Definition

Memorystore for Redis supports RDB snapshots on the M5 capacity tier.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots](https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance)

## Supporting Pages

### About RDB snapshots \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots](https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots)
- Source ID: `site-docs-root-2`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About RDB snapshots Stay organized with collections Save and categorize content based on your preferences.
- This page gives an overview of RDB snapshots for Memorystore for Redis.
- RDB snapshots preserve Basic Tier instance data during these operations that cause restarts, planned maintenance, and unforeseen system failures.
- This page assumes you know about open source Redis RDB Snapshots and the Memorystore import/export feature.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- Capacity tier performance Capacity Tier Minimum Network Throughput I/O threads in version 4 and 5 Minimum I/O threads in version 6 and 7 M1: 1 - 4 GB 10 Gbps N/A 1 M2: 5 - 10 GB 10 Gbps N/A 1 M3: 11 - 35 GB 10 Gbps N/A 2 M4: 36 - 100 GB 16 Gbps N/A 6 M5: 101 - 300 GB 16 Gbps N/A 8 What's next For an introduction to Redis, see Introduction to Redis on the Redis website.
- Memorystore for Redis currently supports RDB snapshots and exporting data .
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- High availability: Memorystore for Redis instances in the Standard Tier are replicated across zones, monitored for health and have fast automatic failover.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/redis-overview)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Capacity tier performance Capacity Tier Minimum Network Throughput I/O threads in version 4 and 5 Minimum I/O threads in version 6 and 7 M1: 1 - 4 GB 10 Gbps N/A 1 M2: 5 - 10 GB 10 Gbps N/A 1 M3: 11 - 35 GB 10 Gbps N/A 2 M4: 36 - 100 GB 16 Gbps N/A 6 M5: 101 - 300 GB 16 Gbps N/A 8 What's next For an introduction to Redis, see Introduction to Redis on the Redis website.
- Memorystore for Redis currently supports RDB snapshots and exporting data .
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- High availability: Memorystore for Redis instances in the Standard Tier are replicated across zones, monitored for health and have fast automatic failover.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . rdbSnapshotStartTime string ( Timestamp format) Optional.
- Tool: get instance Get detailed information about a Memorystore for Redis instance.

