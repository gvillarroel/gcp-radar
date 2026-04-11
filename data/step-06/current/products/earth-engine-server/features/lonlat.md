---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.459Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "LonLat"
feature_slug: "lonlat"
latest_feature_date: "2013-01-31"
deprecation_date: "2013-01-31"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions"
keywords:
  - "lonlat"
  - "renamed"
  - "to"
  - "image"
  - "pixellonlat"
  - "for"
  - "generating"
  - "pixel"
---

# LonLat

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Renamed to Image.pixelLonLat for generating pixel longitude and latitude values; deprecated on 2013-01-31.

## Extended Definition

Renamed to Image.pixelLonLat for generating pixel longitude and latitude values; deprecated on 2013-01-31.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Server Deprecated Renamed LonLat() to Image.pixelLonLat() .
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- Earth Engine Server Fixed Added ee.Model.fromAiPlatformPredictor() , which returns an ee.Model from a description of an AI Platform prediction model, and an ee.Model.predictImage() algorithm, which makes predictions from pixel tiles of an image.
- Earth Engine Server Feature Added ee.Image.directionalDistanceTransform() , which calculates the distance to non-zero pixels in a given direction.

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ([ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]); // Make an Array Image, with a 1-D Array per pixel. var arrayImage1D = image . toArray (); // Make an Array Image with a 2-D Array per pixel, 6x1. var arrayImage2D = arrayImage1D . toArray ( 1 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 image, select the bands of interest. image = ee .
- Key actions include: creating a TC coefficient array; confirming its dimensions using length(); extracting a sub-matrix (e.g., 'greenness') using slice(); converting multi-band Landsat images into Array Images with toArray() for per-pixel band value arrays; performing matrix multiplication; casting to regular, single band images with arrayGet(), and using arrayProject() and arrayFlatten() for multi band array images.\n"]]
- For display purposes, convert to a regular, one-band image with arrayGet() : Code Editor (JavaScript) // Get the result from the 1x1 array in each pixel of the 2-D array image. var greennessImage = greennessArrayImage . arrayGet ([ 0 , 0 ]); // Display the input imagery with the greenness result.
- To perform 2-D only operations such as matrix multiplication, convert it into a 2-D array per-pixel image with toArray(1) .

### Image Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Input options for predictImage() include parameters to specify input bands/properties ( inputProperties , inputTypeOverride , inputShapes ) and control image tiling ( inputTileSize , inputOverlapSize , outputTileSize ). outputBands allows specifying the pixel type and dimensions of the output bands from the prediction.
- For example if you are computing "slope" by mapping the ee.Terrain.slope function over a collection you will need to specify the output type of "slope" in our inference inputs like so: inputTypeOverride = { "slope" : { "type" : "PixelType" , "precision" : "float" , "dimensions" : 0 , "min" : - 100.0 , "max" : 100.0 } } TIP: If you encounter the error message that a band or property "cannot be converted to a tensor," a possible solution is to use a type override to force the input to a given type. inputShapes inputShapes is a dictionary of band names and array-pixel shape.
- For example, to encode three bands, (1) "ndvi series" as a 1D time series with 12 values, (2) "temp" as a scalar, and (3) "patch" as a 2D pixel array, use the following: inputShapes = { "ndvi series" : [ 12 ], # 12 ndvi samples "temp" : [], # scalar "patch" : [ 2 , 2 ], # 2px 2px patch } outputBands outputBands is a dictionary of output band names to an object containing the ee.PixelType and dimensions of the band.
- Page Summary outlined flag Earth Engine's ee.Model connects to Vertex AI to send image or table data for online predictions, returning results as Earth Engine images or tables. model.predictImage() is used to perform inference on an ee.Image by sending image patches to a hosted model, with the output being an ee.Image .

