---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.373Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service Google Analytics 4 connector"
feature_slug: "bigquery-data-transfer-service-google-analytics-4-connector"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transfer"
keywords:
  - "bigquery"
  - "transfer"
  - "analytics"
  - "connector"
  - "can"
  - "reporting"
  - "configuration"
  - "into"
---

# BigQuery Data Transfer Service Google Analytics 4 connector

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer reporting and configuration data from Google Analytics 4 into BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer reporting and configuration data from Google Analytics 4 into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)

## Supporting Pages

### Load Google Analytics 4 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer)
- Source ID: `site-api-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom reports The BigQuery Data Transfer Service for Google Analytics connector supports the use of custom reports by specifying dimensions and metrics in the Google Analytics transfer configuration.
- Load Google Analytics 4 data into BigQuery You can load data from Google Analytics 4 to BigQuery using the BigQuery Data Transfer Service for Google Analytics 4 connector.
- Data ingestion from Google Analytics 4 transfers When you transfer data from Google Analytics 4 into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Data transfer options Support Supported reports The Google Analytics connector supports the transfer of reporting data from Google Analytics Data API v1 .

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.
- Load Google Ads data into BigQuery You can load data from Google Ads (formerly known as Google AdWords) to BigQuery using the BigQuery Data Transfer Service for Google Ads connector.
- Transfer configuration for Customer ID 1234567890 A transfer configuration for the root manager account (Customer ID 1234567890) would generate data transfer runs that include the following Customer IDs: 1111 (via sub-manager account 1234) 2222 (via sub-manager account 1234) 3333 (via sub-manager account 1234) 4444 (via sub-manager account 1234) 5555 (via sub-manager account 567 and sub-manager account 1234) 6666 (via sub-manager account 567 and sub-manager account 1234) 7777 (via sub-manager account 567 and sub-manager account 1234) 8888 (via sub-manager account 89) 9999 (via sub-manager account 89) 0000 (individual Customer ID) Transfer configuration for Customer ID 1234 A transfer configuration for sub-manager account 123 (Customer ID 1234) would generate data transfer runs that include the following Customer IDs: 1111 2222 3333 4444 5555 (via sub-manager account 567) 6666 (via sub-manager account 567) 7777 (via sub-manager account 567) Transfer configuration for Customer ID 567 A transfer configuration for sub-manager account 567 (Customer ID 567) would generate data transfer runs that include the following Customer IDs: 5555 6666 7777 Transfer configuration for Customer ID 89 A transfer configuration for sub-manager account 89 (Customer ID 89) would generate data transfer runs that include the following Customer IDs: 8888 9999 Transfer configuration for Customer ID 0000 A transfer configuration for Customer ID 0000 would generate data transfer runs that include only the individual Customer ID: 0000 Migrate Google Ads data to MCCs To migrate your existing Google Ads data in BigQuery Data Transfer Service to the MCC structure, you can set up a backfill to add your existing data to the tables created by the transfer configuration linked to the manager account.
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.

### Load Display & Video 360 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner Advertiser LineItem LineItemTargeting Campaign CampaignTargeting InsertionOrder InsertionOrderTargeting AdGroup AdGroupTargeting AdGroupAd Creative For more information about each type of configuration data, see the following links: About Partners Create an advertiser Create a line item Create a campaign Create an insertion order About YouTube & partners line items Manage creatives Data ingestion from Display & Video 360 transfers When you transfer data from Display & Video 360 into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Load Display & Video 360 data into BigQuery You can load data from Display & Video 360 to BigQuery using the BigQuery Data Transfer Service for Display & Video 360 connector.
- Supported configuration data In addition to the reporting data, BigQuery Data Transfer Service also transfers the following configuration data from Display & Video 360.
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.

