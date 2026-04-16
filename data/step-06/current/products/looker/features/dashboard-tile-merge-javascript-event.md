---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.453Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "dashboard:tile:merge JavaScript event"
feature_slug: "dashboard-tile-merge-javascript-event"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "dashboard"
  - "tile"
  - "merge"
  - "javascript"
  - "event"
  - "named"
  - "available"
---

# dashboard:tile:merge JavaScript event

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

A new JavaScript event named dashboard:tile:merge is available.

## Extended Definition

A new JavaScript event named dashboard:tile:merge is available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- This prevents non-admin users from automatically refreshing data on dashboards and dashboard tiles.
- Minor changes, which won't cause certification to be revoked, include changing a title or dashboard tile title, repositioning dashboard tiles, or changing a dashboard layout without changing the content of any of the dashboard tiles.
- Smart Single Value Text Size Enabling the Smart Single Value Text Size feature automatically resizes the fonts on single value visualizations displayed within dashboard tiles.
- This allows LookML dashboards that use those collections to render consistently across instances if both instances have the same custom collections named identically.

### Content Guardrails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- The Content guardrails page has the following options: Limit merged results query tiles Reduce loading time for custom visualizations Limit dashboard refreshing Limit dashboard tabs Limit query tiles on tabs and on dashboards Limit rows in a custom visualization For more information and recommendations about building performant dashboards, see Considerations when building performant Looker dashboards .
- When you edit query tiles on dashboards , or individual merged results source queries , only 5,000 rows of data will be displayed, regardless of whether you increase the row limit.
- Enable the Limit new merged results queries on dashboards option to prevent users from saving new merged results queries to dashboards.
- Existing dashboards that contain merged results query tiles will report No Results and show an error for the corresponding elements.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- This permission is available only if the Access Content Certification preview feature has been enabled for your instance. clear cache refresh access data Model Specific Users can clear cache and refresh internal and embedded dashboards, dashboard tiles, Looks, and Explores.
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Basic Editor access data , clear cache refresh , create custom fields , create table calculations , explore , follow alerts , manage privatelabel , manage themes , see admin , see alerts , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see schedules , see sql , see datagroups , see system activity , see user dashboards , see users NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

