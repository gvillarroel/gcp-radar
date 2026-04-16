---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.022Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable HBase replication library"
feature_slug: "cloud-bigtable-hbase-replication-library"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/hbase-replication"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/change-streams-overview"
keywords:
  - "migration"
  - "without"
  - "replication"
  - "hbase"
  - "introduces"
  - "enabling"
  - "library"
---

# Cloud Bigtable HBase replication library

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Introduces the Cloud Bigtable HBase replication library, enabling replication of data from HBase to Cloud Bigtable for migration without pausing writes or taking applications offline.

## Extended Definition

Introduces the Cloud Bigtable HBase replication library, enabling replication of data from HBase to Cloud Bigtable for migration without pausing writes or taking applications offline.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/hbase-replication](https://docs.cloud.google.com/bigtable/docs/hbase-replication)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/change-streams-overview](https://docs.cloud.google.com/bigtable/docs/change-streams-overview)

## Supporting Pages

### Replicate from HBase to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/hbase-replication](https://docs.cloud.google.com/bigtable/docs/hbase-replication)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use cases Online migration to Bigtable - You can use the Bigtable HBase replication library, in conjunction with an offline migration of your existing HBase data, to migrate from HBase to Bigtable with almost no downtime.
- The replication library lets you asynchronously replicate data from an HBase cluster to a Bigtable instance using the HBase replication service, so you can perform an online migration from HBase to Bigtable.
- Migrate to Bigtable The Bigtable HBase replication library lets you migrate to Bigtable without pausing your application.
- Download the JAR To get the replication library, run the following in the HBase shell. wget BIGTABLE HBASE REPLICATION URL Replace BIGTABLE HBASE REPLICATION URL with the URL of the latest JAR with dependencies available in the replication library's Maven repository.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Applications that are written for Hadoop and rely on the open source Apache HBase library for Java can connect without significant change to Bigtable.
- In addition to gRPC and client libraries for various programming languages, Bigtable maintains compatibility with the open source Apache HBase Java client library , an alternative open source database engine implementation of the Bigtable paper.
- This gives your applications the flexibility to enforce structure where it matters while remaining agile, which lets you evolve your data model without extensive migrations or downtime.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.

### Change streams overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/change-streams-overview](https://docs.cloud.google.com/bigtable/docs/change-streams-overview)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- We recommend that you use one of the following options instead of calling the API without using a client library or connector: Dataflow templates Bigtable Beam connector Java client library All the options let you avoid the need to track and handle partition changes due to splits and merges.
- Dataflow templates You can use one of the following Dataflow templates provided by Google: Bigtable change streams to BigQuery Bigtable change streams to Pub/Sub Bigtable Beam connector You can use the Bigtable Beam connector to build a pipeline: Bigtable Beam connector If you don't want to build your own pipeline, you can use the code samples from the Bigtable tutorial or quickstart as a starting point for your code: Create a change stream-enabled table and capture changes Process a Bigtable change stream Java client library Cloud Bigtable client for Java Partitions To maintain a high read throughput that matches a high write or change rate, Bigtable divides a change stream into multiple partitions that can be used to read the change stream in parallel.
- Row key - the identifier for the changed row Change type - either user-initiated or garbage collection ID of the cluster that received the change Commit timestamp - server-side time when the change was committed to the table Tie breaker - a value that lets the application that is reading the stream use Bigtable's built-in conflict resolution policy Token - used by the consuming application to resume the stream if it's interrupted Estimated low watermark - the estimated time since the record's partition caught up with replication across all clusters.
- Many factors can cause one or more partition-level watermarks to stall for some amount of time, including the following: Overloading a cluster with traffic that causes replication to fall behind for one or more partitions Network delays Cluster unavailability The Bigtable Beam connector handles this by setting the output timestamp to zero for all data.

