---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.335Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "2x node scaling for new Bigtable clusters"
feature_slug: "2x-node-scaling-for-new-bigtable-clusters"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "scaling"
  - "2x"
  - "new"
  - "clusters"
  - "bigtable"
  - "node"
  - "for"
  - "now"
---

# 2x node scaling for new Bigtable clusters

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports 2x node scaling when creating a cluster, combining two standard nodes into one logical unit and scaling clusters only in two-node increments.

## Extended Definition

Bigtable now supports 2x node scaling when creating a cluster, combining two standard nodes into one logical unit and scaling clusters only in two-node increments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can also view these metrics using Cloud Monitoring . bigtable.googleapis.com/cluster/autoscaling/min node count bigtable.googleapis.com/cluster/autoscaling/max node count bigtable.googleapis.com/cluster/autoscaling/recommended node count for cpu bigtable.googleapis.com/cluster/autoscaling/recommended node count for storage Logging Bigtable emits a system event audit log each time it scales a cluster.
- Autoscaling alone might not work well for the following workload types, because even though Bigtable quickly adds nodes when traffic increases, it can take time to balance the additional nodes.
- Bigtable continues to attempt to add nodes and creates an audit log entry for each failed attempt until it successfully scales the cluster to the new minimum number of nodes.
- Combined usage of SSD and infrequent access The maximum number of terabytes per node that you can store in SSD and infrequent access clusters before Bigtable scales up.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- The following diagram illustrates the physical data layout, compute processing nodes, and routing layer for Bigtable: Figure 5 : Architecture for data replication includes a frontend, Bigtable clusters, and Colossus.
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- If Bigtable identifies that range-assignment rebalancing is required for a dataset, the data ranges for a processing node are straightforward to change because the storage layer is separated from the processing layer.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-bigtable 2.51.0 (2024-12-17) Features Introduce java.time ( #2415 ) ( bb96c3e ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.51.0 ( a5444a5 ) Move resource detection to the first export to avoid slow start ( #2450 ) ( cec010a ) Dependencies Update sdk-platform-java dependencies ( #2448 ) ( 825e717 ) December 18, 2024 Feature You can now enable 2x node scaling when you create a new Bigtable cluster.
- January 27, 2025 Libraries Go 1.35.0 (2025-01-22) Features bigtable: Hot backups ( #11215 ) ( 238ac1c ) Bug Fixes bigtable: Allow nil condition in conditional mutation ( #11457 ) ( d83bc05 ) bigtable: Do not retry conditional mutate ( #11437 ) ( ce8c9b1 ) bigtable: Mutate groups even after first error ( #11434 ) ( 6ffe32b ) bigtable: Retry correct mutations ( #11388 ) ( ca2c4e3 ) bigtable: Track number of readrows to set rowsLimit in subsequent requests ( #10213 ) ( abb615e ) January 20, 2025 Libraries Python 2.28.1 (2025-01-17) Bug Fixes Allow empty headers for btql routing ( #1072 ) ( e7ecfeb ) January 13, 2025 Libraries Python 2.28.0 (2025-01-08) Features Add generated sync client ( #1017 ) ( f974823 ) Java 2.51.1 (2025-01-10) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.50.0 ( #2464 ) ( d63dd43 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #2461 ) ( ed24b4c ) Update googleapis/sdk-platform-java action to v2.51.1 ( #2460 ) ( 35c979f ) Java 2.51.1 (2025-01-10) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.50.0 ( #2464 ) ( d63dd43 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #2461 ) ( ed24b4c ) Update googleapis/sdk-platform-java action to v2.51.1 ( #2460 ) ( 35c979f ) January 06, 2025 Libraries Go 1.34.0 (2025-01-02) Features bigtable/admin: Add support for Cloud Bigtable Node Scaling Factor for CBT Clusters ( 7250d71 ) bigtable: Add feature flags proto for Direct Access ( 2c83297 ) bigtable: Async refresh dry run in parallel with sync refresh ( #11066 ) ( 169e309 ) Bug Fixes bigtable: Correct the 'method' label value ( #11350 ) ( 6aa27dc ) bigtable: Resolve discrepancy between server and client qps ( #11224 ) ( c500179 ) bigtable: Update golang.org/x/net to v0.33.0 ( e9b0b69 ) bigtable: Update google.golang.org/api to v0.203.0 ( 8bb87d5 ) bigtable: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files.
- Java Changes for google-cloud-bigtable 2.47.0 (2024-11-13) Features Add an experimental feature to skip waiting for trailers for unary ops ( #2404 ) ( cf58f26 ) Add internal "deadline remaining" client side metric #2341 ( #2370 ) ( 75d4105 ) Bug Fixes Simplify remaining deadline metric impl ( #2410 ) ( 9796d57 ) Python Changes for google-cloud-bigtable 2.27.0 (2024-11-12) Features Add support for Cloud Bigtable Node Scaling Factor for CBT Clusters ( #1023 ) ( 0809c6a ) Surface retry param to Table.read row api ( #982 ) ( a8286d2 ) Bug Fixes Registering duplicate instance ( #1033 ) ( 2bca8fb ) November 04, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Java Changes for google-cloud-bigtable 2.45.0 (2024-10-03) Features Add support for Cloud Bigtable Node Scaling Factor for CBT Clusters ( caf879c ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.46.1 ( caf879c ) Support override monitoring endpoint ( #2364 ) ( a341eb8 ) Dependencies Downgrade grpc to 1.67.1 ( #2366 ) ( 1baecb3 ) Update dependency com.google.cloud:gapic-libraries-bom to v1.45.0 ( #2363 ) ( 9d24c45 ) September 30, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .

