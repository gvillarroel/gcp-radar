---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.269Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Databases configuration support"
feature_slug: "databases-configuration-support"
latest_feature_date: "2024-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance"
keywords:
  - "databases"
  - "configuration"
  - "the"
  - "is"
  - "supported"
  - "for"
  - "memorystore"
  - "redis"
---

# Databases configuration support

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

The databases configuration is supported for Memorystore for Redis.

## Extended Definition

The databases configuration is supported for Memorystore for Redis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance)

## Supporting Pages

### "Supported Redis configurations \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- Source ID: `site-docs-root`
- Final score: 389
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Supported Redis configurations Stay organized with collections Save and categorize content based on your preferences.
- 0 (default) Integers >= 120 Unit = seconds Unmodifiable configuration parameters The following table lists the Redis configuration parameters that you cannot modify in Memorystore for Redis and their default values.
- Modifiable configuration parameters You can modify the following parameters when creating or updating a Memorystore for Redis instance.
- This page describes maxmemory policies and other Redis configurations available for Memorystore for Redis.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Currently, the supported values are: REDIS 3 2 for Redis 3.2 compatibility REDIS 4 0 for Redis 4.0 compatibility REDIS 5 0 for Redis 5.0 compatibility REDIS 6 X for Redis 6.x compatibility REDIS 7 0 for Redis 7.0 compatibility (default) REDIS 7 2 for Redis 7.2 compatibility reservedIpRange string Optional.
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.
- If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the name field set to a value of the form projects/{project id}/locations/{location id}/instances/ - and the status field set to ERROR and status message field set to "location not available for ListInstances". nextPageToken string Token to retrieve the next page of results, or empty if there are no more results in the list. unreachable[] string Locations that could not be reached.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 325
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about the metrics that Cloud Monitoring provides for Memorystore for Redis, see Monitor Redis Instances and Supported monitoring metrics for Memorystore for Redis .
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback High availability for Memorystore for Redis Stay organized with collections Save and categorize content based on your preferences.
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.
- During a failover, if there are connections to the read endpoint, then Memorystore for Redis drops the connections to the replica that's being promoted to the primary instance.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 321
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Currently, the supported values are: REDIS 3 2 for Redis 3.2 compatibility REDIS 4 0 for Redis 4.0 compatibility REDIS 5 0 for Redis 5.0 compatibility REDIS 6 X for Redis 6.x compatibility REDIS 7 0 for Redis 7.0 compatibility (default) REDIS 7 2 for Redis 7.2 compatibility reservedIpRange string Optional.
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.
- RedisConfigsEntry JSON representation { "key" : string , "value" : string } Fields key string value string TlsCertificate JSON representation { "serialNumber" : string , "cert" : string , "createTime" : string , "expireTime" : string , "sha1Fingerprint" : string } Fields serialNumber string Serial number, as extracted from the certificate. cert string PEM representation. createTime string ( Timestamp format) Output only.

