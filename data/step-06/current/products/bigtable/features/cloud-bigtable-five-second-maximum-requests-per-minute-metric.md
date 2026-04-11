---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.356Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable five-second maximum requests per minute metric"
feature_slug: "cloud-bigtable-five-second-maximum-requests-per-minute-metric"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/configuring-garbage-collection"
keywords:
  - "minute"
  - "maximum"
  - "second"
  - "five"
  - "requests"
  - "metric"
  - "per"
  - "bigtable"
---

# Cloud Bigtable five-second maximum requests per minute metric

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Adds the five-second maximum requests per minute observability metric to Cloud Bigtable.

## Extended Definition

Adds the five-second maximum requests per minute observability metric to Cloud Bigtable.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/configuring-garbage-collection](https://docs.cloud.google.com/bigtable/docs/configuring-garbage-collection)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- June 28, 2023 Feature The Cloud Bigtable metric Five-second maximum requests per minute is now generally available (GA) .
- This metric measures the maximum number of requests received in a five-second span per minute to help you identify short bursts of traffic.
- Java Changes for google-cloud-bigtable 2.34.0 (2024-02-21) Features Add the export logic for per-connection error rate metric ( #2121 ) ( d053f2d ) Create the backbone of counting errors per connection each minute. ( #2094 ) ( 7d27816 ) Dependencies Update actions/setup-java action to v4 ( #2106 ) ( a694296 ) Update dependency com.google.cloud:gapic-libraries-bom to v1.30.0 ( #2126 ) ( f613bd0 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.25.0 ( #2113 ) ( ba1973e ) Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.1 ( #2119 ) ( 0a7ad66 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.10.1 ( #2122 ) ( 99ec284 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.1 ( #2123 ) ( 12d961a ) February 19, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- January 19, 2026 Libraries Java 2.71.0 (2026-01-15) Features Add CSM for batch write flow control ( #2685 ) ( 62ffd1b ) Bug Fixes bigtable: Add handling for gauge metrics ( #2719 ) ( 87aa4d5 ) Create stub with BigtableClientContext so otels are closed ( #2747 ) ( 3d0a6d9 ) Update BigtableChannelPool to use the background executor ( #2753 ) ( 8f6e2df ) Use the same background executor in otel reader and monitoring c… ( #2746 ) ( 3a58f9b ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.76.0 ( #2754 ) ( be54ef6 ) Update shared dependencies ( #2752 ) ( fe1074c ) December 26, 2025 Feature Continuous materialized views support up to five continuous materialized views per table.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Google recommends that you test the performance of Bigtable with representative data and queries to establish a metric for the per-node QPS that's achievable for your workload.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- With Bigtable, you can build applications with large, dynamic collections without the performance trade-offs required by Cassandra, for the following reasons: Bigtable stores collection elements as individual cells, so that operations on elements are highly granular.
- In addition to gRPC and client libraries for various programming languages, Bigtable maintains compatibility with the open source Apache HBase Java client library , an alternative open source database engine implementation of the Bigtable paper.

### Configure garbage collection \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configuring-garbage-collection](https://docs.cloud.google.com/bigtable/docs/configuring-garbage-collection)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for client libraries . namespace cbt = :: google :: cloud :: bigtable ; namespace cbta = :: google :: cloud :: bigtable admin ; using :: google :: bigtable :: admin :: v2 :: ModifyColumnFamiliesRequest ; using :: google :: cloud :: StatusOr ; []( cbta :: BigtableTableAdminClient admin , std :: string const & project id , std :: string const & instance id , std :: string const & table id , std :: string const & family name ) { std :: string table name = cbt :: TableName ( project id , instance id , table id ); auto constexpr kSecondsPerDay = std :: chrono :: seconds ( std :: chrono :: hours ( 24 )). count (); ModifyColumnFamiliesRequest :: Modification mod ; mod . set id ( family name ); auto & gc = mod . mutable create () - > mutable gc rule (); auto & gc 1 = gc . mutable union () - > add rules (); auto & gc 2 = gc . mutable union () - > add rules (); auto & gc 2 1 = gc 2 . mutable intersection () - > add rules (); auto & gc 2 2 = gc 2 . mutable intersection () - > add rules (); gc 1 . set max num versions ( 10 ); gc 2 1 . set max num versions ( 1 ); gc 2 2 . mutable max age () - > set seconds ( 5 kSecondsPerDay ); StatusOr<google :: bigtable :: admin :: v2 :: Table > schema = admin .
- For more information, see Set up authentication for client libraries . namespace cbt = :: google :: cloud :: bigtable ; namespace cbta = :: google :: cloud :: bigtable admin ; using :: google :: bigtable :: admin :: v2 :: ModifyColumnFamiliesRequest ; using :: google :: cloud :: StatusOr ; []( cbta :: BigtableTableAdminClient admin , std :: string const & project id , std :: string const & instance id , std :: string const & table id , std :: string const & family name ) { std :: string table name = cbt :: TableName ( project id , instance id , table id ); auto constexpr kSecondsPerDay = std :: chrono :: seconds ( std :: chrono :: hours ( 24 )). count (); ModifyColumnFamiliesRequest :: Modification mod ; mod . set id ( family name ); auto & gc int = mod . mutable create () - > mutable gc rule () - > mutable intersection (); gc int . add rules () - > set max num versions ( 1 ); gc int . add rules () - > mutable max age () - > set seconds ( 5 kSecondsPerDay ); StatusOr<google :: bigtable :: admin :: v2 :: Table > schema = admin .
- For more information, see Set up authentication for client libraries . namespace cbt = :: google :: cloud :: bigtable ; namespace cbta = :: google :: cloud :: bigtable admin ; using :: google :: bigtable :: admin :: v2 :: ModifyColumnFamiliesRequest ; using :: google :: cloud :: StatusOr ; []( cbta :: BigtableTableAdminClient admin , std :: string const & project id , std :: string const & instance id , std :: string const & table id , std :: string const & family name ) { std :: string table name = cbt :: TableName ( project id , instance id , table id ); auto constexpr kSecondsPerDay = std :: chrono :: seconds ( std :: chrono :: hours ( 24 )). count (); ModifyColumnFamiliesRequest :: Modification mod ; mod . set id ( family name ); auto & gc union = mod . mutable create () - > mutable gc rule () - > mutable union (); gc union . add rules () - > set max num versions ( 1 ); gc union . add rules () - > mutable max age () - > set seconds ( 5 kSecondsPerDay ); StatusOr<google :: bigtable :: admin :: v2 :: Table > schema = admin .
- For more information, see Set up authentication for client libraries . namespace cbt = :: google :: cloud :: bigtable ; namespace cbta = :: google :: cloud :: bigtable admin ; using :: google :: bigtable :: admin :: v2 :: ModifyColumnFamiliesRequest ; using :: google :: cloud :: StatusOr ; []( cbta :: BigtableTableAdminClient admin , std :: string const & project id , std :: string const & instance id , std :: string const & table id , std :: string const & family name ) { std :: string table name = cbt :: TableName ( project id , instance id , table id ); auto constexpr kSecondsPerDay = std :: chrono :: seconds ( std :: chrono :: hours ( 24 )). count (); ModifyColumnFamiliesRequest :: Modification mod ; mod . set id ( family name ); mod . mutable create () - > mutable gc rule () - > mutable max age () - > set seconds ( 5 kSecondsPerDay ); StatusOr<google :: bigtable :: admin :: v2 :: Table > schema = admin .

