---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.264Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service Salesforce Marketing Cloud connector"
feature_slug: "bigquery-data-transfer-service-salesforce-marketing-cloud-connector"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hubspot-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
keywords:
  - "bigquery"
  - "transfer"
  - "salesforce"
  - "marketing"
  - "connector"
  - "can"
  - "into"
---

# BigQuery Data Transfer Service Salesforce Marketing Cloud connector

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can transfer data from Salesforce Marketing Cloud into BigQuery.

## Extended Definition

BigQuery Data Transfer Service can transfer data from Salesforce Marketing Cloud into BigQuery.

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
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With every transfer run, the HubSpot connector transfers all available data from HubSpot into BigQuery.
- The following list includes a list of required scopes needed to transfer its corresponding data object: crm.objects.appointments.read crm.objects.courses.read crm.objects.custom.read crm.objects.goals.read crm.objects.leads.read crm.objects.line items.read crm.objects.listings.read crm.objects.orders.read crm.objects.owners.read crm.objects.products.read crm.objects.services.read crm.objects.users.read crm.pipelines.orders.read crm.schemas.appointments.read crm.schemas.courses.read crm.schemas.custom.read crm.schemas.deals.read crm.schemas.line items.read crm.schemas.listings.read crm.schemas.orders.read crm.schemas.quotes.read crm.schemas.services.read marketing.campaigns.read marketing.campaigns.revenue.read settings.users.read settings.users.teams.read crm.dealsplits.read write crm.export crm.extensions calling transcripts.read crm.schemas.carts.read crm.objects.carts.read crm.objects.subscriptions.read crm.objects.commercepayments.read crm.objects.projects.read crm.objects.quotes.read crm.objects.partner-clients.read crm.objects.partner-services.read crm.objects.marketing events.read crm.objects.invoices.read crm.objects.feedback submissions.read crm.objects.forecasts.read crm.schemas.commercepayments.read crm.schemas.forecasts.read crm.schemas.invoices.read crm.schemas.projects.read crm.schemas.subscriptions.read BigQuery prerequisites Verify that you have completed all actions required to enable the BigQuery Data Transfer Service .
- Data type mapping The following table maps HubSpot data types to the corresponding BigQuery data types: HubSpot data type BigQuery data type String STRING Text STRING Integer INTEGER Boolean BOOLEAN Date TIMESTAMP Datetime TIMESTAMP Long BIGNUMERIC Pricing There is no cost to transfer HubSpot data into BigQuery while this feature is in Preview .
- Set up a HubSpot data transfer Add HubSpot data into BigQuery by setting up a transfer configuration using one of the following options: Console Go to the Data transfers page in the Google Cloud console.

### Load Display & Video 360 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transfer](https://docs.cloud.google.com/bigquery/docs/display-video-transfer)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load Display & Video 360 data into BigQuery You can load data from Display & Video 360 to BigQuery using the BigQuery Data Transfer Service for Display & Video 360 connector.
- Partner Advertiser LineItem LineItemTargeting Campaign CampaignTargeting InsertionOrder InsertionOrderTargeting AdGroup AdGroupTargeting AdGroupAd Creative For more information about each type of configuration data, see the following links: About Partners Create an advertiser Create a line item Create a campaign Create an insertion order About YouTube & partners line items Manage creatives Data ingestion from Display & Video 360 transfers When you transfer data from Display & Video 360 into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- Connector overview The BigQuery Data Transfer Service for the Display & Video 360 connector supports the following options for your data transfer.

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Data transfer options Support Supported reports The Campaign Manager connector supports the transfer of data from the following reports: Data Transfer v2 (Campaign Manager DTv2) files Data Transfer v2 (Campaign Manager DTv2) match tables For information on how Campaign Manager reports are transformed into BigQuery tables and views, see Campaign Manager report transformations .
- Load Campaign Manager data into BigQuery You can load data from Campaign Manager to BigQuery using the BigQuery Data Transfer Service for Campaign Manager connector.
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- Data ingestion from Campaign Manager transfers When you transfer data from Campaign Manager into BigQuery, the data is loaded into BigQuery tables that are partitioned by date.

