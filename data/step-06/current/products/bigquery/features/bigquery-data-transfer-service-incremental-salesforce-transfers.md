---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.237Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service incremental Salesforce transfers"
feature_slug: "bigquery-data-transfer-service-incremental-salesforce-transfers"
latest_feature_date: "2025-11-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
keywords:
  - "bigquery"
  - "transfer"
  - "incremental"
  - "salesforce"
  - "transfers"
  - "supports"
---

# BigQuery Data Transfer Service incremental Salesforce transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports incremental data transfers from Salesforce to BigQuery.

## Extended Definition

BigQuery Data Transfer Service supports incremental data transfers from Salesforce to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)

## Supporting Pages

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- If the BigQuery Data Transfer Service finds any files with a "last modified time" that have occurred after the timestamp of the last successful transfer, the BigQuery Data Transfer Service transfers those files in an incremental transfer.
- Incremental transfers A transfer configuration with an APPEND or WRITE APPEND write preference, also called an incremental transfer, incrementally appends new data since the previous successful transfer to a BigQuery destination table.
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- Supported file formats The BigQuery Data Transfer Service supports loading data from Blob Storage in the following formats: Comma-separated values (CSV) JSON (newline delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Blob Storage supports loading compressed data.

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- If the BigQuery Data Transfer Service finds any files with a "last modified time" that have occurred after the timestamp of the last successful transfer, the BigQuery Data Transfer Service transfers those files in an incremental transfer.
- Incremental transfers A transfer configuration with an APPEND or WRITE APPEND write preference, also called an incremental transfer, incrementally appends new data since the previous successful transfer to a BigQuery destination table.
- Supported file formats The BigQuery Data Transfer Service supports loading data from Cloud Storage in one of the following formats: Comma-separated values (CSV) JSON (newline-delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Cloud Storage supports loading compressed data.
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Data transfer options Support Supported reports The Google Ad Manager connector supports the transfer of data from the following reports: Data Transfer (Google Ad Manager DT) files Data Transfer fields Match tables provided by the BigQuery Data Transfer Service .
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- A transfer run then incrementally loads the new Google Ad Manager DT files from the Cloud Storage bucket into the BigQuery table without reloading files that have already been transferred to the BigQuery table.

