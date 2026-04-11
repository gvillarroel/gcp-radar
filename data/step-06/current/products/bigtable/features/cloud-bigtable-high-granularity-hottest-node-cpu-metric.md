---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.364Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable high-granularity hottest node CPU metric"
feature_slug: "cloud-bigtable-high-granularity-hottest-node-cpu-metric"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "hottest"
  - "high"
  - "granularity"
  - "introduces"
  - "metric"
  - "cpu"
  - "bigtable"
  - "node"
---

# Cloud Bigtable high-granularity hottest node CPU metric

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Introduces a higher-frequency, high-granularity hottest-node CPU utilization metric for Cloud Bigtable monitoring.

## Extended Definition

Introduces a higher-frequency, high-granularity hottest-node CPU utilization metric for Cloud Bigtable monitoring.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/bigtable 4.1.0 (2022-09-26) Features Publish the RequestStats proto ( #1177 ) ( 89dfc83 ) 4.0.5 (2022-09-23) Bug Fixes Test is less restrictive to allow changes ( #1160 ) ( 7d05b96 ) Java Changes for google-cloud-bigtable 2.13.0 (2022-09-27) Features Add gRPC RLS dependency ( #1248 ) ( e829b92 ) Bug Fixes Add a UUID in the task value ( #1430 ) ( 3bfc7bc ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.5 ( #1406 ) ( d906729 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.14 ( #1411 ) ( ef7d741 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.14 ( #1412 ) ( dcae319 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.9.1 ( #1409 ) ( c1e195d ) September 29, 2022 Feature The Cloud Bigtable observability metric high-granularity CPU utilization of hottest node is now generally available (GA) .
- Because of more frequent sampling, this metric is more accurate than CPU utilization of hottest node .
- Node.js Changes for @google-cloud/bigtable 5.0.0 (2023-08-10) ⚠ BREAKING CHANGES Upgrade to Node 14 ( #1311 ) Miscellaneous Chores Upgrade to Node 14 ( #1311 ) ( 4330cb2 ) Java Changes for google-cloud-bigtable 2.26.0 (2023-08-09) Features Add last scanned row key feature ( #1856 ) ( ef30dde ) Enable last scanned row responses feature flag ( #1862 ) ( c2288c9 ) Setup 2.25.x lts branch ( #1866 ) ( 220cf4b ) Bug Fixes Fix batcher metric labels ( #1829 ) ( 6245c12 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.24.0 ( #1878 ) ( 0de458d ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.14.0 ( #1873 ) ( bb83064 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.24 ( #1876 ) ( d397c33 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.24 ( #1877 ) ( 1a8be60 ) Python Changes for google-cloud-bigtable 2.21.0 (2023-08-02) Features Add last scanned row responses to FeatureFlags ( #845 ) ( 14a6739 ) Documentation Minor formatting ( #851 ) ( 5ebe231 ) July 31, 2023 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Java Changes for google-cloud-bigtable 2.10.0 (2022-07-26) Features Add response protos ( #1246 ) ( 52d59ce ) Add response params proto to clients ( #1303 ) ( 93edfe1 ) Add storage utilization gib per node for autoscaling ( #1317 ) ( 5282589 ) Use PingAndWarm request for channel priming ( #1179 ) ( 6629821 ) Bug Fixes Enable integration test for google-cloud-bigtable-stats ( #1311 ) ( 7c77879 ) Fix race condition in BuiltinMetricsTracer ( #1320 ) ( 644454a ) Ignore repackaged files to fix clirr ( #1300 ) ( 99b67ba ) Dependencies Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.13 ( #1306 ) ( ddae354 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.13 ( #1307 ) ( c0740fe ) July 11, 2022 Feature Cloud Bigtable is available in the us-south1 (Dallas) and europe-southwest1 (Madrid) regions.

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- You can also view these metrics using Cloud Monitoring . bigtable.googleapis.com/cluster/autoscaling/min node count bigtable.googleapis.com/cluster/autoscaling/max node count bigtable.googleapis.com/cluster/autoscaling/recommended node count for cpu bigtable.googleapis.com/cluster/autoscaling/recommended node count for storage Logging Bigtable emits a system event audit log each time it scales a cluster.
- Bigtable autoscaling determines the number of nodes required, based on the following dimensions: CPU utilization target Storage utilization target Minimum number of nodes Maximum number of nodes Each scaling dimension generates a recommended node count, and Bigtable automatically uses the highest one.
- Using the same formula, the following examples show the number of nodes you might need for some sample storage amounts: SSD storage per cluster Smallest maximum number of nodes 25 TB 10 35 TB 14 50 TB 20 After your cluster is up and running with autoscaling enabled, monitor the cluster and make sure that the value you choose for maximum number of nodes is at least as high as the recommended number of nodes for CPU target and the recommended number of nodes for storage target .
- For example, on an SSD cluster, if you set a storage utilization target of 2.5 TB (50%) per node, and your infrequent access usage is high enough to push the storage usage with tiered storage over the limit, Bigtable adds nodes.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Google recommends that you test the performance of Bigtable with representative data and queries to establish a metric for the per-node QPS that's achievable for your workload.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- With Bigtable, you can build applications with large, dynamic collections without the performance trade-offs required by Cassandra, for the following reasons: Bigtable stores collection elements as individual cells, so that operations on elements are highly granular.

