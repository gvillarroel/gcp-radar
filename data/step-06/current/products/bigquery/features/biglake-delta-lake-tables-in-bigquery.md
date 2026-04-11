---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.488Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigLake Delta Lake tables in BigQuery"
feature_slug: "biglake-delta-lake-tables-in-bigquery"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "Delta Lake in BigQuery"
  - "Delta Lake table"
  - "federated Delta source"
  - "external Delta table"
  - "Delta table metadata"
  - "BigLake Delta"
  - "Delta tables"
  - "BigLake table"
---

# BigLake Delta Lake tables in BigQuery

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports Delta Lake BigLake tables for petabyte-scale tabular data storage.

## Extended Definition

BigQuery BigLake tables are defined as external table constructs (via SQL DDL or bq CLI table definitions) that can reference data outside BigQuery, including object storage such as Amazon S3 and Cloud Storage, and they can use formats like AVRO, CSV, JSON, ICEBERG, ORC, and PARQUET. The provided excerpts do not explicitly describe a dedicated "BigLake Delta Lake table" workflow or Delta Lake-specific metadata handling, so evidence for that specific feature is not directly established in these pages.

## Evidence Summary

These pages provide evidence that BigQuery supports external BigLake tables and supported source formats, but they do not explicitly document Delta Lake table integration or Delta-specific BigLake features.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TEMP TABLE Example ( x INT64 , y STRING ); INSERT INTO Example VALUES ( 5 , 'foo' ); INSERT INTO Example VALUES ( 6 , 'bar' ); SELECT FROM Example ; This script returns the following output: +-----+---+-----+ Row x y +-----+--- -----+ 1 5 foo 2 6 bar +-----+--- -----+ Load data across clouds Example 1 Suppose you have a BigLake table named myawsdataset.orders that references data from Amazon S3 .
- The source materialized view must be over an Amazon S3 BigLake table, and must be authorized on the dataset that contains that table. materialized view replica option list The option list lets you set materialized view replica options.
- Applies to: CSV, JSON, and Google Sheets data. max staleness INTERVAL Applicable for BigLake tables and object tables .
- The source materialized view must be over an Amazon Simple Storage Service (Amazon S3) BigLake table.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For example: --external table definition=/tmp/tabledef --external table definition=Region:STRING,Quarter:STRING,Total sales:INTEGER@CSV=gs://mybucket/sales.csv For Bigtable external tables , and BigLake tables based on AWS and Azure : --external table definition= PATH TO FILE The value must be a path to a file containing a table definition .
- CONNECTION NAME : The FORMAT value specifies the data format; one of the following: AVRO CSV NEWLINE DELIMITED JSON ICEBERG ORC PARQUET BUCKET PATH is the path to one or more files in Cloud Storage that contain the BigLake table data.
- For BigLake tables based on Cloud Storage : --external table definition= FORMAT = BUCKET PATH @ REGION .
- You can use wildcards to limit the files included in the BigLake table.

