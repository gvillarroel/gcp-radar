---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.435Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Reducer.firstNonNull()"
feature_slug: "ee-reducer-firstnonnull"
latest_feature_date: "2016-07-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/best_practices"
keywords:
  - "ee"
  - "reducer"
  - "firstnonnull"
  - "returns"
  - "the"
  - "first"
  - "value"
  - "that"
---

# ee.Reducer.firstNonNull()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Returns the first value that is not null or masked.

## Extended Definition

Returns the first value that is not null or masked.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Added ee.Reducer.firstNonNull() , a reducer that ignores null values and masked pixels.
- September 08, 2020 Earth Engine Data Catalog Feature Added COPERNICUS/Landcover/100m/Proba-V-C3/Global : Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 August 21, 2020 Earth Engine JavaScript Client Library 0.1.231 Change Changed the object serialization format, so that x.serialize() returns an updated format (which is already used in server requests). ee.Deserializer supports both the new format and the old format.
- November 15, 2016 Earth Engine Data Catalog Feature Added ASTER/AST L1T 003 : ASTER L1T Radiance November 03, 2016 Earth Engine Server Fixed Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
- Earth Engine Python Client Library 0.1.231 Change Changed the object serialization format, so that x.serialize() returns an updated format (which is already used in server requests). ee.Deserializer supports both the new format and the old format.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Point ( - 118.2294 , 34.039 ), { property1 : 200 , property2 : 300 }), ]); // Map the function over the collection. var featureCollection = features . map ( addField ); // Print a selected property of one Feature. print ( featureCollection . first (). get ( 'sum' )); // Print the entire FeatureCollection. print ( featureCollection ); Note the cast to ee.Number required for the property value to be recognized as a number in order to use the add() method).
- Filter . eq ( 'NAME' , 'Santa Clara' )). first ()); Map . addLayer ( santaClara ); // Get the mean of NDVI in the region. var mean = meanImage . select ([ 'nd mean' ]). reduceRegion ({ reducer : ee .
- Reducer . mean (), geometry : santaClara . geometry (), scale : 30 }); // Print mean NDVI for the region. mean . get ( 'nd mean' ). evaluate ( function ( val ){ print ( 'Santa Clara spring mean NDVI:' , val ); }); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The lowercase image means that a variable named image refers to an instance of the ee.Image class. 'Hello world!' JavaScript Printing out information to the console is a basic task for getting information about an object, displaying the numeric result of a computation, displaying object metadata or helping with debugging.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Array ([[ 1 ]])) . arrayCat ( left . neq ( right ), timeAxis ); return array . arrayMask ( mask ); }; var deduped = dedupe ( array ); // Inspect these outputs to confirm that duplicates have been removed. print ( array . reduceRegion ( 'first' , sf , 10 )); print ( deduped . reduceRegion ( 'first' , sf , 10 )); Inspect the printed collections to verify that duplicates have been removed.
- Reducer . mean (), geometry : feature . geometry (), scale : 500 })). set ({ time : image . date (). millis (), date : image . date (). format () }). copyProperties ( feature ); })); data = data . merge ( fc ); } print ( data . first ()); Note that the first() thing from each collection is printed, for debugging purposes.
- Don't use a complex collection as the region for a reducer If you need to do a spatial reduction such that the reducer pools inputs from multiple regions in a FeatureCollection , don't supply featureCollection.geometry() as the geometry input to the reducer.
- The safer way is to use filter() : Use filter() ! print(table.filter(ee.Filter.eq('country na', 'Niger')).first()); Note that you should use filters as early as possible in your analysis .

