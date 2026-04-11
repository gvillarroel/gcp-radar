---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.348Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable write-time aggregates"
feature_slug: "bigtable-write-time-aggregates"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
keywords:
  - "distributed"
  - "aggregates"
  - "building"
  - "time"
  - "write"
  - "supports"
  - "bigtable"
  - "now"
---

# Bigtable write-time aggregates

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports building distributed counters using write-time aggregates.

## Extended Definition

Bigtable now supports building distributed counters using write-time aggregates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- In Bigtable, because each row key is only assigned to a single node at any point in time, a response from the node is all that's needed to confirm that a write is successful.
- Bigtable supports fully consistent, single-row writes within a cluster.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Bigtable handles keyspace concerns transparently. map : a Cassandra collection type that holds key-value pairs. column family : a user-specified namespace that groups column qualifiers for more efficient reads and writes.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now build distributed counters with Bigtable with write-time aggregates .
- Feature Bigtable aggregates let you build distributed counters and aggregate your Bigtable data at write time using min, max, sum, or HLL.
- December 22, 2025 Libraries Python 2.35.0 (2025-12-16) Features add basic interceptor to client (#1206) ( 6561cfac ) Add encodings for STRUCT and the Timestamp type ( 72dfdc44 ) add PeerInfo proto in Bigtable API ( 72dfdc44 ) Add Type API updates needed to support structured keys in materialized views ( 72dfdc44 ) support mTLS certificates when available (#1249) ( ca20219c ) Bug Fixes re-export AddToCell for consistency (#1241) ( 2a5baf11 ) async client uses fixed grace period (#1236) ( 544db1cd ) Deprecate credentials file argument ( 72dfdc44 ) Add ReadRows/SampleRowKeys bindings for materialized views ( 72dfdc44 ) retry cancelled errors (#1235) ( e3fd5d86 ) Java 2.71.0-rc1 (2025-12-19) Features update with latest from main ( #2740 ) ( 90e1a02 ) feat: Upgrade protobuf gen code to 4.33 ( #2741 ) ( 2b1d201 ) Dependencies update sdk-platform-java-config to 3.55.0-rc1 ( #2738 ) ( 136f164 ) Go 1.41.0 (2025-12-15) Features add PeerInfo proto in Bigtable API (PiperOrigin-RevId: 829585900) ( 185951b3 ) precompute featureflags in client and reuse (#13297) ( 3b3253ac ) Add experimental Bigtable connection pool with custom load balancing strategy. (#12882) ( 7aa96127 ) Enable ALTS hard bound token in Bigtable w/ direct access (#13153) ( 90239341 ) Enable routing cookie and attempt headers for enhanced retries (#12964) ( 96cfd47a ) Bug Fixes fix project id sent in otel (#13286) ( 4865868c ) screaming uppercase metric status (#13484) ( b35ee8fd ) Performance Improvements parallelize the exportTimeSeries function (#13004) ( bafd691d ) December 15, 2025 Libraries Java 2.70.1 (2025-12-12) Dependencies Update shared dependencies ( #2734 ) ( 2823705 ) December 12, 2025 Feature In the Google Cloud console, you can import data into Bigtable using the Dataflow job builder , a web interface for building and running Dataflow pipelines.
- Java Changes for google-cloud-bigtable 2.17.0 (2022-12-07) Features Add a query paginator ( #1530 ) ( 5c8e1f6 ) Add test proxy to java-bigtable client ( #1498 ) ( 132b4e4 ) Implement cross-project table restore ( #1536 ) ( 335977c ) Next release from main branch is 2.17.0 ( #1514 ) ( 4fc6a93 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom … ( #1531 ) ( ee98338 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.0 ( #1539 ) ( 3244cef ) Update dependency kr.motd.maven:os-maven-plugin to v1.7.1 ( #1518 ) ( 8309681 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.19 ( #1537 ) ( 7f7c478 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.19 ( #1538 ) ( 9d3df57 ) Python Changes for google-cloud-bigtable 2.14.1 (2022-12-06) Bug Fixes Deps: Require google-api-core >=1.34.0, >=2.11.0 ( e5875cb ) Drop usage of pkg resources ( e5875cb ) Fix timeout default values ( e5875cb ) Documentation Samples: Snippetgen should call await on the operation coroutine before calling result ( e5875cb ) December 08, 2022 Feature Cloud Bigtable now lets you restore from a backup to a different project.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Bigtable provides fully consistent single-row writes within a cluster and supports single-row transactions through mutate-row requests.
- Advanced types might be increasingly supported in the future, but at the time of writing this document there is no way to put such types into Bigtable, everything is serialized client side.
- Performance considerations Because Aerospike and Bigtable treat read and write operations differently, they have performance differences which are important to consider.
- A Bigtable table is sharded into blocks of contiguous rows, called tablets, which are stored on Colossus, a distributed file system that provides high durability.

