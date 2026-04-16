---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.721Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Parquet export"
feature_slug: "parquet-export"
latest_feature_date: "2021-08-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "parquet"
  - "export"
  - "bigquery"
  - "can"
  - "table"
  - "format"
  - "supports"
  - "exporting"
---

# Parquet export

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery can export table data in Parquet format; BigQuery supports exporting table data in Parquet format.

## Extended Definition

BigQuery can export table data in Parquet format; BigQuery supports exporting table data in Parquet format.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- String projectName = "MY PROJECT NAME" ; String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String bucketName = "MY-BUCKET-NAME" ; String destinationUri = "gs://" + bucketName + "/path/to/file" ; // For more information on export formats available see: // https://cloud.google.com/bigquery/docs/exporting-data#export formats and compression types String compressed = "gzip" ; // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html String dataFormat = "CSV" ; extractTableCompressed ( projectName , datasetName , tableName , destinationUri , dataFormat , compressed ); } public static void extractTableCompressed ( String projectName , String datasetName , String tableName , String destinationUri , String dataFormat , String compressed ) { try { // Initialize client that will be used to send requests.
- String projectId = "bigquery-public-data" ; String datasetName = "samples" ; String tableName = "shakespeare" ; String bucketName = "my-bucket" ; String destinationUri = "gs://" + bucketName + "/path/to/file" ; // For more information on export formats available see: // https://cloud.google.com/bigquery/docs/exporting-data#export formats and compression types // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html String dataFormat = "CSV" ; extractTableToCsv ( projectId , datasetName , tableName , destinationUri , dataFormat ); } // Exports datasetName:tableName to destinationUri as raw CSV public static void extractTableToCsv ( String projectId , String datasetName , String tableName , String destinationUri , String dataFormat ) { try { // Initialize client that will be used to send requests.
- Note: If you are exporting data to the Parquet format, it might be faster to use the BigQuery export to Parquet (via BigQuery Storage API) template rather than writing a custom solution. (Optional) Specify your location in the location property in the jobReference section of the job resource .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For an overview of ELT and ETL approaches, see Introduction to loading, transforming, and exporting data .
- BigQuery supports accessing select external data sources through Cloud Storage and federated queries.
- For more information about loading from Dataflow to BigQuery, see Write from Dataflow to BigQuery .
- The loaded data can be in Avro, CSV, JSON, ORC, or Parquet format.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- If you use cached metadata , then the following limitations apply: You can only use cached metadata with BigLake tables that use Avro, ORC, Parquet, JSON, and CSV formats.
- CREATE OR REPLACE TABLE temp table AS ( SELECT l shipmode , l linenumber , l orderkey FROM aws dataset . lineitem WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' ); After the temporary table is created, the JOIN operation completes, and the following query is run: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN temp table ON orders . o orderkey = lineitem . l orderkey GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; As another example, consider the following cross-cloud join: SELECT c mktsegment , c name FROM bigquery dataset . customer WHERE c mktsegment = 'BUILDING' UNION ALL SELECT c mktsegment , c name FROM aws dataset . customer WHERE c mktsegment = 'FURNITURE' LIMIT 10 ; In this query, the LIMIT clause is not pushed down to the BigQuery Omni region.

