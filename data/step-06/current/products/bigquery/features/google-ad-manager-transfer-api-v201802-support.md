---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.855Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Ad Manager transfer API v201802 support"
feature_slug: "google-ad-manager-transfer-api-v201802-support"
latest_feature_date: "2018-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
keywords:
  - "ad"
  - "manager"
  - "transfer"
  - "v201802"
  - "bigquery"
  - "supports"
  - "version"
---

# Google Ad Manager transfer API v201802 support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service for Google Ad Manager supports API version v201802.

## Extended Definition

BigQuery Data Transfer Service for Google Ad Manager supports API version v201802.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)

## Supporting Pages

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Data transfer options Support Supported reports The Google Ad Manager connector supports the transfer of data from the following reports: Data Transfer (Google Ad Manager DT) files Data Transfer fields Match tables provided by the BigQuery Data Transfer Service .
- Note: The BigQuery Data Transfer Service supports the following delimiters for Google Ad Manager DT files: Tab ( \t ), Pipe ( ), Caret ( ^ ), and Comma ( , ).
- Connector overview The BigQuery Data Transfer Service for the Google Ad Manager connector supports the following options for your data transfer.
- Set up a Google Ad Manager transfer Setting up a BigQuery data transfer for Google Ad Manager requires a: Cloud Storage bucket : The Cloud Storage bucket URI for your Google Ad Manager DT files as described in Before you begin .

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Number of Customer IDs per manager account 8,000 The BigQuery Data Transfer Service supports a maximum of 8000 Customer IDs for each Google Ads manager account (MCC).
- Transfer configuration for Customer ID 1234567890 A transfer configuration for the root manager account (Customer ID 1234567890) would generate data transfer runs that include the following Customer IDs: 1111 (via sub-manager account 1234) 2222 (via sub-manager account 1234) 3333 (via sub-manager account 1234) 4444 (via sub-manager account 1234) 5555 (via sub-manager account 567 and sub-manager account 1234) 6666 (via sub-manager account 567 and sub-manager account 1234) 7777 (via sub-manager account 567 and sub-manager account 1234) 8888 (via sub-manager account 89) 9999 (via sub-manager account 89) 0000 (individual Customer ID) Transfer configuration for Customer ID 1234 A transfer configuration for sub-manager account 123 (Customer ID 1234) would generate data transfer runs that include the following Customer IDs: 1111 2222 3333 4444 5555 (via sub-manager account 567) 6666 (via sub-manager account 567) 7777 (via sub-manager account 567) Transfer configuration for Customer ID 567 A transfer configuration for sub-manager account 567 (Customer ID 567) would generate data transfer runs that include the following Customer IDs: 5555 6666 7777 Transfer configuration for Customer ID 89 A transfer configuration for sub-manager account 89 (Customer ID 89) would generate data transfer runs that include the following Customer IDs: 8888 9999 Transfer configuration for Customer ID 0000 A transfer configuration for Customer ID 0000 would generate data transfer runs that include only the individual Customer ID: 0000 Migrate Google Ads data to MCCs To migrate your existing Google Ads data in BigQuery Data Transfer Service to the MCC structure, you can set up a backfill to add your existing data to the tables created by the transfer configuration linked to the manager account.
- The following tables exclude ad group related columns when the Include PMax Campaign Tables checkbox is selected: GeoStats GeoConversionStats ShoppingProductConversionStats ShoppingProductStats LocationsUserLocationsStats The following tables are added when the Include PMax Campaign Tables checkbox is selected: Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience AssetGroupProductGroupStats CampaignAssetStats Support for Google Ads manager accounts Existing customers who have multiple Customer ID-specific Google Ads Transfers are encouraged to set up a single Google Ads Transfer at the Manager Account (MCC) level, schedule a backfill, and disable individual Customer ID-specific Google Ads Transfers.
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Data transfer options Support Supported reports The Campaign Manager connector supports the transfer of data from the following reports: Data Transfer v2 (Campaign Manager DTv2) files Data Transfer v2 (Campaign Manager DTv2) match tables For information on how Campaign Manager reports are transformed into BigQuery tables and views, see Campaign Manager report transformations .
- Connector overview The BigQuery Data Transfer Service for the Campaign Manager connector supports the following options for your data transfer.
- Data ingestion from Campaign Manager transfers When you transfer data from Campaign Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Before you begin Before you create a Campaign Manager data transfer: Verify that you have completed all actions required to enable the BigQuery Data Transfer Service .

