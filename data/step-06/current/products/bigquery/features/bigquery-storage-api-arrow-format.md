---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.812Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Storage API Arrow format"
feature_slug: "bigquery-storage-api-arrow-format"
latest_feature_date: "2019-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart"
keywords:
  - "bigquery"
  - "storage"
  - "arrow"
  - "format"
  - "supports"
  - "reading"
---

# BigQuery Storage API Arrow format

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery Storage API supports reading BigQuery data in Arrow format.

## Extended Definition

The BigQuery Storage API supports reading BigQuery data in Arrow format.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)

## Supporting Pages

### "Download table data in the Arrow data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ArrowRecordBatch deserializedBatch = MessageSerializer . deserializeRecordBatch ( new ReadChannel ( new ByteArrayReadableSeekableByteChannel ( batch . getSerializedRecordBatch (). toByteArray ())), allocator ); loader . load ( deserializedBatch ); // Release buffers from batch (they are still held in the vectors in root). deserializedBatch . close (); System . out . println ( root . contentToTSVString ()); // Release buffers from vectors in root. root . clear (); } @Override public void close () { root . close (); allocator . close (); } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.
- Home Documentation Data analytics BigQuery Samples Download table data in the Arrow data format Stay organized with collections Save and categorize content based on your preferences.
- ArrowRecordBatch ; import com.google.cloud.bigquery.storage.v1.
- ArrowSchema ; import com.google.cloud.bigquery.storage.v1.

### BigQuery Storage API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It demonstrates API features such as column // projection (limiting the output to a subset of a table's columns), // column filtering (using simple predicates to filter records on the server // side), establishing the snapshot time (reading data from the table at a // specific point in time), decoding Avro row blocks using the third party // "github.com/linkedin/goavro" library, and decoding Arrow row blocks using // the third party "github.com/apache/arrow/go" library. package main import ( "bytes" "context" "encoding/json" "flag" "fmt" "io" "log" "sort" "strings" "sync" "time" bqStorage "cloud.google.com/go/bigquery/storage/apiv1" "cloud.google.com/go/bigquery/storage/apiv1/storagepb" "github.com/apache/arrow/go/v10/arrow" "github.com/apache/arrow/go/v10/arrow/ipc" "github.com/apache/arrow/go/v10/arrow/memory" gax "github.com/googleapis/gax-go/v2" goavro "github.com/linkedin/goavro/v2" "google.golang.org/genproto/googleapis/rpc/errdetails" "google.golang.org/grpc" "google.golang.org/grpc/codes" "google.golang.org/grpc/status" "google.golang.org/protobuf/types/known/timestamppb" ) // rpcOpts is used to configure the underlying gRPC client to accept large // messages.
- See https://github.com/googleapis/python-bigquery-storage/pull/687 try : for row in rows : names . add ( row [ "name" ]) states . add ( row [ "state" ]) except EOFError : pass print ( "Got {} unique names in states: {} " . format ( len ( names ), ", " . join ( states ))) Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code What's next?
- C++ #include "google/cloud/bigquery/storage/v1/bigquery read client.h" #include <iostream> namespace { void ProcessRowsInAvroFormat ( :: google :: cloud :: bigquery :: storage :: v1 :: AvroSchema const & , :: google :: cloud :: bigquery :: storage :: v1 :: AvroRows const & ) { // Code to deserialize avro rows should be added here. } } // namespace int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " <project-id> <table-name> \n " ; return 1 ; } // project name should be in the format "projects/<your-gcp-project>" std :: string const project name = "projects/" + std :: string ( argv [ 1 ]); // table name should be in the format: // "projects/<project-table-resides-in>/datasets/<dataset-table resides-in>/tables/<table // name>" The project values in project name and table name do not have to be // identical. std :: string const table name = argv [ 2 ]; // Create a namespace alias to make the code easier to read. namespace bigquery storage = :: google :: cloud :: bigquery storage v1 ; constexpr int kMaxReadStreams = 1 ; // Create the ReadSession. auto client = bigquery storage :: BigQueryReadClient ( bigquery storage :: MakeBigQueryReadConnection ()); :: google :: cloud :: bigquery :: storage :: v1 :: ReadSession read session ; read session . set data format ( google :: cloud :: bigquery :: storage :: v1 :: DataFormat :: AVRO ); read session . set table ( table name ); auto session = client .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .70.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < dependency > < groupId>io . opentelemetry < / groupId > < artifactId>opentelemetry - bom < / artifactId > < version>1 .52.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - bigquerystorage < / artifactId > < / dependency > If you are using Gradle , add the following to your dependencies: implementation platform ( ' com . google . cloud : libraries - bom : 26.74.0 ' ) implementation ' com . google . cloud : google - cloud - bigquerystorage ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-bigquerystorage" % "3.21.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

### "Download table data in the Avro data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; use Google\Cloud\BigQuery\Storage\V1\Client\BigQueryReadClient; use Google\Cloud\BigQuery\Storage\V1\CreateReadSessionRequest; use Google\Cloud\BigQuery\Storage\V1\DataFormat; use Google\Cloud\BigQuery\Storage\V1\ReadRowsRequest; use Google\Cloud\BigQuery\Storage\V1\ReadSession; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableModifiers; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableReadOptions; use Google\Protobuf\Timestamp; // Instantiates the client and sets the project $client = new BigQueryReadClient(); $project = $client->projectName('YOUR PROJECT ID'); $snapshotMillis = 'YOUR SNAPSHOT MILLIS'; // This example reads baby name data from the below public dataset. $table = $client->tableName( 'bigquery-public-data', 'usa names', 'usa 1910 current' ); // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. $readSession = new ReadSession(); $readSession->setTable($table)->setDataFormat(DataFormat::AVRO); // We limit the output columns to a subset of those allowed in the table, // and set a simple filter to only report names from the state of // Washington (WA). $readOptions = new TableReadOptions(); $readOptions->setSelectedFields(['name', 'number', 'state']); $readOptions->setRowRestriction('state = "WA"'); $readSession->setReadOptions($readOptions); // With snapshot millis if present if (!empty($snapshotMillis)) { $timestamp = new Timestamp(); $timestamp->setSeconds($snapshotMillis / 1000); $timestamp->setNanos((int) ($snapshotMillis % 1000) 1000000); $tableModifier = new TableModifiers(); $tableModifier->setSnapshotTime($timestamp); $readSession->setTableModifiers($tableModifier); } try { $createReadSessionRequest = (new CreateReadSessionRequest()) ->setParent($project) ->setReadSession($readSession) ->setMaxStreamCount(1); $session = $client->createReadSession($createReadSessionRequest); $readRowsRequest = (new ReadRowsRequest()) ->setReadStream($session->getStreams()[0]->getName()); $stream = $client->readRows($readRowsRequest); // Do any local processing by iterating over the responses.
- It demonstrates API features such as column // projection (limiting the output to a subset of a table's columns), // column filtering (using simple predicates to filter records on the server // side), establishing the snapshot time (reading data from the table at a // specific point in time), decoding Avro row blocks using the third party // "github.com/linkedin/goavro" library, and decoding Arrow row blocks using // the third party "github.com/apache/arrow/go" library. package main import ( "bytes" "context" "encoding/json" "flag" "fmt" "io" "log" "sort" "strings" "sync" "time" bqStorage "cloud.google.com/go/bigquery/storage/apiv1" "cloud.google.com/go/bigquery/storage/apiv1/storagepb" "github.com/apache/arrow/go/v10/arrow" "github.com/apache/arrow/go/v10/arrow/ipc" "github.com/apache/arrow/go/v10/arrow/memory" gax "github.com/googleapis/gax-go/v2" goavro "github.com/linkedin/goavro/v2" "google.golang.org/genproto/googleapis/rpc/errdetails" "google.golang.org/grpc" "google.golang.org/grpc/codes" "google.golang.org/grpc/status" "google.golang.org/protobuf/types/known/timestamppb" ) // rpcOpts is used to configure the underlying gRPC client to accept large // messages.
- For more information, see Set up authentication for client libraries . using Avro ; using Avro.IO ; using Avro.Specific ; using BigQueryStorage.Samples.Utilities ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.BigQuery.Storage.V1 ; using System ; using System.Collections.Generic ; using System.IO ; using System.Linq ; using System.Threading.Tasks ; using static Google .
- Timestamp ; import java.io.IOException ; import org.apache.avro.Schema ; import org.apache.avro.generic.GenericDatumReader ; import org.apache.avro.generic.GenericRecord ; import org.apache.avro.io.BinaryDecoder ; import org.apache.avro.io.DatumReader ; import org.apache.avro.io.DecoderFactory ; public class StorageSample { / SimpleRowReader handles deserialization of the Avro-encoded row blocks transmitted from the storage API using a generic datum decoder. / private static class SimpleRowReader { private final DatumReader<GenericRecord> datumReader ; // Decoder object will be reused to avoid re-allocation and too much garbage collection. private BinaryDecoder decoder = null ; // GenericRecord object will be reused. private GenericRecord row = null ; public SimpleRowReader ( Schema schema ) { Preconditions . checkNotNull ( schema ); datumReader = new GenericDatumReader <> ( schema ); } / Sample method for processing AVRO rows which only validates decoding. @param avroRows object returned from the ReadRowsResponse. / public void processRows ( AvroRows avroRows ) throws IOException { decoder = DecoderFactory . get () . binaryDecoder ( avroRows . getSerializedBinaryRows (). toByteArray (), decoder ); while ( ! decoder . isEnd ()) { // Reusing object row row = datumReader . read ( row , decoder ); System . out . println ( row . toString ()); } } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.

