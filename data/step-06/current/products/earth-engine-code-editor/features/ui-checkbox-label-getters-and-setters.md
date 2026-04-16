---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.492Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "ui.Checkbox label getters and setters"
feature_slug: "ui-checkbox-label-getters-and-setters"
latest_feature_date: "2021-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_feature"
  - "https://developers.google.com/earth-engine/guides/charts_style"
  - "https://developers.google.com/earth-engine/guides/charts_array"
keywords:
  - "ui"
  - "checkbox"
  - "label"
  - "getters"
  - "setters"
  - "getlabel"
  - "setlabel"
  - "allow"
---

# ui.Checkbox label getters and setters

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Ui.Checkbox.getLabel() and ui.Checkbox.setLabel() allow reading and updating checkbox labels.

## Extended Definition

Ui.Checkbox.getLabel() and ui.Checkbox.setLabel() allow reading and updating checkbox labels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)

## Supporting Pages

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root-2`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chart . feature . byFeature ({ features : ecoregions , xProperty : 'label' , yProperties : [ '06 ppt' , '06 tmean' ] }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.feature.byProperty Example setup The ui.Chart.feature.byProperty function accepts a dictionary that allows you to control the label and order of property names along the x-axis by assigning numerical values to them.
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root-2`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chart . array . values ({ array : elevSort , axis : 0 , xLabels : lonSort }) . setOptions ({ title : 'Elevation Profile Across Longitude' , hAxis : { title : 'Longitude' , viewWindow : { min : - 124.50 , max : - 122.8 }, titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Elevation (m)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '1d6b99' ], lineSize : 5 , pointSize : 0 , legend : { position : 'none' } }); print ( chart ); Apply .setChartType('AreaChart') to add shading under the line: print ( chart . setChartType ( 'AreaChart' )); ee.List metadata scatter plot Collection property reduction by ee.Reducer.toList() produces a dictionary of property value lists, one for each selected property.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Landsat 8 Image Collection Metadata (045030)' , colors : [ '96356f' ], hAxis : { title : 'Cloud cover (%)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Geometric RMSE (m)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 5 , dataOpacity : 0.6 , legend : { position : 'none' }, }); print ( chart ); ee.List mapped function scatter & line plot Map a function over a list of x values to calculate a corresponding list of y values.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }). setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ 'cf513e' ], hAxis : { title : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'SWIR reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.4 , legend : { position : 'none' }, }); print ( chart ); ee.List transect line plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each image band.
- Chart . array . values ({ array : yValues , axis : 1 , xLabels : xValues }) . setSeriesNames ([ 'NIR' , 'SWIR' ]) . setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ '1d6b99' , 'cf513e' ], pointSize : 4 , dataOpacity : 0.4 , hAxis : { 'title' : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { 'title' : 'Reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } } }); print ( chart ); ee.List region scatter plot Two list objects can be plotted using the ui.Chart.array.values function.

### Chart Styling \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Text styling options are specified according to the following JavaScript object: var textStyle = { color : 'grey' , fontName : 'arial' , fontSize : 14 , bold : true , italic : false } Set x-axis text style: { hAxis : { textStyle : textStyle , // tick label text style titleTextStyle : textStyle // axis title text style } } Set y-axis text style: { vAxis : { textStyle : textStyle , // tick label text style titleTextStyle : textStyle // axis title text style } } Set legend text style: { legend : { textStyle : textStyle } } You can also set font name and size for all text elements: { fontName : 'arial' , fontSize : 14 } set chart background color? { chartArea : { backgroundColor : 'EBEBEB' } } set chart grid line color? { hAxis : { // x-axis gridlines : { color : 'FFFFFF' } }, vAxis : { // y-axis gridlines : { color : 'FFFFFF' } } } remove grid lines? { hAxis : { // x-axis gridlines : { count : 0 } }, vAxis : { // y-axis gridlines : { count : 0 } } } format axis value labels?
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2021-05-26 UTC."],[],["The ui.Chart module's .setOptions() method allows custom styling of charts in the Earth Engine Code Editor.
- Additional features include applying log scales, smoothing functions, enabling chart zooming/panning, altering opacity, rotating axes, setting text styles, changing background/grid line colors, formatting axis labels, interpolating null values, and adding trend lines.\n"]]
- See this guide for the full list of axis value label format options. { hAxis : { // x-axis format : 'short' // applies the 'short' format option }, vAxis : { // y-axis format : 'scientific' // applies the 'scientific' format option } } interpolate null y-axis values?

