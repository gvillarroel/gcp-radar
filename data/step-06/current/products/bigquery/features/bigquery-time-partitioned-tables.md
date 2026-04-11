---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.939Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery time-partitioned tables"
feature_slug: "bigquery-time-partitioned-tables"
latest_feature_date: "2016-06-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "time partition decorator"
  - "temporal partitioning"
  - "time-partitioned table"
  - "partitioning by time"
  - "time partitioning"
  - "partitioned table"
  - "time partitioned"
---

# BigQuery time-partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for time-partitioned tables.

## Extended Definition

BigQuery added support for time-partitioned tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically an introduction to partitioned tables and explains partition concepts, partitioning columns, pruning, and partition-level management.

Evidence snippets:
- For example, suppose that you create an ingestion-time partitioned table with hourly partitioning and send data at the following times: Ingestion time PARTITIONTIME Partition (hourly) 2021-05-07 17:22:00 2021-05-07 17:00:00 2021050717 2021-05-07 17:40:00 2021-05-07 17:00:00 2021050717 2021-05-07 18:31:00 2021-05-07 18:00:00 2021050718 Because the table in this example uses hourly partitioning, the value of PARTITIONTIME is truncated to an hour boundary.
- If you previously created date-sharded tables, you can convert them into an ingestion-time partitioned table.
- For more information, see Convert date-sharded tables into ingestion-time partitioned tables .
- An ingestion-time partitioned table has a pseudocolumn named PARTITIONTIME .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Refer to the following links for more information on these optional parameters: For more information about --time partitioning field , --time partitioning type , and --range partitioning see partitioned tables .
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- For example: +-------------------------+-------+----------------------+-------------------+ tableId Type Labels Time Partitioning +-------------------------+-------+----------------------+-------------------+ mytable TABLE department:shipping myview VIEW +-------------------------+-------+----------------------+-------------------+ Examples: Enter the following command to list tables in dataset mydataset in your default project. bq ls --format = pretty mydataset Enter the following command to return more than the default output of 50 tables from mydataset . mydataset is in your default project. bq ls --format = pretty --max results 60 mydataset Enter the following command to list tables in dataset mydataset in myotherproject . bq ls --format = pretty myotherproject:mydataset API To list tables using the API, call the tables.list method.
- Unpartitioned tables return 0. total logical bytes INT64 Total number of logical (uncompressed) bytes in the table or materialized view. active logical bytes INT64 Number of logical (uncompressed) bytes that are younger than 90 days. long term logical bytes INT64 Number of logical (uncompressed) bytes that are older than 90 days. current physical bytes INT64 Total number of physical bytes for the current storage of the table across all partitions. total physical bytes INT64 Total number of physical (compressed) bytes used for storage, including active, long-term, and time-travel (deleted or changed data) bytes.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- Limitations: It is not possible to create an ingestion-time partitioned table from the result of a query.
- The table is an ingestion-time partitioned table .
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

