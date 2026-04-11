---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.371Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable CMEK support for multi-region replicated instances"
feature_slug: "cloud-bigtable-cmek-support-for-multi-region-replicated-instances"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "replicated"
  - "multi"
  - "enables"
  - "cmek"
  - "instances"
  - "bigtable"
  - "region"
  - "for"
---

# Cloud Bigtable CMEK support for multi-region replicated instances

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Enables customer-managed encryption keys (CMEK) for Cloud Bigtable instances replicated across multiple regions.

## Extended Definition

Enables customer-managed encryption keys (CMEK) for Cloud Bigtable instances replicated across multiple regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- Because a write to Colossus is replicated multiple times, the durability is ensured even if nodal hardware failure occurs before the data is persisted to an SSTable for the row range.

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CMEK-protected Bigtable resources (instances, clusters, tables, or backups) tied to a key that has been made inaccessible as the result of a user-triggered action (such as disabling or destroying a key, or by revoking the Encrypter/Decrypter role) for more than 30 consecutive days are automatically deleted .
- Comparable performance: Bigtable CMEK-protected instances offer comparable performance to Bigtable instances that use Google default encryption.
- Cross-region protection: You can enable CMEK in instances that have clusters in any region where Bigtable is available.
- There are no additional Bigtable costs for using CMEK-enabled instances.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use customer managed encryption keys ( CMEK ) in Cloud Bigtable instances that are replicated across multiple regions.
- Node.js Changes for @google-cloud/bigtable 4.0.4 (2022-09-14) Bug Fixes Use grpc-gcp v1.0.0 ( #1156 ) ( 6196424 ) 4.0.3 (2022-09-09) Bug Fixes Update dependency uuid to v9 ( #1152 ) ( dea0425 ) Wait for instances to get created in all samples ( #1149 ) ( c9dd9c6 ) Java Changes for google-cloud-bigtable 2.12.0 (2022-09-15) Features generated: Publish CBT deletion protection field in Table, UpdateTableRequest, and UpdateTable API ( f1f3f05 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.3 ( #1386 ) ( f460373 ) Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.3 ( #1387 ) ( e339cb1 ) Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.4 ( #1395 ) ( a2db183 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.2 ( #1384 ) ( ee3b256 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.3 ( #1393 ) ( df6c6c7 ) September 13, 2022 Feature Cloud Bigtable is available in the me-west1 (Tel Aviv) region.
- June 09, 2025 Libraries Java 2.60.0 (2025-06-06) Features Improve error message on malformed struct ( #2592 ) ( 7f5fdf0 ) Run ExecuteQuery conformance tests ( #2557 ) ( 0bbc083 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 65782aa ) Ensure that multiple instances of a client in the same process dont clobber each other ( #2590 ) ( 8d3dca4 ) Dependencies Update shared dependencies ( #2587 ) ( 8ec0339 ) May 29, 2025 Change The Bigtable Spark connector supports Scala versions 2.12 and 2.13 in all connector versions and has been updated as follows: Connector versions 0.5.0 and later support dynamic columns .
- For instances created before June 29, 2016, the instance ID is identical to the cluster ID. (There is one exception to this rule: If you had multiple clusters with the same ID before June 29, 2016, your instance IDs will end with -1 , -2 , and so on, so that each instance has a unique ID.) Feature V2 of the Cloud Bigtable RPC API is now available.

