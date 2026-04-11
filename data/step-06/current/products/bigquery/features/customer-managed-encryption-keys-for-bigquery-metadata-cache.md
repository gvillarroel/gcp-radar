---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.654Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Customer-managed encryption keys for BigQuery metadata cache"
feature_slug: "customer-managed-encryption-keys-for-bigquery-metadata-cache"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "Cloud KMS-protected metadata cache"
  - "customer-managed encryption key"
  - "encryption key for cache data"
  - "Cloud KMS metadata cache"
  - "metadata cache key management"
  - "CMEK for metadata cache"
  - "metadata cache encryption"
  - "CMEK metadata cache"
---

# Customer-managed encryption keys for BigQuery metadata cache

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports protecting metadata cache data using customer-managed encryption keys.

## Extended Definition

The provided documentation indicates that BigQuery supports creating tables with a customer-managed encryption key (CMEK) from Cloud KMS (for example, via the table creation workflow with the Advanced option “Use a customer-managed encryption key (CMEK)” or the equivalent `--destination_kms_key`). There is no direct evidence in the supplied excerpts that customer-managed keys are configurable specifically for the BigQuery metadata cache.

## Evidence Summary

The source confirms table-level CMEK usage in BigQuery but does not explicitly confirm or describe CMEK for metadata cache data.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.
- Optional: In the Advanced options section, if you want to use a customer-managed encryption key, then select the Use a customer-managed encryption key (CMEK) option.
- For more information about --destination kms key , see customer-managed encryption keys .

