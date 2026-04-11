---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.392Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable multi-region replication"
feature_slug: "cloud-bigtable-multi-region-replication"
latest_feature_date: "2019-04-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "capability"
  - "this"
  - "replication"
  - "multi"
  - "supports"
  - "bigtable"
  - "region"
  - "and"
---

# Cloud Bigtable multi-region replication

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable supports multi-region replication and this capability is now generally available; Cloud Bigtable introduces multi-region replication in beta availability.

## Extended Definition

Cloud Bigtable supports multi-region replication and this capability is now generally available; Cloud Bigtable introduces multi-region replication in beta availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Geographic replication and consistency Bigtable and Cassandra handle geographic (also known as multi- region ) replication and consistency differently.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- Replication This section compares the replication process for Aerospike and Bigtable.
- To help you start working with Bigtable and Aerospike, this document does the following: Compares the terminology between Aerospike and Bigtable.
- This document helps software developers and database administrators migrate existing Aerospike applications with Bigtable as a database.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- June 09, 2025 Libraries Java 2.60.0 (2025-06-06) Features Improve error message on malformed struct ( #2592 ) ( 7f5fdf0 ) Run ExecuteQuery conformance tests ( #2557 ) ( 0bbc083 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 65782aa ) Ensure that multiple instances of a client in the same process dont clobber each other ( #2590 ) ( 8d3dca4 ) Dependencies Update shared dependencies ( #2587 ) ( 8ec0339 ) May 29, 2025 Change The Bigtable Spark connector supports Scala versions 2.12 and 2.13 in all connector versions and has been updated as follows: Connector versions 0.5.0 and later support dynamic columns .
- For instances created before June 29, 2016, the instance ID is identical to the cluster ID. (There is one exception to this rule: If you had multiple clusters with the same ID before June 29, 2016, your instance IDs will end with -1 , -2 , and so on, so that each instance has a unique ID.) Feature V2 of the Cloud Bigtable RPC API is now available.
- April 08, 2019 Feature Multi-region replication for Cloud Bigtable is now generally available.
- March 05, 2019 Feature Multi-region replication for Cloud Bigtable is now available in beta.

