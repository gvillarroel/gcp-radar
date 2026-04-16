---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.572Z"
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
  - "highlighted"
  - "collection"
  - "annotation"
  - "landsat"
  - "deprecated"
  - "script"
---

# Landsat Collection 1

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Landsat Collection 1 is highlighted as deprecated in the script editor with a code annotation and warning message; deprecated on 2024-03-13.

## Extended Definition

Landsat Collection 1 is highlighted as deprecated in the script editor with a code annotation and warning message; deprecated on 2024-03-13.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.
- ID Description LANDSAT/LC08/C02/T1 RT TOA Landsat 8, Collection 2, Tier 1 + Real Time, TOA LANDSAT/LC08/C02/T1 TOA Landsat 8, Collection 2, Tier 1 only, TOA LANDSAT/LC08/C02/T1 L2 Landsat 8, Collection 2, Tier 1 only, SR and LST LANDSAT/LC08/C02/T2 TOA Landsat 8, Collection 2, Tier 2 only, TOA These data exist for Landsat 4, 5, 7, 8, and 9.
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- Examples for Landsat 8 are as follows: ID Description LANDSAT/LC08/C02/T1 RT Landsat 8, Collection 2, Tier 1 + Real Time LANDSAT/LC08/C02/T1 Landsat 8, Collection 2, Tier 1 only LANDSAT/LC08/C02/T2 Landsat 8, Collection 2, Tier 2 only Newly acquired scenes are added to the T1 RT collection daily.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With the same image and features used previously: Code Editor (JavaScript) // Define a function to be mapped over the collection. var functionToMap = function ( feature ) { var dictionary = image . reduceRegion ({ reducer : 'first' , geometry : feature . geometry (), scale : 10 , }); // Debug: print ( dictionary ); return feature . set ({ result : ee .
- Code Editor (JavaScript) Export . table . toDrive ({ collection : terribleAggregations , description : 'terribleAggregations' , fileFormat : 'CSV' }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .
- Export . table . toDrive ( collection = terrible aggregations , description = 'terrible aggregations' , fileFormat = 'CSV' , ) task.start() User memory limit exceeded One way your algorithms get parallelized in Earth Engine is by splitting the inputs into tiles, running the same computation separately on each tile, then combining the results.
- If you encounter a syntax error, carefully review the highlighted line or error message, and consult resources like the Python Language Reference or Google JavaScript Style Guide .

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Code Editor (JavaScript) // Import the example feature collection and subset the grassland feature. var grassland = ee .
- Code Editor (JavaScript) // Import the example feature collection and subset the grassland feature. var grassland = ee .
- Code Editor (JavaScript) // Import the example feature collection and subset the forest feature. var forest = ee .
- Code Editor (JavaScript) // Import the example feature collection. var ecoregions = ee .

