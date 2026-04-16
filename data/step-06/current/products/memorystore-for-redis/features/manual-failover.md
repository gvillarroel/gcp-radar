---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.287Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Manual failover"
feature_slug: "manual-failover"
latest_feature_date: "2019-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers"
keywords:
  - "manual"
  - "failover"
  - "memorystore"
  - "for"
  - "redis"
  - "added"
  - "standard"
  - "tier"
---

# Manual failover

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Cloud Memorystore for Redis added manual failover for standard tier instances.

## Extended Definition

Cloud Memorystore for Redis added manual failover for standard tier instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover](https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers](https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers)

## Supporting Pages

### About manual failover \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover](https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover)
- Source ID: `site-docs-root-2`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About manual failover Stay organized with collections Save and categorize content based on your preferences.
- Google Cloud console verification Before you start a manual failover, go to the Memorystore for Redis instances list page , and click the name of your instance.
- A standard tier Memorystore for Redis instance uses a replica node to back up the primary node.
- This page gives an overview of manual failover for Memorystore for Redis.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 320
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you have primary instances that have read replicas enabled, then Memorystore for Redis doesn't support the manual failover API.
- This page describes high availability (HA) for Memorystore for Redis instances in the Standard Tier.
- A failover occurs when you perform the following tasks: Scale your instance Upgrade the Redis version of an instance Initiate a manual failover Perform a maintenance update If you implement retry logic in your application to handle connection drops because of failovers, then your instance probably won't see a significant performance impact.
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.

### About maintenance \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- Source ID: `site-docs-root-2`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FAQ The following are some frequently asked questions about the maintenance policy for Memorystore for Redis: What is the impact of maintenance on Standard Tier instances?
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About maintenance Stay organized with collections Save and categorize content based on your preferences.
- Caution: When Memorystore for Redis applies maintenance to an instance that has read replicas, Memorystore for Redis first applies the new maintenance version to the read replicas.
- In addition, the client application can't connect to the read replicas until Memorystore for Redis completes maintenance on the primary instance.

### Redis tier capabilities \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers](https://docs.cloud.google.com/memorystore/docs/redis/redis-tiers)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis supports Basic and Standard Tiers.
- Basic Tier One Redis node Ephemeral cache Standard Tier Provides High Availability with replication Fails over to replica in the case of primary node failure Standard Tier with read replicas Provides High Availability with replication Read replicas allow for distributed reads Feature comparison Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Redis tier capabilities Stay organized with collections Save and categorize content based on your preferences.
- Tier architecture The following diagrams show the architectures for the Memorystore for Redis service tiers.

