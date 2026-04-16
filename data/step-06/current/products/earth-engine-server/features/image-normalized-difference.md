---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.312Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.normalized_difference"
feature_slug: "image-normalized-difference"
latest_feature_date: "2013-01-31"
deprecation_date: "2013-01-31"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
keywords:
  - "image"
  - "normalized"
  - "difference"
  - "renamed"
  - "normalizeddifference"
  - "computing"
  - "differences"
  - "deprecated"
---

# Image.normalized_difference

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Renamed to Image.normalizedDifference for computing normalized differences; deprecated on 2013-01-31.

## Extended Definition

Renamed to Image.normalizedDifference for computing normalized differences; deprecated on 2013-01-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)

## Supporting Pages

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example demonstrates multiple concepts: filtering, mapping, reducing and the use of a cloud mask: Code Editor (JavaScript) // This function gets NDVI from a Landsat 8 image. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // This function masks cloudy pixels. var cloudMask = function ( image ) { var clouds = ee .
- For example, the following code adds an NDVI band to every image in an ImageCollection : Code Editor (JavaScript) // This function gets NDVI from Landsat 8 imagery. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // Load the Landsat 8 TOA data, filter by location and date. var collection = ee .
- For example, compute the difference between Normalized Difference Vegetation Index (NDVI) images 20 years apart: Code Editor (JavaScript) // This function gets NDVI from Landsat 5 imagery. var getNDVI = function ( image ) { return image . normalizedDifference ([ 'B4' , 'B3' ]); }; // Load two Landsat 5 images, 20 years apart. var image1 = ee .
- Continuing the image differencing example, use a mask to display areas of increased and decreased NDVI over the difference interval: // This function gets NDVI from Landsat 5 imagery . var getNDVI = function ( image ) { return image . normalizedDifference ([ 'B4' , 'B3' ]); }; // Load two Landsat 5 images , 20 years apart . var image1 = ee .

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Point ([ 106.91 , 47.91 ])) . map ( lambda image : image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ]))) . aside ( m . add layer , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ) ) m . add layer ( composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.3 }, 'composite' ) m Running a function on first() Printing and visualizing are useful for debugging when available, but when you're debugging a function mapped over a collection, then you can't print in the function, as described in the mapped functions section .
- Point ([ 106.91 , 47.91 ])) . map ( function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }) . aside ( Map . addLayer , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ); Map . setCenter ( 106.91 , 47.91 , 11 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .
- Point ([ - 123 , 43 ])); var terribleAggregations = collection . map ( function ( image ) { return image . set ( image . reduceRegion ({ reducer : 'mean' , geometry : image . geometry (), scale : 30 , maxPixels : 1e9 })); }); // Error: Quota exceeded: Too many concurrent aggregations. print ( terribleAggregations ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Code Editor (JavaScript) s2image = s2image . set ( 'myProperty' , 'OK' ); print ( s2image . get ( 'myProperty' )); // OK Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) s2image = s2image . set ( 'my property' , 'OK' ) display ( s2image . get ( 'my property' )) # OK Mapped functions Another context in which client and server functions don't mix is in mapped functions.

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).
- Image ( image . date () . difference ( ee .
- Image ( image . date (). difference ( ee .

