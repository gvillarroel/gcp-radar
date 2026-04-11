---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.881Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Parquet load support"
feature_slug: "bigquery-parquet-load-support"
latest_feature_date: "2018-03-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options"
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "CREATE TABLE ... from Parquet"
  - "PARQUET option in load"
  - "source format PARQUET"
  - "Parquet source format"
  - "load Parquet files"
  - "Parquet load job"
  - "Apache Parquet"
  - "Parquet"
---

# BigQuery Parquet load support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added beta support for loading Parquet files.

## Extended Definition

BigQuery added beta support for loading Parquet files.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options)
- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "BigQuery Format Options \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/format_options)
- Source ID: `site-python-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: The page documents `ParquetOptions` for source format handling, which provides concrete configuration used when loading BigQuery tables from Parquet but does not describe feature rollout status.

Evidence snippets:
- See https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#AvroOptions.FIELDS.use avro logical types class google.cloud.bigquery.format options.ParquetOptions() Additional options if the PARQUET source format is used. property enable list inference( : bool Indicates whether to use schema inference specifically for Parquet LIST logical type.
- Return type ParquetOptions property map target type( : Optional[Union[ bool , str ] ) Indicates whether to simplify the representation of parquet maps to only show keys and values. to api repr() Build an API representation of this object.
- See https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#ParquetOptions.FIELDS.enable list inference property enum as string( : bool Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
- See https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#ParquetOptions.FIELDS.enum as string classmethod from api repr(resource: Dict [ str , bool ]) Factory: construct an instance from a resource dict.

### Class Client (3.40.1) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client)
- Source ID: `site-python-reference`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: The page references generic load job configuration only, not file-format-specific load support such as Parquet.

Evidence snippets:
- They are supported when using the PARQUET source format, but due to the way they are encoded in the parquet file, a mismatch with the existing table schema can occur, so REPEATED fields are not properly supported when using pyarrow<4.0.0 using the parquet format. https://github.com/googleapis/python-bigquery/issues/19 Parameters Name Description dataframe pandas.Dataframe A pandas.DataFrame containing the data to load. destination Union[ Table, TableReference, str ] The destination table to use for loading the data.
- By default, this method uses the parquet source format.
- The argument is directly passed as the compression argument to the underlying pyarrow.parquet.write table() method (the default value "snappy" gets converted to uppercase). https://arrow.apache.org/docs/python/generated/pyarrow.parquet.write table.html#pyarrow-parquet-write-table If the job config schema is missing, the argument is directly passed as the compression argument to the underlying DataFrame.to parquet() method. https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to parquet.html#pandas.DataFrame.to parquet timeout Optional[flaot] The number of seconds to wait for the underlying HTTP transport before using retry .
- DataFrame , destination : Union [ Table , TableReference , str ], num retries : int = 6 , job id : Optional [ str ] = None , job id prefix : Optional [ str ] = None , location : Optional [ str ] = None , project : Optional [ str ] = None , job config : Optional [ LoadJobConfig ] = None , parquet compression : str = "snappy" , timeout : ResumableTimeoutType = None , ) - > job .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- AutoHivePartitionedTable WITH PARTITION COLUMNS OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); The following example creates an externally partitioned table by explicitly specifying the partition columns.
- CREATE OR REPLACE EXTERNAL TABLE mydataset . newtable ( x INT64 , y STRING , z BOOL ) WITH CONNECTION myconnection OPTIONS ( format = "PARQUET" , max staleness = STALENESS INTERVAL , metadata cache mode = 'AUTOMATIC' ); The following example creates an external table from multiple URIs.
- Equivalent to ExternalDataConfiguration.decimal target types Example: ["NUMERIC", "BIGNUMERIC"] . description STRING A description of this table. enable list inference BOOL If true , use schema inference specifically for Parquet LIST logical type.

