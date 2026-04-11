---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.331Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable continuous materialized views"
feature_slug: "bigtable-continuous-materialized-views"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries"
keywords:
  - "materialized"
  - "continuous"
  - "views"
  - "available"
  - "bigtable"
  - "are"
  - "for"
  - "now"
---

# Bigtable continuous materialized views

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Continuous materialized views for Bigtable are now available in Preview.

## Extended Definition

Continuous materialized views for Bigtable are now available in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)

## Supporting Pages

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SQL development patterns : Continuous materialized views are based on GoogleSQL for Bigtable queries, including SQL functions, filters, and aggregations.
- Use counters instead of continuous materialized views for the following: Aggregations that don't require filters and don't need to be across rows If you need to immediately read your writes from the cluster they are written to Use continuous materialized views when you want to do the following: Generate a different key for queries against your aggregations See changes to the base table reflected in your aggregations Automatically combine data across multiple rows Use a combination of counters and continuous materialized views for use cases like when you want to do the following: Capture fresh metrics in an aggregate cell but keep historical rollups of those metrics Combine metrics in a continuous materialized view Resource provisioning and performance Ongoing processing for continuous materialized views occurs as a low-priority background job.
- What's next Continuous materialized view query Create and manage continuous materialized views Create an asynchronous secondary index Schema design best practices Distributed counting in Bigtable Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Data in a continuous materialized view includes the following: Aggregated or transformed values that are derived from data in the source table Unaggregated values that define the grouping key Continuous materialized views let you pre-aggregate your data as you ingest it.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Secondary indexes You can use continuous materialized views as asynchronous secondary indexes for tables to query the same data using different lookup patterns or attributes.
- You use Cassandra collection types, counters, or materialized views in addition to scalar types, which Bigtable is optimized for.
- For more information, see Continuous materialized views .
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.

### Continuous materialized view queries \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Create and manage continuous materialized views GoogleSQL for Bigtable reference documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you read this document, you should be familiar with Continuous materialized views and GoogleSQL for Bigtable .
- Supported aggregations You can use the following aggregation functions in a SQL query that defines a continuous materialized view: COUNT SUM MIN MAX HLL COUNT.INIT HLL COUNT.MERGE HLL COUNT.MERGE PARTIAL ANY VALUE BIT AND BIT OR BIT XOR AVG If you SELECT COUNT( ) you must define a row key, like in the following example: SELECT ' ' AS key , COUNT ( ) AS count FROM foo GROUP BY key ; Unsupported SQL features You can't use the following SQL features: Any feature not supported by GoogleSQL for Bigtable ARRAY ARRAY AGG ARRAY CONCAT AGG COUNT IF CURRENT TIME and other non-deterministic functions DATE , DATETIME as output columns (Use TIMESTAMP or store a string.) DESC sort in the output DISTINCT option, as in SUM( DISTINCT value) ) LIMIT/OFFSET SELECT OVER clause to create a windowing aggregation STRUCT You also can't nest GROUP BY or ORDER BY clauses or create map columns.
- For more information about metrics that can help you monitor your continuous materialized views, see Metrics .

