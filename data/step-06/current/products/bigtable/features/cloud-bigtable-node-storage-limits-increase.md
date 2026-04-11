---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.377Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable node storage limits increase"
feature_slug: "cloud-bigtable-node-storage-limits-increase"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "doubles"
  - "limits"
  - "increase"
  - "limit"
  - "storage"
  - "bigtable"
  - "node"
  - "the"
---

# Cloud Bigtable node storage limits increase

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Doubles the storage limit supported by each Cloud Bigtable node without increasing per-node cost.

## Extended Definition

Doubles the storage limit supported by each Cloud Bigtable node without increasing per-node cost.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- October 08, 2018 Change Cloud Bigtable now enforces the limits on the amount of storage per node : If a cluster in an instance exceeds the storage limits, all writes to the instance will fail until you add nodes to the cluster .
- If you try to remove nodes from a cluster, and the change would cause the cluster to exceed the storage limits, Cloud Bigtable will deny the request.
- This generally available (GA) feature automatically rate-limits traffic to avoid cluster overload and works with Bigtable autoscaling to ensure the optimal number of nodes is available to handle the batch write.
- Also, if you try to remove nodes from your cluster, and the reduced number of nodes would cause the cluster to exceed the storage limit, Cloud Bigtable will deny the request.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- Data types limits The following table compares the limits for data types used by Aerospike and Bigtable: Aerospike Bigtable namespace : The maximum number of namespaces for the Enterprise Edition is 32. table : An instance can have up to 1,000 tables.
- Bigtable Bigtable nodes are separate from the storage layer, which means nodes don't affect data durability.
- Aerospike Contrary to Bigtable, Aerospike's storage is located on the nodes which serve it.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram shows how Bigtable physically separates the processing nodes from the storage layer: Figure 1 : Clients communicate through a routing layer to processing nodes, and then these nodes communicate with the storage layer.
- If Bigtable identifies that range-assignment rebalancing is required for a dataset, the data ranges for a processing node are straightforward to change because the storage layer is separated from the processing layer.
- Internal maintenance The Bigtable service seamlessly handles common Cassandra internal maintenance tasks such as OS patching, node recovery, node repair, storage compaction monitoring, and SSL certificate rotation.
- The Rebalancing image illustrates the state of the Bigtable cluster after the leftmost processing node receives an increased number of requests for the A dataset.

