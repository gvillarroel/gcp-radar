---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.491Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Map.addLayer map ID support"
feature_slug: "map-addlayer-map-id-support"
latest_feature_date: "2021-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
keywords:
  - "map"
  - "addlayer"
  - "id"
  - "can"
  - "now"
  - "accept"
  - "ids"
  - "returned"
---

# Map.addLayer map ID support

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Map.addLayer can now accept map IDs returned by ee.Image.getMap() and related sources.

## Extended Definition

Map.addLayer can now accept map IDs returned by ee.Image.getMap() and related sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)

## Supporting Pages

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Point ([ 106.91 , 47.91 ])) . map ( function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }) . aside ( Map . addLayer , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ); Map . setCenter ( 106.91 , 47.91 , 11 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .
- Map . centerObject ( badFeature , 11 ); Map . addLayer ( badFeature , {}, 'bad feature' ); Map . addLayer ( image , { bands : [ 'B4' , 'B3' , 'B2' ], max : 3000 }, 'image' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Define a function to be mapped over the collection. def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .
- Image ( 'USGS/SRTMGL1 003' ); var nonsense = image + 2 ; // You can print this, but it's not what you were hoping for. print ( nonsense ); // Error: g.eeObject.name is not a function Map . addLayer ( nonsense ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Don't mix EE objects and Python objects. image = ee .
- Code Editor (JavaScript) Map . addLayer ( image . add ( 2 )); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

