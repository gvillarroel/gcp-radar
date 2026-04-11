---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.964Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Web UI JSON schema Create Table support"
feature_slug: "bigquery-web-ui-json-schema-create-table-support"
latest_feature_date: "2011-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "JSON-formatted schema"
  - "Create Table dialog"
  - "Web UI create table"
  - "JSON schema input"
  - "Create Table JSON"
  - "table schema JSON"
  - "schema editor"
  - "JSON schema"
---

# BigQuery Web UI JSON schema Create Table support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery Web UI now allows JSON-formatted schemas in the Create Table dialog.

## Extended Definition

The BigQuery Web UI now allows JSON-formatted schemas in the Create Table dialog.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Add multiple tags under the same flag with commas between key:value pairs. project id is your project ID. dataset is a dataset in your project. table is the name of the table you're creating. schema is an inline schema definition in the format field:data type,field:data type or the path to the JSON schema file on your local machine.
- The schema is specified inline as: qtr:STRING,sales:FLOAT,year:STRING . bq mk \ -t \ --expiration 3600 \ --description "This is my table" \ --label organization:development \ mydataset.mytable \ qtr:STRING,sales:FLOAT,year:STRING Enter the following command to create a table using a JSON schema file.
- The path to the schema file is /tmp/myschema.json . bq mk \ --table \ --expiration 3600 \ --description "This is my table" \ --label organization:development \ mydataset.mytable \ /tmp/myschema.json Enter the following command to create a table using an JSON schema file.
- When you use a JSON array, you generate the schema using the same process as creating a JSON schema file .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The default value is false . --destination kms key= KEY Specifies a Cloud KMS key resource ID for encrypting the destination table data. --destination schema={ PATH TO FILE SCHEMA } The path to a local JSON schema file or a comma-separated list of column definitions in the form FIELD : DATA TYPE , FIELD : DATA TYPE .
- Note: You can use the TRUNCATE TABLE statement to remove all rows from a table without deleting the schema. --schema={ SCHEMA FILE SCHEMA } Specifies either the path to a local JSON schema file or a comma-separated list of column definitions in the form FIELD : DATA TYPE , FIELD : DATA TYPE .
- The default value is false . --schema={ SCHEMA FILE SCHEMA } Specifies either the path to a local JSON schema file or a comma-separated list of column definitions in the form FIELD : DATA TYPE , FIELD : DATA TYPE .
- The default value is false . --schema={ SCHEMA FILE SCHEMA } Specifies either the path to a local JSON schema file or a comma-separated list of column definitions in the form FIELD : DATA TYPE , FIELD : DATA TYPE .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- The schema is defined using a JSON schema file — myschema.json . bq load \ -- noreplace \ -- source format = CSV \ mydataset . mytable \ gs : // mybucket / mydata . csv \ ./ myschema . json API Create a load job that points to the source data in Cloud Storage. (Optional) Specify your location in the location property in the jobReference section of the job resource .
- When you use a JSON array, you generate the schema using the same process as creating a JSON schema file .
- When you use a JSON array, you generate the schema using the same process as creating a JSON schema file .
- To include field descriptions, modes, and RECORD types, supply a JSON schema file instead.

