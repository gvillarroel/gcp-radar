---
title: "Create a dataset with a customer-managed encryption key \_|\_ BigQuery \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek
  title: "Create a dataset with a customer-managed encryption key \_|\_ BigQuery \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Samples
Create a dataset with a customer-managed encryption key
Stay organized with collections
Save and categorize content based on your preferences.
The following example creates a dataset named `mydataset`, and also uses the `google_kms_crypto_key` and `google_kms_key_ring` resources to specify a Cloud Key Management Service key for the dataset. You must enable the Cloud Key Management Service API before running this example.
Explore further
For detailed documentation that includes this code sample, see the following:
Create datasets
Code sample
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
resource "google_bigquery_dataset" "default" {
dataset_id = "mydataset"
default_partition_expiration_ms = 2592000000 # 30 days
default_table_expiration_ms = 31536000000 # 365 days
description = "dataset description"
location = "US"
max_time_travel_hours = 96 # 4 days
default_encryption_configuration {
kms_key_name = google_kms_crypto_key.crypto_key.id
}
labels = {
billing_group = "accounting" ,
pii = "sensitive"
}
depends_on = [ google_project_iam_member.service_account_access ]
}
resource "google_kms_crypto_key" "crypto_key" {
name = "example-key"
key_ring = google_kms_key_ring.key_ring.id
}
resource "random_id" "default" {
byte_length = 8
}
resource "google_kms_key_ring" "key_ring" {
name = "${random_id.default.hex}-example-keyring"
location = "us"
}
# Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys
data "google_project" "project" {
}
resource "google_project_iam_member" "service_account_access" {
project = data.google_project.project.project_id
role = "roles/cloudkms.cryptoKeyEncrypterDecrypter"
member = "serviceAccount:bq-${data.google_project.project.number}@bigquery-encryption.iam.gserviceaccount.com"
}
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
