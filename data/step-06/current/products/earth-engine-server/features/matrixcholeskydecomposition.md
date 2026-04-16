---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.125Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "matrixCholeskyDecomposition"
feature_slug: "matrixcholeskydecomposition"
latest_feature_date: "2017-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
  - "https://developers.google.com/earth-engine/guides/charts_array"
keywords:
  - "matrixcholeskydecomposition"
  - "computes"
  - "cholesky"
  - "decomposition"
  - "image"
  - "array"
---

# matrixCholeskyDecomposition

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Computes the Cholesky decomposition for image and array data.

## Extended Definition

Computes the Cholesky decomposition for image and array data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)

## Supporting Pages

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ([ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]); // Make an Array Image, with a 1-D Array per pixel. var arrayImage1D = image . toArray (); // Make an Array Image with a 2-D Array per pixel, 6x1. var arrayImage2D = arrayImage1D . toArray ( 1 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 image, select the bands of interest. image = ee .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ( [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ] ) Make an Array Image, with a 1-D Array per pixel. array image 1d = image . toArray () Make an Array Image with a 2-D Array per pixel, 6x1. array image 2d = array image 1d . toArray ( 1 ) In this example, note that toArray() converts image to an array image in which each pixel is a 1-D vector, the entries of which correspond to the 6 values at the corresponding positions in the bands of image .

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).
- First, assemble the image data and convert to arrays: Code Editor (JavaScript) // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Replace the original bands with the scaled ones and apply the masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Load a Landsat 8 surface reflectance image collection. var collection = ee .

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Landsat 8 Image Collection Metadata (045030)' , colors : [ '96356f' ], hAxis : { title : 'Cloud cover (%)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Geometric RMSE (m)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 5 , dataOpacity : 0.6 , legend : { position : 'none' }, }); print ( chart ); ee.List mapped function scatter & line plot Map a function over a list of x values to calculate a corresponding list of y values.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }). setOptions ({ title : 'Relationship Among Spectral Bands for Forest Pixels' , colors : [ 'cf513e' ], hAxis : { title : 'Red reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'SWIR reflectance (x1e4)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 4 , dataOpacity : 0.4 , legend : { position : 'none' }, }); print ( chart ); ee.List transect line plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each image band.
- Note that any set of lists and/or arrays having the same length along a given axis can be plotted by ui.Chart.array.values . ee.Array region scatter plot Image region reduction by ee.Reducer.toList() produces a dictionary of pixel value lists, one for each band in a given image.
- The following examples rely on array and list data generated by reduction of image bands and image metadata using the ee.Reducer.toList() reducer.

