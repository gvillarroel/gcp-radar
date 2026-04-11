---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.852Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery clustered tables"
feature_slug: "bigquery-clustered-tables"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "clustered table limits"
  - "CREATE TABLE ... CLUSTER BY"
  - "CLUSTER BY"
  - "clustered table feature"
  - "table-level clustering"
  - "clustered tables"
  - "clustered table"
  - "clustering column"
---

# BigQuery clustered tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Support for clustered tables in BigQuery became generally available; BigQuery introduced support for clustered tables in the Alpha release stage.

## Extended Definition

Support for clustered tables in BigQuery became generally available; BigQuery introduced support for clustered tables in the Alpha release stage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Syntax CREATE [ OR REPLACE ] [ TEMP TEMPORARY ] TABLE [ IF NOT EXISTS ] table name [ ( column constraint definition [ , ... ] ) ] [ DEFAULT COLLATE collate specification ] [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ WITH CONNECTION connection name ] [ OPTIONS ( table option list ) ] [ AS query statement ] column := column definition constraint definition := [ primary key ] [[ CONSTRAINT constraint name ] foreign key , ... ] primary key := PRIMARY KEY ( column name [ , ... ] ) NOT ENFORCED foreign key := FOREIGN KEY ( column name [ , ... ] ) foreign reference foreign reference := REFERENCES primary key table ( column name [ , ... ] ) NOT ENFORCED Arguments OR REPLACE : Replaces any table with the same name if it exists.
- Syntax CREATE [ OR REPLACE ] MATERIALIZED VIEW [ IF NOT EXISTS ] materialized view name [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ OPTIONS ( materialized view option list ) ] AS query expression Arguments OR REPLACE : Replaces a materialized view with the same name if it exists.
- Defaults to 1. clustering column list CLUSTER BY is an optional clause that controls table clustering . clustering column list is a comma-separated list that determines how to cluster the table.
- For more information, see Working with partitioned and clustered tables .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- For information about creating other table types, see the following: Creating partitioned tables Creating and using clustered tables After creating a table, you can do the following: Control access to your table data.
- For more information, see Creating partitioned tables and Creating and using clustered tables .
- For more information about --clustering fields , see clustered tables .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For more information about partitioning and clustering tables, see Introduction to partitioned tables and Introduction to clustered tables .
- Find the partitioning and clustering columns on a table.

