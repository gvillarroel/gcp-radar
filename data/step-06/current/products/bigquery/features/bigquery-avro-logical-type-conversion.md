---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.864Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Avro logical type conversion"
feature_slug: "bigquery-avro-logical-type-conversion"
latest_feature_date: "2018-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "Avro logical type conversion"
  - "logical type conversion"
  - "Avro schema conversion"
  - "load job logical types"
  - "Avro type conversion"
  - "Avro logical types"
  - "BigQuery Avro load"
  - "logical types"
---

# BigQuery Avro logical type conversion

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports converting Avro logical types during Avro data loads.

## Extended Definition

BigQuery now supports converting Avro logical types during Avro data loads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- TIMESTAMP data types are represented as timestamp-micros logical type (it annotates an Avro LONG type) by default in both Extract jobs and Export Data SQL. (Caution: you can add use avro logical types=False to Export Data Options to disable the logical type so it uses string type instead on timestamp column, but in Extract Jobs, it always uses the Avro logical type.) DATE data types are represented as date logical type (it annotates an Avro INT types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) TIME data types are represented as timestamp-micro logical type (it annotates an Avro LONG types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) DATETIME data types are represented as Avro STRING types (a string type with custom named logical type datetime ) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable logical type in Extract jobs.) RANGE types aren't supported in Avro export.
- Export Data Option use avro logical types and Extract Job flag --use avro logical types are applied to all the logical types at the same time once specified.

### "BigQuery Format Options \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options)
- Source ID: `site-python-reference`
- Final score: 42
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly defines `AvroOptions.use_avro_logical_types`, including how logical types are converted to BigQuery types during Avro ingestion.

Evidence snippets:
- See https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#AvroOptions.FIELDS.use avro logical types class google.cloud.bigquery.format options.ParquetOptions() Additional options if the PARQUET source format is used. property enable list inference( : bool Indicates whether to use schema inference specifically for Parquet LIST logical type.
- Return type Dict[ str , bool ] property use avro logical types( : Optional[ bool ) [Optional] If sourceFormat is set to ‘AVRO’, indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following values: DAY HOUR MONTH YEAR --use avro logical types={true false} If the FORMAT part of the --external table definition flag is set to AVRO , then this flag specifies whether to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ). --parquet enable list inference={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types. --parquet enum as string={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to infer Parquet ENUM logical types as STRING values.
- Use one of the following values: DAY HOUR MONTH YEAR The default partition type for time-based partitioning is DAY . --use avro logical types={true false} If the --source format flag is set to AVRO , then set this flag to true to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ). --decimal target types= DECIMAL TYPE Determines how to convert a Decimal logical type.
- Use one of the following values: AVRO CSV DATASTORE BACKUP (use this value for Filestore) GOOGLE SHEETS NEWLINE DELIMITED JSON ORC PARQUET The default value is CSV . --use avro logical types={true false} If the --source format flag is set to AVRO , then this flag specifies whether to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ).
- The default is false . --parquet enable list inference={true false} If the --source format flag is set to PARQUET , then this flag indicates whether to use schema inference for Parquet LIST logical types. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.

