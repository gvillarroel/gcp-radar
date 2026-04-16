---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.232Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "HubSpot connector for BigQuery Data Transfer Service"
feature_slug: "hubspot-connector-for-bigquery-data-transfer-service"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hubspot-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
keywords:
  - "hubspot"
  - "connector"
  - "bigquery"
  - "transfer"
  - "can"
---

# HubSpot connector for BigQuery Data Transfer Service

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer data from HubSpot to BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer data from HubSpot to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hubspot-transfer](https://docs.cloud.google.com/bigquery/docs/hubspot-transfer)
- [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)

## Supporting Pages

### Load HubSpot data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/hubspot-transfer](https://docs.cloud.google.com/bigquery/docs/hubspot-transfer)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can load data from HubSpot to BigQuery using the BigQuery Data Transfer Service for HubSpot connector.
- With every transfer run, the HubSpot connector transfers all available data from HubSpot into BigQuery.
- To allow the HubSpot connector to transfer data from your HubSpot account, you must enable the following scopes for your private app: Required scopes automation business-intelligence collector graphql query execute collector graphql query read content conversations.read conversations.visitor identification.tokens.create crm.import crm.lists.read crm.objects.companies.read crm.objects.contacts.read crm.objects.deals.read crm.objects.owners.read crm.schemas.companies.read crm.schemas.contacts.read crm.schemas.deals.read e-commerce files forms forms-uploaded-files hubdb integration-sync oauth sales-email-read settings.users.read settings.users.teams.read social tickets timeline transactional-email For information about configuring scopes for your private app, see Legacy private apps .
- The following command creates a HubSpot data transfer in the default project. bq mk \ --transfer config \ --target dataset = mydataset \ --data source = hubspot \ --display name = 'My Transfer' \ --params = ' { "assets": ["Contacts", "Deals"], "connector.authentication.oauth.accessToken": "pat 123456789123"}' When you save the transfer configuration, the HubSpot connector automatically triggers a transfer run according to your schedule option.

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Data transfer options Support Supported reports The Campaign Manager connector supports the transfer of data from the following reports: Data Transfer v2 (Campaign Manager DTv2) files Data Transfer v2 (Campaign Manager DTv2) match tables For information on how Campaign Manager reports are transformed into BigQuery tables and views, see Campaign Manager report transformations .
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- Load Campaign Manager data into BigQuery You can load data from Campaign Manager to BigQuery using the BigQuery Data Transfer Service for Campaign Manager connector.
- Connector overview The BigQuery Data Transfer Service for the Campaign Manager connector supports the following options for your data transfer.

### Load Display & Video 360 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- Load Display & Video 360 data into BigQuery You can load data from Display & Video 360 to BigQuery using the BigQuery Data Transfer Service for Display & Video 360 connector.
- Connector overview The BigQuery Data Transfer Service for the Display & Video 360 connector supports the following options for your data transfer.
- Partner Advertiser LineItem LineItemTargeting Campaign CampaignTargeting InsertionOrder InsertionOrderTargeting AdGroup AdGroupTargeting AdGroupAd Creative For more information about each type of configuration data, see the following links: About Partners Create an advertiser Create a line item Create a campaign Create an insertion order About YouTube & partners line items Manage creatives Data ingestion from Display & Video 360 transfers When you transfer data from Display & Video 360 into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.

