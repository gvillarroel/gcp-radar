---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.119Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.blend()"
feature_slug: "image-blend"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
keywords:
  - "image"
  - "blend"
  - "performs"
  - "simple"
  - "alpha"
  - "blending"
  - "between"
  - "two"
---

# Image.blend()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Performs simple alpha blending between two images.

## Extended Definition

Performs simple alpha blending between two images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)

## Supporting Pages

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'JAXA/ALOS/AW3D30 V1 1' ); // Make a simple binary layer from a threshold on elevation. var mask = aw3d30 . select ( 'AVE' ). gt ( 300 ); Map . setCenter ( - 122.0703 , 37.3872 , 11 ); Map . addLayer ( mask , {}, 'mask' ); // Distance in pixel units. var distance = mask . fastDistanceTransform (). sqrt (); // Threshold on distance (three pixels) for a dilation. var dilation = distance . lt ( 3 ); Map . addLayer ( dilation , {}, 'dilation' ); // Do the reverse for an erosion. var notDistance = mask . not (). fastDistanceTransform (). sqrt (); var erosion = notDistance . gt ( 3 ); Map . addLayer ( erosion , {}, 'erosion' ); Use the optimizations in reduceNeighborhood() If you need to perform a convolution and can't use fastDistanceTransform() , use the optimizations in reduceNeighborhood() . var l8raw = ee .
- Filter . lt ( 'CLOUDY PIXEL PERCENTAGE' , 1 )) . aside ( print ) // Useful for debugging. . map ( reduceFunction ) . reduce ( 'mean' ) . rename ( bands ); var viz = { bands : bands , min : 0 , max : 10000 }; Map . addLayer ( reasonableComputation , viz , 'reasonableComputation' ); Use updateMask() instead of mask() The difference between updateMask() and mask() is that the former does a logical and() of the argument (the new mask) and the existing image mask whereas mask() simply replaces the image mask with the argument.
- FeatureCollection ( "USDOS/LSIB SIMPLE/2017" ); // Time series of images. var mod13a1 = ee .
- Polygon ( [[[ - 48.86726050085349 , - 3.0475996402515717 ], [ - 48.86726050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.0475996402515717 ]]], null , false ); // Forest loss in 2016, to stratify a sample. var loss = image . select ( 'lossyear' ); var loss16 = loss . eq ( 16 ). rename ( 'loss16' ); // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ); } var collection = ee .

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Landsat . simpleCloudScore ( cloudy scene ) Create a mask from the cloud score and combine it with the image mask. mask = scored . select ([ 'cloud' ]) . lte ( 20 ) Apply the mask to the image and display the result. masked = cloudy scene . updateMask ( mask ) m . add layer ( masked , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.4 }, 'masked' ) m If you run this example in the Code Editor, try toggling the visibility of the TOA layers to compare the difference between the masked and unmasked imagery. (See the Layer Manager section of the Code Editor docs for instructions on how to do that).
- Landsat . simpleCloudScore ( cloudy scene ); // Create a mask from the cloud score and combine it with the image mask. var mask = scored . select ([ 'cloud' ]). lte ( 20 ); // Apply the mask to the image and display the result. var masked = cloudy scene . updateMask ( mask ); Map . addLayer ( masked , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'masked' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a cloudy Landsat scene and display it. cloudy scene = ee .
- Map () m . set center ( - 122.3578 , 37.7726 , 10 ) m . add layer ( composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 128 }, 'TOA composite' ) m . add layer ( custom composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 128 }, 'Custom TOA composite' , ) m Note that the input to the simple composite is a collection of raw imagery.
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ([ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]); // Make an Array Image, with a 1-D Array per pixel. var arrayImage1D = image . toArray (); // Make an Array Image with a 2-D Array per pixel, 6x1. var arrayImage2D = arrayImage1D . toArray ( 1 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 image, select the bands of interest. image = ee .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ( [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ] ) Make an Array Image, with a 1-D Array per pixel. array image 1d = image . toArray () Make an Array Image with a 2-D Array per pixel, 6x1. array image 2d = array image 1d . toArray ( 1 ) In this example, note that toArray() converts image to an array image in which each pixel is a 1-D vector, the entries of which correspond to the 6 values at the corresponding positions in the bands of image .

