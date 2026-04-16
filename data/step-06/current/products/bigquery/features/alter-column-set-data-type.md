---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.723Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER COLUMN SET DATA TYPE"
feature_slug: "alter-column-set-data-type"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam"
keywords:
  - "alter"
  - "column"
  - "set"
  - "type"
  - "bigquery"
  - "supports"
  - "ddl"
  - "statement"
---

# ALTER COLUMN SET DATA TYPE

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the ALTER COLUMN SET DATA TYPE DDL statement to change a column's data type.

## Extended Definition

BigQuery supports the ALTER COLUMN SET DATA TYPE DDL statement to change a column's data type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)

## Supporting Pages

### Create a dataset in BigQuery. \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset)
- Source ID: `site-docs-reference-required-15`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createDataset () { // Creates a new dataset named "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my new dataset"; // Specify the geographic location where the dataset should reside const options = { location : 'US' , }; // Create a new dataset const [ dataset ] = await bigquery . createDataset ( datasetId , options ); console . log ( Dataset ${ dataset . id } created. ); } createDataset (); PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); String location = "US" ; DatasetInfo datasetInfo = DatasetInfo . newBuilder ( datasetName ). setLocation ( location ). build (); Dataset newDataset = bigquery . create ( datasetInfo ); String newDatasetName = newDataset . getDatasetId (). getDataset (); System . out . println ( newDatasetName + " created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Dataset was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Creates a dataset with the given dataset ID. @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. / function create dataset(string $projectId, string $datasetId): void { $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->createDataset($datasetId); printf('Created dataset %s' .

### "Create a dataset and grant access to it \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)
- Source ID: `site-docs-reference-required-15`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } Update the user, group, or service account provided by the members argument with the appropriate principals for your organization. data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com" , ] } binding { role = "roles/bigquery.admin" members = [ "user:raha@altostrat.com" , ] } binding { role = "roles/bigquery.user" members = [ "group:analysts@altostrat.com" , ] } binding { role = "roles/bigquery.dataViewer" members = [ "serviceAccount:bqcx-1234567891011-abcd@gcp-sa-bigquery-condel.iam.gserviceaccount.com" , ] } } resource "google bigquery dataset iam policy" "default" { dataset id = google bigquery dataset.default.dataset id policy data = data.google iam policy.default.policy data } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a dataset and grant access to it Stay organized with collections Save and categorize content based on your preferences.
- The following example creates a dataset named mydataset, then uses the google bigquery dataset iam policy resource to grant access to it.

### "Create a dataset with a customer-managed encryption key \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days default encryption configuration { kms key name = google kms crypto key.crypto key.id } labels = { billing group = "accounting" , pii = "sensitive" } depends on = [ google project iam member.service account access ] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a dataset with a customer-managed encryption key Stay organized with collections Save and categorize content based on your preferences.

