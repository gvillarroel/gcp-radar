---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.127Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "matrixSingularValueDecomposition"
feature_slug: "matrixsingularvaluedecomposition"
latest_feature_date: "2017-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/guides/arrays_sorting_reducing"
  - "https://developers.google.com/earth-engine/guides/charts_array"
keywords:
  - "matrixsingularvaluedecomposition"
  - "computes"
  - "singular"
  - "value"
  - "decomposition"
  - "image"
  - "array"
---

# matrixSingularValueDecomposition

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Computes the singular value decomposition for image and array data.

## Extended Definition

Computes the singular value decomposition for image and array data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/guides/arrays_sorting_reducing](https://developers.google.com/earth-engine/guides/arrays_sorting_reducing)
- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)

## Supporting Pages

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ( [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ] ) Make an Array Image, with a 1-D Array per pixel. array image 1d = image . toArray () Make an Array Image with a 2-D Array per pixel, 6x1. array image 2d = array image 1d . toArray ( 1 ) In this example, note that toArray() converts image to an array image in which each pixel is a 1-D vector, the entries of which correspond to the 6 values at the corresponding positions in the bands of image .
- Key actions include: creating a TC coefficient array; confirming its dimensions using length(); extracting a sub-matrix (e.g., 'greenness') using slice(); converting multi-band Landsat images into Array Images with toArray() for per-pixel band value arrays; performing matrix multiplication; casting to regular, single band images with arrayGet(), and using arrayProject() and arrayFlatten() for multi band array images.\n"]]
- To do that, first convert the multi-band Landsat image into an “Array Image”, where each pixel is an Array of band values.
- Array images can be created from multi-band images, where each pixel is an array of band values.

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Landsat 8 Image Collection Metadata (045030)' , colors : [ '96356f' ], hAxis : { title : 'Cloud cover (%)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Geometric RMSE (m)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 5 , dataOpacity : 0.6 , legend : { position : 'none' }, }); print ( chart ); ee.List mapped function scatter & line plot Map a function over a list of x values to calculate a corresponding list of y values.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }). setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ 'cf513e' ], hAxis : { title : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'SWIR reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.4 , legend : { position : 'none' }, }); print ( chart ); ee.List transect line plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each image band.
- Note that any set of lists and/or arrays having the same length along a given axis can be plotted by ui.Chart.array.values . ee.Array region scatter plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each band in a given image.
- Chart . array . values ({ array : elevSort , axis : 0 , xLabels : lonSort }) . setOptions ({ title : 'Elevation Profile Across Longitude' , hAxis : { title : 'Longitude' , viewWindow : { min : - 124.50 , max : - 122.8 }, titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Elevation (m)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '1d6b99' ], lineSize : 5 , pointSize : 0 , legend : { position : 'none' } }); print ( chart ); Apply .setChartType('AreaChart') to add shading under the line: print ( chart . setChartType ( 'AreaChart' )); ee.List metadata scatter plot Collection property reduction by ee.Reducer.toList() produces a dictionary of property value lists, one for each selected property.

### Array Sorting and Reducing \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_sorting_reducing](https://developers.google.com/earth-engine/guides/arrays_sorting_reducing)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Array sorting is useful for obtaining custom quality mosaics which involve reducing a subset of image bands according to the values in a different band.
- Page Summary outlined flag Array sorting enables the creation of custom quality mosaics by reducing image bands based on values in another band.
- Then, a collection of images is filtered by location and date range, transformed into an array, and sorted by descending NDVI values.
- Reducer . mean (), axes : [ imageAxis ] }); // Turn the reduced array image into a multi-band image for display. var meanImage = mean . arrayProject ([ bandAxis ]). arrayFlatten ([ bandNames ]); Map . centerObject ( roi , 12 ); Map . addLayer ( meanImage , { bands : [ 'SR B6' , 'SR B5' , 'SR B4' ], min : 0 , max : 0.4 }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function that scales and masks Landsat 8 surface reflectance images and adds an NDVI band. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Calculate NDVI. ndvi = optical bands . normalizedDifference ([ 'SR B5' , 'SR B4' ]) . rename ( 'NDVI' ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . addBands ( ndvi ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Define an arbitrary region of interest as a point. roi = ee .

