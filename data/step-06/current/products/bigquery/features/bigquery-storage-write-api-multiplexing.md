---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.582Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Storage Write API multiplexing"
feature_slug: "bigquery-storage-write-api-multiplexing"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bigquery"
  - "storage"
  - "write"
  - "multiplexing"
  - "lets"
  - "default"
  - "stream"
  - "multiple"
---

# BigQuery Storage Write API multiplexing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Storage Write API multiplexing lets the default stream write to multiple destination tables with shared connections.

## Extended Definition

Storage Write API multiplexing lets the default stream write to multiple destination tables with shared connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### BigQuery Storage API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For examples of how to use the BigQuery Storage Write API, see Perform batch and streaming using the Storage Write API .
- C++ #include "google/cloud/bigquery/storage/v1/bigquery read client.h" #include <iostream> namespace { void ProcessRowsInAvroFormat ( :: google :: cloud :: bigquery :: storage :: v1 :: AvroSchema const & , :: google :: cloud :: bigquery :: storage :: v1 :: AvroRows const & ) { // Code to deserialize avro rows should be added here. } } // namespace int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " <project-id> <table-name> \n " ; return 1 ; } // project name should be in the format "projects/<your-gcp-project>" std :: string const project name = "projects/" + std :: string ( argv [ 1 ]); // table name should be in the format: // "projects/<project-table-resides-in>/datasets/<dataset-table resides-in>/tables/<table // name>" The project values in project name and table name do not have to be // identical. std :: string const table name = argv [ 2 ]; // Create a namespace alias to make the code easier to read. namespace bigquery storage = :: google :: cloud :: bigquery storage v1 ; constexpr int kMaxReadStreams = 1 ; // Create the ReadSession. auto client = bigquery storage :: BigQueryReadClient ( bigquery storage :: MakeBigQueryReadConnection ()); :: google :: cloud :: bigquery :: storage :: v1 :: ReadSession read session ; read session . set data format ( google :: cloud :: bigquery :: storage :: v1 :: DataFormat :: AVRO ); read session . set table ( table name ); auto session = client .
- ReadRows ( session - > streams ( 0 ). name (), kRowOffset ); std :: int64 t num rows = 0 ; for ( auto const & row : read rows ) { if ( row . ok ()) { num rows += row - > row count (); ProcessRowsInAvroFormat ( session - > avro schema (), row - > avro rows ()); } } std :: cout << num rows << " rows read from table: " << table name << " \n " ; return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } Go // The bigquery storage quickstart application demonstrates usage of the // BigQuery Storage read API.
- ServerStream<ReadRowsResponse> stream = client . readRowsCallable (). call ( readRowsRequest ); for ( ReadRowsResponse response : stream ) { Preconditions . checkState ( response . hasArrowRecordBatch ()); reader . processRows ( response . getArrowRecordBatch ()); } } } } } Python from google.cloud.bigquery storage import BigQueryReadClient , types TODO(developer): Set the project id variable. project id = 'your-project-id' The read session is created in this project.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- To replace the rows in an existing table, set the writeDisposition value in the metadata parameter to 'WRITE TRUNCATE' . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiate clients const bigquery = new BigQuery (); const storage = new Storage (); / This sample loads the CSV file at https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv TODO(developer): Replace the following lines with the path to your file. / const bucketName = 'cloud-samples-data' ; const filename = 'bigquery/us-states/us-states.csv' ; async function loadCSVFromGCSTruncate () { / Imports a GCS file into a table and overwrites table data if table already exists. / / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Configure the load job.
- For full list of options, see: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad const metadata = { sourceFormat : 'CSV' , skipLeadingRows : 1 , schema : { fields : [ { name : 'name' , type : 'STRING' }, { name : 'post abbr' , type : 'STRING' }, ], }, // Set the write disposition to overwrite existing table data. writeDisposition : 'WRITE TRUNCATE' , location : 'US' , }; // Load data from a Google Cloud Storage file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( storage . bucket ( bucketName ). file ( filename ), metadata ); // load() waits for the job to finish console . log ( Job ${ job . id } completed. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; use Google\Cloud\Core\ExponentialBackoff; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $datasetId = 'The BigQuery dataset ID'; // $tableId = 'The BigQuery table ID'; // instantiate the bigquery table service $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $table = $bigQuery->dataset($datasetId)->table($tableId); // create the import job $gcsUri = 'gs://cloud-samples-data/bigquery/us-states/us-states.csv'; $loadConfig = $table->loadFromStorage($gcsUri)->skipLeadingRows(1)->writeDisposition('WRITE TRUNCATE'); $job = $table->runJob($loadConfig); // poll the job until it is complete $backoff = new ExponentialBackoff(10); $backoff->execute(function () use ($job) { print('Waiting for job to complete' .
- The following gcloud storage cat command streams the file from Cloud Storage, decompresses the file, identifies the appropriate byte offset, and prints the line with the format error: gcloud storage cat gs://my-bucket/mytable.csv.gz gunzip - tail -c +1406 head -n 1 The output is similar to the following: 16,Abraham Lincoln,"March 4, 1861", "April 15, "1865 ,Republican Troubleshoot quota errors Use the information in this section to troubleshoot quota or limit errors related to loading CSV files into BigQuery.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- The table option list specifies the: Table expiration time: January 1, 2025 at 00:00:00 UTC Partition expiration time: 1 day Description: A table that expires in 2025 Label: org unit = development Creating a new table from an existing table The following example creates a table named top words in mydataset from a query: CREATE TABLE mydataset . top words OPTIONS ( description = "Top ten words per Shakespeare corpus" ) AS SELECT corpus , ARRAY AGG ( STRUCT ( word , word count ) ORDER BY word count DESC LIMIT 10 ) AS top words FROM bigquery - public - data . samples . shakespeare GROUP BY corpus ; If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.

