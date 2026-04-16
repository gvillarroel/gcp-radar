---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.245Z"
product_name: "Memorystore for Memcached"
product_slug: "memorystore-for-memcached"
feature_name: "Reserved memory configuration"
feature_slug: "reserved-memory-configuration"
latest_feature_date: "2021-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/memory-management-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached"
keywords:
  - "reserved"
  - "memory"
  - "configuration"
  - "memorystore"
  - "for"
  - "memcached"
  - "supports"
  - "configuring"
---

# Reserved memory configuration

Product: Memorystore for Memcached
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Memcached supports configuring reserved memory for instances.

## Extended Definition

Memorystore for Memcached supports configuring reserved memory for instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations](https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations)
- [https://docs.cloud.google.com/memorystore/docs/memcached/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/memcached/memory-management-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey](https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey)
- [https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached](https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached)

## Supporting Pages

### "Supported Memcached configurations \_|\_ Memorystore for Memcached \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations](https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations)
- Source ID: `site-docs-root`
- Final score: 355
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This configuration is unmodifiable; however, you can add Reserved Memory with the reserved memory configuration listed above. threads (-t) Memorystore sets this value to match the number of CPUs for each instance node. conn-limit (-c) 65000 per node verbose (-v) true slab automove true (enabled) slab reassign true (enabled) enable-largepages (-L) false (disabled) lock-memory (-k) false (disabled) expirezero-does-not-evict Not supported.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Supported Memcached configurations Stay organized with collections Save and categorize content based on your preferences.
- Unmodifiable configuration parameters The following table lists the Memcached configuration parameters that you cannot modify with Memorystore for Memcached, and the default values of the parameters.
- This page provides a list of Memorystore for Memcached's modifiable and unmodifiable Memcached configuration parameters, as well as the default values for the parameters.

### "Memory management best practices \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/memcached/memory-management-best-practices)
- Source ID: `site-docs-root`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instructions on adjusting the Reserved Memory configuration, see Configuring Memcached instances Increasing Reserved Memory reduces the memory available to store items, resulting in item eviction happening sooner.
- As your application adds items to the cache, Memcached accumulates overhead for processes like connection buffers and the internal hash table: Since overhead growth is unbounded, some overhead for some workloads grows beyond the reserved limit, as seen below: When overhead and items fill all available space, Memcached runs out of memory and the process must be terminated by the OS causing a full cache flush: You may observe that memory overhead grows beyond the extra space Memorystore allocates for overhead by default (as indicated by high System Memory Utilization ).
- This page explains the Reserved Memory configuration for your Memcached instance, and when to Increase Reserved Memory if needed.
- The following sections outline general principles to follow when configuring a Memorystore for Memcached instance.

### "Migrate from Memorystore for Memcached to Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey](https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Stop traffic to the Memorystore for Memcached instance : change the configuration of your applications so that read operations point to the IP address and port number (6379) of the Memorystore for Valkey instance.
- Memorystore for Memcached supports the flags field.
- Then, to determine the node type for your corresponding Memorystore for Valkey instances, use the following table: Memorystore for Memcached node size Memorystore for Valkey node type Total node capacity vCPU count shared-core-nano 1.4 GB 0.5 (Shared) 1 GB – 5 GB standard-small 6.5 GB 2 6 GB – 12 GB highmem-medium 13.0 GB 2 13 GB – 50 GB highmem-xlarge 58.0 GB 8 The shared-core-nano node type is for small workloads.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Resources Send feedback Migrate from Memorystore for Memcached to Memorystore for Valkey Stay organized with collections Save and categorize content based on your preferences.

### "Configure a Memcached instance \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached](https://docs.cloud.google.com/memorystore/docs/memcached/configure-memcached)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuring parameters using gcloud during instance creation To set configuration parameters during creation, enter the following command replacing variables with appropriate values: gcloud memcache instances create instance-name --size= size --region= region --parameters= parameter = value , parameter = value You can simultaneously run the --parameters flag with all other flags when using the Memorystore for Memcached create command.
- Memorystore for Memcached supports a subset of native Memcached configuration parameters that you can modify.
- Gcloud Update the configuration parameters by running the following command: gcloud memcache instances update instance-id --region= region --parameters= parameter = value , parameter = value List and take note of all node IDs for your instance by running the following command: gcloud memcache instances describe instance-id --region= region --format="value(memcacheNodes.nodeId.list())" Apply the parameters one by one, or in batches, to nodes in your cluster by running the following command: Note: Updating node configurations one at a time, or in batches, helps you avoid instance unavailability and reduces data loss. gcloud memcache instances apply-parameters instance-id --region= region --node-ids= node-1-id , node-2-id Alternatively, you can apply the parameters for all nodes at once by using the following command, but we don't recommend it: gcloud memcache instances apply-parameters instance-id --region= region --apply-all You cannot simultaneously run the --parameters flag with any other flags when using the Memorystore for Memcached update command.
- Clearing configuration parameters to default values using the Google Cloud console Go to the Memorystore for Memcached page in the Google Cloud console.

