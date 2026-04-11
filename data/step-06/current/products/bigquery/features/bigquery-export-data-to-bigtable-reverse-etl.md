---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.495Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery EXPORT DATA to Bigtable reverse ETL"
feature_slug: "bigquery-export-data-to-bigtable-reverse-etl"
latest_feature_date: "2024-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "Bigtable sink"
  - "BigQuery-to-Bigtable export"
  - "BigQuery reverse ETL"
  - "EXPORT DATA TO BIGTABLE"
  - "Bigtable destination"
  - "write to Bigtable"
  - "EXPORT DATA statement"
  - "query results export"
---

# BigQuery EXPORT DATA to Bigtable reverse ETL

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery EXPORT DATA statements can now write directly to Bigtable for reverse ETL scenarios.

## Extended Definition

BigQuery’s exporting feature set includes a Bigtable destination, meaning query or table export workflows can write output directly to Cloud Bigtable. The docs page lists “Export to Bigtable” alongside other export targets under the Export Data functionality and describes guidance for EXPORT DATA statements (such as ordering behavior and LIMIT recommendations). The provided excerpts do not explicitly use the term “reverse ETL,” but the documented destination implies BigQuery-to-Bigtable output export capability.

## Evidence Summary

The page shows Bigtable as an available export target in BigQuery’s export docs and provides behavior notes for EXPORT DATA statements that apply to data extraction flows.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

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

