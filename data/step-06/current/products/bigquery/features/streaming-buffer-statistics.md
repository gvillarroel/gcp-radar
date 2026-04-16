---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.925Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Streaming buffer statistics"
feature_slug: "streaming-buffer-statistics"
latest_feature_date: "2015-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart"
keywords:
  - "streaming"
  - "buffer"
  - "statistics"
  - "provide"
  - "table"
  - "size"
  - "availability"
  - "details"
---

# Streaming buffer statistics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Streaming buffer statistics provide table size and availability details for tables receiving streaming inserts.

## Extended Definition

Streaming buffer statistics provide table size and availability details for tables receiving streaming inserts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- The following are examples of actions that might result in this move: Insert, update, truncate, merge, or delete statements that change table data Loading, streaming, or appending data to the table ALTER statements that change the table schema Adding or modifying table properties like description, labels, or expiration Modifying table metadata Configure the storage billing model Best practice: Optimize the storage billing model based on your usage patterns.
- INFORMATION SCHEMA storage calculations don't match billing Use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view instead of INFORMATION SCHEMA.TABLE STORAGE - TABLE STORAGE USAGE TIMELINE provides more accurate and granular data to correctly calculate storage costs The queries run on INFORMATION SCHEMA views don't include taxes, adjustments, and rounding errors—take these into account when comparing the data.
- On-demand query size calculation To calculate the number of bytes processed by the various types of queries, see the following sections: DML statements DDL statements Clustered tables Note: The selected dataset storage billing model does not affect the on-demand query cost calculation.
- Querying very small tables results in disproportionately large cost for on-demand The minimum "processed data per referenced table" billed for a BigQuery query is 10 MiB, regardless of the actual size of the table.

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- To calculate the time it takes to apply upserted changes to an existing table, use the following SQL query to determine the 95th percentile duration of background apply jobs, plus a seven-minute buffer to allow for the BigQuery write-optimized storage (streaming buffer) conversion.
- The duration of background apply jobs is affected by several factors including the number and complexity of CDC operations issued within the staleness interval, the table size, and BigQuery resource availability.
- SELECT project id , destination table . dataset id , destination table . table id , APPROX QUANTILES (( TIMESTAMP DIFF ( end time , creation time , MILLISECOND ) / 1000 ), 100 ) [ OFFSET ( 95 ) ] AS p95 background apply duration in seconds , CEILING ( APPROX QUANTILES (( TIMESTAMP DIFF ( end time , creation time , MILLISECOND ) / 1000 ), 100 ) [ OFFSET ( 95 ) ] 2 / 60 ) + 7 AS recommended max staleness with buffer in minutes FROM region- REGION .
- To provide the freshest results when querying a CDC-enabled table, BigQuery must apply each streamed row modification up to the query start time, so that the most up-to-date version of the table is being queried.

### "Download table data in the Avro data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- It demonstrates API features such as column // projection (limiting the output to a subset of a table's columns), // column filtering (using simple predicates to filter records on the server // side), establishing the snapshot time (reading data from the table at a // specific point in time), decoding Avro row blocks using the third party // "github.com/linkedin/goavro" library, and decoding Arrow row blocks using // the third party "github.com/apache/arrow/go" library. package main import ( "bytes" "context" "encoding/json" "flag" "fmt" "io" "log" "sort" "strings" "sync" "time" bqStorage "cloud.google.com/go/bigquery/storage/apiv1" "cloud.google.com/go/bigquery/storage/apiv1/storagepb" "github.com/apache/arrow/go/v10/arrow" "github.com/apache/arrow/go/v10/arrow/ipc" "github.com/apache/arrow/go/v10/arrow/memory" gax "github.com/googleapis/gax-go/v2" goavro "github.com/linkedin/goavro/v2" "google.golang.org/genproto/googleapis/rpc/errdetails" "google.golang.org/grpc" "google.golang.org/grpc/codes" "google.golang.org/grpc/status" "google.golang.org/protobuf/types/known/timestamppb" ) // rpcOpts is used to configure the underlying gRPC client to accept large // messages.
- However, if you wanted to fan out multiple readers you could do so by having a reader process each individual stream. / client . readRows ( readRowsRequest ) . on ( 'error' , console . error ) . on ( 'data' , data = > { offset = data . avroRows . serializedBinaryRows . offset ; try { // Decode all rows in buffer let pos ; do { const decodedData = avroType . decode ( data . avroRows . serializedBinaryRows , pos , ); if ( decodedData . value ) { names . add ( decodedData . value . name ); if ( ! states . includes ( decodedData . value . state )) { states . push ( decodedData . value . state ); } } pos = decodedData . offset ; } while ( pos > 0 ); } catch ( error ) { console . log ( error ); } }) . on ( 'end' , () = > { console . log ( Got ${ names . size } unique names in states: ${ states } ); console . log ( Last offset: ${ offset } ); }); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; use Google\Cloud\BigQuery\Storage\V1\Client\BigQueryReadClient; use Google\Cloud\BigQuery\Storage\V1\CreateReadSessionRequest; use Google\Cloud\BigQuery\Storage\V1\DataFormat; use Google\Cloud\BigQuery\Storage\V1\ReadRowsRequest; use Google\Cloud\BigQuery\Storage\V1\ReadSession; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableModifiers; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableReadOptions; use Google\Protobuf\Timestamp; // Instantiates the client and sets the project $client = new BigQueryReadClient(); $project = $client->projectName('YOUR PROJECT ID'); $snapshotMillis = 'YOUR SNAPSHOT MILLIS'; // This example reads baby name data from the below public dataset. $table = $client->tableName( 'bigquery-public-data', 'usa names', 'usa 1910 current' ); // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. $readSession = new ReadSession(); $readSession->setTable($table)->setDataFormat(DataFormat::AVRO); // We limit the output columns to a subset of those allowed in the table, // and set a simple filter to only report names from the state of // Washington (WA). $readOptions = new TableReadOptions(); $readOptions->setSelectedFields(['name', 'number', 'state']); $readOptions->setRowRestriction('state = "WA"'); $readSession->setReadOptions($readOptions); // With snapshot millis if present if (!empty($snapshotMillis)) { $timestamp = new Timestamp(); $timestamp->setSeconds($snapshotMillis / 1000); $timestamp->setNanos((int) ($snapshotMillis % 1000) 1000000); $tableModifier = new TableModifiers(); $tableModifier->setSnapshotTime($timestamp); $readSession->setTableModifiers($tableModifier); } try { $createReadSessionRequest = (new CreateReadSessionRequest()) ->setParent($project) ->setReadSession($readSession) ->setMaxStreamCount(1); $session = $client->createReadSession($createReadSessionRequest); $readRowsRequest = (new ReadRowsRequest()) ->setReadStream($session->getStreams()[0]->getName()); $stream = $client->readRows($readRowsRequest); // Do any local processing by iterating over the responses.
- For more information, see Set up authentication for client libraries . #include "google/cloud/bigquery/storage/v1/bigquery read client.h" #include <iostream> namespace { void ProcessRowsInAvroFormat ( :: google :: cloud :: bigquery :: storage :: v1 :: AvroSchema const & , :: google :: cloud :: bigquery :: storage :: v1 :: AvroRows const & ) { // Code to deserialize avro rows should be added here. } } // namespace int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " <project-id> <table-name> \n " ; return 1 ; } // project name should be in the format "projects/<your-gcp-project>" std :: string const project name = "projects/" + std :: string ( argv [ 1 ]); // table name should be in the format: // "projects/<project-table-resides-in>/datasets/<dataset-table resides-in>/tables/<table // name>" The project values in project name and table name do not have to be // identical. std :: string const table name = argv [ 2 ]; // Create a namespace alias to make the code easier to read. namespace bigquery storage = :: google :: cloud :: bigquery storage v1 ; constexpr int kMaxReadStreams = 1 ; // Create the ReadSession. auto client = bigquery storage :: BigQueryReadClient ( bigquery storage :: MakeBigQueryReadConnection ()); :: google :: cloud :: bigquery :: storage :: v1 :: ReadSession read session ; read session . set data format ( google :: cloud :: bigquery :: storage :: v1 :: DataFormat :: AVRO ); read session . set table ( table name ); auto session = client .

