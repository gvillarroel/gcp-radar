---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.729Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "AOF persistence"
feature_slug: "aof-persistence"
latest_feature_date: "2024-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
keywords:
  - "aof"
  - "persistence"
  - "memorystore"
  - "for"
  - "redis"
  - "cluster"
  - "supports"
  - "in"
---

# AOF persistence

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis Cluster supports AOF persistence in Preview.

## Extended Definition

Memorystore for Redis Cluster supports AOF persistence in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)
- [https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview](https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)

## Supporting Pages

### "About AOF persistence \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-aof-persistence)
- Source ID: `site-docs-root`
- Final score: 362
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Cluster also supports RDB persistence, but you must choose either the AOF or RDB persistence mode, because both can't be enabled at the same time.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback About AOF persistence Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of AOF persistence for Memorystore for Redis Cluster.
- Sync setting The sync setting ( appendfsync ) for the AOF persistence mode determines how often the cached data in memory is saved to durable storage.

### "Persistence overview \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview](https://docs.cloud.google.com/memorystore/docs/cluster/persistence-overview)
- Source ID: `site-docs-root`
- Final score: 328
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Cluster supports two types of persistence: AOF persistence RDB persistence Note: You can either enable AOF or RDB persistence for your instance, not both.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Persistence overview Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of persistence for Memorystore for Redis Cluster.
- If performance is your top priority, we recommend using RDB persistence because it usually places lower performance demands on your instance than AOF persistence does for a similarly sized instance.

### "About RDB persistence \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Cluster also supports AOF persistence, but you must choose either the AOF or RDB persistence mode, because both can't be enabled at the same time.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback About RDB persistence Stay organized with collections Save and categorize content based on your preferences.
- Recovery behavior Memorystore for Redis Cluster nodes failover to replicas as the primary recovery mechanism, rather than loading from a snapshot.
- This page gives an overview of RDB (Redis database) persistence on Memorystore for Redis Cluster.

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Data persistence strategy section, specify how you want Memorystore for Redis Cluster to persist the data in your cluster.
- In the Data persistence strategy section, specify how you want Memorystore for Redis Cluster to persist the data in your cluster.
- Click Create cluster . gcloud To create a single-zone instance, run the create command: gcloud redis clusters create INSTANCE ID \ --region= REGION ID \ --network= NETWORK \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --shard-count= SHARD COUNT \ --zone-distribution-mode= ZONE DISTRIBUTION MODE \ --zone= ZONE Replace the following: INSTANCE ID is the ID of the Memorystore for Redis Cluster instance you're creating.
- Click Create cluster . gcloud To create a Memorystore for Redis Cluster instance, run the create command: gcloud redis clusters create INSTANCE ID \ --region= REGION ID \ --network= NETWORK \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --shard-count= SHARD COUNT Replace the following: INSTANCE ID is the ID of the Memorystore for Redis Cluster instance you're creating.

