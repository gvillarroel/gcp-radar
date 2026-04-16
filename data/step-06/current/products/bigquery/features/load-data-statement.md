---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.675Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "LOAD DATA statement"
feature_slug: "load-data-statement"
latest_feature_date: "2022-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/reference/api-uploads"
keywords:
  - "load"
  - "statement"
  - "loads"
  - "one"
  - "more"
  - "files"
  - "into"
  - "table"
---

# LOAD DATA statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The LOAD DATA statement loads data from one or more files into a table.

## Extended Definition

The LOAD DATA statement loads data from one or more files into a table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiate clients const bigquery = new BigQuery (); const storage = new Storage (); / This sample loads the CSV file at https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv TODO(developer): Replace the following lines with the path to your file. / const bucketName = 'cloud-samples-data' ; const filename = 'bigquery/us-states/us-states-by-date.csv' ; async function loadTablePartitioned () { // Load data into a table that uses column-based time partitioning. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my new table'; // Configure the load job.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiate clients const bigquery = new BigQuery (); const storage = new Storage (); / This sample loads the CSV file at https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv TODO(developer): Replace the following lines with the path to your file. / const bucketName = 'cloud-samples-data' ; const filename = 'bigquery/us-states/us-states.csv' ; async function loadCSVFromGCS () { // Imports a GCS file into a table with manually defined schema. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Configure the load job.
- The schema is auto detected. bq load \ -- autodetect \ -- source format = CSV \ mydataset . mytable \ gs : // mybucket / mydata . csv The following command loads data from multiple files in gs://mybucket/ into a table named mytable in mydataset .
- Go to BigQuery In the query editor, enter the following statement: LOAD DATA INTO mydataset . mytable FROM FILES ( format = 'CSV' , uris = [ 'gs://bucket/path/file.csv' ] ); Click play circle Run .

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A transfer run then incrementally loads the new Google Ad Manager DT files from the Cloud Storage bucket into the BigQuery table without reloading files that have already been transferred to the BigQuery table.
- A second transfer run begins at 7:30AM and appends file3 and file4 into BigQuery, instead of overwriting the table by loading all four files.
- For Google Ad Manager, you must supply the bucket and network code parameters. bucket : The Cloud Storage bucket that contains your Google Ad Manager DT files. network code : Network code load match tables : Whether to load match tables.
- Data ingestion from Google Ad Manager transfers When you transfer data from Google Ad Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.

### API uploads \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- Source ID: `site-docs-reference-3`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } --foo bar baz Content-Type: / CSV, JSON, AVRO, PARQUET, or ORC data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- Expand for more info If you are uploading the data in chunks, the Content-Range header is also required, along with the Content-Length header required for full file uploads: Content-Length .
- Uploading the file in chunks With resumable uploads, you can break a file into chunks and send a series of requests to upload each chunk in sequence.
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Length: 38 Content-Type: application/json; charset=UTF-8 X-Upload-Content-Type: / X-Upload-Content-Length: 2000000 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Note: For an initial resumable update request without metadata, leave the body of the request empty, and set the Content-Length header to 0 .

