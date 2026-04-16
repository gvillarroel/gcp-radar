---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.013Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "GeoTIFF internal mask ingestion"
feature_slug: "geotiff-internal-mask-ingestion"
latest_feature_date: "2025-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "geotiff"
  - "internal"
  - "mask"
  - "ingestion"
  - "uploads"
  - "can"
  - "now"
  - "use"
---

# GeoTIFF internal mask ingestion

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

GeoTIFF uploads and ingestion can now use internal binary masks, with explicit mask bands taking precedence when present.

## Extended Definition

GeoTIFF uploads and ingestion can now use internal binary masks, with explicit mask bands taking precedence when present.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds](https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).
- The following gdal translate command will convert a raster into a band-interleaved, zstd-compressed, Cloud Optimized GeoTIFF that will perform well in Earth Engine: gdal translate in .tif out.tif \ -co COPY SRC OVERVIEWS = YES \ -co TILED = YES \ -co BLOCKXSIZE = 512 \ -co BLOCKYSIZE = 512 \ -co COMPRESS = ZSTD \ -co ZSTD LEVEL = 22 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS It may be possible to reduce the output file size further by specifying a predictor ( -co PREDICTOR=2 for integer data types and -co PREDICTOR=3 for floating point data types).
- For users with GDAL >= 3.11, the COG driver can produce files without having to worry about creating and preserving overviews. gdal translate in .tif out.tif \ -of COG \ -co OVERVIEWS = IGNORE EXISTING \ -co COMPRESS = ZSTD \ -co LEVEL = 22 \ -co PREDICTOR = 2 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS \ Creating Cloud GeoTiff-Backed Assets using the REST API Note: The REST API contains new and advanced features that may not be suitable for all users.

### "ee.Algorithms.FMask.matchClouds \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds](https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Expected to contain 1s for shadow pixels and masked pixels everywhere else. btemp Image Brightness temperature image, in Celsius. sceneLow Float The 0.175 percentile brightness temperature of the scene. sceneHigh Float The 0.825 percentile brightness temperature of the scene. neighborhood Integer, default: 50 The neighborhood to pad around each tile.
- Usage Returns ee.Algorithms.FMask.matchClouds(input, cloud, shadow, btemp, sceneLow, sceneHigh, neighborhood ) Image Argument Type Details input Image The scene for which to compute cloud and shadow masks. cloud Image Potential cloud mask image.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.FMask.matchClouds Stay organized with collections Save and categorize content based on your preferences.
- Expected to contain 1s for cloudy pixels and masked pixels everywhere else. shadow Image Potential shadow mask image.

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

