---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.434Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "string conditional formatting rules"
feature_slug: "string-conditional-formatting-rules"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/advanced-visualization-editor"
  - "https://docs.cloud.google.com/looker/docs/chart-config-editor"
  - "https://docs.cloud.google.com/looker/docs/bar-options"
keywords:
  - "string"
  - "conditional"
  - "formatting"
  - "rules"
  - "adds"
  - "values"
  - "single"
  - "value"
---

# string conditional formatting rules

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Adds conditional formatting rules for string values in single value and table visualizations.

## Extended Definition

Adds conditional formatting rules for string values in single value and table visualizations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)

## Supporting Pages

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- To see color formatting implemented in the Chart Config Editor, refer to the Color the maximum, minimum, and percentile values example.
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.
- See the Highcharts templating documentation for more examples of value formatting. { tooltip : { format : '<span style="font-size: 1.8em">{key}</span><br/>{#each points}<span style="color:{color}; font-weight: bold;"> \u 25CF {series.name}: </span>{y:.2f}<br/>{/each}' , shared : true }, } Add chart annotations and captions To add an annotation, use the annotations attribute.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- Source ID: `site-docs-reference-required-4`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- To see color formatting implemented in the Chart Config Editor, refer to the Color the maximum, minimum, and percentile values example.
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.
- See the Highcharts templating documentation for more examples of value formatting. { tooltip : { format : '<span style="font-size: 1.8em">{key}</span><br/>{#each points}<span style="color:{color}; font-weight: bold;"> \u 25CF {series.name}: </span>{y:.2f}<br/>{/each}' , shared : true }, } Add chart annotations and captions To add an annotation, use the annotations attribute.

### Bar chart options \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- See the Examples section of the Chart Config Editor article for examples of some common use cases, including the following examples: Changing the background color and axis text color Conditional formatting of values within a series Customizing tooltip color Adding vertical reference bands and captions Adding chart annotations Series menu options The series menu controls how your chart shows each data series .
- For Looker developers: The formatting used in the Value Format field is the same as formatting that is used with the value format LookML parameter , except that the value format parameter requires the formatting string to be enclosed in double quotes.
- The color values can be formatted as RGB hex strings, such as #2ca6cd , or as CSS color names , such as mediumblue .
- In the Value Format field, the formatting string is not enclosed in quotes.

