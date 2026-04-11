---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.434Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.medialAxis()"
feature_slug: "ee-image-medialaxis"
latest_feature_date: "2016-08-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
keywords:
  - "ee"
  - "image"
  - "medialaxis"
  - "computes"
  - "the"
  - "medial"
  - "axis"
  - "of"
---

# ee.Image.medialAxis()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes the medial axis of an image.

## Extended Definition

Computes the medial axis of an image.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)

## Supporting Pages

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Array ([ [ 0.3029 , 0.2786 , 0.4733 , 0.5599 , 0.508 , 0.1872 ], [ - 0.2941 , - 0.243 , - 0.5424 , 0.7276 , 0.0713 , - 0.1608 ], [ 0.1511 , 0.1973 , 0.3283 , 0.3407 , - 0.7117 , - 0.4559 ], [ - 0.8239 , 0.0849 , 0.4396 , - 0.058 , 0.2013 , - 0.2773 ], [ - 0.3294 , 0.0557 , 0.1056 , 0.1855 , - 0.4349 , 0.8085 ], [ 0.1079 , - 0.9023 , 0.4119 , 0.0575 , - 0.0259 , 0.0252 ], ]) Confirm that this is a 6x6, 2-D Array using length() , which will return the lengths of each axis: Code Editor (JavaScript) // Print the dimensions. print ( coefficients . length ()); // [6,6] Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Print the dimensions. display ( coefficients . length ()) # [6,6] The following table illustrates the arrangement of the matrix entries along the 0-axis and the 1-axis: 1-axis -> 0 1 2 3 4 5 0 0.3029 0.2786 0.4733 0.5599 0.508 0.1872 1 -0.2941 -0.243 -0.5424 0.7276 0.0713 -0.1608 0-axis 2 0.1511 0.1973 0.3283 0.3407 -0.7117 -0.4559 3 -0.8239 0.0849 0.4396 -0.058 0.2013 -0.2773 4 -0.3294 0.0557 0.1056 0.1855 -0.4349 0.8085 5 0.1079 -0.9023 0.4119 0.0575 -0.0259 0.0252 The indices on the left of the table indicate positions along the 0-axis.
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- You can get the greenness sub-matrix using slice() : Code Editor (JavaScript) // Get the 1x6 greenness slice, display it. var greenness = coefficients . slice ({ axis : 0 , start : 1 , end : 2 , step : 1 }); print ( greenness ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the 1x6 greenness slice, display it. greenness = coefficients . slice ( axis = 0 , start = 1 , end = 2 , step = 1 ) display ( greenness ) The 2-D greenness matrix should look something like: [[-0.2941,-0.243,-0.5424,0.7276,0.0713,-0.1608]] Observe that the start and end parameters of slice() correspond to the 0-axis indices displayed in the table ( start is inclusive and end is exclusive).
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Examples in the following sections use ee.Reducer.mean() as the argument for both of these parameters. ui.Chart.image.series Image date is plotted along the x-axis according to the system:time start property.
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], }); print ( chart ); ui.Chart.image.doySeriesByYear Use ui.Chart.image.doySeriesByYear to display a day-of-year time series for a given region and image band, where each distinct year in the image collection is presented as a unique series.
- Reducer . mean (), seriesProperty : 'label' , startDay : 1 , endDay : 365 }) . setOptions ({ title : 'Average NDVI Value by Day of Year' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'NDVI (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'f0af07' , '0f8755' , '76b349' ], }); print ( chart ); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- Import the Image function from the IPython.display module. from IPython.display import Image Image ( image content ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In general, you should build these with one of the client APIs. serialized = ee.serializer.encode(image) Create the desired projection (WGS84) at the desired scale (10 meters for Sentinel-2).
- Note that the result of the computation is an Image . coords = [ - 121.58626826832939 , 38.059141484827485 , ] region = ee .

