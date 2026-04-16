---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.263Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Replica nodes per primary node limit increase"
feature_slug: "replica-nodes-per-primary-node-limit-increase"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance"
keywords:
  - "replica"
  - "nodes"
  - "per"
  - "primary"
  - "node"
  - "limit"
  - "increase"
  - "each"
---

# Replica nodes per primary node limit increase

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Each primary node in a Memorystore for Valkey instance can now have up to five replica nodes.

## Extended Definition

Each primary node in a Memorystore for Valkey instance can now have up to five replica nodes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)

## Supporting Pages

### "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node type and size Maximum capacity, given an instance shape of 250 primary nodes and 0 replicas per node Maximum capacity, given an instance shape of 125 primary nodes and 1 replica per node Maximum capacity, given an instance shape of 83 primary nodes and 2 replicas per node Maximum capacity, given an instance shape of 62 primary nodes and 3 replicas per node Maximum capacity, given an instance shape of 50 primary nodes and 4 replicas per node Maximum capacity, given an instance shape of 41 primary nodes and 5 replicas per node shared-core-nano - 1.4 GB 350 GB 175 GB 116.2 GB 86.8 GB 70 GB 57.4 GB standard-small - 6.5 GB 1,625 GB 812.5 GB 539.5 GB 403 GB 325 GB 266.5 GB highmem-medium - 13 GB 3,250 GB 1,625 GB 1,079 GB 806 GB 650 GB 533 GB highmem-xlarge - 58 GB 14,500 GB 7,250 GB 4,814 GB 3,596 GB 2,900 GB 2,378 GB Cluster Mode Disabled instances The following table lists the maximum writable capacity for Cluster Mode Disabled instances.
- Although the highmem-xlarge node type is four times greater than the highmem-medium type in size, the performance is not four times greater, as Valkey 7.2 performance does not scale linearly when vCPUs are added to increasingly larger nodes (scaling up).
- If a primary node becomes the replica, then connections to this replica node end and Memorystore for Valkey redirects new connections to the new primary node through an automatic failover.
- For applications that require operational access, such as risky scripts and offline jobs, we recommend that you isolate traffic from the primary node by using the reader endpoint.

### Best practices for Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- For instances with two replicas per node or greater, target a /instance/cpu/maximum utilization value of 0.9 seconds for the primary and 0.5 seconds for each replica.
- Using these commands might result in the following performance issues: High latency and client timeouts Memory pressure caused by commands that increase memory usage Data loss during node replication and synchronization because the Valkey main thread is blocked Starved health checks, observability, and replication The following table lists examples of Valkey commands that are resource-intensive and provides you with alternatives that are resource-efficient.
- Depending on the number of replicas you provision per node, we recommend the following /instance/cpu/maximum utilization CPU usage targets: For instances with one replica per node, target a /instance/cpu/maximum utilization value of 0.5 seconds for the primary and 0.5 seconds for the replica.
- Additionally, clients should periodically refresh the topology to keep the clients warmed up for any changes and learn about changes that may not result in redirections or errors from the server, such as when new replica nodes are added.

### "High availability and replicas \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/valkey/ha-and-replicas)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Cluster Mode Enabled Instance shapes The following diagrams illustrate shapes for Cluster Mode Enabled instances: Instance shape with three shards and zero replicas per node Instance shape with three shards and one replica per node Instance shape with three shards and multiple replicas per node Cluster Mode Disabled Instance shapes The following diagram illustrates a shape for Cluster Mode Disabled instances: Instance shape with multiple replicas Automatic failover Automatic failovers within a shard can occur due to maintenance or an unexpected failure of the primary node.
- After automatic recovery, connections should be retried with exponential backoff to avoid overloading primary and replica nodes.
- This is true for all primary and replica nodes.
- For instances that aren't highly available (no replicas provisioned), repairing a failed primary node also takes time on the order of minutes.

### About maintenance \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance](https://docs.cloud.google.com/memorystore/docs/valkey/about-maintenance)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Test your client application with a series of update operations (such as scale in or out, or replica count changes) while running a representative workload on primary and replica nodes, and monitoring for client impact.
- Each shard has one primary node and zero-or-more replica nodes.
- During the coordinated failover, the client and the Valkey nodes work together and use the following strategies to avoid downtime for the application: Incoming client requests are temporarily blocked on the primary node, providing a window to ensure the existing replica is synced 100% with the primary node.
- The replica node running the earlier software is kept around for a certain drain period, typically on the order of minutes, during which it starts redirecting the incoming read requests to the primary node of its shard.

