---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.343Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE EXTERNAL TABLE and LOAD DATA timestamp_format option"
feature_slug: "create-external-table-and-load-data-timestamp-format-option"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned"
keywords:
  - "create"
  - "external"
  - "table"
  - "load"
  - "timestamp"
  - "format"
  - "option"
  - "defines"
---

# CREATE EXTERNAL TABLE and LOAD DATA timestamp_format option

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The timestamp_format option defines how timestamp values are formatted in source files for CREATE EXTERNAL TABLE or LOAD DATA.

## Extended Definition

The timestamp_format option defines how timestamp values are formatted in source files for CREATE EXTERNAL TABLE or LOAD DATA.

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
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- QueryJobConfig ( destination = table id ) sql = """ SELECT corpus FROM bigquery-public-data.samples.shakespeare GROUP BY corpus; """ Start the query, passing in the extra configuration. query job = client . query ( sql , job config = job config ) # Make an API request. query job . result () # Wait for the job to complete. print ( "Query results loaded to the table {} " . format ( table id )) Create a table that references an external data source An external data source is a data source that you can query directly from BigQuery, even though the data is not stored in BigQuery storage.
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --destination kms key : The Cloud KMS key for encryption of the table data. bq --location = location load \ -- [ no ] replace \ --source format = format \ dataset.table \ path to source \ schema where: location is your location .
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --time partitioning type : Enables time-based partitioning on a table and sets the partition type.
- For more information, see Querying partitioned tables . --clustering fields : A comma-separated list of up to four column names used to create a clustered table . --destination kms key : The Cloud KMS key for encryption of the table data. --column name character map : Defines the scope and handling of characters in column names, with the option of enabling flexible column names .
- The schema is defined in a local schema file named myschema.json . bq load \ -- source format = CSV \ mydataset . mytable \ "gs://mybucket/00/ .csv" , "gs://mybucket/01/ .csv" \ ./ myschema . json API Create a load job that points to the source data in Cloud Storage. (Optional) Specify your location in the location property in the jobReference section of the job resource .

### "Create external table with hive partitioning \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); // Configuring partitioning options HivePartitioningOptions hivePartitioningOptions = HivePartitioningOptions . newBuilder () . setMode ( "CUSTOM" ) . setRequirePartitionFilter ( true ) . setSourceUriPrefix ( sourceUriPrefix ) . build (); TableId tableId = TableId . of ( datasetName , tableName ); ExternalTableDefinition customTable = ExternalTableDefinition . newBuilder ( sourceUri , FormatOptions . parquet ()) . setAutodetect ( true ) . setHivePartitioningOptions ( hivePartitioningOptions ) . build (); bigquery . create ( TableInfo . of ( tableId , customTable )); System . out . println ( "External table created using hivepartitioningoptions" ); } catch ( BigQueryException e ) { System . out . println ( "External table was not created" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableExternalHivePartitioned demonstrates creating an external table with hive partitioning. func createTableExternalHivePartitioned ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // tableID := "mytableid" ctx := context .
- Table ( table id ) table . external data configuration = external config table = client . create table ( table ) # Make an API request. print ( "Created table {} . {} . {} " . format ( table . project , table . dataset id , table . table id ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String sourceUri = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/ " ; String sourceUriPrefix = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/{pkey:STRING}/" ; createTableExternalHivePartitioned ( datasetName , tableName , sourceUriPrefix , sourceUri ); } public static void createTableExternalHivePartitioned ( String datasetName , String tableName , String sourceUriPrefix , String sourceUri ) { try { // Initialize client that will be used to send requests.

