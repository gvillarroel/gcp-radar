---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.538Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "create_dashboard_render_task theme property"
feature_slug: "create-dashboard-render-task-theme-property"
latest_feature_date: "2023-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url"
  - "https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me"
keywords:
  - "create"
  - "dashboard"
  - "render"
  - "task"
  - "theme"
  - "property"
  - "method"
  - "now"
---

# create_dashboard_render_task theme property

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The create_dashboard_render_task API method now accepts an optional theme property for rendered dashboards.

## Extended Definition

The create_dashboard_render_task API method now accepts an optional theme property for rendered dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me)

## Supporting Pages

### Create Signed Embed Url \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The best way to obtain this target url is to navigate to the desired Looker page in your web browser and use the "Get embed URL" menu option to copy it to your clipboard and paste it into the target url property as a quoted string value in this API request.
- For example, to display the dashboard with id 34, target url would look like: https://mycompany.looker.com:9999/dashboards/34. target uri MUST contain a scheme (HTTPS), domain name, and URL path.
- Permissions for the embed user are defined by the groups in which the embed user is a member ( group ids property) and the lists of models and permissions assigned to the embed user.
- Home Documentation Data analytics Looker API Reference Send feedback Create Signed Embed Url Stay organized with collections Save and categorize content based on your preferences.

### "Downloading or delivering dashboards in rendered formats \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For the most part, PNG files render the same as PDF files, with a few differences: When the Arrange dashboard tiles in a single column setting is selected, each tile renders as an individual PNG file rather than all tiles rendering together as a single file.
- Home Documentation Data analytics Looker Best Practices Send feedback Downloading or delivering dashboards in rendered formats Stay organized with collections Save and categorize content based on your preferences.
- Here is the example dashboard rendered as a single column PDF: Note: Single column PDFs with the Expand tables to show all rows option applied often render with page breaks in the middle of expanded tables.
- Important : Starting in Looker 26.4, table charts, scatterplot charts, and Google Maps charts that have increased row limits are subject to the following limitations when you download, send, or schedule dashboards in PDF format: The query results for each table chart on a dashboard will display up to 50,000 rows, to a maximum total limit of 200,000 cells per dashboard.

### Create Embed URL \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The best way to obtain this target url is to navigate to the desired Looker page in your web browser, copy the URL shown in the browser address bar, insert "/embed" after the host/port, and paste it into the target url property as a quoted string value in this API request.
- Version 4.0.26.6 (latest) Create an Embed URL Creates an embed URL that runs as the Looker user making this API call. ("Embed as me") This embed URL can then be used to instantiate a Looker embed session in a "Powered by Looker" (PBL) web application.
- However, unlike Private Embed where the user has access to any other part of the Looker UI, the embed web session created by requesting the EmbedUrlResponse.url in a browser only has access to content visible under the /embed context.
- For example, to display the dashboard with id 34, target url would look like: https://mycompany.looker.com:9999/dashboards/34. target uri MUST contain a scheme (HTTPS), domain name, and URL path.

