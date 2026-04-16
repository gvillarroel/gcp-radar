---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.586Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "ui.Label hyperlink support"
feature_slug: "ui-label-hyperlink-support"
latest_feature_date: "2018-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/charts_feature"
keywords:
  - "configured"
  - "hyperlink"
  - "label"
---

# ui.Label hyperlink support

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Ui.Label can be configured as a hyperlink.

## Extended Definition

Ui.Label can be configured as a hyperlink.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)

## Supporting Pages

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root-2`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .
- Don't do this: labels = labels . map ( function ( f ) { return f . buffer ( 100000 , 1000 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var training = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); var classifier = ee .
- Array ( accuracies ), axis : 0 , xLabels : minLeafPops })); In this example, the classifier is already very accurate, so there's not much tuning to do.
- FeatureCollection ( 'projects/google/demo landcover labels' ); // No!

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root-2`
- Final score: 27
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FeatureCollection ( 'GOOGLE/EE/DEMOS/demo landcover labels' ); // This property stores the land cover labels as consecutive // integers starting from zero. var label = 'landcover' ; // Overlay the points on the imagery to get training. var training = image . select ( bands ). sampleRegions ({ collection : points , properties : [ label ], scale : 30 }); // Train a CART classifier with default parameters. var trained = ee .
- FeatureCollection ( 'GOOGLE/EE/DEMOS/demo landcover labels' ) This property stores the land cover labels as consecutive integers starting from zero. label = 'landcover' Overlay the points on the imagery to get training. training = l8 image . select ( bands ) . sampleRegions ( collection = points , properties = [ label ], scale = 30 ) Train a CART classifier with default parameters. trained = ee .
- Map () m . set center ( - 122.0877 , 37.7880 , 11 ) m . add layer ( l8 image , { 'bands' : [ 'SR B4' , 'SR B3' , 'SR B2' ], 'min' : 0 , 'max' : 0.25 }, 'image' , ) m . add layer ( classified , { 'min' : 0 , 'max' : 2 , 'palette' : [ 'orange' , 'green' , 'blue' ]}, 'classification' , ) m In this example, the training points in the table store only the class label.
- Classifier . smileCart () . train ( training , label , bands ) Classify the image with the same bands used for training. classified = l8 image . select ( bands ) . classify ( trained ) Display the inputs and the results. m = geemap .

### "Feature and FeatureCollection Charts \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/charts_feature](https://developers.google.com/earth-engine/guides/charts_feature)
- Source ID: `site-docs-root-2`
- Final score: 21
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chart . feature . byFeature ({ features : ecoregions , xProperty : 'label' , yProperties : [ '06 ppt' , '06 tmean' ] }) . setSeriesNames ([ 'Precipitation' , 'Temperature' ]) . setChartType ( 'ColumnChart' ) . setOptions ({ title : 'Average June Temperature and Precipitation by Ecoregion' , series : { 0 : { targetAxisIndex : 1 , type : 'bar' , color : '1d6b99' }, 1 : { targetAxisIndex : 0 , type : 'line' , lineWidth : 0 , pointSize : 10 , color : 'e37d05' } }, hAxis : { title : 'Ecoregion' , titleTextStyle : { italic : false , bold : true }}, vAxes : { 0 : { title : 'Temperature (°C)' , baseline : 0 , titleTextStyle : { italic : false , bold : true , color : 'e37d05' } }, 1 : { title : 'Precipitation (mm)' , titleTextStyle : { italic : false , bold : true , color : '1d6b99' } }, }, bar : { groupWidth : '40%' }, }); print ( chart ); ui.Chart.feature.byProperty Example setup The ui.Chart.feature.byProperty function accepts a dictionary that allows you to control the label and order of property names along the x-axis by assigning numerical values to them.
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .
- FeatureCollection ( 'projects/google/charts feature example' ); // Define a dictionary that associates property names with values and labels. var precipInfo = { '01 ppt' : { v : 1 , f : 'Jan' }, '02 ppt' : { v : 2 , f : 'Feb' }, '03 ppt' : { v : 3 , f : 'Mar' }, '04 ppt' : { v : 4 , f : 'Apr' }, '05 ppt' : { v : 5 , f : 'May' }, '06 ppt' : { v : 6 , f : 'Jun' }, '07 ppt' : { v : 7 , f : 'Jul' }, '08 ppt' : { v : 8 , f : 'Aug' }, '09 ppt' : { v : 9 , f : 'Sep' }, '10 ppt' : { v : 10 , f : 'Oct' }, '11 ppt' : { v : 11 , f : 'Nov' }, '12 ppt' : { v : 12 , f : 'Dec' } }; // Organize property information into objects for defining x properties and // their tick labels. var xPropValDict = {}; // Dictionary to codify x-axis property names as values. var xPropLabels = []; // Holds dictionaries that label codified x-axis values. for ( var key in precipInfo ) { xPropValDict [ key ] = precipInfo [ key ]. v ; xPropLabels . push ( precipInfo [ key ]); } // Define the chart and print it to the console. var chart = ui .

