---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.725Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "and 4-shard instance shapes"
feature_slug: "and-4-shard-instance-shapes"
latest_feature_date: "2024-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances"
keywords:
  - "and"
  - "shard"
  - "instance"
  - "shapes"
  - "the"
  - "supports"
  - "instances"
  - "with"
---

# and 4-shard instance shapes

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports instances with 1, 2, or 4 shards; The service supports instances with 1, 2, or 4 shards.

## Extended Definition

The service supports instances with 1, 2, or 4 shards; The service supports instances with 1, 2, or 4 shards.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances](https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)

## Supporting Pages

### "High availability and replicas \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Non-HA instances (no replicas): If a zone has a outage, the portion of the keyspace that is provisioned in the affected zone undergoes a data flush, and is unavailable for writes or reads for the duration of the outage.
- Multi-zone instances HA instances: If a zone has an outage, the entire keyspace is available for reads and writes, but since some read replicas are unavailable, the read capacity is reduced.
- Single-zone instances Both HA and Non-HA instances: If the zone that the instance is provisioned in has an outage, the cluster is unavailable and data is flushed.
- Memorystore for Redis Cluster supports instances with 0-5 replicas per node.

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Click Create cluster . gcloud To create a single-zone instance, run the create command: gcloud redis clusters create INSTANCE ID \ --region= REGION ID \ --network= NETWORK \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --shard-count= SHARD COUNT \ --zone-distribution-mode= ZONE DISTRIBUTION MODE \ --zone= ZONE Replace the following: INSTANCE ID is the ID of the Memorystore for Redis Cluster instance you're creating.
- Click Create cluster . gcloud To create a Memorystore for Redis Cluster instance, run the create command: gcloud redis clusters create INSTANCE ID \ --region= REGION ID \ --network= NETWORK \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --shard-count= SHARD COUNT Replace the following: INSTANCE ID is the ID of the Memorystore for Redis Cluster instance you're creating.
- For example: gcloud alpha redis clusters create my-instance \ --region=us-central1 \ --network=projects/my-project-335118/global/networks/default \ --replica-count=2 \ --node-type=redis-highmem-medium \ --shard-count=8 By default, in-transit encryption is disabled, and the authorized network is default .
- Tip: If you plan on using private networking, then you can deploy both the private networking setup of your choice and the Memorystore for Redis Cluster instance along with clients such as Compute Engine VMs by using Terraform.

### "Single-zone instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances](https://docs.cloud.google.com/memorystore/docs/cluster/single-zone-instances)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Although we recommend provisioning a multi-zone instance with High Availability , you should use the following recommendations for single-zone instances if they apply to you: If you you choose to provision a single-zone instance, you should enable replicas.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Single-zone instances Stay organized with collections Save and categorize content based on your preferences.
- Single-zone instances have lower latency than multi-zone instances because you can place your clients in the same zone as the Redis nodes and avoid cross-zone communication.
- Single-zone instance diagram example Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Configure an instance \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: gcloud redis clusters create foo --region=us-east1 --project=test-proj --node-type=redis-highmem-medium --shard-count=3 --redis-config=maxmemory-policy=allkeys-lru Update a configuration parameter To update a configuration parameter for an existing instance, run the gcloud redis clusters update command with the --update-redis-config flag replacing variables with appropriate values. gcloud redis clusters update instance-id \ --region= region-id \ --project= project-id \ --update-redis-config= config-name = config-value Example: gcloud redis clusters update foo --region=us-east1 --project=test-proj --update-redis-config=maxmemory-policy=allkeys-lru Reset a configuration parameter To reset a configuration parameter to its default value, run the gcloud redis clusters update command with the --remove-redis-config flag replacing variables with appropriate values. gcloud redis clusters update instance-id \ --region= region-id \ --project= project-id \ --remove-redis-config= config-name Example: gcloud redis clusters update foo --region=us-east1 --project=test-proj --remove-redis-config=maxmemory-policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can't see configuration parameters when running the gcloud redis clusters describe command unless you have changed a configuration parameter from its default value. gcloud redis clusters describe instance-id --region= region-id Example: gcloud redis clusters describe my-instance --region=us-central1 Set a configuration parameter during cluster creation To set a configuration parameter while creating a cluster, run the gcloud redis clusters create command with --redis-config flag replacing variables with appropriate values. gcloud redis clusters create instance-id \ --region= region-id \ --project= project-id \ --node-type= node-type \ --shard-count= shard-count \ --redis-config= config-name = config-value \ Replace the following: instance-id is the ID of the Memorystore for Redis Cluster instance you're creating. region-id is the region where you want the instance placed. project-id is your project ID. node-type is your chosen node type.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Configure an instance Stay organized with collections Save and categorize content based on your preferences.
- View configuration parameters To view configuration parameters using the Google Cloud CLI, run the gcloud redis clusters describe command replacing variables with appropriate values.

