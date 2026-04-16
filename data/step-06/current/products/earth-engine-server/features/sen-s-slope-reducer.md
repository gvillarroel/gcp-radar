---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.229Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Sen's slope reducer"
feature_slug: "sen-s-slope-reducer"
latest_feature_date: "2016-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_style"
  - "https://developers.google.com/earth-engine/guides/charts_array"
  - "https://developers.google.com/earth-engine/guides/exporting_tables"
keywords:
  - "sen"
  - "slope"
  - "reducer"
  - "estimates"
  - "trend"
---

# Sen's slope reducer

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Estimates a Sen's slope trend.

## Extended Definition

Estimates a Sen's slope trend.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- [https://developers.google.com/earth-engine/guides/exporting_tables](https://developers.google.com/earth-engine/guides/exporting_tables)

## Supporting Pages

### Chart Styling \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- See this page for full details. { trendlines : { 0 : { // add a trend line to the 1st series type : 'linear' , // or 'polynomial', 'exponential' color : 'green' , lineWidth : 5 , opacity : 0.2 , visibleInLegend : true , } } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]); // Apply custom style properties to the chart. chart . setOptions ( chartStyle ); // Print the chart to the console. print ( chart ); Note: setting individual series properties overrides top-level properties.
- Additional features include applying log scales, smoothing functions, enabling chart zooming/panning, altering opacity, rotating axes, setting text styles, changing background/grid line colors, formatting axis labels, interpolating null values, and adding trend lines.\n"]]
- Chart . image . doySeries ({ imageCollection : vegIndices , region : grassland , regionReducer : ee .

### "Exporting Table and Vector Data \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/exporting_tables](https://developers.google.com/earth-engine/guides/exporting_tables)
- Source ID: `site-docs-root-2`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reducer . mean (), geometry : region , crs : projection . crs , crsTransform : projection . transform , }); // Make a feature without geometry and set the properties to the dictionary of means. var feature = ee .
- Reducer . mean (), geometry = region , crs = projection [ 'crs' ], crsTransform = projection [ 'transform' ], ) Make a feature without geometry and set the properties to the dictionary of means. feature = ee .
- Rectangle ( - 122.2806 , 37.1209 , - 122.0554 , 37.2413 ); // Get a dictionary of means in the region. var means = image . reduceRegion ({ reducer : ee .
- Rectangle ( - 122.2806 , 37.1209 , - 122.0554 , 37.2413 ) Get a dictionary of means in the region. means = image . reduceRegion ( reducer = ee .

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Chart . array . values ({ array : elevSort , axis : 0 , xLabels : lonSort }) . setOptions ({ title : 'Elevation Profile Across Longitude' , hAxis : { title : 'Longitude' , viewWindow : { min : - 124.50 , max : - 122.8 }, titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Elevation (m)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '1d6b99' ], lineSize : 5 , pointSize : 0 , legend : { position : 'none' } }); print ( chart ); Apply .setChartType('AreaChart') to add shading under the line: print ( chart . setChartType ( 'AreaChart' )); ee.List metadata scatter plot Collection property reduction by ee.Reducer.toList() produces a dictionary of property value lists, one for each selected property.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }). setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ 'cf513e' ], hAxis : { title : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'SWIR reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.4 , legend : { position : 'none' }, }); print ( chart ); ee.List transect line plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each image band.
- Reducer . toList (), geometry : forest . geometry (), scale : 2000 }); // Convert NIR and SWIR value lists to an array to be plotted along the y-axis. var yValues = pixelVals . toArray ([ 'sur refl b02' , 'sur refl b06' ]); // Get the red band value list; to be plotted along the x-axis. var xValues = ee .
- Note that any set of lists and/or arrays having the same length along a given axis can be plotted by ui.Chart.array.values . ee.Array region scatter plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each band in a given image.

