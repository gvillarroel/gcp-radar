---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.793Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Hive-partitioned external data on Cloud Storage"
feature_slug: "hive-partitioned-external-data-on-cloud-storage"
latest_feature_date: "2020-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "hive"
  - "partitioned"
  - "external"
  - "storage"
  - "bigquery"
  - "can"
  - "load"
  - "query"
---

# Hive-partitioned external data on Cloud Storage

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can load and query externally partitioned data stored in Cloud Storage using the default Hive partitioning layout; BigQuery can load and query externally partitioned data stored in Cloud Storage using the default Hive partitioning layout.

## Extended Definition

BigQuery can load and query externally partitioned data stored in Cloud Storage using the default Hive partitioning layout; BigQuery can load and query externally partitioned data stored in Cloud Storage using the default Hive partitioning layout.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Create external table with hive partitioning \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String sourceUri = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/ " ; String sourceUriPrefix = "gs://cloud-samples-data/bigquery/hive-partitioning-samples/customlayout/{pkey:STRING}/" ; createTableExternalHivePartitioned ( datasetName , tableName , sourceUriPrefix , sourceUri ); } public static void createTableExternalHivePartitioned ( String datasetName , String tableName , String sourceUriPrefix , String sourceUri ) { try { // Initialize client that will be used to send requests.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableExternalHivePartitioned demonstrates creating an external table with hive partitioning. func createTableExternalHivePartitioned ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // tableID := "mytableid" ctx := context .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); // Configuring partitioning options HivePartitioningOptions hivePartitioningOptions = HivePartitioningOptions . newBuilder () . setMode ( "CUSTOM" ) . setRequirePartitionFilter ( true ) . setSourceUriPrefix ( sourceUriPrefix ) . build (); TableId tableId = TableId . of ( datasetName , tableName ); ExternalTableDefinition customTable = ExternalTableDefinition . newBuilder ( sourceUri , FormatOptions . parquet ()) . setAutodetect ( true ) . setHivePartitioningOptions ( hivePartitioningOptions ) . build (); bigquery . create ( TableInfo . of ( tableId , customTable )); System . out . println ( "External table created using hivepartitioningoptions" ); } catch ( BigQueryException e ) { System . out . println ( "External table was not created" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Parquet , SourceURIs : [] string { "gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout/ " }, AutoDetect : true , }, } // The layout of the files in here is compatible with the layout requirements for hive partitioning, // so we can add an optional Hive partitioning configuration to leverage the object paths for deriving // partitioning column information. // // For more information on how partitions are extracted, see: // https://cloud.google.com/bigquery/docs/hive-partitioned-queries-gcs // // We have a "/dt=YYYY-MM-DD/" path component in our example files as documented above.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- CSV , skip leading rows = 1 , ) uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" load job = client . load table from uri ( uri , table id , job config = job config ) # Make an API request. load job . result () # Waits for the job to complete. destination table = client . get table ( table id ) print ( "Loaded {} rows." . format ( destination table . num rows )) Loading hive-partitioned CSV data BigQuery supports loading hive-partitioned CSV data stored on Cloud Storage and will populate the hive partitioning columns as columns in the destination BigQuery managed table.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiate clients const bigquery = new BigQuery (); const storage = new Storage (); / This sample loads the CSV file at https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv TODO(developer): Replace the following lines with the path to your file. / const bucketName = 'cloud-samples-data' ; const filename = 'bigquery/us-states/us-states-by-date.csv' ; async function loadTablePartitioned () { // Load data into a table that uses column-based time partitioning. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my new table'; // Configure the load job.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // importPartitionedTable demonstrates specifing time partitioning for a BigQuery table when loading // CSV data from Cloud Storage. func importPartitionedTable ( projectID , destDatasetID , destTableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Try BigQuery free Limitations You are subject to the following limitations when you load data into BigQuery from a Cloud Storage bucket: BigQuery does not guarantee data consistency for external data sources.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- External tables let BigQuery query data that is stored outside of BigQuery storage.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.

