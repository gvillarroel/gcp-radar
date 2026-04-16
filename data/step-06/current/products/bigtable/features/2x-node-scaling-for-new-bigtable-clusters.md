---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.986Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "2x node scaling for new Bigtable clusters"
feature_slug: "2x-node-scaling-for-new-bigtable-clusters"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/dynamodb-users"
keywords:
  - "scaling"
  - "when"
  - "clusters"
  - "supports"
  - "node"
---

# 2x node scaling for new Bigtable clusters

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports 2x node scaling when creating a cluster, combining two standard nodes into one logical unit and scaling clusters only in two-node increments.

## Extended Definition

Bigtable now supports 2x node scaling when creating a cluster, combining two standard nodes into one logical unit and scaling clusters only in two-node increments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)

## Supporting Pages

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you enable infrequent access as part of tiered storage, autoscaling additionally makes sure that the combined SSD and the infrequent access storage doesn't exceed the limit of 32 TB per node.
- Autoscaling alone might not work well for the following workload types, because even though Bigtable quickly adds nodes when traffic increases, it can take time to balance the additional nodes.
- The benefits of autoscaling include the following: Costs - Autoscaling can help you optimize costs because Bigtable reduces the number of nodes in your cluster whenever possible.
- Autoscaling parameters When you create or edit a cluster and choose autoscaling, you define the values for CPU utilization target, min nodes, and max nodes.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- The following diagram illustrates the physical data layout, compute processing nodes, and routing layer for Bigtable: Figure 5 : Architecture for data replication includes a frontend, Bigtable clusters, and Colossus.

### Migrate from DynamoDB to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tablets are not stored on nodes in Bigtable but rather on Google's distributed file system, which allows speedy redistribution of data when scaling, and which provides additional durability by maintaining multiple copies.
- Bigtable is not a serverless product; you must create an instance with one or more clusters, whose capacity is determined by the number of nodes that they have.
- Bigtable supports replicated clusters in as many zones that are available in up to 8 Google Cloud regions where Bigtable is available.
- Workload isolation when you need to implement a batch workload on one cluster and rely on replication to serving clusters.

