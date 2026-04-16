---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.128Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image upload mask band support"
feature_slug: "image-upload-mask-band-support"
latest_feature_date: "2016-11-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/exporting_images"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
keywords:
  - "image"
  - "upload"
  - "mask"
  - "band"
  - "allows"
  - "uploaded"
  - "images"
  - "use"
---

# Image upload mask band support

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Allows uploaded images to use mask bands with types other than byte.

## Extended Definition

Allows uploaded images to use mask bands with types other than byte.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)

## Supporting Pages

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, Landsat images provided by USGS use translation parameters that are offset by a 1/2 pixel from the projection's origin (15m offset for the 30m bands) while Sentinel-2 images provided by ESA use translation parameters that are aligned with the projection's origin.
- Page Summary outlined flag Earth Engine allows exporting images in GeoTIFF or TFRecord format with various configuration options.
- See uploading images as TFRecord files for details.
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This will control how Earth Engine generates the pyramid of lower-resolution versions of your image: earthengine upload image --asset id=projects/my-project/assets/asset id --pyramiding policy=sample gs://bucket/image.tif You can use the --last band alpha to indicate that the mask for the image should be taken from an alpha channel in the last band: earthengine upload image --asset id=projects/my-project/assets/asset id --last band alpha gs://bucket/image.tif You can specify a no-data value using the --nodata value flag.
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Key actions include: creating a TC coefficient array; confirming its dimensions using length(); extracting a sub-matrix (e.g., 'greenness') using slice(); converting multi-band Landsat images into Array Images with toArray() for per-pixel band value arrays; performing matrix multiplication; casting to regular, single band images with arrayGet(), and using arrayProject() and arrayFlatten() for multi band array images.\n"]]
- Array Images To get a greenness image, matrix multiply the bands of a Landsat 8 image by the greenness matrix.
- Array images can be created from multi-band images, where each pixel is an array of band values.
- Image ( coefficients ) . matrixMultiply ( arrayImage2D ) // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ( [[ 'brightness' , 'greenness' , 'wetness' , 'fourth' , 'fifth' , 'sixth' ]]); // Display the first three bands of the result and the input imagery. var vizParams = { bands : [ 'brightness' , 'greenness' , 'wetness' ], min : - 0.1 , max : [ 0.5 , 0.1 , 0.1 ] }; Map . setCenter ( - 122.3 , 37.562 , 10 ); Map . addLayer ( image , { bands : [ 'B5' , 'B4' , 'B3' ], min : 0 , max : 0.5 }, 'image' ); Map . addLayer ( componentsImage , vizParams , 'components' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define an Array of Tasseled Cap coefficients. coefficients = ee .

