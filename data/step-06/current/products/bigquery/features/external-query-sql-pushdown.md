---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.657Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "EXTERNAL_QUERY SQL pushdown"
feature_slug: "external-query-sql-pushdown"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries"
keywords:
  - "filter predicate pushdown"
  - "column pruning pushdown"
  - "external query pushdown"
  - "EXTERNAL_QUERY pushdown"
  - "Cloud Spanner external queries"
  - "SQL pushdown"
  - "Cloud SQL external queries"
  - "EXTERNAL_QUERY"
---

# EXTERNAL_QUERY SQL pushdown

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery's EXTERNAL_QUERY federation now pushes down column selection and filters to external sources like Cloud SQL or Cloud Spanner to reduce data transfer, execution time, and cost; BigQuery's EXTERNAL_QUERY federation now supports SQL pushdown for column pruning and filter predicates when querying external databases.

## Extended Definition

EXTERNAL_QUERY is a BigQuery table-valued function used to run a SQL statement in an external AlloyDB database and return the results to BigQuery, where they can be combined with BigQuery tables (for example via JOIN). The provided excerpts show usage for querying AlloyDB data and metadata through `information_schema`, but they do not provide explicit evidence that column-pruning or filter-predicate pushdown is guaranteed.

## Evidence Summary

The cited BigQuery AlloyDB federated queries page provides syntax and example usage of EXTERNAL_QUERY plus metadata/error behavior, but does not clearly document SQL pushdown (column or predicate pruning) details.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)

## Supporting Pages

### AlloyDB federated queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions EXTERNAL QUERY usage, but does not describe column/filter pushdown behavior.

Evidence snippets:
- SELECT c . customer id , c . name , rq . first order date FROM mydataset . customers AS c LEFT OUTER JOIN EXTERNAL QUERY ( 'us.connection id' , ' '' SELECT customer id, MIN(order date) AS first order date FROM orders GROUP BY customer id '' ' ) AS rq ON rq . customer id = c . customer id GROUP BY c . customer id , c . name , rq . first order date ; View an AlloyDB table schema You can use the EXTERNAL QUERY function to query information schema tables to access database metadata.
- SELECT FROM EXTERNAL QUERY ( "region.connection id" , "select from information schema.columns where table name='x';" ); Track BigQuery federated queries When you run a federated query against AlloyDB, BigQuery annotates the query with a comment similar to the following: / Federated query from BigQuery.
- The example query includes 3 parts: Run the external query SELECT customer id, MIN(order date) AS first order date FROM orders GROUP BY customer id in the AlloyDB database to get the first order date for each customer through the EXTERNAL QUERY function.
- Issue: Failed to connect to the database server with this error: Invalid table-valued function EXTERNAL QUERY Connect to PostgreSQL server failed: server closed the connection unexpectedly.

