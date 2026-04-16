---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.370Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Skip match table loading for Google Ad Manager transfers"
feature_slug: "skip-match-table-loading-for-google-ad-manager-transfers"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "skip"
  - "match"
  - "table"
  - "loading"
  - "ad"
  - "manager"
  - "transfers"
  - "bigquery"
---

# Skip match table loading for Google Ad Manager transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service for Google Ad Manager can now skip loading match tables by setting load_match_tables to FALSE.

## Extended Definition

BigQuery Data Transfer Service for Google Ad Manager can now skip loading match tables by setting load_match_tables to FALSE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Match tables fetched with PQL Match tables from CompanyService (v201908) Match tables from OrderService (v201908) Match tables from PlacementService (v201908) For information about how Google Ad Manager reports are transformed into BigQuery tables and views, see Google Ad Manager report transformation .
- Data transfer options Support Supported reports The Google Ad Manager connector supports the transfer of data from the following reports: Data Transfer (Google Ad Manager DT) files Data Transfer fields Match tables provided by the BigQuery Data Transfer Service .
- A transfer run then incrementally loads the new Google Ad Manager DT files from the Cloud Storage bucket into the BigQuery table without reloading files that have already been transferred to the BigQuery table.
- Data ingestion from Google Ad Manager transfers When you transfer data from Google Ad Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis bq insert [ FLAGS ] TABLE FILE Examples bq insert --ignore unknown values --template suffix = insert myDataset.myTable /tmp/myData.json echo '{"a":1, "b":2}' bq insert myDataset.myTable Flags and arguments The bq insert command uses the following flags and arguments: --ignore unknown values={true false} or -i={true false} When set to true , BigQuery ignores any key-value pairs that don't match the table's schema, and inserts the row with the data that does match the schema.
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- The following is an example of gcloud and bq commands in a bash script: #!/bin/bash gcloud config set project myProject bq query --use legacy sql = false --destination table = myDataset.myTable \ 'SELECT word, SUM(word count) AS count FROM bigquery-public-data`.samples.shakespeare WHERE word LIKE "%raisin%" GROUP BY word' Use a service account You can use a service account to make authorized API calls or run query jobs on your behalf.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a table: bigquery.tables.create on the dataset where you're creating the table. bigquery.tables.getData on all tables and views that your query references if you're saving query results as a table. bigquery.jobs.create on the project if you're creating the table by loading data or by saving query results to a table. bigquery.tables.updateData on the table if you're appending to or overwriting a table with query results.
- Required roles To get the permissions that you need to create a table, ask your administrator to grant you the following IAM roles: BigQuery Job User ( roles/bigquery.jobUser ) on the project if you're creating a table by loading data or by saving query results to a table.
- You must enable the Cloud Key Management Service API before running this example. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF encryption configuration { kms key name = google kms crypto key.crypto key.id } depends on = [google project iam member.service account access] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

