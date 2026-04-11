---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.875Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Parquet data loading"
feature_slug: "bigquery-parquet-data-loading"
latest_feature_date: "2018-06-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "Parquet data import"
  - "PARQUET file format"
  - "Parquet source table"
  - "load Parquet files"
  - "format = PARQUET"
  - "Apache Parquet"
  - "Parquet support"
---

# BigQuery Parquet data loading

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added Generally Available support for loading data in Parquet format.

## Extended Definition

BigQuery added Generally Available support for loading data in Parquet format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- AutoHivePartitionedTable WITH PARTITION COLUMNS OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); The following example creates an externally partitioned table by explicitly specifying the partition columns.
- CREATE OR REPLACE EXTERNAL TABLE mydataset . newtable ( x INT64 , y STRING , z BOOL ) WITH CONNECTION myconnection OPTIONS ( format = "PARQUET" , max staleness = STALENESS INTERVAL , metadata cache mode = 'AUTOMATIC' ); The following example creates an external table from multiple URIs.
- Example: file format=PARQUET The open-source file format in which the table data is stored.

