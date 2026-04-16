---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.268Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Cluster mode disabled"
feature_slug: "cluster-mode-disabled"
latest_feature_date: "2025-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/product-overview"
keywords:
  - "cluster"
  - "mode"
  - "disabled"
  - "allows"
  - "creating"
  - "memorystore"
  - "for"
  - "valkey"
---

# Cluster mode disabled

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Allows creating Memorystore for Valkey instances with cluster mode disabled.

## Extended Definition

Allows creating Memorystore for Valkey instances with cluster mode disabled.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas)
- [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/valkey/product-overview](https://docs.cloud.google.com/memorystore/docs/valkey/product-overview)

## Supporting Pages

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: Cluster Mode Enabled example gcloud memorystore instances create my-instance \ --location=us-central1 \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/my-project/global/networks/default", "projectId": "my-project"}}]}]' \ --replica-count=2 \ --node-type=highmem-medium \ --shard-count=8 \ --mode=cluster Cluster Mode Disabled example gcloud memorystore instances create my-instance \ --location=us-central1 \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/my-project/global/networks/default", "projectId": "my-project"}}]}]' \ --shard-count=1 \ --replica-count=2 \ --node-type=highmem-medium \ --mode=cluster-disabled By default, in-transit encryption is disabled and the authorized network is default .
- Click Create instance . gcloud To create a single-zone instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --zone-distribution-config-mode= ZONE DISTRIBUTION CONFIG MODE \ --zone-distribution-config= ZONE \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- Click Create instance . gcloud To create a Memorystore for Valkey instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.
- This page provides instructions for creating single-zone and multi-zone instances in Memorystore for Valkey.

### "High availability and replicas \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using recommended best practices allows your client to handle the following items for your instance automatically and without any downtime: The role (automatic failovers) The endpoint (node replacement) Cluster Mode Enabled-related slot assignment changes (consumer scale out and in) Replicas A highly available Memorystore for Valkey instance is a regional resource.
- Cluster Mode Enabled Instance shapes The following diagrams illustrate shapes for Cluster Mode Enabled instances: Instance shape with three shards and zero replicas per node Instance shape with three shards and one replica per node Instance shape with three shards and multiple replicas per node Cluster Mode Disabled Instance shapes The following diagram illustrates a shape for Cluster Mode Disabled instances: Instance shape with multiple replicas Automatic failover Automatic failovers within a shard can occur due to maintenance or an unexpected failure of the primary node.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback High availability and replicas Stay organized with collections Save and categorize content based on your preferences.
- High availability Memorystore for Valkey is built on a highly available architecture where your clients access managed Memorystore for Valkey nodes directly.

### "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node type and size Maximum capacity, given an instance shape of 250 primary nodes and 0 replicas per node Maximum capacity, given an instance shape of 125 primary nodes and 1 replica per node Maximum capacity, given an instance shape of 83 primary nodes and 2 replicas per node Maximum capacity, given an instance shape of 62 primary nodes and 3 replicas per node Maximum capacity, given an instance shape of 50 primary nodes and 4 replicas per node Maximum capacity, given an instance shape of 41 primary nodes and 5 replicas per node shared-core-nano - 1.4 GB 350 GB 175 GB 116.2 GB 86.8 GB 70 GB 57.4 GB standard-small - 6.5 GB 1,625 GB 812.5 GB 539.5 GB 403 GB 325 GB 266.5 GB highmem-medium - 13 GB 3,250 GB 1,625 GB 1,079 GB 806 GB 650 GB 533 GB highmem-xlarge - 58 GB 14,500 GB 7,250 GB 4,814 GB 3,596 GB 2,900 GB 2,378 GB Cluster Mode Disabled instances The following table lists the maximum writable capacity for Cluster Mode Disabled instances.
- Scale an instance As part of creating a Memorystore for Valkey instance, you choose a node type for the instance and specify the number of shards for the instance.
- Instance endpoints for Cluster Mode Disabled This section explains the primary and reader endpoints that each Cluster Mode Disabled instance has.
- Maximum writable capacity This section lists the maximum writable capacity for Cluster Mode Enabled and Cluster Mode Disabled instances.

### Memorystore for Valkey overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/product-overview](https://docs.cloud.google.com/memorystore/docs/valkey/product-overview)
- Source ID: `site-api-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key concepts and terms Cluster Mode Enabled and Cluster Mode Disabled instances Memorystore for Valkey instance can be created in both Cluster Mode Enabled and Cluster Mode Disabled modes.
- Memorystore for Valkey is a fully managed Valkey service for Google Cloud which supports both Cluster Mode Enabled and Cluster Mode Disabled instances.
- For more information, see Instance endpoints for Cluster Mode Disabled .
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Memorystore for Valkey overview Stay organized with collections Save and categorize content based on your preferences.

