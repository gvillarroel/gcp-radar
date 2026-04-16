---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.271Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Redis version 7.0"
feature_slug: "redis-version-7-0"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-versions"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
keywords:
  - "redis"
  - "version"
  - "memorystore"
  - "for"
  - "supports"
---

# Redis version 7.0

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis supports Redis version 7.0.

## Extended Definition

Memorystore for Redis supports Redis version 7.0.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)

## Supporting Pages

### Supported versions \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Yes Redis version 4.0 The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 4.0: Feature Description Supported in Memorystore for Redis Cache eviction improvements Supports the Least Frequently Used (LFU) eviction policy.
- Version support policy Memorystore for Redis supports one patch version for every major OSS Redis version that's listed in the Current versions section of this page.
- Memorystore for Redis supports Redis versions 3.2, 4.0, 5.0, 6.x, 7.0, and 7.2.
- Current versions This table shows the supported Redis versions, the patch levels for these versions, and when the versions were last updated: Redis major version Patch level Last update 7.2 7.2.0 February 29, 2024 7.0 7.0.12 July 17, 2023 6.x 6.2.13 May 9, 2022 5.0 5.0.14 May 09, 2022 4.0 4.0.14 June 17, 2019 3.2 3.2.13 June 21, 2018 Redis version 7.2 The following table provides information about the vector search feature for Redis version 7.2: Feature Description Supported in Memorystore for Redis Vector search Redis version 7.2 introduces vector data storage and vector data search.

### "Supported Redis configurations \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- E Keyevent events, published with keyevent@ prefix. g Generic commands (non-type specific) like DEL, EXPIRE, or RENAME $ String commands l List commands s Set commands h Hash commands z Sorted set commands x Expired events (events generated every time a key expires) e Evicted events (events generated when a key is evicted for maxmemory) A Alias for g$lshzxe, so that the "AKE" string means all the events. stream-node-max-bytes Redis version 5.0, or later.
- For additional information about the open source Redis maxmemory policies, see the open source Redis LRU cache page noeviction allkeys-lru volatile-lru (default) allkeys-random volatile-random volatile-ttl volatile-lfu (Redis version 4.0 and higher) allkeys-lfu (Redis version 4.0 and higher) notify-keyspace-events Allows clients to subscribe to notifications on certain keyspace events.
- 0 (default) Integers >= 120 Unit = seconds Unmodifiable configuration parameters The following table lists the Redis configuration parameters that you cannot modify in Memorystore for Redis and their default values.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Supported Redis configurations Stay organized with collections Save and categorize content based on your preferences.

### "About in-transit encryption \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In-transit encryption prerequisites In order to use in-transit encryption with Memorystore for Redis, you need: A Redis client that supports TLS or a third-party TLS sidecar A Certificate Authority installed on the client machine accessing your Redis instance Native TLS was not supported prior to open source Redis version 6.0.
- Memorystore for Redis only supports TLS protocol versions 1.2 or higher.
- Redis version 7.0 performance improvements Using Redis version 7.0 on Memorystore for Redis improves the performance of in-transit encryption.
- By using this version, Memorystore for Redis doesn't drop connections that you use to rotate server certificates or perform update operations.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Memorystore is based on and is compatible with open-source Redis versions 7.2 and earlier and supports a subset of the total Redis command library.
- Scale, as needed: Memorystore for Redis enables scaling your instances up to a maximum of 300 GB and supports up to 16 Gbps of network throughput.
- For more information on the versions and patch levels see the Memorystore for Redis Release Notes and Supported versions .
- Memorystore for Redis currently supports RDB snapshots and exporting data .

