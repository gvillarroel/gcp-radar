---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.339Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Row-affinity routing"
feature_slug: "row-affinity-routing"
latest_feature_date: "2024-12-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
keywords:
  - "affinity"
  - "routing"
  - "automatically"
  - "row"
  - "supports"
  - "bigtable"
  - "now"
  - "to"
---

# Row-affinity routing

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports row-affinity routing to automatically route all single-row requests for a given row to the same cluster.

## Extended Definition

Bigtable now supports row-affinity routing to automatically route all single-row requests for a given row to the same cluster.

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
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.
- When querying Bigtable using SQL, columns are treated like keys of a map . column : the label for a value stored in a table that's indexed by the unique primary key. column : the label for a value stored in a table that's indexed by the unique row key.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- December 11, 2024 Feature You can now enable row-affinity routing to let Bigtable automatically ensure that single-row requests for a given row are routed to the same cluster.
- Java Changes for google-cloud-bigtable 2.31.0 (2024-01-12) Features Add a flag to add / remove routing cookie from callable chain ( #2032 ) ( 201e631 ) Adding feature flags for routing cookie and retry info ( #2031 ) ( 08c5bf1 ) Count row merging errors as internal errors ( #2045 ) ( fc7845b ) Enable feature flag when setting is enabled ( #2043 ) ( e0d90db ) Handle retry info so client respect the delay server sets ( #2026 ) ( f1b7fc7 ) Bug Fixes Deps: Update the Java code generator (gapic-generator-java) to 2.31.0 ( #2044 ) ( d9042a5 ) Fix RetryInfo algorithm and tests ( #2041 ) ( dad7517 ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.27.0 ( #2030 ) ( a492d02 ) Update dependency com.google.truth.extensions:truth-proto-extension to v1.2.0 ( #2035 ) ( 46e1e03 ) December 28, 2023 Announcement The Cloud Bigtable documentation now includes a Bigtable for DynamoDB users guide for those considering a migration to Bigtable.
- Libraries Java 2.63.0 (2025-07-30) Features Add Idempotency to Cloud Bigtable MutateRowsRequest API ( bc58b4f ) Add port as a parameter for the bigtable emulator ( #2645 ) ( 5acd3dc ) Add type support for Proto and Enum ( bc58b4f ) Publish Proto and Enum types to CBT data API ( ace12d5 ) Selective GAPIC autogeneration for Python Bigtable Admin ( e219c38 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( e219c38 ) Update routing parameters.path template ( e219c38 ) Dependencies Update sdk-platorm-java-config to 3.50.2 ( #2646 ) ( 03e6961 ) Documentation Sync generated comments from the API Protos ( bc58b4f ) July 31, 2025 Feature Logical views for Bigtable are now generally available ( GA ).
- Node.js Changes for @google-cloud/bigtable 4.5.0 (2023-03-20) Features Add npm run compile to the testproxy command ( #1258 ) ( 52c06a2 ) Bug Fixes Always set the retry attempt to 0 for now ( #1251 ) ( 5ee6f19 ) Java Changes for google-cloud-bigtable 2.20.2 (2023-03-29) Bug Fixes Higher application blocking latency precision ( #1676 ) ( 45ce93b ) Make ChangeStreamRecord interface serializable ( #1685 ) ( b97badb ) Mark readRow requests as unary operations ( #1679 ) ( f88bb67 ) March 31, 2023 Feature Cloud Bigtable instance and table metadata is now automatically synced to Data Catalog, a feature of Dataplex, for improved data discovery and governance.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- Bigtable is optimized for smaller rows, that is why cell organization and access to data should be considered during schema design to avoid spreading data across many cells if unnecessary.
- A Bigtable table is sharded into blocks of contiguous rows, called tablets, which are stored on Colossus, a distributed file system that provides high durability.
- Bigtable uses application profiles to manage request routing, with configurable priorities to control the order in which requests are served.

