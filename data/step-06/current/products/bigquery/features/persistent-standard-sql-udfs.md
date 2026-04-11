---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.840Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Persistent standard SQL UDFs"
feature_slug: "persistent-standard-sql-udfs"
latest_feature_date: "2019-11-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "permanent UDF"
  - "persistent UDF"
  - "standard SQL persistent function"
  - "BigQuery SQL UDF"
  - "CREATE FUNCTION dataset.function"
  - "persistent SQL function"
  - "CREATE FUNCTION"
---

# Persistent standard SQL UDFs

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Persistent standard SQL user-defined functions are now generally available in BigQuery.

## Extended Definition

Persistent standard SQL user-defined functions are now generally available in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: STRONG
- Re-rank rationale: The documentation includes persistent SQL UDF syntax and behavior using CREATE FUNCTION, confirming persistent standard SQL UDF usage.

Evidence snippets:
- SQL UDFs The following example creates a temporary SQL UDF named AddFourAndDivide and calls the UDF from within a SELECT statement: CREATE TEMP FUNCTION AddFourAndDivide ( x INT64 , y INT64 ) RETURNS FLOAT64 AS ( ( x + 4 ) / y ); SELECT val , AddFourAndDivide ( val , 2 ) FROM UNNEST ( [ 2 , 3 , 5 , 8 ] ) AS val ; This example produces the following output: +-----+-----+ val f0 +-----+-----+ 2 3.0 3 3.5 5 4.5 8 6.0 +-----+-----+ The next example creates the same function as a persistent UDF: CREATE FUNCTION mydataset .
- To correct the error, include the project ID in the table reference: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project1 . mydataset . mytable ) ); You can also reference an entity in a different project or dataset from the one where you create the function: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project2 . another dataset . another table ) ); Use system variables with SQL UDFs The @@session id and @@location system variables are supported with SQL UDFs.
- For example, avoid the following pattern: -- Avoid this pattern CREATE FUNCTION temp . mutable () RETURNS INT64 LANGUAGE js AS r " "" var i = 0; // Mutable state function dontDoThis() { return ++i; } return dontDoThis() "" " ; Use memory efficiently The JavaScript processing environment has limited memory available per query.
- For example, consider the following statement: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM mydataset . mytable ) ); If you run this statement from project1 and mydataset.mytable exists in project1 , then the statement succeeds.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- CREATE FUNCTION mydataset . multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 LANGUAGE python OPTIONS ( entry point = 'multiply' , runtime version = 'python-3.11' packages = [ 'pandas==2.2' ]) AS r """ import pandas as pd def multiply(df: pd.DataFrame): return df['x'] df['y'] """ ; CREATE AGGREGATE FUNCTION statement (SQL) Creates a new SQL user-defined aggregate function (UDAF).
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- CREATE FUNCTION mydataset . remoteMultiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 REMOTE WITH CONNECTION us . myconnection OPTIONS ( endpoint = "https://us-central1-myproject.cloudfunctions.net/multiply" ); Create a Python UDF The following example creates a Python UDF named multiplyInputs .
- You can reuse persistent UDFs across multiple queries, whereas you can only use temporary UDFs in a single query, script, session, or procedure. project name : For persistent functions, the name of the project where you are creating the function.

