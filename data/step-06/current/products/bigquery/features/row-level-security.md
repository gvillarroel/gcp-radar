---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.737Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Row-level security"
feature_slug: "row-level-security"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
keywords:
  - "row"
  - "level"
  - "security"
  - "restricts"
  - "access"
  - "table"
  - "rows"
  - "bigquery"
---

# Row-level security

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Row-level security restricts access to table rows in BigQuery based on policy rules.

## Extended Definition

Row-level security restricts access to table rows in BigQuery based on policy rules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Control access to tables To configure access to tables and views, you can grant an IAM role to an entity at the following levels, listed in order of range of resources allowed (largest to smallest): a high level in the Google Cloud resource hierarchy such as the project, folder, or organization level the dataset level the table or view level You can also restrict data access within tables, by using the following methods: column-level security column data masking row-level security Access with any resource protected by IAM is additive.
- Table security To control access to tables in BigQuery, see Control access to resources with IAM .
- You must enable the Cloud Key Management Service API before running this example. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF encryption configuration { kms key name = google kms crypto key.crypto key.id } depends on = [google project iam member.service account access] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Take this step only if you want to grant access to the table to principals who don't have access to the dataset in which the table resides. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF } data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com", ] } } resource "google bigquery table iam policy" "policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.default.policy data } Create a table with a customer-managed encryption key The following example creates a table named mytable , and also uses the google kms crypto key and google kms key ring resources to specify a Cloud Key Management Service key for the table.

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To compare these methods in detail, see the following resources: Comparison of authorized views, row-level security, and separate tables Introduction to row-level security Example use cases for row-level security Introduction to column-level access control Share all views in a dataset If you want to give a collection of views access to a dataset without having to authorize each individual view, you can group the views together into a dataset, and then give the dataset that contains the views access to the dataset that contains the data.
- Use row-level or column-level security, or separate tables By setting row-level access policies on a table, or by creating a separate table to hold sensitive data, a data administrator can restrict a user's ability to view that data.
- Combine row-level security with authorized views The data displayed in a logical view or a materialized view is filtered according to the underlying source table's row-level access policies.
- Create a dataset to contain the view. resource "google bigquery dataset" "view dataset" { dataset id = "view dataset" description = "Dataset that contains the view" location = "us-west1" } Create the view to authorize. resource "google bigquery table" "movie view" { project = google bigquery dataset.view dataset.project dataset id = google bigquery dataset.view dataset.dataset id table id = "movie view" description = "View to authorize" view { query = "SELECT item id, avg(rating) FROM movie project.movie dataset.movie ratings GROUP BY item id ORDER BY item id;" use legacy sql = false } } Authorize the view to access the dataset that the query data originates from. resource "google bigquery dataset access" "view authorization" { project = "movie project" dataset id = "movie dataset" view { project id = google bigquery table.movie view.project dataset id = google bigquery table.movie view.dataset id table id = google bigquery table.movie view.table id } } Specify the IAM policy for principals that can access the authorized view.

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a publisher, you create or use an existing BigQuery dataset in your project with the following supported objects that you want to deliver to your subscribers: Authorized views Authorized datasets BigQuery ML models External tables Materialized views Routines User-defined functions (UDFs) Table functions SQL stored procedures Tables Table snapshots Views Shared datasets support column-level security and row-level security .
- If you have set up row-level security or data masking policies on the tables that are listed, then subscribers must be an Enterprise or Enterprise Plus customer to run the query job on the linked dataset.
- As an Analytics Hub Viewer, you can browse through the shared resources that you have access to in BigQuery sharing and make a request to the publisher to access the shared data.
- Compliance BigQuery sharing, as part of BigQuery, is compliant with the following compliance programs: ISO 27001 ISO 27017 ISO 27018 SOC 1 SOC 2 SOC 3 PCI Penetration Testing HIPAA HITRUST VPC Service Controls You can set the ingress and egress rules needed to let publishers and subscribers access data from projects that have VPC Service Controls perimeters.

