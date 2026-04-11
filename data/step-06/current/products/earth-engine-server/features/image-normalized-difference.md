---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.457Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.normalized_difference"
feature_slug: "image-normalized-difference"
latest_feature_date: "2013-01-31"
deprecation_date: "2013-01-31"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
  - "https://developers.google.com/earth-engine/guides/getstarted"
keywords:
  - "image"
  - "normalized"
  - "difference"
  - "renamed"
  - "to"
  - "normalizeddifference"
  - "for"
  - "computing"
---

# Image.normalized_difference

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Renamed to Image.normalizedDifference for computing normalized differences; deprecated on 2013-01-31.

## Extended Definition

Renamed to Image.normalizedDifference for computing normalized differences; deprecated on 2013-01-31.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- Added an ee.Classifier.decisionTree() algorithm for loading pre-existing decision trees as Classifier objects Fixed singular value exceptions when computing the parameter stability test in Image.formaTrend() , to match behavior of original FORMA.
- Earth Engine Server Change Added ee.Image.register() , ee.Image.displacement() , and ee.Image.displace() for registering images to one another and computing and applying displacements.
- Use Image.normalizedDifference() with Image.addBands() instead.

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- First, assemble the image data and convert to arrays: Code Editor (JavaScript) // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Replace the original bands with the scaled ones and apply the masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Load a Landsat 8 surface reflectance image collection. var collection = ee .

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following code adds an NDVI band to every image in an ImageCollection : Code Editor (JavaScript) // This function gets NDVI from Landsat 8 imagery. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // Load the Landsat 8 TOA data, filter by location and date. var collection = ee .
- For example, compute the difference between Normalized Difference Vegetation Index (NDVI) images 20 years apart: Code Editor (JavaScript) // This function gets NDVI from Landsat 5 imagery. var getNDVI = function ( image ) { return image . normalizedDifference ([ 'B4' , 'B3' ]); }; // Load two Landsat 5 images, 20 years apart. var image1 = ee .
- The following example demonstrates multiple concepts: filtering, mapping, reducing and the use of a cloud mask: Code Editor (JavaScript) // This function gets NDVI from a Landsat 8 image. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // This function masks cloudy pixels. var cloudMask = function ( image ) { var clouds = ee .
- Continuing the image differencing example, use a mask to display areas of increased and decreased NDVI over the difference interval: // This function gets NDVI from Landsat 5 imagery . var getNDVI = function ( image ) { return image . normalizedDifference ([ 'B4' , 'B3' ]); }; // Load two Landsat 5 images , 20 years apart . var image1 = ee .

