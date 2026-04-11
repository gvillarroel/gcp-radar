---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.751Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery table clones"
feature_slug: "bigquery-table-clones"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "zero-copy clone"
  - "writable clone"
  - "CREATE TABLE CLONE"
  - "table cloning"
  - "clone tables"
  - "table clone"
  - "clone table"
  - "delta-only storage"
---

# BigQuery table clones

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery table clones create lightweight writable table copies with storage costs only for data differing from the base table.

## Extended Definition

BigQuery table clones create lightweight writable table copies with storage costs only for data differing from the base table.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE CLONE statements must comply with the following rules: Only one CREATE statement is allowed.
- CREATE TABLE CLONE statement Creates a table clone based on a source table.
- For information about restoring table snapshots, see CREATE TABLE CLONE .
- OPTIONS CREATE TABLE CLONE options are the same as CREATE TABLE options .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- Also referred to as the tableId . table type STRING The table type; one of the following: BASE TABLE : A standard table CLONE : A table clone SNAPSHOT : A table snapshot VIEW : A view MATERIALIZED VIEW : A materialized view or materialized view replica EXTERNAL : A table that references an external data source managed table type STRING This column is in Preview.
- Applicable only to tables with table type set to CLONE or SNAPSHOT . snapshot time ms TIMESTAMP For table clones and table snapshots , the time when the clone or snapshot operation was run on the base table to create this table.
- Applicable only to tables with table type set to CLONE or SNAPSHOT . base table schema STRING For table clones and table snapshots , the base table's dataset.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using the cp command, see the following: Copy a table Create table clones Create table snapshots Restore table snapshots bq extract Use the bq extract command to export table data to Cloud Storage.
- For more information about using the bq cancel command, see Managing jobs . bq cp Use the bq cp command for the following tasks: Create a copy of a table , table clone , or table snapshot .
- You can't use the flag settings --append table=true and --clone=true at the same time. --clone={true false} To create a table clone , set to true .
- The base table can be a standard table, a table clone, or another table snapshot.

