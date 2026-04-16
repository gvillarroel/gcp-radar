---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.266Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "Node-level metrics"
feature_slug: "node-level-metrics"
latest_feature_date: "2025-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/cluster"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence"
keywords:
  - "node"
  - "level"
  - "metrics"
  - "provides"
  - "monitoring"
  - "at"
  - "the"
  - "for"
---

# Node-level metrics

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Provides monitoring metrics at the node level for Memorystore for Valkey.

## Extended Definition

Provides monitoring metrics at the node level for Memorystore for Valkey.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/cluster](https://docs.cloud.google.com/memorystore/docs/cluster)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence)

## Supporting Pages

### Best practices for Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Using these commands might result in the following performance issues: High latency and client timeouts Memory pressure caused by commands that increase memory usage Data loss during node replication and synchronization because the Valkey main thread is blocked Starved health checks, observability, and replication The following table lists examples of Valkey commands that are resource-intensive and provides you with alternatives that are resource-efficient.
- Depending on the number of replicas you provision per node, we recommend the following /instance/cpu/maximum utilization CPU usage targets: For instances with one replica per node, target a /instance/cpu/maximum utilization value of 0.5 seconds for the primary and 0.5 seconds for the replica.
- RDB persistence and adding replicas For best results of backing up your instance with RDB snapshots or adding replicas to your instance, use the following best practices: Memory management RDB snapshots use a process fork and 'copy-on-write' mechanism to take a snapshot of node data.
- When a MOVED redirection is received from the server, such as in the situation of a failover when all slots served by the former primary node are taken over by the replica, or re-sharding when slots are being moved from the source primary to the target primary node.

### "Instance and node specification \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification](https://docs.cloud.google.com/memorystore/docs/valkey/instance-node-specification)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Node type and size Maximum capacity shared-core-nano - 1.4 GB 1.12 GB standard-small - 6.5 GB 5.2 GB highmem-medium - 13 GB 10.4 GB highmem-xlarge - 58 GB 46.4 GB Performance Using the OSS memtier benchmarking tool in the us-central1 region yielded 120,000 - 130,000 operations per second per 2 vCPU node ( standard-small and highmem-medium ) with microseconds latency and 1KiB data size.
- Although the highmem-xlarge node type is four times greater than the highmem-medium type in size, the performance is not four times greater, as Valkey 7.2 performance does not scale linearly when vCPUs are added to increasingly larger nodes (scaling up).
- If a primary node becomes the replica, then connections to this replica node end and Memorystore for Valkey redirects new connections to the new primary node through an automatic failover.
- For applications that require operational access, such as risky scripts and offline jobs, we recommend that you isolate traffic from the primary node by using the reader endpoint.

### Memorystore for Redis Cluster documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster](https://docs.cloud.google.com/memorystore/docs/cluster)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Memorystore for Redis Cluster overview High availability and replicas Single-zone instances Cluster and node specification Client library connection code samples Best practices Operational guidelines Client library code samples Supported and blocked commands Create instances Connect to an instance Configure an instance Supported instance configurations About cross-region replication Networking About IAM authentication Manage IAM authentication Access control with IAM About in-transit encryption Persistence overview About RDB persistence About AOF persistence About maintenance find in page Reference Python reference REST API reference gcloud reference Terraform reference info Resources Locations Pricing Quotas and limits Release notes Service Level Agreement Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The horizontally scalable cluster architecture provides better performance over vertically scalable architecture because Redis performance is better on many smaller nodes instead of fewer larger nodes.
- Last updated 2026-04-08 UTC. [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Applications running on Google Cloud can achieve extreme performance by leveraging the highly scalable, available, secure Redis service without the burden of managing complex Redis deployments.

### About RDB persistence \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/valkey/about-rdb-persistence)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage a snapshot's performance impact You can monitor the performance impact that a snapshot has on your Memorystore instance by viewing the metrics available through Cloud Monitoring such as CPU usage and memory usage.
- Recovery behavior Memorystore for Valkey nodes failover to replicas as the primary recovery mechanism, rather than loading from a snapshot.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The worst case data staleness for a recovery from a snapshot is the sum of the specified interval since the last good snapshot started and the time to save the next snapshot to storage.

