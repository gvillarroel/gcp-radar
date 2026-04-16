---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.806Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Search Ads 360 transfers"
feature_slug: "search-ads-360-transfers"
latest_feature_date: "2019-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
keywords:
  - "search"
  - "ads"
  - "360"
  - "transfers"
  - "bigquery"
  - "transfer"
  - "can"
  - "into"
---

# Search Ads 360 transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer Search Ads 360 data into BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer Search Ads 360 data into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide](https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)

## Supporting Pages

### Search Ads 360 migration guide \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide](https://docs.cloud.google.com/bigquery/docs/search-ads-migration-guide)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Old Search Ads Report New Search Ads Resource New BigQuery Table Name adGroup ad group p sa AdGroupStats customer id p sa AdGroup customer id p sa AdGroupDeviceStats customer id p sa AdGroupConversionActionAndDeviceStats customer id ad ad group ad p sa AdConversionActionAndDeviceStats customer id p sa AdDeviceStats customer id p sa Ad customer id N/A ad group asset p sa AdGroupAssetStats customer id p sa AdGroupConversionActionAndAssetStats customer id N/A ad group asset set p sa AdGroupAssetSet customer id adGroupTarget ad group audience view p sa AdGroupAudienceDeviceStats customer id p sa AdGroupAudienceConversionActionAndDeviceStats customer id adGroupTarget ad group criterion p sa NegativeAdGroupCriterion customer id p sa NegativeAdGroupKeyword customer id p sa AdGroupCriterion customer id adGroupTarget age range view p sa AgeRangeDeviceStats customer id p sa AgeRangeConversionActionAndDeviceStats customer id N/A asset p sa Asset customer id bidStrategy bidding strategy p sa BidStrategy customer id p sa BidStrategyStats customer id campaign campaign p sa CampaignConversionActionAndDeviceStats customer id p sa Campaign customer id p sa CampaignDeviceStats customer id p sa CampaignStats customer id N/A campaign asset p sa CampaignAssetStats customer id p sa CampaignConversionActionAndAssetStats customer id N/A campaign asset set p sa CampaignAssetSet customer id campaignTarget campaign audience view p sa CampaignAudienceConversionActionAndDeviceStats customer id p sa CampaignAudienceDeviceStats customer id campaignTarget campaign criterion p sa CampaignCriterion customer id p sa NegativeCampaignKeyword customer id p sa NegativeCampaignCriterion customer id productLeadAndCrossSell cart data sales view p sa CartDataSalesStats customer id conversion conversion p sa Conversion customer id floodlightActivity conversion action p sa ConversionAction customer id account customer p sa Account customer id p sa AccountDeviceStats customer id p sa AccountConversionActionAndDeviceStats customer id p sa AccountStats customer id N/A customer asset p sa CustomerAssetStats customer id p sa CustomerConversionActionAndAssetStats customer id N/A customer asset set p sa CustomerAssetSet customer id adGroupTarget gender view p sa GenderDeviceStats customer id p sa GenderConversionActionAndDeviceStats customer id keyword keyword view p sa Keyword customer id p sa KeywordDeviceStats customer id p sa KeywordStats customer id p sa KeywordConversionActionAndDeviceStats customer id adGroupTarget location view p sa LocationDeviceStats customer id p sa LocationConversionActionAndDeviceStats customer id productAdvertised shopping performance view p sa ProductAdvertised customer id p sa ProductAdvertisedConversionActionAndDeviceStats customer id p sa ProductAdvertisedDeviceStats customer id productGroup product group view p sa ProductGroupStats customer id p sa ProductGroup customer id visit visit p sa Visit customer id adGroupTarget webpage view p sa WebpageDeviceStats customer id p sa WebpageConversionActionAndDeviceStats customer id Field mapping The BigQuery Data Transfer Service supports a subset of Search Ads 360 report fields as listed in Search Ads 360 report transformation .
- The old Search Ads 360 reporting API is no longer supported, so you should migrate your BigQuery Data Transfer Service workflows to be compatible with the new Search Ads 360 reporting API.
- What's new with Search Ads 360 The new Search Ads 360 reporting API offers several changes that might affect your existing BigQuery Data Transfer Service workflows.
- For example, the field ad group ad.ad.text ad.description1 in a Search Ads 360 resource is transferred to BigQuery as ad group ad ad text ad description1 .

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Data ingestion from Google Ads transfers When you transfer data from Google Ads into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Load Google Ads data into BigQuery You can load data from Google Ads (formerly known as Google AdWords) to BigQuery using the BigQuery Data Transfer Service for Google Ads connector.
- If you schedule multiple transfers for the same date, BigQuery Data Transfer Service overwrites the partition for that specific date with the latest data.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.
- Data ingestion for Azure Blob transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up an Azure Blob transfer .
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- As an example, consider this data path: folder/ /subfolder/ .csv Both of the following files are transferred to Google Cloud, because they have the prefix folder/ : folder/any/subfolder/file1.csv folder/file2.csv However, only the folder/any/subfolder/file1.csv file is loaded into BigQuery, because it matches the full data path.

