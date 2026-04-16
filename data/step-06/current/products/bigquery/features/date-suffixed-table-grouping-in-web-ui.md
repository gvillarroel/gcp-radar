---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.923Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Date-suffixed table grouping in web UI"
feature_slug: "date-suffixed-table-grouping-in-web-ui"
latest_feature_date: "2015-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
keywords:
  - "date"
  - "suffixed"
  - "table"
  - "grouping"
  - "web"
  - "ui"
  - "collapses"
  - "tables"
---

# Date-suffixed table grouping in web UI

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Date-suffixed table grouping in the web UI collapses tables with date suffixes into a single navigation item.

## Extended Definition

Date-suffixed table grouping in the web UI collapses tables with date suffixes into a single navigation item.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Time-unit column-partitioned tables are subject to the following limitations: The partitioning column must be either a scalar DATE , TIMESTAMP , or DATETIME column.
- Choose hourly partitioning if your tables have a high volume of data that spans a short date range — typically less than six months of timestamp values.
- Choose monthly or yearly partitioning if your tables have a relatively small amount of data for each day, but span a wide date range.
- If you previously created date-sharded tables, you can convert them into an ingestion-time partitioned table.

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- However, the following query does not limit the scan based on the second filter condition, TABLE SUFFIX = (SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%') , because it is a dynamic expression: #standardSQL Scans all tables with names that fall between gsod1940 and gsod1960 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX BETWEEN '40' AND '60' AND TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As a workaround, you can perform two separate queries instead; for example: First query: standardSQL Get the list of tables that match the required table name prefixes SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' Second query: standardSQL Construct the second query based on the values from the first query SELECT ROUND((max-32) 5/9,1) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = '49' These example queries use the INFORMATION SCHEMA.TABLES view.
- For example, the following query is valid because it uses backticks: #standardSQL / Valid SQL query / SELECT max FROM bigquery-public-data.noaa gsod.gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC The following query is NOT valid because it isn't properly quoted with backticks: #standardSQL / Syntax error: Expected end of statement but got "-" at [4:11] / SELECT max FROM missing backticks bigquery - public - data . noaa gsod . gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Quotation marks don't work: #standardSQL / Syntax error: Unexpected string literal: 'bigquery-public-data.noaa gsod.gsod ' at [4:3] / SELECT max FROM quotes are not backticks 'bigquery-public-data.noaa gsod.gsod ' WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Query tables using wildcard tables Wildcard tables enable you to query several tables concisely.
- For example, the following query does not limit the tables scanned for the wildcard table bigquery-public-data.noaa gsod.gsod19 because the filter uses the dynamic value of the table id column: #standardSQL Scans all tables that match the prefix gsod19 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As another example, the following query limits the scan based on the first filter condition, TABLE SUFFIX BETWEEN '40' and '60' , because it is a constant expression.
- For example, to find the maximum temperature reported in the years between 1929 and 1935 inclusive, use the table wildcard to represent the last two digits of the year: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod19 WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX BETWEEN '29' and '35' ORDER BY max DESC Scanning a range of ingestion-time partitioned tables using PARTITIONTIME To scan a range of ingestion-time partitioned tables, use the PARTITIONTIME pseudocolumn with the TABLE SUFFIX pseudocolumn.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a table: bigquery.tables.create on the dataset where you're creating the table. bigquery.tables.getData on all tables and views that your query references if you're saving query results as a table. bigquery.jobs.create on the project if you're creating the table by loading data or by saving query results to a table. bigquery.tables.updateData on the table if you're appending to or overwriting a table with query results.
- These logs help you track when tables were created, updated, or deleted, and identify the user or service account that made the changes.
- For readability, some columns are excluded from the result. +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ table name column name field path data type description policy tags +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ commits author author STRUCT<name STRING, email STRING, time sec INT64, tz offset INT64, date TIMESTAMP> NULL 0 rows commits author author.name STRING NULL 0 rows commits author author.email STRING NULL 0 rows commits author author.time sec INT64 NULL 0 rows commits author author.tz offset INT64 NULL 0 rows commits author author.date TIMESTAMP NULL 0 rows commits difference difference ARRAY<STRUCT<old mode INT64, new mode INT64, old path STRING, new path STRING, old sha1 STRING, new sha1 STRING, old repo STRING, new repo STRING>> NULL 0 rows commits difference difference.old mode INT64 NULL 0 rows commits difference difference.new mode INT64 NULL 0 rows commits difference difference.old path STRING NULL 0 rows commits difference difference.new path STRING NULL 0 rows commits difference difference.old sha1 STRING NULL 0 rows commits difference difference.new sha1 STRING NULL 0 rows commits difference difference.old repo STRING NULL 0 rows commits difference difference.new repo STRING NULL 0 rows +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ TABLE STORAGE view The TABLE STORAGE and TABLE STORAGE BY ORGANIZATION views have the following schema: Column name Data type Value project id STRING The project ID of the project that contains the dataset. project number INT64 The project number of the project that contains the dataset. table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table or materialized view, also referred to as the datasetId . table name STRING The name of the table or materialized view, also referred to as the tableId . creation time TIMESTAMP The creation time of the table. total rows INT64 The total number of rows in the table or materialized view. total partitions INT64 The number of partitions present in the table or materialized view.
- TABLE STORAGE BY PROJECT WHERE total physical bytes + fail safe physical bytes > 0 -- Base the forecast on base tables only for highest precision results AND table type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset name , -- Logical ROUND ( active logical gib , 2 ) AS active logical gib , ROUND ( long term logical gib , 2 ) AS long term logical gib , -- Physical ROUND ( active physical gib , 2 ) AS active physical gib , ROUND ( long term physical gib , 2 ) AS long term physical gib , ROUND ( time travel physical gib , 2 ) AS time travel physical gib , ROUND ( fail safe physical gib , 2 ) AS fail safe physical gib , -- Compression ratio ROUND ( SAFE DIVIDE ( active logical gib , active no tt physical gib ), 2 ) AS active compression ratio , ROUND ( SAFE DIVIDE ( long term logical gib , long term physical gib ), 2 ) AS long term compression ratio , -- Forecast costs logical ROUND ( active logical gib active logical gib price , 2 ) AS forecast active logical cost , ROUND ( long term logical gib long term logical gib price , 2 ) AS forecast long term logical cost , -- Forecast costs physical ROUND (( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price , 2 ) AS forecast active physical cost , ROUND ( long term physical gib long term physical gib price , 2 ) AS forecast long term physical cost , -- Forecast costs total ROUND ((( active logical gib active logical gib price ) + ( long term logical gib long term logical gib price )) - ((( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price ) + ( long term physical gib long term physical gib price )), 2 ) AS forecast total cost difference FROM storage sizes ORDER BY ( forecast active logical cost + forecast active physical cost ) DESC ; Note: INFORMATION SCHEMA view names are case-sensitive.

