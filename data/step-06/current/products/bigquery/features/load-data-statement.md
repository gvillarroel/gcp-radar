---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.729Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "LOAD DATA statement"
feature_slug: "load-data-statement"
latest_feature_date: "2022-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
keywords:
  - "load files into table"
  - "GoogleSQL LOAD DATA"
  - "LOAD DATA statement"
  - "load data statement"
  - "LOAD DATA preview"
  - "LOAD DATA SQL"
  - "LOAD DATA"
---

# LOAD DATA statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery Google Standard SQL LOAD DATA statement is available in preview for loading files into a table.

## Extended Definition

The `LOAD DATA` statement is a BigQuery SQL statement that can be used to load data into a table by creating a load job. Release notes also show that this statement has supported loading options for things like date/time formats, null marker handling, and source column matching, with at least some of these options initially documented as available in Preview.

## Evidence Summary

The release notes provide statements about `LOAD DATA` capabilities and preview-era option support, while the loading-data guide confirms `LOAD DATA` as a documented method for creating BigQuery load jobs.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options in preview : time zone : specify a time zone to use when loading data date format , datetime format , time format , and timestamp format : define how date and time values are formatted in your source files Feature In the navigation menu, you can now go to Settings and select Configuration settings to customize the BigQuery Studio experience for users within the selected project or organization.
- January 06, 2026 Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options: time zone : specify a time zone to use when loading data date format , datetime format , time format , and timestamp format : define how date and time values are formatted in your source files null markers : define the strings that represent NULL values in CSV files. source column match : specify how loaded columns are matched to the schema.
- Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options in Preview : null markers : define the strings that represent NULL values in CSV files. source column match : specify how loaded columns are matched to the schema.
- You can load or export your data from any region or multi-region to any other region or multi-region using a single bq load , LOAD DATA , bq extract , or EXPORT DATA statement.

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: It covers ways to load data into BigQuery, but does not provide details about the LOAD DATA SQL statement, previews, or syntax.

Evidence snippets:
- To create the load job, you can also use the LOAD DATA SQL statement.
- You can also use the following programmatic methods to load the data: Loading method Description Batch load You can load data from Cloud Storage or from a local file by creating a load job.
- Methods of loading or accessing external data In the BigQuery page, in the Add data dialog , you can view all available methods to load data into BigQuery or access data from BigQuery.
- Introduction to loading data This document explains how you can load data into BigQuery.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- CsvOptions csvOptions = CsvOptions . newBuilder (). setSkipLeadingRows ( 1 ). build (); TableId tableId = TableId . of ( datasetName , tableName ); LoadJobConfiguration loadConfig = LoadJobConfiguration . newBuilder ( tableId , sourceUri , csvOptions ). setSchema ( schema ). build (); // Load data from a GCS CSV file into the table Job job = bigquery . create ( JobInfo . of ( loadConfig )); // Blocks until this load table job completes its execution, either failing or succeeding. job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "CSV from GCS successfully added during load append job" ); } else { System . out . println ( "BigQuery was unable to load into the table due to an error:" + job . getStatus (). getError ()); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Column not added during load append \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For full list of options, see: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad const metadata = { sourceFormat : 'CSV' , skipLeadingRows : 1 , schema : { fields : [ { name : 'name' , type : 'STRING' }, { name : 'post abbr' , type : 'STRING' }, ], }, // Set the write disposition to overwrite existing table data. writeDisposition : 'WRITE TRUNCATE' , location : 'US' , }; // Load data from a Google Cloud Storage file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( storage . bucket ( bucketName ). file ( filename ), metadata ); // load() waits for the job to finish console . log ( Job ${ job . id } completed. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiate clients const bigquery = new BigQuery (); const storage = new Storage (); / This sample loads the CSV file at https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv TODO(developer): Replace the following lines with the path to your file. / const bucketName = 'cloud-samples-data' ; const filename = 'bigquery/us-states/us-states-by-date.csv' ; async function loadTablePartitioned () { // Load data into a table that uses column-based time partitioning. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my new table'; // Configure the load job.
- For full list of options, see: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad const partitionConfig = { type : 'DAY' , expirationMs : '7776000000' , // 90 days field : ' date ' , }; const metadata = { sourceFormat : 'CSV' , skipLeadingRows : 1 , schema : { fields : [ { name : 'name' , type : 'STRING' }, { name : 'post abbr' , type : 'STRING' }, { name : ' date ' , type : 'DATE' }, ], }, location : 'US' , timePartitioning : partitionConfig , }; // Load data from a Google Cloud Storage file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( storage . bucket ( bucketName ). file ( filename ), metadata ); // load() waits for the job to finish console . log ( Job ${ job . id } completed. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

