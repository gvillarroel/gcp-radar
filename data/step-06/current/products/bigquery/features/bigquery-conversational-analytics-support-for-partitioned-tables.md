---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.335Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery conversational analytics support for partitioned tables"
feature_slug: "bigquery-conversational-analytics-support-for-partitioned-tables"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "conversational analytics partitions"
  - "cost optimization for partitions"
  - "partition-aware SQL generation"
  - "partition-aware queries"
  - "table partitioning support"
  - "partition support"
  - "partition column"
  - "partitioned tables"
---

# BigQuery conversational analytics support for partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery conversational analytics now supports using partitioned tables and partition columns to optimize SQL generation, performance, and cost.

## Extended Definition

The provided Google Cloud documentation confirms that BigQuery supports creating and managing partitioned tables (including setting default partition settings and converting sharded tables to partitioned tables) and supports declaring partition columns for external tables via SQL DDL. These capabilities provide the partitioning primitives that can be used by downstream features, but the excerpts do not explicitly document conversational analytics-specific behavior such as partition-aware SQL generation or direct cost/performance optimization.

## Evidence Summary

The cited pages provide evidence of BigQuery partition table features (table creation/management, partition columns, and CLI partition controls) but do not explicitly prove the conversational analytics optimization claims.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Each tag must have the namespaced key name and value short name . --default kms key= KEY Specifies the default Cloud KMS key resource ID for encrypting the table data in a dataset if no explicit key is provided during table creation or query. --default partition expiration= SECONDS An integer that specifies the default expiration time, in seconds, for all partitions in newly-created partitioned tables in the dataset.
- The default key is used if no explicit key is provided for a table creation or a query. --default partition expiration= SECONDS An integer that specifies the default expiration time, in seconds, for all partitions in newly created partitioned tables in the dataset.
- For more information about using the bq partition command, see Converting date-sharded tables into ingestion-time partitioned tables . bq query Use the bq query command to create a query job that runs the specified SQL query.
- The default is false . bq partition Use the bq partition command to convert a group of tables with time-unit suffixes, such as tables ending in YYYYMMDD for date partitioning, into partitioned tables.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Syntax CREATE [ OR REPLACE ] EXTERNAL TABLE [ IF NOT EXISTS ] table name [ ( column name column schema , ... ) ] [ WITH CONNECTION { connection name DEFAULT }] [ WITH PARTITION COLUMNS [ ( partition column name partition column type , ... ) ] ] OPTIONS ( external table option list , ... ); Arguments OR REPLACE : Replaces any external table with the same name if it exists.
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- AutoHivePartitionedTable WITH PARTITION COLUMNS OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); The following example creates an externally partitioned table by explicitly specifying the partition columns.
- For more information, see: Supported data layouts . partition column type : The partition column type. external table option list : A list of options for creating the external table.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Unpartitioned tables return 0. total logical bytes INT64 Total number of logical (uncompressed) bytes in the table or materialized view. active logical bytes INT64 Number of logical (uncompressed) bytes that are younger than 90 days. long term logical bytes INT64 Number of logical (uncompressed) bytes that are older than 90 days. current physical bytes INT64 Total number of physical bytes for the current storage of the table across all partitions. total physical bytes INT64 Total number of physical (compressed) bytes used for storage, including active, long-term, and time-travel (deleted or changed data) bytes.
- For information about creating other table types, see the following: Creating partitioned tables Creating and using clustered tables After creating a table, you can do the following: Control access to your table data.
- Refer to the following links for more information on these optional parameters: For more information about --time partitioning field , --time partitioning type , and --range partitioning see partitioned tables .
- For more information, see Creating partitioned tables and Creating and using clustered tables .

