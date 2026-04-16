---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.542Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Custom theme support for embedded dashboard downloads"
feature_slug: "custom-theme-support-for-embedded-dashboard-downloads"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-themes"
  - "https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "custom"
  - "theme"
  - "embedded"
  - "dashboard"
  - "downloads"
  - "dashboards"
  - "tiles"
  - "now"
---

# Custom theme support for embedded dashboard downloads

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Downloads of embedded dashboards and dashboard tiles now render using the applied custom theme.

## Extended Definition

Downloads of embedded dashboards and dashboard tiles now render using the applied custom theme.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-themes](https://docs.cloud.google.com/looker/docs/admin-panel-platform-themes)
- [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - Themes \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-themes](https://docs.cloud.google.com/looker/docs/admin-panel-platform-themes)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use themes to customize the appearance of your Looker dashboards or your embedded Looker dashboards, Looks, and Explores.
- For information about setting a default theme for your embedded dashboards and Explores, or for applying a theme to a specific embedded dashboard or Explore, see the Themes for embedded dashboards, Looks, and Explores documentation page.
- For information about setting a theme for an internal (non-embedded) Looker dashboard, see the Themes for internal dashboards documentation page.
- You can use themes to customize font family, text color, background color, button color, tile color, and other visual elements.

### "Downloading or delivering dashboards in rendered formats \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important : Starting in Looker 26.4, table charts, scatterplot charts, and Google Maps charts that have increased row limits are subject to the following limitations when you download, send, or schedule dashboards in PDF format: The query results for each table chart on a dashboard will display up to 50,000 rows, to a maximum total limit of 200,000 cells per dashboard.
- All examples on this page use a dashboard called Download Dashboard , which features tiles with different chart types: A Users by state tile with a map chart Two tiles with single value charts — Orders this month and Order items this month An Orders by month tile with a table chart that features two columns of values that are represented as text and as a bar chart.
- For the most part, PNG files render the same as PDF files, with a few differences: When the Arrange dashboard tiles in a single column setting is selected, each tile renders as an individual PNG file rather than all tiles rendering together as a single file.
- Home Documentation Data analytics Looker Best Practices Send feedback Downloading or delivering dashboards in rendered formats Stay organized with collections Save and categorize content based on your preferences.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Basic Editor access data , clear cache refresh , create custom fields , create table calculations , explore , follow alerts , manage privatelabel , manage themes , see admin , see alerts , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see schedules , see sql , see datagroups , see system activity , see user dashboards , see users NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Users who have the save content permission but not the embed save shared space permission will only have the option to save content to their personal embed folder . manage embed settings None Instance Wide CM Users can edit embed settings on the Embed page in the Platform section of the Admin menu. manage themes None Instance Wide CM Users can configure theme settings for embedded dashboards, Looks, and Explores on the Themes page in the Platform section of the Admin menu.

