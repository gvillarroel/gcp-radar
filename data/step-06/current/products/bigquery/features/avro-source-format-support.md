---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.916Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Avro source format support"
feature_slug: "avro-source-format-support"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/reference/api-uploads"
keywords:
  - "avro"
  - "source"
  - "format"
  - "lets"
  - "bigquery"
  - "use"
  - "files"
  - "load"
---

# Avro source format support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Avro source format support lets BigQuery use Avro files for load operations and federated data sources.

## Extended Definition

Avro source format support lets BigQuery use Avro files for load operations and federated data sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)

## Supporting Pages

### Load Cloud Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see: CSV limitations JSON limitations Parquet limitations Firestore export limitations Avro limitations Limitations on nested and repeated data Minimum intervals Source files are picked up for data transfer immediately, with no minimum file age.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create google cloud storage transfer config public class CreateCloudStorageTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY TABLE ID" ; // GCS Uri String sourceUri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" ; String fileFormat = "CSV" ; String fieldDelimiter = "," ; String skipLeadingRows = "1" ; Map<String , Value > params = new HashMap <> (); params . put ( "destination table name template" , Value . newBuilder (). setStringValue ( tableId ). build ()); params . put ( "data path template" , Value . newBuilder (). setStringValue ( sourceUri ). build ()); params . put ( "write disposition" , Value . newBuilder (). setStringValue ( "APPEND" ). build ()); params . put ( "file format" , Value . newBuilder (). setStringValue ( fileFormat ). build ()); params . put ( "field delimiter" , Value . newBuilder (). setStringValue ( fieldDelimiter ). build ()); params . put ( "skip leading rows" , Value . newBuilder (). setStringValue ( skipLeadingRows ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Google Cloud Storage Config Name" ) . setDataSourceId ( "google cloud storage" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); createCloudStorageTransfer ( projectId , transferConfig ); } public static void createCloudStorageTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Cloud storage transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Cloud storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.
- The data transfer is created in the default project: bq mk --transfer config \ --target dataset=mydataset \ --project id=myProject \ --display name='My Transfer' \ --destination kms key=projects/myproject/locations/mylocation/keyRings/myRing/cryptoKeys/myKey \ --params='{"data path template":"gs://mybucket/myfile/ .csv", "destination table name template" : "MyTable" , "file format" : "CSV" , "max bad records" : "1" , "ignore unknown values" : "true" , "field delimiter" : " " , "quote" : ";" , "skip leading rows" : "1" , "allow quoted newlines" : "true" , "allow jagged rows" : "false" , "delete source files" : "true" }' \ --data source=google cloud storage \ --service account name=abcdef-test-sa@abcdef-test.iam.gserviceaccount.com projects/862514376110/locations/us/transferConfigs/ 5dd12f26-0000-262f-bc38-089e0820fe38 After running the command, you receive a message like the following: [URL omitted] Please copy and paste the above URL into your web browser and follow the instructions to retrieve an authentication code.
- For more information, see the ignoreUnknownvalues field details in the JobConfigurationLoad reference table . use avro logical types : for AVRO file format values, set to TRUE to interpret logical types into their corresponding types (for example, TIMESTAMP ), instead of only using their raw types (for example, INTEGER ). parquet enum as string : for PARQUET file format values, set to TRUE to infer PARQUET ENUM logical type as STRING instead of the default BYTES . parquet enable list inference : for PARQUET file format values, set to TRUE to use schema inference specifically for PARQUET LIST logical type. reference file schema uri : a URI path to a reference file with the reader schema. field delimiter : for CSV file format values, a character that separates fields.

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To load a local file of another format, set the format parameter of the Table#load job method to the appropriate format. require "google/cloud/bigquery" def load from file dataset id = "your dataset id" , file path = "path/to/file.csv" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "new table id" Infer the config.location based on the location of the referenced dataset. load job = dataset . load job table id , file path do config config . skip leading = 1 config . autodetect = true end load job . wait until done! # Waits for table load to complete. table = dataset . table table id puts "Loaded #{ table . rows count } rows into #{ table . id } " end Limitations Loading data from a local data source is subject to the following limitations: Wildcards and comma-separated lists are not supported when you load files from a local data source.
- To load a local file of another format, set the DataFormat property of the NewReaderSource to the appropriate format. import ( "context" "fmt" "os" "cloud.google.com/go/bigquery" ) // importCSVFromFile demonstrates loading data into a BigQuery table using a file on the local filesystem. func importCSVFromFile ( projectID , datasetID , tableID , filename string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- The source data can be in any of the following formats: Avro Comma-separated values (CSV) JSON (newline-delimited) ORC Parquet Datastore exports stored in Cloud Storage Firestore exports stored in Cloud Storage You can also use BigQuery Data Transfer Service to set up recurring loads from Cloud Storage into BigQuery.
- Loading compressed and uncompressed data For Avro, Parquet, and ORC formats, BigQuery supports loading files where the file data has been compressed using a supported codec.

### API uploads \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- Source ID: `site-docs-reference-3`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } --foo bar baz Content-Type: / CSV, JSON, AVRO, PARQUET, or ORC data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Length: 38 Content-Type: application/json; charset=UTF-8 X-Upload-Content-Type: / X-Upload-Content-Length: 2000000 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Note: For an initial resumable update request without metadata, leave the body of the request empty, and set the Content-Length header to 0 .
- Note: To create or update the metadata portion only, without uploading the associated data, simply send a POST or PUT request to the standard resource endpoint: https://www.googleapis.com/bigquery/v2/projects/ projectId /jobs Example: Multipart upload The example below shows a multipart upload request for the BigQuery API.
- PUT https://www.googleapis.com/upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable&upload id=xa298sd sdlkj2 HTTP/1.1 Content-Length: 2000000 Content-Type: / bytes 0-1999999 If the request succeeds, the server responds with an HTTP 201 Created , along with any metadata associated with this resource.

