---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.493Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "ui.Widget textDecoration property"
feature_slug: "ui-widget-textdecoration-property"
latest_feature_date: "2021-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_datatable"
  - "https://developers.google.com/earth-engine/guides/charts_array"
  - "https://developers.google.com/earth-engine/guides/charts_feature"
keywords:
  - "ui"
  - "widget"
  - "textdecoration"
  - "property"
  - "style"
  - "now"
  - "supports"
---

# ui.Widget textDecoration property

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Ui.Widget.style() now supports a textDecoration property.

## Extended Definition

Ui.Widget.style() now supports a textDecoration property.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)
- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)

## Supporting Pages

### DataTable Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chart ( dataTableClient ). setOptions ({ title : 'Average Vegetation Index Value by Date for Forest' , hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }, }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], curveType : 'function' }); print ( chart ); }); Interval chart This chart takes advantage of the DataTable column 'role' property to generate an interval chart .
- In the following example, boxes are used instead of bands by changing the intervals.style property to 'boxes' with respective box styling. dataTableServer . evaluate ( function ( dataTableClient ) { var chart = ui .
- Bands are drawn around the median line by setting the intervals.style chart property as 'area' .
- Chart ( dataTableClient ) . setChartType ( 'LineChart' ) . setOptions ({ title : 'Annual NDVI Time Series with Inter-Annual Variance' , intervals : { style : 'boxes' , barWidth : 1 , boxWidth : 1 , lineWidth : 0 }, hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true }, }, vAxis : { title : 'NDVI (x1e4)' , titleTextStyle : { italic : false , bold : true }}, colors : [ '0f8755' ], legend : { position : 'none' } }); print ( chart ); }); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root-2`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chart . array . values ({ array : elevSort , axis : 0 , xLabels : lonSort }) . setOptions ({ title : 'Elevation Profile Across Longitude' , hAxis : { title : 'Longitude' , viewWindow : { min : - 124.50 , max : - 122.8 }, titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Elevation (m)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '1d6b99' ], lineSize : 5 , pointSize : 0 , legend : { position : 'none' } }); print ( chart ); Apply .setChartType('AreaChart') to add shading under the line: print ( chart . setChartType ( 'AreaChart' )); ee.List metadata scatter plot Collection property reduction by ee.Reducer.toList() produces a dictionary of property value lists, one for each selected property.
- It also supports plotting collection property value lists, for example cloud cover and geometric RMSE from Landsat 8 images, as well as mapped function results like a sine wave.\n"]]
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Landsat 8 Image Collection Metadata (045030)' , colors : [ '96356f' ], hAxis : { title : 'Cloud cover (%)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Geometric RMSE (m)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 5 , dataOpacity : 0.6 , legend : { position : 'none' }, }); print ( chart ); ee.List mapped function scatter & line plot Map a function over a list of x values to calculate a corresponding list of y values.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }). setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ 'cf513e' ], hAxis : { title : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'SWIR reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.4 , legend : { position : 'none' }, }); print ( chart ); ee.List transect line plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each image band.

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chart . feature . byFeature ({ features : ecoregions , xProperty : 'label' , yProperties : [ '06 ppt' , '06 tmean' ] }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.feature.byProperty Example setup The ui.Chart.feature.byProperty function accepts a dictionary that allows you to control the label and order of property names along the x-axis by assigning numerical values to them.
- Chart . feature . byFeature ({ features : ecoregions . select ( '[0-9][0-9] ppt label' ), xProperty : 'label' }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average Monthly Precipitation by Ecoregion' , hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ], isStacked : 'percent' }); print ( chart ); Scatter chart Features are plotted along the x-axis, labeled by values of a selected property.
- Chart . feature . byFeature ({ features : ecoregions . select ( '[0-9][0-9] ppt label' ), xProperty : 'label' }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average Monthly Precipitation by Ecoregion' , hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ], isStacked : 'absolute' }); print ( chart ); Relative Features are plotted along the x-axis, labeled by values of a selected property.
- Chart . feature . byFeature ({ features : ecoregions . select ( '[0-9][0-9] tmean label' ), xProperty : 'label' , }) . setSeriesNames ([ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]) . setChartType ( 'BarChart' ) . setOptions ({ title : 'Average Monthly Temperature by Ecoregion' , hAxis : { title : 'Temperature (°C)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, colors : [ '604791' , '1d6b99' , '39a8a7' , '0f8755' , '76b349' , 'f0af07' , 'e37d05' , 'cf513e' , '96356f' , '724173' , '9c4f97' , '696969' ] }); print ( chart ); Stacked column chart Absolute Features are plotted along the x-axis, labeled by values of a selected property.

