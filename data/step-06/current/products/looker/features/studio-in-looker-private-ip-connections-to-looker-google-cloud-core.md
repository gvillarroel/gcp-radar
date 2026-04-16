---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.487Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker private IP connections to Looker (Google Cloud core)"
feature_slug: "studio-in-looker-private-ip-connections-to-looker-google-cloud-core"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
keywords:
  - "studio"
  - "looker"
  - "private"
  - "ip"
  - "connections"
  - "core"
  - "connector"
  - "can"
---

# Studio in Looker private IP connections to Looker (Google Cloud core)

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker connector can connect to private IP Looker (Google Cloud core) instances using the Looker instance ID.

## Extended Definition

The Looker connector can connect to private IP Looker (Google Cloud core) instances using the Looker instance ID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)

## Supporting Pages

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Power BI connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Microsoft Excel can reach your Looker instance.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- These roles won't appear on a Looker (Google Cloud core) instance if the instance uses private connections (private services access or Private Service Connect) networking or hybrid connections networking .
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Users must have download with limit and/or download without limit permissions to download the content. create public looks save looks Model Specific Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication. download with limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Users can email content deliveries or alert notifications to email addresses with any domain, regardless of whether the Email domain allowlist on the Settings page of the Admin panel contains any email domains. create alerts see looks Instance Wide NN This permission applies to dashboards in Looker and to charts in Looker Studio that use the Looker connector.

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- To enable the BigQuery Storage Read API, grant the following permissions to your BigQuery user who is connected to Data Studio: bigquery.readsessions.create bigquery.readsessions.getData Quotas and general limits The maximum number of rows that can be returned using the BigQuery Connector is 2 million rows.
- Analyze Data Studio queries with job labels All queries that are sent by Data Studio to BigQuery have the BigQuery job label requestor:looker studio .
- The Data Studio BigQuery connector lets you access data from your BigQuery tables within Data Studio.
- Looker Studio is now called Data Studio.

