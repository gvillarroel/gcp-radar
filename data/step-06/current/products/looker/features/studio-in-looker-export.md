---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.486Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker export"
feature_slug: "studio-in-looker-export"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "studio"
  - "looker"
  - "export"
  - "connector"
  - "supports"
  - "download"
  - "scheduling"
  - "permissions"
---

# Studio in Looker export

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker connector supports export, download, and scheduling permissions.

## Extended Definition

The Looker connector supports export, download, and scheduling permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Users must have download with limit and/or download without limit permissions to download the content. create public looks save looks Model Specific Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication. download with limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Looker Studio Pro users with this permission can download Looker Studio reports that use the Looker connector. download without limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Looker Studio Pro users with this permission can download Looker Studio reports that use the Looker connector. schedule look emails see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Default permission sets For new installations, Looker includes several default permission sets that you can start with: Permission Set Included Permissions Admin All permissions Developer access data , can create forecast , clear cache refresh , create custom fields , create table calculations , deploy , develop , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see pdts , see sql , see user dashboards , send to integration , schedule without limit , use sql runner NOTE : The see pdts permission is included in the Developer default permission only for Looker installations that were created with Looker 21.18 or later.

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.
- Data transfer options Support Supported reports The Google Ads connector supports the transfer of data from the reports in Google Ads API v22 .
- Connector overview The BigQuery Data Transfer Service for the Google Ads connector supports the following options for your data transfer.
- Performance Max (PMax) campaigns The Google Ads connector lets you export PMax campaigns data.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Each of the following predefined IAM roles includes the bigquery.tables.export permission: roles/bigquery.dataViewer roles/bigquery.dataOwner roles/bigquery.dataEditor roles/bigquery.admin Permissions to run an extract job To run an extract job , you need the bigquery.jobs.create IAM permission.
- Permissions to export data from a BigQuery table To export data from a BigQuery table, you need the bigquery.tables.export IAM permission.
- Export formats and compression types BigQuery supports the following data formats and compression types for exported data.
- When set to true , header rows are printed to the exported data if the data format supports headers.

