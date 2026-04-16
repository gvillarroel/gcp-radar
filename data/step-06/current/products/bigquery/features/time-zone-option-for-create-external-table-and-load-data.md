---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.228Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Time zone option for CREATE EXTERNAL TABLE and LOAD DATA"
feature_slug: "time-zone-option-for-create-external-table-and-load-data"
latest_feature_date: "2026-01-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned"
keywords:
  - "time"
  - "zone"
  - "option"
  - "create"
  - "external"
  - "table"
  - "load"
  - "interpreting"
---

# Time zone option for CREATE EXTERNAL TABLE and LOAD DATA

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

CREATE EXTERNAL TABLE and LOAD DATA support a time_zone option for interpreting loaded data.

## Extended Definition

CREATE EXTERNAL TABLE and LOAD DATA support a time_zone option for interpreting loaded data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- These logs record API calls and actions that modify the configuration or metadata of your resources. resource.type = "bigquery dataset" : This narrows the search to events related to BigQuery datasets, where table operations are logged. timestamp >= " STARTING TIMESTAMP " : Filters log entries to only show those created on or after the specified timestamp. protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" : Ensures the log message conforms to the standard Cloud Audit Log structure. ( ... ) : This block groups conditions to find different types of table events, as outlined in the previous section.
- QueryJobConfig ( destination = table id ) sql = """ SELECT corpus FROM bigquery-public-data.samples.shakespeare GROUP BY corpus; """ Start the query, passing in the extra configuration. query job = client . query ( sql , job config = job config ) # Make an API request. query job . result () # Wait for the job to complete. print ( "Query results loaded to the table {} " . format ( table id )) Create a table that references an external data source An external data source is a data source that you can query directly from BigQuery, even though the data is not stored in BigQuery storage.
- Go to BigQuery In the query editor, enter the following statement: CREATE TABLE mydataset . newtable ( x INT64 OPTIONS ( description = 'An optional INTEGER field' ), y STRUCT < a ARRAY < STRING > OPTIONS ( description = 'A repeated STRING field' ), b BOOL ) OPTIONS ( expiration timestamp = TIMESTAMP '2023-01-01 00:00:00 UTC' , description = 'a table that expires in 2023' , labels = [ ( 'org unit' , 'development' ) ] ); Click play circle Run .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --destination kms key : The Cloud KMS key for encryption of the table data. bq --location = location load \ -- [ no ] replace \ --source format = format \ dataset.table \ path to source \ schema where: location is your location .
- DAYS ). toMillis ()) . build (); LoadJobConfiguration loadJobConfig = LoadJobConfiguration . builder ( tableId , sourceUri ) . setFormatOptions ( FormatOptions . csv ()) . setSchema ( schema ) . setTimePartitioning ( partitioning ) . build (); // Create a job ID so that we can safely retry.
- CsvOptions csvOptions = CsvOptions . newBuilder (). setSkipLeadingRows ( 1 ). build (); TableId tableId = TableId . of ( datasetName , tableName ); LoadJobConfiguration loadConfig = LoadJobConfiguration . newBuilder ( tableId , sourceUri , csvOptions ). setSchema ( schema ). build (); // Load data from a GCS CSV file into the table Job job = bigquery . create ( JobInfo . of ( loadConfig )); // Blocks until this load table job completes its execution, either failing or succeeding. job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "CSV from GCS successfully added during load append job" ); } else { System . out . println ( "BigQuery was unable to load into the table due to an error:" + job . getStatus (). getError ()); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Column not added during load append \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --time partitioning type : Enables time-based partitioning on a table and sets the partition type.

### "Create external table with hive partitioning \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); // Configuring partitioning options HivePartitioningOptions hivePartitioningOptions = HivePartitioningOptions . newBuilder () . setMode ( "CUSTOM" ) . setRequirePartitionFilter ( true ) . setSourceUriPrefix ( sourceUriPrefix ) . build (); TableId tableId = TableId . of ( datasetName , tableName ); ExternalTableDefinition customTable = ExternalTableDefinition . newBuilder ( sourceUri , FormatOptions . parquet ()) . setAutodetect ( true ) . setHivePartitioningOptions ( hivePartitioningOptions ) . build (); bigquery . create ( TableInfo . of ( tableId , customTable )); System . out . println ( "External table created using hivepartitioningoptions" ); } catch ( BigQueryException e ) { System . out . println ( "External table was not created" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String sourceUri = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/ " ; String sourceUriPrefix = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/{pkey:STRING}/" ; createTableExternalHivePartitioned ( datasetName , tableName , sourceUriPrefix , sourceUri ); } public static void createTableExternalHivePartitioned ( String datasetName , String tableName , String sourceUriPrefix , String sourceUri ) { try { // Initialize client that will be used to send requests.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableExternalHivePartitioned demonstrates creating an external table with hive partitioning. func createTableExternalHivePartitioned ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // tableID := "mytableid" ctx := context .
- Table ( table id ) table . external data configuration = external config table = client . create table ( table ) # Make an API request. print ( "Created table {} . {} . {} " . format ( table . project , table . dataset id , table . table id ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .

