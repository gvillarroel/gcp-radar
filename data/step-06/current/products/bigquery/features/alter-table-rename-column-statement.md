---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.723Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER TABLE RENAME COLUMN statement"
feature_slug: "alter-table-rename-column-statement"
latest_feature_date: "2022-08-19"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "ALTER TABLE RENAME COLUMN"
  - "RENAME COLUMN statement"
  - "schema change command"
  - "column rename syntax"
  - "ALTER TABLE rename"
  - "table column rename"
  - "RENAME COLUMN"
  - "DDL preview"
---

# ALTER TABLE RENAME COLUMN statement

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The ALTER TABLE RENAME COLUMN DDL statement is now in preview for renaming table columns.

## Extended Definition

BigQuery SQL DDL includes an `ALTER TABLE ... RENAME COLUMN` statement to rename columns in an existing table. The supported syntax is `ALTER TABLE [IF EXISTS] table_name RENAME COLUMN [IF EXISTS] column TO column`, and the statement can include multiple `RENAME COLUMN` clauses in one command; an example without the column-level `IF EXISTS` shows that a missing source column causes the statement to fail. The documentation also warns that renaming a column removes associated deprecated Data Catalog tags and Dataplex Universal Catalog aspects.

## Evidence Summary

The referenced DDL page provides the syntax, usage examples, multi-clause behavior, and operational caveat for `ALTER TABLE ... RENAME COLUMN` in BigQuery.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Examples Renaming a table The following example renames the table mydataset.mytable to mydataset.mynewtable : ALTER TABLE mydataset . mytable RENAME TO mynewtable ALTER TABLE RENAME COLUMN statement Caution: Renaming a column deletes all Data Catalog tags (deprecated) and Dataplex Universal Catalog aspects that are attached to it.
- Multiple RENAME COLUMN statements in one ALTER TABLE statement are supported.
- Syntax ALTER TABLE [ IF EXISTS ] table name RENAME COLUMN [ IF EXISTS ] column to column [ , ... ] column to column := column name TO new column name Arguments (ALTER TABLE) IF EXISTS : If the specified table does not exist, the statement has no effect. table name : The name of the table to alter.
- Examples Renaming columns The following example renames columns from an existing table named mytable : Column A -> columnA Column B -> columnB ALTER TABLE mydataset . mytable RENAME COLUMN A TO columnA , RENAME COLUMN IF EXISTS B TO columnB If column A does not exist, then the statement fails.

