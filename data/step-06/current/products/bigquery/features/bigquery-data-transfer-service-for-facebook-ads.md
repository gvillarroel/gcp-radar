---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.505Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service for Facebook Ads"
feature_slug: "bigquery-data-transfer-service-for-facebook-ads"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers"
keywords:
  - "bigquery"
  - "transfer"
  - "facebook"
  - "ads"
  - "can"
---

# BigQuery Data Transfer Service for Facebook Ads

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer data from Facebook Ads.

## Extended Definition

BigQuery Data Transfer Service can transfer data from Facebook Ads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation)
- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)

## Supporting Pages

### Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data transfer options Support Supported reports The BigQuery Data Transfer Service for Facebook Ads supports the transfer of the following Facebook Ads reports: AdAccounts AdInsights AdInsightsActions For information about how Facebook Ads reports are transformed into BigQuery tables and views, see Facebook Ads report transformation .
- Data ingestion from Facebook Ads transfers When you transfer data from Facebook Ads into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- Load Facebook Ads data into BigQuery You can load data from Facebook Ads to BigQuery using the BigQuery Data Transfer Service for Facebook Ads connector.
- With the BigQuery Data Transfer Service, you can schedule recurring transfer jobs that add your latest data from your Facebook Ads to BigQuery.

### Facebook Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Table mapping for Facebook Ads reports When your Facebook Ads reports are transferred to BigQuery, the reports are transformed into the following BigQuery tables and views.
- Facebook Ads report transformation This document describes how your Facebook Ads reports are transformed when you run a Facebook Ads transfer to BigQuery .
- This can be reset. balance Balance Integer Bill amount due. business city BusinessCity String City for business address. business country code BusinessCountryCode String Country code for the business address. business name BusinessName String The business name for the account. business state BusinessState String State abbreviation for business address. business street BusinessStreet String First line of the business street address for the account. business street2 BusinessStreet2 String Second line of the business street address for the account. business zip BusinessZip String Zip code for business address. capabilities Capabilities String Capabilities allowed for this ad account. created time CreatedTime Datetime The time the account was created. currency Currency String The currency used for the account, based on the corresponding value in the account settings. min campaign group spend cap MinCampaignGroupSpendCap String The minimum campaign group spend limit. name Name String Name of the account; note that many accounts are unnamed, so this field may be empty. offsite pixels tos accepted OffsitePixelsTosAccepted String Indicates whether the offsite pixel Terms Of Service contract was signed. owner OwnerId String Facebook ID of the owner for the Ad Account. spend cap SpendCap Integer The maximum that can be spent by this account after which campaigns will be paused.
- In the Facebook UI, this is the Clicks (All) field. conversion rate ranking ConversionRateRanking String The conversion rate ranking. cost per estimated ad recallers CostPerEstimatedAdRecallers Decimal The average cost per additional person that we estimate will recall seeing your ad if asked within 2 days. cost per inline link click CostPerInlineLinkClick Decimal The average cost per click on links in the ad. cost per inline post engagement CostPerInlinePostEngagement Decimal The average cost per engagement on the post. cost per unique click CostPerUniqueClick Decimal The average cost per unique click for these ads, calculated as the amount spent divided by the number of unique clicks received. cost per unique inline link click CostPerUniqueInlineLinkClick Decimal The average you paid for each unique inline link click. cpc CPC Decimal The average cost per click for these ads, calculated as the amount spent divided by the number of clicks received. cpm CPM Decimal The average cost that you've paid to have 1,000 impressions on your ad. cpp CPP Decimal The average cost that you've paid to have your ad served to 1,000 unique people. ctr CTR Double The number of clicks you received divided by the number of impressions.

### "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- Source ID: `site-api-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Required BigQuery roles To get the permissions that you need to create a BigQuery Data Transfer Service data transfer, ask your administrator to grant you the BigQuery Admin ( roles/bigquery.admin ) IAM role on your project.
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
- This document shows you how to schedule and manage recurring load jobs for CSS Center reporting data using the BigQuery Data Transfer Service .

