---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.358Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Apache Arrow support for Storage Write API"
feature_slug: "apache-arrow-support-for-storage-write-api"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart"
keywords:
  - "apache"
  - "arrow"
  - "storage"
  - "write"
  - "bigquery"
  - "now"
  - "supports"
  - "streaming"
---

# Apache Arrow support for Storage Write API

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Storage Write API now supports streaming data in Apache Arrow format.

## Extended Definition

BigQuery Storage Write API now supports streaming data in Apache Arrow format.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart)

## Supporting Pages

### BigQuery Storage API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It demonstrates API features such as column // projection (limiting the output to a subset of a table's columns), // column filtering (using simple predicates to filter records on the server // side), establishing the snapshot time (reading data from the table at a // specific point in time), decoding Avro row blocks using the third party // "github.com/linkedin/goavro" library, and decoding Arrow row blocks using // the third party "github.com/apache/arrow/go" library. package main import ( "bytes" "context" "encoding/json" "flag" "fmt" "io" "log" "sort" "strings" "sync" "time" bqStorage "cloud.google.com/go/bigquery/storage/apiv1" "cloud.google.com/go/bigquery/storage/apiv1/storagepb" "github.com/apache/arrow/go/v10/arrow" "github.com/apache/arrow/go/v10/arrow/ipc" "github.com/apache/arrow/go/v10/arrow/memory" gax "github.com/googleapis/gax-go/v2" goavro "github.com/linkedin/goavro/v2" "google.golang.org/genproto/googleapis/rpc/errdetails" "google.golang.org/grpc" "google.golang.org/grpc/codes" "google.golang.org/grpc/status" "google.golang.org/protobuf/types/known/timestamppb" ) // rpcOpts is used to configure the underlying gRPC client to accept large // messages.
- For examples of how to use the BigQuery Storage Write API, see Perform batch and streaming using the Storage Write API .
- ServerStream<ReadRowsResponse> stream = client . readRowsCallable (). call ( readRowsRequest ); for ( ReadRowsResponse response : stream ) { Preconditions . checkState ( response . hasArrowRecordBatch ()); reader . processRows ( response . getArrowRecordBatch ()); } } } } } Python from google.cloud.bigquery storage import BigQueryReadClient , types TODO(developer): Set the project id variable. project id = 'your-project-id' The read session is created in this project.
- Field ; import org.apache.arrow.vector.types.pojo.Schema ; import org.apache.arrow.vector.util.ByteArrayReadableSeekableByteChannel ; public class StorageArrowSample { / SimpleRowReader handles deserialization of the Apache Arrow-encoded row batches transmitted from the storage API using a generic datum decoder. / private static class SimpleRowReader implements AutoCloseable { BufferAllocator allocator = new RootAllocator ( Long .

### "Download table data in the Arrow data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Field ; import org.apache.arrow.vector.types.pojo.Schema ; import org.apache.arrow.vector.util.ByteArrayReadableSeekableByteChannel ; public class StorageArrowSample { / SimpleRowReader handles deserialization of the Apache Arrow-encoded row batches transmitted from the storage API using a generic datum decoder. / private static class SimpleRowReader implements AutoCloseable { BufferAllocator allocator = new RootAllocator ( Long .
- ArrowRecordBatch ; import com.google.cloud.bigquery.storage.v1.
- ArrowSchema ; import com.google.cloud.bigquery.storage.v1.
- ArrowRecordBatch deserializedBatch = MessageSerializer . deserializeRecordBatch ( new ReadChannel ( new ByteArrayReadableSeekableByteChannel ( batch . getSerializedRecordBatch (). toByteArray ())), allocator ); loader . load ( deserializedBatch ); // Release buffers from batch (they are still held in the vectors in root). deserializedBatch . close (); System . out . println ( root . contentToTSVString ()); // Release buffers from vectors in root. root . clear (); } @Override public void close () { root . close (); allocator . close (); } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.

### "Download table data in the Avro data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; use Google\Cloud\BigQuery\Storage\V1\Client\BigQueryReadClient; use Google\Cloud\BigQuery\Storage\V1\CreateReadSessionRequest; use Google\Cloud\BigQuery\Storage\V1\DataFormat; use Google\Cloud\BigQuery\Storage\V1\ReadRowsRequest; use Google\Cloud\BigQuery\Storage\V1\ReadSession; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableModifiers; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableReadOptions; use Google\Protobuf\Timestamp; // Instantiates the client and sets the project $client = new BigQueryReadClient(); $project = $client->projectName('YOUR PROJECT ID'); $snapshotMillis = 'YOUR SNAPSHOT MILLIS'; // This example reads baby name data from the below public dataset. $table = $client->tableName( 'bigquery-public-data', 'usa names', 'usa 1910 current' ); // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. $readSession = new ReadSession(); $readSession->setTable($table)->setDataFormat(DataFormat::AVRO); // We limit the output columns to a subset of those allowed in the table, // and set a simple filter to only report names from the state of // Washington (WA). $readOptions = new TableReadOptions(); $readOptions->setSelectedFields(['name', 'number', 'state']); $readOptions->setRowRestriction('state = "WA"'); $readSession->setReadOptions($readOptions); // With snapshot millis if present if (!empty($snapshotMillis)) { $timestamp = new Timestamp(); $timestamp->setSeconds($snapshotMillis / 1000); $timestamp->setNanos((int) ($snapshotMillis % 1000) 1000000); $tableModifier = new TableModifiers(); $tableModifier->setSnapshotTime($timestamp); $readSession->setTableModifiers($tableModifier); } try { $createReadSessionRequest = (new CreateReadSessionRequest()) ->setParent($project) ->setReadSession($readSession) ->setMaxStreamCount(1); $session = $client->createReadSession($createReadSessionRequest); $readRowsRequest = (new ReadRowsRequest()) ->setReadStream($session->getStreams()[0]->getName()); $stream = $client->readRows($readRowsRequest); // Do any local processing by iterating over the responses.
- It demonstrates API features such as column // projection (limiting the output to a subset of a table's columns), // column filtering (using simple predicates to filter records on the server // side), establishing the snapshot time (reading data from the table at a // specific point in time), decoding Avro row blocks using the third party // "github.com/linkedin/goavro" library, and decoding Arrow row blocks using // the third party "github.com/apache/arrow/go" library. package main import ( "bytes" "context" "encoding/json" "flag" "fmt" "io" "log" "sort" "strings" "sync" "time" bqStorage "cloud.google.com/go/bigquery/storage/apiv1" "cloud.google.com/go/bigquery/storage/apiv1/storagepb" "github.com/apache/arrow/go/v10/arrow" "github.com/apache/arrow/go/v10/arrow/ipc" "github.com/apache/arrow/go/v10/arrow/memory" gax "github.com/googleapis/gax-go/v2" goavro "github.com/linkedin/goavro/v2" "google.golang.org/genproto/googleapis/rpc/errdetails" "google.golang.org/grpc" "google.golang.org/grpc/codes" "google.golang.org/grpc/status" "google.golang.org/protobuf/types/known/timestamppb" ) // rpcOpts is used to configure the underlying gRPC client to accept large // messages.
- Timestamp ; import java.io.IOException ; import org.apache.avro.Schema ; import org.apache.avro.generic.GenericDatumReader ; import org.apache.avro.generic.GenericRecord ; import org.apache.avro.io.BinaryDecoder ; import org.apache.avro.io.DatumReader ; import org.apache.avro.io.DecoderFactory ; public class StorageSample { / SimpleRowReader handles deserialization of the Avro-encoded row blocks transmitted from the storage API using a generic datum decoder. / private static class SimpleRowReader { private final DatumReader<GenericRecord> datumReader ; // Decoder object will be reused to avoid re-allocation and too much garbage collection. private BinaryDecoder decoder = null ; // GenericRecord object will be reused. private GenericRecord row = null ; public SimpleRowReader ( Schema schema ) { Preconditions . checkNotNull ( schema ); datumReader = new GenericDatumReader <> ( schema ); } / Sample method for processing AVRO rows which only validates decoding. @param avroRows object returned from the ReadRowsResponse. / public void processRows ( AvroRows avroRows ) throws IOException { decoder = DecoderFactory . get () . binaryDecoder ( avroRows . getSerializedBinaryRows (). toByteArray (), decoder ); while ( ! decoder . isEnd ()) { // Reusing object row row = datumReader . read ( row , decoder ); System . out . println ( row . toString ()); } } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.
- The read session is created in this project. // This project can be different from that which contains the table. const myProjectId = await client . getProjectId (); // This example reads baby name data from the public datasets. const projectId = 'bigquery-public-data' ; const datasetId = 'usa names' ; const tableId = 'usa 1910 current' ; const tableReference = projects/ ${ projectId } /datasets/ ${ datasetId } /tables/ ${ tableId } ; const parent = projects/ ${ myProjectId } ; / We limit the output columns to a subset of those allowed in the table, and set a simple filter to only report names from the state of Washington (WA). / const readOptions = { selectedFields : [ 'name' , 'number' , 'state' ], rowRestriction : 'state = "WA"' , }; let tableModifiers = null ; const snapshotSeconds = 0 ; // Set a snapshot time if it's been specified. if ( snapshotSeconds > 0 ) { tableModifiers = { snapshotTime : { seconds : snapshotSeconds }}; } // API request. const request = { parent , readSession : { table : tableReference , // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. dataFormat : 'AVRO' , readOptions , tableModifiers , }, }; const [ session ] = await client . createReadSession ( request ); const schema = JSON . parse ( session . avroSchema . schema ); const avroType = avro .

