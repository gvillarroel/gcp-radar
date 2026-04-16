---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.378Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service Google Ads custom reports"
feature_slug: "bigquery-data-transfer-service-google-ads-custom-reports"
latest_feature_date: "2025-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
keywords:
  - "bigquery"
  - "transfer"
  - "ads"
  - "custom"
  - "reports"
  - "supports"
  - "gaql"
  - "queries"
---

# BigQuery Data Transfer Service Google Ads custom reports

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports custom Google Ads reports using GAQL queries in transfer configurations.

## Extended Definition

BigQuery Data Transfer Service supports custom Google Ads reports using GAQL queries in transfer configurations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)

## Supporting Pages

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.
- The length of this list must match the length of the list in custom report queries . custom report queries : a list of Google Ads Query Language (GAQL) queries for the custom reports included in this transfer.
- Note: The BigQuery Data Transfer Service pulls reports for all listed Customer IDs, but you may not see Customer IDs in your reports if they don't report activity for the requested day or the account is inactive when the transfer run happens.
- Number of Customer IDs per manager account 8,000 The BigQuery Data Transfer Service supports a maximum of 8000 Customer IDs for each Google Ads manager account (MCC).

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Data transfer options Support Supported reports The Campaign Manager connector supports the transfer of data from the following reports: Data Transfer v2 (Campaign Manager DTv2) files Data Transfer v2 (Campaign Manager DTv2) match tables For information on how Campaign Manager reports are transformed into BigQuery tables and views, see Campaign Manager report transformations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Connector overview The BigQuery Data Transfer Service for the Campaign Manager connector supports the following options for your data transfer.
- In this example, when a daily transfer occurs, the BigQuery Data Transfer Service creates a new BigQuery destination table partition with a copy of your source table data from the current day, then automatically triggers backfill runs to update the BigQuery destination table partitions with your source table data from the past two days.

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Data transfer options Support Supported reports The Google Ad Manager connector supports the transfer of data from the following reports: Data Transfer (Google Ad Manager DT) files Data Transfer fields Match tables provided by the BigQuery Data Transfer Service .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Note: The BigQuery Data Transfer Service supports the following delimiters for Google Ad Manager DT files: Tab ( \t ), Pipe ( ), Caret ( ^ ), and Comma ( , ).
- Connector overview The BigQuery Data Transfer Service for the Google Ad Manager connector supports the following options for your data transfer.

