---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.545Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Queries panel source column API version display"
feature_slug: "queries-panel-source-column-api-version-display"
latest_feature_date: "2023-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-queries"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts"
keywords:
  - "queries"
  - "panel"
  - "source"
  - "column"
  - "version"
  - "display"
  - "admin"
  - "now"
---

# Queries panel source column API version display

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Admin > Queries panel Source column now displays the API version for queries initiated from the Looker API.

## Extended Definition

The Admin > Queries panel Source column now displays the API version for queries initiated from the Looker API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts)

## Supporting Pages

### Admin settings - Queries \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker admins can stop a running query from the Queries admin page by clicking the Stop button for the query. (Users with the see queries permission can view the Queries page, but only Looker admins can stop a running query.) Note: Google BigQuery connections that are configured for OAuth authentication don't support query killing.
- Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage schedules , manage themes , or see admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - Queries Stay organized with collections Save and categorize content based on your preferences.
- The Queries page in the Database section of the Admin menu lists information about the last 50 queries that Looker submitted to your database.

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Trigger Value : For Trigger type persisted tables, the value that triggered the persisted table build (displays – for successfully built persisted tables that are persisted with a datagroup trigger ; to see the most recent trigger value for a datagroup , see the Datagroups page in the Admin panel).
- These are the persisted tables that have been deployed to production on your instance; these persisted tables provide the data for your users' Explore queries. (If you are in Production Mode or if you don't have develop permissions, the Persistent Derived Tables page will not display any tabs, and the page will show information for production persisted tables only.) The Development tab shows the development persisted tables .
- To open the Persistent Derived Tables page, follow these steps: Click the Looker Main menu icon menu and select Admin , if the Admin menu isn't already displayed. (If you are in the Explore or Develop section of the Looker Main menu , you may have to click the back arrow to see the Admin menu.) From the Admin menu, select Persistent Derived Tables .
- Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage schedules , manage themes , or see admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.

### Admin settings - Alerts \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts)
- Source ID: `site-docs-reference-required-4`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can group alerts in the following ways: Default : No grouping Dashboard Names : In alphabetical order by the name of the dashboard on which the alert is set Owner : In alphabetical order by alert owner Alert error and warning messages The Manage Alerts admin page displays any errors or warnings that are surfaced when the alert query is run or the alert notification is delivered.
- Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage schedules , manage themes , or see admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
- Admins and users who have been granted the see alerts permission can view these settings in the Manage Alerts admin page table: Column Definition Alert Name The title of the alert, which is set when the alert is created or edited.
- Warning: Querying fresh data A warning icon in the Condition Met column indicates that the data on the dashboard tile upon which the alert is based did not change between the two most recent alert queries.

