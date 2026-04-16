---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.994Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable aggregates"
feature_slug: "bigtable-aggregates"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
keywords:
  - "distributed"
  - "aggregates"
  - "perform"
  - "time"
  - "write"
  - "available"
---

# Bigtable aggregates

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable aggregates are now available to perform write-time distributed aggregation of values using min, max, sum, and HLL.

## Extended Definition

Bigtable aggregates are now available to perform write-time distributed aggregation of values using min, max, sum, and HLL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Because individual cells are versioned by timestamp, no writes are lost, and each cluster serves the cells that have the most current timestamps available.
- Because a write to Colossus is replicated multiple times, the durability is ensured even if nodal hardware failure occurs before the data is persisted to an SSTable for the row range.
- In Bigtable, because each row key is only assigned to a single node at any point in time, a response from the node is all that's needed to confirm that a write is successful.
- You can bypass these limits with workarounds such as frozen collections or storing data as JSON strings, which sacrifice performance by introducing a read-modify-write tax .

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Performance considerations Because Aerospike and Bigtable treat read and write operations differently, they have performance differences which are important to consider.
- Additionally, there are read-modify-write and check-and-mutate operations, though these are not available with multi-cluster routing profiles.
- Writes are performed on a single cluster and become eventually consistent across other clusters in the instance.
- Each cluster serves the cells that have the most current timestamps available.

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use counters instead of continuous materialized views for the following: Aggregations that don't require filters and don't need to be across rows If you need to immediately read your writes from the cluster they are written to Use continuous materialized views when you want to do the following: Generate a different key for queries against your aggregations See changes to the base table reflected in your aggregations Automatically combine data across multiple rows Use a combination of counters and continuous materialized views for use cases like when you want to do the following: Capture fresh metrics in an aggregate cell but keep historical rollups of those metrics Combine metrics in a continuous materialized view Resource provisioning and performance Ongoing processing for continuous materialized views occurs as a low-priority background job.
- At the same time, you might see some processing on the source table decrease, such as when you are no longer conducting range scans of the data to perform repeated computations and other less efficient queries.
- Read and write latency are unaffected : A continuous materialized view has minimal impact on performance on the source table when the instance's clusters are adequately provisioned or use autoscaling.
- As a result, it has a minimal impact on application performance and read and write latency on the source table, provided your clusters are adequately sized.

