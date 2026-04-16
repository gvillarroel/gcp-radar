---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.230Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Microsoft SQL Server connector for BigQuery Data Transfer Service"
feature_slug: "microsoft-sql-server-connector-for-bigquery-data-transfer-service"
latest_feature_date: "2025-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
keywords:
  - "microsoft"
  - "sql"
  - "server"
  - "connector"
  - "bigquery"
  - "transfer"
  - "can"
---

# Microsoft SQL Server connector for BigQuery Data Transfer Service

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer data from Microsoft SQL Server to BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer data from Microsoft SQL Server to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro](https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)

## Supporting Pages

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The Apache Hive Metastore migration connector in the BigQuery Data Transfer Service lets you seamlessly migrate your Hive Metastore tables to Google Cloud at scale.
- Quotas and concurrency limits For every BigQuery Data Transfer Service run, the Hive Metastore connector runs one Storage Transfer Service job per table.
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- Run the API request with the following information: GET https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources Example Response (abridged) (JSON): { "transferResources": [ { "name": "projects/.../transferResources/table1", "latestStatusDetail": { "state": "RESOURCE TRANSFER SUCCEEDED", "completedPercentage": 100.0 }, "updateTime": "2026-02-03T22:42:06Z" } ] } curl command: curl -X GET "https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources" -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Accept: application/json" You can filter the results by resource name or state.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Starburst BigQuery connector Starburst BigQuery catalogs Starburst Enriches BigQuery Customer Experience Partner Advantage page Direct link Tableau Solution Tableau Server Category BI, ML, & Advanced Analytics Description Tableau integrates seamlessly with the entire Google Cloud platform to ensure maximum efficiency for all of your analytics needs.
- Partner references Drive Meaningful Insights from BigQuery CData Solution SQL Server Integration Services (SSIS) component for BigQuery Category ETL & Data Integration Description SQL Server Integration Services (SSIS) is a component of the Microsoft SQL Server database software that can be used to perform a broad range of data migration tasks.
- You can use this connector to integrate Google BigQuery API data inside apps like SSIS, SQL Server, or popular ETL Platforms / BI Tools/ Reporting Apps / Programming languages.
- Fivetran has recently partnered with BigQuery Data Transfer Service, letting users manage Fivetran data connectors within Google Cloud.

### BigQuery Data Transfer Service data sources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro](https://docs.cloud.google.com/bigquery/docs/dts-data-sources-intro)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery Data Transfer Service supports loading data from the following data sources: SaaS platforms: Salesforce Salesforce Marketing Cloud ServiceNow Marketing platforms: Facebook Ads HubSpot ( Preview ) Klaviyo ( Preview ) Mailchimp ( Preview ) Payment platforms: PayPal ( Preview ) Stripe ( Preview ) Shopify ( Preview ) Databases and data warehouses: Amazon Redshift Apache Hive Metastore Microsoft SQL Server ( Preview ) MySQL Oracle PostgreSQL Snowflake ( Preview ) Teradata Cloud storage: Cloud Storage Amazon Simple Storage Service (Amazon S3) Azure Blob Storage Google Services: Campaign Manager Comparison Shopping Service (CSS)Center ( Preview ) Display & Video 360 Google Ads Google Ad Manager Google Analytics 4 Google Merchant Center ( Preview ) Search Ads 360 Google Play YouTube Channel YouTube Content Owner What's next To learn more about the BigQuery Data Transfer Service, see What is BigQuery Data Transfer Service? .
- BigQuery Data Transfer Service data sources The BigQuery Data Transfer Service lets you schedule and automate data ingestion to bring data from various data sources into BigQuery.
- To learn about other ways you can ingest data into BigQuery, such as using extract, load, and transform (ELT) workflows, see Introduction to loading data .
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

