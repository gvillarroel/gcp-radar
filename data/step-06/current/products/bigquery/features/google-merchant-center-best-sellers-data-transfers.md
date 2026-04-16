---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.788Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Merchant Center Best Sellers data transfers"
feature_slug: "google-merchant-center-best-sellers-data-transfers"
latest_feature_date: "2020-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers"
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/dts-introduction"
keywords:
  - "merchant"
  - "center"
  - "best"
  - "sellers"
  - "transfers"
  - "bigquery"
  - "transfer"
  - "supports"
---

# Google Merchant Center Best Sellers data transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports Google Merchant Center Best Sellers data transfers.

## Extended Definition

BigQuery Data Transfer Service supports Google Merchant Center Best Sellers data transfers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer](https://docs.cloud.google.com/bigquery/docs/css-center-transfer)
- [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)

## Supporting Pages

### "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- Source ID: `site-api-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The data transfer is created in your default project. bq mk \ --transfer config \ --target dataset = mydataset \ --display name = 'My Transfer' \ --params = '{"css id":"1234","export products":"true","export regional inventories":"true","export local inventories":"true","export price benchmarks":"true","export best sellers":"true"}' \ --data source = css center The first time you run the command, you receive a message like the following: [URL omitted] Please copy and paste the above URL into your web browser and follow the instructions to retrieve an authentication code.
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Set up a CSS Center transfer To create a data transfer for CSS Center reporting: Console Go to the Data transfers page in the Google Cloud console.

### Load CSS Center data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer](https://docs.cloud.google.com/bigquery/docs/css-center-transfer)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported reports The BigQuery Data Transfer Service for the CSS Center supports the following data from the product and product issues reports of associated Merchant Center accounts.
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
- Data ingestion from CSS Center transfers When you transfer data from CSS Center into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- If you schedule multiple transfers for the same date, BigQuery Data Transfer Service overwrites the partition for that specific date with the latest data.

### What is the BigQuery Data Transfer Service? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- Source ID: `site-docs-reference-required-14`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported data sources The BigQuery Data Transfer Service supports loading data from the following data sources: SaaS platforms: Salesforce Salesforce Marketing Cloud ServiceNow Marketing platforms: Facebook Ads HubSpot ( Preview ) Klaviyo ( Preview ) Mailchimp ( Preview ) Payment platforms: PayPal ( Preview ) Stripe ( Preview ) Shopify ( Preview ) Databases and data warehouses: Amazon Redshift Apache Hive Metastore Microsoft SQL Server ( Preview ) MySQL Oracle PostgreSQL Snowflake ( Preview ) Teradata Cloud storage: Cloud Storage Amazon Simple Storage Service (Amazon S3) Azure Blob Storage Google Services: Campaign Manager Comparison Shopping Service (CSS)Center ( Preview ) Display & Video 360 Google Ads Google Ad Manager Google Analytics 4 Google Merchant Center ( Preview ) Search Ads 360 Google Play YouTube Channel YouTube Content Owner Data delivery SLO considerations The Data Delivery SLO applies to automatically scheduled data transfers using the BigQuery Data Transfer Service from sources within Google Cloud.
- The BigQuery Data Transfer Service supports data transfers from any region where your data is stored to any location where your destination dataset is located.
- Using reservation slots with data transfers Jobs triggered by the BigQuery Data Transfer Service only use reservation slots if the project, folder, or organization is assigned to a reservation with any of the following job types : Query jobs using QUERY Load jobs using PIPELINE Jobs that copy datasets don't use reservation slots.
- For data transfers involving third-party or non-Google Cloud sources, service outages with these sources can impact performance with the BigQuery Data Transfer Service.

