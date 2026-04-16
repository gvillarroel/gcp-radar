---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.026Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "GeoTIFF geostationary projection support"
feature_slug: "geotiff-geostationary-projection-support"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "geotiff"
  - "geostationary"
  - "projection"
  - "optimized"
  - "geotiffs"
  - "now"
  - "satellite"
  - "during"
---

# GeoTIFF geostationary projection support

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Cloud Optimized GeoTIFFs now support the geostationary satellite projection during loading and asset creation.

## Extended Definition

Cloud Optimized GeoTIFFs now support the geostationary satellite projection during loading and asset creation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- Run in Google Colab View source on GitHub Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs).
- The following gdal translate command will convert a raster into a band-interleaved, zstd-compressed, Cloud Optimized GeoTIFF that will perform well in Earth Engine: gdal translate in .tif out.tif \ -co COPY SRC OVERVIEWS = YES \ -co TILED = YES \ -co BLOCKXSIZE = 512 \ -co BLOCKYSIZE = 512 \ -co COMPRESS = ZSTD \ -co ZSTD LEVEL = 22 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS It may be possible to reduce the output file size further by specifying a predictor ( -co PREDICTOR=2 for integer data types and -co PREDICTOR=3 for floating point data types).

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Export . image . toDrive ( image = landsat , description = 'imageToCOGeoTiffExample' , crs = projection [ 'crs' ], crsTransform = projection [ 'transform' ], region = geometry , fileFormat = 'GeoTIFF' , formatOptions = { 'cloudOptimized' : True }, ) task . start () Cloud optimized GeoTIFFs can be reloaded from Cloud Storage into an Image .
- Export . image . toDrive ({ image : landsat , description : 'imageToCOGeoTiffExample' , crs : projection . crs , crsTransform : projection . transform , region : geometry , fileFormat : 'GeoTIFF' , formatOptions : { cloudOptimized : true } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Export a cloud-optimized GeoTIFF. task = ee . batch .
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .
- Export . image . toDrive ( image = landsat , description = 'imageNoDataExample' , crs = projection [ 'crs' ], scale = 2000 , # large scale for minimal demo region = landsat . geometry (), # full image bounds fileFormat = 'GeoTIFF' , formatOptions = { 'noData' : no data val }, ) task . start () Note that the nodata value should be inside the valid range for the image's PixelType .

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

