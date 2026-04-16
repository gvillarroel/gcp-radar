---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.728Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Single-zone instances"
feature_slug: "single-zone-instances"
latest_feature_date: "2024-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices"
keywords:
  - "single"
  - "zone"
  - "instances"
  - "are"
  - "generally"
  - "available"
  - "on"
  - "memorystore"
---

# Single-zone instances

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

Single-zone instances are generally available on Memorystore for Redis Cluster; Memorystore for Redis Cluster supports single-zone instances in Preview.

## Extended Definition

Single-zone instances are generally available on Memorystore for Redis Cluster; Memorystore for Redis Cluster supports single-zone instances in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances](https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)

## Supporting Pages

### "Single-zone instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances](https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances)
- Source ID: `site-docs-root`
- Final score: 353
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Single-zone instances Stay organized with collections Save and categorize content based on your preferences.
- This page gives an overview of single-zone instances for Memorystore for Redis Cluster.
- Although we recommend provisioning a multi-zone instance with High Availability , you should use the following recommendations for single-zone instances if they apply to you: If you you choose to provision a single-zone instance, you should enable replicas.
- Single-zone instance diagram example Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "High availability and replicas \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multi-zone instances HA instances: If a zone has an outage, the entire keyspace is available for reads and writes, but since some read replicas are unavailable, the read capacity is reduced.
- Recommended configurations We recommend creating highly available multi-zone instances as opposed to single-zone instances because of the better reliability they provide.
- Single-zone instances Both HA and Non-HA instances: If the zone that the instance is provisioned in has an outage, the cluster is unavailable and data is flushed.
- Non-HA instances (no replicas): If a zone has a outage, the portion of the keyspace that is provisioned in the affected zone undergoes a data flush, and is unavailable for writes or reads for the duration of the outage.

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you create a cluster with replicas, and a single zone of the region where you want the cluster to be created is unavailable, then Memorystore for Redis Cluster creates the cluster in the available zones of the region.
- If you create a cluster without replicas and a single zone is unavailable, then Memorystore for Redis Cluster fails to create the cluster.
- Click Create cluster . gcloud To create a single-zone instance, run the create command: gcloud redis clusters create INSTANCE ID \ --region= REGION ID \ --network= NETWORK \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --shard-count= SHARD COUNT \ --zone-distribution-mode= ZONE DISTRIBUTION MODE \ --zone= ZONE Replace the following: INSTANCE ID is the ID of the Memorystore for Redis Cluster instance you're creating.
- After the unavailable zone becomes available, Memorystore for Redis Cluster redistributes the nodes of the cluster so that they're evenly distributed among the zones.

### Best practices for Memorystore for Redis Cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's why: Cost and performance If minimizing your cost and having peak performance for your clients that are located in the same region are your primary drivers, then we recommend that you choose a single-zone cluster.
- There's a 33% chance that the zone where your cluster is located goes down, as opposed to a 100% chance that nodes, which are located in the unavailable zone, are impacted.
- Rapid recovery If a zonal outage occurs for a single-zone cluster, then Memorystore for Redis Cluster streamlines the recovery of your data.
- Minimize your outage impact When you choose a single-zone cluster, zonal outages are less likely to impact your cluster.

