---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.400Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Custom tooltips"
feature_slug: "custom-tooltips"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bar-options"
  - "https://docs.cloud.google.com/looker/docs/advanced-visualization-editor"
  - "https://docs.cloud.google.com/looker/docs/chart-config-editor"
keywords:
  - "custom"
  - "tooltips"
  - "generally"
  - "available"
  - "explore"
  - "visualization"
  - "editor"
  - "ui"
---

# Custom tooltips

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Custom tooltips are generally available in the Explore visualization editor and support UI settings plus an HTML editor with Liquid templating for most visualization types; Custom Tooltips lets users configure Explore visualization tooltips with UI controls and an HTML editor that supports Liquid templating.

## Extended Definition

Custom tooltips are generally available in the Explore visualization editor and support UI settings plus an HTML editor with Liquid templating for most visualization types; Custom Tooltips lets users configure Explore visualization tooltips with UI controls and an HTML editor that supports Liquid templating.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)

## Supporting Pages

### Bar chart options \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click the Custom Tooltip switch to configure tooltips within the Explore visualization editor by using a combination of UI settings and an HTML editor that supports Liquid templating.
- Note: Custom tooltips are not supported for donut multiples charts , word cloud charts , static map (regions) charts , static maps (points) charts , charts that are made using the Chart Config Editor (with the exception of Sankey charts ), or custom visualizations.
- This editor lets you modify HighCharts visualizations by exposing certain JSON parameters of the visualization, enabling deep customization.
- See the Examples section of the Chart Config Editor article for examples of some common use cases, including the following examples: Changing the background color and axis text color Conditional formatting of values within a series Customizing tooltip color Adding vertical reference bands and captions Adding chart annotations Series menu options The series menu controls how your chart shows each data series .

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Customizing a visualization To customize a visualization with the Chart Config Editor, follow these steps: View a visualization in an Explore, or edit a visualization in a Look or dashboard.
- Home Documentation Data analytics Looker Guides Send feedback Customizing visualizations using the Chart Config Editor Stay organized with collections Save and categorize content based on your preferences.
- You can use the Chart Config Editor to customize formatting options on Looker visualizations that use the HighCharts API .
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- Source ID: `site-docs-reference-required-4`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Customizing a visualization To customize a visualization with the Chart Config Editor, follow these steps: View a visualization in an Explore, or edit a visualization in a Look or dashboard.
- Home Documentation Data analytics Looker Guides Send feedback Customizing visualizations using the Chart Config Editor Stay organized with collections Save and categorize content based on your preferences.
- You can use the Chart Config Editor to customize formatting options on Looker visualizations that use the HighCharts API .
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.

