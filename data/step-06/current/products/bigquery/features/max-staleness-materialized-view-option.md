---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.729Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "max_staleness materialized view option"
feature_slug: "max-staleness-materialized-view-option"
latest_feature_date: "2022-08-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "MV freshness"
  - "materialized view staleness"
  - "max_staleness option"
  - "staleness setting"
  - "max_staleness"
  - "MAX_STALENESS"
  - "materialized view option"
  - "staleness"
---

# max_staleness materialized view option

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery added the max_staleness option for materialized views to improve performance-cost balance on frequently changing data.

## Extended Definition

max_staleness is a BigQuery table/materialized-view option that accepts an INTERVAL value defining how stale data is allowed to be before a query uses it. In DDL it is documented as an optional materialized-view option (disabled by default) that helps provide higher performance with controlled cost for large, frequently changing datasets, and in the bq CLI it is used via --max staleness to set the maximum allowed staleness when querying a materialized view or an external table.

## Evidence Summary

The cited BigQuery documentation pages define the max_staleness option syntax and behavior, its default state, its use cases (including materialized views and CDC contexts), and how it is specified in both SQL DDL and bq CLI workflows.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- CREATE OR REPLACE EXTERNAL TABLE mydataset . newtable ( x INT64 , y STRING , z BOOL ) WITH CONNECTION myconnection OPTIONS ( format = "PARQUET" , max staleness = STALENESS INTERVAL , metadata cache mode = 'AUTOMATIC' ); The following example creates an external table from multiple URIs.
- For example, with change data capture , when this option is set, the table copy operation is denied if data is more stale than the max staleness value. max staleness is disabled by default. enable fine grained mutations BOOL In preview .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- You must set the --metadata cache mode flag if you set the --max staleness flag with the bq mk command . --parquet enable list inference={true false} If source format is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types.
- Repeat this flag to specify multiple labels. --max staleness= INTERVAL Specifies whether cached metadata is used by operations against the table, and how fresh the cached metadata must be in order for the operation to use it.
- For more information, see Idle slots . --max staleness= INTERVAL Specifies an INTERVAL value that determines the maximum staleness allowed when querying a materialized view or an external table.
- For example, specify 0-0 0 4:0:0 for a 4 hour staleness interval.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- Applies to: CSV, JSON, and Google Sheets data. max staleness INTERVAL Applicable for BigLake tables and object tables .
- For example, specify INTERVAL 4 HOUR for a 4 hour staleness interval.

