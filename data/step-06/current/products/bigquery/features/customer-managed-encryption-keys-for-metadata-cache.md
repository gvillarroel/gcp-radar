---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.596Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Customer-managed encryption keys for metadata cache"
feature_slug: "customer-managed-encryption-keys-for-metadata-cache"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "metadata"
  - "cache"
  - "can"
  - "protected"
---

# Customer-managed encryption keys for metadata cache

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Metadata cache data can be protected with customer-managed encryption keys.

## Extended Definition

Metadata cache data can be protected with customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is // protected with a customer managed encryption key. func copyTableWithCMEK ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Home Documentation Data analytics BigQuery Samples Copy a table with customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- Copy a table with customer-managed encryption keys (CMEK).
- Explore further For detailed documentation that includes this code sample, see the following: Customer-managed Cloud KMS keys Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Customer-managed Cloud KMS keys .
- For more information, see Customer-managed Cloud KMS keys .
- Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property. default time zone STRING The default time zone to use in time zone-dependent SQL functions, when a time zone is not specified as an argument.
- Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property. default time zone STRING The default time zone to use in time zone-dependent SQL functions, when a time zone is not specified as an argument.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- For more information about --destination kms key , see customer-managed encryption keys .
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.
- Optional: In the Advanced options section, if you want to use a customer-managed encryption key, then select the Use a customer-managed encryption key (CMEK) option.
- By default, BigQuery encrypts customer content stored at rest by using a Google-owned and Google-managed encryption key.

