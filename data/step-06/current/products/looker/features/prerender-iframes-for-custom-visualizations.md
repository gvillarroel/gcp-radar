---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.443Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Prerender iframes for custom visualizations"
feature_slug: "prerender-iframes-for-custom-visualizations"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "prerender"
  - "iframes"
  - "custom"
  - "visualizations"
  - "pre"
  - "renders"
  - "admin"
  - "content"
---

# Prerender iframes for custom visualizations

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Pre-renders iframes for custom visualizations from the Admin > Content Guardrails page; Pre-renders iframes for custom visualizations from the Admin > Content Guardrails page.

## Extended Definition

Pre-renders iframes for custom visualizations from the Admin > Content Guardrails page; Pre-renders iframes for custom visualizations from the Admin > Content Guardrails page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Content Guardrails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Although dashboards are powerful tools for conveying business insights, their performance can be impacted by several factors, including the following: Unchecked quantities of dashboard tiles, tabs, or visualizations Frequent query runs Complex query runs As an admin, content guardrails allow you to account for the trade-off between dashboard customizability and performance.
- Reduce loading time for custom visualizations Enable the Prerender Iframes (before data loads) for custom visualizations option to reduce the custom visualization loading time by starting to render the iframe even before query data has been loaded.
- The Content guardrails page has the following options: Limit merged results query tiles Reduce loading time for custom visualizations Limit dashboard refreshing Limit dashboard tabs Limit query tiles on tabs and on dashboards Limit rows in a custom visualization For more information and recommendations about building performant dashboards, see Considerations when building performant Looker dashboards .
- Content guardrails are settings that let Looker admins impose limits on how some dashboard settings can be configured by Looker users.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- If a group is assigned multiple email domain sets, for example through membership in multiple groups, then members of that group will be able to send emails to all domains that are assigned to each of the user attribute values, as well as the domains that are listed in the Email Domain Allowlist for Scheduled Content admin setting.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - General settings Stay organized with collections Save and categorize content based on your preferences.
- In this case, the only way to revoke content certification is for a Looker admin or a user that has the certify content permission to manually revoke the content certification .

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- Default permission sets For new installations, Looker includes several default permission sets that you can start with: Permission Set Included Permissions Admin All permissions Developer access data , can create forecast , clear cache refresh , create custom fields , create table calculations , deploy , develop , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see pdts , see sql , see user dashboards , send to integration , schedule without limit , use sql runner NOTE : The see pdts permission is included in the Developer default permission only for Looker installations that were created with Looker 21.18 or later.
- LookML dashboard user access data , clear cache refresh , mobile app access , see lookml dashboards User access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see sql , see user dashboards , send to integration , schedule without limit User who can't view LookML access data , can create forecast , clear cache refresh , create custom fields , create table calculations , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see lookml dashboards , see looks , see user dashboards , send to integration , schedule without limit Viewer access data , clear cache refresh , download without limit , mobile app access , schedule look emails , see drill overlay , see lookml dashboards , see looks , see user dashboards , schedule without limit You'll see these permission sets appear as options when you create a new role.

