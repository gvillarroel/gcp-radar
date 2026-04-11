---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.432Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Reducer.autoHistogram()"
feature_slug: "ee-reducer-autohistogram"
latest_feature_date: "2017-05-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_array"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "ee"
  - "reducer"
  - "autohistogram"
  - "produces"
  - "an"
  - "array"
  - "output"
  - "histogram"
---

# ee.Reducer.autoHistogram()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Produces an ee.Array output histogram suitable for per-pixel use.

## Extended Definition

Produces an ee.Array output histogram suitable for per-pixel use.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }). setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ 'cf513e' ], hAxis : { title : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'SWIR reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.4 , legend : { position : 'none' }, }); print ( chart ); ee.List transect line plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each image band.
- Note that any set of lists and/or arrays having the same length along a given axis can be plotted by ui.Chart.array.values . ee.Array region scatter plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each band in a given image.
- Chart . array . values ({ array : elevSort , axis : 0 , xLabels : lonSort }) . setOptions ({ title : 'Elevation Profile Across Longitude' , hAxis : { title : 'Longitude' , viewWindow : { min : - 124.50 , max : - 122.8 }, titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Elevation (m)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '1d6b99' ], lineSize : 5 , pointSize : 0 , legend : { position : 'none' } }); print ( chart ); Apply .setChartType('AreaChart') to add shading under the line: print ( chart . setChartType ( 'AreaChart' )); ee.List metadata scatter plot Collection property reduction by ee.Reducer.toList() produces a dictionary of property value lists, one for each selected property.
- Reducer . toList (), geometry : forest . geometry (), scale : 2000 }); // Convert NIR and SWIR value lists to an array to be plotted along the y-axis. var yValues = pixelVals . toArray ([ 'sur refl b02' , 'sur refl b06' ]); // Get the red band value list; to be plotted along the x-axis. var xValues = ee .

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Array ([ [ 0.3029 , 0.2786 , 0.4733 , 0.5599 , 0.508 , 0.1872 ], [ - 0.2941 , - 0.243 , - 0.5424 , 0.7276 , 0.0713 , - 0.1608 ], [ 0.1511 , 0.1973 , 0.3283 , 0.3407 , - 0.7117 , - 0.4559 ], [ - 0.8239 , 0.0849 , 0.4396 , - 0.058 , 0.2013 , - 0.2773 ], [ - 0.3294 , 0.0557 , 0.1056 , 0.1855 , - 0.4349 , 0.8085 ], [ 0.1079 , - 0.9023 , 0.4119 , 0.0575 , - 0.0259 , 0.0252 ], ]) Confirm that this is a 6x6, 2-D Array using length() , which will return the lengths of each axis: Code Editor (JavaScript) // Print the dimensions. print ( coefficients . length ()); // [6,6] Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Print the dimensions. display ( coefficients . length ()) # [6,6] The following table illustrates the arrangement of the matrix entries along the 0-axis and the 1-axis: 1-axis -> 0 1 2 3 4 5 0 0.3029 0.2786 0.4733 0.5599 0.508 0.1872 1 -0.2941 -0.243 -0.5424 0.7276 0.0713 -0.1608 0-axis 2 0.1511 0.1973 0.3283 0.3407 -0.7117 -0.4559 3 -0.8239 0.0849 0.4396 -0.058 0.2013 -0.2773 4 -0.3294 0.0557 0.1056 0.1855 -0.4349 0.8085 5 0.1079 -0.9023 0.4119 0.0575 -0.0259 0.0252 The indices on the left of the table indicate positions along the 0-axis.
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Array ([ [ 0.3029 , 0.2786 , 0.4733 , 0.5599 , 0.508 , 0.1872 ], [ - 0.2941 , - 0.243 , - 0.5424 , 0.7276 , 0.0713 , - 0.1608 ], [ 0.1511 , 0.1973 , 0.3283 , 0.3407 , - 0.7117 , - 0.4559 ], [ - 0.8239 , 0.0849 , 0.4396 , - 0.058 , 0.2013 , - 0.2773 ], [ - 0.3294 , 0.0557 , 0.1056 , 0.1855 , - 0.4349 , 0.8085 ], [ 0.1079 , - 0.9023 , 0.4119 , 0.0575 , - 0.0259 , 0.0252 ], ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Create an Array of Tasseled Cap coefficients. coefficients = ee .
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Added ee.Reducer.autoHistogram() with ee.Array output suitable for use per-pixel.
- Earth Engine Server Fixed Added ee.Reducer.fixedHistogram() , a reducer which computes a histogram using fixed bins and returns the histogram as an ee.Array with two columns.
- November 15, 2016 Earth Engine Data Catalog Feature Added ASTER/AST L1T 003 : ASTER L1T Radiance November 03, 2016 Earth Engine Server Fixed Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
- Updated ee.Reducer.frequencyHistogram() and ee.Reducer.countDistinct() to ignore masked pixels.

