---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.474Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Differential privacy"
feature_slug: "differential-privacy"
latest_feature_date: "2024-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transformation"
keywords:
  - "differential"
  - "privacy"
  - "bigquery"
  - "supports"
  - "preserving"
  - "analysis"
---

# Differential privacy

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports differential privacy for privacy-preserving analysis.

## Extended Definition

BigQuery supports differential privacy for privacy-preserving analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)

## Supporting Pages

### "Campaign Manager report transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Campaign Manager file BigQuery table BigQuery view Data Transfer files impression p impression campaign manager id impression campaign manager id click p click campaign manager id click campaign manager id activity p activity campaign manager id activity campaign manager id rich media p rich media campaign manager id rich media campaign manager id Match Tables activity cats p match table activity cats campaign manager id match table activity cats campaign manager id activity types p match table activity types campaign manager id match table activity types campaign manager id ads p match table ads campaign manager id match table ads campaign manager id ad placement assignments p match table ad placement assignments campaign manager id match table ad placement assignments campaign manager id advertisers p match table advertisers campaign manager id match table advertisers campaign manager id assets p match table assets campaign manager id match table assets campaign manager id browsers p match table browsers campaign manager id match table browsers campaign manager id campaigns p match table campaigns campaign manager id match table campaigns campaign manager id cities p match table cities campaign manager id match table cities campaign manager id creatives p match table creatives campaign manager id match table creatives campaign manager id creative ad assignments p match table creative ad assignments campaign manager id match table creative ad assignments campaign manager id custom creative fields p match table custom creative fields campaign manager id match table custom creative fields campaign manager id paid search p match table paid search campaign manager id match table paid search campaign manager id designated market areas p match table designated market areas campaign manager id match table designated market areas campaign manager id keyword value p match table keyword value campaign manager id match table keyword value campaign manager id null user ID reason categories Unsupported Unsupported rich media standard event and event type IDs Unsupported Unsupported custom rich media p match table custom rich media campaign manager id match table custom rich media campaign manager id operating systems p match table operating systems campaign manager id match table operating systems campaign manager id placements p match table placements campaign manager id match table placements campaign manager id placement cost p match table placement cost campaign manager id match table placement cost campaign manager id sites p match table sites campaign manager id match table sites campaign manager id states p match table states campaign manager id match table states campaign manager id custom floodlight variables p match table custom floodlight variables campaign manager id match table custom floodlight variables campaign manager id landing page url p match table landing page url campaign manager id match table landing page url campaign manager id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Campaign Manager report transformation When your Campaign Manager (formerly known as DoubleClick Campaign Manager) data transfer files are transferred to BigQuery, the files are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for campaign manager id is your Campaign Manager Network, Advertiser, or Floodlight ID.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- If your organization needs more flexibility, the following options are available: Cloud Composer jobs : you can schedule Cloud Composer jobs to issue ETL jobs that create regional subsets before triggering the BigQuery Data Transfer Service through its client API .
- A dedicated tenant infrastructure design addresses the following common concerns when deploying infrastructure for each tenant alongside BigQuery: Billing accountability : tracking infrastructure costs associated with each onboarded tenant.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to share data externally and to prevent accidental exposure of BigQuery datasets outside of your internal projects.

### "Display & Video 360 data transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Display & Video 360 resource BigQuery table BigQuery view Data Transfer files Impression p Impression displayvideo id Impression displayvideo id Click p Click displayvideo id Click displayvideo id Activity p Activity displayvideo id Activity displayvideo id DV360 API Resource (v3) Partner p Partner displayvideo id Partner displayvideo id Advertiser p Advertiser displayvideo id Advertiser displayvideo id LineItem p LineItem displayvideo id LineItem displayvideo id LineItemTargeting p LineItemTargeting displayvideo id LineItemTargeting displayvideo id Campaign p Campaign displayvideo id Campaign displayvideo id CampaignTargeting p CampaignTargeting displayvideo id CampaignTargeting displayvideo id InsertionOrder p InsertionOrder displayvideo id InsertionOrder displayvideo id InsertionOrderTargeting p InsertionOrderTargeting displayvideo id InsertionOrderTargeting displayvideo id AdGroup p AdGroup displayvideo id AdGroup displayvideo id AdGroupTargeting p AdGroupTargeting displayvideo id AdGroupTargeting displayvideo id AdGroupAd p AdGroupAd displayvideo id AdGroupAd displayvideo id Creative p Creative displayvideo id Creative displayvideo id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Display & Video 360 data transformation When your Display & Video 360 data are transferred to BigQuery, they are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for displayvideo id is your Display & Video 360 partner or advertiser ID.

