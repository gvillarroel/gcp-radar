---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.503Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Manifest file support for BigQuery external data on S3 and Azure Blob"
feature_slug: "manifest-file-support-for-bigquery-external-data-on-s3-and-azure-blob"
latest_feature_date: "2024-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "Azure Blob Storage manifest"
  - "external table manifest file"
  - "Azure Blob manifest"
  - "Amazon S3 manifest"
  - "manifest file"
  - "S3 and Azure Blob loading"
  - "manifest files"
  - "S3 manifest"
---

# Manifest file support for BigQuery external data on S3 and Azure Blob

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports manifest files when reading data from Amazon S3 and Azure Blob Storage.

## Extended Definition

BigQuery supports manifest-based specification of input URIs for external tables/loads, where the manifest is newline-delimited with one URI per line. The documented behavior requires that manifest files cannot use wildcard URIs and that all referenced data files must be in the same bucket as the manifest file. The provided excerpts do not explicitly verify provider-specific support for Amazon S3 or Azure Blob in this context.

## Evidence Summary

The cited pages confirm BigQuery manifest file format and constraints (newline-delimited URIs, no wildcards, same-bucket requirement) in SQL/table-definition and CLI documentation, but not the S3/Azure-specific claim.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest.
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest.
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest.
- NEW LINE DELIMITED MANIFEST : Indicates that the provided URIs are newline-delimited manifest files, with one URI per line.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest file.
- Indicates that the provided URIs are newline-delimited manifest files, with one URI per line.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Wildcard URIs are not supported in the manifest files, and all referenced data files must be in the same bucket as the manifest file.
- Indicates that the provided URIs are newline-delimited manifest files, with one URI per line.

