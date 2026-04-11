---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.947Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery federated querying of CSV/JSON data from Cloud Storage"
feature_slug: "bigquery-federated-querying-of-csv-json-data-from-cloud-storage"
latest_feature_date: "2015-08-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "GCS external query"
  - "Cloud Storage external table"
  - "CSV from Cloud Storage"
  - "JSON from Cloud Storage"
  - "CREATE EXTERNAL TABLE"
  - "Cloud Storage source"
  - "query Cloud Storage"
  - "federated query"
---

# BigQuery federated querying of CSV/JSON data from Cloud Storage

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added the ability to query CSV and JSON data directly from Google Cloud Storage.

## Extended Definition

BigQuery added the ability to query CSV and JSON data directly from Google Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example creates an AWS Glue federated dataset: CREATE EXTERNAL SCHEMA mydataset WITH CONNECTION myproject . aws-us-east-1 . myconnection OPTIONS ( external source = 'aws-glue://arn:aws:glue:us-east-1:123456789:database/test database' , location = 'aws-us-east-1' ); CREATE EXTERNAL TABLE statement Creates a new external table.
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Details The CREATE EXTERNAL TABLE statement does not support creating temporary external tables.
- CREATE EXTERNAL TABLE dataset .

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Location considerations When you choose a location for your data, consider the following: Cloud Storage You can interact with Cloud Storage data using BigQuery in the following ways: Query Cloud Storage data using BigLake or non-BigLake external tables Load Cloud Storage data into BigQuery Query Cloud Storage data When you query data in Cloud Storage by using a BigLake or a non-BigLake external table , the data you query must be colocated with your BigQuery dataset, otherwise the query incurs data transfer charges .
- For more information about load data transfer charges, see the Query Cloud Storage data section, as the same guidance applies to both batch loads and queries.
- Cloud SQL When you query data in Cloud SQL through a BigQuery federated query , your Cloud SQL instance must be in the same location as your BigQuery dataset.
- Spanner When you query data in Spanner through a BigQuery federated query , your Spanner instance must be in the same location as your BigQuery dataset.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals all" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" , "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/document chunks/ .pdf" , ], }, ) Run the following to write PDF data to the map manual to chunks table: SQL -- Extract the file and chunks into a single table. -- Store the chunks in the chunks column as array of ObjectRefs (ordered by page number) CREATE OR REPLACE TABLE cymbal pets . map manual to chunks AS SELECT ARRAY AGG ( m1 . ref ) [ 0 ] manual , ARRAY AGG ( m2 . ref ORDER BY m2 . ref . uri ) chunks FROM cymbal pets . product manuals m1 JOIN cymbal pets . product manuals m2 ON REGEXP EXTRACT ( m1 . uri , r '. /([^.] ).[^/]+' ) = REGEXP EXTRACT ( m2 . uri , r '. /([^.] ) page[0-9]+.[^/]+' ) GROUP BY m1 . uri ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product images" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/images/ .png" ], }, ) Create the product manuals table Create an object table that contains the Cymbal pets product manuals: Run the following to create the product manuals table: SQL CREATE OR REPLACE EXTERNAL TABLE cymbal pets . product manuals WITH CONNECTION us.cymbal conn OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf' ] ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . bbq . create external table ( "cymbal pets.product manuals" , replace = True , connection name = "us.cymbal conn" , options = { "object metadata" : "SIMPLE" , "uris" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/documents/ .pdf" ], }, ) Create a text generation model Create a BigQuery ML remote model that represents a Vertex AI Gemini model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.gemini REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'gemini-2.0-flash' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

