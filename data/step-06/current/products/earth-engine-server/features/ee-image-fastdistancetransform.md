---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.433Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.fastDistanceTransform()"
feature_slug: "ee-image-fastdistancetransform"
latest_feature_date: "2016-08-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
keywords:
  - "ee"
  - "image"
  - "fastdistancetransform"
  - "computes"
  - "fast"
  - "distance"
  - "transform"
  - "for"
---

# ee.Image.fastDistanceTransform()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes a fast distance transform for an image.

## Extended Definition

Computes a fast distance transform for an image.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)

## Supporting Pages

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'JAXA/ALOS/AW3D30 V1 1' ); // Make a simple binary layer from a threshold on elevation. var mask = aw3d30 . select ( 'AVE' ). gt ( 300 ); Map . setCenter ( - 122.0703 , 37.3872 , 11 ); Map . addLayer ( mask , {}, 'mask' ); // Distance in pixel units. var distance = mask . fastDistanceTransform (). sqrt (); // Threshold on distance (three pixels) for a dilation. var dilation = distance . lt ( 3 ); Map . addLayer ( dilation , {}, 'dilation' ); // Do the reverse for an erosion. var notDistance = mask . not (). fastDistanceTransform (). sqrt (); var erosion = notDistance . gt ( 3 ); Map . addLayer ( erosion , {}, 'erosion' ); Use the optimizations in reduceNeighborhood() If you need to perform a convolution and can't use fastDistanceTransform() , use the optimizations in reduceNeighborhood() . var l8raw = ee .
- Use fastDistanceTransform() for neighborhood operations For some convolution operations, fastDistanceTransform() may be more efficient than reduceNeighborhood() or convolve() .
- Use fastDistanceTransform() for neighborhood operations like erosion and dilation, or utilize optimizations in reduceNeighborhood() .
- Polygon ( [[[ - 48.86726050085349 , - 3.0475996402515717 ], [ - 48.86726050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.0475996402515717 ]]], null , false ); // Forest loss in 2016, to stratify a sample. var loss = image . select ( 'lossyear' ); var loss16 = loss . eq ( 16 ). rename ( 'loss16' ); // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ); } var collection = ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- August 24, 2016 Earth Engine Server Feature Added ee.Image.medialAxis() and ee.Image.fastDistanceTransform() .
- Earth Engine Server Feature Added ee.Image.directionalDistanceTransform() , which calculates the distance to non-zero pixels in a given direction.
- June 19, 2018 Earth Engine Data Catalog Feature Added COPERNICUS/CORINE/V18 5 1/100m (no longer available) Added JAXA/ALOS/PALSAR/YEARLY/SAR : Global PALSAR-2/PALSAR Yearly Mosaic, version 1 Added MODIS/006/MCD12Q1 (no longer available) Added MODIS/006/MOD13A2 (no longer available) Added MODIS/006/MYD13A2 (no longer available) Added UMD/hansen/global forest change 2017 v1 5 (no longer available) June 12, 2018 Earth Engine Data Catalog Feature Added UMT/NTSG/v2/LANDSAT/GPP : Landsat Gross Primary Production CONUS Added UMT/NTSG/v2/LANDSAT/NPP : Landsat Net Primary Production CONUS Added UMT/NTSG/v2/MODIS/GPP : MODIS Gross Primary Production CONUS Added UMT/NTSG/v2/MODIS/NPP : MODIS Net Primary Production CONUS June 08, 2018 Earth Engine Server Feature Added ee.Image.spectralGradient() , ee.Image.spectralMorphology() and ee.Image.spectralDistance() algorithms.
- Improved performance of ee.Image.distance() and added skipMasked parameter.

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- First, assemble the image data and convert to arrays: Code Editor (JavaScript) // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Replace the original bands with the scaled ones and apply the masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Load a Landsat 8 surface reflectance image collection. var collection = ee .
- A better way is to use the pseudoInverse() method ( matrixPseudoInverse() for an array image): Code Editor (JavaScript) // Compute coefficients the easy way. var coefficients2 = predictors . matrixPseudoInverse () . matrixMultiply ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easy way. coefficients 2 = predictors . matrixPseudoInverse () . matrixMultiply ( response ) From a readability and computational efficiency perspective, the best way to get the OLS coefficients is solve() ( matrixSolve() for an array image).

