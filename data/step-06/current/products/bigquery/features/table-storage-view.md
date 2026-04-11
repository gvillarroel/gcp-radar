---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.744Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TABLE_STORAGE view"
feature_slug: "table-storage-view"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "storage usage snapshot"
  - "INFORMATION_SCHEMA.TABLE_STORAGE"
  - "TABLE_STORAGE system view"
  - "materialized view storage"
  - "storage metadata view"
  - "table storage usage"
  - "storage usage view"
  - "TABLE_STORAGE view"
---

# TABLE_STORAGE view

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the TABLE_STORAGE view to provide a snapshot of current storage usage for tables and materialized views.

## Extended Definition

BigQuery exposes an INFORMATION_SCHEMA TABLE STORAGE view that returns metadata for current and historical storage usage of BigQuery tables and materialized views. The view (and the organization-level variant) provides fields such as project, dataset, and table identifiers plus table characteristics including creation time, total rows, and partition count, and usage requires the TABLE STORAGE setting to be enabled for the project.

## Evidence Summary

The referenced BigQuery documentation page defines the TABLE STORAGE views, explains that they report table/storage usage metadata, and notes both the supported schema fields and the configuration error shown if the view is not enabled.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Use the INFORMATION SCHEMA.TABLE STORAGE views to retrieve metadata about current and historical storage usage by a table.
- For readability, some columns are excluded from the result. +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ table name column name field path data type description policy tags +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ commits author author STRUCT<name STRING, email STRING, time sec INT64, tz offset INT64, date TIMESTAMP> NULL 0 rows commits author author.name STRING NULL 0 rows commits author author.email STRING NULL 0 rows commits author author.time sec INT64 NULL 0 rows commits author author.tz offset INT64 NULL 0 rows commits author author.date TIMESTAMP NULL 0 rows commits difference difference ARRAY<STRUCT<old mode INT64, new mode INT64, old path STRING, new path STRING, old sha1 STRING, new sha1 STRING, old repo STRING, new repo STRING>> NULL 0 rows commits difference difference.old mode INT64 NULL 0 rows commits difference difference.new mode INT64 NULL 0 rows commits difference difference.old path STRING NULL 0 rows commits difference difference.new path STRING NULL 0 rows commits difference difference.old sha1 STRING NULL 0 rows commits difference difference.new sha1 STRING NULL 0 rows commits difference difference.old repo STRING NULL 0 rows commits difference difference.new repo STRING NULL 0 rows +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ TABLE STORAGE view The TABLE STORAGE and TABLE STORAGE BY ORGANIZATION views have the following schema: Column name Data type Value project id STRING The project ID of the project that contains the dataset. project number INT64 The project number of the project that contains the dataset. table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table or materialized view, also referred to as the datasetId . table name STRING The name of the table or materialized view, also referred to as the tableId . creation time TIMESTAMP The creation time of the table. total rows INT64 The total number of rows in the table or materialized view. total partitions INT64 The number of partitions present in the table or materialized view.
- If you haven't configured this setting, you will see the following error: INFORMATION SCHEMA.TABLE STORAGE hasn't been enabled for project <myproject>.

