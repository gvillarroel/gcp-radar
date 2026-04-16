---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.067Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.List.distinct()"
feature_slug: "ee-list-distinct"
latest_feature_date: "2019-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/charts_datatable"
keywords:
  - "ee"
  - "list"
  - "distinct"
  - "returns"
  - "unique"
  - "elements"
---

# ee.List.distinct()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Returns the unique elements of a list.

## Extended Definition

Returns the unique elements of a list.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)

## Supporting Pages

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'MODIS/006/MOD44B' ) ok map 2 = collection . map ( lambda image : image . set ( 'date' , image . date ())) print ( ok map 2 . getInfo ()) Get a list of the dates. dates list = ok map 2 . aggregate array ( 'date' ) print ( dates list . getInfo ()) Procedural errors Pattern was applied to an Image with no bands The "Pattern 'my band' was applied to an Image with no bands" error means there is an ee.Image.select() call for an Image with an empty band list.
- ImageCollection ( 'MODIS/006/MOD44B' ); var okMap2 = collection . map ( function ( image ) { return image . set ( 'date' , image . date ()); }); print ( okMap2 ); // Get a list of the dates. var datesList = okMap2 . aggregate array ( 'date' ); print ( datesList ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Image ( 'COPERNICUS/S2 HARMONIZED/20160625T100617 20160625T170310 T33UVR' ) s2image . set ( 'my property' , 'This image is not assigned to a variable' ) This will not result in an error, but will not find 'my property'. display ( s2image . get ( 'my property' )) # None In this example, s2image.set() returns a copy of the image with the new property, but the image stored in the s2image variable is unchanged.
- Debugging methods include inspecting variables and map layers, using aside() to print intermediate values in a chain of calls, running functions on individual elements (especially for mapped functions), and utilizing the profiler to identify resource-intensive operations.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- It also contains a bar object representing the current date. @module Modules/FooModule / / Returns a greeting string. @param {ee.String} arg The name to which the greeting should be addressed @return {ee.String} The complete greeting. / exports . foo = function ( arg ) { return 'Hello, ' + arg + '!
- The search tool is the text box at the top of the Code Editor that says 'Search places and datasets...' Type the name of a data product, sensor, or other keyword into the search bar and click the search button to see a list of matching places, raster and table datasets.
- Click the Palette radio button and specify a custom palette by adding colors ( add ), removing colors ( remove ) or manually entering a comma separated list of hex strings ( edit ) Click Apply to apply the visualization parameters to the current display.

### DataTable Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Computed tables typically involve mapping over image collections, reducing elements, and aggregating results into a 2-D ee.List.
- List ([[ { label : 'Day of year' , role : 'domain' }, { label : 'Median' , role : 'data' }, { label : 'p0' , role : 'interval' }, { label : 'p25' , role : 'interval' }, { label : 'p75' , role : 'interval' }, { label : 'p100' , role : 'interval' } ]]); // Concatenate the column header to the table. dataTableServer = columnHeader . cat ( dataTableServer ); // Use 'evaluate' to transfer the server-side table to the client, define the // chart and print it to the console. dataTableServer . evaluate ( function ( dataTableClient ) { var chart = ui .
- Chart ( dataTable ). setChartType ( 'ColumnChart' ). setOptions ({ title : 'State Population (US census, 2010)' , legend : { position : 'none' }, hAxis : { title : 'State' , titleTextStyle : { italic : false , bold : true }}, vAxis : { title : 'Population' , titleTextStyle : { italic : false , bold : true }}, colors : [ '1d6b99' ] }); print ( chart ); Computed DataTable chart A DataTable array can be created from a 2-D ee.List passed from the server to the client via evaluate .
- List ([[ { label : 'Date' , role : 'domain' , type : 'date' }, { label : 'EVI' , role : 'data' , type : 'number' }, { label : 'NDVI' , role : 'data' , type : 'number' } ]]); // Concatenate the column header to the table. dataTableServer = columnHeader . cat ( dataTableServer ); // Use 'evaluate' to transfer the server-side table to the client, define the // chart and print it to the console. dataTableServer . evaluate ( function ( dataTableClient ) { var chart = ui .

