---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.462Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Period-over-period value_to_date subparameter"
feature_slug: "period-over-period-value-to-date-subparameter"
latest_feature_date: "2025-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bar-options"
  - "https://docs.cloud.google.com/looker/docs/advanced-visualization-editor"
  - "https://docs.cloud.google.com/looker/docs/chart-config-editor"
keywords:
  - "period"
  - "over"
  - "value"
  - "date"
  - "subparameter"
  - "measures"
  - "lets"
  - "looker"
---

# Period-over-period value_to_date subparameter

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The value_to_date subparameter for period-over-period measures lets Looker calculate prior-period values using the current timeframe-to-date.

## Extended Definition

The value_to_date subparameter for period-over-period measures lets Looker calculate prior-period values using the current timeframe-to-date.

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
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Looker developers: The formatting used in the Value Format field is the same as formatting that is used with the value format LookML parameter , except that the value format parameter requires the formatting string to be enclosed in double quotes.
- For example, if you apply a trend line to Daily Sales, and the period is set to 7, then, for a given date, the Moving Average plots the average sales for the 7-day period ending on that date.
- If the number of previous data points is less than the period setting, the Moving Average is calculated over the partial periods, but is rebased to the number of available data points.
- The logarithmic scale type can only be used for data with positive values and is only available when you have set Series Positioning to Grouped or Overlay on the Plot tab.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Color series compared to other series values Starting in Looker 25.0, the formatters.select parameter lets you compare the current data value to values from other series.
- Looker does not accept functions, dates, or undefined values.
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- String-based date formats like MM/DD/YYYY and DD-MM-YY are not supported in the to and from HighCharts attributes. { caption : { text : 'This chart uses the HighCharts plotBands attribute to display a band around the Black Friday Cyber Monday sale period.' }, xAxis : { plotBands : [{ to : 1669680000000 , from : 1669248000000 , label : { text : 'BFCM Sale Period' } }] }, } Add dotted and dashed lines To change solid lines to dotted or dashed lines, use the series.dashStyle attribute.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- Source ID: `site-docs-reference-required-4`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Color series compared to other series values Starting in Looker 25.0, the formatters.select parameter lets you compare the current data value to values from other series.
- Looker does not accept functions, dates, or undefined values.
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- String-based date formats like MM/DD/YYYY and DD-MM-YY are not supported in the to and from HighCharts attributes. { caption : { text : 'This chart uses the HighCharts plotBands attribute to display a band around the Black Friday Cyber Monday sale period.' }, xAxis : { plotBands : [{ to : 1669680000000 , from : 1669248000000 , label : { text : 'BFCM Sale Period' } }] }, } Add dotted and dashed lines To change solid lines to dotted or dashed lines, use the series.dashStyle attribute.

