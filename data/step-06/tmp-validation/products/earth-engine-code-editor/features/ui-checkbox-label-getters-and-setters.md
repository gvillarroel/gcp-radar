---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.577Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "ui.Checkbox label getters and setters"
feature_slug: "ui-checkbox-label-getters-and-setters"
latest_feature_date: "2021-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/charts_feature"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "checkbox"
  - "getlabel"
  - "setlabel"
  - "getters"
  - "setters"
  - "allow"
  - "label"
---

# ui.Checkbox label getters and setters

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Ui.Checkbox.getLabel() and ui.Checkbox.setLabel() allow reading and updating checkbox labels.

## Extended Definition

Ui.Checkbox.getLabel() and ui.Checkbox.setLabel() allow reading and updating checkbox labels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .
- Don't do this: labels = labels . map ( function ( f ) { return f . buffer ( 100000 , 1000 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var training = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); var classifier = ee .
- This is because the timeouts are longer and the allowable memory footprint is larger when running in the batch system (where exports run). (There are other approaches you may want to try first as detailed in the debugging doc ).
- Array ( accuracies ), axis : 0 , xLabels : minLeafPops })); In this example, the classifier is already very accurate, so there's not much tuning to do.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Rectangle ([ - 180 , - 90 , 180 , 90 ], null , false ), scale : 100 , }); // Error: Image.reduceRegion: Too many pixels in the region. // Found 80300348117, but only 10000000 allowed. print ( absurdComputation ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) absurd computation = ee .
- For example, the following allows the computation to succeed: Code Editor (JavaScript) var bands = [ 'B1' , 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var smallerHog = ee .
- Exporting allows Earth Engine to perform the computation in an environment with longer allowable running times (but not more memory).
- Found 80300348117, but only 10000000 allowed. print ( absurd computation . getInfo ()) This silly example is just for demonstration.

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chart . feature . byFeature ({ features : ecoregions , xProperty : 'label' , yProperties : [ '06 ppt' , '06 tmean' ] }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.feature.byProperty Example setup The ui.Chart.feature.byProperty function accepts a dictionary that allows you to control the label and order of property names along the x-axis by assigning numerical values to them.
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .

