---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.847Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Cloud Firestore export loading"
feature_slug: "bigquery-cloud-firestore-export-loading"
latest_feature_date: "2018-08-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job"
keywords:
  - "bigquery"
  - "firestore"
  - "export"
  - "loading"
  - "supports"
---

# BigQuery Cloud Firestore export loading

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports loading Cloud Firestore export data.

## Extended Definition

BigQuery supports loading Cloud Firestore export data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)

## Supporting Pages

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Loading data from Cloud Storage BigQuery supports loading data from any of the following Cloud Storage storage classes : Standard Nearline Coldline Archive To learn how to load data into BigQuery, see the page for your data format: CSV JSON Avro Parquet ORC Datastore exports Firestore exports To learn how to configure a recurring load from Cloud Storage into BigQuery, see Cloud Storage transfers .
- For more information, see: CSV limitations JSON limitations Datastore export limitations Firestore export limitations Limitations on nested and repeated data Loading data from local files You can load data from a readable data source (such as your local machine) by using one of the following: The Google Cloud console The bq command-line tool's bq load command The API The client libraries When you load data using the Google Cloud console or the bq command-line tool, a load job is automatically created.
- The source data can be in any of the following formats: Avro Comma-separated values (CSV) JSON (newline-delimited) ORC Parquet Datastore exports stored in Cloud Storage Firestore exports stored in Cloud Storage You can also use BigQuery Data Transfer Service to set up recurring loads from Cloud Storage into BigQuery.
- Loading compressed and uncompressed data For Avro, Parquet, and ORC formats, BigQuery supports loading files where the file data has been compressed using a supported codec.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .
- For more information, see Set up ADC for a local development environment . df products mm [[ "product name" , "image" ]] The results look similar to the following: +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ product name image.uri image.version image.authorizer image.details +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium Background gs://cloud-samples-data/bigquery/ 1234567891011 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", tutorials/cymbal-pets/images/ "md5 hash":"494f63b9b137975ff3e7a11b060edb1d", aquaclear-aquarium-background.png "size":1282805,"updated":1742492680017000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium gs://cloud-samples-data/bigquery/ 2345678910112 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", Gravel Vacuum tutorials/cymbal-pets/images/ "md5 hash":"b7bfc2e2641a77a402a1937bcf0003fd", aquaclear-aquarium-gravel-vacuum.png "size":820254,"updated":1742492682411000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ ... ... ... ... +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ Generate product information by using a Gemini model Use a Gemini model to generate the following data for the pet store products: Add an image description column to the products mm table.
- DataFrame ( { "uri" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/images/cozy-naps-cat-scratching-post-with-condo.png" ] } ) . cache () df image [ "image" ] = bbq . obj . make ref ( df image [ "uri" ], "us.cymbal conn" ) df search = bbq . ai . generate embedding ( embedding model , bbq . obj . get access url ( bbq . obj . fetch metadata ( df image [ "image" ]), "R" ), ) search result = bbq . vector search ( "cymbal pets.products embedding" , "embedding" , df search [ "embedding" ] ) search result The results look similar to the following: +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ query.embedding base.product id base.embedding base.image.uri base.image.version base.image.authorizer base.image.details distance +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 181 -0.0112330541 gs://cloud-samples-data/bigquery/ 12345678910 myproject.region.myconnection {"gcs metadata":{"content type": 0.0 0.0142525584 0.0142525584 tutorials/cymbal-pets/images/ "image/png","md5 hash":"21234567hst16555w60j", 0.0135886827 0.0135886827 cozy-naps-cat-scratching-post-with-condo.png "size":828318,"updated":1742492688982000}} 0.0149955815 0.0149955815 ... ... +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 187 -0.0190353896 gs://cloud-samples-data/bigquery/ 23456789101 myproject.region.myconnection {"gcs metadata":{"content type": 0.4216330832..
- CREATE OR REPLACE FUNCTION cymbal pets . chunk pdf ( src json STRING , chunk size INT64 , overlap size INT64 ) RETURNS ARRAY<STRING > LANGUAGE python WITH CONNECTION us.cymbal conn OPTIONS ( entry point = 'chunk pdf' , runtime version = 'python-3.11' , packages =[ 'pypdf' ] ) AS " "" import io import json from pypdf import PdfReader # type: ignore from urllib.request import urlopen, Request def chunk pdf(src ref: str, chunk size: int, overlap size: int) -> str: src json = json.loads(src ref) srcUrl = src json[" access urls "][" read url "] req = urlopen(srcUrl) pdf file = io.BytesIO(bytearray(req.read())) reader = PdfReader(pdf file, strict=False) extract and chunk text simultaneously all text chunks = [] curr chunk = "" for page in reader.pages: page text = page.extract text() if page text: curr chunk += page text split the accumulated text into chunks of a specific size with overlaop this loop implements a sliding window approach to create chunks while len(curr chunk) >= chunk size: split idx = curr chunk.rfind(" ", 0, chunk size) if split idx == -1: split idx = chunk size actual chunk = curr chunk[:split idx] all text chunks.append(actual chunk) overlap = curr chunk[split idx + 1 : split idx + 1 + overlap size] curr chunk = overlap + curr chunk[split idx + 1 + overlap size :] if curr chunk: all text chunks.append(curr chunk) return all text chunks "" " ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### "Create a BigQuery DataFrame from a finished query job \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- Source ID: `site-docs-reference-required-15`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Client ( project = project , location = location ) Job ID inserted based on the query results selcted to explore job id = JOB ID job = client . get job ( job id ) destination = str ( job . destination ) Load data from a BigQuery table using BigFrames DataFrames: bq df = bpd . read gbq table ( destination ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery import bigframes.pandas as bpd Project ID inserted based on the query results selected to explore project = your project id Location inserted based on the query results selected to explore location = "us" client = bigquery .
- Home Documentation Data analytics BigQuery Samples Create a BigQuery DataFrame from a finished query job Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames API to explore the results of a query job that may have been started elsewhere, such as from the BigQuery Console or bq CLI.

