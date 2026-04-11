---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.453Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SQL CREATE AGGREGATE FUNCTION"
feature_slug: "bigquery-sql-create-aggregate-function"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "CREATE AGGREGATE FUNC"
  - "persistent aggregate UDF"
  - "aggregate UDF"
  - "aggregate function statement"
  - "SQL user-defined aggregate"
  - "CREATE AGGREGATE FUNCTION"
  - "CREATE FUNCTION aggregate"
---

# BigQuery SQL CREATE AGGREGATE FUNCTION

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now lets users define SQL user-defined aggregate functions using the CREATE AGGREGATE FUNCTION statement.

## Extended Definition

CREATE AGGREGATE FUNCTION is a BigQuery SQL Data Definition Language statement that creates a user-defined aggregate function (UDAF) for use in queries. The BigQuery DDL reference explicitly states it creates a new SQL user-defined aggregate function, and also documents creation of JavaScript aggregate UDFs with the same statement type.

## Evidence Summary

The DDL reference defines CREATE AGGREGATE FUNCTION semantics, while release notes confirm feature availability for creating SQL (and JavaScript) user-defined aggregate functions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- CREATE FUNCTION mydataset . multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 LANGUAGE python OPTIONS ( entry point = 'multiply' , runtime version = 'python-3.11' packages = [ 'pandas==2.2' ]) AS r """ import pandas as pd def multiply(df: pd.DataFrame): return df['x'] df['y'] """ ; CREATE AGGREGATE FUNCTION statement (SQL) Creates a new SQL user-defined aggregate function (UDAF).
- SELECT ScaledSum ( col1 , 2 ) AS scaled sum FROM ( SELECT 1 AS col1 UNION ALL SELECT 3 AS col1 UNION ALL SELECT 5 AS col1 ); / ------------ scaled sum +------------+ 4.5 ------------ / CREATE AGGREGATE FUNCTION statement (JavaScript) Creates a new JavaScript user-defined aggregate function (UDAF).
- CREATE AGGREGATE FUNCTION myProject . myDataset .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can create a SQL user-defined aggregate function by using the CREATE AGGREGATE FUNCTION statement .
- February 06, 2025 Feature You can create a JavaScript user-defined aggregate function by using the CREATE AGGREGATE FUNCTION statement .

