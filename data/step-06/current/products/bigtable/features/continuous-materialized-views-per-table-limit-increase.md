---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.973Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Continuous materialized views per-table limit increase"
feature_slug: "continuous-materialized-views-per-table-limit-increase"
latest_feature_date: "2025-12-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "increase"
  - "materialized"
  - "continuous"
  - "limit"
  - "views"
  - "table"
---

# Continuous materialized views per-table limit increase

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports up to five continuous materialized views per table to enable multiple secondary-index and aggregate-view patterns.

## Extended Definition

Bigtable now supports up to five continuous materialized views per table to enable multiple secondary-index and aggregate-view patterns.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 259
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Continuous materialized views count toward the 1,000 tables-per-instance limit .
- Limitations You can create up to five continuous materialized views per table.
- Use counters instead of continuous materialized views for the following: Aggregations that don't require filters and don't need to be across rows If you need to immediately read your writes from the cluster they are written to Use continuous materialized views when you want to do the following: Generate a different key for queries against your aggregations See changes to the base table reflected in your aggregations Automatically combine data across multiple rows Use a combination of counters and continuous materialized views for use cases like when you want to do the following: Capture fresh metrics in an aggregate cell but keep historical rollups of those metrics Combine metrics in a continuous materialized view Resource provisioning and performance Ongoing processing for continuous materialized views occurs as a low-priority background job.
- Metric Description materialized view/max delay Upper bound of processing delay for the continuous materialized view materialized view/storage Amount of data used for the continuous materialized view storage in bytes materialized view/intermediate storage Amount of data used by intermediate processing for the continuous materialized view in bytes table/materialized view intermediate storage Amount of data used by intermediate processing for continuous materialized views defined on this table materialized view/user errors Number of errors from user data for the continuous materialized view.

### Continuous materialized view queries \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported aggregations You can use the following aggregation functions in a SQL query that defines a continuous materialized view: COUNT SUM MIN MAX HLL COUNT.INIT HLL COUNT.MERGE HLL COUNT.MERGE PARTIAL ANY VALUE BIT AND BIT OR BIT XOR AVG If you SELECT COUNT( ) you must define a row key, like in the following example: SELECT ' ' AS key , COUNT ( ) AS count FROM foo GROUP BY key ; Unsupported SQL features You can't use the following SQL features: Any feature not supported by GoogleSQL for Bigtable ARRAY ARRAY AGG ARRAY CONCAT AGG COUNT IF CURRENT TIME and other non-deterministic functions DATE , DATETIME as output columns (Use TIMESTAMP or store a string.) DESC sort in the output DISTINCT option, as in SUM( DISTINCT value) ) LIMIT/OFFSET SELECT OVER clause to create a windowing aggregation STRUCT You also can't nest GROUP BY or ORDER BY clauses or create map columns.
- The following pattern shows how to build a continuous materialized view SQL query: SELECT expression AS alias [ , ... ] FROM from item [ WHERE bool expression ] GROUP BY expression [ , ... ] ; from item : { table name [ as alias ] field path } as alias : [ AS ] alias If you want to build a continuous materialized view SQL query as an asynchronous secondary index, use the ORDER BY clause: SELECT expression AS alias [ , ... ] FROM from item [ WHERE bool expression ] ORDER BY expression [ , ... ] ; from item : { table name [ as alias ] field path } as alias : [ AS ] alias Query limitations The following rules apply to a SQL query used to create a continuous materialized view: Must be a SELECT statement.
- What's next Create and manage continuous materialized views GoogleSQL for Bigtable reference documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you read this document, you should be familiar with Continuous materialized views and GoogleSQL for Bigtable .

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Secondary indexes You can use continuous materialized views as asynchronous secondary indexes for tables to query the same data using different lookup patterns or attributes.
- When the source table changes, Cassandra updates the materialized view automatically. continuous materialized view : a fully-managed, pre-computed result of a SQL query that is incrementally and automatically updated from a source table.
- You use Cassandra collection types, counters, or materialized views in addition to scalar types, which Bigtable is optimized for.
- For more information, see Continuous materialized views .

