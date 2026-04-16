---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.965Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "getMapId() method"
feature_slug: "getmapid-method"
latest_feature_date: "2023-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
keywords:
  - "getmapid"
  - "method"
  - "available"
  - "ee"
  - "image"
  - "imagecollection"
  - "feature"
  - "featurecollection"
---

# getMapId() method

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

GetMapId() is available on ee.Image, ee.ImageCollection, ee.Feature, and ee.FeatureCollection and matches the Python client.

## Extended Definition

GetMapId() is available on ee.Image, ee.ImageCollection, ee.Feature, and ee.FeatureCollection and matches the Python client.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)

## Supporting Pages

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Earth Engine REST API can be used to apply computations to data and obtain results, as demonstrated by calculating the mean of pixels in an ImageCollection within features of a FeatureCollection.
- This example demonstrates getting the mean of pixels in each image of an ImageCollection in each feature of a FeatureCollection .
- Note that the request contains the Expression , which is the serialized computation. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /table:computeFeatures' response = session . post ( url = url . format ( PROJECT ), data = json . dumps ({ 'expression' : serialized }) ) import json pprint ( json . loads ( response . content )) The response contains the resultant FeatureCollection as GeoJSON, which can be consumed by other apps or processes.
- ImageCollection ( 'MODIS/006/MOD13Q1' ). select ( band ) image = images . first () computation = image . reduceRegions ( collection = maine , reducer = ee .

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- Map . setCenter ( - 122.3578 , 37.7726 , 10 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' ); Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'Custom TOA composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat 5 ImageCollection for a single year. collection = ee .
- This example creates a simple composite using default parameters and compares it to a composite using custom parameters for the cloud score threshold and the percentile: Code Editor (JavaScript) // Load a raw Landsat 5 ImageCollection for a single year. var collection = ee .
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) surface reflectance l4 = ee .

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection (' COPERNICUS / S2 ') collection = collection . filterBounds ( region ) collection = collection . filterDate (' 2020 - 04 - 01 ', ' 2020 - 09 - 01 ') image = collection . median () Serialize the expression graph This will create an object that represents the Earth Engine expression graph (specifically, an Expression ).
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- Import the Image function from the IPython.display module. from IPython.display import Image Image ( image content ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Google Earth Engine Reference Send feedback Image computations with the Earth Engine REST API Stay organized with collections Save and categorize content based on your preferences.

