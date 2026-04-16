---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.621Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Case-insensitive collation support"
feature_slug: "case-insensitive-collation-support"
latest_feature_date: "2023-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "case"
  - "insensitive"
  - "collation"
  - "enables"
  - "behavior"
  - "across"
  - "queries"
  - "views"
---

# Case-insensitive collation support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Case-insensitive collation support enables case-insensitive behavior across supported queries, views, materialized views, table functions, and BI Engine; Case-insensitive collation support lets string comparison and sorting ignore case in supported operations.

## Extended Definition

Case-insensitive collation support enables case-insensitive behavior across supported queries, views, materialized views, table functions, and BI Engine; Case-insensitive collation support lets string comparison and sorting ignore case in supported operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- CREATE SCHEMA mydataset OPTIONS ( is case insensitive = TRUE ) Creating a dataset with collation support The following example creates a dataset with a collation specification.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- You can override this value when you create a table. description STRING The description of the dataset. failover reservation STRING Associates the dataset to a reservation in the case of a failover scenario. friendly name STRING A descriptive name for the dataset. is case insensitive BOOL TRUE if the dataset and its table names are case-insensitive, otherwise FALSE .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For readability, some columns are excluded from the result. +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ table name column name field path data type description policy tags +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ commits author author STRUCT<name STRING, email STRING, time sec INT64, tz offset INT64, date TIMESTAMP> NULL 0 rows commits author author.name STRING NULL 0 rows commits author author.email STRING NULL 0 rows commits author author.time sec INT64 NULL 0 rows commits author author.tz offset INT64 NULL 0 rows commits author author.date TIMESTAMP NULL 0 rows commits difference difference ARRAY<STRUCT<old mode INT64, new mode INT64, old path STRING, new path STRING, old sha1 STRING, new sha1 STRING, old repo STRING, new repo STRING>> NULL 0 rows commits difference difference.old mode INT64 NULL 0 rows commits difference difference.new mode INT64 NULL 0 rows commits difference difference.old path STRING NULL 0 rows commits difference difference.new path STRING NULL 0 rows commits difference difference.old sha1 STRING NULL 0 rows commits difference difference.new sha1 STRING NULL 0 rows commits difference difference.old repo STRING NULL 0 rows commits difference difference.new repo STRING NULL 0 rows +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ TABLE STORAGE view The TABLE STORAGE and TABLE STORAGE BY ORGANIZATION views have the following schema: Column name Data type Value project id STRING The project ID of the project that contains the dataset. project number INT64 The project number of the project that contains the dataset. table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table or materialized view, also referred to as the datasetId . table name STRING The name of the table or materialized view, also referred to as the tableId . creation time TIMESTAMP The creation time of the table. total rows INT64 The total number of rows in the table or materialized view. total partitions INT64 The number of partitions present in the table or materialized view.
- TABLE STORAGE BY PROJECT WHERE total physical bytes + fail safe physical bytes > 0 -- Base the forecast on base tables only for highest precision results AND table type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset name , -- Logical ROUND ( active logical gib , 2 ) AS active logical gib , ROUND ( long term logical gib , 2 ) AS long term logical gib , -- Physical ROUND ( active physical gib , 2 ) AS active physical gib , ROUND ( long term physical gib , 2 ) AS long term physical gib , ROUND ( time travel physical gib , 2 ) AS time travel physical gib , ROUND ( fail safe physical gib , 2 ) AS fail safe physical gib , -- Compression ratio ROUND ( SAFE DIVIDE ( active logical gib , active no tt physical gib ), 2 ) AS active compression ratio , ROUND ( SAFE DIVIDE ( long term logical gib , long term physical gib ), 2 ) AS long term compression ratio , -- Forecast costs logical ROUND ( active logical gib active logical gib price , 2 ) AS forecast active logical cost , ROUND ( long term logical gib long term logical gib price , 2 ) AS forecast long term logical cost , -- Forecast costs physical ROUND (( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price , 2 ) AS forecast active physical cost , ROUND ( long term physical gib long term physical gib price , 2 ) AS forecast long term physical cost , -- Forecast costs total ROUND ((( active logical gib active logical gib price ) + ( long term logical gib long term logical gib price )) - ((( active no tt physical gib + time travel physical gib + fail safe physical gib ) active physical gib price ) + ( long term physical gib long term physical gib price )), 2 ) AS forecast total cost difference FROM storage sizes ORDER BY ( forecast active logical cost + forecast active physical cost ) DESC ; Note: INFORMATION SCHEMA view names are case-sensitive.
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Built on Qlik's unique Associative Engine, it supports a full range of users and use cases across the lifecycle, from data to insight–with self-service analytics, interactive dashboards, conversational analytics, custom and embedded analytics, mobile analytics, and reporting.
- Capable of scaling with petabytes of data and executing complex 10-hop queries in seconds, PuppyGraph supports use cases from enhancing LLMs with knowledge graphs to fraud detection, cybersecurity and more.
- The integration with BigQuery enables it to translate natural language into SQL queries that run against your BigQuery data, making data analysis accessible to business users without any SQL knowledge.
- Decube's Data Observability module enables data teams to understand the state and quality of their data across their data infrastructure including data pipelines.

