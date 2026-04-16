---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.244Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.date()"
feature_slug: "ee-image-date"
latest_feature_date: "2015-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/guides/arrays_array_images"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions"
keywords:
  - "ee"
  - "image"
  - "date"
  - "returns"
  - "acquisition"
  - "time"
---

# ee.Image.date()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Returns an image's acquisition time as an ee.Date.

## Extended Definition

Returns an image's acquisition time as an ee.Date.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)

## Supporting Pages

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reducer . mean (), scale : 500 , xProperty : 'system:time start' }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Date for Forest' , hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], curveType : 'function' }); print ( chart ); ui.Chart.image.seriesByRegion Use ui.Chart.image.seriesByRegion to display a single image band time series for multiple regions; each region is presented as a unique series.
- Reducer . mean (), scale : 500 , seriesProperty : 'label' , xProperty : 'system:time start' }) . setOptions ({ title : 'Average NDVI Value by Date' , hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'NDVI (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'f0af07' , '0f8755' , '76b349' ], }); print ( chart ); ui.Chart.image.doySeries Use ui.Chart.image.doySeries to display a day-of-year time series for a given region; each image band is presented as a unique series.
- Examples in the following sections use ee.Reducer.mean() as the argument for both of these parameters. ui.Chart.image.series Image date is plotted along the x-axis according to the system:time start property.
- Y-axis values are the reduction of images, by date, for a single image band. ui.Chart.image.doySeries Image day-of-year is plotted along the x-axis according to the system:time start property.

### Arrays and Array Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_array_images](https://developers.google.com/earth-engine/guides/arrays_array_images)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ([ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]); // Make an Array Image, with a 1-D Array per pixel. var arrayImage1D = image . toArray (); // Make an Array Image with a 2-D Array per pixel, 6x1. var arrayImage2D = arrayImage1D . toArray ( 1 ); // Do a matrix multiplication: 6x6 times 6x1. var componentsImage = ee .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ) . select ( [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ] ) Make an Array Image, with a 1-D Array per pixel. array image 1d = image . toArray () Make an Array Image with a 2-D Array per pixel, 6x1. array image 2d = array image 1d . toArray ( 1 ) Do a matrix multiplication: 6x6 times 6x1. components image = ( ee .
- Using the 2-D array image, left multiply by an image where each pixel contains a 2-D matrix of greenness coefficients: Code Editor (JavaScript) // Do a matrix multiplication: 1x6 times 6x1. // Cast the greenness Array to an Image prior to multiplication. var greennessArrayImage = ee .
- Image ( greenness ). matrixMultiply ( arrayImage2D ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Do a matrix multiplication: 1x6 times 6x1.

### Image Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- Source ID: `site-docs-root-2`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-14 UTC."],[],[]]
- For example, to encode three bands, (1) "ndvi series" as a 1D time series with 12 values, (2) "temp" as a scalar, and (3) "patch" as a 2D pixel array, use the following: inputShapes = { "ndvi series" : [ 12 ], # 12 ndvi samples "temp" : [], # scalar "patch" : [ 2 , 2 ], # 2px 2px patch } outputBands outputBands is a dictionary of output band names to an object containing the ee.PixelType and dimensions of the band.
- Page Summary outlined flag Earth Engine's ee.Model connects to Vertex AI to send image or table data for online predictions, returning results as Earth Engine images or tables. model.predictImage() is used to perform inference on an ee.Image by sending image patches to a hosted model, with the output being an ee.Image .
- Input options for predictImage() include parameters to specify input bands/properties ( inputProperties , inputTypeOverride , inputShapes ) and control image tiling ( inputTileSize , inputOverlapSize , outputTileSize ). outputBands allows specifying the pixel type and dimensions of the output bands from the prediction.

