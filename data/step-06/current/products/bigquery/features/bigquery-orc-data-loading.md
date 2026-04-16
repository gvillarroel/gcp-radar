---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.847Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ORC data loading"
feature_slug: "bigquery-orc-data-loading"
latest_feature_date: "2018-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer"
keywords:
  - "bigquery"
  - "orc"
  - "loading"
  - "supports"
  - "format"
---

# BigQuery ORC data loading

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports loading data in ORC format.

## Extended Definition

BigQuery supports loading data in ORC format.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)

## Supporting Pages

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- For more information about loading from Dataflow to BigQuery, see Write from Dataflow to BigQuery .
- Methods of loading or accessing external data In the BigQuery page, in the Add data dialog , you can view all available methods to load data into BigQuery or access data from BigQuery.
- For batch or incremental loading of data from Cloud Storage and other supported data sources, we recommend using the BigQuery Data Transfer Service .
- With the BigQuery Data Transfer Service, to automate data loading pipelines into BigQuery, you can schedule load jobs.

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Loading data from Cloud Storage BigQuery supports loading data from any of the following Cloud Storage storage classes : Standard Nearline Coldline Archive To learn how to load data into BigQuery, see the page for your data format: CSV JSON Avro Parquet ORC Datastore exports Firestore exports To learn how to configure a recurring load from Cloud Storage into BigQuery, see Cloud Storage transfers .
- Loading compressed and uncompressed data For Avro, Parquet, and ORC formats, BigQuery supports loading files where the file data has been compressed using a supported codec.
- To load a local file of another format, set the format parameter of the Table#load job method to the appropriate format. require "google/cloud/bigquery" def load from file dataset id = "your dataset id" , file path = "path/to/file.csv" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "new table id" Infer the config.location based on the location of the referenced dataset. load job = dataset . load job table id , file path do config config . skip leading = 1 config . autodetect = true end load job . wait until done! # Waits for table load to complete. table = dataset . table table id puts "Loaded #{ table . rows count } rows into #{ table . id } " end Limitations Loading data from a local data source is subject to the following limitations: Wildcards and comma-separated lists are not supported when you load files from a local data source.
- To load a local file of another format, set the DataFormat property of the NewReaderSource to the appropriate format. import ( "context" "fmt" "os" "cloud.google.com/go/bigquery" ) // importCSVFromFile demonstrates loading data into a BigQuery table using a file on the local filesystem. func importCSVFromFile ( projectID , datasetID , tableID , filename string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

### Load Blob Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Depending on the format of your Blob Storage source data, there may be additional limitations: CSV limitations JSON limitations Limitations on nested and repeated data Data transfers to BigQuery Omni locations are not supported.
- For more information about how BigQuery Data Transfer Service ingests data using either WRITE APPEND or WRITE TRUNCATE , see Data ingestion for Azure Blob transfers .
- For information about how CMEK works with the BigQuery Data Transfer Service, see Specify encryption key with transfers .
- For information about how CMEKs work with the BigQuery Data Transfer Service, see Specify encryption key with transfers .

