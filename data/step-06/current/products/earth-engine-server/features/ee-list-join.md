---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.422Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.List.join()"
feature_slug: "ee-list-join"
latest_feature_date: "2018-08-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/charts_datatable"
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
Coverage: LOW

## Step 02 Summary

Concatenates list elements into a joined value.

## Extended Definition

Concatenates list elements into a joined value.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- January 19, 2016 Earth Engine Data Catalog Feature Added EO1/HYPERION : EO-1 Hyperion Hyperspectral Imager January 11, 2016 Earth Engine Code Editor Change ee.Dictionary() can now be called with no arguments or with a list of alternating keys/values.
- Multi-file asset uploads that use "last band" masking mode should now work. ee.Dictionary() can now be called with no arguments or with a list of alternating keys/values.
- Extend Image.constant() to create images with array-valued pixels and to accept ee.List objects to produce multiple bands.
- Change Add ee.List.map() , a method for mapping a function over the elements of ee.List objects.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Filter . intersects ({ leftField : '.geo' , rightField : '.geo' , }) ) }); print ( joined ); Although you should try a join first ( Export if needed), occasionally a filter() within a map() can also be effective, particularly for very large collections. var s2 = ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 L2' ); var joined = ee .
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .
- Reducer . mean (), geometry : feature . geometry (), scale : 500 })). set ({ time : image . date (). millis (), date : image . date (). format () }). copyProperties ( feature ); }); }). flatten (); print ( data . first ()); // Option 3: for-loop (WATCH OUT!) var size = countriesTable . size (); // print(size); // 312 var countriesList = countriesTable . toList ( 1 ); // Adjust size. var data = ee .

### DataTable Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Computed tables typically involve mapping over image collections, reducing elements, and aggregating results into a 2-D ee.List.
- Reducer . mean (), geometry : forest , scale : 500 }); // Extract the reduction results along with the image date. var date = formatDate ( img ); // x-axis values. var evi = stat . get ( 'EVI' ); // y-axis series 1 values. var ndvi = stat . get ( 'NDVI' ); // y-axis series 2 values. // Make a list of observation attributes to define a row in the DataTable. var row = ee .
- The result is // is a feature collection where each feature is a doy representative that // contains a property (row) describing the respective inter-annual NDVI // variance, formatted as a list of values. var reductionTable = comp . map ( function ( img ) { var stats = ee .
- Reducer . first (), geometry : geometry , scale : 250 })); // Order the percentile reduction elements according to how you want columns // in the DataTable arranged (x-axis values need to be first). var row = ee .

