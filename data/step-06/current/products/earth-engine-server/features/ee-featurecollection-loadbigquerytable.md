---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.406Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.FeatureCollection.loadBigQueryTable"
feature_slug: "ee-featurecollection-loadbigquerytable"
latest_feature_date: "2025-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "ee"
  - "featurecollection"
  - "loadbigquerytable"
  - "this"
  - "algorithm"
  - "reads"
  - "from"
  - "table"
---

# ee.FeatureCollection.loadBigQueryTable

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

This algorithm reads data from a BigQuery table into a feature collection.

## Extended Definition

This algorithm reads data from a BigQuery table into a feature collection.

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
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- April 01, 2025 Earth Engine Data Catalog Feature Added NASA/VIIRS/002/VNP46A2 : VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m Earth Engine Server Feature Added two new algorithms that allow reading data from BigQuery: ee.FeatureCollection.loadBigQueryTable() and ee.FeatureCollection.runBigQuery() .
- Fixed some spurious out-of-memory errors from ImageCollection.combine() , ImageCollection.merge() , FeatureCollection.merge() , and ee.Terrain algorithms.
- August 14, 2018 Earth Engine Data Catalog Feature Added GLIMS/20171027 (no longer available) July 17, 2018 Earth Engine Data Catalog Feature Added CPOM/CryoSat2/ANTARCTICA DEM : CryoSat-2 Antarctica 1km DEM Added OSU/GIMP/2000 ICE OCEAN MASK : Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) Added OSU/GIMP/2000 IMAGERY MOSAIC : 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP) Added OSU/GIMP/DEM : Greenland DEM - Greenland Mapping Project (GIMP) Added OSU/GIMP/ICE VELOCITY OPT : MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2 Added TIGER/2016/Counties : TIGER: US Census Counties 2016 Added TIGER/2016/States : TIGER: US Census States 2016 Added USGS/LIMA/MOSAIC : Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic Added USGS/LIMA/SR : Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) July 10, 2018 Earth Engine Data Catalog Feature Added TRMM/3B43V7 : TRMM 3B43: Monthly Precipitation Estimates July 03, 2018 Earth Engine Data Catalog Feature Added CSP/ERGo/1 0/Global/ALOS CHILI : Global ALOS CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/ALOS landforms : Global ALOS Landforms Added CSP/ERGo/1 0/Global/ALOS mTPI : Global ALOS mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/ALOS topoDiversity : Global ALOS Topographic Diversity Added CSP/ERGo/1 0/Global/SRTM CHILI : Global SRTM CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/Global/SRTM landforms : Global SRTM Landforms Added CSP/ERGo/1 0/Global/SRTM mTPI : Global SRTM mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/Global/SRTM topoDiversity : Global SRTM Topographic Diversity Added CSP/ERGo/1 0/US/CHILI : US NED CHILI (Continuous Heat-Insolation Load Index) Added CSP/ERGo/1 0/US/landforms : US NED Landforms Added CSP/ERGo/1 0/US/lithology : US Lithology Added CSP/ERGo/1 0/US/mTPI : US NED mTPI (Multi-Scale Topographic Position Index) Added CSP/ERGo/1 0/US/physioDiversity : US NED Physiographic Diversity Added CSP/ERGo/1 0/US/physiography : US Physiography Added CSP/ERGo/1 0/US/topoDiversity : US NED Topographic Diversity Added JRC/GHSL/P2016/BUILT LDSMT GLOBE V1 (no longer available) Added JRC/GHSL/P2016/BUILT LDS GLOBE V1 (no longer available) Added JRC/GHSL/P2016/POP GPW GLOBE V1 (no longer available) Added JRC/GHSL/P2016/SMOD POP GLOBE V1 (no longer available) Added UMN/PGC/ArcticDEM/V2/2m (no longer available) Added UMN/PGC/ArcticDEM/V2/5m (no longer available) June 29, 2018 Earth Engine Server Fixed Added optional uniqueLabels parameter to ee.Algorithms.Image.Segmentation algorithms, which forces clusters to have unique IDs.
- November 12, 2024 Earth Engine Data Catalog Feature Added NOAA/CPC/Precipitation : CPC Global Unified Gauge-Based Analysis of Daily Precipitation Added NOAA/CPC/Temperature : CPC Global Unified Temperature Added UCSB-CHG/CHIRTS/DAILY : CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product Added projects/geoscience-aus-cat/assets/ga ls8cls9c gm cyear 3 (no longer available) November 08, 2024 Earth Engine Server Breaking All Cloud Storage reads through the ee.Blob() and ee.Image.loadGeoTIFF() algorithms must now meet the following criteria: The bucket metadata must be accessible (check the storage.buckets.get permission) The bucket must be located in one of: The US multi-region A dual-region including US-CENTRAL1 The US-CENTRAL1 region Any bucket used in the month of October 2024 not meeting the criteria has been automatically allowed for future use.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- FeatureCollection ( 'USDOS/LSIB SIMPLE/2017' ); // Do NOT do this!! var list = table . toList ( table . size ()); print ( list . get ( 13 )); // User memory limit exceeded.
- FeatureCollection ( 'USDOS/LSIB SIMPLE/2017' ); // Do NOT do this! var veryBad = table . map ( function ( f ) { return ee .
- ImageCollection ( "MODIS/006/MOD13A1" ); // MODIS vegetation indices (always use the most recent version). var band = 'NDVI' ; var imagery = mod13a1 . select ( band ); // Option 1: reduceRegions() var testTable = countriesTable . limit ( 1 ); // Do this outside map()s and loops. var data = imagery . map ( function ( image ) { return image . reduceRegions ({ collection : testTable , reducer : ee .
- Don't do this! var badMask = image . mask ( mask ); Map . addLayer ( badMask , vis , 'badMask' ); var goodMask = image . updateMask ( mask ); Map . addLayer ( goodMask , vis , 'goodMask' , false ); Combine reducers If you need multiple statistics (e.g. mean and standard deviation) from a single input (e.g. an image region), it is more efficient to combine reducers.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' ))} ) no problem = some features . filterBounds ( image . geometry ()) . map ( function to map ) display ( no problem ) Profiler The profiler provides information about EECU-time and memory usage (per algorithm and asset) resulting from the computation performed while it's enabled.
- Export . table . toDrive ( collection = terrible aggregations , description = 'terrible aggregations' , fileFormat = 'CSV' , ) task.start() User memory limit exceeded One way your algorithms get parallelized in Earth Engine is by splitting the inputs into tiles, running the same computation separately on each tile, then combining the results.
- ImageCollection ( 'MODIS/006/MOD44B' ) bad map 2 = collection . map ( lambda image : image . date ()) EEException: Collection.map: A mapped algorithm must return a Feature or Image. print ( bad map 2 . getInfo ()) To avoid this, return the input image with a new property set.
- Point ([ - 123 , 43 ]) ) def apply mean aggregation ( image ): return image . set ( image . reduceRegion ( reducer = 'mean' , geometry = image . geometry (), scale = 30 , maxPixels = int ( 1e9 ), ) ) terrible aggregations = collection . map ( apply mean aggregation ) EEException: Computation timed out. print ( terrible aggregations . getInfo ()) Assuming that the purpose of this code is to get image statistics for each image, one possible solution is to Export the result.

