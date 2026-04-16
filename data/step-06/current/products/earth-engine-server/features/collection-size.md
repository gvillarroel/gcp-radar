---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.246Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Collection.size()"
feature_slug: "collection-size"
latest_feature_date: "2015-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_feature"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/arrays_intro"
keywords:
  - "collection"
  - "size"
  - "returns"
  - "number"
  - "elements"
---

# Collection.size()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Returns the number of elements in a collection.

## Extended Definition

Returns the number of elements in a collection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/arrays_intro](https://developers.google.com/earth-engine/guides/arrays_intro)

## Supporting Pages

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Common manifestations of this problem result from: Doing something to an object returned by first() (the type of the elements in a collection is unknown).
- In this case, it's useful to isolate problematic elements in the collection and test the mapped function on an individual element.
- Point ([ 106.91 , 47.91 ])) . map ( lambda image : image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ]))) . aside ( m . add layer , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ) ) m . add layer ( composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.3 }, 'composite' ) m Running a function on first() Printing and visualizing are useful for debugging when available, but when you're debugging a function mapped over a collection, then you can't print in the function, as described in the mapped functions section .
- Point ([ 106.91 , 47.91 ])) . map ( function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }) . aside ( Map . addLayer , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ); Map . setCenter ( 106.91 , 47.91 , 11 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chart . feature . groups ({ features : ecoregions , xProperty : 'label' , yProperty : '01 tmean' , seriesProperty : 'warm' }) . setSeriesNames ([ 'Warm' , 'Cold' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average January Temperature by Ecoregion' , hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Jan temp (°C)' , titleTextStyle : { italic : false , bold : true } }, bar : { groupWidth : '80%' }, colors : [ 'cf513e' , '1d6b99' ], isStacked : true }); print ( chart ); ui.Chart.feature.histogram The x-axis is defined by value bins for the range of values of a selected property; the y-axis is the number of elements in the given bin.
- Chart . feature . byFeature ({ features : ecoregions , xProperty : 'label' , yProperties : [ '06 ppt' , '06 tmean' ] }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.feature.byProperty Example setup The ui.Chart.feature.byProperty function accepts a dictionary that allows you to control the label and order of property names along the x-axis by assigning numerical values to them.
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .

### Array Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_intro](https://developers.google.com/earth-engine/guides/arrays_intro)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An array's dimension is the number of axes, its shape is determined by axis lengths, and its size is the product of axis lengths, with all elements having the same type and no sparse or ragged arrays supported.
- The array size, or number of total elements in the array, equals the product of the axis lengths.
- Array dimension, shape and size The dimension of an array refers to the number of axes along which the underlying data varies.
- The array’s element type indicates what kind of number each element is; all elements of the array will have the same type.

