---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.619Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AutoML Tables CMEK support"
feature_slug: "automl-tables-cmek-support"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts"
keywords:
  - "automl"
  - "tables"
  - "cmek"
  - "models"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
---

# AutoML Tables CMEK support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

AutoML Tables models support customer-managed encryption keys in available regions except the US and EU multi-regions.

## Extended Definition

AutoML Tables models support customer-managed encryption keys in available regions except the US and EU multi-regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)

## Supporting Pages

### "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Samples Copy a table with customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- Copy a table with customer-managed encryption keys (CMEK).
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is // protected with a customer managed encryption key. func copyTableWithCMEK ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Explore further For detailed documentation that includes this code sample, see the following: Customer-managed Cloud KMS keys Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Optional: In the Advanced options section, if you want to use a customer-managed encryption key, then select the Use a customer-managed encryption key (CMEK) option.
- For more information about --destination kms key , see customer-managed encryption keys .
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.
- By default, BigQuery encrypts customer content stored at rest by using a Google-owned and Google-managed encryption key.

### AEAD encryption concepts \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery also provides support for customer managed encryption keys (CMEKs), which lets you encrypt tables using specific encryption keys.
- The KEK is a symmetric encryption keyset that is stored securely in the Cloud Key Management Service and managed using Cloud KMS permissions and roles .
- Key rotation The primary purpose of rotating encryption keys is to reduce the amount of data encrypted with any particular key, so that a potential compromised key would allow an attacker access to less data.
- AEAD encryption functions allow you to create keysets that contain keys for encryption and decryption, use these keys to encrypt and decrypt individual values in a table, and rotate keys within a keyset.

