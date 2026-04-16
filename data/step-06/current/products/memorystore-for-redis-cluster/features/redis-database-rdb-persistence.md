---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.723Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Redis database (RDB) persistence"
feature_slug: "redis-database-rdb-persistence"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
keywords:
  - "redis"
  - "database"
  - "rdb"
  - "persistence"
  - "the"
  - "supports"
---

# Redis database (RDB) persistence

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports Redis database persistence.

## Extended Definition

The service supports Redis database persistence.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)
- [https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview](https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)

## Supporting Pages

### "About RDB persistence \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Cluster also supports AOF persistence, but you must choose either the AOF or RDB persistence mode, because both can't be enabled at the same time.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback About RDB persistence Stay organized with collections Save and categorize content based on your preferences.
- This page gives an overview of RDB (Redis database) persistence on Memorystore for Redis Cluster.
- When enabled, RDB persistence makes a best effort to ensure backups are taken on the specified interval.

### "Persistence overview \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview](https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Cluster supports two types of persistence: AOF persistence RDB persistence Note: You can either enable AOF or RDB persistence for your instance, not both.
- These tradeoffs are generally true of all managed Redis services because of the nature of AOF and RDB persistence in OSS Redis.
- If you are comfortable with some staleness in your data on recovery and you want the performance that RDB persistence provides for a similarly sized instance, then RDB persistence is the better choice for you.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Persistence overview Stay organized with collections Save and categorize content based on your preferences.

### "About AOF persistence \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Cluster also supports RDB persistence, but you must choose either the AOF or RDB persistence mode, because both can't be enabled at the same time.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback About AOF persistence Stay organized with collections Save and categorize content based on your preferences.
- AOF persistence overview The Redis AOF (Append Only File) persistence mode prioritizes data durability.
- Sync setting The sync setting ( appendfsync ) for the AOF persistence mode determines how often the cached data in memory is saved to durable storage.

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Acceptable values are No persistence , Append Only File (AOF) persistence , and Redis Database (RDB) persistence .
- Acceptable values are No persistence , Append Only File (AOF) persistence , and Redis Database (RDB) persistence .
- In the Data persistence strategy section, specify how you want Memorystore for Redis Cluster to persist the data in your cluster.
- In the Data persistence strategy section, specify how you want Memorystore for Redis Cluster to persist the data in your cluster.

