---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.370Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable autoscaling"
feature_slug: "cloud-bigtable-autoscaling"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "makes"
  - "autoscaling"
  - "allowing"
  - "clusters"
  - "generally"
  - "available"
  - "bigtable"
  - "for"
---

# Cloud Bigtable autoscaling

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Makes autoscaling generally available for Cloud Bigtable, allowing clusters to automatically add or remove nodes based on usage and exposing related operational metrics.

## Extended Definition

Makes autoscaling generally available for Cloud Bigtable, allowing clusters to automatically add or remove nodes based on usage and exposing related operational metrics.

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
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- December 20, 2021 Feature System Event audit logs for Cloud Bigtable autoscaling are now generally available ( GA ).
- December 09, 2021 Feature Autoscaling for Cloud Bigtable is now generally available ( GA ).
- Java Changes for google-cloud-bigtable 2.25.0 (2023-07-14) Features Change stream retention to create and update table ( #1823 ) ( 05fca58 ) Bug Fixes Fix batch mutation limit ( #1808 ) ( ed24d4f ) Update default sample row key attempt timeout to 5 min ( #1827 ) ( 2f363ef ) Documentation Fix formatting for reversed order field example ( #1836 ) ( 10a0426 ) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( #1826 ) ( 159fe38 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.22.0 ( #1838 ) ( fba2c49 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1833 ) ( cb160af ) Python Changes for google-cloud-bigtable 2.20.0 (2023-07-17) Features rel="noreferrer noopener"}) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( d5720f8 ) Bug Fixes Add async context manager return types ( #828 ) ( 475a160 ) Documentation Fix formatting for reversed order field example ( #831 ) ( fddd0ba ) July 18, 2023 Feature Cloud Bigtable change streams are now generally available (GA) .
- May 05, 2025 Libraries Java 2.58.0 (2025-04-28) Features Add deletion protection support for LVs ( 43c97a3 ) bigtable: Add integration tests for Materialized/Logical Views ( #2518 ) ( 4d3a7e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 43c97a3 ) Fix retry info algorithm setting ( #2562 ) ( c424ccb ) Use universe domain when creating the monitoring client ( #2570 ) ( 3b51e12 ) Java 2.58.1 (2025-04-28) Bug Fixes Close otel instance ( #2571 ) ( 422fe26 ) Java 2.58.0 (2025-04-28) Features Add deletion protection support for LVs ( 43c97a3 ) bigtable: Add integration tests for Materialized/Logical Views ( #2518 ) ( 4d3a7e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 43c97a3 ) Fix retry info algorithm setting ( #2562 ) ( c424ccb ) Use universe domain when creating the monitoring client ( #2570 ) ( 3b51e12 ) April 29, 2025 Feature Similarity vector search in Bigtable by finding the K-nearest neighbors is generally available ( GA ).

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- Data types limits The following table compares the limits for data types used by Aerospike and Bigtable: Aerospike Bigtable namespace : The maximum number of namespaces for the Enterprise Edition is 32. table : An instance can have up to 1,000 tables.
- Bigtable is optimized for smaller rows, that is why cell organization and access to data should be considered during schema design to avoid spreading data across many cells if unnecessary.
- Performance considerations Because Aerospike and Bigtable treat read and write operations differently, they have performance differences which are important to consider.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- The following diagram illustrates the physical data layout, compute processing nodes, and routing layer for Bigtable: Figure 5 : Architecture for data replication includes a frontend, Bigtable clusters, and Colossus.
- The replication factor is configured independently for each data center. replication : the process of replicating the data stored in Bigtable to all clusters in the instance.

