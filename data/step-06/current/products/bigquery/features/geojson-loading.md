---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.737Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GeoJSON loading"
feature_slug: "geojson-loading"
latest_feature_date: "2021-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gis-data"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
keywords:
  - "geojson"
  - "loading"
  - "bigquery"
  - "gis"
  - "supports"
  - "geography"
  - "newline"
  - "delimited"
---

# GeoJSON loading

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery GIS supports loading geography data from newline-delimited GeoJSON files.

## Extended Definition

BigQuery GIS supports loading geography data from newline-delimited GeoJSON files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)

## Supporting Pages

### Working with geospatial data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gis-data](https://docs.cloud.google.com/bigquery/docs/gis-data)
- Source ID: `site-docs-reference-required-7`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: CREATE EXTERNAL TABLE mydataset . table1 OPTIONS ( format = "NEWLINE DELIMITED JSON" , json extension = 'GEOJSON' , uris = [ 'gs://mybucket/geofile.json' ] ); Loading GeoJSON geometry data Geospatial analytics supports loading individual GeoJSON geometry objects that are embedded as text strings in other file types.
- Alternatively, you may define GeoJSON data directly, but it must be converted to a string before loading it into BigQuery. my geography = geojson .
- Loading newline-delimited GeoJSON files A newline-delimited GeoJSON file contains a list of GeoJSON feature objects, one per line in the file.
- There are two ways to load GeoJSON data into BigQuery: Load newline-delimited GeoJSON files .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- CSV , skip leading rows = 1 , ) uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" load job = client . load table from uri ( uri , table id , job config = job config ) # Make an API request. load job . result () # Waits for the job to complete. destination table = client . get table ( table id ) print ( "Loaded {} rows." . format ( destination table . num rows )) Loading hive-partitioned CSV data BigQuery supports loading hive-partitioned CSV data stored on Cloud Storage and will populate the hive partitioning columns as columns in the destination BigQuery managed table.
- The following list shows examples of valid data: WKT: POINT(1 2) GeoJSON: { "type": "Point", "coordinates": [1, 2] } Hex encoded WKB: 0101000000feffffffffffef3f0000000000000040 Before loading GEOGRAPHY data, also read Loading geospatial data .
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def load table gcs csv dataset id = "your dataset id" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id gcs uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" table id = "us states" load job = dataset . load job table id , gcs uri , skip leading : 1 do schema schema . string "name" schema . string "post abbr" end puts "Starting job #{ load job . job id } " load job . wait until done! # Waits for table load to complete. puts "Job finished." table = dataset . table table id puts "Loaded #{ table . rows count } rows to table #{ table . id } " end Loading CSV data into a table that uses column-based time partitioning To load CSV data from Cloud Storage into a BigQuery table that uses column-based time partitioning: Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- The following gcloud storage cat command streams the file from Cloud Storage, decompresses the file, identifies the appropriate byte offset, and prints the line with the format error: gcloud storage cat gs://my-bucket/mytable.csv.gz gunzip - tail -c +1406 head -n 1 The output is similar to the following: 16,Abraham Lincoln,"March 4, 1861", "April 15, "1865 ,Republican Troubleshoot quota errors Use the information in this section to troubleshoot quota or limit errors related to loading CSV files into BigQuery.

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Loading data from Cloud Storage BigQuery supports loading data from any of the following Cloud Storage storage classes : Standard Nearline Coldline Archive To learn how to load data into BigQuery, see the page for your data format: CSV JSON Avro Parquet ORC Datastore exports Firestore exports To learn how to configure a recurring load from Cloud Storage into BigQuery, see Cloud Storage transfers .
- The source data can be in any of the following formats: Avro Comma-separated values (CSV) JSON (newline-delimited) ORC Parquet Datastore exports stored in Cloud Storage Firestore exports stored in Cloud Storage You can also use BigQuery Data Transfer Service to set up recurring loads from Cloud Storage into BigQuery.
- FORMAT : CSV , AVRO , PARQUET , ORC , or NEWLINE DELIMITED JSON . project id : your project ID. dataset : an existing dataset. table : the name of the table into which you're loading data. path to source : the path to the local file. schema : a valid schema.
- Loading compressed and uncompressed data For Avro, Parquet, and ORC formats, BigQuery supports loading files where the file data has been compressed using a supported codec.

