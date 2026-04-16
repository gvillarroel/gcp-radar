---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.933Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table decorators"
feature_slug: "table-decorators"
latest_feature_date: "2013-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/table-decorators"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
keywords:
  - "table"
  - "decorators"
  - "provide"
  - "time"
  - "based"
  - "snapshots"
  - "querying"
  - "historical"
---

# Table decorators

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Table decorators provide time-based table snapshots for querying historical table states.

## Extended Definition

Table decorators provide time-based table snapshots for querying historical table states.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)

## Supporting Pages

### Table decorators in legacy SQL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples To get the historical data for a table at one hour ago: Relative value example legacySQL SELECT COUNT( ) FROM [PROJECT ID:DATASET.TABLE@-3600000] Absolute value example Get <time> for one hour ago: legacySQL SELECT INTEGER(DATE ADD(USEC TO TIMESTAMP(NOW()), -1, 'HOUR')/1000) Then, replace <time> in the following query: #legacySQL SELECT COUNT ( ) FROM [ PROJECT ID:DATASET.TABLE@time ] Range decorators Syntax @ <time1> - <time2> References table data added between <time1> and <time2> , in milliseconds since the epoch. <time1> and <time2> must be within the last seven days. <time2> is optional and defaults to 'now'.
- Standard SQL does not support table decorators, but the FOR SYSTEM TIME AS OF clause in GoogleSQL provides functionality equivalent to time decorators.
- Time decorators Time decorators (formerly known as snapshot decorators ) reference a table's historical data at a point in time.
- Syntax @ <time> References a table's historical data at <time> , in milliseconds since the epoch. <time> must be within the last seven days and greater than or equal to the table's creation time, but less than the table's deletion or expiration time. @0 is a special case that references the oldest data available for the table.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- Applicable only to tables with table type set to CLONE or SNAPSHOT . snapshot time ms TIMESTAMP For table clones and table snapshots , the time when the clone or snapshot operation was run on the base table to create this table.
- Examples Example 1: The following example retrieves the default table expiration times for all tables in mydataset in your default project ( myproject ) by querying the INFORMATION SCHEMA.TABLE OPTIONS view.
- For readability, some columns are excluded from the result. +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ table name column name field path data type description policy tags +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ commits author author STRUCT<name STRING, email STRING, time sec INT64, tz offset INT64, date TIMESTAMP> NULL 0 rows commits author author.name STRING NULL 0 rows commits author author.email STRING NULL 0 rows commits author author.time sec INT64 NULL 0 rows commits author author.tz offset INT64 NULL 0 rows commits author author.date TIMESTAMP NULL 0 rows commits difference difference ARRAY<STRUCT<old mode INT64, new mode INT64, old path STRING, new path STRING, old sha1 STRING, new sha1 STRING, old repo STRING, new repo STRING>> NULL 0 rows commits difference difference.old mode INT64 NULL 0 rows commits difference difference.new mode INT64 NULL 0 rows commits difference difference.old path STRING NULL 0 rows commits difference difference.new path STRING NULL 0 rows commits difference difference.old sha1 STRING NULL 0 rows commits difference difference.new sha1 STRING NULL 0 rows commits difference difference.old repo STRING NULL 0 rows commits difference difference.new repo STRING NULL 0 rows +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ TABLE STORAGE view The TABLE STORAGE and TABLE STORAGE BY ORGANIZATION views have the following schema: Column name Data type Value project id STRING The project ID of the project that contains the dataset. project number INT64 The project number of the project that contains the dataset. table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table or materialized view, also referred to as the datasetId . table name STRING The name of the table or materialized view, also referred to as the tableId . creation time TIMESTAMP The creation time of the table. total rows INT64 The total number of rows in the table or materialized view. total partitions INT64 The number of partitions present in the table or materialized view.

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ingestion time partitioning When you create a table partitioned by ingestion time, BigQuery automatically assigns rows to partitions based on the time when BigQuery ingests the data.
- Creating many small partitions increases the table's metadata, and can affect metadata access times when querying the table.
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- For example, suppose that you create an ingestion-time partitioned table with hourly partitioning and send data at the following times: Ingestion time PARTITIONTIME Partition (hourly) 2021-05-07 17:22:00 2021-05-07 17:00:00 2021050717 2021-05-07 17:40:00 2021-05-07 17:00:00 2021050717 2021-05-07 18:31:00 2021-05-07 18:00:00 2021050718 Because the table in this example uses hourly partitioning, the value of PARTITIONTIME is truncated to an hour boundary.

