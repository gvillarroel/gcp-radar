---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.405Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GeoParquet metadata support for Parquet import and export"
feature_slug: "geoparquet-metadata-support-for-parquet-import-and-export"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/gis-data"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
keywords:
  - "geoparquet"
  - "metadata"
  - "parquet"
  - "import"
  - "export"
  - "bigquery"
  - "can"
  - "load"
---

# GeoParquet metadata support for Parquet import and export

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can export and load Parquet files that include GeoParquet metadata.

## Extended Definition

BigQuery can export and load Parquet files that include GeoParquet metadata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The GEOGRAPHY logical type is represented with GeoParquet metadata added to the exported file(s).
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableToGCS () { // Exports my dataset:my table to gcs://my-bucket/my-file as raw CSV. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Parquet export details BigQuery converts GoogleSQL data types to the following Parquet data types: BigQuery data type Parquet primitive type Parquet logical type Integer INT64 NONE Numeric FIXED LEN BYTE ARRAY DECIMAL (precision = 38, scale = 9) Numeric(P[, S]) FIXED LEN BYTE ARRAY DECIMAL (precision = P, scale = S) BigNumeric FIXED LEN BYTE ARRAY DECIMAL (precision = 76, scale = 38) BigNumeric(P[, S]) FIXED LEN BYTE ARRAY DECIMAL (precision = P, scale = S) Floating point FLOAT NONE Boolean BOOLEAN NONE String BYTE ARRAY STRING (UTF8) Bytes BYTE ARRAY NONE Date INT32 DATE Datetime INT64 TIMESTAMP (isAdjustedToUTC = false, unit = MICROS) Time INT64 TIME (isAdjustedToUTC = true, unit = MICROS) Timestamp INT64 TIMESTAMP (isAdjustedToUTC = false, unit = MICROS) Geography BYTE ARRAY GEOGRAPHY (edges = spherical) The Parquet schema represents nested data as a group and repeated records as repeated groups.

### Working with geospatial data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- Source ID: `site-docs-reference-required-7`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If GeoParquet metadata exists, BigQuery loads all of the columns it describes into a corresponding GEOGRAPHY column by default.
- When loading Parquet files, BigQuery checks for GeoParquet metadata.
- For more complex geographies, you can load the following geospatial data formats into a GEOGRAPHY column: Well-known text (WKT) Well-known binary (WKB) GeoJSON GeoParquet Loading WKT or WKB data WKT is a text format for describing individual geometry shapes using points, lines, polygons with optional holes, or a collection of points, lines, or polygons.
- GeoParquet includes metadata that provides definite semantics to the contained geospatial data, avoiding the interpretation issues that occur with other geospatial data formats.

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To load a local file of another format, set the metadata parameter of the load function to the appropriate format. // Imports the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function loadLocalFile () { // Imports a local file into a table. / TODO(developer): Uncomment the following lines before running the sample. / // const filename = '/path/to/file.csv'; // const datasetId = 'my dataset'; // const tableId = 'my table'; // Load data from a local file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( filename ); console . log ( Job ${ job . id } completed. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Loading data from Cloud Storage BigQuery supports loading data from any of the following Cloud Storage storage classes : Standard Nearline Coldline Archive To learn how to load data into BigQuery, see the page for your data format: CSV JSON Avro Parquet ORC Datastore exports Firestore exports To learn how to configure a recurring load from Cloud Storage into BigQuery, see Cloud Storage transfers .
- The source data can be in any of the following formats: Avro Comma-separated values (CSV) JSON (newline-delimited) ORC Parquet Datastore exports stored in Cloud Storage Firestore exports stored in Cloud Storage You can also use BigQuery Data Transfer Service to set up recurring loads from Cloud Storage into BigQuery.
- To load a local file of another format, set the sourceFormat to the appropriate format. use Google\Cloud\BigQuery\BigQueryClient; use Google\Cloud\Core\ExponentialBackoff; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $datasetId = 'The BigQuery dataset ID'; // $tableId = 'The BigQuery table ID'; // $source = 'The path to the CSV source file to import'; // instantiate the bigquery table service $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $table = $dataset->table($tableId); // create the import job $loadConfig = $table->load(fopen($source, 'r'))->sourceFormat('CSV'); $job = $table->runJob($loadConfig); // poll the job until it is complete $backoff = new ExponentialBackoff(10); $backoff->execute(function () use ($job) { printf('Waiting for job to complete' .

