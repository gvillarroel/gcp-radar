---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.442Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Auto Resize Value"
feature_slug: "auto-resize-value"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/advanced-visualization-editor"
  - "https://docs.cloud.google.com/looker/docs/chart-config-editor"
keywords:
  - "auto"
  - "resize"
  - "value"
  - "lets"
  - "single"
  - "visualizations"
  - "automatically"
  - "text"
---

# Auto Resize Value

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets single value visualizations automatically resize their value text based on available space.

## Extended Definition

Lets single value visualizations automatically resize their value text based on available space.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Smart Single Value Text Size Enabling the Smart Single Value Text Size feature automatically resizes the fonts on single value visualizations displayed within dashboard tiles.
- When this feature is enabled, the Auto Resize Value option in the Single value chart Style menu has no effect.
- The status of the Automated Gemini in Looker enablement and user management setting affects the group as follows: If you enable the setting: New users who are added to the instance are added to the group automatically.
- Fonts are resized to display at least 8-10 value characters within a tile; if the characters in the visualization overflow horizontally or vertically at a given size, the font size will step down.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- Change the background color and axis text color Customize tooltip color Add chart annotations and captions Add vertical reference bands Color the maximum, minimum, and percentile values Change the background color and axis text color To change the background color of a visualization, use the chart.backgroundColor attribute.
- If Gemini in Looker features are enabled, you can use the Visualization Assistant to generate JSON formatting options from text-based prompts to accelerate the customization of Looker visualizations.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- Source ID: `site-docs-reference-required-4`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- Change the background color and axis text color Customize tooltip color Add chart annotations and captions Add vertical reference bands Color the maximum, minimum, and percentile values Change the background color and axis text color To change the background color of a visualization, use the chart.backgroundColor attribute.
- If Gemini in Looker features are enabled, you can use the Visualization Assistant to generate JSON formatting options from text-based prompts to accelerate the customization of Looker visualizations.

