---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.848Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Persistent BigQuery UDFs"
feature_slug: "persistent-bigquery-udfs"
latest_feature_date: "2019-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "permanent UDF"
  - "dataset-scoped function"
  - "persistent SQL UDF"
  - "persistent user-defined function"
  - "persistent UDF"
  - "CREATE OR REPLACE FUNCTION"
  - "stored UDF"
  - "CREATE FUNCTION"
---

# Persistent BigQuery UDFs

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports persistent user-defined functions (UDFs).

## Extended Definition

BigQuery now supports persistent user-defined functions (UDFs).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly differentiates persistent UDFs from temporary UDFs and explains creation, reuse, and scoping behavior.

Evidence snippets:
- SQL UDFs The following example creates a temporary SQL UDF named AddFourAndDivide and calls the UDF from within a SELECT statement: CREATE TEMP FUNCTION AddFourAndDivide ( x INT64 , y INT64 ) RETURNS FLOAT64 AS ( ( x + 4 ) / y ); SELECT val , AddFourAndDivide ( val , 2 ) FROM UNNEST ( [ 2 , 3 , 5 , 8 ] ) AS val ; This example produces the following output: +-----+-----+ val f0 +-----+-----+ 2 3.0 3 3.5 5 4.5 8 6.0 +-----+-----+ The next example creates the same function as a persistent UDF: CREATE FUNCTION mydataset .
- The following limitations apply to persistent user-defined functions: Each dataset can only contain one persistent UDF with the same name.
- REGEXP REPLACE ( ssn , '[0-9]' , 'X' ) # 123-45-6789 -> XXX-XX-XXXX ); The following example hashes with user provided salt , using the SHA256 function: CREATE OR REPLACE FUNCTION project .dataset.masking routine1 ( ssn STRING ) RETURNS STRING OPTIONS ( data governance type = 'DATA MASKING' ) AS ( CAST ( SHA256 ( CONCAT ( ssn , ' salt ' )) AS STRING format 'HEX' ) ); The following example masks a DATETIME column with a constant value: CREATE OR REPLACE FUNCTION project .dataset.masking routine2 ( column DATETIME ) RETURNS DATETIME OPTIONS ( data governance type = 'DATA MASKING' ) AS ( SAFE CAST ( '2023-09-07' AS DATETIME ) ); As a best practise, use the SAFE prefix wherever possible to avoid exposing raw data through error messages.
- To correct the error, include the project ID in the table reference: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project1 . mydataset . mytable ) ); You can also reference an entity in a different project or dataset from the one where you create the function: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project2 . another dataset . another table ) ); Use system variables with SQL UDFs The @@session id and @@location system variables are supported with SQL UDFs.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- CREATE [ OR REPLACE ] FUNCTION [ IF NOT EXISTS ] [ project name .] dataset name . function name ([ named parameter [, ...]]) RETURNS data type LANGUAGE python [ WITH CONNECTION connection path ] OPTIONS ( function option list ) AS python code named parameter : param name param type To create a remote function, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) RETURNS data type REMOTE WITH CONNECTION connection path [ OPTIONS ( function option list ) ] named parameter : param name param type Routine names must contain only letters, numbers, and underscores, and be at most 256 characters long.
- CREATE FUNCTION mydataset . multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 LANGUAGE python OPTIONS ( entry point = 'multiply' , runtime version = 'python-3.11' packages = [ 'pandas==2.2' ]) AS r """ import pandas as pd def multiply(df: pd.DataFrame): return df['x'] df['y'] """ ; CREATE AGGREGATE FUNCTION statement (SQL) Creates a new SQL user-defined aggregate function (UDAF).
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- CREATE FUNCTION mydataset . remoteMultiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 REMOTE WITH CONNECTION us . myconnection OPTIONS ( endpoint = "https://us-central1-myproject.cloudfunctions.net/multiply" ); Create a Python UDF The following example creates a Python UDF named multiplyInputs .

