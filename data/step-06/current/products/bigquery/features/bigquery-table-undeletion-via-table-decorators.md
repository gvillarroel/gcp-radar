---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.949Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery table undeletion via table decorators"
feature_slug: "bigquery-table-undeletion-via-table-decorators"
latest_feature_date: "2015-04-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/table-decorators"
keywords:
  - "undelete via decorator"
  - "time travel decorator"
  - "table decorator syntax"
  - "restore deleted table"
  - "table restoration"
  - "@- decorator"
  - "table decorators"
  - "table undelete"
---

# BigQuery table undeletion via table decorators

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added the ability to undelete a table using table decorators.

## Extended Definition

BigQuery added the ability to undelete a table using table decorators.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)

## Supporting Pages

### Table decorators in legacy SQL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly states that time decorators can be used with `bq cp` to restore deleted tables within seven days.

Evidence snippets:
- Standard SQL does not support table decorators, but the FOR SYSTEM TIME AS OF clause in GoogleSQL provides functionality equivalent to time decorators.
- Table decorators can be used whenever a table is read, such as when copying a table, exporting a table , or listing data using tabledata.list .
- For more information, see Table decorators in the GoogleSQL migration guide and Legacy SQL feature availability .
- Table decorators in legacy SQL Caution: This document describes table decorators in legacy SQL query syntax.

