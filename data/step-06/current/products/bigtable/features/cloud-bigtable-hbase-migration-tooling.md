---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.018Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable HBase migration tooling"
feature_slug: "cloud-bigtable-hbase-migration-tooling"
latest_feature_date: "2022-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/hbase-replication"
  - "https://docs.cloud.google.com/bigtable/docs/dynamodb-users"
keywords:
  - "tooling"
  - "migrate"
  - "migration"
  - "workloads"
  - "hbase"
  - "clusters"
  - "available"
---

# Cloud Bigtable HBase migration tooling

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

New tooling is available to migrate Bigtable workloads from HBase clusters on other Google Cloud services.

## Extended Definition

New tooling is available to migrate Bigtable workloads from HBase clusters on other Google Cloud services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/hbase-replication](https://docs.cloud.google.com/bigtable/docs/hbase-replication)
- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- When is Bigtable a good destination for Cassandra workloads The best Google Cloud service for your Cassandra workload depends on your migration goals and the Cassandra functionality that you require after migration.
- This document provides tips on what to consider when refactoring your application, if you choose Bigtable as the migration target for your Cassandra workloads.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.

### Replicate from HBase to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/hbase-replication](https://docs.cloud.google.com/bigtable/docs/hbase-replication)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use cases Online migration to Bigtable - You can use the Bigtable HBase replication library, in conjunction with an offline migration of your existing HBase data, to migrate from HBase to Bigtable with almost no downtime.
- Once the buffering has started to capture new writes, follow the offline migration guide to migrate a snapshot of your existing HBase data.
- For offline migration from HBase to Bigtable, see Migrate data from HBase to Bigtable offline .
- Download the JAR To get the replication library, run the following in the HBase shell. wget BIGTABLE HBASE REPLICATION URL Replace BIGTABLE HBASE REPLICATION URL with the URL of the latest JAR with dependencies available in the replication library's Maven repository.

### Migrate from DynamoDB to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bigtable supports replicated clusters in as many zones that are available in up to 8 Google Cloud regions where Bigtable is available.
- To get started, use a Google-provided migration tool that helps you migrate from DynamoDB to Bigtable.
- Migrate from DynamoDB to Bigtable Bigtable and DynamoDB are distributed key-value stores that can support millions of queries per second (QPS), provide storage that scales up to petabytes of data, and tolerate node failures.
- This page describes the migration tool, compares the two database systems, and describes the underlying architecture and interaction details that differ and that are important to understand before migrating.

