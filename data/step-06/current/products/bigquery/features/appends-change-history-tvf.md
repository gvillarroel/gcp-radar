---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.679Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "APPENDS change history TVF"
feature_slug: "appends-change-history-tvf"
latest_feature_date: "2022-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
keywords:
  - "appends"
  - "change"
  - "history"
  - "tvf"
  - "table"
  - "valued"
  - "returns"
  - "append"
---

# APPENDS change history TVF

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The APPENDS table-valued function returns the history of table append operations over a time window.

## Extended Definition

The APPENDS table-valued function returns the history of table append operations over a time window.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- Returns NULL if the replica is a primary replica or the dataset doesn't use replication. upsert stream apply watermark TIMESTAMP For tables that use change data capture (CDC), the time when row modifications were last applied.
- Append to table — Appends the query results to an existing table.
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- SelectFromTablesAndAppend ( target date DATE , OUT rows added INT64 ) BEGIN CREATE TEMP TABLE DataForTargetDate AS SELECT t1 . id , t1 . x , t2 . y FROM dataset . partitioned table1 AS t1 JOIN dataset . partitioned table2 AS t2 ON t1 . id = t2 . id WHERE t1 . date = target date AND t2 . date = target date ; SET rows added = ( SELECT COUNT ( ) FROM DataForTargetDate ); SELECT id , x , y , target date -- note that target date is a parameter FROM DataForTargetDate ; DROP TABLE DataForTargetDate ; END ; The following example declares a variable rows added , then passes it as an argument to the SelectFromTablesAndAppend procedure from the previous example, along with the value of CURRENT DATE ; then it returns a message stating how many rows were added.
- AddDelta ( accumulator , 3 ); SELECT accumulator ; This returns the following: +-------------+ accumulator +-------------+ 8 +-------------+ The following example creates the procedure SelectFromTablesAndAppend , which takes target date as an input argument and returns rows added as an output.
- Example: enable change history=TRUE Set this property to TRUE in order to capture change history on the table, which you can then view by using the CHANGES function .
- Example: enable change history=TRUE Set this property to TRUE in order to capture change history on the table, which you can then view by using the CHANGES function .

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE CHANGE TYPE = 'DELETE' ); Export data to a Bigtable table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and exports the data into a Bigtable table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD BIGTABLE' , truncate = TRUE , overwrite = TRUE , uri = 'https://bigtable.googleapis.com/projects/myproject/instances/mybigtableinstance/tables/taxi-real-time-rides' ) AS ( SELECT CAST ( CONCAT ( ride id , timestamp , latitude , longitude ) AS STRING ) AS rowkey , STRUCT ( timestamp , latitude , longitude , meter reading , ride status , passenger count ) AS features FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- If your source data lacks a timestamp, the -- CHANGE TIMESTAMP pseudocolumn provided by the APPENDS function -- will be automatically mapped to the " change timestamp " column. " change timestamp column ": " change timestamp " } "" " ) AS ( SELECT ride id , latitude , longitude , meter reading , ride status , passenger count , CHANGE TIMESTAMP as change timestamp FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- CHANGE TIMESTAMP AS bq changed ts , requests . geohash , requests . latitude , requests . longitude , ST DISTANCE ( ST GEOGPOINT ( requests . longitude , requests . latitude ), ST GEOGPOINT ( taxis . longitude , taxis . latitude ) ) AS distance in meters FROM APPENDS ( TABLE real time taxi streaming.ride requests , CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) AS requests INNER JOIN APPENDS ( TABLE real time taxi streaming.taxirides , CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) AS taxis ON requests . geohash = taxis . geohash WHERE taxis . ride status = 'available' AND taxis .
- The CHANGES function processes all rows that have changed within the source table, including both appends and mutations.

