---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.801Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Third-party data transfers"
feature_slug: "third-party-data-transfers"
latest_feature_date: "2019-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/dts-introduction"
keywords:
  - "third"
  - "party"
  - "transfers"
  - "bigquery"
  - "transfer"
  - "can"
  - "load"
  - "external"
---

# Third-party data transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can load data from supported third-party external data sources.

## Extended Definition

BigQuery Data Transfer Service can load data from supported third-party external data sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)

## Supporting Pages

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery lets you create external connections to query data that's stored outside of BigQuery in Google Cloud services like Cloud Storage or Spanner, or in third-party sources like Amazon Web Services (AWS) or Microsoft Azure.
- Methods of loading or accessing external data In the BigQuery page, in the Add data dialog , you can view all available methods to load data into BigQuery or access data from BigQuery.
- For batch or incremental loading of data from Cloud Storage and other supported data sources, we recommend using the BigQuery Data Transfer Service .
- With the BigQuery Data Transfer Service, to automate data loading pipelines into BigQuery, you can schedule load jobs.

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Data ingestion from Google Ad Manager transfers When you transfer data from Google Ad Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- AdCategory , AudienceSegmentCategory , BandwidthGroup , Browser , BrowserLanguage , DeviceCapability , DeviceCategory , DeviceManufacturer , GeoTarget , MobileCarrier , MobileDevice , MobileDeviceSubmodel , OperatingSystem , OperatingSystemVersion , ThirdPartyCompany , TimeZone , User , ProgrammaticBuyer Whole table overwrite The whole table is overwritten with every transfer run.
- A transfer run then incrementally loads the new Google Ad Manager DT files from the Cloud Storage bucket into the BigQuery table without reloading files that have already been transferred to the BigQuery table.

### What is the BigQuery Data Transfer Service? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- Source ID: `site-docs-reference-required-14`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For data transfers involving third-party or non-Google Cloud sources, service outages with these sources can impact performance with the BigQuery Data Transfer Service.
- Supported data sources The BigQuery Data Transfer Service supports loading data from the following data sources: SaaS platforms: Salesforce Salesforce Marketing Cloud ServiceNow Marketing platforms: Facebook Ads HubSpot ( Preview ) Klaviyo ( Preview ) Mailchimp ( Preview ) Payment platforms: PayPal ( Preview ) Stripe ( Preview ) Shopify ( Preview ) Databases and data warehouses: Amazon Redshift Apache Hive Metastore Microsoft SQL Server ( Preview ) MySQL Oracle PostgreSQL Snowflake ( Preview ) Teradata Cloud storage: Cloud Storage Amazon Simple Storage Service (Amazon S3) Azure Blob Storage Google Services: Campaign Manager Comparison Shopping Service (CSS)Center ( Preview ) Display & Video 360 Google Ads Google Ad Manager Google Analytics 4 Google Merchant Center ( Preview ) Search Ads 360 Google Play YouTube Channel YouTube Content Owner Data delivery SLO considerations The Data Delivery SLO applies to automatically scheduled data transfers using the BigQuery Data Transfer Service from sources within Google Cloud.
- Using reservation slots with data transfers Jobs triggered by the BigQuery Data Transfer Service only use reservation slots if the project, folder, or organization is assigned to a reservation with any of the following job types : Query jobs using QUERY Load jobs using PIPELINE Jobs that copy datasets don't use reservation slots.
- The BigQuery Data Transfer Service supports data transfers from any region where your data is stored to any location where your destination dataset is located.

