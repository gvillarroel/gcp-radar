---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.467Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Responsive report layout in Studio in Looker"
feature_slug: "responsive-report-layout-in-studio-in-looker"
latest_feature_date: "2025-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-labs"
keywords:
  - "responsive"
  - "report"
  - "layout"
  - "studio"
  - "looker"
  - "lets"
  - "users"
  - "create"
---

# Responsive report layout in Studio in Looker

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets users create reports with a responsive layout in Studio in Looker.

## Extended Definition

Lets users create reports with a responsive layout in Studio in Looker.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)

## Supporting Pages

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get to know Data Studio Take the Create a report tutorial .
- Note: Scheduled email delivery doesn't work with data that is protected using IP-based access levels with VPC Service Controls. (This is because Data Studio cannot pass the email recipient's IP address to BigQuery to assess IP-based access levels when generating the email.) Visualize BigQuery GEOGRAPHY polygons You can display GEOGRAPHY polygons by using a Google Maps visualization in your report.
- To enable the BigQuery Storage Read API, grant the following permissions to your BigQuery user who is connected to Data Studio: bigquery.readsessions.create bigquery.readsessions.getData Quotas and general limits The maximum number of rows that can be returned using the BigQuery Connector is 2 million rows.
- When a chart is created to visualize this table, Data Studio will automatically create a default date range of the last 28 days and then properly query the last 28 tables.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- Users must have download with limit and/or download without limit permissions to download the content. create public looks save looks Model Specific Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication. download with limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Looker Studio Pro users with this permission can create, duplicate, and delete alerts on Looker Studio reports that use the Looker connector. follow alerts see looks Instance Wide NN Users can view and follow alerts.
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- This Labs feature enables the Looker reports feature , which lets you create, view, and edit Looker Studio reports in your Looker instance, including both governed and ad hoc data.
- The Enhanced Content Cleanup preview feature provides the following capabilities: Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
- When enabled, the New Looker Explore and Merge Query Experience feature lets individual users have the option to try the redesigned Looker Explore and Merge Query interfaces.
- Access Studio in Looker Important: Starting on December 4, 2025, new instances or instances that have not already enabled Looker reports cannot enable Looker reports.

