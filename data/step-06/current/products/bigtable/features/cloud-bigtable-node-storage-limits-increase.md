---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.026Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable node storage limits increase"
feature_slug: "cloud-bigtable-node-storage-limits-increase"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/schema-design"
keywords:
  - "doubles"
  - "limits"
  - "each"
  - "increase"
  - "limit"
  - "storage"
  - "node"
---

# Cloud Bigtable node storage limits increase

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Doubles the storage limit supported by each Cloud Bigtable node without increasing per-node cost.

## Extended Definition

Doubles the storage limit supported by each Cloud Bigtable node without increasing per-node cost.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design)

## Supporting Pages

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The capacity limits for nodes are 5 TB per node for SSD storage and 16 TB per node for HDD storage.
- See Storage per node for more details on storage limits.
- You can also view these metrics using Cloud Monitoring . bigtable.googleapis.com/cluster/autoscaling/min node count bigtable.googleapis.com/cluster/autoscaling/max node count bigtable.googleapis.com/cluster/autoscaling/recommended node count for cpu bigtable.googleapis.com/cluster/autoscaling/recommended node count for storage Logging Bigtable emits a system event audit log each time it scales a cluster.
- Bigtable autoscaling determines the number of nodes required, based on the following dimensions: CPU utilization target Storage utilization target Minimum number of nodes Maximum number of nodes Each scaling dimension generates a recommended node count, and Bigtable automatically uses the highest one.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- Data types limits The following table compares the limits for data types used by Aerospike and Bigtable: Aerospike Bigtable namespace : The maximum number of namespaces for the Enterprise Edition is 32. table : An instance can have up to 1,000 tables.
- No directly corresponding item. column family : The number of column families is unlimited, however more than 100 can cause performance degradation. bin : The number of bins is unlimited, however, each bin can hold not more than 1 MB of data.
- For more information on Bigtable and Aerospike limits, see Quotas and Limits and Aerospike system limits and thresholds respectively.

### Schema design best practices \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bigtable has a limit of 1,000 tables per instance, but we recommend that you avoid creating a large number of tables for the following reasons: Sending requests to many different tables can increase backend connection overhead, resulting in increased tail latency.
- Storing data in a protobuf format To reduce storage costs and improve read and write efficiency, you can group related data into a protocol buffer (protobuf) message and store it in a single column instead of storing each field in its own column.
- Long row keys take up additional memory and storage and increase the time it takes to get responses from the Bigtable server.
- After an instance reaches this limit, Bigtable prevents you from creating more tables in the instance.

