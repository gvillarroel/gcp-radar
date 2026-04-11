---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.341Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Data Boost for Bigtable Spark application support"
feature_slug: "data-boost-for-bigtable-spark-application-support"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
keywords:
  - "spark"
  - "application"
  - "boost"
  - "preview"
  - "supports"
  - "bigtable"
  - "for"
  - "now"
---

# Data Boost for Bigtable Spark application support

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Data Boost for Bigtable preview now supports using Data Boost compute resources when reading Bigtable data with a Spark application.

## Extended Definition

Data Boost for Bigtable preview now supports using Data Boost compute resources when reading Bigtable data with a Spark application.

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
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-bigtable 2.44.0 (2024-09-16) Features Add APIs to enable hot backups ( #2313 ) ( 6d004cd ) Add support for awaiting Data Boost ( #2329 ) ( 8556574 ) Dependencies Update shared dependencies ( #2337 ) ( dc65bd5 ) August 28, 2024 Feature The Preview of Data Boost for Bigtable has been expanded to let you use Data Boost compute resources when you read Bigtable data using a Spark application.
- Java Changes for google-cloud-bigtable 2.39.0 (2024-04-29) Features Admin API changes for Data Boost ( #2181 ) ( 3b1886b ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.36.0 ( #2215 ) ( 5a9259e ) Update shared dependencies ( #2190 ) ( 3f37d8d ) May 02, 2024 Feature The Bigtable Spark connector lets you read and write data from and to Bigtable using Spark SQL and DataFrames inside your Spark application.
- Node.js Changes for @google-cloud/bigtable 5.1.1 (2024-07-11) Bug Fixes Ensure that during resumption of a scan, rows that have not been observed by the caller are re-requested ( #1444 ) ( 2d8de32 ) Remove custom readrows retry logic and rely on gax for retries ( #1422 ) ( 3e0a46e ) Java Changes for google-cloud-bigtable 2.40.0 (2024-06-28) Features Add String type with Utf8Raw encoding to Bigtable API ( #2191 ) ( e7f03fc ) Bug Fixes Add getServiceName() to EnhancedBigTableStubSettings ( #2256 ) ( da703db ) Remove grpclb ( #2033 ) ( 7355375 ) Dependencies Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.3 ( #2268 ) ( 4573220 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2269 ) ( 69fef96 ) Update shared dependencies ( #2265 ) ( 61014ca ) June 17, 2024 Feature The Python client library for Bigtable now offers an asynchronous API for use with asynchronous applications.
- Java Changes for google-cloud-bigtable 2.24.1 (2023-06-27) Bug Fixes Remove javadoc external link configuration ( #1815 ) ( 9c71a93 ) 2.24.0 (2023-06-27) Features Add experimental reverse scan for public preview ( #1809 ) ( f4f2e2e ) Reverse scans public preview ( #1711 ) ( 176360f ) Dependencies Update dependency com.google.truth.extensions:truth-proto-extension to v1.1.5 ( #1801 ) ( a8961e8 ) Update dependency kr.motd.maven:os-maven-plugin to v1.7.1 ( #1792 ) ( 80acca0 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.23 ( #1800 ) ( a9172c4 ) Update shared dependencies to 3.12.0, monitoring to 3.21.0, update renovate config ( #1807 ) ( 12fc8cd ) June 30, 2023 Feature Reverse scans in Cloud Bigtable are now available in Preview .

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- With Bigtable, you can build applications with large, dynamic collections without the performance trade-offs required by Cassandra, for the following reasons: Bigtable stores collection elements as individual cells, so that operations on elements are highly granular.
- The policy accounts for the data center topology and vnode token ranges. application profile : settings that instruct Bigtable how to route a client API call to the appropriate cluster in the instance.
- This document is for software developers and database administrators who want to migrate existing applications or design new applications for use with Bigtable as a database.
- This document provides tips on what to consider when refactoring your application, if you choose Bigtable as the migration target for your Cassandra workloads.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- It uses your knowledge of Aerospike to describe concepts that you need to understand before migrating to Bigtable.
- Similarly, Bigtable supports sparse columns, so no storage is consumed for columns without values.
- Data types limits The following table compares the limits for data types used by Aerospike and Bigtable: Aerospike Bigtable namespace : The maximum number of namespaces for the Enterprise Edition is 32. table : An instance can have up to 1,000 tables.
- Bigtable is optimized for smaller rows, that is why cell organization and access to data should be considered during schema design to avoid spreading data across many cells if unnecessary.

