---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.347Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Spark connector"
feature_slug: "bigtable-spark-connector"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "spark"
  - "connector"
  - "reading"
  - "supports"
  - "bigtable"
  - "and"
  - "now"
  - "the"
---

# Bigtable Spark connector

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The Bigtable Spark connector now supports reading and writing with Spark SQL and DataFrames.

## Extended Definition

The Bigtable Spark connector now supports reading and writing with Spark SQL and DataFrames.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- June 09, 2025 Libraries Java 2.60.0 (2025-06-06) Features Improve error message on malformed struct ( #2592 ) ( 7f5fdf0 ) Run ExecuteQuery conformance tests ( #2557 ) ( 0bbc083 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 65782aa ) Ensure that multiple instances of a client in the same process dont clobber each other ( #2590 ) ( 8d3dca4 ) Dependencies Update shared dependencies ( #2587 ) ( 8ec0339 ) May 29, 2025 Change The Bigtable Spark connector supports Scala versions 2.12 and 2.13 in all connector versions and has been updated as follows: Connector versions 0.5.0 and later support dynamic columns .
- Java Changes for google-cloud-bigtable 2.39.0 (2024-04-29) Features Admin API changes for Data Boost ( #2181 ) ( 3b1886b ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.36.0 ( #2215 ) ( 5a9259e ) Update shared dependencies ( #2190 ) ( 3f37d8d ) May 02, 2024 Feature The Bigtable Spark connector lets you read and write data from and to Bigtable using Spark SQL and DataFrames inside your Spark application.
- Java Changes for google-cloud-bigtable 2.25.0 (2023-07-14) Features Change stream retention to create and update table ( #1823 ) ( 05fca58 ) Bug Fixes Fix batch mutation limit ( #1808 ) ( ed24d4f ) Update default sample row key attempt timeout to 5 min ( #1827 ) ( 2f363ef ) Documentation Fix formatting for reversed order field example ( #1836 ) ( 10a0426 ) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( #1826 ) ( 159fe38 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.22.0 ( #1838 ) ( fba2c49 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1833 ) ( cb160af ) Python Changes for google-cloud-bigtable 2.20.0 (2023-07-17) Features rel="noreferrer noopener"}) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( d5720f8 ) Bug Fixes Add async context manager return types ( #828 ) ( 475a160 ) Documentation Fix formatting for reversed order field example ( #831 ) ( fddd0ba ) July 18, 2023 Feature Cloud Bigtable change streams are now generally available (GA) .
- Java Changes for google-cloud-bigtable 2.31.0 (2024-01-12) Features Add a flag to add / remove routing cookie from callable chain ( #2032 ) ( 201e631 ) Adding feature flags for routing cookie and retry info ( #2031 ) ( 08c5bf1 ) Count row merging errors as internal errors ( #2045 ) ( fc7845b ) Enable feature flag when setting is enabled ( #2043 ) ( e0d90db ) Handle retry info so client respect the delay server sets ( #2026 ) ( f1b7fc7 ) Bug Fixes Deps: Update the Java code generator (gapic-generator-java) to 2.31.0 ( #2044 ) ( d9042a5 ) Fix RetryInfo algorithm and tests ( #2041 ) ( dad7517 ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.27.0 ( #2030 ) ( a492d02 ) Update dependency com.google.truth.extensions:truth-proto-extension to v1.2.0 ( #2035 ) ( 46e1e03 ) December 28, 2023 Announcement The Cloud Bigtable documentation now includes a Bigtable for DynamoDB users guide for those considering a migration to Bigtable.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- Composite keys are imitated by joining the data of multiple columns by using a common delimiter—for example, the hash (#) or percent (%) symbols. node : a machine responsible for reading and writing data that's associated with a series of primary key partition hash ranges.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.
- Other: No known limitations Cloud Build GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud CDN GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Code Unsupported Alternatives: No alternatives available Cloud Composer GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Cloud Composer supports Workforce Identity Federation only for environments created in Composer version 2.1.11 or later and Airflow version 2.4.3 or later.
- Other: No known limitations Managed Service for Apache Spark GA Console (federated): Workforce Identity Federation users can perform create, view, update, and delete operations in Cluster, Jobs, and Batches list pages.
- Google Cloud API: The following methods don't support identity federtation: UpdateCatalog ImportCompletionData TuneModel ImportProducts PurgeProducts ImportUserEvents ImportUserEvents PurgeUserEvents RejoinUserEvents Other: No known limitations Secret Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Secure Source Manager GA Console (federated): No known limitations Google Cloud API: Identity federation users must sign in through the Secure Source Manager instance web interface before running any of the following commands: Git CLI commands API calls to data plane endpoints Identity federation users must sign in through the Secure Source Manager instance web interface after every session expiry to continue using Git SSH CLI commands with user SSH keys.

