---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.524Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Visualization dialog in the Layer Manager"
feature_slug: "visualization-dialog-in-the-layer-manager"
latest_feature_date: "2015-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/app_engine_examples"
keywords:
  - "visualization"
  - "dialog"
  - "layer"
  - "manager"
  - "includes"
  - "configuring"
  - "display"
  - "settings"
---

# Visualization dialog in the Layer Manager

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Layer Manager includes a Visualization dialog for configuring layer display settings.

## Extended Definition

The Layer Manager includes a Visualization dialog for configuring layer display settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/app_engine_examples](https://developers.google.com/earth-engine/guides/app_engine_examples)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The geometry layer settings tool will be displayed in a dialog box which should look something like Figure 9.
- The Code Editor includes essential elements such as a JavaScript editor, map display, API reference, Script Manager, Console output, Task Manager, interactive map query, search tool, and geometry drawing tools.
- The geometry import settings also allow you to change the color with which the layer is displayed, add properties to the layer (if it is imported as a Feature or FeatureCollection ) or rename the layer.
- Layer Manager Use the Layer Manager in the upper right corner of the map to adjust the display of layers you added to the map.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map . centerObject ( image , 9 ); Map . addLayer ( image , vizParams , 'Landsat 8 false color' ); Observe that the visualization parameters are defined by an object literal, which includes a list of bands to display, a minimum and maximum reflectance value, and a gamma value. (Learn more about Landsat bands here .
- Image ( 'CGIAR/SRTM90 V4' ) . mask (); // Update the NDVI difference mask with the land mask . var maskedDifference = ndviDifference . updateMask ( landMask ); // Display the masked result . var vizParams = { min : - 0.5 , max : 0.5 , palette : [ 'FF0000' , 'FFFFFF' , '0000FF' ]}; Map . setCenter ( - 122.2531 , 37.6295 , 9 ); Map . addLayer ( maskedDifference , vizParams , 'NDVI difference' ); In this example, note that the mask of the NDVI difference is updated by the land mask with updateMask() .
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' ); // Define visualization parameters in an object literal. var vizParams = { bands : [ 'B5' , 'B4' , 'B3' ], min : 0.02 , max : 0.4 , gamma : 1.3 }; // Center the map on the image and display.
- Reducer . mean ()); var vizParams = { bands : [ 'B5 mean' , 'B4 mean' , 'B3 mean' ], min : 0.02 , max : 0.4 }; Map . addLayer ( meanImage , vizParams , 'mean' ); // Load a region in which to compute the mean and display it. var counties = ee .

### App Engine Example Apps \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/app_engine_examples](https://developers.google.com/earth-engine/guides/app_engine_examples)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Server authentication examples showcase basic map display, more complex data visualization, and integration with Cloud Functions.
- The webpage is static (hosted in Cloud Storage ), and displays the hexbin visualization on a map.
- It demonstrates using ee.MapLayerOverlay to add Earth Engine data to the map with a callback function to keep track how many tiles have been loaded. (All of the mapping functionality in this demo can be done with mapids generated on the server, as is done in the server-auth demo). polygon-drawing This example also uses the client authorization flow.
- The example demonstrates functionality to draw a polygon over the map, perform a reduce region with the polygon in Earth Engine, and display the polygon mean. (All of the mapping functionality in this demo can be done with mapids generated on the server, as is done in the server-auth demo). export-to-drive This is a relatively complex example.

