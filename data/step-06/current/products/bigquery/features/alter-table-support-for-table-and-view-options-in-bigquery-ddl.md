---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.858Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER TABLE support for table and view options in BigQuery DDL"
feature_slug: "alter-table-support-for-table-and-view-options-in-bigquery-ddl"
latest_feature_date: "2019-02-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "ALTER TABLE SET OPTIONS"
  - "ALTER TABLE options"
  - "DDL table options"
  - "table options"
  - "SET OPTIONS"
  - "view options"
  - "BigQuery DDL"
  - "ALTER TABLE"
---

# ALTER TABLE support for table and view options in BigQuery DDL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery DDL added ALTER TABLE statement support to set options on tables and views.

## Extended Definition

BigQuery DDL added ALTER TABLE statement support to set options on tables and views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: The page is about DDL generally and mentions altering resources, but does not explicitly detail ALTER TABLE options for tables and views in the shown excerpt.

Evidence snippets:
- Examples The following example removes a replica that is located in the us-east4 region from the cross region dataset dataset: ALTER SCHEMA [ IF EXISTS ] cross region dataset DROP REPLICA us-east4 ALTER TABLE SET OPTIONS statement Sets the options on a table.
- The behavior is equivalent to running ALTER TABLE SET OPTIONS after the table is copied.
- This behavior matches that of ALTER TABLE SET OPTIONS .
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- TABLE OPTIONS WHERE option name = 'expiration timestamp' ; The result is similar to the following: +----------------+---------------+------------+----------------------+-------------+--------------------------------------+ table catalog table schema table name option name option type option value +----------------+---------------+------------+----------------------+-------------+--------------------------------------+ myproject mydataset mytable1 expiration timestamp TIMESTAMP TIMESTAMP "2020-01-16T21:12:28.000Z" myproject mydataset mytable2 expiration timestamp TIMESTAMP TIMESTAMP "2021-01-01T21:12:28.000Z" +----------------+---------------+------------+----------------------+-------------+--------------------------------------+ Note: Tables without an expiration time are excluded from the query results.
- TABLE OPTIONS WHERE option name = 'description' AND option value LIKE '%test%' ; The result is similar to the following: +----------------+---------------+------------+-------------+-------------+--------------+ table catalog table schema table name option name option type option value +----------------+---------------+------------+-------------+-------------+--------------+ myproject mydataset mytable1 description STRING "test data" myproject mydataset mytable2 description STRING "test data" +----------------+---------------+------------+-------------+-------------+--------------+ COLUMNS view When you query the INFORMATION SCHEMA.COLUMNS view, the query results contain one row for each column (field) in a table.
- If empty, the row is a total population summary.") ) OPTIONS( labels=[("freebqcovid", "")] ); +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ TABLE OPTIONS view When you query the INFORMATION SCHEMA.TABLE OPTIONS view, the query results contain one row for each option, for each table or view in a dataset.

