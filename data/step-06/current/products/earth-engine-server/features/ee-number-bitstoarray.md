---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.442Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Number.bitsToArray()"
feature_slug: "ee-number-bitstoarray"
latest_feature_date: "2015-11-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "ee"
  - "number"
  - "bitstoarray"
  - "converts"
  - "bits"
  - "into"
  - "an"
  - "array"
---

# ee.Number.bitsToArray()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Converts a number's bits into an array.

## Extended Definition

Converts a number's bits into an array.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key actions include: creating a TC coefficient array; confirming its dimensions using length(); extracting a sub-matrix (e.g., 'greenness') using slice(); converting multi-band Landsat images into Array Images with toArray() for per-pixel band value arrays; performing matrix multiplication; casting to regular, single band images with arrayGet(), and using arrayProject() and arrayFlatten() for multi band array images.\n"]]
- Array ([ [ 0.3029 , 0.2786 , 0.4733 , 0.5599 , 0.508 , 0.1872 ], [ - 0.2941 , - 0.243 , - 0.5424 , 0.7276 , 0.0713 , - 0.1608 ], [ 0.1511 , 0.1973 , 0.3283 , 0.3407 , - 0.7117 , - 0.4559 ], [ - 0.8239 , 0.0849 , 0.4396 , - 0.058 , 0.2013 , - 0.2773 ], [ - 0.3294 , 0.0557 , 0.1056 , 0.1855 , - 0.4349 , 0.8085 ], [ 0.1079 , - 0.9023 , 0.4119 , 0.0575 , - 0.0259 , 0.0252 ], ]) Confirm that this is a 6x6, 2-D Array using length() , which will return the lengths of each axis: Code Editor (JavaScript) // Print the dimensions. print ( coefficients . length ()); // [6,6] Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Print the dimensions. display ( coefficients . length ()) # [6,6] The following table illustrates the arrangement of the matrix entries along the 0-axis and the 1-axis: 1-axis -> 0 1 2 3 4 5 0 0.3029 0.2786 0.4733 0.5599 0.508 0.1872 1 -0.2941 -0.243 -0.5424 0.7276 0.0713 -0.1608 0-axis 2 0.1511 0.1973 0.3283 0.3407 -0.7117 -0.4559 3 -0.8239 0.0849 0.4396 -0.058 0.2013 -0.2773 4 -0.3294 0.0557 0.1056 0.1855 -0.4349 0.8085 5 0.1079 -0.9023 0.4119 0.0575 -0.0259 0.0252 The indices on the left of the table indicate positions along the 0-axis.
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Array ([ [ 0.3029 , 0.2786 , 0.4733 , 0.5599 , 0.508 , 0.1872 ], [ - 0.2941 , - 0.243 , - 0.5424 , 0.7276 , 0.0713 , - 0.1608 ], [ 0.1511 , 0.1973 , 0.3283 , 0.3407 , - 0.7117 , - 0.4559 ], [ - 0.8239 , 0.0849 , 0.4396 , - 0.058 , 0.2013 , - 0.2773 ], [ - 0.3294 , 0.0557 , 0.1056 , 0.1855 , - 0.4349 , 0.8085 ], [ 0.1079 , - 0.9023 , 0.4119 , 0.0575 , - 0.0259 , 0.0252 ], ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Create an Array of Tasseled Cap coefficients. coefficients = ee .

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).
- First, assemble the image data and convert to arrays: Code Editor (JavaScript) // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Replace the original bands with the scaled ones and apply the masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Load a Landsat 8 surface reflectance image collection. var collection = ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Added ee.Image.bitsToArray() and ee.Number.bitsToArray() .
- Earth Engine Data Catalog Feature Added COPERNICUS/S1 GRD : Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling Added NASA/GLDAS/V020/NOAH/G025/T3H (no longer available) Earth Engine Server Feature Added ee.Image.bitsToArrayImage() .
- January 10, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMSLCFG : VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1 Added VITO/PROBAV/C1/S1 TOC 100M : PROBA-V C1 Top Of Canopy Daily Synthesis 100m Added VITO/PROBAV/C1/S1 TOC 333M : PROBA-V C1 Top Of Canopy Daily Synthesis 333m January 03, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMCFG : VIIRS Nighttime Day/Night Band Composites Version 1 December 20, 2016 Earth Engine Data Catalog Feature Added WORLDCLIM/V1/BIO : WorldClim BIO Variables V1 Added WORLDCLIM/V1/MONTHLY : WorldClim Climatology V1 December 19, 2016 Earth Engine Server Fixed Added ee.Image.arrayCat() to easily concatenate two array images with the same number of dimensions.
- March 23, 2021 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C02/T1 L2 : USGS Landsat 8 Level 2, Collection 2, Tier 1 Added NASA/ORNL/DAYMET V4 : Daymet V4: Daily Surface Weather and Climatological Summaries March 16, 2021 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2020-5 (no longer available) March 09, 2021 Earth Engine Data Catalog Feature Added NOAA/NCEP DOE RE2/total cloud coverage : NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage February 23, 2021 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V3 2 (no longer available) Added USGS/NLCD RELEASES/2016 REL (no longer available) February 12, 2021 Earth Engine Server Change Added ee.Number.signum() , ee.Image.signum() , and ee.Array.signum() .

