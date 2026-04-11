---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.773Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE TABLE COPY statement"
feature_slug: "create-table-copy-statement"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "table copy operation"
  - "CREATE TABLE COPY statement"
  - "CREATE TABLE COPY syntax"
  - "COPY source table"
  - "CREATE TABLE COPY"
  - "table copy DDL"
  - "DDL CREATE TABLE"
---

# CREATE TABLE COPY statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Adds support for the CREATE TABLE COPY data definition statement in BigQuery.

## Extended Definition

Adds support for the CREATE TABLE COPY data definition statement in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Examples Example 1 The following example creates a new table named newtable in mydataset with the same metadata as sourcetable : CREATE TABLE mydataset . newtable LIKE mydataset . sourcetable Example 2 The following example creates a new table named newtable in mydataset with the same metadata as sourcetable and the data from the SELECT statement: CREATE TABLE mydataset . newtable LIKE mydataset . sourcetable AS SELECT FROM mydataset . myothertable CREATE TABLE COPY statement Creates a table that has the same metadata and data as another table.
- The CREATE TABLE COPY statement copies both the metadata and data from the source table.
- For example, with change data capture , when this option is set, the table copy operation is denied if data is more stale than the max staleness value. max staleness is disabled by default. enable fine grained mutations BOOL In preview .
- For example, with change data capture , when this option is set, the table copy operation is denied if data is more stale than the max staleness value. max staleness is disabled by default. enable fine grained mutations BOOL In preview .

