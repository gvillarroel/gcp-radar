---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.586Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Sticky profiler setting"
feature_slug: "sticky-profiler-setting"
latest_feature_date: "2019-01-04"
deprecation_date: "2019-01-04"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "setting"
  - "removed"
  - "sticky"
  - "2019"
  - "deprecated"
  - "profiler"
---

# Sticky profiler setting

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The sticky profiler setting was removed from the profiler UI; deprecated on 2019-01-04.

## Extended Definition

The sticky profiler setting was removed from the profiler UI; deprecated on 2019-01-04.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- JavaScript editor The JavaScript editor will: Format and highlight code as you type Underline code with problems, offer fixes and other hints for correct syntax Autocomplete pairs of quotes, brackets and parentheses Offer code completion hints for Earth Engine functions Above the code editor are buttons for running the script, saving the script, resetting the output map and console, and getting a link to the script.
- The geometry import settings also allow you to change the color with which the layer is displayed, add properties to the layer (if it is imported as a Feature or FeatureCollection ) or rename the layer.
- To configure the way geometries are imported to your script, click the settings icon next to the layer in the Geometry Imports section on the map or in the Imports section of the code editor.
- Interactive tools like the Layer Manager, Inspector tab, Console, and Profiler help with visualizing data, querying map layers, viewing output, and diagnosing script performance issues.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root-2`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'JAXA/ALOS/AW3D30 V1 1' ); Map . centerObject ( sf , 7 ); var image = l8sr . filterBounds ( sf ) . filterDate ( '2019-06-01' , '2019-12-31' ) . first (); image = image . multiply ( 0.0000275 ). subtract ( 0.2 ); // Apply scale factors. var vis = { bands : [ 'SR B4' , 'SR B3' , 'SR B2' ], min : 0 , max : 0.3 }; Map . addLayer ( image , vis , 'image' , false ); var mask = aw3d30 . select ( 'AVE' ). gt ( 300 ); Map . addLayer ( mask , {}, 'mask' , false ); // NO!
- Reducer . mean (), geometry : belgium . geometry (), scale : 30 , maxPixels : 1e10 , }); print ( unnecessaryClip ); Clipping the input images can be skipped entirely, because the region is specified in the reduceRegion() call: Specify the region for the output! var noClipNeeded = l8sr . select ( 'SR B4' ) // Good. . filterBounds ( belgium . geometry ()) // Good. . filterDate ( '2019-01-01' , '2019-12-31' ) // Good. . median () . reduceRegion ({ reducer : ee .
- Point ([ - 122.47555371521855 , 37.76884708376152 ]); var s2 = sentinel2 . filterBounds ( sf ) . filterDate ( '2018-01-01' , '2019-12-31' ); var withDoys = s2 . map ( function ( image ) { var ndvi = image . normalizedDifference ([ 'B4' , 'B8' ]). rename ( 'ndvi' ); var date = image . date (); var doy = date . getRelative ( 'day' , 'year' ); var time = image . metadata ( 'system:time start' ); var doyImage = ee .
- Array ([[ 1 ]])) . arrayCat ( left . neq ( right ), timeAxis ); return array . arrayMask ( mask ); }; var deduped = dedupe ( array ); // Inspect these outputs to confirm that duplicates have been removed. print ( array . reduceRegion ( 'first' , sf , 10 )); print ( deduped . reduceRegion ( 'first' , sf , 10 )); Inspect the printed collections to verify that duplicates have been removed.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterDate ( '2019-06-01' , '2019-06-16' ). mosaic () . set ( 'SENSOR ID' , 'OLI TIRS' ); // Cloud score the mosaic and display the result. var scored mosaic = ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterDate ( '2019-06-01' , '2019-06-16' ) . mosaic () . set ( 'SENSOR ID' , 'OLI TIRS' ) ) Cloud score the mosaic and display the result. scored mosaic = ee .
- Once an RT scene gets reprocessed and categorized as either T1 or T2, it will be removed from the T1 RT collection and the new version will be added to the appropriate collection(s).

