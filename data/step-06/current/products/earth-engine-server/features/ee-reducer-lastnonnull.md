---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.430Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Reducer.lastNonNull()"
feature_slug: "ee-reducer-lastnonnull"
latest_feature_date: "2017-10-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "ee"
  - "reducer"
  - "lastnonnull"
  - "returns"
  - "the"
  - "last"
  - "non"
  - "null"
---

# ee.Reducer.lastNonNull()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Returns the last non-null element in a sequence.

## Extended Definition

Returns the last non-null element in a sequence.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- November 14, 2017 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C01/T1 SR (no longer available) November 07, 2017 Earth Engine Data Catalog Feature Added AU/GA/DEM 1SEC/v10/DEM-H : DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model Added AU/GA/DEM 1SEC/v10/DEM-S : DEM-S: Australian Smoothed Digital Elevation Model Added COPERNICUS/S3/OLCI : Sentinel-3 OLCI EFR: Ocean and Land Color Instrument Earth Observation Full Resolution October 26, 2017 Earth Engine Server Feature Added last reducers ee.Reducer.last() and ee.Reducer.lastNonNull() which select the last element.
- January 14, 2020 Earth Engine Data Catalog Feature Added COPERNICUS/CORINE/V20/100m : Copernicus CORINE Land Cover January 09, 2020 Earth Engine Server Feature Added ee.Reducer.countRuns() , which computes the number of runs of distinct, non-null inputs.
- Earth Engine Server Fixed Added ee.Reducer.fixedHistogram() , a reducer which computes a histogram using fixed bins and returns the histogram as an ee.Array with two columns.
- Added ee.Reducer.firstNonNull() , a reducer that ignores null values and masked pixels.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Polygon ( [[[ - 48.86726050085349 , - 3.0475996402515717 ], [ - 48.86726050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.0475996402515717 ]]], null , false ); // Forest loss in 2016, to stratify a sample. var loss = image . select ( 'lossyear' ); var loss16 = loss . eq ( 16 ). rename ( 'loss16' ); // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ); } var collection = ee .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-16 UTC."],[],[]]
- Reducer . mean (), geometry : belgium . geometry (), scale : 30 , maxPixels : 1e10 , }); print ( unnecessaryClip ); Clipping the input images can be skipped entirely, because the region is specified in the reduceRegion() call: Specify the region for the output! var noClipNeeded = l8sr . select ( 'SR B4' ) // Good. . filterBounds ( belgium . geometry ()) // Good. . filterDate ( '2019-01-01' , '2019-12-31' ) // Good. . median () . reduceRegion ({ reducer : ee .
- ImageCollection ( "MODIS/006/MOD13A1" ); // MODIS vegetation indices (always use the most recent version). var band = 'NDVI' ; var imagery = mod13a1 . select ( band ); // Option 1: reduceRegions() var testTable = countriesTable . limit ( 1 ); // Do this outside map()s and loops. var data = imagery . map ( function ( image ) { return image . reduceRegions ({ collection : testTable , reducer : ee .

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Rectangle ([ - 180 , - 90 , 180 , 90 ], null , false ), scale : 100 , }); // Error: Image.reduceRegion: Too many pixels in the region. // Found 80300348117, but only 10000000 allowed. print ( absurdComputation ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) absurd computation = ee .
- Rectangle ([ - 180 , - 90 , 180 , 90 ], None , False ), scale = 100 , ) EEException: Image.reduceRegion: Too many pixels in the region.
- Point ([ - 123 , 43 ])); var terribleAggregations = collection . map ( function ( image ) { return image . set ( image . reduceRegion ({ reducer : 'mean' , geometry : image . geometry (), scale : 30 , maxPixels : 1e9 })); }); // Error: Quota exceeded: Too many concurrent aggregations. print ( terribleAggregations ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-17 UTC."],[],[]]

