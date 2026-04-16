---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.486Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Landsat Collection 1"
feature_slug: "landsat-collection-1"
latest_feature_date: "2024-03-13"
deprecation_date: "2024-03-13"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
keywords:
  - "landsat"
  - "collection"
  - "highlighted"
  - "deprecated"
  - "script"
  - "editor"
  - "code"
  - "annotation"
---

# Landsat Collection 1

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Landsat Collection 1 is highlighted as deprecated in the script editor with a code annotation and warning message; deprecated on 2024-03-13.

## Extended Definition

Landsat Collection 1 is highlighted as deprecated in the script editor with a code annotation and warning message; deprecated on 2024-03-13.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- This example creates a simple composite using default parameters and compares it to a composite using custom parameters for the cloud score threshold and the percentile: Code Editor (JavaScript) // Load a raw Landsat 5 ImageCollection for a single year. var collection = ee .
- To apply this algorithm to an Earth Engine mosaic of Landsat scenes, set the SENSOR ID property: Code Editor (JavaScript) // Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. var mosaic = ee .
- Image ( 'LANDSAT/LC08/C02/T1 L2/LC08 044034 20201028' ) The surface reflectance datasets for Collection 2 Landsat 4 through 9 are: Code Editor (JavaScript) var surfaceReflectanceL4 = ee .

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With the same image and features used previously: Code Editor (JavaScript) // Define a function to be mapped over the collection. var functionToMap = function ( feature ) { var dictionary = image . reduceRegion ({ reducer : 'first' , geometry : feature . geometry (), scale : 10 , }); // Debug: print ( dictionary ); return feature . set ({ result : ee .
- Code Editor (JavaScript) Export . table . toDrive ({ collection : terribleAggregations , description : 'terribleAggregations' , fileFormat : 'CSV' }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .
- Code Editor (JavaScript) Export . table . toDrive ({ collection : ee .
- Code Editor (JavaScript) var collection = ee .

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root-2`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code Editor (JavaScript) // Import the example feature collection and subset the grassland feature. var grassland = ee .
- Code Editor (JavaScript) // Import the example feature collection and subset the grassland feature. var grassland = ee .
- Code Editor (JavaScript) // Import the example feature collection and subset the forest feature. var forest = ee .
- Code Editor (JavaScript) // Import the example feature collection. var ecoregions = ee .

