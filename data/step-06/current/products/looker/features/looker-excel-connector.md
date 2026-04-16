---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.449Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker-Excel Connector"
feature_slug: "looker-excel-connector"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
keywords:
  - "looker"
  - "excel"
  - "connector"
  - "lets"
  - "users"
  - "open"
  - "explore"
  - "results"
---

# Looker-Excel Connector

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker-Excel Connector lets users open Explore results in Excel from the Explore gear menu.

## Extended Definition

The Looker-Excel Connector lets users open Explore results in Excel from the Explore gear menu.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Force mobile authentication When this setting is enabled, users are required to sign in to the Looker mobile app and the Looker (Legacy) app every time they open the app on their mobile device.
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- A new user group called Default Gemini Users has been created automatically for all Looker (original) instances that use an open system configuration .
- URL Allowlist for Data Actions This setting lets you define URLs (such as https://looker.com ) where your users can process data actions .

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Looker Studio users with this permission can refresh Looker data on Looker Studio reports that use the Looker connector. see drill overlay access data Model Specific Users can see the results of drilling into a dashboard tile but cannot explore those results.
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- This permission makes visible the All Results option in the Looker Scheduler for Looks and Explores. see sql see looks Model Specific Users can access the SQL tab while exploring and on any SQL errors that are caused by their queries. see lookml see looks Model Specific Users have read-only access to LookML.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- This toggle enables the Connected Sheets option in the settings Explore actions gear menu that opens Google Sheets and initiates a connection from Google Sheets to the Looker Explore.
- The BI Connectors page in the Platform section of the Admin menu lets you enable or disable connections from Looker to other business intelligence (BI) applications.
- The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .

