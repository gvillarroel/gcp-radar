---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.000Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable write-time aggregates"
feature_slug: "bigtable-write-time-aggregates"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/aggregates"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
keywords:
  - "distributed"
  - "aggregates"
  - "building"
  - "time"
  - "write"
  - "supports"
---

# Bigtable write-time aggregates

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports building distributed counters using write-time aggregates.

## Extended Definition

Bigtable now supports building distributed counters using write-time aggregates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/aggregates](https://docs.cloud.google.com/bigtable/docs/aggregates)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Because a write to Colossus is replicated multiple times, the durability is ensured even if nodal hardware failure occurs before the data is persisted to an SSTable for the row range.
- In Bigtable, because each row key is only assigned to a single node at any point in time, a response from the node is all that's needed to confirm that a write is successful.
- It also supports modern workloads, such as machine learning and AI, that require frequent iteration on feature stores and real-time serving at global scale.
- Because individual cells are versioned by timestamp, no writes are lost, and each cluster serves the cells that have the most current timestamps available.

### Aggregating values at write time \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/aggregates](https://docs.cloud.google.com/bigtable/docs/aggregates)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Aggregating your Bigtable data at write time lets you avoid the need to use any extract, transform, and load (ETL) or streaming processing software to aggregate your data before or after you write it to Bigtable.
- Read then write Another way to aggregate your data at write time is by using a ReadModifyWriteRow request, which lets you manipulate the value of a cell by incrementing or appending to the value transactionally.
- Bigtable offers multiple ways of aggregating data at write time, including conflict-free replicated data types, ReadModifyWriteRow requests, and continuous materialized views.
- Aggregating values at write time This document provides an overview of the ways that you can aggregate your Bigtable data at write time.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bigtable provides fully consistent single-row writes within a cluster and supports single-row transactions through mutate-row requests.
- Advanced types might be increasingly supported in the future, but at the time of writing this document there is no way to put such types into Bigtable, everything is serialized client side.
- No directly corresponding item. cell : a label for a timestamped value stored in a table. (record) digest : a hash of a three-tuple identifying a record: namespace, set, and key.
- Performance considerations Because Aerospike and Bigtable treat read and write operations differently, they have performance differences which are important to consider.

