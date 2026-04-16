---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.555Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Scatterplot chart value labels"
feature_slug: "scatterplot-chart-value-labels"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bar-options"
  - "https://docs.cloud.google.com/looker/docs/visualization-guide"
  - "https://docs.cloud.google.com/looker/docs/chart-config-editor"
keywords:
  - "scatterplot"
  - "chart"
  - "value"
  - "labels"
  - "charts"
  - "can"
  - "now"
  - "display"
---

# Scatterplot chart value labels

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Scatterplot charts can now display data point value labels using any dimension present in the visualization.

## Extended Definition

Scatterplot charts can now display data point value labels using any dimension present in the visualization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- [https://docs.cloud.google.com/looker/docs/visualization-guide](https://docs.cloud.google.com/looker/docs/visualization-guide)
- [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)

## Supporting Pages

### Bar chart options \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits of specifying axes Using this functionality, any chart can: Combine arbitrary series in any number of axes Split pivoted series across various axes by measure Render top and bottom axes in rotated charts Render charts with various measure types so long as they are not combined (such as linear and log) Render log charts with values between 0 and 1 Each y-axis has its own set of configuration options and displays one or more data series on a scale relative to that y-axis.
- Time Label Format You can specify how x-axis value labels appear for charts with a time dimension on the x-axis.
- See Time Formatting for Looker Charts for all formatting options. %b '%y, %H:%M displays Aug '14, 22:31 %B %Y, %I:%M %p displays August 2014, 10:31 PM %x %X displays 12/15/2014 10:31:00 %I:%M:%S %p displays 10:31:00 PM Y menu options Gridlines You can toggle the appearance of gridlines extending from the y-axis.
- Additionally, when a bar chart that uses a By Pivot grid layout is added to a dashboard, and the smaller charts share the same x-axis, only the charts on the bottom of the visualization will show the axis values.

### "Selecting an effective data visualization \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/visualization-guide](https://docs.cloud.google.com/looker/docs/visualization-guide)
- Source ID: `site-docs-reference-required-4`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This section describes the following charts and highlights their strengths in displaying categorical data: Pie Donut multiples Pie Best for visualizing proportional values.
- Column charts are vertical Cartesian charts that display information in rectangular, vertical shapes, where the length of the column corresponds to the data value.
- Because negative values are displayed with a downward direction, column charts can also be a useful way to depict datasets that include negative values.
- This section includes the following examples of Cartesian charts: Column Bar Scatterplot Line Area Column Best for visualizing data with few categories to compare.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- Source ID: `site-docs-reference-required-4`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Similarly, to change the text color of the axes in a visualization, use the following attributes: xAxis.labels.style.color xAxis.title.style.color yAxis.labels.style.color yAxis.title.style.color The following HighCharts JSON changes the background color of the visualization to purple, and the text of the axis titles and labels to white. { chart : { backgroundColor : "purple" }, xAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } }, yAxis : { labels : { style : { color : "white" } }, title : { style : { color : "white" } } } } Customize tooltip color To customize the color of the tooltip, use the following attributes: tooltip.backgroundColor tooltip.style.color The following HighCharts JSON changes the background color of the tooltip to cyan, and changes the color of the tooltip text to black. { tooltip : { backgroundColor : "cyan" , style : { color : "black" } } } Customize tooltip content and styles To customize the content of the tooltip, use the following attributes: tooltip.format tooltip.shared The following HighCharts JSON changes the tooltip format such that the x-axis value appears at the top of the tooltip in larger font, followed by a list of all series values at that point.
- The following HighCharts JSON changes the color of the average sale price to green when it's greater than or equal to the median sale price, and to maroon otherwise: { chart : {}, series : [{ name : 'Average Sale Price' , formatters : [{ select : 'value >= order items.median sale price' , style : { color : 'green' , dataLabels : { color : 'green' } } }, { select : 'value < order items.median sale price' , style : { color : 'maroon' , dataLabels : { color : 'maroon' } } } ] }, { name : 'Median Sale Price' }] } Note that the line select: 'value >= order items.median sale price' references the Median Sale Price field in the format VIEW NAME.FIELD NAME .
- The following HighCharts JSON uses the value from the orders.annotations field as an annotation on the orders.count field: { annotations : [{ labels : [{ annotationsSource : 'orders.annotations' , annotationsTarget : 'orders.count' }] }] } Add vertical reference bands To add a vertical reference band, use the xAxis.plotBands attribute.
- This example uses the following HighCharts functions and variables: {key} is a variable that returns the x-axis value of the selected point. (in this example, the month and year). {#each points}{/each} is a function that repeats the enclosed code for each series in the chart. {series.name} is a variable that returns the name of the series. {y:.2f} is a variable that returns the y-axis value of the selected point, rounded to two decimal places. {y} is a variable that returns the y-axis value of the selected point. {variable:.2f} rounds variable to two decimal places.

