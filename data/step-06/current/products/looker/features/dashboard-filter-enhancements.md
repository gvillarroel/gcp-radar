---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.400Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Dashboard filter enhancements"
feature_slug: "dashboard-filter-enhancements"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-labs"
  - "https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field"
keywords:
  - "dashboard"
  - "filter"
  - "enhancements"
  - "generally"
  - "available"
  - "improve"
  - "selection"
  - "bulk"
---

# Dashboard filter enhancements

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Dashboard filter enhancements are generally available and improve filter selection, bulk selection, advanced filter controls, and board defaults; Dashboard filter controls gain persistent suggestion menus, bulk selection, advanced filter limits, and a default board setting for custom filter values.

## Extended Definition

Dashboard filter enhancements are generally available and improve filter selection, bulk selection, advanced filter controls, and board defaults; Dashboard filter controls gain persistent suggestion menus, bulk selection, advanced filter limits, and a default board setting for custom filter values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field)

## Supporting Pages

### AND/OR Filters in Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AND/OR filters on dashboards AND/OR filters are created in the Explore Filters section and are translated into Looker expressions before the query is run.
- Things to know The following sections include things to know about AND/OR filters and required filters , and AND/OR filters on dashboards .
- If a query that uses both AND and OR filters is added to a dashboard, the filters will not appear in the dashboard filters section.
- As a result, AND/OR filters behave differently from basic filters on dashboards.

### Update select fields on an alert \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Alert/update_alert_field)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version 4.0.26.6 (latest) Update select alert fields Available fields: owner id , is disabled , disabled reason , is public , threshold , enhancements Request PATCH /alerts/{alert id} Datatype Description Request HTTP Request path HTTP Path Expand HTTP Path definition... alert id string ID of an alert body HTTP Body Expand HTTP Body definition... body AlertPatch Alert Expand AlertPatch definition... owner id string New owner ID of the alert is disabled boolean Set alert enabled or disabled disabled reason string The reason this alert is disabled is public boolean Set alert public or private threshold number New threshold value enhancements string Enum of additional alert properties.
- Datatype Description (object) Alert applied dashboard filters AlertAppliedDashboardFilter [] Expand AlertAppliedDashboardFilter definition... filter title string Field Title.
- Refer to DashboardFilter.dimension in DashboardFilter.
- Refer to DashboardFilter.title in DashboardFilter.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Granular Dashboard Sizing Note: This feature is temporarily unavailable for some Looker instances.
- When this preview feature is enabled, you can use the following features for table visualizations : Pagination Show/Hide Table Headers Table Borders Cell Highlighting Conditional formatting for string fields Note: When Cell Highlighting is enabled, conditional formatting is not available.
- This feature allows admins to set limits on tiles per dashboard and per tab to optimize performance, which is configured on the Content Guardrails page in the Performance Center section of the Admin panel.
- When this preview feature is enabled, the new Enhanced search experience lets you search for Looker content using filters for specific content types, special characters, and more metadata options.

