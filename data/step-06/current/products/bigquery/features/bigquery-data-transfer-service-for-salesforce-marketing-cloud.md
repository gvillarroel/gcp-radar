---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.506Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service for Salesforce Marketing Cloud"
feature_slug: "bigquery-data-transfer-service-for-salesforce-marketing-cloud"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing"
  - "https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
keywords:
  - "bigquery"
  - "transfer"
  - "salesforce"
  - "marketing"
  - "can"
---

# BigQuery Data Transfer Service for Salesforce Marketing Cloud

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer data from Salesforce Marketing Cloud.

## Extended Definition

BigQuery Data Transfer Service can transfer data from Salesforce Marketing Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- [https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro](https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)

## Supporting Pages

### "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Schedule recurring data transfers To keep BigQuery up to date with the latest marketing data from your data source, set up recurring data transfers using the BigQuery Data Transfer Service to extract and load data on a schedule.
- In this tutorial, you create an ELT workflow by setting up a marketing analytics data transfer by using the BigQuery Data Transfer Service.
- Create a Dataform repository After you create the data transfer configuration to transfer the latest data from Google Ads, set up Dataform to regularly transform your marketing analytics data.
- Build ELT pipeline for marketing analytics data This tutorial shows you how to set up an ELT workflow that extracts, loads, and transforms marketing analytics data in BigQuery.

### BigQuery Data Transfer Service data sources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro](https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery Data Transfer Service supports loading data from the following data sources: SaaS platforms: Salesforce Salesforce Marketing Cloud ServiceNow Marketing platforms: Facebook Ads HubSpot ( Preview ) Klaviyo ( Preview ) Mailchimp ( Preview ) Payment platforms: PayPal ( Preview ) Stripe ( Preview ) Shopify ( Preview ) Databases and data warehouses: Amazon Redshift Apache Hive Metastore Microsoft SQL Server ( Preview ) MySQL Oracle PostgreSQL Snowflake ( Preview ) Teradata Cloud storage: Cloud Storage Amazon Simple Storage Service (Amazon S3) Azure Blob Storage Google Services: Campaign Manager Comparison Shopping Service (CSS)Center ( Preview ) Display & Video 360 Google Ads Google Ad Manager Google Analytics 4 Google Merchant Center ( Preview ) Search Ads 360 Google Play YouTube Channel YouTube Content Owner What's next To learn more about the BigQuery Data Transfer Service, see What is BigQuery Data Transfer Service? .
- BigQuery Data Transfer Service data sources The BigQuery Data Transfer Service lets you schedule and automate data ingestion to bring data from various data sources into BigQuery.
- To learn about other ways you can ingest data into BigQuery, such as using extract, load, and transform (ELT) workflows, see Introduction to loading data .
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, we retrieve total sales for a customer named john . -- Get combined sales for a customer from both offline and online sales USING ( SELECT total price FROM listing nto john.nto orders dll WHERE customer name = 'john' UNION ALL SELECT total price FROM listing nto john.nto orders dll WHERE customer name = 'john' ) a SELECT SUM ( total price ); Cross Cloud Data Transfer through CTAS You can use Create Table As Select (CTAS) to move data from Data Cloud tables in the BigQuery Omni region to the US region. -- Move all the orders for March to the US region CREATE OR REPLACE TABLE us data . online orders march AS SELECT FROM listing nto john . nto orders dll WHERE EXTRACT ( MONTH FROM order time ) = 3 The destination table is a BigQuery managed table in the US region.
- Cross cloud materialized views Cross Cloud Materialized Views ( CCMV ) transfer data from a BigQuery Omni region to a non-BigQuery Omni BigQuery region incrementally.
- Work with Salesforce Data Cloud data in BigQuery Data Cloud users can access their Data Cloud data natively in BigQuery.
- Go to BigQuery Click Salesforce Data Cloud Data Cloud datasets are displayed.

