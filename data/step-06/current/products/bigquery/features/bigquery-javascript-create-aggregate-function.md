---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.455Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery JavaScript CREATE AGGREGATE FUNCTION"
feature_slug: "bigquery-javascript-create-aggregate-function"
latest_feature_date: "2025-02-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "JS aggregate UDF"
  - "BigQuery JavaScript UDF"
  - "JavaScript aggregate function"
  - "aggregate UDF syntax"
  - "CREATE AGGREGATE FUNCTION syntax"
  - "user-defined aggregate function"
  - "CREATE AGGREGATE FUNCTION"
  - "CREATE FUNCTION statement"
---

# BigQuery JavaScript CREATE AGGREGATE FUNCTION

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports creating JavaScript user-defined aggregate functions with the CREATE AGGREGATE FUNCTION statement.

## Extended Definition

BigQuery supports creating user-defined aggregate functions (UDAFs) with the `CREATE AGGREGATE FUNCTION` SQL statement in GoogleSQL DDL. This feature specifically adds support for JavaScript user-defined aggregate functions, allowing JavaScript UDAFs to be defined via `CREATE AGGREGATE FUNCTION`, as announced in the February 6, 2025 release notes.

## Evidence Summary

The DDL reference documents `CREATE AGGREGATE FUNCTION` as creating SQL/JavaScript UDAFs, and the release notes confirm JavaScript UDAF support was added on February 6, 2025.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- CREATE FUNCTION mydataset . multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 LANGUAGE python OPTIONS ( entry point = 'multiply' , runtime version = 'python-3.11' packages = [ 'pandas==2.2' ]) AS r """ import pandas as pd def multiply(df: pd.DataFrame): return df['x'] df['y'] """ ; CREATE AGGREGATE FUNCTION statement (SQL) Creates a new SQL user-defined aggregate function (UDAF).
- SELECT ScaledSum ( col1 , 2 ) AS scaled sum FROM ( SELECT 1 AS col1 UNION ALL SELECT 3 AS col1 UNION ALL SELECT 5 AS col1 ); / ------------ scaled sum +------------+ 4.5 ------------ / CREATE AGGREGATE FUNCTION statement (JavaScript) Creates a new JavaScript user-defined aggregate function (UDAF).
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- DROP FUNCTION statement Deletes a persistent user-defined function (UDF) or user-defined aggregate function (UDAF).

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- February 06, 2025 Feature You can create a JavaScript user-defined aggregate function by using the CREATE AGGREGATE FUNCTION statement .
- Feature You can create a SQL user-defined aggregate function by using the CREATE AGGREGATE FUNCTION statement .

