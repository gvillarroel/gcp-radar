---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.518Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery federated query for AlloyDB"
feature_slug: "bigquery-federated-query-for-alloydb"
latest_feature_date: "2024-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "AlloyDB connection"
  - "AlloyDB federation"
  - "BigQuery to AlloyDB"
  - "AlloyDB"
  - "BigQuery federated query"
  - "federated queries"
  - "federated query"
  - "EXTERNAL_QUERY"
---

# BigQuery federated query for AlloyDB

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports preview federated queries against AlloyDB data.

## Extended Definition

BigQuery federated query for AlloyDB allows a GoogleSQL query to access AlloyDB data by using the EXTERNAL_QUERY function with an AlloyDB connection identifier. The feature executes AlloyDB SQL through that function, including metadata queries (for example, information schema access), and returns results that can be used in BigQuery queries such as joins; BigQuery marks such executed federated queries with a federated-query comment.

## Evidence Summary

The AlloyDB-specific BigQuery page provides direct usage evidence for EXTERNAL_QUERY-based federation with AlloyDB, while the other pages provide only general BigQuery federated-query context and do not supply AlloyDB-specific lifecycle or regional constraints.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### AlloyDB federated queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about querying AlloyDB from BigQuery via federated queries using EXTERNAL QUERY.

Evidence snippets:
- SELECT FROM EXTERNAL QUERY ( "region.connection id" , "select from information schema.columns where table name='x';" ); Track BigQuery federated queries When you run a federated query against AlloyDB, BigQuery annotates the query with a comment similar to the following: / Federated query from BigQuery.
- Query data To send a federated query to AlloyDB from a GoogleSQL query, use the EXTERNAL QUERY function .
- SELECT c . customer id , c . name , rq . first order date FROM mydataset . customers AS c LEFT OUTER JOIN EXTERNAL QUERY ( 'us.connection id' , ' '' SELECT customer id, MIN(order date) AS first order date FROM orders GROUP BY customer id '' ' ) AS rq ON rq . customer id = c . customer id GROUP BY c . customer id , c . name , rq . first order date ; View an AlloyDB table schema You can use the EXTERNAL QUERY function to query information schema tables to access database metadata.
- The example query includes 3 parts: Run the external query SELECT customer id, MIN(order date) AS first order date FROM orders GROUP BY customer id in the AlloyDB database to get the first order date for each customer through the EXTERNAL QUERY function.

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL When you query data in Cloud SQL through a BigQuery federated query , your Cloud SQL instance must be in the same location as your BigQuery dataset.
- Spanner When you query data in Spanner through a BigQuery federated query , your Spanner instance must be in the same location as your BigQuery dataset.
- Multi-region bucket : Using multi-region dataset locations with multi-region Cloud Storage buckets is not recommended for external tables, because external query performance depends on minimal latency and optimal network bandwidth.
- Multi-region: Because external query performance depends on minimal latency and optimal network bandwidth, using multi-region dataset locations is not recommended for external tables on Bigtable.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- September 22, 2025 Libraries Python 3.38.0 (2025-09-15) Features Add additional query stats ( #2270 ) ( 7b1b718 ) Feature You can now run federated queries against PostgreSQL dialect databases in Spanner using BigQuery external datasets with GoogleSQL; this includes cross-region federated queries .
- Feature Spanner now supports cross regional federated queries from BigQuery which allow BigQuery users to query Spanner tables from regions other than their BigQuery region.
- August 14, 2025 Feature You can use cross region federated queries to query Spanner tables from regions other than the source BigQuery region.

