---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.704Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery LOAD DATA hive-partitioned file transfer"
feature_slug: "bigquery-load-data-hive-partitioned-file-transfer"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery"
keywords:
  - "hive-style partitions"
  - "hive-partitioned file paths"
  - "LOAD DATA hive-partitioned files"
  - "Hive partitioned load"
  - "partitioned source files"
  - "hive partition"
  - "hive partitioning"
---

# BigQuery LOAD DATA hive-partitioned file transfer

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery extended LOAD DATA to support loading hive-partitioned files.

## Extended Definition

BigQuery supports loading data from files stored in Hive-style partitioned paths by using hive partitioning metadata during read/load operations. It can infer both file schema and hive partitioning layout automatically (with optional explicit partition-column specification), and the loading behavior is controlled via settings such as hive partitioning mode and hive partitioning source URI prefix. Supported input formats for these hive partitioning options include AVRO, CSV, JSON, ORC, and Parquet.

## Evidence Summary

The cited BigQuery SQL, CLI, and Java references describe hive partitioning controls, automatic detection, and supported formats for partitioned source data, but the provided excerpts do not include a direct, explicit LOAD DATA statement example.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- It uses schema auto-detection to detect both the file schema and the hive partitioning layout.
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- AutoHivePartitionedTable WITH PARTITION COLUMNS OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); The following example creates an externally partitioned table by explicitly specifying the partition columns.
- Example: "gs://bucket/path/reference schema file.parquet" . require hive partition filter BOOL If true , all queries over this table require a partition filter that can be used to eliminate partitions when reading data.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- The default is false . --connection id= CONNECTION ID The ID of a connection resource to use for authentication. --hive partitioning mode Specifies how to determine the partitioning schema when BigQuery reads data.
- The default value is AUTO . --hive partitioning source uri prefix Specifies the common prefix for the source URIs.

### "Package com.google.cloud.bigquery (2.62.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)
- Source ID: `site-java-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Hive Partitioning Options HivePartitioningOptions currently supported types include: AVRO, CSV, JSON, ORC and Parquet. com. google. cloud. bigquery.

