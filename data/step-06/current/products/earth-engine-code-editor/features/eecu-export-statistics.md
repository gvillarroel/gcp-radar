---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.488Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "EECU export statistics"
feature_slug: "eecu-export-statistics"
latest_feature_date: "2022-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/cost_controls"
  - "https://developers.google.com/earth-engine/guides/playground"
keywords:
  - "eecu"
  - "export"
  - "statistics"
  - "code"
  - "editor"
  - "tasks"
  - "page"
  - "now"
---

# EECU export statistics

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Code Editor and Tasks page now show EECU usage statistics for exports.

## Extended Definition

The Code Editor and Tasks page now show EECU usage statistics for exports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/cost_controls](https://developers.google.com/earth-engine/guides/cost_controls)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)

## Supporting Pages

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code Editor (JavaScript) Export . table . toDrive ({ collection : terribleAggregations , description : 'terribleAggregations' , fileFormat : 'CSV' }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .
- Code Editor (JavaScript) s2image = s2image . set ( 'myProperty' , 'OK' ); print ( s2image . get ( 'myProperty' )); // OK Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) s2image = s2image . set ( 'my property' , 'OK' ) display ( s2image . get ( 'my property' )) # OK Mapped functions Another context in which client and server functions don't mix is in mapped functions.
- Point ([ - 123 , 43 ]) ) def apply mean aggregation ( image ): return image . set ( image . reduceRegion ( reducer = 'mean' , geometry = image . geometry (), scale = 30 , maxPixels = int ( 1e9 ), ) ) terrible aggregations = collection . map ( apply mean aggregation ) EEException: Computation timed out. print ( terrible aggregations . getInfo ()) Assuming that the purpose of this code is to get image statistics for each image, one possible solution is to Export the result.
- Code Editor (JavaScript) Map . addLayer ( image . add ( 2 )); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .

### Cost controls \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/cost_controls](https://developers.google.com/earth-engine/guides/cost_controls)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Recipe: Run a snippet of code in a notebook or local Python shell eecu seconds limit = 50 60 60 # 50 hours print ( "Watching for operations to cancel..." ) while ( True ): for op in ee . data . listOperations (): if op [ 'metadata' ][ 'state' ] == 'RUNNING' : if op [ 'metadata' ] . get ( 'batchEecuUsageSeconds' , 0 ) > eecu seconds limit : print ( f "Cancelling operation { op [ 'name' ] } " ) ee . data . cancelOperation ( op [ 'name' ]) time . sleep ( 10 ) # 10 seconds Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This could be useful in the case that you have a set of export tasks which create data for your production service, and you want to be notified if they collectively consume more than a certain amount of EECU-time.
- Cancel resource-heavy tasks Given a limit, it's possible to use the Earth Engine API to periodically check the list of pending tasks and request cancellation for any running task that exceeds the EECU-seconds limit.
- Daily limits are managed in the Quotas & System Limits page of the Google Cloud console by editing the Earth Engine compute time (EECU-time) per day in seconds quota.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- For exports, each call to an Export function in the Code Editor will populate an entry in the Unsubmitted tasks section of the Tasks tab.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- Page Summary outlined flag The Earth Engine Code Editor is a web-based IDE for the Earth Engine JavaScript API designed to make geospatial workflows fast and easy.
- This means that Code Editor scripts and Earth Engine Apps can read and store values in the page's URL.

