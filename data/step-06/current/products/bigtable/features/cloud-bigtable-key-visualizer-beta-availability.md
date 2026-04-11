---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.398Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Key Visualizer beta availability"
feature_slug: "cloud-bigtable-key-visualizer-beta-availability"
latest_feature_date: "2018-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
keywords:
  - "visualizer"
  - "availability"
  - "key"
  - "available"
  - "bigtable"
  - "beta"
  - "became"
  - "for"
---

# Cloud Bigtable Key Visualizer beta availability

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Key Visualizer for Cloud Bigtable became available in beta for analyzing usage and troubleshooting performance.

## Extended Definition

Key Visualizer for Cloud Bigtable became available in beta for analyzing usage and troubleshooting performance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- July 10, 2018 Feature Key Visualizer for Cloud Bigtable is now available in beta.
- September 29, 2025 Libraries Go 1.40.1 (2025-09-26) Features bigtable: Add an e2e flow for direct access with instructions ( #12939 ) ( fdcdde8 ) Bug Fixes bigtable: Release bigtable as 1.40.1 ( #12961 ) ( 33e1474 ) bigtable: Use stable stats.NewMetricSet ( #12941 ) ( 2c713d7 ) 1.40.0 (2025-09-22) Features bigtable: Expose otel native grpc metrics in Bigtable ( #12827 ) ( e9d2efd ) Java 2.67.0 (2025-09-24) Features Idle channel eviction ( #2651 ) ( 70c05c9 ) Load balancing options for BigtableChannelPool ( #2667 ) ( 5adaa84 ) Bug Fixes Add missing break; to PROTO and ENUM value type check ( #2672 ) ( 337e432 ) Remove beta api annotation for query paginator ( #2660 ) ( f68a1fa ) Dependencies Update shared dependencies ( #2679 ) ( a5b8260 ) September 15, 2025 Libraries Java 2.66.0 (2025-09-10) Features Add support for Proto and Enum types ( #2662 ) ( da3065d ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #2668 ) ( 06ac93e ) September 01, 2025 Libraries Java 2.65.1 (2025-08-27) Dependencies Update shared dependencies ( #2664 ) ( 841318b ) Go 1.39.0 (2025-08-28) Features bigtable/admin: Add tags field to Instance proto (stable branch) ( a846564 ) bigtable/spanner: Allow disable gRPC DirectPath deps ( #12469 ) ( 2205d27 ) bigtable: Add client epoch for each call ( #12685 ) ( c9eac01 ) bigtable: Add Idempotency to Cloud Bigtable MutateRowRequest API ( 98ba6f0 ) bigtable: Add Idempotency to Cloud Bigtable MutateRowsRequest API ( ac4970b ) bigtable: Adding support to schema bundles ( #12516 ) ( 688eb13 ) bigtable: Create first response latencies instrument ( #12706 ) ( 6f34867 ) bigtable: Expose directaccess via a env variable ( #12684 ) ( 0306910 ) bigtable: Expose pinger in go client ( #12683 ) ( a330457 ) bigtable: First response latencies and connectivity error count metrics ( #10616 ) ( 3054593 ) bigtable: Publish Proto and Enum types to CBT data API ( 83f894e ) bigtable: Record client blocking latencies ( #12698 ) ( 5f03fb3 ) bigtable: Support universe domain ( #12567 ) ( fc59e39 ) bigtable: Update ListSchemaBundles to returns only names ( #12563 ) ( 83ea7c4 ) Bug Fixes bigtable: Add ReadRows/SampleRowKeys bindings for materialized views ( 7616e81 ) bigtable: Fix NoopMetricsProvider panic ( #12709 ) ( 8c6da0d ) bigtable: Ignore errors while creating monitoring client and disable metrics ( #12708 ) ( 2346cf1 ) bigtable: Update routing parameters.path template ( c574e28 ) Performance Improvements bigtable: Create attributes only when enabled ( #12647 ) ( aa31abc ) Documentation bigtable: Minor comment update for field idempotency in message .google.bigtable.v2.MutateRowRequest ( ac4970b ) bigtable: Sync generated comments from the API Protos ( ac4970b ) Java 2.65.1 (2025-08-27) Dependencies Update shared dependencies ( #2664 ) ( 841318b ) August 28, 2025 Announcement Bigtable tools are available in Agent Development Kit (ADK) .
- December 22, 2025 Libraries Python 2.35.0 (2025-12-16) Features add basic interceptor to client (#1206) ( 6561cfac ) Add encodings for STRUCT and the Timestamp type ( 72dfdc44 ) add PeerInfo proto in Bigtable API ( 72dfdc44 ) Add Type API updates needed to support structured keys in materialized views ( 72dfdc44 ) support mTLS certificates when available (#1249) ( ca20219c ) Bug Fixes re-export AddToCell for consistency (#1241) ( 2a5baf11 ) async client uses fixed grace period (#1236) ( 544db1cd ) Deprecate credentials file argument ( 72dfdc44 ) Add ReadRows/SampleRowKeys bindings for materialized views ( 72dfdc44 ) retry cancelled errors (#1235) ( e3fd5d86 ) Java 2.71.0-rc1 (2025-12-19) Features update with latest from main ( #2740 ) ( 90e1a02 ) feat: Upgrade protobuf gen code to 4.33 ( #2741 ) ( 2b1d201 ) Dependencies update sdk-platform-java-config to 3.55.0-rc1 ( #2738 ) ( 136f164 ) Go 1.41.0 (2025-12-15) Features add PeerInfo proto in Bigtable API (PiperOrigin-RevId: 829585900) ( 185951b3 ) precompute featureflags in client and reuse (#13297) ( 3b3253ac ) Add experimental Bigtable connection pool with custom load balancing strategy. (#12882) ( 7aa96127 ) Enable ALTS hard bound token in Bigtable w/ direct access (#13153) ( 90239341 ) Enable routing cookie and attempt headers for enhanced retries (#12964) ( 96cfd47a ) Bug Fixes fix project id sent in otel (#13286) ( 4865868c ) screaming uppercase metric status (#13484) ( b35ee8fd ) Performance Improvements parallelize the exportTimeSeries function (#13004) ( bafd691d ) December 15, 2025 Libraries Java 2.70.1 (2025-12-12) Dependencies Update shared dependencies ( #2734 ) ( 2823705 ) December 12, 2025 Feature In the Google Cloud console, you can import data into Bigtable using the Dataflow job builder , a web interface for building and running Dataflow pipelines.
- Java Changes for google-cloud-bigtable 2.25.0 (2023-07-14) Features Change stream retention to create and update table ( #1823 ) ( 05fca58 ) Bug Fixes Fix batch mutation limit ( #1808 ) ( ed24d4f ) Update default sample row key attempt timeout to 5 min ( #1827 ) ( 2f363ef ) Documentation Fix formatting for reversed order field example ( #1836 ) ( 10a0426 ) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( #1826 ) ( 159fe38 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.22.0 ( #1838 ) ( fba2c49 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1833 ) ( cb160af ) Python Changes for google-cloud-bigtable 2.20.0 (2023-07-17) Features rel="noreferrer noopener"}) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( d5720f8 ) Bug Fixes Add async context manager return types ( #828 ) ( 475a160 ) Documentation Fix formatting for reversed order field example ( #831 ) ( fddd0ba ) July 18, 2023 Feature Cloud Bigtable change streams are now generally available (GA) .

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The Bigtable Key Visualizer , a monitoring feature in the Google Cloud console, lets you perform advanced performance tuning.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.
- When querying Bigtable using SQL, columns are treated like keys of a map . column : the label for a value stored in a table that's indexed by the unique primary key. column : the label for a value stored in a table that's indexed by the unique row key.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- If the node that's responsible for the requested key range is overloaded or temporarily unavailable in a cluster, this profile provides automatic failover.
- Data types limits The following table compares the limits for data types used by Aerospike and Bigtable: Aerospike Bigtable namespace : The maximum number of namespaces for the Enterprise Edition is 32. table : An instance can have up to 1,000 tables.
- Bigtable is optimized for smaller rows, that is why cell organization and access to data should be considered during schema design to avoid spreading data across many cells if unnecessary.
- Garbage collection is set at this level. bin : a key-value pair where the bin name is the identifier of a value within a record. column qualifier : a label for a value stored in a table.

