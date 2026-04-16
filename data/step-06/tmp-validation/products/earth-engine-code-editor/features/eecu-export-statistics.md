---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.573Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "EECU export statistics"
feature_slug: "eecu-export-statistics"
latest_feature_date: "2022-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/cost_controls"
keywords:
  - "statistics"
  - "eecu"
  - "page"
  - "export"
  - "tasks"
---

# EECU export statistics

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Code Editor and Tasks page now show EECU usage statistics for exports.

## Extended Definition

The Code Editor and Tasks page now show EECU usage statistics for exports.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/cost_controls](https://developers.google.com/earth-engine/guides/cost_controls)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- These long-running tasks are the only mechanism for creating persistent artifacts in Earth Engine and adjacent systems (Google Cloud Storage, Google Drive, etc.), and they fall into two categories: Import and Export .
- For exports, each call to an Export function in the Code Editor will populate an entry in the Unsubmitted tasks section of the Tasks tab.
- To view and cancel multiple tasks in a full-page view (including on mobile clients), use the Tasks page in the Cloud Console .
- Export tasks can be used to execute and write results from the EE computation system (see the guide for exporting data ).

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Point ([ - 123 , 43 ]) ) def apply mean aggregation ( image ): return image . set ( image . reduceRegion ( reducer = 'mean' , geometry = image . geometry (), scale = 30 , maxPixels = int ( 1e9 ), ) ) terrible aggregations = collection . map ( apply mean aggregation ) EEException: Computation timed out. print ( terrible aggregations . getInfo ()) Assuming that the purpose of this code is to get image statistics for each image, one possible solution is to Export the result.
- Code Editor (JavaScript) Export . table . toDrive ({ collection : terribleAggregations , description : 'terribleAggregations' , fileFormat : 'CSV' }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .
- Point ([ 106.91 , 47.91 ])) . map ( function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }) . aside ( Map . addLayer , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'collection' ) . qualityMosaic ( 'nd' ); Map . setCenter ( 106.91 , 47.91 , 11 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 }, 'composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) m = geemap .
- Point ([ - 123 , 43 ])); var terribleAggregations = collection . map ( function ( image ) { return image . set ( image . reduceRegion ({ reducer : 'mean' , geometry : image . geometry (), scale : 30 , maxPixels : 1e9 })); }); // Error: Quota exceeded: Too many concurrent aggregations. print ( terribleAggregations ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .

### Cost controls \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/cost_controls](https://developers.google.com/earth-engine/guides/cost_controls)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This could be useful in the case that you have a set of export tasks which create data for your production service, and you want to be notified if they collectively consume more than a certain amount of EECU-time.
- Recipe: Run a snippet of code in a notebook or local Python shell eecu seconds limit = 50 60 60 # 50 hours print ( "Watching for operations to cancel..." ) while ( True ): for op in ee . data . listOperations (): if op [ 'metadata' ][ 'state' ] == 'RUNNING' : if op [ 'metadata' ] . get ( 'batchEecuUsageSeconds' , 0 ) > eecu seconds limit : print ( f "Cancelling operation { op [ 'name' ] } " ) ee . data . cancelOperation ( op [ 'name' ]) time . sleep ( 10 ) # 10 seconds Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cancel resource-heavy tasks Given a limit, it's possible to use the Earth Engine API to periodically check the list of pending tasks and request cancellation for any running task that exceeds the EECU-seconds limit.
- Daily limits are managed in the Quotas & System Limits page of the Google Cloud console by editing the Earth Engine compute time (EECU-time) per day in seconds quota.

