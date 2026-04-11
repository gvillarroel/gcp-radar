---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.507Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery reverse ETL via EXPORT DATA to Spanner"
feature_slug: "bigquery-reverse-etl-via-export-data-to-spanner"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "Spanner reverse ETL"
  - "BigQuery reverse ETL"
  - "write query results to Spanner"
  - "EXPORT DATA to Cloud Spanner"
  - "BigQuery to Spanner export"
  - "BigQuery Spanner export"
  - "EXPORT DATA statement"
---

# BigQuery reverse ETL via EXPORT DATA to Spanner

Product: BigQuery
Coverage: LOW

## Step 02 Summary

You can use BigQuery EXPORT DATA statements to run reverse ETL workflows that write BigQuery data to Cloud Spanner.

## Extended Definition

The feature is described as using BigQuery's `EXPORT DATA` statement to extract query results from BigQuery for downstream use in reverse ETL workflows. Available evidence confirms behavior of `EXPORT DATA` for exporting table/query output and controlling output ordering and destination handling, but it does not explicitly document Cloud Spanner as a supported target in the provided excerpt. So, confirmation of a BigQuery-to-Spanner reverse ETL path is not supported by the cited text alone.

## Evidence Summary

The cited documentation explains `EXPORT DATA` semantics and limitations for BigQuery extraction, including ordering and destination URI behavior, but does not provide explicit evidence of Spanner as an `EXPORT DATA` destination in the provided snippet.

## Source Links

- [https://cloud.google.com/bigquery/docs/exporting-data](https://cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to create a new processed table from an existing table called source table which requires n partitions to achieve the chosen file size: CREATE TABLE my dataset . processed table PARTITION BY RANGE BUCKET ( export id , GENERATE ARRAY ( 0 , n , 1 )) CLUSTER BY export id AS ( SELECT , CAST ( FLOOR ( n RAND ()) AS INT64 ) AS export id FROM my dataset . source table ); For each integer i between 0 and n-1 , run an EXPORT DATA statement on the following query: SELECT EXCEPT ( export id ) FROM my dataset . processed table WHERE export id = i ; Extract compressed table Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- For this reason, we don't recommend using LIMIT clauses in EXPORT DATA statements. bq Use the bq extract command with the --destination format flag. (Optional) Supply the --location flag and set the value to your location .
- The order of exported table data is not guaranteed unless you use the EXPORT DATA statement and specify an ORDER BY clause in the query statement .
- This option is not supported for the EXPORT DATA statement ; you must use a single wildcard URI.

