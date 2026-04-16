---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.514Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Explore from Here dashboard tile action"
feature_slug: "explore-from-here-dashboard-tile-action"
latest_feature_date: "2024-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
keywords:
  - "explore"
  - "here"
  - "dashboard"
  - "tile"
  - "action"
  - "tiles"
  - "include"
  - "opens"
---

# Explore from Here dashboard tile action

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Dashboard tiles include an Explore from Here action that opens the tile's data for one-click exploration.

## Extended Definition

Dashboard tiles include an Explore from Here action that opens the tile's data for one-click exploration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)

## Supporting Pages

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- This quickstart guides you through building a dashboard with the following tiles, including an optional Look-linked tile that you can add to your dashboard if you've completed the Build a Look with sample data quickstart: Top Weekly Spenders : Identify the top spenders for the past four weeks to target them with personalized promotions.
- Save your visualization as a new dashboard To save the visualization that you created in the previous section as a new dashboard, follow these steps: Click the Explore actions gear icon settings and select Save , and then select As a new dashboard .
- Create the new dashboard from an Explore This section guides you through querying data and creating a visualization for the Top Weekly Spenders tile, which will show the top 15 customers by sales in the last 4 weeks.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Certification Process URL When a user who does not have the certify content permission wants to request certification of their content, and they select a dashboard's or LookML dashboard's three-dot dashboard menu , a Look's Explore actions gear menu , or an Explore or self-service Explore's Explore actions gear menu , they will see an option that says Want to get this dashboard/look/Explore certified? that includes a Learn how link.
- Minor changes, which won't cause certification to be revoked, include changing a title or dashboard tile title, repositioning dashboard tiles, or changing a dashboard layout without changing the content of any of the dashboard tiles.
- Smart Single Value Text Size Enabling the Smart Single Value Text Size feature automatically resizes the fonts on single value visualizations displayed within dashboard tiles.
- Outgoing Webhook Token If a user uses a webhook to deliver content — such as a dashboard or a Look — the request will include a special Looker token that can be set here.

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The PDT Activity dashboard includes tiles that show the following information: A summary of the persisted table that includes the name of the LookML model and view that define the persisted table, the name of the database connection that the persisted table uses, the total number of the persisted table's successful and failed build attempts, and the percentage of total build attempts that were failures.
- This is a brief guide to the available fields in the PDT Event Log Explore: Field Description Action Describes the action that occurred; this may include regeneration, drop, creation, and reaping activity.
- A list of all the persisted table fields queried, including the LookML view and model in which the field is defined, the field name, the name of the Explore run that included the field, and the number of times the field was included in a query.
- PDT Event Log Explore Looker includes a prebuilt model named system activity that allows exploration of the PDT event log, which is a table in a database connection's temp schema that tracks the trigger and build activity of persisted tables.

