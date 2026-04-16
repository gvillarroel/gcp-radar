---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.020Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable hot tablets observability"
feature_slug: "cloud-bigtable-hot-tablets-observability"
latest_feature_date: "2022-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/overview"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "tablets"
  - "visibility"
  - "observability"
  - "provides"
  - "into"
---

# Cloud Bigtable hot tablets observability

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable now provides visibility into hot tablets to help identify and monitor heavily loaded tablets in a cluster.

## Extended Definition

Cloud Bigtable now provides visibility into hot tablets to help identify and monitor heavily loaded tablets in a cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- A Bigtable table is sharded into blocks of contiguous rows, called tablets, which are stored on Colossus, a distributed file system that provides high durability.
- This happens because the split into tablets and their distribution between nodes might not be optimal and because the caches are cold.
- Advanced types might be increasingly supported in the future, but at the time of writing this document there is no way to put such types into Bigtable, everything is serialized client side.
- Backup and restore Aerospike provides external backup and restore tools called asbackup and asrestore that create logical backups client side and are analogous to performing a scan.

### Bigtable overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- A Bigtable table is sharded into blocks of contiguous rows, called tablets , to help balance the workload of queries. (Tablets are similar to HBase regions.) Tablets are stored on Colossus, a Google-developed file system, in SSTable format.
- Bigtable architecture The following diagram shows a simplified version of Bigtable's overall architecture: As the diagram illustrates, all client requests go through a frontend server before they are sent to a Bigtable node. (In the original Bigtable paper , these nodes are called "tablet servers.") The nodes are organized into a Bigtable cluster, which belongs to a Bigtable instance, a container for the cluster.
- For other locations, the row would start with a different identifier; with many locations collecting data at the same rate, writes would still be spread evenly across tablets.
- This process splits busier or larger tablets in half and merges less-accessed/smaller tablets together, redistributing them between nodes as needed.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- SSD The SSD node's capacity of 5 TB, which is preferred for most workloads, provides higher storage density in comparison with the recommended configuration for Cassandra machines, which have a practical maximum storage density of less than 2 TB for each node.
- Tablets are not stored on nodes in Bigtable, but are stored in a series of SSTables on Colossus. replication factor : the number of replicas of a vnode that are maintained across all nodes in the data center.
- This architecture provides consistent reads and writes within a cluster, scales up and down without any storage redistribution cost, and can rebalance workloads without modifying the cluster or schema.
- Cassandra provides fault tolerance through availability levels that are correlated with the tunable consistency level, allowing a cluster to serve clients while one or more nodes are impaired.

