---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.263Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service Facebook Ads connector"
feature_slug: "bigquery-data-transfer-service-facebook-ads-connector"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/hubspot-transfer"
keywords:
  - "bigquery"
  - "transfer"
  - "facebook"
  - "ads"
  - "connector"
  - "can"
  - "into"
---

# BigQuery Data Transfer Service Facebook Ads connector

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer data from Facebook Ads into BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer data from Facebook Ads into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/hubspot-transfer](https://docs.cloud.google.com/bigquery/docs/hubspot-transfer)

## Supporting Pages

### Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load Facebook Ads data into BigQuery You can load data from Facebook Ads to BigQuery using the BigQuery Data Transfer Service for Facebook Ads connector.
- With every transfer run, the Facebook Ads connector transfers all available data from Facebook Ads into BigQuery.
- Data transfer options Support Supported reports The BigQuery Data Transfer Service for Facebook Ads supports the transfer of the following Facebook Ads reports: AdAccounts AdInsights AdInsightsActions For information about how Facebook Ads reports are transformed into BigQuery tables and views, see Facebook Ads report transformation .
- Data ingestion from Facebook Ads transfers When you transfer data from Facebook Ads into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.

### Load HubSpot data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/hubspot-transfer](https://docs.cloud.google.com/bigquery/docs/hubspot-transfer)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With every transfer run, the HubSpot connector transfers all available data from HubSpot into BigQuery.
- Data type mapping The following table maps HubSpot data types to the corresponding BigQuery data types: HubSpot data type BigQuery data type String STRING Text STRING Integer INTEGER Boolean BOOLEAN Date TIMESTAMP Datetime TIMESTAMP Long BIGNUMERIC Pricing There is no cost to transfer HubSpot data into BigQuery while this feature is in Preview .
- Set up a HubSpot data transfer Add HubSpot data into BigQuery by setting up a transfer configuration using one of the following options: Console Go to the Data transfers page in the Google Cloud console.
- You can load data from HubSpot to BigQuery using the BigQuery Data Transfer Service for HubSpot connector.

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Load Google Ads data into BigQuery You can load data from Google Ads (formerly known as Google AdWords) to BigQuery using the BigQuery Data Transfer Service for Google Ads connector.
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- Data ingestion from Google Ads transfers When you transfer data from Google Ads into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.

