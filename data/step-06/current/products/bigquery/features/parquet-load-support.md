---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.852Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Parquet load support"
feature_slug: "parquet-load-support"
latest_feature_date: "2018-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/reference/api-uploads"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer"
keywords:
  - "parquet"
  - "load"
  - "bigquery"
  - "can"
  - "files"
---

# Parquet load support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can load data from Parquet files.

## Extended Definition

BigQuery can load data from Parquet files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)

## Supporting Pages

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Loading compressed and uncompressed data For Avro, Parquet, and ORC formats, BigQuery supports loading files where the file data has been compressed using a supported codec.
- To load a local file of another format, set the format parameter of the Table#load job method to the appropriate format. require "google/cloud/bigquery" def load from file dataset id = "your dataset id" , file path = "path/to/file.csv" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "new table id" Infer the config.location based on the location of the referenced dataset. load job = dataset . load job table id , file path do config config . skip leading = 1 config . autodetect = true end load job . wait until done! # Waits for table load to complete. table = dataset . table table id puts "Loaded #{ table . rows count } rows into #{ table . id } " end Limitations Loading data from a local data source is subject to the following limitations: Wildcards and comma-separated lists are not supported when you load files from a local data source.
- JobId jobId = JobId . newBuilder (). setLocation ( location ). build (); TableDataWriteChannel writer = bigquery . writer ( jobId , writeChannelConfiguration ); // Write data to writer try ( OutputStream stream = Channels . newOutputStream ( writer )) { Files . copy ( csvPath , stream ); } // Get load job Job job = writer . getJob (); job = job . waitFor (); LoadStatistics stats = job . getStatistics (); return stats . getOutputRows (); Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- To load a local file of another format, set the DataFormat property of the NewReaderSource to the appropriate format. import ( "context" "fmt" "os" "cloud.google.com/go/bigquery" ) // importCSVFromFile demonstrates loading data into a BigQuery table using a file on the local filesystem. func importCSVFromFile ( projectID , datasetID , tableID , filename string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

### API uploads \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- Source ID: `site-docs-reference-3`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } --foo bar baz Content-Type: / CSV, JSON, AVRO, PARQUET, or ORC data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Length: 38 Content-Type: application/json; charset=UTF-8 X-Upload-Content-Type: / X-Upload-Content-Length: 2000000 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Note: For an initial resumable update request without metadata, leave the body of the request empty, and set the Content-Length header to 0 .
- Step 1: Start a resumable session To initiate a resumable upload, make a POST request to the method's /upload URI and add the query parameter uploadType=resumable , for example: POST https://www.googleapis.com/upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable For this initiating request, the body is either empty or it contains the metadata only; you'll transfer the actual contents of the file you want to upload in subsequent requests.
- Example: Resumable session initiation response Here is the response to the request in Step 1: HTTP/1.1 200 OK Location: https://www.googleapis.com/upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable&upload id=xa298sd sdlkj2 Content-Length: 0 The value of the Location header, as shown in the above example response, is the session URI you'll use as the HTTP endpoint for doing the actual file upload or querying the upload status.

### Load Cloud Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the ignoreUnknownvalues field details in the JobConfigurationLoad reference table . use avro logical types : for AVRO file format values, set to TRUE to interpret logical types into their corresponding types (for example, TIMESTAMP ), instead of only using their raw types (for example, INTEGER ). parquet enum as string : for PARQUET file format values, set to TRUE to infer PARQUET ENUM logical type as STRING instead of the default BYTES . parquet enable list inference : for PARQUET file format values, set to TRUE to use schema inference specifically for PARQUET LIST logical type. reference file schema uri : a URI path to a reference file with the reader schema. field delimiter : for CSV file format values, a character that separates fields.
- Limitations Recurring data transfers from Cloud Storage to BigQuery are subject to the following limitations: All files matching the patterns defined by either a wildcard or by runtime parameters for your data transfer must share the same schema you defined for the destination table, or the transfer will fail.
- For more information, see: CSV limitations JSON limitations Parquet limitations Firestore export limitations Avro limitations Limitations on nested and repeated data Minimum intervals Source files are picked up for data transfer immediately, with no minimum file age.
- For information about how the BigQuery Data Transfer Service appends or mirrors data in Cloud Storage transfers, see Data ingestion for Cloud Storage transfers . file format : the format of the files that you want to transfer.

