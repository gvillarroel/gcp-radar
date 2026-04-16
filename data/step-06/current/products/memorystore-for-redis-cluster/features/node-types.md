---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.729Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Node types"
feature_slug: "node-types"
latest_feature_date: "2024-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-scaling-instance-capacity"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview"
keywords:
  - "node"
  - "types"
  - "memorystore"
  - "for"
  - "redis"
  - "cluster"
  - "supports"
  - "smaller"
---

# Node types

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis Cluster supports smaller and larger node types.

## Extended Definition

Memorystore for Redis Cluster supports smaller and larger node types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/cluster/about-scaling-instance-capacity)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)

## Supporting Pages

### "Cluster and node specification \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- Source ID: `site-docs-root`
- Final score: 338
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.
- The redis-standard-small node type lets you provision small clusters, and grow your cluster by smaller increments at potentially lower costs than other node types. redis-standard-small also offers the advantage of distributing your keyspace across more nodes with a higher total vCPU count.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Cluster and node specification Stay organized with collections Save and categorize content based on your preferences.
- Scale an instance As part of creating a Memorystore for Redis Cluster instance, you choose a node type for the instance and specify the number of shards for the instance.

### "About scaling instance capacity \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-scaling-instance-capacity](https://docs.cloud.google.com/memorystore/docs/cluster/about-scaling-instance-capacity)
- Source ID: `site-iam-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.
- You scaled to a smaller node type that doesn't have the capacity to hold all of the data that Memorystore for Redis Cluster stores in the original node type.
- Important: If you want to scale the node type for your instance down, and you haven't overwritten the default settings for the original node type, then Memorystore for Redis Cluster modifies the default settings to those of the scaled node type.
- You scaled to a smaller shard count that doesn't have the capacity to hold all of the keys that Memorystore for Redis Cluster stores in the original instance.

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.
- Click Create cluster . gcloud To create a single-zone instance, run the create command: gcloud redis clusters create INSTANCE ID \ --region= REGION ID \ --network= NETWORK \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --shard-count= SHARD COUNT \ --zone-distribution-mode= ZONE DISTRIBUTION MODE \ --zone= ZONE Replace the following: INSTANCE ID is the ID of the Memorystore for Redis Cluster instance you're creating.
- Click Create cluster . gcloud To create a Memorystore for Redis Cluster instance, run the create command: gcloud redis clusters create INSTANCE ID \ --region= REGION ID \ --network= NETWORK \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --shard-count= SHARD COUNT Replace the following: INSTANCE ID is the ID of the Memorystore for Redis Cluster instance you're creating.

### Memorystore for Redis Cluster overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
- Source ID: `site-api-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Redis version Memorystore for Redis Cluster is based on open-source Redis version 7.x and supports a subset of the total Redis command library .
- Key concepts and terms Hierarchical resource structure Memorystore for Redis Cluster gathers the various resources used in a Redis deployment into a hierarchical structure that simplifies administration and management.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Memorystore for Redis Cluster overview Stay organized with collections Save and categorize content based on your preferences.
- Here is a diagram that illustrates this structure: Memorystore for Redis Cluster instances are composed of a set of shards, each containing a subset of your key space.

