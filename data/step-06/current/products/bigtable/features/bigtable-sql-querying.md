---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.994Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable SQL querying"
feature_slug: "bigtable-sql-querying"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
keywords:
  - "running"
  - "querying"
  - "queries"
  - "available"
  - "supports"
---

# Bigtable SQL querying

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports running SQL queries, available in preview.

## Extended Definition

Bigtable now supports running SQL queries, available in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.
- When querying Bigtable using SQL, columns are treated like keys of a map . column : the label for a value stored in a table that's indexed by the unique primary key. column : the label for a value stored in a table that's indexed by the unique row key.
- They implement multidimensional key-value stores that can support tens of thousands of queries per second (QPS), low latency reads and writes, storage that scales up to petabytes of data, and tolerance for node failure.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- If the node that's responsible for the requested key range is overloaded or temporarily unavailable in a cluster, this profile provides automatic failover.
- Distributes records based on hashes, so scanning many consecutive keys requires querying multiple nodes and aggregating results, which can be slower.
- Additionally, there are read-modify-write and check-and-mutate operations, though these are not available with multi-cluster routing profiles.
- Bigtable provides fully consistent single-row writes within a cluster and supports single-row transactions through mutate-row requests.

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- This helps to ensure that enough compute capacity is available during the execution of the continuously running SQL query.
- During this time, the view is unavailable for querying.
- Use counters instead of continuous materialized views for the following: Aggregations that don't require filters and don't need to be across rows If you need to immediately read your writes from the cluster they are written to Use continuous materialized views when you want to do the following: Generate a different key for queries against your aggregations See changes to the base table reflected in your aggregations Automatically combine data across multiple rows Use a combination of counters and continuous materialized views for use cases like when you want to do the following: Capture fresh metrics in an aggregate cell but keep historical rollups of those metrics Combine metrics in a continuous materialized view Resource provisioning and performance Ongoing processing for continuous materialized views occurs as a low-priority background job.
- You can read from a continuous materialized view by using the following: Bigtable Studio query editor The Bigtable client libraries that support SQL queries ReadRows API call using the Bigtable client libraries for Java and Go For more information, see Reading from a continuous materialized view .

