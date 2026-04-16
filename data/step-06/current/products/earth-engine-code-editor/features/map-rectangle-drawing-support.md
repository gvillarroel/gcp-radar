---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.507Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Map rectangle drawing support"
feature_slug: "map-rectangle-drawing-support"
latest_feature_date: "2019-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/classification"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "map"
  - "rectangle"
  - "drawing"
  - "tools"
  - "can"
  - "now"
  - "draw"
  - "rectangles"
---

# Map rectangle drawing support

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The map drawing tools can now draw rectangles in addition to points, lines, and polygons.

## Extended Definition

The map drawing tools can now draw rectangles in addition to points, lines, and polygons.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For drawing points, use the placemark icon , for drawing lines, use the line icon , for drawing polygons, use the polygon icon , for drawing rectangles use the rectangle icon . (Note that rectangles are planar geometries, so they cannot be placed on a layer with geodesic geometries like lines and polygons.) Using any of the drawing tools will automatically create a new geometry layer and add an import for that layer to the Imports section.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- The Code Editor includes essential elements such as a JavaScript editor, map display, API reference, Script Manager, Console output, Task Manager, interactive map query, search tool, and geometry drawing tools.
- To create geometries, use the geometry drawing tools in the upper left corner of the map display (Figure 8).

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root-2`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To collect training data interactively in Earth Engine, you can use the geometry drawing tools (see the geometry tools section of the Code Editor page ).
- Rectangle ( - 62.6788 , - 9.044 , - 62.6459 , - 8.9986 ); // Make a FeatureCollection from the hand-made geometries. var polygons = ee .
- Rectangle ( - 62.6788 , - 9.044 , - 62.6459 , - 8.9986 ) Make a FeatureCollection from the hand-made geometries. polygons = ee .
- Rectangle ( - 62.8161 , - 9.5001 , - 62.7921 , - 9.4486 ); var nonForest2 = ee .

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

