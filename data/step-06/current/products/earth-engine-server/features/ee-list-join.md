---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.082Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.List.join()"
feature_slug: "ee-list-join"
latest_feature_date: "2018-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/charts_datatable"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "ee"
  - "list"
  - "join"
  - "concatenates"
  - "elements"
  - "into"
  - "joined"
  - "value"
---

# ee.List.join()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Concatenates list elements into a joined value.

## Extended Definition

Concatenates list elements into a joined value.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter . intersects ({ leftField : '.geo' , rightField : '.geo' , }) ) }); print ( joined ); Although you should try a join first ( Export if needed), occasionally a filter() within a map() can also be effective, particularly for very large collections. var s2 = ee .
- To get mean and SD images (for example to normalize the input image), you can turn the values into an image and use regexes to extract means and SDs individually as demonstrated in the example.
- ImageCollection ( 'LANDSAT/LC08/C02/T1 L2' ); var joined = ee .
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .

### DataTable Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Computed tables typically involve mapping over image collections, reducing elements, and aggregating results into a 2-D ee.List.
- Reducer . mean (), geometry : forest , scale : 500 }); // Extract the reduction results along with the image date. var date = formatDate ( img ); // x-axis values. var evi = stat . get ( 'EVI' ); // y-axis series 1 values. var ndvi = stat . get ( 'NDVI' ); // y-axis series 2 values. // Make a list of observation attributes to define a row in the DataTable. var row = ee .
- The result is // is a feature collection where each feature is a doy representative that // contains a property (row) describing the respective inter-annual NDVI // variance, formatted as a list of values. var reductionTable = comp . map ( function ( img ) { var stats = ee .
- Reducer . first (), geometry : geometry , scale : 250 })); // Order the percentile reduction elements according to how you want columns // in the DataTable arranged (x-axis values need to be first). var row = ee .

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Debugging methods include inspecting variables and map layers, using aside() to print intermediate values in a chain of calls, running functions on individual elements (especially for mapped functions), and utilizing the profiler to identify resource-intensive operations.
- ImageCollection ( 'MODIS/006/MOD44B' ) ok map 2 = collection . map ( lambda image : image . set ( 'date' , image . date ())) print ( ok map 2 . getInfo ()) Get a list of the dates. dates list = ok map 2 . aggregate array ( 'date' ) print ( dates list . getInfo ()) Procedural errors Pattern was applied to an Image with no bands The "Pattern 'my band' was applied to an Image with no bands" error means there is an ee.Image.select() call for an Image with an empty band list.
- ImageCollection ( 'MODIS/006/MOD44B' ); var okMap2 = collection . map ( function ( image ) { return image . set ( 'date' , image . date ()); }); print ( okMap2 ); // Get a list of the dates. var datesList = okMap2 . aggregate array ( 'date' ); print ( datesList ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- ImageCollection ( 'MODIS/006/MOD44B' ); // Error: User-defined methods must return a value. var badMap1 = collection . map ( function ( image ) { // Do nothing. }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .

