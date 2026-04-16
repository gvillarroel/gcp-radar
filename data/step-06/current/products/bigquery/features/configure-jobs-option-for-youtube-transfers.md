---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.864Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Configure Jobs option for YouTube transfers"
feature_slug: "configure-jobs-option-for-youtube-transfers"
latest_feature_date: "2017-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
keywords:
  - "configure"
  - "jobs"
  - "option"
  - "youtube"
  - "transfers"
  - "bigquery"
  - "transfer"
  - "can"
---

# Configure Jobs option for YouTube transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can manage YouTube Channel and Content Owner reporting jobs through the Configure Jobs option.

## Extended Definition

BigQuery Data Transfer Service can manage YouTube Channel and Content Owner reporting jobs through the Configure Jobs option.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)

## Supporting Pages

### "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
- This document shows you how to schedule and manage recurring load jobs for CSS Center reporting data using the BigQuery Data Transfer Service .
- This option configures Pub/Sub run notifications for your data transfer.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- For more information about using the bq show command, see the following: Getting information about datasets Creating and using tables Getting information about views Working with transfers Managing jobs Getting information about a table snapshot bq update Use the bq update command to change a resource.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.
- If the BigQuery Data Transfer Service finds any files with a "last modified time" that have occurred after the timestamp of the last successful transfer, the BigQuery Data Transfer Service transfers those files in an incremental transfer.

