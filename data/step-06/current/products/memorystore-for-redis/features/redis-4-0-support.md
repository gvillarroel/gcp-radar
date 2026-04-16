---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.287Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Redis 4.0 support"
feature_slug: "redis-4-0-support"
latest_feature_date: "2019-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers"
  - "https://docs.cloud.google.com/memorystore/docs/redis/redis-overview"
keywords:
  - "redis"
  - "memorystore"
  - "for"
  - "added"
  - "general"
  - "availability"
  - "introduced"
  - "beta"
---

# Redis 4.0 support

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Cloud Memorystore for Redis added general availability support for Redis 4.0; Cloud Memorystore for Redis introduced beta support for Redis 4.0.

## Extended Definition

Cloud Memorystore for Redis added general availability support for Redis 4.0; Cloud Memorystore for Redis introduced beta support for Redis 4.0.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers](https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers)
- [https://docs.cloud.google.com/memorystore/docs/redis/redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/redis-overview)

## Supporting Pages

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback High availability for Memorystore for Redis Stay organized with collections Save and categorize content based on your preferences.
- Memorystore for Redis provides high availability by replicating a primary instance to one or more replicas.
- This page describes high availability (HA) for Memorystore for Redis instances in the Standard Tier.
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- With Memorystore for Redis, you can easily achieve your latency and throughput targets by scaling up your Redis instances with minimal impact to your application's availability.
- In general, the Redis functionality that Memorystore for Redis instances provide is the same as the functionality that locally-hosted Redis instances provide.
- High availability: Memorystore for Redis instances in the Standard Tier are replicated across zones, monitored for health and have fast automatic failover.

### Redis tier capabilities \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers](https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Basic Tier One Redis node Ephemeral cache Standard Tier Provides High Availability with replication Fails over to replica in the case of primary node failure Standard Tier with read replicas Provides High Availability with replication Read replicas allow for distributed reads Feature comparison Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Redis tier capabilities Stay organized with collections Save and categorize content based on your preferences.
- Note: If you are looking for the Memorystore for Redis Cluster documentation, see Memorystore for Redis Cluster overview .
- Tier architecture The following diagrams show the architectures for the Memorystore for Redis service tiers.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/redis-overview)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- With Memorystore for Redis, you can easily achieve your latency and throughput targets by scaling up your Redis instances with minimal impact to your application's availability.
- In general, the Redis functionality that Memorystore for Redis instances provide is the same as the functionality that locally-hosted Redis instances provide.
- High availability: Memorystore for Redis instances in the Standard Tier are replicated across zones, monitored for health and have fast automatic failover.

