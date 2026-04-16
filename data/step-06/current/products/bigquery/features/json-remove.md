---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.575Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON_REMOVE"
feature_slug: "json-remove"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/auditlogs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "json"
  - "remove"
  - "produces"
  - "specified"
  - "removed"
---

# JSON_REMOVE

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

JSON_REMOVE produces JSON with specified JSON data removed.

## Extended Definition

JSON_REMOVE produces JSON with specified JSON data removed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- SELECT JSON QUERY ARRAY ( '{"a": "foo", "b": []}' , '$.b' ) AS result ; / --------+ result +--------+ [] +-------- / JSON REMOVE JSON REMOVE ( json expr , json path [ , ... ] ) Produces a new SQL JSON value with the specified JSON data removed.
- JSON REMOVE Produces JSON with the specified JSON data removed.
- SELECT JSON REMOVE ( JSON 'null' , '$.a.b' ) AS json data / -----------+ json data +-----------+ null +----------- / JSON SET JSON SET ( json expr , json path value pair [ , ... ] [ , create if missing = > { TRUE FALSE } ] ) json path value pair : json path , value Produces a new SQL JSON value with the specified JSON data inserted or replaced.
- For example: SELECT JSON VALUE ( '{"hello": "world"' , "$.hello" ) AS hello ; / -------+ hello +-------+ world +------- / SELECT JSON VALUE ( JSON '{"hello": "world"' , "$.hello" ) AS hello ; -- An error is returned: Invalid JSON literal: syntax error while parsing -- object - unexpected end of input; expected '}' No strict validation of extracted values In the following examples, duplicated keys aren't removed when using a JSON-formatted string.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Syntax: '{ "differential privacy policy": { "privacy unit column": value, "max epsilon per query": value, "epsilon budget": value, "delta per query": value, "delta budget": value, "max groups contributed": value } }' Parameters: differential privacy policy : The differential privacy policy for the view. privacy unit column : The column that represents the privacy unit column for differentially private queries on the view. value is a JSON string. max epsilon per query : The maximum amount of epsilon that can be specified for a differentially private query on the view. value is a JSON number from 0.001 to 1e+15. epsilon budget : The amount of epsilon that can be used in totality for all differentially private queries on the view. value is JSON number from 0.001 to 1e+15. delta per query : The maximum amount of delta that can be specified for a differentially private query on the view. value is a JSON number from 1e-15 to 1. delta budget : The amount of delta that can be used in totality for all differentially private queries on the view.
- See Table path syntax . (ALTER COLUMN) IF EXISTS : If the specified column does not exist, the statement has no effect. column name : The name of the top-level column to remove the default value from.
- The statement fails if ivf options is specified and index type is not IVF . tree ah options JSON-formatted STRING The options to use with the TREE AH algorithm.
- If not specified, BigQuery reads the data as generic JSON records.

### BigQuery audit logs overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/auditlogs](https://docs.cloud.google.com/bigquery/docs/reference/auditlogs)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The following sample query shows when these messages occur and includes a URI that references the table resource that was removed. standardSQL SELECT protopayload auditlog . resourceName AS resourceName , receiveTimestamp as logTime FROM my - project - id . auditlog dataset . cloudaudit googleapis com system event WHERE protopayload auditlog . methodName = 'InternalTableExpired' ORDER BY resourceName Example: Most popular datasets This query shows coarse, per-dataset statistics about table reads and table modifications.
- System event (system event) You can set an expiration time on tables to remove them at a specified time.
- The system event stream reports a TableDeletion event when the table expires and is removed.
- Before you run this example, define a log sink with an existing dataset. standardSQL SELECT REGEXP EXTRACT ( protopayload auditlog . resourceName , '^projects/[^/]+/datasets/([^/]+)/tables' ) AS datasetRef , COUNT ( DISTINCT REGEXP EXTRACT ( protopayload auditlog . resourceName , '^projects/[^/]+/datasets/[^/]+/tables/(. )$' )) AS active tables , COUNTIF ( JSON QUERY ( protopayload auditlog . metadataJson , "$.tableDataRead" ) IS NOT NULL ) AS dataReadEvents , COUNTIF ( JSON QUERY ( protopayload auditlog . metadataJson , "$.tableDataChange" ) IS NOT NULL ) AS dataChangeEvents FROM my - project - id . auditlog dataset . cloudaudit googleapis com data access WHERE JSON QUERY ( protopayload auditlog . metadataJson , "$.tableDataRead" ) IS NOT NULL OR JSON QUERY ( protopayload auditlog . metadataJson , "$.tableDataChange" ) IS NOT NULL GROUP BY datasetRef ORDER BY datasetRef Troubleshooting This section shows you how to resolve issues with BigQuery audit logs.

