---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.544Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Themed PNG downloads for embedded visualizations"
feature_slug: "themed-png-downloads-for-embedded-visualizations"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards"
keywords:
  - "themed"
  - "png"
  - "downloads"
  - "embedded"
  - "visualizations"
  - "explores"
  - "looks"
  - "dashboards"
---

# Themed PNG downloads for embedded visualizations

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

PNG downloads from embedded Explores, Looks, and dashboards can use the applied theme.

## Extended Definition

PNG downloads from embedded Explores, Looks, and dashboards can use the applied theme.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Users who have the save content permission but not the embed save shared space permission will only have the option to save content to their personal embed folder . manage embed settings None Instance Wide CM Users can edit embed settings on the Embed page in the Platform section of the Admin menu. manage themes None Instance Wide CM Users can configure theme settings for embedded dashboards, Looks, and Explores on the Themes page in the Platform section of the Admin menu.
- This permission is available only if the Access Content Certification preview feature has been enabled for your instance. clear cache refresh access data Model Specific Users can clear cache and refresh internal and embedded dashboards, dashboard tiles, Looks, and Explores.
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- This permission is applied to individual models or model sets, rather than across the entire Looker instance. send to integration see looks Model Specific Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to the third-party services integrated with Looker using the Looker Action Hub.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- Note: Setting a new default color collection will update all visualizations on Looks and dashboards that use the default color collection.
- When Visual Drilling is enabled, the drill overlays for Looks and Explores consider the underlying data to select the best visualization type, which can be a table visualization or some other visualization type.
- This applies both to existing LookML dashboards and LookML Explores and any LookML dashboards or LookML Explores created in the future.

### "Downloading or delivering dashboards in rendered formats \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Important : Starting in Looker 26.4, table charts, scatterplot charts, and Google Maps charts that have increased row limits are subject to the following limitations when you download, send, or schedule dashboards in PDF format: The query results for each table chart on a dashboard will display up to 50,000 rows, to a maximum total limit of 200,000 cells per dashboard.
- Home Documentation Data analytics Looker Best Practices Send feedback Downloading or delivering dashboards in rendered formats Stay organized with collections Save and categorize content based on your preferences.
- Expand tables to show all rows : This setting lets you choose whether to display all rows of any table visualizations in the dashboard — rather than just those rows that display in the dashboard tile thumbnails.
- Notice that the wide table, Orders by State and Category , is cut off — not all columns are rendered: Here is what the delivery looks like when the Table resolution setting is set to Wide .

