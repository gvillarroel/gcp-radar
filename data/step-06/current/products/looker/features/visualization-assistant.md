---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.396Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Visualization Assistant"
feature_slug: "visualization-assistant"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/advanced-visualization-editor"
  - "https://docs.cloud.google.com/looker/docs/chart-config-editor"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
keywords:
  - "visualization"
  - "assistant"
  - "lets"
  - "users"
  - "customize"
  - "looker"
  - "formatting"
  - "natural"
---

# Visualization Assistant

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Visualization Assistant lets users customize Looker visualization formatting with natural-language prompts using Gemini assistance; Generates custom formatting options for Looker visualizations from natural-language prompts.

## Extended Definition

Visualization Assistant lets users customize Looker visualization formatting with natural-language prompts using Gemini assistance; Generates custom formatting options for Looker visualizations from natural-language prompts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)

## Supporting Pages

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- If Gemini in Looker features are enabled, you can use the Visualization Assistant to generate JSON formatting options from text-based prompts to accelerate the customization of Looker visualizations.
- You can use the Chart Config Editor to customize formatting options on Looker visualizations that use the HighCharts API .
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- Source ID: `site-docs-reference-required-4`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- If Gemini in Looker features are enabled, you can use the Visualization Assistant to generate JSON formatting options from text-based prompts to accelerate the customization of Looker visualizations.
- You can use the Chart Config Editor to customize formatting options on Looker visualizations that use the HighCharts API .
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Turn on the following toggles to enable each of their corresponding features: Conversational Analytics — enables Conversational Analytics Looker Assistants — enables the Visualization Assistant Optionally, select Enable Trusted Tester Features to grant users access to the Trusted Tester capabilities of Gemini in Looker features.
- Expression Assistant — enables the Expression Assistant , which allows users to use natural language to write Looker expressions for table calculations and custom fields .
- Explore Insight Assistant — enables the Insight Assistant , which allows users to ask natural language questions about an Explore, and create and modify queries based on the Explore.
- To use the Visualization Assistant to create custom visualizations with Gemini assistance, you must be assigned a Looker role that contains the can override vis config permission.

