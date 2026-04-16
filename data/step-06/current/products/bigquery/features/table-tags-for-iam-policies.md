---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.515Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table tags for IAM policies"
feature_slug: "table-tags-for-iam-policies"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/conditions"
keywords:
  - "table"
  - "tags"
  - "iam"
  - "policies"
  - "bigquery"
  - "lets"
  - "you"
  - "use"
---

# Table tags for IAM policies

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets you use tags on tables to conditionally allow or deny access with IAM policies.

## Extended Definition

BigQuery lets you use tags on tables to conditionally allow or deny access with IAM policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- For readability, some columns are excluded from the result. +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ table name column name field path data type description policy tags +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ commits author author STRUCT<name STRING, email STRING, time sec INT64, tz offset INT64, date TIMESTAMP> NULL 0 rows commits author author.name STRING NULL 0 rows commits author author.email STRING NULL 0 rows commits author author.time sec INT64 NULL 0 rows commits author author.tz offset INT64 NULL 0 rows commits author author.date TIMESTAMP NULL 0 rows commits difference difference ARRAY<STRUCT<old mode INT64, new mode INT64, old path STRING, new path STRING, old sha1 STRING, new sha1 STRING, old repo STRING, new repo STRING>> NULL 0 rows commits difference difference.old mode INT64 NULL 0 rows commits difference difference.new mode INT64 NULL 0 rows commits difference difference.old path STRING NULL 0 rows commits difference difference.new path STRING NULL 0 rows commits difference difference.old sha1 STRING NULL 0 rows commits difference difference.new sha1 STRING NULL 0 rows commits difference difference.old repo STRING NULL 0 rows commits difference difference.new repo STRING NULL 0 rows +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ TABLE STORAGE view The TABLE STORAGE and TABLE STORAGE BY ORGANIZATION views have the following schema: Column name Data type Value project id STRING The project ID of the project that contains the dataset. project number INT64 The project number of the project that contains the dataset. table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table or materialized view, also referred to as the datasetId . table name STRING The name of the table or materialized view, also referred to as the tableId . creation time TIMESTAMP The creation time of the table. total rows INT64 The total number of rows in the table or materialized view. total partitions INT64 The number of partitions present in the table or materialized view.
- You must enable the Cloud Key Management Service API before running this example. resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting", pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" schema = <<EOF [ { "name": "ID", "type": "INT64", "mode": "NULLABLE", "description": "Item ID" }, { "name": "Item", "type": "STRING", "mode": "NULLABLE" } ] EOF encryption configuration { kms key name = google kms crypto key.crypto key.id } depends on = [google project iam member.service account access] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For readability, some columns are excluded from the result. +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ table name column name ordinal position is nullable data type is hidden is system defined is partitioning column clustering ordinal position policy tags +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ population by zip 2010 zipcode 1 NO STRING NO NO NO NULL 0 rows population by zip 2010 geo id 2 YES STRING NO NO NO NULL 0 rows population by zip 2010 minimum age 3 YES INT64 NO NO NO NULL 0 rows population by zip 2010 maximum age 4 YES INT64 NO NO NO NULL 0 rows population by zip 2010 gender 5 YES STRING NO NO NO NULL 0 rows population by zip 2010 population 6 YES INT64 NO NO NO NULL 0 rows +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ COLUMN FIELD PATHS view When you query the INFORMATION SCHEMA.COLUMN FIELD PATHS view, the query results contain one row for each column nested within a RECORD (or STRUCT ) column.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.rowAccessPolicies.delete The row-level access policy to delete. bigquery.rowAccessPolicies.setIamPolicy The row-level access policy to delete. bigquery.rowAccessPolicies.list The table to delete all row-level access policies on.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.rowAccessPolicies.create The target table. bigquery.rowAccessPolicies.setIamPolicy The target table. bigquery.tables.getData The target table.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.

### Control access with IAM Conditions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- Source ID: `site-docs-reference-5`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you create conditions for BigQuery tables and views, use the following formats: Attribute Value resource.type bigquery.googleapis.com/Table resource.name projects/ PROJECT ID /datasets/ DATASET ID /tables/ TABLE ID resource.service bigquery.googleapis.com resource.tags Supports hasTagKey , hasTagKeyId , matchTag and matchTagId .
- However, a user with conditional access can grant themselves the BigQuery Admin role ( roles/bigquery.admin ) on the table, and then modify row and column access policies.
- For the format, see the tables in Attribute formats . resource.tags : the tags attached to the BigQuery resource.
- Tags are supported only on BigQuery datasets, tables, and views resources.

