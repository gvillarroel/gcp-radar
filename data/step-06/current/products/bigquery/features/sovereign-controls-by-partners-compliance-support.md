---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.594Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Sovereign Controls by Partners compliance support"
feature_slug: "sovereign-controls-by-partners-compliance-support"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
keywords:
  - "sovereign"
  - "controls"
  - "partners"
  - "compliance"
  - "bigquery"
  - "supports"
  - "program"
---

# Sovereign Controls by Partners compliance support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the Sovereign Controls by Partners compliance program.

## Extended Definition

BigQuery supports the Sovereign Controls by Partners compliance program.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)

## Supporting Pages

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run , the query takes 1-2 minutes to complete: WITH bike share trips AS ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) AS trip hour , COUNT ( ) AS num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ) SELECT FROM AI .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH bike share trips AS ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) AS trip hour , COUNT ( ) AS num trips , subscriber type FROM bigquery-public-data.san francisco bikeshare.bikeshare trips GROUP BY TIMESTAMP TRUNC ( start date , HOUR ), subscriber type ) SELECT FROM AI .
- Home Documentation Data analytics BigQuery Guides Send feedback Detect anomalies in multiple time series with the TimesFM model Stay organized with collections Save and categorize content based on your preferences.
- Costs This tutorial uses billable components of Google Cloud, including the following: BigQuery BigQuery ML For more information about BigQuery costs, see the BigQuery pricing page.

### "Download table data in the Arrow data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- ArrowRecordBatch deserializedBatch = MessageSerializer . deserializeRecordBatch ( new ReadChannel ( new ByteArrayReadableSeekableByteChannel ( batch . getSerializedRecordBatch (). toByteArray ())), allocator ); loader . load ( deserializedBatch ); // Release buffers from batch (they are still held in the vectors in root). deserializedBatch . close (); System . out . println ( root . contentToTSVString ()); // Release buffers from vectors in root. root . clear (); } @Override public void close () { root . close (); allocator . close (); } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.
- String srcTable = String . format ( "projects/%s/datasets/%s/tables/%s" , "bigquery-public-data" , "usa names" , "usa 1910 current" ); // We specify the columns to be projected by adding them to the selected fields, // and set a simple filter to restrict which rows are transmitted.
- Explore further For detailed documentation that includes this code sample, see the following: BigQuery Storage API Client Libraries Code sample Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Download table data in the Arrow data format Stay organized with collections Save and categorize content based on your preferences.

### "Download table data in the Avro data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; use Google\Cloud\BigQuery\Storage\V1\Client\BigQueryReadClient; use Google\Cloud\BigQuery\Storage\V1\CreateReadSessionRequest; use Google\Cloud\BigQuery\Storage\V1\DataFormat; use Google\Cloud\BigQuery\Storage\V1\ReadRowsRequest; use Google\Cloud\BigQuery\Storage\V1\ReadSession; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableModifiers; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableReadOptions; use Google\Protobuf\Timestamp; // Instantiates the client and sets the project $client = new BigQueryReadClient(); $project = $client->projectName('YOUR PROJECT ID'); $snapshotMillis = 'YOUR SNAPSHOT MILLIS'; // This example reads baby name data from the below public dataset. $table = $client->tableName( 'bigquery-public-data', 'usa names', 'usa 1910 current' ); // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. $readSession = new ReadSession(); $readSession->setTable($table)->setDataFormat(DataFormat::AVRO); // We limit the output columns to a subset of those allowed in the table, // and set a simple filter to only report names from the state of // Washington (WA). $readOptions = new TableReadOptions(); $readOptions->setSelectedFields(['name', 'number', 'state']); $readOptions->setRowRestriction('state = "WA"'); $readSession->setReadOptions($readOptions); // With snapshot millis if present if (!empty($snapshotMillis)) { $timestamp = new Timestamp(); $timestamp->setSeconds($snapshotMillis / 1000); $timestamp->setNanos((int) ($snapshotMillis % 1000) 1000000); $tableModifier = new TableModifiers(); $tableModifier->setSnapshotTime($timestamp); $readSession->setTableModifiers($tableModifier); } try { $createReadSessionRequest = (new CreateReadSessionRequest()) ->setParent($project) ->setReadSession($readSession) ->setMaxStreamCount(1); $session = $client->createReadSession($createReadSessionRequest); $readRowsRequest = (new ReadRowsRequest()) ->setReadStream($session->getStreams()[0]->getName()); $stream = $client->readRows($readRowsRequest); // Do any local processing by iterating over the responses.
- Timestamp ; import java.io.IOException ; import org.apache.avro.Schema ; import org.apache.avro.generic.GenericDatumReader ; import org.apache.avro.generic.GenericRecord ; import org.apache.avro.io.BinaryDecoder ; import org.apache.avro.io.DatumReader ; import org.apache.avro.io.DecoderFactory ; public class StorageSample { / SimpleRowReader handles deserialization of the Avro-encoded row blocks transmitted from the storage API using a generic datum decoder. / private static class SimpleRowReader { private final DatumReader<GenericRecord> datumReader ; // Decoder object will be reused to avoid re-allocation and too much garbage collection. private BinaryDecoder decoder = null ; // GenericRecord object will be reused. private GenericRecord row = null ; public SimpleRowReader ( Schema schema ) { Preconditions . checkNotNull ( schema ); datumReader = new GenericDatumReader <> ( schema ); } / Sample method for processing AVRO rows which only validates decoding. @param avroRows object returned from the ReadRowsResponse. / public void processRows ( AvroRows avroRows ) throws IOException { decoder = DecoderFactory . get () . binaryDecoder ( avroRows . getSerializedBinaryRows (). toByteArray (), decoder ); while ( ! decoder . isEnd ()) { // Reusing object row row = datumReader . read ( row , decoder ); System . out . println ( row . toString ()); } } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.
- For more information, see Set up authentication for client libraries . #include "google/cloud/bigquery/storage/v1/bigquery read client.h" #include <iostream> namespace { void ProcessRowsInAvroFormat ( :: google :: cloud :: bigquery :: storage :: v1 :: AvroSchema const & , :: google :: cloud :: bigquery :: storage :: v1 :: AvroRows const & ) { // Code to deserialize avro rows should be added here. } } // namespace int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " <project-id> <table-name> \n " ; return 1 ; } // project name should be in the format "projects/<your-gcp-project>" std :: string const project name = "projects/" + std :: string ( argv [ 1 ]); // table name should be in the format: // "projects/<project-table-resides-in>/datasets/<dataset-table resides-in>/tables/<table // name>" The project values in project name and table name do not have to be // identical. std :: string const table name = argv [ 2 ]; // Create a namespace alias to make the code easier to read. namespace bigquery storage = :: google :: cloud :: bigquery storage v1 ; constexpr int kMaxReadStreams = 1 ; // Create the ReadSession. auto client = bigquery storage :: BigQueryReadClient ( bigquery storage :: MakeBigQueryReadConnection ()); :: google :: cloud :: bigquery :: storage :: v1 :: ReadSession read session ; read session . set data format ( google :: cloud :: bigquery :: storage :: v1 :: DataFormat :: AVRO ); read session . set table ( table name ); auto session = client .
- The read session is created in this project. // This project can be different from that which contains the table. const myProjectId = await client . getProjectId (); // This example reads baby name data from the public datasets. const projectId = 'bigquery-public-data' ; const datasetId = 'usa names' ; const tableId = 'usa 1910 current' ; const tableReference = projects/ ${ projectId } /datasets/ ${ datasetId } /tables/ ${ tableId } ; const parent = projects/ ${ myProjectId } ; / We limit the output columns to a subset of those allowed in the table, and set a simple filter to only report names from the state of Washington (WA). / const readOptions = { selectedFields : [ 'name' , 'number' , 'state' ], rowRestriction : 'state = "WA"' , }; let tableModifiers = null ; const snapshotSeconds = 0 ; // Set a snapshot time if it's been specified. if ( snapshotSeconds > 0 ) { tableModifiers = { snapshotTime : { seconds : snapshotSeconds }}; } // API request. const request = { parent , readSession : { table : tableReference , // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. dataFormat : 'AVRO' , readOptions , tableModifiers , }, }; const [ session ] = await client . createReadSession ( request ); const schema = JSON . parse ( session . avroSchema . schema ); const avroType = avro .

