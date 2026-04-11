---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.435Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Reducer.countDistinct()"
feature_slug: "ee-reducer-countdistinct"
latest_feature_date: "2016-07-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/getstarted"
keywords:
  - "ee"
  - "reducer"
  - "countdistinct"
  - "ignores"
  - "masked"
  - "pixels"
  - "when"
  - "counting"
---

# ee.Reducer.countDistinct()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Ignores masked pixels when counting distinct values; Counts the number of distinct values.

## Extended Definition

Ignores masked pixels when counting distinct values; Counts the number of distinct values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Updated ee.Reducer.frequencyHistogram() and ee.Reducer.countDistinct() to ignore masked pixels.
- Added ee.Reducer.firstNonNull() , a reducer that ignores null values and masked pixels.
- November 15, 2016 Earth Engine Data Catalog Feature Added ASTER/AST L1T 003 : ASTER L1T Radiance November 03, 2016 Earth Engine Server Fixed Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
- Fixed a bug where ee.Reducer.group() truncated inputs to integers when used with ee.Collection.reduceColumns() .

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Reducer . mean (), geometry : belgium . geometry (), scale : 30 , maxPixels : 1e10 , }); print ( unnecessaryClip ); Clipping the input images can be skipped entirely, because the region is specified in the reduceRegion() call: Specify the region for the output! var noClipNeeded = l8sr . select ( 'SR B4' ) // Good. . filterBounds ( belgium . geometry ()) // Good. . filterDate ( '2019-01-01' , '2019-12-31' ) // Good. . median () . reduceRegion ({ reducer : ee .
- Reducer . mean (), geometry : belgium . geometry (), // Geometry is specified here. scale : 30 , maxPixels : 1e10 , }); print ( noClipNeeded ); If this computation times out, Export it as in this example .
- As you can see (zoom out), using mask() causes a lot of pixels to become unmasked, pixels that don't belong in the image of interest: var l8sr = ee .
- Combine reducers when needing multiple statistics from a single input to improve efficiency.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Pixels are masked when the mask value is zero.
- Reducer . mean (), geometry : santaClara . geometry (), scale : 30 }); // Print mean NDVI for the region. mean . get ( 'nd mean' ). evaluate ( function ( val ){ print ( 'Santa Clara spring mean NDVI:' , val ); }); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example demonstrates multiple concepts: filtering, mapping, reducing and the use of a cloud mask: Code Editor (JavaScript) // This function gets NDVI from a Landsat 8 image. var addNDVI = function ( image ) { return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ])); }; // This function masks cloudy pixels. var cloudMask = function ( image ) { var clouds = ee .
- Reducer . mean ()); var vizParams = { bands : [ 'B5 mean' , 'B4 mean' , 'B3 mean' ], min : 0.02 , max : 0.4 }; Map . addLayer ( meanImage , vizParams , 'mean' ); // Load a region in which to compute the mean and display it. var counties = ee .

