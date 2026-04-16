---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.017Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable-BigQuery federation"
feature_slug: "cloud-bigtable-bigquery-federation"
latest_feature_date: "2022-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/bigquery-analysis"
keywords:
  - "federation"
  - "combine"
  - "allowing"
  - "query"
  - "supports"
---

# Cloud Bigtable-BigQuery federation

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable now supports federation with BigQuery, allowing BigQuery to query Bigtable data and combine it with other sources.

## Extended Definition

Cloud Bigtable now supports federation with BigQuery, allowing BigQuery to query Bigtable data and combine it with other sources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.
- When querying Bigtable using SQL, columns are treated like keys of a map . column : the label for a value stored in a table that's indexed by the unique primary key. column : the label for a value stored in a table that's indexed by the unique row key.
- When the source table changes, Cassandra updates the materialized view automatically. continuous materialized view : a fully-managed, pre-computed result of a SQL query that is incrementally and automatically updated from a source table.
- Cassandra provides fault tolerance through availability levels that are correlated with the tunable consistency level, allowing a cluster to serve clients while one or more nodes are impaired.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Query language also supports many complex types like scalars, JSON objects and HLL bins.
- Distributes records based on hashes, so scanning many consecutive keys requires querying multiple nodes and aggregating results, which can be slower.
- Bigtable provides fully consistent single-row writes within a cluster and supports single-row transactions through mutate-row requests.
- Flexible schema Aerospike doesn't enforce schema constraints, allowing each record to have different bins with varying value types.

### Query and analyze Bigtable data with BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis)
- Source ID: `site-docs-root-2`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples in GoogleSQL syntax of limiting the query include the following: WHERE rowkey = "abc123" WHERE rowkey BETWEEN "abc123" PRECEDING AND "abc999" FOLLOWING WHERE rowkey > 999999 (if you read the row key as a string) Joins If you plan to use a join to analyze your Bigtable table data in conjunction with data from another source, you should create a subquery that extracts the relevant fields from Bigtable for the planned join.
- Query data in the external table After you have an external table for your Bigtable table, you can send SQL queries to it using one of the following methods: At the command line using bq , the BigQuery CLI Calls to the BigQuery API Any of the BigQuery client libraries To learn how to compose and run a query, see Run a query .
- Build a real-time analytics database with Bigtable and BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Recommended configurations We recommend the following best practices when you create your external table: To avoid impacting your application-serving traffic, use Data Boost serverless compute when you read Bigtable data with BigQuery external tables.

