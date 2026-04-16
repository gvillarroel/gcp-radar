---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.858Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Parquet file load support"
feature_slug: "parquet-file-load-support"
latest_feature_date: "2018-03-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/api-uploads"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
keywords:
  - "parquet"
  - "file"
  - "load"
  - "bigquery"
  - "supports"
  - "loading"
  - "files"
---

# Parquet file load support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports loading Parquet files.

## Extended Definition

BigQuery supports loading Parquet files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)

## Supporting Pages

### API uploads \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- Source ID: `site-docs-reference-3`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } --foo bar baz Content-Type: / CSV, JSON, AVRO, PARQUET, or ORC data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- It is especially useful if you are transferring large files and the likelihood of a network interruption or some other transmission failure is high, for example, when uploading from a mobile client app.
- Step 1: Start a resumable session To initiate a resumable upload, make a POST request to the method's /upload URI and add the query parameter uploadType=resumable , for example: POST https://www.googleapis.com/upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable For this initiating request, the body is either empty or it contains the metadata only; you'll transfer the actual contents of the file you want to upload in subsequent requests.
- Example: Resumable session initiation response Here is the response to the request in Step 1: HTTP/1.1 200 OK Location: https://www.googleapis.com/upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable&upload id=xa298sd sdlkj2 Content-Length: 0 The value of the Location header, as shown in the above example response, is the session URI you'll use as the HTTP endpoint for doing the actual file upload or querying the upload status.

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- You can also use the following programmatic methods to load the data: Loading method Description Batch load You can load data from Cloud Storage or from a local file by creating a load job.
- Methods of loading or accessing external data In the BigQuery page, in the Add data dialog , you can view all available methods to load data into BigQuery or access data from BigQuery.
- For batch or incremental loading of data from Cloud Storage and other supported data sources, we recommend using the BigQuery Data Transfer Service .
- With the BigQuery Data Transfer Service, to automate data loading pipelines into BigQuery, you can schedule load jobs.

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Loading compressed and uncompressed data For Avro, Parquet, and ORC formats, BigQuery supports loading files where the file data has been compressed using a supported codec.
- To load a local file of another format, set the format parameter of the Table#load job method to the appropriate format. require "google/cloud/bigquery" def load from file dataset id = "your dataset id" , file path = "path/to/file.csv" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "new table id" Infer the config.location based on the location of the referenced dataset. load job = dataset . load job table id , file path do config config . skip leading = 1 config . autodetect = true end load job . wait until done! # Waits for table load to complete. table = dataset . table table id puts "Loaded #{ table . rows count } rows into #{ table . id } " end Limitations Loading data from a local data source is subject to the following limitations: Wildcards and comma-separated lists are not supported when you load files from a local data source.
- To load a local file of another format, set the DataFormat property of the NewReaderSource to the appropriate format. import ( "context" "fmt" "os" "cloud.google.com/go/bigquery" ) // importCSVFromFile demonstrates loading data into a BigQuery table using a file on the local filesystem. func importCSVFromFile ( projectID , datasetID , tableID , filename string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Loading data from Cloud Storage BigQuery supports loading data from any of the following Cloud Storage storage classes : Standard Nearline Coldline Archive To learn how to load data into BigQuery, see the page for your data format: CSV JSON Avro Parquet ORC Datastore exports Firestore exports To learn how to configure a recurring load from Cloud Storage into BigQuery, see Cloud Storage transfers .

