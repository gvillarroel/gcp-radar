---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.796Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery table export to Parquet"
feature_slug: "bigquery-table-export-to-parquet"
latest_feature_date: "2021-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "export to GCS"
  - "export to Cloud Storage"
  - "FORMAT = 'PARQUET'"
  - "Parquet export"
  - "table data export"
  - "table export"
  - "EXPORT DATA"
  - "Parquet"
---

# BigQuery table export to Parquet

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for exporting table data in Parquet format.

## Extended Definition

BigQuery added support for exporting table data in Parquet format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: STRONG
- Re-rank rationale: The page states Parquet as an export format and notes nested/repeated data support for Parquet, directly defining export behavior.

Evidence snippets:
- Parquet export details BigQuery converts GoogleSQL data types to the following Parquet data types: BigQuery data type Parquet primitive type Parquet logical type Integer INT64 NONE Numeric FIXED LEN BYTE ARRAY DECIMAL (precision = 38, scale = 9) Numeric(P[, S]) FIXED LEN BYTE ARRAY DECIMAL (precision = P, scale = S) BigNumeric FIXED LEN BYTE ARRAY DECIMAL (precision = 76, scale = 38) BigNumeric(P[, S]) FIXED LEN BYTE ARRAY DECIMAL (precision = P, scale = S) Floating point FLOAT NONE Boolean BOOLEAN NONE String BYTE ARRAY STRING (UTF8) Bytes BYTE ARRAY NONE Date INT32 DATE Datetime INT64 TIMESTAMP (isAdjustedToUTC = false, unit = MICROS) Time INT64 TIME (isAdjustedToUTC = true, unit = MICROS) Timestamp INT64 TIMESTAMP (isAdjustedToUTC = false, unit = MICROS) Geography BYTE ARRAY GEOGRAPHY (edges = spherical) The Parquet schema represents nested data as a group and repeated records as repeated groups.
- Nested and repeated data are supported for Avro, JSON, and Parquet exports.
- TIMESTAMP data types are represented as timestamp-micros logical type (it annotates an Avro LONG type) by default in both Extract jobs and Export Data SQL. (Caution: you can add use avro logical types=False to Export Data Options to disable the logical type so it uses string type instead on timestamp column, but in Extract Jobs, it always uses the Avro logical type.) DATE data types are represented as date logical type (it annotates an Avro INT types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) TIME data types are represented as timestamp-micro logical type (it annotates an Avro LONG types) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable the logical type in Extract jobs.) DATETIME data types are represented as Avro STRING types (a string type with custom named logical type datetime ) by default in Export Data SQL, but are represented as string type by default in Extract jobs. (Note: you can add use avro logical types=False to Export Data Options to disable the logical type, or use the flag --use avro logical types=True to enable logical type in Extract jobs.) RANGE types aren't supported in Avro export.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- CustomHivePartitionedTable WITH PARTITION COLUMNS ( field 1 STRING , -- column order must match the external path field 2 INT64 ) OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); CREATE FUNCTION statement Creates a new user-defined function (UDF).
- AutoHivePartitionedTable WITH PARTITION COLUMNS OPTIONS ( uris = [ 'gs://bucket/path/ ' ] , format = 'PARQUET' , hive partition uri prefix = 'gs://bucket/path' , require hive partition filter = false ); The following example creates an externally partitioned table by explicitly specifying the partition columns.
- CREATE OR REPLACE EXTERNAL TABLE mydataset . newtable ( x INT64 , y STRING , z BOOL ) WITH CONNECTION myconnection OPTIONS ( format = "PARQUET" , max staleness = STALENESS INTERVAL , metadata cache mode = 'AUTOMATIC' ); The following example creates an external table from multiple URIs.
- Example: file format=PARQUET The open-source file format in which the table data is stored.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following values: DAY HOUR MONTH YEAR --use avro logical types={true false} If the FORMAT part of the --external table definition flag is set to AVRO , then this flag specifies whether to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ). --parquet enable list inference={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types. --parquet enum as string={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to infer Parquet ENUM logical types as STRING values.
- For more information about loading data from Cloud Storage using the bq load command, see the following: Loading Avro data Loading CSV data Loading JSON data Loading ORC data Loading Parquet data Loading data from Datastore exports Loading data from Firestore exports For more information about loading data from a local source using the bq load command, see the following: Loading data from local files . bq ls Use the bq ls command to list objects in a collection.
- Use one of the following values: AVRO CSV DATASTORE BACKUP (use this value for Filestore) GOOGLE SHEETS NEWLINE DELIMITED JSON ORC PARQUET The default value is CSV . --use avro logical types={true false} If the --source format flag is set to AVRO , then this flag specifies whether to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ).
- The default is false . --parquet enable list inference={true false} If the --source format flag is set to PARQUET , then this flag indicates whether to use schema inference for Parquet LIST logical types. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.

