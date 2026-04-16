---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.944Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON schema format in Create Table dialog"
feature_slug: "json-schema-format-in-create-table-dialog"
latest_feature_date: "2011-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart"
keywords:
  - "json"
  - "schema"
  - "format"
  - "create"
  - "table"
  - "dialog"
  - "lets"
  - "bigquery"
---

# JSON schema format in Create Table dialog

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

JSON schema format in the Create Table dialog lets the BigQuery web UI use the same schema format as the API and command-line client.

## Extended Definition

JSON schema format in the Create Table dialog lets the BigQuery web UI use the same schema format as the API and command-line client.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)

## Supporting Pages

### Create table with schema \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- Source ID: `site-docs-reference-required-15`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Creates a table with the given ID and Schema @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. @param string $tableId The BigQuery table ID. @param string $fields Json Encoded string of schema of the table.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For eg, $fields = json encode([ [ 'name' => 'field1', 'type' => 'string', 'mode' => 'required' ], [ 'name' => 'field2', 'type' => 'integer' ], ]); / function create table( string $projectId, string $datasetId, string $tableId, string $fields ): void { $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $fields = json decode($fields); $schema = ['fields' => $fields]; $table = $dataset->createTable($tableId, ['schema' => $schema]); printf('Created table %s' .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // createTableExplicitSchema demonstrates creating a new BigQuery table and specifying a schema. func createTableExplicitSchema ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // tableID := "mytableid" ctx := context .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $datasetId = 'The BigQuery dataset ID'; // $tableId = 'The BigQuery table ID'; // $fields = [ // [ // 'name' => 'field1', // 'type' => 'string', // 'mode' => 'required' // ], // [ // 'name' => 'field2', // 'type' => 'integer' // ], //]; $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $schema = ['fields' => $fields]; $table = $dataset->createTable($tableId, ['schema' => $schema]); printf('Created table %s' .
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def create table dataset id = "my dataset" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "my table" table = dataset . create table table id do updater updater . string "full name" , mode : :required updater . integer "age" , mode : :required end puts "Created table: #{ table id } " end Create an empty table without a schema definition Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // createTableExplicitSchema demonstrates creating a new BigQuery table and specifying a schema. func createTableExplicitSchema ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // tableID := "mytableid" ctx := context .

### "Download table data in the Avro data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The read session is created in this project. // This project can be different from that which contains the table. const myProjectId = await client . getProjectId (); // This example reads baby name data from the public datasets. const projectId = 'bigquery-public-data' ; const datasetId = 'usa names' ; const tableId = 'usa 1910 current' ; const tableReference = projects/ ${ projectId } /datasets/ ${ datasetId } /tables/ ${ tableId } ; const parent = projects/ ${ myProjectId } ; / We limit the output columns to a subset of those allowed in the table, and set a simple filter to only report names from the state of Washington (WA). / const readOptions = { selectedFields : [ 'name' , 'number' , 'state' ], rowRestriction : 'state = "WA"' , }; let tableModifiers = null ; const snapshotSeconds = 0 ; // Set a snapshot time if it's been specified. if ( snapshotSeconds > 0 ) { tableModifiers = { snapshotTime : { seconds : snapshotSeconds }}; } // API request. const request = { parent , readSession : { table : tableReference , // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. dataFormat : 'AVRO' , readOptions , tableModifiers , }, }; const [ session ] = await client . createReadSession ( request ); const schema = JSON . parse ( session . avroSchema . schema ); const avroType = avro .
- For more information, see Set up authentication for client libraries . #include "google/cloud/bigquery/storage/v1/bigquery read client.h" #include <iostream> namespace { void ProcessRowsInAvroFormat ( :: google :: cloud :: bigquery :: storage :: v1 :: AvroSchema const & , :: google :: cloud :: bigquery :: storage :: v1 :: AvroRows const & ) { // Code to deserialize avro rows should be added here. } } // namespace int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " <project-id> <table-name> \n " ; return 1 ; } // project name should be in the format "projects/<your-gcp-project>" std :: string const project name = "projects/" + std :: string ( argv [ 1 ]); // table name should be in the format: // "projects/<project-table-resides-in>/datasets/<dataset-table resides-in>/tables/<table // name>" The project values in project name and table name do not have to be // identical. std :: string const table name = argv [ 2 ]; // Create a namespace alias to make the code easier to read. namespace bigquery storage = :: google :: cloud :: bigquery storage v1 ; constexpr int kMaxReadStreams = 1 ; // Create the ReadSession. auto client = bigquery storage :: BigQueryReadClient ( bigquery storage :: MakeBigQueryReadConnection ()); :: google :: cloud :: bigquery :: storage :: v1 :: ReadSession read session ; read session . set data format ( google :: cloud :: bigquery :: storage :: v1 :: DataFormat :: AVRO ); read session . set table ( table name ); auto session = client .
- For more information, see Set up authentication for client libraries . // Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; use Google\Cloud\BigQuery\Storage\V1\Client\BigQueryReadClient; use Google\Cloud\BigQuery\Storage\V1\CreateReadSessionRequest; use Google\Cloud\BigQuery\Storage\V1\DataFormat; use Google\Cloud\BigQuery\Storage\V1\ReadRowsRequest; use Google\Cloud\BigQuery\Storage\V1\ReadSession; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableModifiers; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableReadOptions; use Google\Protobuf\Timestamp; // Instantiates the client and sets the project $client = new BigQueryReadClient(); $project = $client->projectName('YOUR PROJECT ID'); $snapshotMillis = 'YOUR SNAPSHOT MILLIS'; // This example reads baby name data from the below public dataset. $table = $client->tableName( 'bigquery-public-data', 'usa names', 'usa 1910 current' ); // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. $readSession = new ReadSession(); $readSession->setTable($table)->setDataFormat(DataFormat::AVRO); // We limit the output columns to a subset of those allowed in the table, // and set a simple filter to only report names from the state of // Washington (WA). $readOptions = new TableReadOptions(); $readOptions->setSelectedFields(['name', 'number', 'state']); $readOptions->setRowRestriction('state = "WA"'); $readSession->setReadOptions($readOptions); // With snapshot millis if present if (!empty($snapshotMillis)) { $timestamp = new Timestamp(); $timestamp->setSeconds($snapshotMillis / 1000); $timestamp->setNanos((int) ($snapshotMillis % 1000) 1000000); $tableModifier = new TableModifiers(); $tableModifier->setSnapshotTime($timestamp); $readSession->setTableModifiers($tableModifier); } try { $createReadSessionRequest = (new CreateReadSessionRequest()) ->setParent($project) ->setReadSession($readSession) ->setMaxStreamCount(1); $session = $client->createReadSession($createReadSessionRequest); $readRowsRequest = (new ReadRowsRequest()) ->setReadStream($session->getStreams()[0]->getName()); $stream = $client->readRows($readRowsRequest); // Do any local processing by iterating over the responses.
- Timestamp ; import java.io.IOException ; import org.apache.avro.Schema ; import org.apache.avro.generic.GenericDatumReader ; import org.apache.avro.generic.GenericRecord ; import org.apache.avro.io.BinaryDecoder ; import org.apache.avro.io.DatumReader ; import org.apache.avro.io.DecoderFactory ; public class StorageSample { / SimpleRowReader handles deserialization of the Avro-encoded row blocks transmitted from the storage API using a generic datum decoder. / private static class SimpleRowReader { private final DatumReader<GenericRecord> datumReader ; // Decoder object will be reused to avoid re-allocation and too much garbage collection. private BinaryDecoder decoder = null ; // GenericRecord object will be reused. private GenericRecord row = null ; public SimpleRowReader ( Schema schema ) { Preconditions . checkNotNull ( schema ); datumReader = new GenericDatumReader <> ( schema ); } / Sample method for processing AVRO rows which only validates decoding. @param avroRows object returned from the ReadRowsResponse. / public void processRows ( AvroRows avroRows ) throws IOException { decoder = DecoderFactory . get () . binaryDecoder ( avroRows . getSerializedBinaryRows (). toByteArray (), decoder ); while ( ! decoder . isEnd ()) { // Reusing object row row = datumReader . read ( row , decoder ); System . out . println ( row . toString ()); } } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.

