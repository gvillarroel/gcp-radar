---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.261Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.rgbtohsv()"
feature_slug: "ee-image-rgbtohsv"
latest_feature_date: "2015-08-01"
deprecation_date: "2015-08-01"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
keywords:
  - "ee"
  - "image"
  - "rgbtohsv"
  - "converts"
  - "rgb"
  - "imagery"
  - "hsv"
  - "deprecated"
---

# ee.Image.rgbtohsv()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Converts RGB imagery to HSV; deprecated on 2015-08-01.

## Extended Definition

Converts RGB imagery to HSV; deprecated on 2015-08-01.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)

## Supporting Pages

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .
- Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( greennessImage , { min : - 0.1 , max : 0.13 }, 'greenness' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get the result from the 1x1 array in each pixel of the 2-D array image. greenness image = greenness array image . arrayGet ([ 0 , 0 ]) Display the input imagery with the greenness result. m = geemap .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ( [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ] ) Make an Array Image, with a 1-D Array per pixel. array image 1d = image . toArray () Make an Array Image with a 2-D Array per pixel, 6x1. array image 2d = array image 1d . toArray ( 1 ) In this example, note that toArray() converts image to an array image in which each pixel is a 1-D vector, the entries of which correspond to the 6 values at the corresponding positions in the bands of image .
- Image ( coefficients ) . matrixMultiply ( array image 2d ) Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]] ) ) Display the first three bands of the result and the input imagery. viz params = { 'bands' : [ 'brightness' , 'greenness' , 'wetness' ], 'min' : - 0.1 , 'max' : [ 0.5 , 0.1 , 0.1 ], } m = geemap .

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Specifically, this example demonstrates getting a median composite of Sentinel-2 imagery in a small region.
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- ImageCollection (' COPERNICUS / S2 ') collection = collection . filterBounds ( region ) collection = collection . filterDate (' 2020 - 04 - 01 ', ' 2020 - 09 - 01 ') image = collection . median () Serialize the expression graph This will create an object that represents the Earth Engine expression graph (specifically, an Expression ).
- Import the Image function from the IPython.display module. from IPython.display import Image Image ( image content ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Exporting images as they appear in the Code Editor To export imagery as rendered on screen in Earth Engine, create visualization images as demonstrated in the Visualization images and the Compositing and Mosaicking sections.
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .
- Export . image . toAsset ({ image : band4 , description : 'imageToAssetExample' , assetId : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry , pyramidingPolicy : { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get band 4 from the Landsat image, copy it. band 4 = ( landsat . select ( 'B4' ) . rename ( 'b4 mean' ) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 sample' )) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 max' )) ) Export the image to an Earth Engine asset. task = ee . batch .
- Code Editor (JavaScript) // Retrieve the projection information from a band of the original image. // Call getInfo() on the projection to request a client-side object containing // the crs and transform information needed for the client-side Export function. var projection = landsat . select ( 'B2' ). projection (). getInfo (); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Retrieve the projection information from a band of the original image.

