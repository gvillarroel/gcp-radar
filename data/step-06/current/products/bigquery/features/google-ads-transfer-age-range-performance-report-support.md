---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.860Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Ads transfer Age Range Performance Report support"
feature_slug: "google-ads-transfer-age-range-performance-report-support"
latest_feature_date: "2018-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "ads"
  - "transfer"
  - "age"
  - "range"
  - "performance"
  - "report"
  - "bigquery"
  - "supports"
---

# Google Ads transfer Age Range Performance Report support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service for Google Ads supports the Age Range Performance Report.

## Extended Definition

BigQuery Data Transfer Service for Google Ads supports the Age Range Performance Report.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.
- Note: The BigQuery Data Transfer Service pulls reports for all listed Customer IDs, but you may not see Customer IDs in your reports if they don't report activity for the requested day or the account is inactive when the transfer run happens.
- Number of Customer IDs per manager account 8,000 The BigQuery Data Transfer Service supports a maximum of 8000 Customer IDs for each Google Ads manager account (MCC).
- Data transfer options Support Supported reports The Google Ads connector supports the transfer of data from the reports in Google Ads API v22 .

### Google Ads report transformation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transformation](https://docs.cloud.google.com/bigquery/docs/google-ads-transformation)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- AdWords reports (deprecated) BigQuery AdWords tables Google Ads tables Google Ads API resources (v22.0.0) BigQuery views Account Performance Report p Customer customer id p HourlyAccountConversionStats customer id p AccountConversionStats customer id p HourlyAccountStats customer id p AccountNonClickStats customer id p AccountBasicStats customer id p AccountStats customer id p ads Customer customer id p ads HourlyAccountConversionStats customer id p ads AccountConversionStats customer id p ads HourlyAccountStats customer id p ads AccountNonClickStats customer id p ads AccountBasicStats customer id p ads AccountStats customer id Customer Customer customer id HourlyAccountConversionStats customer id AccountConversionStats customer id HourlyAccountStats customer id AccountNonClickStats customer id AccountBasicStats customer id AccountStats customer id Ad Performance Report p AdBasicStats customer id p AdCrossDeviceStats customer id p AdConversionStats customer id p AdStats customer id p AdCrossDeviceConversionStats customer id p Ad customer id p ads AdBasicStats customer id p ads AdCrossDeviceStats customer id p ads AdConversionStats customer id p ads AdStats customer id p ads AdCrossDeviceConversionStats customer id p ads Ad customer id Ad Group Ad AdBasicStats customer id AdCrossDeviceStats customer id AdConversionStats customer id AdStats customer id AdCrossDeviceConversionStats customer id Ad customer id Adgroup Performance Report p AdGroupStats customer id p AdGroupBasicStats customer id p AdGroupCrossDeviceStats customer id p HourlyAdGroupConversionStats customer id p HourlyAdGroupStats customer id p AdGroupConversionStats customer id p AdGroupCrossDeviceConversionStats customer id p AdGroup customer id p ads AdGroupStats customer id p ads AdGroupBasicStats customer id p ads AdGroupCrossDeviceStats customer id p ads HourlyAdGroupConversionStats customer id p ads HourlyAdGroupStats customer id p ads AdGroupConversionStats customer id p ads AdGroupCrossDeviceConversionStats customer id p ads AdGroup customer id Ad Group AdGroupStats customer id AdGroupBasicStats customer id AdGroupCrossDeviceStats customer id HourlyAdGroupConversionStats customer id HourlyAdGroupStats customer id AdGroupConversionStats customer id AdGroupCrossDeviceConversionStats customer id AdGroup customer id Age Range Performance Report p AgeRange customer id p AgeRangeBasicStats customer id p AgeRangeStats customer id p AgeRangeConversionStats customer id p AgeRangeNonClickStats customer id p ads AgeRange customer id p ads AgeRangeBasicStats customer id p ads AgeRangeStats customer id p ads AgeRangeConversionStats customer id p ads AgeRangeNonClickStats customer id Age Range View AgeRange customer id AgeRangeBasicStats customer id AgeRangeStats customer id AgeRangeConversionStats customer id AgeRangeNonClickStats customer id Audience Performance Report p Audience customer id p AudienceConversionStats customer id p AudienceNonClickStats customer id p AudienceBasicStats customer id p AudienceStats customer id NULL NULL NULL NULL NULL Ad Group Audience View Campaign Audience View Audience customer id AudienceConversionStats customer id AudienceNonClickStats customer id AudienceBasicStats customer id AudienceStats customer id Bid Goal Performance Report p BidGoal customer id p BidGoalStats customer id p HourlyBidGoalStats customer id p BidGoalConversionStats customer id p ads BidGoal customer id p ads BidGoalStats customer id p ads HourlyBidGoalStats customer id p ads BidGoalConversionStats customer id Bidding Strategy BidGoal customer id BidGoalStats customer id HourlyBidGoalStats customer id BidGoalConversionStats customer id Budget Performance Report p Budget customer id p BudgetStats customer id p ads Budget customer id p ads BudgetStats customer id Campaign Budget Budget customer id BudgetStats customer id Campaign Location Target Report p CampaignLocationTargetStats customer id p LocationBasedCampaignCriterion customer id p ads CampaignLocationTargetStats customer id p ads LocationBasedCampaignCriterion customer id Location View CampaignLocationTargetStats customer id LocationBasedCampaignCriterion customer id Campaign Performance Report p Campaign customer id p CampaignBasicStats customer id p CampaignConversionStats customer id p CampaignCrossDeviceStats customer id p HourlyCampaignConversionStats customer id p CampaignStats customer id p HourlyCampaignStats customer id p CampaignCrossDeviceConversionStats customer id p CampaignCookieStats customer id p ads Campaign customer id p ads CampaignBasicStats customer id p ads CampaignConversionStats customer id p ads CampaignCrossDeviceStats customer id p ads HourlyCampaignConversionStats customer id p ads CampaignStats customer id p ads HourlyCampaignStats customer id p ads CampaignCrossDeviceConversionStats customer id p ads CampaignCookieStats customer id Campaign Campaign customer id CampaignBasicStats customer id CampaignConversionStats customer id CampaignCrossDeviceStats customer id HourlyCampaignConversionStats customer id CampaignStats customer id HourlyCampaignStats customer id CampaignCrossDeviceConversionStats customer id CampaignCookieStats customer id Click Performance Report p ClickStats customer id p ads ClickStats customer id Click View ClickStats customer id Criteria Performance Report p Criteria customer id p CriteriaBasicStats customer id p CriteriaStats customer id p CriteriaConversionStats customer id p CriteriaNonClickStats customer id NULL NULL NULL NULL NULL Criteria customer id CriteriaBasicStats customer id CriteriaStats customer id CriteriaConversionStats customer id CriteriaNonClickStats customer id Gender Performance Report p Gender customer id p GenderBasicStats customer id p GenderStats customer id p GenderConversionStats customer id p GenderNonClickStats customer id p ads Gender customer id p ads GenderBasicStats customer id p ads GenderStats customer id p ads GenderConversionStats customer id p ads GenderNonClickStats customer id Gender View Gender customer id GenderBasicStats customer id GenderStats customer id GenderConversionStats customer id GenderNonClickStats customer id Geo Performance Report p GeoConversionStats customer id p GeoStats customer id p ads GeoConversionStats customer id p ads GeoStats customer id Geographic View GeoConversionStats customer id GeoStats customer id Keywords Performance Report p Keyword customer id p KeywordBasicStats customer id p KeywordCrossDeviceStats customer id p KeywordStats customer id p KeywordCrossDeviceConversionStats customer id p KeywordConversionStats customer id p ads Keyword customer id p ads KeywordBasicStats customer id p ads KeywordCrossDeviceStats customer id p ads KeywordStats customer id p ads KeywordCrossDeviceConversionStats customer id p ads KeywordConversionStats customer id Keyword View Keyword customer id KeywordBasicStats customer id KeywordCrossDeviceStats customer id KeywordStats customer id KeywordCrossDeviceConversionStats customer id KeywordConversionStats customer id Paid Organic Query Report p PaidOrganicStats customer id p ads PaidOrganicStats customer id Paid Organic Search Term View PaidOrganicStats customer id Parental Status Performance Report p ParentalStatus customer id p ParentalStatusBasicStats customer id p ParentalStatusStats customer id p ParentalStatusConversionStats customer id p ParentalStatusNonClickStats customer id p ads ParentalStatus customer id p ads ParentalStatusBasicStats customer id p ads ParentalStatusStats customer id p ads ParentalStatusConversionStats customer id p ads ParentalStatusNonClickStats customer id Parental Status View ParentalStatus customer id ParentalStatusBasicStats customer id ParentalStatusStats customer id ParentalStatusConversionStats customer id ParentalStatusNonClickStats customer id Placement Performance Report p PlacementBasicStats customer id p PlacementNonClickStats customer id p PlacementStats customer id p Placement customer id p PlacementConversionStats customer id p ads PlacementBasicStats customer id p ads PlacementNonClickStats customer id p ads PlacementStats customer id p ads Placement customer id p ads PlacementConversionStats customer id Managed Placement View PlacementBasicStats customer id PlacementNonClickStats customer id PlacementStats customer id Placement customer id PlacementConversionStats customer id Search Query Performance Report p SearchQueryStats customer id p SearchQueryConversionStats customer id p ads SearchQueryStats customer id p ads SearchQueryConversionStats customer id Search Term View SearchQueryStats customer id SearchQueryConversionStats customer id Shopping Performance Report p ShoppingProductConversionStats customer id p ShoppingProductStats customer id p ads ShoppingProductConversionStats customer id p ads ShoppingProductStats customer id Shopping Performance View ShoppingProductConversionStats customer id ShoppingProductStats customer id Video Performance Report p VideoBasicStats customer id p VideoConversionStats customer id p VideoStats customer id p Video customer id p VideoNonClickStats customer id p ads VideoBasicStats customer id p ads VideoConversionStats customer id p ads VideoStats customer id p ads Video customer id p ads VideoNonClickStats customer id Video VideoBasicStats customer id VideoConversionStats customer id VideoStats customer id Video customer id VideoNonClickStats customer id AdGroupBidModifier Ad Group Bid Modifier AdGroupAdLabel Ad Group Ad Label CampaignLabel Campaign Label CampaignCriterion Campaign Criterion AdGroupLabel Ad Group Label AdGroupAudience AdGroupAudienceStats AdGroupAudienceConversionStats AdGroupAudienceNonClickStats AdGroupAudienceBasicStats Ad Group Audience View Assets (available if Pmax data is enabled) Assets AssetGroup (available if Pmax data is enabled) Asset Groups AssetGroupAsset (available if Pmax data is enabled) Asset Group Assets AssetGroupSignal (available if Pmax data is enabled) Asset Group Signal AssetGroupProductGroupStats (available if Pmax data is enabled) AssetGroupProductGroupStats CampaignAssetStats (available if Pmax data is enabled) CampaignAssetStats Column mapping for Google Ads reports The BigQuery tables created by a Google Ads transfer consist of the following columns (fields): Google Ads Table Name: AccountBasicStats Google Ads API Resource: customer Google Ads Field Name Description Adwords Mapped Field Name customer id The ID of the customer.
- Table mapping for Google Ads reports When your Google Ads reports are transferred to BigQuery, the reports are transformed into the following BigQuery tables and views.
- Below is a list of Match Tables in Google Ads transfer: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: Search budget lost absolute top impression share is reported in the range of 0 to 0.9.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Luria BigQuery Integration Luria receives Cloud Ready designation Partner Advantage page Direct link Qlik Solution Qlik Sense Category BI, ML, & Advanced Analytics Description Qlik Sense is a business intelligence (BI) and visual analytics platform that supports a range of analytic use cases.
- Built on Qlik's unique Associative Engine, it supports a full range of users and use cases across the lifecycle, from data to insight–with self-service analytics, interactive dashboards, conversational analytics, custom and embedded analytics, mobile analytics, and reporting.
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.

