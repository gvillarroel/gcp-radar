---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.803Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DROP EXTERNAL TABLE statement"
feature_slug: "bigquery-drop-external-table-statement"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "remove external table"
  - "DROP EXTERNAL TABLE statement"
  - "DROP EXTERNAL TABLE syntax"
  - "external table deletion"
  - "drop external tables"
  - "DROP EXTERNAL TABLE"
  - "drop external table"
---

# BigQuery DROP EXTERNAL TABLE statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports the DROP EXTERNAL TABLE statement.

## Extended Definition

BigQuery now supports the DROP EXTERNAL TABLE statement.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- DROP EXTERNAL TABLE statement Deletes an external table.
- Syntax DROP EXTERNAL TABLE [ IF EXISTS ] table name Arguments IF EXISTS : If no external table exists with that name, then the statement has no effect. table name : The name of the external table to delete.
- DROP EXTERNAL TABLE mydataset . external table The following example drops the external table named external table from the dataset mydataset .
- DROP EXTERNAL TABLE IF EXISTS mydataset . external table DROP VIEW statement Deletes a view.

