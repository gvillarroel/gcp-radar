---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.983Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable integration with Database Center"
feature_slug: "bigtable-integration-with-database-center"
latest_feature_date: "2025-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/overview"
keywords:
  - "recommendations"
  - "database"
  - "center"
  - "health"
  - "which"
  - "integration"
  - "provides"
---

# Bigtable integration with Database Center

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable is supported in Database Center, which provides health recommendations for performance, availability, and data protection in Recommendation Hub.

## Extended Definition

Bigtable is supported in Database Center, which provides health recommendations for performance, availability, and data protection in Recommendation Hub.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- SSD The SSD node's capacity of 5 TB, which is preferred for most workloads, provides higher storage density in comparison with the recommended configuration for Cassandra machines, which have a practical maximum storage density of less than 2 TB for each node.
- The replication factor, which you configure for every keyspace, determines the number of data replicas that are stored in each data center in the cluster.
- To help you compare Bigtable and Cassandra, this document does the following: Compares terminology, which can differ between the two databases.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A Bigtable table is sharded into blocks of contiguous rows, called tablets, which are stored on Colossus, a distributed file system that provides high durability.
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- Backup management can also be handled through the Aerospike Backup Service or Aerospike Kubernetes Operator, both of which use asbackup and asrestore internally, and provide scheduling and multi-process coordination.
- Backup and restore Aerospike provides external backup and restore tools called asbackup and asrestore that create logical backups client side and are analogous to performing a scan.

### Bigtable overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bigtable architecture The following diagram shows a simplified version of Bigtable's overall architecture: As the diagram illustrates, all client requests go through a frontend server before they are sent to a Bigtable node. (In the original Bigtable paper , these nodes are called "tablet servers.") The nodes are organized into a Bigtable cluster, which belongs to a Bigtable instance, a container for the cluster.
- Data durability When you use Bigtable, your data is stored on Colossus, a Google-developed, highly durable file system, using storage devices in Google Cloud's data centers.
- At the same time, it's useful to group related rows so they are next to one another, which makes it much more efficient to read several rows at the same time.
- Home Documentation Databases Bigtable Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

