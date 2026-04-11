---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.490Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery federated querying of AlloyDB"
feature_slug: "bigquery-federated-querying-of-alloydb"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/alloydb-federated-queries"
  - "https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries"
keywords:
  - "BigQuery-AlloyDB federation"
  - "AlloyDB connection"
  - "external AlloyDB source"
  - "AlloyDB federation"
  - "remote AlloyDB query"
  - "query AlloyDB"
  - "federated query"
---

# BigQuery federated querying of AlloyDB

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports querying AlloyDB data directly through federated queries.

## Extended Definition

BigQuery AlloyDB federation is a feature that allows BigQuery to run federated queries directly against data in AlloyDB, including using `SELECT FROM EXTERNAL QUERY (<connection>, <query>)` syntax, instead of copying or moving the source data. It enables real-time querying of AlloyDB data from BigQuery and marks query execution with a distinctive annotation indicating it is a federated query from BigQuery, which can be used for log discovery in AlloyDB logs.

## Evidence Summary

The cited documentation page defines AlloyDB federation in BigQuery, shows the required `EXTERNAL QUERY` usage pattern, and states that queries run in real time without copying data while producing identifiable federated-query log annotations.

## Source Links

- [https://cloud.google.com/bigquery/docs/alloydb-federated-queries](https://cloud.google.com/bigquery/docs/alloydb-federated-queries)
- [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)

## Supporting Pages

### AlloyDB federated queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- Source ID: `site-docs-root-2`
- Final score: 60
- Re-rank relevance: STRONG
- Re-rank rationale: It directly explains how to run external queries against AlloyDB tables and metadata from BigQuery.

Evidence snippets:
- BigQuery AlloyDB federation lets BigQuery query data residing in AlloyDB in real time without copying or moving the data.
- SELECT FROM EXTERNAL QUERY ( "region.connection id" , "select from information schema.columns where table name='x';" ); Track BigQuery federated queries When you run a federated query against AlloyDB, BigQuery annotates the query with a comment similar to the following: / Federated query from BigQuery.
- Project ID: PROJECT ID , BigQuery Job ID: JOB ID / YYYY-MM-DD hh:mm:ss.millis UTC [3210532]: [2-1] db= DATABASE , user= USER ACCOUNT STATEMENT: SELECT "company id", "company type id" FROM (SELECT FROM company name table) t; / Federated query from BigQuery.
- Go to the Logs Explorer In the Query tab, enter the following query: resource.type="alloydb.googleapis.com/Instance" textPayload= "Federated query from BigQuery" Click Run query .

