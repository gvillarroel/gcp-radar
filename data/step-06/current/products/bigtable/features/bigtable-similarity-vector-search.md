---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.326Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable similarity vector search"
feature_slug: "bigtable-similarity-vector-search"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
keywords:
  - "similarity"
  - "neighbors"
  - "nearest"
  - "search"
  - "vector"
  - "supports"
  - "bigtable"
  - "now"
---

# Bigtable similarity vector search

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports K-nearest-neighbors similarity vector search.

## Extended Definition

Bigtable now supports K-nearest-neighbors similarity vector search.

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
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- May 05, 2025 Libraries Java 2.58.0 (2025-04-28) Features Add deletion protection support for LVs ( 43c97a3 ) bigtable: Add integration tests for Materialized/Logical Views ( #2518 ) ( 4d3a7e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 43c97a3 ) Fix retry info algorithm setting ( #2562 ) ( c424ccb ) Use universe domain when creating the monitoring client ( #2570 ) ( 3b51e12 ) Java 2.58.1 (2025-04-28) Bug Fixes Close otel instance ( #2571 ) ( 422fe26 ) Java 2.58.0 (2025-04-28) Features Add deletion protection support for LVs ( 43c97a3 ) bigtable: Add integration tests for Materialized/Logical Views ( #2518 ) ( 4d3a7e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 43c97a3 ) Fix retry info algorithm setting ( #2562 ) ( c424ccb ) Use universe domain when creating the monitoring client ( #2570 ) ( 3b51e12 ) April 29, 2025 Feature Similarity vector search in Bigtable by finding the K-nearest neighbors is generally available ( GA ).
- Java Changes for google-cloud-bigtable 2.44.1 (2024-09-26) Bug Fixes Add RetryCallable to the callable chain ( #2348 ) ( 0330d77 ) Pass deadline through ExecuteQuery RetrySettings ( #2355 ) ( 6bc9820 ) Time based flakiness in execute query deadline test ( #2358 ) ( b474173 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.36.1 ( #2351 ) ( 40c428e ) September 25, 2024 Announcement You can perform similarity vector search in Bigtable by finding the K-nearest neighbors.
- May 01, 2017 Feature Cloud Bigtable now supports Identity and Access Management .
- Java Changes for google-cloud-bigtable 2.17.0 (2022-12-07) Features Add a query paginator ( #1530 ) ( 5c8e1f6 ) Add test proxy to java-bigtable client ( #1498 ) ( 132b4e4 ) Implement cross-project table restore ( #1536 ) ( 335977c ) Next release from main branch is 2.17.0 ( #1514 ) ( 4fc6a93 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom … ( #1531 ) ( ee98338 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.0 ( #1539 ) ( 3244cef ) Update dependency kr.motd.maven:os-maven-plugin to v1.7.1 ( #1518 ) ( 8309681 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.19 ( #1537 ) ( 7f7c478 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.19 ( #1538 ) ( 9d3df57 ) Python Changes for google-cloud-bigtable 2.14.1 (2022-12-06) Bug Fixes Deps: Require google-api-core >=1.34.0, >=2.11.0 ( e5875cb ) Drop usage of pkg resources ( e5875cb ) Fix timeout default values ( e5875cb ) Documentation Samples: Snippetgen should call await on the operation coroutine before calling result ( e5875cb ) December 08, 2022 Feature Cloud Bigtable now lets you restore from a backup to a different project.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Geographic replication and consistency Bigtable and Cassandra handle geographic (also known as multi- region ) replication and consistency differently.
- This document applies your knowledge of Apache Cassandra to using Bigtable to describe concepts that you should understand before migrating.
- Bigtable supports fully consistent, single-row writes within a cluster.
- Bigtable also supports asynchronous replication .

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Bigtable provides fully consistent single-row writes within a cluster and supports single-row transactions through mutate-row requests.
- It uses your knowledge of Aerospike to describe concepts that you need to understand before migrating to Bigtable.
- Similarly, Bigtable supports sparse columns, so no storage is consumed for columns without values.
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.

