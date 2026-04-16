---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.319Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE EXTERNAL TABLE and LOAD DATA source_column_match option"
feature_slug: "create-external-table-and-load-data-source-column-match-option"
latest_feature_date: "2025-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "create"
  - "external"
  - "table"
  - "load"
  - "source"
  - "column"
  - "match"
  - "option"
---

# CREATE EXTERNAL TABLE and LOAD DATA source_column_match option

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The source_column_match option controls whether loaded columns are matched to schema columns by position or by name.

## Extended Definition

The source_column_match option controls whether loaded columns are matched to schema columns by position or by name.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- QueryJobConfig ( destination = table id ) sql = """ SELECT corpus FROM bigquery-public-data.samples.shakespeare GROUP BY corpus; """ Start the query, passing in the extra configuration. query job = client . query ( sql , job config = job config ) # Make an API request. query job . result () # Wait for the job to complete. print ( "Query results loaded to the table {} " . format ( table id )) Create a table that references an external data source An external data source is a data source that you can query directly from BigQuery, even though the data is not stored in BigQuery storage.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- These logs record API calls and actions that modify the configuration or metadata of your resources. resource.type = "bigquery dataset" : This narrows the search to events related to BigQuery datasets, where table operations are logged. timestamp >= " STARTING TIMESTAMP " : Filters log entries to only show those created on or after the specified timestamp. protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" : Ensures the log message conforms to the standard Cloud Audit Log structure. ( ... ) : This block groups conditions to find different types of table events, as outlined in the previous section.

### "Create external table with hive partitioning \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); // Configuring partitioning options HivePartitioningOptions hivePartitioningOptions = HivePartitioningOptions . newBuilder () . setMode ( "CUSTOM" ) . setRequirePartitionFilter ( true ) . setSourceUriPrefix ( sourceUriPrefix ) . build (); TableId tableId = TableId . of ( datasetName , tableName ); ExternalTableDefinition customTable = ExternalTableDefinition . newBuilder ( sourceUri , FormatOptions . parquet ()) . setAutodetect ( true ) . setHivePartitioningOptions ( hivePartitioningOptions ) . build (); bigquery . create ( TableInfo . of ( tableId , customTable )); System . out . println ( "External table created using hivepartitioningoptions" ); } catch ( BigQueryException e ) { System . out . println ( "External table was not created" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String sourceUri = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/ " ; String sourceUriPrefix = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/{pkey:STRING}/" ; createTableExternalHivePartitioned ( datasetName , tableName , sourceUriPrefix , sourceUri ); } public static void createTableExternalHivePartitioned ( String datasetName , String tableName , String sourceUriPrefix , String sourceUri ) { try { // Initialize client that will be used to send requests.
- Autolayout will expose this as a column named "dt" of type DATE. hive partitioning opts . mode = "AUTO" hive partitioning opts . require partition filter = True hive partitioning opts . source uri prefix = source uri prefix external config . hive partitioning = hive partitioning opts table = bigquery .
- AutoHivePartitioningMode , SourceURIPrefix : "gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout/" , RequirePartitionFilter : true , } // Create the external table. tableRef := client .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CsvOptions csvOptions = CsvOptions . newBuilder (). setSkipLeadingRows ( 1 ). build (); TableId tableId = TableId . of ( datasetName , tableName ); LoadJobConfiguration loadConfig = LoadJobConfiguration . newBuilder ( tableId , sourceUri , csvOptions ). setSchema ( schema ). build (); // Load data from a GCS CSV file into the table Job job = bigquery . create ( JobInfo . of ( loadConfig )); // Blocks until this load table job completes its execution, either failing or succeeding. job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "CSV from GCS successfully added during load append job" ); } else { System . out . println ( "BigQuery was unable to load into the table due to an error:" + job . getStatus (). getError ()); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Column not added during load append \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- The schema is defined in a local schema file named myschema.json . bq load \ -- source format = CSV \ mydataset . mytable \ "gs://mybucket/00/ .csv" , "gs://mybucket/01/ .csv" \ ./ myschema . json API Create a load job that points to the source data in Cloud Storage. (Optional) Specify your location in the location property in the jobReference section of the job resource .
- The schema is defined using a JSON schema file — myschema.json . bq load \ -- noreplace \ -- source format = CSV \ mydataset . mytable \ gs : // mybucket / mydata . csv \ ./ myschema . json API Create a load job that points to the source data in Cloud Storage. (Optional) Specify your location in the location property in the jobReference section of the job resource .
- DAYS ). toMillis ()) . build (); LoadJobConfiguration loadJobConfig = LoadJobConfiguration . builder ( tableId , sourceUri ) . setFormatOptions ( FormatOptions . csv ()) . setSchema ( schema ) . setTimePartitioning ( partitioning ) . build (); // Create a job ID so that we can safely retry.

