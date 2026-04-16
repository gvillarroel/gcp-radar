---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.504Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cross-cloud CTAS and INSERT INTO SELECT statements"
feature_slug: "cross-cloud-ctas-and-insert-into-select-statements"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template"
keywords:
  - "cross"
  - "ctas"
  - "insert"
  - "into"
  - "select"
  - "statements"
  - "bigquery"
  - "supports"
---

# Cross-cloud CTAS and INSERT INTO SELECT statements

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports CREATE TABLE AS SELECT and INSERT INTO SELECT statements with billing enabled to filter data from Amazon S3 and Azure Blob Storage before loading into BigQuery tables.

## Extended Definition

BigQuery supports CREATE TABLE AS SELECT and INSERT INTO SELECT statements with billing enabled to filter data from Amazon S3 and Azure Blob Storage before loading into BigQuery tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template)

## Supporting Pages

### "Create a dataset with a customer-managed encryption key \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days default encryption configuration { kms key name = google kms crypto key.crypto key.id } labels = { billing group = "accounting" , pii = "sensitive" } depends on = [ google project iam member.service account access ] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a dataset with a customer-managed encryption key Stay organized with collections Save and categorize content based on your preferences.

### Create table with schema \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table)
- Source ID: `site-docs-reference-required-15`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = << EOF [ { "name" : "ID" , "type" : "INT64" , "mode" : "NULLABLE" , "description" : "Item ID" }, { "name" : "Item" , "type" : "STRING" , "mode" : "NULLABLE" } ] EOF } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , tableName ); TableDefinition tableDefinition = StandardTableDefinition . of ( schema ); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def create table dataset id = "my dataset" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "my table" table = dataset . create table table id do updater updater . string "full name" , mode : :required updater . integer "age" , mode : :required end puts "Created table: #{ table id } " end Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .

### Create a table using a template \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template)
- Source ID: `site-docs-reference-required-15`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableFromTemplateTable demonstrates how to use the properties of one // table (schema, partitioning, clustering) to create a new empty table with // the same configuration. func createTableFromTemplateTable ( srcProjectID , srcDatasetID , srcTableID , dstProjectID , dstDatasetID , dstTableID string ) error { // srcProjectID := "bigquery-public-data" // srcDatasetID := "samples" // srcTableID := "shakespeare" // dstProjectID := "my-project-id" // dstDatasetID := "mydataset" // dstTableID := "mytable" ctx := context .
- Home Documentation Data analytics BigQuery Samples Create a table using a template Stay organized with collections Save and categorize content based on your preferences.
- Other properties to consider include // attributes like expiration policy and managed encryption settings. dstMeta := & bigquery .
- Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

