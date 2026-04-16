---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.307Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Number cast aliases"
feature_slug: "number-cast-aliases"
latest_feature_date: "2014-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
keywords:
  - "number"
  - "cast"
  - "aliases"
  - "adds"
  - "casting"
  - "match"
  - "image"
  - "helpers"
---

# Number cast aliases

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Adds Number casting aliases that match the Image casting helpers.

## Extended Definition

Adds Number casting aliases that match the Image casting helpers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)

## Supporting Pages

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' )) }); }; var noProblem = someFeatures . filterBounds ( image . geometry ()) . map ( functionToMap ); print ( noProblem ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .
- Image ( 'COPERNICUS/S2 HARMONIZED/20160625T100617 20160625T170310 T33UVR' ); // Error: Image.select: Pattern 'nonBand' did not match any bands. print ( s2image . select ([ 'nonBand' ])); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Sentinel-2 image. s2image = ee .
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' )) }); }); // Error in map(ID=2): // Number.divide: Parameter 'left' is required. print ( problem ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) image = ee .
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' ))} ) no problem = some features . filterBounds ( image . geometry ()) . map ( function to map ) display ( no problem ) Profiler The profiler provides information about EECU-time and memory usage (per algorithm and asset) resulting from the computation performed while it's enabled.

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Key actions include: creating a TC coefficient array; confirming its dimensions using length(); extracting a sub-matrix (e.g., 'greenness') using slice(); converting multi-band Landsat images into Array Images with toArray() for per-pixel band value arrays; performing matrix multiplication; casting to regular, single band images with arrayGet(), and using arrayProject() and arrayFlatten() for multi band array images.\n"]]
- Using the 2-D array image, left multiply by an image where each pixel contains a 2-D matrix of greenness coefficients: Code Editor (JavaScript) // Do a matrix multiplication: 1x6 times 6x1. // Cast the greenness Array to an Image prior to multiplication. var greennessArrayImage = ee .
- Cast the greenness Array to an Image prior to multiplication. greenness array image = ee .
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- You can also set the image's PixelType by casting the data to a specific type using image methods toShort() or toInt() , for example.
- If the crsTransform specified in an export do not match the crsTransform of the original image, the output pixels will be resampled (using nearest neighbor by default), which will make the resulting image be shifted relative to the original image.
- To sum up, if you need to match the exported image's pixels to a specific image, make sure to use the crs and crsTransform parameters for full control of the grid. to Drive To export an image to your Drive account, use Export.image.toDrive() .
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .

