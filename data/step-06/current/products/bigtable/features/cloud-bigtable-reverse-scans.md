---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.351Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable reverse scans"
feature_slug: "cloud-bigtable-reverse-scans"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "scans"
  - "reverse"
  - "reading"
  - "row"
  - "enabling"
  - "added"
  - "bigtable"
  - "for"
---

# Cloud Bigtable reverse scans

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable added support for reverse scans, enabling reading row ranges in descending order; Introduces reverse scans in Cloud Bigtable, enabling scanning rows in reverse order.

## Extended Definition

Cloud Bigtable added support for reverse scans, enabling reading row ranges in descending order; Introduces reverse scans in Cloud Bigtable, enabling scanning rows in reverse order.

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
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.
- When querying Bigtable using SQL, columns are treated like keys of a map . column : the label for a value stored in a table that's indexed by the unique primary key. column : the label for a value stored in a table that's indexed by the unique row key.
- In Cassandra, data is stored on block-level storage that's attached to the node server. node : a virtual compute resource responsible for reading and writing data that's associated with a series of row key ranges.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Bigtable is optimized for smaller rows, that is why cell organization and access to data should be considered during schema design to avoid spreading data across many cells if unnecessary.
- Rows with a very large number of columns While Bigtable can support rows up to 256 MB, processing large rows can impact performance.
- Transactions Bigtable and Aerospike both lack support for multi-row transactions but differ in their single-row capabilities.
- Data types limits The following table compares the limits for data types used by Aerospike and Bigtable: Aerospike Bigtable namespace : The maximum number of namespaces for the Enterprise Edition is 32. table : An instance can have up to 1,000 tables.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Python Changes for google-cloud-bigtable 2.22.0 (2023-12-12) Features Add support for Cloud Bigtable request priorities in app profiles ( #871 ) ( a4d551e ) Add support for Python 3.12 ( #888 ) ( 4f050aa ) Introduce compatibility with native namespace packages ( #893 ) ( d218f4e ) Publish CopyBackup protos to external customers ( #855 ) ( 4105df7 ) Bug Fixes Add feature flag for improved mutate rows throttling ( e5af359 ) Add lock to flow control ( #899 ) ( e4e63c7 ) Mutations batcher race condition ( #896 ) ( fe58f61 ) Require google-cloud-core 1.4.4 ( #866 ) ( 09f8a46 ) Use retry async instead of retry in async client ( 597efd1 ) Documentation Minor formatting ( e5af359 ) December 13, 2023 Feature Reverse scans in Cloud Bigtable let you read a range of rows backwards.
- March 24, 2025 Libraries Java 2.56.0 (2025-03-18) Features bigtable: Add support for Logical Views in Admin API ( #2519 ) ( 6dac3fd ) bigtable: Add support for Materialized Views in Admin API ( #2511 ) ( 55cd719 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 7992af0 ) Dependencies Sdk-platform-java-config 3.45.1 ( #2517 ) ( b2af258 ) Python 2.30.0 (2025-03-18) Features Update ExecuteQuery to use Prepare ( #1100 ) ( 8a7abc1 ) Bug Fixes Allow protobuf 6.x ( #1092 ) ( 1015fa8 ) Remove setup.cfg configuration for creating universal wheels ( #1097 ) ( 95f4b82 ) March 17, 2025 Libraries Java 2.55.0 (2025-03-11) Features Add MaterializedViewName to ReadRows and SampleRowKeys ( 1763c6e ) Add MaterializedViews and LogicalViews APIs ( 1763c6e ) Add MaterializedViews and LogicalViews APIs ( 7340527 ) Add PrepareQuery api and update ExecuteQuery to support it ( 1763c6e ) bigtable: Add support for data APIs for materialized views ( #2508 ) ( 6310a63 ) large-row-skip: Added large-row-skip-callable with configurable rowadapter ( #2509 ) ( ba193ef ) Next release from main branch is 2.55.0 ( #2506 ) ( 4e45837 ) Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 7340527 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 91e4369 ) Documentation Fixed formatting of resource path strings ( 7340527 ) March 11, 2025 Feature You can use Cloud KMS Autokey to automate the creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters.
- Java Changes for google-cloud-bigtable 2.25.0 (2023-07-14) Features Change stream retention to create and update table ( #1823 ) ( 05fca58 ) Bug Fixes Fix batch mutation limit ( #1808 ) ( ed24d4f ) Update default sample row key attempt timeout to 5 min ( #1827 ) ( 2f363ef ) Documentation Fix formatting for reversed order field example ( #1836 ) ( 10a0426 ) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( #1826 ) ( 159fe38 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.22.0 ( #1838 ) ( fba2c49 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1833 ) ( cb160af ) Python Changes for google-cloud-bigtable 2.20.0 (2023-07-17) Features rel="noreferrer noopener"}) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( d5720f8 ) Bug Fixes Add async context manager return types ( #828 ) ( 475a160 ) Documentation Fix formatting for reversed order field example ( #831 ) ( fddd0ba ) July 18, 2023 Feature Cloud Bigtable change streams are now generally available (GA) .
- Java Changes for google-cloud-bigtable 2.24.1 (2023-06-27) Bug Fixes Remove javadoc external link configuration ( #1815 ) ( 9c71a93 ) 2.24.0 (2023-06-27) Features Add experimental reverse scan for public preview ( #1809 ) ( f4f2e2e ) Reverse scans public preview ( #1711 ) ( 176360f ) Dependencies Update dependency com.google.truth.extensions:truth-proto-extension to v1.1.5 ( #1801 ) ( a8961e8 ) Update dependency kr.motd.maven:os-maven-plugin to v1.7.1 ( #1792 ) ( 80acca0 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.23 ( #1800 ) ( a9172c4 ) Update shared dependencies to 3.12.0, monitoring to 3.21.0, update renovate config ( #1807 ) ( 12fc8cd ) June 30, 2023 Feature Reverse scans in Cloud Bigtable are now available in Preview .

