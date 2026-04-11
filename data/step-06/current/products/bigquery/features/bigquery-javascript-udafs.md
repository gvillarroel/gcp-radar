---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.553Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery JavaScript UDAFs"
feature_slug: "bigquery-javascript-udafs"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "JS UDAF"
  - "BIGQUERY JS AGGREGATE FUNCTION"
  - "JavaScript UDAF"
  - "BigQuery UDAF preview"
  - "JavaScript user-defined aggregate"
  - "JavaScript aggregate function"
  - "aggregate function preview"
  - "CREATE AGGREGATE FUNCTION"
---

# BigQuery JavaScript UDAFs

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery added support for JavaScript user-defined aggregate functions, which are created with CREATE AGGREGATE FUNCTION and currently in preview.

## Extended Definition

BigQuery JavaScript UDAFs are user-defined aggregate functions implemented in JavaScript and created via the `CREATE [OR REPLACE] [TEMP|TEMPORARY] AGGREGATE FUNCTION` statement in BigQuery SQL DDL. The syntax requires a function name/path, parameter list, return type, `LANGUAGE js`, and a raw-string JavaScript body, typically including `initialState`, `aggregate`, `merge`, and `finalize` logic. The provided excerpt does not state that this feature is in preview, so preview status cannot be confirmed from this source alone.

## Evidence Summary

The DDL reference page provides the explicit creation syntax and example body format for JavaScript UDAFs, establishing how BigQuery defines and declares them.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- SELECT ScaledSum ( col1 , 2 ) AS scaled sum FROM ( SELECT 1 AS col1 UNION ALL SELECT 3 AS col1 UNION ALL SELECT 5 AS col1 ); / ------------ scaled sum +------------+ 4.5 ------------ / CREATE AGGREGATE FUNCTION statement (JavaScript) Creates a new JavaScript user-defined aggregate function (UDAF).
- Syntax To create a JavaScript UDAF, use the following syntax: CREATE [ OR REPLACE ] [ { TEMPORARY TEMP } ] AGGREGATE FUNCTION [ IF NOT EXISTS ] function path ( [ function parameter [ , ... ] ] ) RETURNS return data type LANGUAGE js [ OPTIONS ( function option list ) ] AS function body function path : [[ project name . ] dataset name . ] function name function parameter : parameter name parameter data type [ NOT AGGREGATE ] Arguments OR REPLACE : Replaces any function with the same name if it exists.
- The JavaScript UDAF body is quoted within a raw string: CREATE TEMP AGGREGATE FUNCTION SumPositive ( x FLOAT64 ) RETURNS FLOAT64 LANGUAGE js AS r ' '' export function initialState() { return {sum: 0} } export function aggregate(state, x) { if (x > 0) { state.sum += x; } } export function merge(state, partialState) { state.sum += partialState.sum; } export function finalize(state) { return state.sum; } '' ' ; -- Call the JavaScript UDAF.
- CREATE FUNCTION mydataset . multiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 LANGUAGE python OPTIONS ( entry point = 'multiply' , runtime version = 'python-3.11' packages = [ 'pandas==2.2' ]) AS r """ import pandas as pd def multiply(df: pd.DataFrame): return df['x'] df['y'] """ ; CREATE AGGREGATE FUNCTION statement (SQL) Creates a new SQL user-defined aggregate function (UDAF).

