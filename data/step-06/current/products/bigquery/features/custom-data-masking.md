---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.512Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Custom data masking"
feature_slug: "custom-data-masking"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek"
keywords:
  - "custom"
  - "masking"
  - "bigquery"
  - "supports"
  - "routines"
  - "such"
  - "salt"
  - "based"
---

# Custom data masking

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports custom data masking routines such as salt-based hashing.

## Extended Definition

BigQuery supports custom data masking routines such as salt-based hashing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)

## Supporting Pages

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Custom masking routines Custom masking routines are subject to the following limitations: Custom data masking supports all BigQuery data types except STRUCT , because data masking can only apply to leaf fields of the STRUCT data type.
- When this happens, BigQuery chooses which data masking rule to apply based on the following hierarchy: Custom masking routine Random Hash Hash (SHA-256) Email mask Last four characters First four characters Date year mask Default masking value Nullify For example, user A is a member of both the employees and the accounting groups.
- Workarounds are possible, such as using custom masking routines that normalize data before applying the masking function.
- Custom masking routine – Salted SHA-256 Custom Yes High (contingent on proper salt protection): Enhanced security over standard SHA-256 by using a consistent, secret salt hardcoded within the custom UDF definition.

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- In case of custom masking, grant users the BigQuery Admin or BigQuery Data Owner roles to ensure they have the necessary permissions for both routines and data policies.
- If you are selecting a custom masking routine, ensure that you have both the bigquery.routines.get and the bigquery.routines.list permissions at the project level.
- If you use custom masking, grant users the BigQuery Data Owner role to ensure they have the necessary permissions for both routines and data policies.
- Data policies are used to define rules for data masking or row-level security on BigQuery tables. @param {string} projectId The Google Cloud project ID (for example, 'example-project-id') @param {string} [location='us'] The Google Cloud location of the data policy (For example, 'us', 'europe-west2'). @param {string} [dataPolicyId='example-data-policy'] The ID of the data policy to retrieve. / async function getDataPolicy ( projectId , location = 'us' , dataPolicyId = 'example-data-policy' , ) { const name = client . dataPolicyPath ( projectId , location , dataPolicyId ); const request = { name , }; try { const [ dataPolicy ] = await client . getDataPolicy ( request ); console . log ( 'Successfully retrieved data policy:' ); console . log ( Name: ${ dataPolicy . name } ); console . log ( Type: ${ dataPolicy . dataPolicyType } ); if ( dataPolicy . dataMaskingPolicy ) { console . log ( Data Masking Policy: ${ dataPolicy . dataMaskingPolicy . predefinedExpression dataPolicy . dataMaskingPolicy . routine } , ); } if ( dataPolicy . grantees && dataPolicy . grantees . length > 0 ) { console . log ( Grantees: ${ dataPolicy . grantees . join ( ', ' ) } ); } } catch ( err ) { if ( err . code === status .

### "Create a dataset with a customer-managed encryption key \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Samples Create a dataset with a customer-managed encryption key Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days default encryption configuration { kms key name = google kms crypto key.crypto key.id } labels = { billing group = "accounting" , pii = "sensitive" } depends on = [ google project iam member.service account access ] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .

