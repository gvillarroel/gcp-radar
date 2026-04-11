---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.738Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni Access Control DCL"
feature_slug: "bigquery-omni-access-control-dcl"
latest_feature_date: "2022-06-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries"
keywords:
  - "Discretionary Control Language"
  - "Access Control DCL"
  - "Access Control in Omni"
  - "Omni access control"
  - "Omni Access Control"
  - "Omni DCL"
  - "DCL"
---

# BigQuery Omni Access Control DCL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Omni now supports Access Control DCL for controlling access in Omni environments.

## Extended Definition

BigQuery Omni now supports Access Control DCL for controlling access in Omni environments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)

## Supporting Pages

### BigQuery Storage API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- C++ #include "google/cloud/bigquery/storage/v1/bigquery read client.h" #include <iostream> namespace { void ProcessRowsInAvroFormat ( :: google :: cloud :: bigquery :: storage :: v1 :: AvroSchema const & , :: google :: cloud :: bigquery :: storage :: v1 :: AvroRows const & ) { // Code to deserialize avro rows should be added here. } } // namespace int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " <project-id> <table-name> \n " ; return 1 ; } // project name should be in the format "projects/<your-gcp-project>" std :: string const project name = "projects/" + std :: string ( argv [ 1 ]); // table name should be in the format: // "projects/<project-table-resides-in>/datasets/<dataset-table resides-in>/tables/<table // name>" The project values in project name and table name do not have to be // identical. std :: string const table name = argv [ 2 ]; // Create a namespace alias to make the code easier to read. namespace bigquery storage = :: google :: cloud :: bigquery storage v1 ; constexpr int kMaxReadStreams = 1 ; // Create the ReadSession. auto client = bigquery storage :: BigQueryReadClient ( bigquery storage :: MakeBigQueryReadConnection ()); :: google :: cloud :: bigquery :: storage :: v1 :: ReadSession read session ; read session . set data format ( google :: cloud :: bigquery :: storage :: v1 :: DataFormat :: AVRO ); read session . set table ( table name ); auto session = client .
- ArrowRecordBatch deserializedBatch = MessageSerializer . deserializeRecordBatch ( new ReadChannel ( new ByteArrayReadableSeekableByteChannel ( batch . getSerializedRecordBatch (). toByteArray ())), allocator ); loader . load ( deserializedBatch ); // Release buffers from batch (they are still held in the vectors in root). deserializedBatch . close (); System . out . println ( root . contentToTSVString ()); // Release buffers from vectors in root. root . clear (); } @Override public void close () { root . close (); allocator . close (); } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.
- ServerStream<ReadRowsResponse> stream = client . readRowsCallable (). call ( readRowsRequest ); for ( ReadRowsResponse response : stream ) { Preconditions . checkState ( response . hasArrowRecordBatch ()); reader . processRows ( response . getArrowRecordBatch ()); } } } } } Python from google.cloud.bigquery storage import BigQueryReadClient , types TODO(developer): Set the project id variable. project id = 'your-project-id' The read session is created in this project.
- This project can be different from that which contains the table. client = BigQueryReadClient () This example reads baby name data from the public datasets. table = "projects/ {} /datasets/ {} /tables/ {} " . format ( "bigquery-public-data" , "usa names" , "usa 1910 current" ) requested session = types .

