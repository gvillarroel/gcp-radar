---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.283Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Redis version 5.0"
feature_slug: "redis-version-5-0"
latest_feature_date: "2020-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-versions"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
keywords:
  - "redis"
  - "version"
  - "provides"
  - "for"
  - "on"
  - "memorystore"
---

# Redis version 5.0

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Provides support for Redis version 5.0 on Memorystore for Redis; Provides support for Redis version 5.0 on Memorystore for Redis.

## Extended Definition

Provides support for Redis version 5.0 on Memorystore for Redis; Provides support for Redis version 5.0 on Memorystore for Redis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)

## Supporting Pages

### Supported versions \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- Source ID: `site-docs-root`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Current versions This table shows the supported Redis versions, the patch levels for these versions, and when the versions were last updated: Redis major version Patch level Last update 7.2 7.2.0 February 29, 2024 7.0 7.0.12 July 17, 2023 6.x 6.2.13 May 9, 2022 5.0 5.0.14 May 09, 2022 4.0 4.0.14 June 17, 2019 3.2 3.2.13 June 21, 2018 Redis version 7.2 The following table provides information about the vector search feature for Redis version 7.2: Feature Description Supported in Memorystore for Redis Vector search Redis version 7.2 introduces vector data storage and vector data search.
- No Redis version 6.x The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 6.x: Feature Description Supported in Memorystore for Redis Threaded I/O With Redis 6.x, if multiple vCPUs are available, then some I/O operations can run in parallel.
- Yes Redis version 4.0 The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 4.0: Feature Description Supported in Memorystore for Redis Cache eviction improvements Supports the Least Frequently Used (LFU) eviction policy.
- No Redis version 5.0 The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 5.0: Feature Description Supported in Memorystore for Redis Redis streams Redis 5.0 introduces the streams data structure.

### "Supported Redis configurations \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- Source ID: `site-docs-root`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- E Keyevent events, published with keyevent@ prefix. g Generic commands (non-type specific) like DEL, EXPIRE, or RENAME $ String commands l List commands s Set commands h Hash commands z Sorted set commands x Expired events (events generated every time a key expires) e Evicted events (events generated when a key is evicted for maxmemory) A Alias for g$lshzxe, so that the "AKE" string means all the events. stream-node-max-bytes Redis version 5.0, or later.
- For additional information about the open source Redis maxmemory policies, see the open source Redis LRU cache page noeviction allkeys-lru volatile-lru (default) allkeys-random volatile-random volatile-ttl volatile-lfu (Redis version 4.0 and higher) allkeys-lfu (Redis version 4.0 and higher) notify-keyspace-events Allows clients to subscribe to notifications on certain keyspace events.
- 0 (default) Integers >= 120 Unit = seconds Unmodifiable configuration parameters The following table lists the Redis configuration parameters that you cannot modify in Memorystore for Redis and their default values.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Supported Redis configurations Stay organized with collections Save and categorize content based on your preferences.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- For information about the metrics that Cloud Monitoring provides for Memorystore for Redis, see Monitor Redis Instances and Supported monitoring metrics for Memorystore for Redis .
- Memorystore for Redis provides high availability by replicating a primary instance to one or more replicas.
- A failover occurs when you perform the following tasks: Scale your instance Upgrade the Redis version of an instance Initiate a manual failover Perform a maintenance update If you implement retry logic in your application to handle connection drops because of failovers, then your instance probably won't see a significant performance impact.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback High availability for Memorystore for Redis Stay organized with collections Save and categorize content based on your preferences.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Memorystore for Redis provides a fully-managed service that is powered by the Redis in-memory data store to build application caches that provide sub-millisecond data access.
- Memorystore for Redis provides patching, 24x7 threat monitoring, failure detection, and automatic failover, allowing you to spend more time on building your applications.
- Features The following table describes the features that Memorystore for Redis provides: Fully managed: Deploying and maintaining a Redis instance can be time consuming.

