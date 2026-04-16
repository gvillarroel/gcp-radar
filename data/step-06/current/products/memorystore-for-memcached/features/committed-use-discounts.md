---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.244Z"
product_name: "Memorystore for Memcached"
product_slug: "memorystore-for-memcached"
feature_name: "Committed use discounts"
feature_slug: "committed-use-discounts"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/memcached-overview"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties"
keywords:
  - "committed"
  - "use"
  - "discounts"
  - "are"
  - "supported"
  - "for"
  - "memorystore"
  - "memcached"
---

# Committed use discounts

Product: Memorystore for Memcached
Coverage: MEDIUM

## Step 02 Summary

Committed use discounts are supported for Memorystore for Memcached.

## Extended Definition

Committed use discounts are supported for Memorystore for Memcached.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations](https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations)
- [https://docs.cloud.google.com/memorystore/docs/memcached/memcached-overview](https://docs.cloud.google.com/memorystore/docs/memcached/memcached-overview)
- [https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey](https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey)
- [https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties](https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties)

## Supporting Pages

### "Supported Memcached configurations \_|\_ Memorystore for Memcached \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations](https://docs.cloud.google.com/memorystore/docs/memcached/supported-memcached-configurations)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Therefore, the minimum value of max-item-size is 524288 bytes as opposed to the open source Memcached supported minimum (1024 bytes). max-item-size must be evenly divisible by slab chunk max (524288 bytes). max-item-size may not be more than half the total allocated size of the cache (the -m flag). slab-min-size (-n) 1-1024 (bytes) 48 Sets the minimum item size and the size of the smallest Memcached slab. slab-growth-factor (-f) 1.01-100.00 1.25 slab-growth-factor is the multiplier used to calculate the size of Memcached chunks/slabs.
- This configurations sets time in seconds that clients can idle before timing out and disconnecting. lru maintainer true, false true (enabled) Enabled by default. lru maintainer is a background process that determines how recently items are accessed in order to properly sort all items by "least recently used" (lru). maxconns fast true, false false (disabled) Manages how Memcached processes new connections when the maximum number of clients is reached.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Supported Memcached configurations Stay organized with collections Save and categorize content based on your preferences.
- This configuration is unmodifiable; however, you can add Reserved Memory with the reserved memory configuration listed above. threads (-t) Memorystore sets this value to match the number of CPUs for each instance node. conn-limit (-c) 65000 per node verbose (-v) true slab automove true (enabled) slab reassign true (enabled) enable-largepages (-L) false (disabled) lock-memory (-k) false (disabled) expirezero-does-not-evict Not supported.

### Memorystore for Memcached overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/memcached-overview](https://docs.cloud.google.com/memorystore/docs/memcached/memcached-overview)
- Source ID: `site-api-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page introduces the Memorystore for Memcached service, including use cases, key concepts, and the advantages of using Memcached.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Memorystore for Memcached overview Stay organized with collections Save and categorize content based on your preferences.
- The following table outlines the different features and capabilities available Memorystore for Memcached: Features and Capabilities Description Memcached versions The service currently supports versions 1.5.16 and 1.6.15.
- Before creating a cluster it is important to determine the number of nodes, the memory per node, and the number of vCPUs per node that will be used to create the Memcached cluster.

### "Migrate from Memorystore for Memcached to Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey](https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey)
- Source ID: `site-api-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then, to determine the node type for your corresponding Memorystore for Valkey instances, use the following table: Memorystore for Memcached node size Memorystore for Valkey node type Total node capacity vCPU count shared-core-nano 1.4 GB 0.5 (Shared) 1 GB – 5 GB standard-small 6.5 GB 2 6 GB – 12 GB highmem-medium 13.0 GB 2 13 GB – 50 GB highmem-xlarge 58.0 GB 8 The shared-core-nano node type is for small workloads.
- Although you can use the compare-and-swap (CAS) capabilities of Memorystore for Memcached for optimistic locking on a key level, Memorystore for Valkey lets you run a group of commands atomically.
- Memorystore for Valkey features Migrating to Memorystore for Valkey provides you with access to features that aren't available in Memorystore for Memcached.
- If your Memorystore for Memcached instances use multiple nodes, then which node type do we recommend for your Memorystore for Valkey instances?

### "Instance and node properties \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties](https://docs.cloud.google.com/memorystore/docs/memcached/instance-node-properties)
- Source ID: `site-iam-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a list of available versions, see Supported versions . nodeID: Auto-generated ID of the Memcached node used to view node-level metrics in Cloud Monitoring. state: Nodes can be in the following states: Creating : Node is being created.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Instance and node properties Stay organized with collections Save and categorize content based on your preferences.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.
- This page lists the properties of Memorystore for Memcached instances and nodes, as well as the possible values for those properties.

