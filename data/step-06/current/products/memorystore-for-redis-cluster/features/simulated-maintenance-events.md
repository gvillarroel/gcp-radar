---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.716Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "simulated maintenance events"
feature_slug: "simulated-maintenance-events"
latest_feature_date: "2025-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification"
keywords:
  - "simulated"
  - "maintenance"
  - "events"
  - "you"
  - "can"
  - "simulate"
  - "on"
  - "cluster"
---

# simulated maintenance events

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

You can simulate maintenance events on a cluster to test how your application behaves during maintenance.

## Extended Definition

You can simulate maintenance events on a cluster to test how your application behaves during maintenance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- [https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations](https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations)
- [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)

## Supporting Pages

### "About maintenance \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Upcoming maintenance notifications To ensure you stay informed about maintenance events on your cluster, you can set up email notifications regarding upcoming maintenance at least one week before it's scheduled.
- As part of rescheduling maintenance , choose one of the following options: Update now : instead of waiting for the scheduled maintenance window, you can apply the updates to your cluster immediately.
- If the current day and time works for your cluster and you expect a high load on your cluster in the future, then you can run the maintenance update immediately.
- If there are issues with the update, then you can defer maintenance on your production clusters until you resolve the issues.

### "About cross-region replication \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Settings that a secondary cluster copies from the primary cluster When you create a secondary cluster, this cluster copies the following settings from the primary cluster: Shard count IAM authentication mode In-transit encryption mode Cluster configurations Redis version Node type Persistence mode Override default settings When you create a secondary cluster, you can use the following settings to override the default settings: Zone distribution configuration Replica count Maintenance windows Deletion protection Automated backups Update cluster settings When you update the settings for your cluster in Memorystore for Redis Cluster, you can change some settings only on the primary cluster.
- Shard count Cluster configurations Persistence mode Redis version Node type Configure local settings You configure the following settings locally: Deletion protection Replica count Maintenance windows Cluster endpoints Automated backups Best practices for switching primary and secondary clusters When you perform a switchover , we recommend that you follow the instructions in this section.
- You can perform a switchover for the following reasons: Test your disaster recovery setup Switch over during an actual disaster recovery scenario Perform a migration of your workload After you complete the switchover, Memorystore for Redis Cluster reverses the direction of replication.
- Benefits Benefits of cross-region replication on Memorystore for Redis Cluster include the following: Disaster recovery : If the primary cluster's region becomes unavailable, then you can detach or switch over to a secondary cluster in another region to serve read and write requests.

### "Supported instance configurations \_|\_ Memorystore for Redis Cluster \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations](https://docs.cloud.google.com/memorystore/docs/cluster/supported-instance-configurations)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Modifiable configuration parameters You can modify the following parameters when creating or updating a Memorystore for Redis Cluster instance.
- E Keyevent events, published with keyevent@<db> prefix. g Generic commands (non-type specific) like DEL, EXPIRE, or RENAME $ String commands l List commands s Set commands h Hash commands z Sorted set commands x Expired events (events generated every time a key expires) e Evicted events (events generated when a key is evicted for maxmemory) A Alias for g$lshzxe, so that the "AKE" string means all the events. slowlog-log-slower-than Lets you configure the slow log.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Supported instance configurations Stay organized with collections Save and categorize content based on your preferences.
- You can also use one of the following maxmemory policies: noeviction : Returns an error when the instance reaches maxmemory.

### "Cluster and node specification \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Your discovery endpoint has the following behavior: Your cluster's discovery endpoint remains unchanged throughout the lifecycle of the cluster instance, even during maintenance, or by any other action you take such as scaling in or out or changing replica counts.
- Ideally, you should use a Redis cluster client that can handle these changes automatically through topology refreshes and redirections.
- The redis-standard-small node type lets you provision small clusters, and grow your cluster by smaller increments at potentially lower costs than other node types. redis-standard-small also offers the advantage of distributing your keyspace across more nodes with a higher total vCPU count.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Cluster and node specification Stay organized with collections Save and categorize content based on your preferences.

