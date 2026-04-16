---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.657Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Ads API support in BigQuery Data Transfer Service"
feature_slug: "google-ads-api-support-in-bigquery-data-transfer-service"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
keywords:
  - "ads"
  - "bigquery"
  - "transfer"
  - "supports"
---

# Google Ads API support in BigQuery Data Transfer Service

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery Data Transfer Service for Google Ads supports the new Google Ads API.

## Extended Definition

The BigQuery Data Transfer Service for Google Ads supports the new Google Ads API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)

## Supporting Pages

### Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Data transfer options Support Supported reports The BigQuery Data Transfer Service for Facebook Ads supports the transfer of the following Facebook Ads reports: AdAccounts AdInsights AdInsightsActions For information about how Facebook Ads reports are transformed into BigQuery tables and views, see Facebook Ads report transformation .
- Connector overview The BigQuery Data Transfer Service for the Facebook Ads connector supports the following options for your data transfer.
- The BigQuery Data Transfer Service supports a refresh window of up to 30 days to the AdInsights and AdInsightsActions tables.
- The BigQuery Data Transfer Service for Facebook Ads only supports a fixed set of tables.

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.
- Number of Customer IDs per manager account 8,000 The BigQuery Data Transfer Service supports a maximum of 8000 Customer IDs for each Google Ads manager account (MCC).
- Connector overview The BigQuery Data Transfer Service for the Google Ads connector supports the following options for your data transfer.
- Transfer configuration for Customer ID 1234567890 A transfer configuration for the root manager account (Customer ID 1234567890) would generate data transfer runs that include the following Customer IDs: 1111 (via sub-manager account 1234) 2222 (via sub-manager account 1234) 3333 (via sub-manager account 1234) 4444 (via sub-manager account 1234) 5555 (via sub-manager account 567 and sub-manager account 1234) 6666 (via sub-manager account 567 and sub-manager account 1234) 7777 (via sub-manager account 567 and sub-manager account 1234) 8888 (via sub-manager account 89) 9999 (via sub-manager account 89) 0000 (individual Customer ID) Transfer configuration for Customer ID 1234 A transfer configuration for sub-manager account 123 (Customer ID 1234) would generate data transfer runs that include the following Customer IDs: 1111 2222 3333 4444 5555 (via sub-manager account 567) 6666 (via sub-manager account 567) 7777 (via sub-manager account 567) Transfer configuration for Customer ID 567 A transfer configuration for sub-manager account 567 (Customer ID 567) would generate data transfer runs that include the following Customer IDs: 5555 6666 7777 Transfer configuration for Customer ID 89 A transfer configuration for sub-manager account 89 (Customer ID 89) would generate data transfer runs that include the following Customer IDs: 8888 9999 Transfer configuration for Customer ID 0000 A transfer configuration for Customer ID 0000 would generate data transfer runs that include only the individual Customer ID: 0000 Migrate Google Ads data to MCCs To migrate your existing Google Ads data in BigQuery Data Transfer Service to the MCC structure, you can set up a backfill to add your existing data to the tables created by the transfer configuration linked to the manager account.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Supported file formats The BigQuery Data Transfer Service supports loading data from Blob Storage in the following formats: Comma-separated values (CSV) JSON (newline delimited) Avro Parquet ORC Supported compression types The BigQuery Data Transfer Service for Blob Storage supports loading compressed data.
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- As an example, consider this data path: folder/ /subfolder/ .csv Both of the following files are transferred to Google Cloud, because they have the prefix folder/ : folder/any/subfolder/file1.csv folder/file2.csv However, only the folder/any/subfolder/file1.csv file is loaded into BigQuery, because it matches the full data path.
- Truncated transfers A transfer configuration with a MIRROR or WRITE TRUNCATE write preference, also called a truncated transfer, overwrites data in the BigQuery destination table during each transfer run with data from all files matching the source URI.

