---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.817Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "skipEmptyTiles for map exports"
feature_slug: "skipemptytiles-for-map-exports"
latest_feature_date: "2016-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "skipemptytiles"
  - "for"
  - "map"
  - "exports"
  - "skips"
  - "writing"
  - "empty"
  - "tiles"
---

# skipEmptyTiles for map exports

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Skips writing empty tiles during map export to Cloud Storage.

## Extended Definition

Skips writing empty tiles during map export to Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Server Fixed Clarified skipEmptyTiles parameter default values for Map exports in Python.
- July 10, 2024 Earth Engine Server Fixed Fixed a bug that caused GeoTIFF exports to ignore skipEmptyTiles if formatOptions.cloudOptimized was true.
- Added an optional skipEmptyTiles argument to Export.map.toCloudStorage() to skip writing empty (fully-transparent) tiles.
- Added an optional skipEmptyTiles argument to Export.map.toCloudStorage() to skip writing empty (fully-transparent) tiles.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Scripts you develop in the Code Editor are sent to Google for processing and the generated map tiles and/or messages are sent back for display in the Map and/or Console tab.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- JavaScript editor The JavaScript editor will: Format and highlight code as you type Underline code with problems, offer fixes and other hints for correct syntax Autocomplete pairs of quotes, brackets and parentheses Offer code completion hints for Earth Engine functions Above the code editor are buttons for running the script, saving the script, resetting the output map and console, and getting a link to the script.
- Click the help button in the upper right of the Code Editor to see links to this Developer's Guide, other help forums, a guided tour of the Code Editor and a list of keyboard shortcuts that help with coding, running code, and displaying data on the Map .

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ImageCollection ( 'MODIS/006/MOD44B' ) ok map 2 = collection . map ( lambda image : image . set ( 'date' , image . date ())) print ( ok map 2 . getInfo ()) Get a list of the dates. dates list = ok map 2 . aggregate array ( 'date' ) print ( dates list . getInfo ()) Procedural errors Pattern was applied to an Image with no bands The "Pattern 'my band' was applied to an Image with no bands" error means there is an ee.Image.select() call for an Image with an empty band list.
- Point ([ - 122.27 , 37.87 ]). buffer ( 1000 ), scale : 1 , bestEffort : true , tileScale : 16 }); print ( smallerHog ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) bands = [ 'B1' , 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ] smaller hog = ( ee .
- Point ([ 106.91 , 47.91 ])) . map ( lambda image : image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ]))) . aside ( m . add layer , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ) ) m . add layer ( composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.3 }, 'composite' ) m Running a function on first() Printing and visualizing are useful for debugging when available, but when you're debugging a function mapped over a collection, then you can't print in the function, as described in the mapped functions section .
- Point ([ 106.91 , 47.91 ])) . map ( function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }) . aside ( Map . addLayer , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ); Map . setCenter ( 106.91 , 47.91 , 11 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .

