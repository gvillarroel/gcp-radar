---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.421Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Tabbed Dashboards"
feature_slug: "tabbed-dashboards"
latest_feature_date: "2026-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails"
  - "https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "tabbed"
  - "dashboards"
  - "dashboard"
  - "editors"
  - "can"
  - "organize"
  - "content"
  - "across"
---

# Tabbed Dashboards

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Dashboard editors can organize dashboard content across multiple tabs within a single dashboard; Lets dashboard editors organize dashboard content across multiple tabs within a single dashboard.

## Extended Definition

Dashboard editors can organize dashboard content across multiple tabs within a single dashboard; Lets dashboard editors organize dashboard content across multiple tabs within a single dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)
- [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Content Guardrails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Content guardrails page has the following options: Limit merged results query tiles Reduce loading time for custom visualizations Limit dashboard refreshing Limit dashboard tabs Limit query tiles on tabs and on dashboards Limit rows in a custom visualization For more information and recommendations about building performant dashboards, see Considerations when building performant Looker dashboards .
- Although dashboards are powerful tools for conveying business insights, their performance can be impacted by several factors, including the following: Unchecked quantities of dashboard tiles, tabs, or visualizations Frequent query runs Complex query runs As an admin, content guardrails allow you to account for the trade-off between dashboard customizability and performance.
- Learn more about tabbed dashboards .
- Any dashboards that are configured to auto-refresh more frequently than the time interval in this field won't auto-refresh any more frequently than the value that's configured in this field.

### "Downloading or delivering dashboards in rendered formats \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Looker Best Practices Send feedback Downloading or delivering dashboards in rendered formats Stay organized with collections Save and categorize content based on your preferences.
- Important : Starting in Looker 26.4, table charts, scatterplot charts, and Google Maps charts that have increased row limits are subject to the following limitations when you download, send, or schedule dashboards in PDF format: The query results for each table chart on a dashboard will display up to 50,000 rows, to a maximum total limit of 200,000 cells per dashboard.
- Dashboard tiles may need to be reorganized to accommodate the selected page size and Looker-determined line breaks.
- PNGs The PNG format is available only when you send or schedule dashboards.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- LookML dashboard user access data , clear cache refresh , mobile app access , see lookml dashboards User access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see sql , see user dashboards , send to integration , schedule without limit User who can't view LookML access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see lookml dashboards , see looks , see user dashboards , send to integration , schedule without limit Viewer access data , clear cache refresh , download without limit , mobile app access , schedule look emails , see drill overlay , see lookml dashboards , see looks , see user dashboards , schedule without limit You'll see these permission sets appear as options when you create a new role.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .

