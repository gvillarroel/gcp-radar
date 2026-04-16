---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.727Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "Instance configurations"
feature_slug: "instance-configurations"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview"
keywords:
  - "instance"
  - "configurations"
  - "the"
  - "supports"
  - "memorystore"
  - "for"
  - "redis"
  - "cluster"
---

# Instance configurations

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports instance configurations; Memorystore for Redis Cluster supports instance configurations in Preview.

## Extended Definition

The service supports instance configurations; Memorystore for Redis Cluster supports instance configurations in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations](https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations)
- [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)

## Supporting Pages

### "Supported instance configurations \_|\_ Memorystore for Redis Cluster \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations](https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations)
- Source ID: `site-docs-root`
- Final score: 350
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Supported instance configurations Stay organized with collections Save and categorize content based on your preferences.
- Modifiable configuration parameters You can modify the following parameters when creating or updating a Memorystore for Redis Cluster instance.
- This page describes maxmemory policies and other Redis configurations available for Memorystore for Redis Cluster.
- The default maxmemory policy for Memorystore for Redis Cluster is volatile-lru .

### "Configure an instance \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Cluster supports a subset of the native Redis configuration parameters that you can modify to customize the behavior of your instance.
- You can't see configuration parameters when running the gcloud redis clusters describe command unless you have changed a configuration parameter from its default value. gcloud redis clusters describe instance-id --region= region-id Example: gcloud redis clusters describe my-instance --region=us-central1 Set a configuration parameter during cluster creation To set a configuration parameter while creating a cluster, run the gcloud redis clusters create command with --redis-config flag replacing variables with appropriate values. gcloud redis clusters create instance-id \ --region= region-id \ --project= project-id \ --node-type= node-type \ --shard-count= shard-count \ --redis-config= config-name = config-value \ Replace the following: instance-id is the ID of the Memorystore for Redis Cluster instance you're creating. region-id is the region where you want the instance placed. project-id is your project ID. node-type is your chosen node type.
- If you restart the instance, then Memorystore for Redis Cluster saves the changes.
- For example: gcloud redis clusters create foo --region=us-east1 --project=test-proj --node-type=redis-highmem-medium --shard-count=3 --redis-config=maxmemory-policy=allkeys-lru Update a configuration parameter To update a configuration parameter for an existing instance, run the gcloud redis clusters update command with the --update-redis-config flag replacing variables with appropriate values. gcloud redis clusters update instance-id \ --region= region-id \ --project= project-id \ --update-redis-config= config-name = config-value Example: gcloud redis clusters update foo --region=us-east1 --project=test-proj --update-redis-config=maxmemory-policy=allkeys-lru Reset a configuration parameter To reset a configuration parameter to its default value, run the gcloud redis clusters update command with the --remove-redis-config flag replacing variables with appropriate values. gcloud redis clusters update instance-id \ --region= region-id \ --project= project-id \ --remove-redis-config= config-name Example: gcloud redis clusters update foo --region=us-east1 --project=test-proj --remove-redis-config=maxmemory-policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Cluster and node specification \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scale an instance As part of creating a Memorystore for Redis Cluster instance, you choose a node type for the instance and specify the number of shards for the instance.
- This page describes the cluster and node specifications for Memorystore for Redis Cluster instances.
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.
- This endpoint is reserved for Memorystore for Redis Cluster to use to connect your client to nodes in the cluster.

### Memorystore for Redis Cluster overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
- Source ID: `site-api-reference`
- Final score: 293
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Redis version Memorystore for Redis Cluster is based on open-source Redis version 7.x and supports a subset of the total Redis command library .
- The terms instance and cluster can be used interchangeably when referring to a single Memorystore for Redis Cluster unit of deployment.
- Key concepts and terms Hierarchical resource structure Memorystore for Redis Cluster gathers the various resources used in a Redis deployment into a hierarchical structure that simplifies administration and management.
- Here is a diagram that illustrates this structure: Memorystore for Redis Cluster instances are composed of a set of shards, each containing a subset of your key space.

