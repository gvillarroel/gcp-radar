---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.927Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud Datastore data loading"
feature_slug: "cloud-datastore-data-loading"
latest_feature_date: "2015-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
keywords:
  - "datastore"
  - "loading"
  - "lets"
  - "bigquery"
  - "import"
---

# Cloud Datastore data loading

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Cloud Datastore data loading lets BigQuery import data from Google Cloud Datastore.

## Extended Definition

Cloud Datastore data loading lets BigQuery import data from Google Cloud Datastore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)

## Supporting Pages

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- To load a local file of another format, set the DataFormat property of the NewReaderSource to the appropriate format. import ( "context" "fmt" "os" "cloud.google.com/go/bigquery" ) // importCSVFromFile demonstrates loading data into a BigQuery table using a file on the local filesystem. func importCSVFromFile ( projectID , datasetID , tableID , filename string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Loading data from Cloud Storage BigQuery supports loading data from any of the following Cloud Storage storage classes : Standard Nearline Coldline Archive To learn how to load data into BigQuery, see the page for your data format: CSV JSON Avro Parquet ORC Datastore exports Firestore exports To learn how to configure a recurring load from Cloud Storage into BigQuery, see Cloud Storage transfers .
- To load a local file of another format, set the metadata parameter of the load function to the appropriate format. // Imports the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function loadLocalFile () { // Imports a local file into a table. / TODO(developer): Uncomment the following lines before running the sample. / // const filename = '/path/to/file.csv'; // const datasetId = 'my dataset'; // const tableId = 'my table'; // Load data from a local file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( filename ); console . log ( Job ${ job . id } completed. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- To load a local file of another format, set the format parameter of the Table#load job method to the appropriate format. require "google/cloud/bigquery" def load from file dataset id = "your dataset id" , file path = "path/to/file.csv" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "new table id" Infer the config.location based on the location of the referenced dataset. load job = dataset . load job table id , file path do config config . skip leading = 1 config . autodetect = true end load job . wait until done! # Waits for table load to complete. table = dataset . table table id puts "Loaded #{ table . rows count } rows into #{ table . id } " end Limitations Loading data from a local data source is subject to the following limitations: Wildcards and comma-separated lists are not supported when you load files from a local data source.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // importCSVExplicitSchema demonstrates loading CSV data from Cloud Storage into a BigQuery // table and providing an explicit schema for the data. func importCSVExplicitSchema ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // importPartitionedTable demonstrates specifing time partitioning for a BigQuery table when loading // CSV data from Cloud Storage. func importPartitionedTable ( projectID , destDatasetID , destTableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // importCSVTruncate demonstrates loading data from CSV data in Cloud Storage and overwriting/truncating // data in the existing table. func importCSVTruncate ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def load table gcs csv dataset id = "your dataset id" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id gcs uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" table id = "us states" load job = dataset . load job table id , gcs uri , skip leading : 1 do schema schema . string "name" schema . string "post abbr" end puts "Starting job #{ load job . job id } " load job . wait until done! # Waits for table load to complete. puts "Job finished." table = dataset . table table id puts "Loaded #{ table . rows count } rows to table #{ table . id } " end Loading CSV data into a table that uses column-based time partitioning To load CSV data from Cloud Storage into a BigQuery table that uses column-based time partitioning: Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery lets you create external connections to query data that's stored outside of BigQuery in Google Cloud services like Cloud Storage or Spanner, or in third-party sources like Amazon Web Services (AWS) or Microsoft Azure.
- Methods of loading or accessing external data In the BigQuery page, in the Add data dialog , you can view all available methods to load data into BigQuery or access data from BigQuery.
- Run queries with log data You can run queries on logs without creating additional load jobs: Cloud Logging lets you route logs to a BigQuery destination .
- For batch or incremental loading of data from Cloud Storage and other supported data sources, we recommend using the BigQuery Data Transfer Service .

