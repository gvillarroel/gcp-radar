---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.297Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data preparation Cloud Storage file loading"
feature_slug: "bigquery-data-preparation-cloud-storage-file-loading"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
keywords:
  - "bigquery"
  - "preparation"
  - "storage"
  - "file"
  - "loading"
  - "preparations"
  - "can"
  - "load"
---

# BigQuery data preparation Cloud Storage file loading

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data preparations can load files from Cloud Storage.

## Extended Definition

BigQuery data preparations can load files from Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The following gcloud storage cat command streams the file from Cloud Storage, decompresses the file, identifies the appropriate byte offset, and prints the line with the format error: gcloud storage cat gs://my-bucket/mytable.csv.gz gunzip - tail -c +1406 head -n 1 The output is similar to the following: 16,Abraham Lincoln,"March 4, 1861", "April 15, "1865 ,Republican Troubleshoot quota errors Use the information in this section to troubleshoot quota or limit errors related to loading CSV files into BigQuery.
- You can set a default value for the location using the .bigqueryrc file . format is CSV . dataset is an existing dataset. table is the name of the table into which you're loading data. path to source is a fully-qualified Cloud Storage URI or a comma-separated list of URIs.
- You can set a default value for the location using the .bigqueryrc file . format is CSV . dataset is an existing dataset. table is the name of the table into which you're loading data. path to source is a fully-qualified Cloud Storage URI or a comma-separated list of URIs.
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def load table gcs csv dataset id = "your dataset id" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id gcs uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" table id = "us states" load job = dataset . load job table id , gcs uri , skip leading : 1 do schema schema . string "name" schema . string "post abbr" end puts "Starting job #{ load job . job id } " load job . wait until done! # Waits for table load to complete. puts "Job finished." table = dataset . table table id puts "Loaded #{ table . rows count } rows to table #{ table . id } " end Loading CSV data into a table that uses column-based time partitioning To load CSV data from Cloud Storage into a BigQuery table that uses column-based time partitioning: Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In general, if bandwidth is limited, compress your CSV and JSON files by using gzip before uploading them to Cloud Storage. gzip is the only supported file compression type for CSV and JSON files when loading data into BigQuery.
- Batch loading data You can load data into BigQuery from Cloud Storage or from a local file as a batch operation.
- To load a local file of another format, set the format parameter of the Table#load job method to the appropriate format. require "google/cloud/bigquery" def load from file dataset id = "your dataset id" , file path = "path/to/file.csv" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "new table id" Infer the config.location based on the location of the referenced dataset. load job = dataset . load job table id , file path do config config . skip leading = 1 config . autodetect = true end load job . wait until done! # Waits for table load to complete. table = dataset . table table id puts "Loaded #{ table . rows count } rows into #{ table . id } " end Limitations Loading data from a local data source is subject to the following limitations: Wildcards and comma-separated lists are not supported when you load files from a local data source.
- To load a local file of another format, set the DataFormat property of the NewReaderSource to the appropriate format. import ( "context" "fmt" "os" "cloud.google.com/go/bigquery" ) // importCSVFromFile demonstrates loading data into a BigQuery table using a file on the local filesystem. func importCSVFromFile ( projectID , datasetID , tableID , filename string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also use the following programmatic methods to load the data: Loading method Description Batch load You can load data from Cloud Storage or from a local file by creating a load job.
- For batch or incremental loading of data from Cloud Storage and other supported data sources, we recommend using the BigQuery Data Transfer Service .
- Methods of loading or accessing external data In the BigQuery page, in the Add data dialog , you can view all available methods to load data into BigQuery or access data from BigQuery.
- With the BigQuery Data Transfer Service, to automate data loading pipelines into BigQuery, you can schedule load jobs.

