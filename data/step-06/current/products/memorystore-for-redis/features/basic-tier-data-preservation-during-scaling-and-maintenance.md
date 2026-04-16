---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.275Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Basic Tier data preservation during scaling and maintenance"
feature_slug: "basic-tier-data-preservation-during-scaling-and-maintenance"
latest_feature_date: "2022-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots"
keywords:
  - "basic"
  - "tier"
  - "preservation"
  - "during"
  - "scaling"
  - "and"
  - "maintenance"
  - "instances"
---

# Basic Tier data preservation during scaling and maintenance

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Basic Tier instances preserve data during scaling and maintenance operations instead of flushing the cache.

## Extended Definition

Basic Tier instances preserve data during scaling and maintenance operations instead of flushing the cache.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances](https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots](https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots)

## Supporting Pages

### About maintenance \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Impact of maintenance Both Basic Tier and Standard Tier instances undergo a connection reset during maintenance.
- Basic Tier impact Basic Tier instances are unavailable during maintenance, which typically lasts about 5 minutes.
- Basic Tier instances are unavailable during maintenance which typically lasts about 5 minutes.
- Standard Tier impact During maintenance, Standard Tier instances undergo a failover.

### About scaling instances \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances](https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance scaling behavior Data is preserved during scaling for both Basic and Standard Tier instances.
- Best practices for scaling an instance For Standard Tier instances, to increase the speed and reliability of your scaling operation, scale your instance during periods of low instance traffic.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About scaling instances Stay organized with collections Save and categorize content based on your preferences.
- When reducing a Standard Tier instance's capacity, you must choose a size greater than the amount of data being stored or scaling fails.

### "Memory management best practices \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provision extra memory for Standard Tier instances Unlike Basic Tier instances, Standard Tier instances reserve 10% of instance capacity as a replication buffer.
- You can do this by scheduling for a time when instance traffic is low, or by temporarily scaling up your instance size during the maintenance window so that the System Memory Usage Ratio metric is at 50% or lower.
- Scaling and version upgrade operations Scaling or Upgrading during periods of high write-load can put memory pressure on your instance due to memory overhead caused by replication.
- Determine the initial size of a Memorystore instance First, you should choose whether you want a Standard Tier or Basic Tier instance.

### About RDB snapshots \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots](https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RDB snapshots preserve Basic Tier instance data during these operations that cause restarts, planned maintenance, and unforeseen system failures.
- Basic Tier instances recover data from the most recent snapshot every time an instance is restarted due to failure, undergoes a scaling operation , or undergoes an upgrade for the OSS Redis version your instance .
- You can also use RDB snapshots to automate backup and recovery of Basic Tier instances.
- In some scenarios you may also want to ensure data can be recovered from snapshot backups in the case of catastrophic failure of Standard Tier instances.

