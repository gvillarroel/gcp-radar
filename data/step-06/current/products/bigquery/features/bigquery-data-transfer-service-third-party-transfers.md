---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.824Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service third-party transfers"
feature_slug: "bigquery-data-transfer-service-third-party-transfers"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/dts-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "bigquery"
  - "transfer"
  - "third"
  - "party"
  - "transfers"
  - "supports"
  - "external"
  - "sources"
---

# BigQuery Data Transfer Service third-party transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports transfers from external third-party data sources.

## Extended Definition

BigQuery Data Transfer Service supports transfers from external third-party data sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### What is the BigQuery Data Transfer Service? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- Source ID: `site-docs-reference-required-14`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For data transfers involving third-party or non-Google Cloud sources, service outages with these sources can impact performance with the BigQuery Data Transfer Service.
- Supported data sources The BigQuery Data Transfer Service supports loading data from the following data sources: SaaS platforms: Salesforce Salesforce Marketing Cloud ServiceNow Marketing platforms: Facebook Ads HubSpot ( Preview ) Klaviyo ( Preview ) Mailchimp ( Preview ) Payment platforms: PayPal ( Preview ) Stripe ( Preview ) Shopify ( Preview ) Databases and data warehouses: Amazon Redshift Apache Hive Metastore Microsoft SQL Server ( Preview ) MySQL Oracle PostgreSQL Snowflake ( Preview ) Teradata Cloud storage: Cloud Storage Amazon Simple Storage Service (Amazon S3) Azure Blob Storage Google Services: Campaign Manager Comparison Shopping Service (CSS)Center ( Preview ) Display & Video 360 Google Ads Google Ad Manager Google Analytics 4 Google Merchant Center ( Preview ) Search Ads 360 Google Play YouTube Channel YouTube Content Owner Data delivery SLO considerations The Data Delivery SLO applies to automatically scheduled data transfers using the BigQuery Data Transfer Service from sources within Google Cloud.
- The BigQuery Data Transfer Service supports data transfers from any region where your data is stored to any location where your destination dataset is located.
- As such, the Data Delivery SLO does not apply to BigQuery Data Transfer Service data transfers from non-Google Cloud sources.

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery lets you create external connections to query data that's stored outside of BigQuery in Google Cloud services like Cloud Storage or Spanner, or in third-party sources like Amazon Web Services (AWS) or Microsoft Azure.
- BigQuery supports accessing select external data sources through Cloud Storage and federated queries.
- For batch or incremental loading of data from Cloud Storage and other supported data sources, we recommend using the BigQuery Data Transfer Service .
- Federation to external data sources This method enables access to external data without loading it into BigQuery.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Integration with BigQuery BigQuery as a data source Partner Advantage page Direct link Braze Solution Braze Data Platform Category BI, ML, & Advanced Analytics Description Braze Data Platform facilitates secure and efficient distribution of product, engagement, and customer data to preferred third-party tools for deeper analysis, including analytics and business intelligence solutions.
- Third-party software is not supported by Cloud Customer Care when it has been identified that BigQuery is working as intended.
- Partner references Google BigQuery resources Connect to BigQuery Understanding BigQuery costs Unravel for BigQuery datasheet Partner Advantage page Direct link Validio Solution Validio Platform Category Data Quality, Observability, & FinOps Description Validio is the next generation data quality and reliability platform and offers the only data quality solution on the market monitoring and validating both data in motion and data at rest on datapoint and pipeline metadata level.
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.

