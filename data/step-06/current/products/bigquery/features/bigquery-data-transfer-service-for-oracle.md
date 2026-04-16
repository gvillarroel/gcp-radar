---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.505Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service for Oracle"
feature_slug: "bigquery-data-transfer-service-for-oracle"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers"
  - "https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
keywords:
  - "bigquery"
  - "transfer"
  - "oracle"
  - "can"
---

# BigQuery Data Transfer Service for Oracle

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer data from Oracle.

## Extended Definition

BigQuery Data Transfer Service can transfer data from Oracle.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- [https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro](https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)

## Supporting Pages

### "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Required BigQuery roles To get the permissions that you need to create a BigQuery Data Transfer Service data transfer, ask your administrator to grant you the BigQuery Admin ( roles/bigquery.admin ) IAM role on your project.
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
- This document shows you how to schedule and manage recurring load jobs for CSS Center reporting data using the BigQuery Data Transfer Service .

### BigQuery Data Transfer Service data sources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro](https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery Data Transfer Service supports loading data from the following data sources: SaaS platforms: Salesforce Salesforce Marketing Cloud ServiceNow Marketing platforms: Facebook Ads HubSpot ( Preview ) Klaviyo ( Preview ) Mailchimp ( Preview ) Payment platforms: PayPal ( Preview ) Stripe ( Preview ) Shopify ( Preview ) Databases and data warehouses: Amazon Redshift Apache Hive Metastore Microsoft SQL Server ( Preview ) MySQL Oracle PostgreSQL Snowflake ( Preview ) Teradata Cloud storage: Cloud Storage Amazon Simple Storage Service (Amazon S3) Azure Blob Storage Google Services: Campaign Manager Comparison Shopping Service (CSS)Center ( Preview ) Display & Video 360 Google Ads Google Ad Manager Google Analytics 4 Google Merchant Center ( Preview ) Search Ads 360 Google Play YouTube Channel YouTube Content Owner What's next To learn more about the BigQuery Data Transfer Service, see What is BigQuery Data Transfer Service? .
- BigQuery Data Transfer Service data sources The BigQuery Data Transfer Service lets you schedule and automate data ingestion to bring data from various data sources into BigQuery.
- To learn about other ways you can ingest data into BigQuery, such as using extract, load, and transform (ELT) workflows, see Introduction to loading data .
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- As an example, consider this data path: folder/ /subfolder/ .csv Both of the following files are transferred to Google Cloud, because they have the prefix folder/ : folder/any/subfolder/file1.csv folder/file2.csv However, only the folder/any/subfolder/file1.csv file is loaded into BigQuery, because it matches the full data path.
- Supported file formats The BigQuery Data Transfer Service supports loading data from Blob Storage in the following formats: Comma-separated values (CSV) JSON (newline delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Blob Storage supports loading compressed data.
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.

