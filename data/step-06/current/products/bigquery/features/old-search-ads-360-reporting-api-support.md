---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.555Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Old Search Ads 360 reporting API support"
feature_slug: "old-search-ads-360-reporting-api-support"
latest_feature_date: "2023-09-18"
deprecation_date: "2024-05-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "old"
  - "search"
  - "ads"
  - "360"
  - "reporting"
  - "bigquery"
  - "transfer"
  - "will"
---

# Old Search Ads 360 reporting API support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service support for the old Search Ads 360 reporting API will end; deprecated on 2024-05-31.

## Extended Definition

BigQuery Data Transfer Service support for the old Search Ads 360 reporting API will end; deprecated on 2024-05-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide](https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Search Ads 360 migration guide \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide](https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The old Search Ads 360 reporting API is no longer supported, so you should migrate your BigQuery Data Transfer Service workflows to be compatible with the new Search Ads 360 reporting API.
- What's new with Search Ads 360 The new Search Ads 360 reporting API offers several changes that might affect your existing BigQuery Data Transfer Service workflows.
- Old Search Ads Report New Search Ads Resource New BigQuery Table Name adGroup ad group p sa AdGroupStats customer id p sa AdGroup customer id p sa AdGroupDeviceStats customer id p sa AdGroupConversionActionAndDeviceStats customer id ad ad group ad p sa AdConversionActionAndDeviceStats customer id p sa AdDeviceStats customer id p sa Ad customer id N/A ad group asset p sa AdGroupAssetStats customer id p sa AdGroupConversionActionAndAssetStats customer id N/A ad group asset set p sa AdGroupAssetSet customer id adGroupTarget ad group audience view p sa AdGroupAudienceDeviceStats customer id p sa AdGroupAudienceConversionActionAndDeviceStats customer id adGroupTarget ad group criterion p sa NegativeAdGroupCriterion customer id p sa NegativeAdGroupKeyword customer id p sa AdGroupCriterion customer id adGroupTarget age range view p sa AgeRangeDeviceStats customer id p sa AgeRangeConversionActionAndDeviceStats customer id N/A asset p sa Asset customer id bidStrategy bidding strategy p sa BidStrategy customer id p sa BidStrategyStats customer id campaign campaign p sa CampaignConversionActionAndDeviceStats customer id p sa Campaign customer id p sa CampaignDeviceStats customer id p sa CampaignStats customer id N/A campaign asset p sa CampaignAssetStats customer id p sa CampaignConversionActionAndAssetStats customer id N/A campaign asset set p sa CampaignAssetSet customer id campaignTarget campaign audience view p sa CampaignAudienceConversionActionAndDeviceStats customer id p sa CampaignAudienceDeviceStats customer id campaignTarget campaign criterion p sa CampaignCriterion customer id p sa NegativeCampaignKeyword customer id p sa NegativeCampaignCriterion customer id productLeadAndCrossSell cart data sales view p sa CartDataSalesStats customer id conversion conversion p sa Conversion customer id floodlightActivity conversion action p sa ConversionAction customer id account customer p sa Account customer id p sa AccountDeviceStats customer id p sa AccountConversionActionAndDeviceStats customer id p sa AccountStats customer id N/A customer asset p sa CustomerAssetStats customer id p sa CustomerConversionActionAndAssetStats customer id N/A customer asset set p sa CustomerAssetSet customer id adGroupTarget gender view p sa GenderDeviceStats customer id p sa GenderConversionActionAndDeviceStats customer id keyword keyword view p sa Keyword customer id p sa KeywordDeviceStats customer id p sa KeywordStats customer id p sa KeywordConversionActionAndDeviceStats customer id adGroupTarget location view p sa LocationDeviceStats customer id p sa LocationConversionActionAndDeviceStats customer id productAdvertised shopping performance view p sa ProductAdvertised customer id p sa ProductAdvertisedConversionActionAndDeviceStats customer id p sa ProductAdvertisedDeviceStats customer id productGroup product group view p sa ProductGroupStats customer id p sa ProductGroup customer id visit visit p sa Visit customer id adGroupTarget webpage view p sa WebpageDeviceStats customer id p sa WebpageConversionActionAndDeviceStats customer id Field mapping The BigQuery Data Transfer Service supports a subset of Search Ads 360 report fields as listed in Search Ads 360 report transformation .
- Examples of migrated queries The following examples demonstrate how a BigQuery query might look before and after it is mapped to the new Search Ads 360 reporting API.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Open-source ETL to BigQuery Getting started with BigQuery S3 to BigQuery in minutes Redshift to BigQuery in minutes Partner Advantage page Direct link Aiven Solution Aiven Data Platform Category ETL & Data Integration Description Aiven offers popular & proven open source database and messaging software as easy-to-adopt, fully managed, highly available, secure & compliant SaaS solutions like Kafka, Kafka Connect, Kafka MirrorMaker, PostgreSQL, MySQL, Elasticsearch, Cassandra, Redis and M3DB.
- Partner references SqlDBM + BigQuery Google BigQuery - Direct Connect and Reverse Engineer Partner Advantage page Direct link Stelo Data Solution Stelo Data Replication Category ETL & Data Integration Description Stelo is an enterprise-class Change Data Capture (CDC) tool that delivers data dynamically from anywhere to anywhere for BI analysis, reporting, and managing business operations and supply chains.
- Partner references Power interactive insights with data from BigQuery BigQuery data connection Partner Advantage page Direct link Improvado Solution Improvado Platform Category BI, ML, & Advanced Analytics Description Improvado is a marketing and sales intelligence platform that automates data integration, reporting, insights, and empowers your team with advanced AI Agents.
- Partner references Talend Cloud with BigQuery BigQuery connector guide Partner Advantage page Direct link Trifacta Solution Dataprep by Trifacta Category ETL & Data Integration Description Dataprep by Trifacta is an intelligent data service for visually exploring, cleaning, and preparing structured and unstructured data for analysis, reporting, and machine learning.

