---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.458Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Image.reduceRegion"
feature_slug: "image-reduceregion"
latest_feature_date: "2013-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
keywords:
  - "image"
  - "reduceregion"
  - "applies"
  - "reducer"
  - "to"
  - "all"
  - "pixels"
  - "in"
---

# Image.reduceRegion

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Applies a reducer to all pixels in a specified region.

## Extended Definition

Applies a reducer to all pixels in a specified region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Added Image.reduceRegion() which applies a reducer to all the pixels in a specific region.
- April 26, 2016 Earth Engine Data Catalog Feature Added GLCF/GLS TCC (no longer available) Added GLCF/GLS WATER : GLCF: Landsat Global Inland Water April 12, 2016 Earth Engine Data Catalog Feature Added SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL : Planet SkySat Public Ortho Imagery, Multispectral Added SKYSAT/GEN-A/PUBLIC/ORTHO/RGB : Planet SkySat Public Ortho Imagery, RGB April 08, 2016 Earth Engine Server Feature Added Image.reduceResolution , an algorithm to generate pixels in a (usually lower-resolution) output projection.
- November 15, 2016 Earth Engine Data Catalog Feature Added ASTER/AST L1T 003 : ASTER L1T Radiance November 03, 2016 Earth Engine Server Fixed Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
- Changed ImageCollection.getRegion() , Image.reduceToVectors() , Image.reduceRegion() , and Image.reduceRegions() to also accept a Projection , to provide more control over the projection to work in.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rectangle ([ - 180 , - 90 , 180 , 90 ], null , false ), scale : 100 , }); // Error: Image.reduceRegion: Too many pixels in the region. // Found 80300348117, but only 10000000 allowed. print ( absurdComputation ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) absurd computation = ee .
- Point ([ - 123 , 43 ])); var terribleAggregations = collection . map ( function ( image ) { return image . set ( image . reduceRegion ({ reducer : 'mean' , geometry : image . geometry (), scale : 30 , maxPixels : 1e9 })); }); // Error: Quota exceeded: Too many concurrent aggregations. print ( terribleAggregations ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) collection = ee .
- Point ([ - 123 , 43 ]) ) def apply mean aggregation ( image ): return image . set ( image . reduceRegion ( reducer = 'mean' , geometry = image . geometry (), scale = 30 , maxPixels = int ( 1e9 ), ) ) terrible aggregations = collection . map ( apply mean aggregation ) EEException: Computation timed out. print ( terrible aggregations . getInfo ()) Assuming that the purpose of this code is to get image statistics for each image, one possible solution is to Export the result.
- Rectangle ([ - 180 , - 90 , 180 , 90 ], None , False ), scale = 100 , ) EEException: Image.reduceRegion: Too many pixels in the region.

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This example demonstrates how to use a smaller number of reduceRegions calls (a few hundred) rather than tens of thousands of reduceRegion calls (the typical approach for mapping a function over a collection).
- Demo: using reduceRegions In some cases, it's possible to use reduceRegions to get as much parallelism as possible from the Earth Engine processing infrastructure.
- ImageCollection ( 'MODIS/061/MOD11A1' ); // Find the max day and night temperatures per pixel for a given time. var maxTemp = mod11a1 . select ([ 'LST Day 1km' , 'LST Night 1km' ]) . filterDate ( '2023-05-15' , '2023-05-25' ) . max (); // Annotate each state with its max day/night temperatures. var annotatedStates = states . map ( function ( e ) { var dict = maxTemp . reduceRegion ({ reducer : ee .
- Example workflows include: Performing large BigQuery joins on data generated in Earth Engine Annotating vector data with statistics derived from imagery for further processing in BigQuery Periodically exporting data from Earth Engine into an appendable BigQuery table If you have other great use cases, we'd love to hear about them !

