---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.673Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Project and organization default configurations"
feature_slug: "project-and-organization-default-configurations"
latest_feature_date: "2022-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options"
keywords:
  - "project"
  - "organization"
  - "default"
  - "configurations"
  - "bigquery"
  - "can"
  - "apply"
  - "level"
---

# Project and organization default configurations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can apply default configurations at the project or organization level.

## Extended Definition

BigQuery can apply default configurations at the project or organization level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options](https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Monitor operational health for a single project The project operational health dashboard is the default view you get if you don't have access to the entire organization, or your project doesn't own any reservation.
- This view can help project analysts monitor system health for their projects, much like the operational health dashboard at the organizational level, but it shows only project-level data in its charts and filters.

### EFFECTIVE_PROJECT_OPTIONS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options](https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options)
- Source ID: `site-docs-reference-3`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result is similar to the following: +--------------------------------------------+-------------+---------------------+------------------+--------------------+ option name option type option value option set level option set on id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default time zone STRING America/Los Angeles organizations my organization id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default kms key name STRING test/testkey1 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default query job timeout ms INT64 18000000 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default interactive query queue timeout ms INT64 600000 organization my organization id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default batch query queue timeout ms INT64 1200000 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The INFORMATION SCHEMA.EFFECTIVE PROJECT OPTIONS view has the following schema: Column name Data type Value project id STRING The ID of the project. project number INTEGER Number of the project. option name STRING Option ID for the specified configuration setting. option description STRING The option description. option type STRING The data type of the OPTION VALUE . option set level STRING The level in the hierarchy at which the setting is defined, with possible values of DEFAULT , ORGANIZATION , or PROJECTS . option set on id STRING Set value based on value of option set level : If DEFAULT , set to null .
- If the same configuration option is set at both the organization and project level, the project configuration value is shown.
- This view contains configuration options that are set at the organization or project level.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- You must enable the Cloud Key Management Service API before running this example. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF encryption configuration { kms key name = google kms crypto key.crypto key.id } depends on = [google project iam member.service account access] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Set the default Google Cloud project where you want to apply your Terraform configurations.
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- Control access to tables To configure access to tables and views, you can grant an IAM role to an entity at the following levels, listed in order of range of resources allowed (largest to smallest): a high level in the Google Cloud resource hierarchy such as the project, folder, or organization level the dataset level the table or view level You can also restrict data access within tables, by using the following methods: column-level security column data masking row-level security Access with any resource protected by IAM is additive.

