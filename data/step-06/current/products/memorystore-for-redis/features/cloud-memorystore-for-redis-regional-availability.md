---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.287Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Cloud Memorystore for Redis regional availability"
feature_slug: "cloud-memorystore-for-redis-regional-availability"
latest_feature_date: "2019-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance"
keywords:
  - "memorystore"
  - "for"
  - "redis"
  - "regional"
  - "availability"
  - "expanded"
  - "to"
  - "additional"
---

# Cloud Memorystore for Redis regional availability

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Cloud Memorystore for Redis expanded availability to additional regions including Hong Kong, Montréal, Mumbai, and São Paulo; Cloud Memorystore for Redis expanded availability to Sydney, London, and Northern Virginia.

## Extended Definition

Cloud Memorystore for Redis expanded availability to additional regions including Hong Kong, Montréal, Mumbai, and São Paulo; Cloud Memorystore for Redis expanded availability to Sydney, London, and Northern Virginia.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances](https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance)

## Supporting Pages

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 335
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback High availability for Memorystore for Redis Stay organized with collections Save and categorize content based on your preferences.
- Memorystore for Redis provides high availability by replicating a primary instance to one or more replicas.
- This page describes high availability (HA) for Memorystore for Redis instances in the Standard Tier.
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: N/A

Evidence snippets:
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- With Memorystore for Redis, you can easily achieve your latency and throughput targets by scaling up your Redis instances with minimal impact to your application's availability.
- High availability: Memorystore for Redis instances in the Standard Tier are replicated across zones, monitored for health and have fast automatic failover.
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.

### Monitor Redis instances \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances](https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances)
- Source ID: `site-docs-root`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to the types of monitoring covered here, Memorystore for Redis is compatible with open source Redis, so you can use existing Redis monitoring tools from Compute Engine VMs to monitor your instances.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Monitor Redis instances Stay organized with collections Save and categorize content based on your preferences.
- After creating an alerting policy using the Memorystore for Redis UI, you can only create or modify alerting policies using the dedicated Monitoring page in the Google Cloud console.
- If you choose not to filter to a specific instance, the alert will notify you any time a Memorystore for Redis instance in your project has a system memory usage ratio exceeding 80%.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- Unique name of the resource in this scope including project and location using the form: projects/{project id}/locations/{location id}/instances/{instance id} Note: Redis instances are managed and addressed at regional level so location id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in.
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Tool: create instance Create a Memorystore for Redis instance.
- A Redis [Instance] resource Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.

