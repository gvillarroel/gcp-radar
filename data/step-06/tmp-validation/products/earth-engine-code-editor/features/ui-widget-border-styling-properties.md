---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.571Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "ui.Widget border styling properties"
feature_slug: "ui-widget-border-styling-properties"
latest_feature_date: "2025-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_overview"
  - "https://developers.google.com/earth-engine/guides/charts_style"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "properties"
  - "styling"
  - "border"
  - "related"
  - "widget"
  - "supports"
---

# ui.Widget border styling properties

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Ui.Widget styling now supports border-related CSS properties, including per-side borders and rounded corners.

## Extended Definition

Ui.Widget styling now supports border-related CSS properties, including per-side borders and rounded corners.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_overview](https://developers.google.com/earth-engine/guides/charts_overview)
- [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### Chart Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_overview](https://developers.google.com/earth-engine/guides/charts_overview)
- Source ID: `site-docs-root-2`
- Final score: 65
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Styling Google Charts are highly customizable via styling properties.
- A variety of chart types available in Google Charts corechart, such as scatter, line, bar, pie, and histogram, can be set using the ui.Chart.setChartType() method. ui.Chart widgets can be displayed in the Code Editor console, within a ui.Panel , or in a separate browser tab where they can also be downloaded as graphics or CSV data.
- Learn more about creating charts from a DataTable : DataTable charting Earth Engine object charts The ui.Chart widget provides helper methods to construct a DataTable and render charts from Image , ImageCollection Feature , FeatureCollection , Array , and List objects.
- Chart . array . values ( data , 0 , data ) . setChartType ( 'ColumnChart' ); print ( chart ); Display and download ui.Chart widgets can be displayed three ways: In the Code Editor console var data = ee .

### Chart Styling \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- Source ID: `site-docs-root-2`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Various styling options are available, including setting chart titles, hiding legends, defining axis limits, setting symbol and line properties, adjusting text styles, and modifying background and grid line colors.
- Styling properties can be set for all series using top-level properties or for selected individual series.
- Text styling options are specified according to the following JavaScript object: var textStyle = { color : 'grey' , fontName : 'arial' , fontSize : 14 , bold : true , italic : false } Set x-axis text style: { hAxis : { textStyle : textStyle , // tick label text style titleTextStyle : textStyle // axis title text style } } Set y-axis text style: { vAxis : { textStyle : textStyle , // tick label text style titleTextStyle : textStyle // axis title text style } } Set legend text style: { legend : { textStyle : textStyle } } You can also set font name and size for all text elements: { fontName : 'arial' , fontSize : 14 } set chart background color? { chartArea : { backgroundColor : 'EBEBEB' } } set chart grid line color? { hAxis : { // x-axis gridlines : { color : 'FFFFFF' } }, vAxis : { // y-axis gridlines : { color : 'FFFFFF' } } } remove grid lines? { hAxis : { // x-axis gridlines : { count : 0 } }, vAxis : { // y-axis gridlines : { count : 0 } } } format axis value labels?
- You can set symbol properties for all series using top-level properties, for example: { colors : [ 'blue' ], pointSize : 10 , lineWidth : 5 , lineDashStyle : [ 4 , 4 ], pointShape : 'diamond' // 'circle', 'triangle', 'square', 'star', or 'polygon' } or set properties for selected series: { series : { 0 : { lineWidth : 3 , color : 'yellow' , pointSize : 7 }, 2 : { lineWidth : 7 , color : '1D6D99' , lineDashStyle : [ 4 , 4 ]} } } You can also set colors for individual series by providing a color array that corresponds to the length and order of the series. { colors : [ 'blue' , 'yellow' , 'red' ] } hide a series from the legend? { series : { 0 : { visibleInLegend : false }, // hides the 1st series in the legend 2 : { visibleInLegend : false } // hides the 3rd series in the legend } } show points on a line chart?

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

