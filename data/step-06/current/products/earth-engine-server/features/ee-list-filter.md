---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.081Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.List.filter()"
feature_slug: "ee-list-filter"
latest_feature_date: "2018-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/charts_array"
keywords:
  - "ee"
  - "list"
  - "filter"
  - "filters"
  - "elements"
  - "predicate"
---

# ee.List.filter()

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Filters list elements using a predicate.

## Extended Definition

Filters list elements using a predicate.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)

## Supporting Pages

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Filter . eq ( 'country na' , 'Chad' ))); As shown in this tutorial , a functional programming approach using filters is the correct way to apply one logic to some elements of a collection and another logic to the other elements of the collection.
- Unless you need random access to collection elements (i.e. you need to get the i'th element of a collection), use filters on the collection to access individual collection elements.
- The following example illustrates the difference between type conversion (not recommended) and filtering (recommended) to access an element in a collection: Don't convert to list unnecessarily! var table = ee .
- The safer way is to use filter() : Use filter() ! print(table.filter(ee.Filter.eq('country na', 'Niger')).first()); Note that you should use filters as early as possible in your analysis .

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'MODIS/006/MOD44B' ) ok map 2 = collection . map ( lambda image : image . set ( 'date' , image . date ())) print ( ok map 2 . getInfo ()) Get a list of the dates. dates list = ok map 2 . aggregate array ( 'date' ) print ( dates list . getInfo ()) Procedural errors Pattern was applied to an Image with no bands The "Pattern 'my band' was applied to an Image with no bands" error means there is an ee.Image.select() call for an Image with an empty band list.
- ImageCollection ( 'MODIS/006/MOD44B' ); var okMap2 = collection . map ( function ( image ) { return image . set ( 'date' , image . date ()); }); print ( okMap2 ); // Get a list of the dates. var datesList = okMap2 . aggregate array ( 'date' ); print ( datesList ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' )) }); }; var noProblem = someFeatures . filterBounds ( image . geometry ()) . map ( functionToMap ); print ( noProblem ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def function to map ( feature ): dictionary = image . reduceRegion ( reducer = ee .
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' ))} ) no problem = some features . filterBounds ( image . geometry ()) . map ( function to map ) display ( no problem ) Profiler The profiler provides information about EECU-time and memory usage (per algorithm and asset) resulting from the computation performed while it's enabled.

### Array and List Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_array](https://developers.google.com/earth-engine/guides/charts_array)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Filter . date ( '2018-06-01' , '2018-09-01' )) . select ( 'sur refl b0[0-7]' ) . mean (); // Reduce MODIS reflectance bands by forest region; get a dictionary with // band names as keys, pixel values as lists. var pixelVals = modisSr . reduceRegion ( { reducer : ee .
- Filter . expression ( 'WRS PATH == 45 && WRS ROW == 30' )); // Reduce image properties to a series of lists; one for each selected property. var propVals = col . reduceColumns ({ reducer : ee .
- Chart . array . values ({ array : elevSort , axis : 0 , xLabels : lonSort }) . setOptions ({ title : 'Elevation Profile Across Longitude' , hAxis : { title : 'Longitude' , viewWindow : { min : - 124.50 , max : - 122.8 }, titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Elevation (m)' , titleTextStyle : { italic : false , bold : true } }, colors : [ '1d6b99' ], lineSize : 5 , pointSize : 0 , legend : { position : 'none' } }); print ( chart ); Apply .setChartType('AreaChart') to add shading under the line: print ( chart . setChartType ( 'AreaChart' )); ee.List metadata scatter plot Collection property reduction by ee.Reducer.toList() produces a dictionary of property value lists, one for each selected property.
- Chart . array . values ({ array : y , axis : 0 , xLabels : x }) . setChartType ( 'ScatterChart' ) . setOptions ({ title : 'Landsat 8 Image Collection Metadata (045030)' , colors : [ '96356f' ], hAxis : { title : 'Cloud cover (%)' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Geometric RMSE (m)' , titleTextStyle : { italic : false , bold : true } }, pointSize : 5 , dataOpacity : 0.6 , legend : { position : 'none' }, }); print ( chart ); ee.List mapped function scatter & line plot Map a function over a list of x values to calculate a corresponding list of y values.

