---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.559Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "User-defined aggregate functions with SQL expressions"
feature_slug: "user-defined-aggregate-functions-with-sql-expressions"
latest_feature_date: "2024-04-24"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "SQL UDAF"
  - "UDAF"
  - "user-defined aggregate function"
  - "aggregate function definition"
  - "aggregate UDF"
  - "CREATE AGGREGATE FUNCTION"
  - "SQL expression support"
---

# User-defined aggregate functions with SQL expressions

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery added user-defined aggregate functions (UDAFs) that support SQL expressions via CREATE AGGREGATE FUNCTION.

## Extended Definition

BigQuery supports SQL user-defined aggregate functions (UDAFs) through the `CREATE AGGREGATE FUNCTION` statement. In the SQL form, a function is created with optional `OR REPLACE`/`TEMPORARY`, a function path and parameters, and an `AS (sql function body)` clause that defines the aggregate logic, with an optional `RETURNS` data type. The feature includes both creating and calling persistent SQL UDAFs in queries.

## Evidence Summary

The DDL reference provides the formal SQL UDAF creation syntax and usage examples, while the release notes confirm the `CREATE AGGREGATE FUNCTION` feature for SQL UDAFs is a documented BigQuery capability.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- CREATE FUNCTION mydataset . multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 LANGUAGE python OPTIONS ( entry point = 'multiply' , runtime version = 'python-3.11' packages = [ 'pandas==2.2' ]) AS r """ import pandas as pd def multiply(df: pd.DataFrame): return df['x'] df['y'] """ ; CREATE AGGREGATE FUNCTION statement (SQL) Creates a new SQL user-defined aggregate function (UDAF).
- SELECT ScaledSum ( col1 , 2 ) AS scaled sum FROM ( SELECT 1 AS col1 UNION ALL SELECT 3 AS col1 UNION ALL SELECT 5 AS col1 ); / ------------ scaled sum +------------+ 4.5 ------------ / CREATE AGGREGATE FUNCTION statement (JavaScript) Creates a new JavaScript user-defined aggregate function (UDAF).
- Syntax To create a SQL UDAF, use the following syntax: CREATE [ OR REPLACE ] [ { TEMPORARY TEMP } ] AGGREGATE FUNCTION [ IF NOT EXISTS ] function path ( [ function parameter [ , ... ] ] ) [ RETURNS data type ] AS ( sql function body ) [ OPTIONS ( function option list ) ] function path : [[ project name . ] dataset name . ] function name function parameter : parameter name data type [ NOT AGGREGATE ] Arguments OR REPLACE : Replaces any function with the same name if it exists.
- Examples Create and call a SQL UDAF The following example shows a persistent SQL UDAF that includes a non-aggregate function parameter.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- February 06, 2025 Feature You can create a JavaScript user-defined aggregate function by using the CREATE AGGREGATE FUNCTION statement .
- Feature You can create a SQL user-defined aggregate function by using the CREATE AGGREGATE FUNCTION statement .

