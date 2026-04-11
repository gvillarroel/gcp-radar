---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.666Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery table cloning"
feature_slug: "bigquery-table-cloning"
latest_feature_date: "2023-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "zero-copy table clone"
  - "zero-copy clone"
  - "table clone operation"
  - "CREATE TABLE CLONE"
  - "CREATE TABLE clone"
  - "table cloning"
  - "clone table"
  - "metadata-only table copy"
---

# BigQuery table cloning

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery introduced generally available table cloning for fast, metadata-only table copies.

## Extended Definition

BigQuery table cloning is implemented via the SQL DDL statement `CREATE TABLE ... CLONE`, which creates a new table from a source table. The referenced documentation states that `CREATE TABLE CLONE` must follow the rule of only one CREATE statement being used and that clone statement options are the same as standard `CREATE TABLE` options.

## Evidence Summary

The cited BigQuery DDL reference documents the existence and syntax constraints of `CREATE TABLE CLONE` and confirms it creates a table based on a source table while reusing `CREATE TABLE` option semantics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE CLONE statements must comply with the following rules: Only one CREATE statement is allowed.
- CREATE TABLE CLONE statement Creates a table clone based on a source table.
- For information about restoring table snapshots, see CREATE TABLE CLONE .
- OPTIONS CREATE TABLE CLONE options are the same as CREATE TABLE options .

