---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.651Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TRUNCATE TABLE in multi-statement transactions"
feature_slug: "truncate-table-in-multi-statement-transactions"
latest_feature_date: "2023-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
keywords:
  - "BEGIN and COMMIT"
  - "transactional truncate"
  - "TRUNCATE TABLE in transaction"
  - "truncate in transaction"
  - "transactional DDL"
  - "multi-statement transaction"
  - "TRUNCATE TABLE"
  - "multi-statement query"
---

# TRUNCATE TABLE in multi-statement transactions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the TRUNCATE TABLE statement within multi-statement transactions.

## Extended Definition

BigQuery’s GoogleSQL DML docs define `TRUNCATE TABLE` as a statement that removes all rows from a table while preserving table metadata (such as schema, description, and labels). The provided excerpts confirm the statement’s behavior, but they do not explicitly confirm execution inside `BEGIN`/`COMMIT` multi-statement transactions.

## Evidence Summary

The cited BigQuery DML reference documents the `TRUNCATE TABLE` statement and its row-removal semantics, but the supplied excerpt does not provide explicit evidence that this statement is supported specifically within multi-statement transactions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)

## Supporting Pages

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- NewArrivals WHERE Inventory . product = NewArrivals . product ) TRUNCATE TABLE statement The TRUNCATE TABLE statement removes all rows from a table but leaves the table metadata intact, including the table schema, description, and labels.
- TRUNCATE TABLE [[ project name .] dataset name .] table name Where: project name is the name of the project containing the table.
- DELETE [ FROM ] target name [ alias ] WHERE condition To delete all rows in a table, use the TRUNCATE TABLE statement.
- TRUNCATE TABLE examples The following example removes all rows from the table named Inventory .

