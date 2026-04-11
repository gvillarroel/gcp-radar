---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.795Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INFORMATION_SCHEMA.TABLES DDL column"
feature_slug: "information-schema-tables-ddl-column"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "recreate table statement"
  - "ddl field in TABLES view"
  - "INFORMATION_SCHEMA.TABLES"
  - "table definition SQL"
  - "DDL metadata column"
  - "TABLES.ddl column"
  - "DDL column"
  - "TABLES.ddl"
---

# INFORMATION_SCHEMA.TABLES DDL column

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The INFORMATION_SCHEMA.TABLES view now includes a DDL column to recreate table definitions.

## Extended Definition

The INFORMATION_SCHEMA.TABLES view now includes a DDL column to recreate table definitions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- For readability, some columns are excluded from the result. +--------------+------------+--------------------+-------------------+-----------------+---------------------+ table name table type base table catalog base table schema base table name snapshot time ms +--------------+------------+--------------------+-------------------+-----------------+---------------------+ items clone CLONE myproject mydataset items 2018-10-31 22:40:05 orders bk SNAPSHOT myproject mydataset orders 2018-11-01 08:22:39 +--------------+------------+--------------------+-------------------+-----------------+---------------------+ Example 3: The following example retrieves table name and ddl columns from the INFORMATION SCHEMA.TABLES view for the population by zip 2010 table in the census bureau usa dataset.
- For readability, some columns are excluded from the result. +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ table catalog table schema table name table type is insertable into creation time ddl +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ myproject mydataset mytable1 BASE TABLE YES 2018-10-29 20:34:44 CREATE TABLE myproject.mydataset.mytable1 ( id INT64 ); myproject mydataset myview1 VIEW NO 2018-12-29 00:19:20 CREATE VIEW myproject.mydataset.myview1 AS SELECT 100 as id; +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ Example 2: The following example retrieves table metadata for all tables of type CLONE or SNAPSHOT from the INFORMATION SCHEMA.TABLES view.
- The metadata that's returned is for all types of tables in mydataset in your default project. mydataset contains the following tables: mytable1 : a standard BigQuery table myview1 : a BigQuery view To run the query against a project other than your default project, add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, myproject.mydataset.INFORMATION SCHEMA.TABLES .
- Because the table you're querying is in another project, the bigquery-public-data project, you add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, bigquery-public-data.census bureau usa.INFORMATION SCHEMA.TABLES .

