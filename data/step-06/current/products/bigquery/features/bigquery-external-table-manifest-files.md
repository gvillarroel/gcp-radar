---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.639Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery external table manifest files"
feature_slug: "bigquery-external-table-manifest-files"
latest_feature_date: "2023-08-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "manifest URI"
  - "manifested external table"
  - "external table manifest"
  - "Cloud Storage manifest"
  - "external manifest"
  - "manifest file"
  - "external table source files"
  - "CREATE EXTERNAL TABLE"
---

# BigQuery external table manifest files

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports using manifest files for external tables, with this capability now generally available.

## Extended Definition

BigQuery supports creating external tables with source data described by newline-delimited manifest files in the `CREATE EXTERNAL TABLE` flow. In this manifest mode, each line in the manifest is interpreted as a data-file URI, and BigQuery requires that wildcard URIs are not used and that all referenced files are in the same Cloud Storage bucket as the manifest file.

## Evidence Summary

These official BigQuery docs consistently describe manifest-file-based external table source URIs and specify key constraints for `CREATE EXTERNAL TABLE`.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example creates an AWS Glue federated dataset: CREATE EXTERNAL SCHEMA mydataset WITH CONNECTION myproject . aws-us-east-1 . myconnection OPTIONS ( external source = 'aws-glue://arn:aws:glue:us-east-1:123456789:database/test database' , location = 'aws-us-east-1' ); CREATE EXTERNAL TABLE statement Creates a new external table.
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest file.
- Details The CREATE EXTERNAL TABLE statement does not support creating temporary external tables.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest.
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest.
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest.
- NEW LINE DELIMITED MANIFEST : Indicates that the provided URIs are newline-delimited manifest files, with one URI per line.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest file.
- Indicates that the provided URIs are newline-delimited manifest files, with one URI per line.

