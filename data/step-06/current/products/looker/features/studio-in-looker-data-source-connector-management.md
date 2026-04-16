---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.490Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker data source connector management"
feature_slug: "studio-in-looker-data-source-connector-management"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer"
keywords:
  - "studio"
  - "looker"
  - "source"
  - "connector"
  - "management"
  - "admins"
  - "can"
  - "manage"
---

# Studio in Looker data source connector management

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker admins can manage the data source connectors available in Studio in Looker.

## Extended Definition

Looker admins can manage the data source connectors available in Studio in Looker.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)

## Supporting Pages

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable the BigQuery Storage Read API, grant the following permissions to your BigQuery user who is connected to Data Studio: bigquery.readsessions.create bigquery.readsessions.getData Quotas and general limits The maximum number of rows that can be returned using the BigQuery Connector is 2 million rows.
- When you connect to a table that is partitioned on a DATE , DATETIME , or TIMESTAMP field, Data Studio can use that field as the date range dimension for charts that are based on this data source.
- BigQuery dialog If you have owner credentials on the BigQuery data source, Data Studio will display a BigQuery icon in the upper right corner of any chart that uses BigQuery.
- Analyze Data Studio queries with job labels All queries that are sent by Data Studio to BigQuery have the BigQuery job label requestor:looker studio .

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- Users must have download with limit and/or download without limit permissions to download the content. create public looks save looks Model Specific Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication. download with limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Users can email content deliveries or alert notifications to email addresses with any domain, regardless of whether the Email domain allowlist on the Settings page of the Admin panel contains any email domains. create alerts see looks Instance Wide NN This permission applies to dashboards in Looker and to charts in Looker Studio that use the Looker connector.
- Looker Studio Pro users with this permission can schedule deliveries of Looker Studio reports that use the Looker connector. schedule external look emails schedule look emails Model Specific Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to email.

### Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following command creates a Facebook Ads data transfer in the default project with all the required parameters: bq mk --transfer config --target dataset = mydataset --data source = facebook ads --display name = 'My Transfer' --params = '{"connector.authentication.oauth.clientId": "1650000000", "connector.authentication.oauth.clientSecret":"TBA99550", "connector.authentication.oauth.refreshToken":"abcdef", "connector.authorizedAdAccountsOnly":true, "connector.actionCollections":["Actions", "Conversions"], "connector.genericBreakdowns":["PublisherPlatform", "PlatformPosition"], "connector.actionBreakdowns":["ActionDevice", "ActionType"]}' API Use the projects.locations.transferConfigs.create method and supply an instance of the TransferConfig resource.
- PERMISSION DENIED The credentials are invalid UNAUTHENTICATED Authentication is required SERVICE UNAVAILABLE The service is temporarily unable to handle this data transfer DEADLINE EXCEEDED The data transfer did not finish within the maximum duration of six hours NOT FOUND A requested resource is not found INTERNAL Something else caused the connector to fail FAILED PRECONDITION This error can appear with the message There was an issue connecting to Facebook Ads API.
- If you intend to set up transfer run notifications for Pub/Sub, ensure that you have the pubsub.topics.setIamPolicy Identity and Access Management (IAM) permission.
- Check that the long-lived user access token is generated with the required permissions - ads management , ads read , and business management .

