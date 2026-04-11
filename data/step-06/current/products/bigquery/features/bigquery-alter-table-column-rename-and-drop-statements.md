---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.681Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ALTER TABLE column rename and drop statements"
feature_slug: "bigquery-alter-table-column-rename-and-drop-statements"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "schema alteration"
  - "ALTER TABLE RENAME COLUMN"
  - "ALTER TABLE DROP COLUMN"
  - "ALTER TABLE statement"
  - "DDL statement support"
  - "column rename"
  - "RENAME COLUMN"
  - "column drop"
---

# BigQuery ALTER TABLE column rename and drop statements

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now generally supports ALTER TABLE statements to rename and drop columns.

## Extended Definition

BigQuery GoogleSQL DDL supports schema changes via `ALTER TABLE` with `RENAME COLUMN` and `DROP COLUMN` operations on existing tables. It allows dropping one or more columns and also allows multiple `RENAME COLUMN` statements in a single `ALTER TABLE` command (for example, to swap column names), while renaming a column removes deprecated Data Catalog tags and Dataplex Universal Catalog aspects attached to that column.

## Evidence Summary

The DDL reference page documents `ALTER TABLE` examples and behavior for `RENAME COLUMN` and `DROP COLUMN`, including multi-clause renames and metadata side effects when renaming a column.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Examples Renaming a table The following example renames the table mydataset.mytable to mydataset.mynewtable : ALTER TABLE mydataset . mytable RENAME TO mynewtable ALTER TABLE RENAME COLUMN statement Caution: Renaming a column deletes all Data Catalog tags (deprecated) and Dataplex Universal Catalog aspects that are attached to it.
- The following example swaps the names of columnA and columnB : ALTER TABLE mydataset . mytable RENAME COLUMN columnA TO temp col , RENAME COLUMN columnB TO columnA , RENAME COLUMN temp col TO columnB ALTER TABLE DROP COLUMN statement Drops one or more columns from an existing table schema.
- Multiple RENAME COLUMN statements in one ALTER TABLE statement are supported.
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.

