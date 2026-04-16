---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.852Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ORC load support"
feature_slug: "orc-load-support"
latest_feature_date: "2018-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/api-uploads"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
keywords:
  - "orc"
  - "load"
  - "bigquery"
  - "can"
  - "files"
---

# ORC load support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can load data from ORC files.

## Extended Definition

BigQuery can load data from ORC files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)

## Supporting Pages

### API uploads \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- Source ID: `site-docs-reference-3`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } --foo bar baz Content-Type: / CSV, JSON, AVRO, PARQUET, or ORC data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Length: 38 Content-Type: application/json; charset=UTF-8 X-Upload-Content-Type: / X-Upload-Content-Length: 2000000 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Note: For an initial resumable update request without metadata, leave the body of the request empty, and set the Content-Length header to 0 .
- Step 1: Start a resumable session To initiate a resumable upload, make a POST request to the method's /upload URI and add the query parameter uploadType=resumable , for example: POST https://www.googleapis.com/upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable For this initiating request, the body is either empty or it contains the metadata only; you'll transfer the actual contents of the file you want to upload in subsequent requests.
- Example: Resumable session initiation response Here is the response to the request in Step 1: HTTP/1.1 200 OK Location: https://www.googleapis.com/upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable&upload id=xa298sd sdlkj2 Content-Length: 0 The value of the Location header, as shown in the above example response, is the session URI you'll use as the HTTP endpoint for doing the actual file upload or querying the upload status.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- DAY , field = "date" , # Name of the column to use for partitioning. expiration ms = 7776000000 , # 90 days. ), ) uri = "gs://cloud-samples-data/bigquery/us-states/us-states-by-date.csv" load job = client . load table from uri ( uri , table id , job config = job config ) # Make an API request. load job . result () # Wait for the job to complete. table = client . get table ( table id ) print ( "Loaded {} rows to table {} " . format ( table . num rows , table id )) Appending to or overwriting a table with CSV data You can load additional data into a table either from source files or by appending query results.
- The following gcloud storage cat command streams the file from Cloud Storage, decompresses the file, identifies the appropriate byte offset, and prints the line with the format error: gcloud storage cat gs://my-bucket/mytable.csv.gz gunzip - tail -c +1406 head -n 1 The output is similar to the following: 16,Abraham Lincoln,"March 4, 1861", "April 15, "1865 ,Republican Troubleshoot quota errors Use the information in this section to troubleshoot quota or limit errors related to loading CSV files into BigQuery.
- Go to BigQuery In the query editor, enter the following statement: LOAD DATA OVERWRITE mydataset . mytable ( x INT64 , y STRING ) FROM FILES ( format = 'CSV' , uris = [ 'gs://bucket/path/file.csv' ] ); Click play circle Run .
- Go to BigQuery In the query editor, enter the following statement: LOAD DATA INTO mydataset . mytable FROM FILES ( format = 'CSV' , uris = [ 'gs://bucket/path/file.csv' ] ); Click play circle Run .

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- To load a local file of another format, set the format parameter of the Table#load job method to the appropriate format. require "google/cloud/bigquery" def load from file dataset id = "your dataset id" , file path = "path/to/file.csv" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "new table id" Infer the config.location based on the location of the referenced dataset. load job = dataset . load job table id , file path do config config . skip leading = 1 config . autodetect = true end load job . wait until done! # Waits for table load to complete. table = dataset . table table id puts "Loaded #{ table . rows count } rows into #{ table . id } " end Limitations Loading data from a local data source is subject to the following limitations: Wildcards and comma-separated lists are not supported when you load files from a local data source.
- JobId jobId = JobId . newBuilder (). setLocation ( location ). build (); TableDataWriteChannel writer = bigquery . writer ( jobId , writeChannelConfiguration ); // Write data to writer try ( OutputStream stream = Channels . newOutputStream ( writer )) { Files . copy ( csvPath , stream ); } // Get load job Job job = writer . getJob (); job = job . waitFor (); LoadStatistics stats = job . getStatistics (); return stats . getOutputRows (); Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- To load a local file of another format, set the DataFormat property of the NewReaderSource to the appropriate format. import ( "context" "fmt" "os" "cloud.google.com/go/bigquery" ) // importCSVFromFile demonstrates loading data into a BigQuery table using a file on the local filesystem. func importCSVFromFile ( projectID , datasetID , tableID , filename string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- In general, if bandwidth is limited, compress your CSV and JSON files by using gzip before uploading them to Cloud Storage. gzip is the only supported file compression type for CSV and JSON files when loading data into BigQuery.

