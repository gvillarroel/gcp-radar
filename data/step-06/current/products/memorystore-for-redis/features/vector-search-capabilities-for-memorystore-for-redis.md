---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.270Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Vector search capabilities for Memorystore for Redis"
feature_slug: "vector-search-capabilities-for-memorystore-for-redis"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-vector-search"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-versions"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers"
keywords:
  - "vector"
  - "search"
  - "capabilities"
  - "for"
  - "memorystore"
  - "redis"
  - "are"
  - "generally"
---

# Vector search capabilities for Memorystore for Redis

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Vector search capabilities are generally available on Memorystore for Redis.

## Extended Definition

Vector search capabilities are generally available on Memorystore for Redis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-vector-search](https://docs.cloud.google.com/memorystore/docs/redis/about-vector-search)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers](https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers)

## Supporting Pages

### "Vector search for generative AI applications \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-vector-search](https://docs.cloud.google.com/memorystore/docs/redis/about-vector-search)
- Source ID: `site-docs-root-2`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using vector search with LangChain lets you build solutions for the following use cases: RAG LLM cache Recommendation engine Semantic search Image similarity search Benefits of vector search for generative AI in Memorystore for Redis The advantage of using Memorystore to store your generative AI data, compared to other Google Cloud databases is its speed.
- This page describes how Memorystore for Redis supports storing and querying vector data for generative AI applications, such as Retrieval Augmented Generation (RAG) and LangChain, by using vector search capabilities.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Vector search for generative AI applications Stay organized with collections Save and categorize content based on your preferences.
- Approaches to using vector search for generative AI in Memorystore for Redis Memorystore also provides two distinct search approaches to help you find the right balance between speed and accuracy.

### Supported versions \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Current versions This table shows the supported Redis versions, the patch levels for these versions, and when the versions were last updated: Redis major version Patch level Last update 7.2 7.2.0 February 29, 2024 7.0 7.0.12 July 17, 2023 6.x 6.2.13 May 9, 2022 5.0 5.0.14 May 09, 2022 4.0 4.0.14 June 17, 2019 3.2 3.2.13 June 21, 2018 Redis version 7.2 The following table provides information about the vector search feature for Redis version 7.2: Feature Description Supported in Memorystore for Redis Vector search Redis version 7.2 introduces vector data storage and vector data search.
- No Redis version 6.x The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 6.x: Feature Description Supported in Memorystore for Redis Threaded I/O With Redis 6.x, if multiple vCPUs are available, then some I/O operations can run in parallel.
- Feature Description Supported in Memorystore for Redis Redis functions Redis 7.0 introduces Redis functions, which provides improved Lua script capabilities on the Redis server.
- Memorystore for Redis is backed by open-source Redis software.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- During a failover, if there are connections to the read endpoint, then Memorystore for Redis drops the connections to the replica that's being promoted to the primary instance.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback High availability for Memorystore for Redis Stay organized with collections Save and categorize content based on your preferences.
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.
- For information about the metrics that Cloud Monitoring provides for Memorystore for Redis, see Monitor Redis Instances and Supported monitoring metrics for Memorystore for Redis .

### Redis tier capabilities \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers](https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Redis tier capabilities Stay organized with collections Save and categorize content based on your preferences.
- Note: If you are looking for the Memorystore for Redis Cluster documentation, see Memorystore for Redis Cluster overview .
- Tier architecture The following diagrams show the architectures for the Memorystore for Redis service tiers.
- Memorystore for Redis supports Basic and Standard Tiers.

