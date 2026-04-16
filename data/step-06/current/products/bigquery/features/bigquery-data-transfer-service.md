---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.870Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service"
feature_slug: "bigquery-data-transfer-service"
latest_feature_date: "2017-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/dts-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview"
keywords:
  - "bigquery"
  - "transfer"
  - "automates"
  - "scheduled"
  - "ingestion"
  - "into"
  - "sources"
  - "transfers"
---

# BigQuery Data Transfer Service

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service automates scheduled data ingestion into BigQuery from supported sources; BigQuery Data Transfer Service automates data transfers from supported sources into BigQuery.

## Extended Definition

BigQuery Data Transfer Service automates scheduled data ingestion into BigQuery from supported sources; BigQuery Data Transfer Service automates data transfers from supported sources into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)

## Supporting Pages

### What is the BigQuery Data Transfer Service? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- Source ID: `site-docs-reference-required-14`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported data sources The BigQuery Data Transfer Service supports loading data from the following data sources: SaaS platforms: Salesforce Salesforce Marketing Cloud ServiceNow Marketing platforms: Facebook Ads HubSpot ( Preview ) Klaviyo ( Preview ) Mailchimp ( Preview ) Payment platforms: PayPal ( Preview ) Stripe ( Preview ) Shopify ( Preview ) Databases and data warehouses: Amazon Redshift Apache Hive Metastore Microsoft SQL Server ( Preview ) MySQL Oracle PostgreSQL Snowflake ( Preview ) Teradata Cloud storage: Cloud Storage Amazon Simple Storage Service (Amazon S3) Azure Blob Storage Google Services: Campaign Manager Comparison Shopping Service (CSS)Center ( Preview ) Display & Video 360 Google Ads Google Ad Manager Google Analytics 4 Google Merchant Center ( Preview ) Search Ads 360 Google Play YouTube Channel YouTube Content Owner Data delivery SLO considerations The Data Delivery SLO applies to automatically scheduled data transfers using the BigQuery Data Transfer Service from sources within Google Cloud.
- The BigQuery Data Transfer Service automates data movement into BigQuery on a scheduled, managed basis.
- For data transfers involving third-party or non-Google Cloud sources, service outages with these sources can impact performance with the BigQuery Data Transfer Service.
- In addition to loading data into BigQuery, BigQuery Data Transfer Service is used for two BigQuery operations: dataset copies and scheduled queries .

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data ingestion for Azure Blob transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up an Azure Blob transfer .
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- As an example, consider this data path: folder/ /subfolder/ .csv Both of the following files are transferred to Google Cloud, because they have the prefix folder/ : folder/any/subfolder/file1.csv folder/file2.csv However, only the folder/any/subfolder/file1.csv file is loaded into BigQuery, because it matches the full data path.

### "Introduction to Cloud Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
- Source ID: `site-api-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data ingestion for Cloud Storage transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up a Cloud Storage transfer .
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.
- If the BigQuery Data Transfer Service finds any files with a "last modified time" that have occurred after the timestamp of the last successful transfer, the BigQuery Data Transfer Service transfers those files in an incremental transfer.
- Incremental transfers A transfer configuration with an APPEND or WRITE APPEND write preference, also called an incremental transfer, incrementally appends new data since the previous successful transfer to a BigQuery destination table.

