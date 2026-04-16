---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.710Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table snapshots"
feature_slug: "table-snapshots"
latest_feature_date: "2021-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery"
keywords:
  - "table"
  - "snapshots"
  - "create"
  - "point"
  - "time"
  - "copies"
  - "tables"
  - "including"
---

# Table snapshots

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Table snapshots create point-in-time copies of tables, including support for console management and cross-project snapshot creation; Table snapshots create low-cost, read-only copies of BigQuery tables at a specific point in time.

## Extended Definition

Table snapshots create point-in-time copies of tables, including support for console management and cross-project snapshot creation; Table snapshots create low-cost, read-only copies of BigQuery tables at a specific point in time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Applicable only to tables with table type set to CLONE or SNAPSHOT . snapshot time ms TIMESTAMP For table clones and table snapshots , the time when the clone or snapshot operation was run on the base table to create this table.
- For readability, some columns are excluded from the result. +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ table catalog table schema table name table type is insertable into creation time ddl +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ myproject mydataset mytable1 BASE TABLE YES 2018-10-29 20:34:44 CREATE TABLE myproject.mydataset.mytable1 ( id INT64 ); myproject mydataset myview1 VIEW NO 2018-12-29 00:19:20 CREATE VIEW myproject.mydataset.myview1 AS SELECT 100 as id; +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ Example 2: The following example retrieves table metadata for all tables of type CLONE or SNAPSHOT from the INFORMATION SCHEMA.TABLES view.
- Unpartitioned tables return 0. total logical bytes INT64 Total number of logical (uncompressed) bytes in the table or materialized view. active logical bytes INT64 Number of logical (uncompressed) bytes that are younger than 90 days. long term logical bytes INT64 Number of logical (uncompressed) bytes that are older than 90 days. current physical bytes INT64 Total number of physical bytes for the current storage of the table across all partitions. total physical bytes INT64 Total number of physical (compressed) bytes used for storage, including active, long-term, and time-travel (deleted or changed data) bytes.
- TABLE STORAGE BY PROJECT WHERE total physical bytes + fail safe physical bytes > 0 -- Base the forecast on base tables only for highest precision results AND table type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset name , -- Logical ROUND ( active logical gib , 2 ) AS active logical gib , ROUND ( long term logical gib , 2 ) AS long term logical gib , -- Physical ROUND ( active physical gib , 2 ) AS active physical gib , ROUND ( long term physical gib , 2 ) AS long term physical gib , ROUND ( time travel physical gib , 2 ) AS time travel physical gib , ROUND ( fail safe physical gib , 2 ) AS fail safe physical gib , -- Compression ratio ROUND ( SAFE DIVIDE ( active logical gib , active no tt physical gib ), 2 ) AS active compression ratio , ROUND ( SAFE DIVIDE ( long term logical gib , long term physical gib ), 2 ) AS long term compression ratio , -- Forecast costs logical ROUND ( active logical gib active logical gib price , 2 ) AS forecast active logical cost , ROUND ( long term logical gib long term logical gib price , 2 ) AS forecast long term logical cost , -- Forecast costs physical ROUND (( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price , 2 ) AS forecast active physical cost , ROUND ( long term physical gib long term physical gib price , 2 ) AS forecast long term physical cost , -- Forecast costs total ROUND ((( active logical gib active logical gib price ) + ( long term logical gib long term logical gib price )) - ((( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price ) + ( long term physical gib long term physical gib price )), 2 ) AS forecast total cost difference FROM storage sizes ORDER BY ( forecast active logical cost + forecast active physical cost ) DESC ; Note: INFORMATION SCHEMA view names are case-sensitive.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create tables, load data into tables from various types of sources and in various formats, partition tables based on a specific column or by ingestion time, cluster tables, update table properties, and export table data.
- For example, you could create table clones in a test environment so that you can experiment with copies of production data without impacting the production data and without having to pay for storage of full copies of the tables.
- Table snapshots are lightweight, read-only copies that let you preserve the state of your tables indefinitely.
- BigQuery lets you control access to your resources at many levels, including access to the organization, folders, projects, datasets, tables, table columns, and table rows.

### Continuous data integration in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feature lets you capture snapshots and clones of multiple tables at the same point in time, which makes your working environment and snapshots consistent with one another.
- For each of the tables, you create both a clone and a snapshot in the new dataset, potentially for the same point in time.
- Snapshots can be taken at a point in time for all tables, which reduces inconsistencies even if there is a rollback.
- After developers have created a dataset, they can create clones and snapshots of the tables they are working on.

