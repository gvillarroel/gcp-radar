---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.703Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery LOAD DATA customer-managed encryption key support"
feature_slug: "bigquery-load-data-customer-managed-encryption-key-support"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "CMEK encrypted destination table"
  - "destination table KMS key"
  - "customer-managed encryption key"
  - "LOAD DATA customer-managed key"
  - "customer managed key"
  - "Cloud KMS key"
  - "LOAD DATA CMEK"
  - "CMEK"
---

# BigQuery LOAD DATA customer-managed encryption key support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery allowed destination tables created with LOAD DATA to be encrypted with customer-managed encryption keys.

## Extended Definition

BigQuery supports customer-managed encryption for tables by allowing a Cloud KMS key to be specified as the table’s `kms key name` in table creation/encryption configuration. In client libraries, this is represented as `EncryptionConfiguration.kms_key_name`, which is the resource ID of the Cloud KMS key used to encrypt the table (or none when default encryption is used). This supports CMEK-protected destination tables in table-based workflows, though the provided excerpts do not explicitly show the `LOAD DATA` statement syntax itself.

## Evidence Summary

The cited pages confirm that BigQuery table encryption uses a `kms key name` / `kms_key_name` Cloud KMS setting in table configuration and metadata, but they do not directly document that `LOAD DATA` itself includes this option in the shown excerpts.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Optional: In the Advanced options section, if you want to use a customer-managed encryption key, then select the Use a customer-managed encryption key (CMEK) option.
- You must enable the Cloud Key Management Service API before running this example. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF encryption configuration { kms key name = google kms crypto key.crypto key.id } depends on = [google project iam member.service account access] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.

### "Class EncryptionConfiguration (3.40.1) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration)
- Source ID: `site-python-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: This page documents how BigQuery exposes a KMS-backed custom encryption configuration in the Python client library, which is useful context for CMEK support in table operations even though `LOAD DATA` is not explicitly covered.

Evidence snippets:
- Version latest keyboard arrow down 3.40.1 (latest) 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.31.0 3.30.0 3.29.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.1 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.2 3.16.0 3.15.0 3.14.1 3.13.0 3.12.0 3.11.4 3.4.0 3.3.6 3.2.0 3.1.0 3.0.1 2.34.4 2.33.0 2.32.0 2.31.0 2.30.1 2.29.0 2.28.1 2.27.1 2.26.0 2.25.2 2.24.1 2.23.3 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.1 2.15.0 2.14.0 2.13.1 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.1.0 2.0.0 1.28.2 1.27.2 1.26.1 1.25.0 1.24.0 1.23.1 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 EncryptionConfiguration ( kms key name = None ) Custom encryption configuration (e.g., Cloud KMS keys).
- Parameter Name Description kms key name str resource ID of Cloud KMS key used for encryption Properties kms key name str: Resource ID of Cloud KMS key Resource ID of Cloud KMS key or :data: None if using default encryption.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets the default time zone to America/Chicago and the default query job timeout to one hour for an organization in the US region: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = "America/Chicago" , region-us.default job query timeout ms = 3600000 ); The following example sets the default time zone, the default query job timeout, the default interactive and batch queue timeouts, and the default Cloud KMS key, clearing the organization level default settings: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL ); ALTER PROJECT SET OPTIONS statement Sets the options on a project.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.

