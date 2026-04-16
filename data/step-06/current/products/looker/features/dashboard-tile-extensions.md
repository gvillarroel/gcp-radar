---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.534Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Dashboard Tile Extensions"
feature_slug: "dashboard-tile-extensions"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards"
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "dashboard"
  - "tile"
  - "extensions"
  - "can"
  - "developed"
  - "run"
  - "tiles"
  - "dashboards"
---

# Dashboard Tile Extensions

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Extensions can be developed to run as tiles on dashboards and can also be used as visualizations in LookML dashboards.

## Extended Definition

Extensions can be developed to run as tiles on dashboards and can also be used as visualizations in LookML dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### "Downloading or delivering dashboards in rendered formats \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All examples on this page use a dashboard called Download Dashboard , which features tiles with different chart types: A Users by state tile with a map chart Two tiles with single value charts — Orders this month and Order items this month An Orders by month tile with a table chart that features two columns of values that are represented as text and as a bar chart.
- For the most part, PNG files render the same as PDF files, with a few differences: When the Arrange dashboard tiles in a single column setting is selected, each tile renders as an individual PNG file rather than all tiles rendering together as a single file.
- The only options for adjusting the appearance of PNG deliveries are the Arrange dashboard tiles in a single column setting and the Table resolution setting.
- Depending on the layout of the dashboard, large visualizations or groups of overlapping tiles may need to be resized to fit on a given page size.

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- This quickstart guides you through building a dashboard with the following tiles, including an optional Look-linked tile that you can add to your dashboard if you've completed the Build a Look with sample data quickstart: Top Weekly Spenders : Identify the top spenders for the past four weeks to target them with personalized promotions.
- Reposition and resize the dashboard tiles This section explains how to arrange and format the tiles on your dashboard to customize its layout and appearance.
- To reposition or resize tiles on your dashboard, follow these steps: Navigate to the Sales and Customer Insights dashboard.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- When you're using this feature, single value tiles on dashboards may look less consistent, but more characters will fit on smaller tiles.
- This prevents non-admin users from automatically refreshing data on dashboards and dashboard tiles.
- Minor changes, which won't cause certification to be revoked, include changing a title or dashboard tile title, repositioning dashboard tiles, or changing a dashboard layout without changing the content of any of the dashboard tiles.
- Smart Single Value Text Size Enabling the Smart Single Value Text Size feature automatically resizes the fonts on single value visualizations displayed within dashboard tiles.

