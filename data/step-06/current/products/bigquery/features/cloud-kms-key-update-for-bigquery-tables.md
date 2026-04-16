---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.325Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud KMS key update for BigQuery tables"
feature_slug: "cloud-kms-key-update-for-bigquery-tables"
latest_feature_date: "2025-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "kms"
  - "key"
  - "update"
  - "bigquery"
  - "tables"
  - "encryption"
  - "can"
  - "updated"
---

# Cloud KMS key update for BigQuery tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

A Cloud KMS encryption key can be updated by updating the table with the same key.

## Extended Definition

A Cloud KMS encryption key can be updated by updating the table with the same key.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a table: bigquery.tables.create on the dataset where you're creating the table. bigquery.tables.getData on all tables and views that your query references if you're saving query results as a table. bigquery.jobs.create on the project if you're creating the table by loading data or by saving query results to a table. bigquery.tables.updateData on the table if you're appending to or overwriting a table with query results.
- These logs help you track when tables were created, updated, or deleted, and identify the user or service account that made the changes.
- You must enable the Cloud Key Management Service API before running this example. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF encryption configuration { kms key name = google kms crypto key.crypto key.id } depends on = [google project iam member.service account access] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run a cross-cloud join: bigquery.jobs.create bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- In addition, the OR REPLACE clause requires bigquery.tables.update and bigquery.tables.updateData permissions.
- In addition, the OR REPLACE clause requires bigquery.tables.update and bigquery.tables.updateData permissions.
- In addition, the OR REPLACE clause requires bigquery.tables.update and bigquery.tables.updateData permissions.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.

