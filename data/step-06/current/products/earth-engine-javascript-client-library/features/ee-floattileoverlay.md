---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.977Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "ee.FloatTileOverlay"
feature_slug: "ee-floattileoverlay"
latest_feature_date: "2016-09-29"
deprecation_date: "2016-09-29"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "ee"
  - "floattileoverlay"
  - "legacy"
  - "float"
  - "tile"
  - "overlay"
  - "class"
  - "was"
---

# ee.FloatTileOverlay

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

The legacy float tile overlay class was deprecated and replaced by newer layer overlays; deprecated on 2016-09-29.

## Extended Definition

The legacy float tile overlay class was deprecated and replaced by newer layer overlays; deprecated on 2016-09-29.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The band order of the resulting asset is mixed from the input COGs (e.g. output band 0 is from Tileset 0, while output band 1 is from Tileset 1). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo2' , 'uriPrefix' : 'gs://ee-docs-demos/external image demo/' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'b4b3b2.tif' ] } ] }, { 'id' : '1' , 'sources' : [ { 'uris' : [ 'b5b6b7.tif' ] } ] }, ], 'bands' : [ { 'id' : 'red' , 'tilesetId' : '0' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge3' , 'tilesetId' : '1' , 'tilesetBandIndex' : 2 }, { 'id' : 'rededge2' , 'tilesetId' : '1' , 'tilesetBandIndex' : 1 }, { 'id' : 'green' , 'tilesetId' : '0' , 'tilesetBandIndex' : 1 }, { 'id' : 'blue' , 'tilesetId' : '1' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge1' , 'tilesetId' : '0' , 'tilesetBandIndex' : 2 }, ], }, } pprint ( request ) Details on COG-backed assets Location The Cloud Storage bucket location must be one of: The US multi-region Any US dual-region that includes US-CENTRAL1 The region US-CENTRAL1 Storage class The storage class of the bucket must be "Standard storage".
- The following gdal translate command will convert a raster into a band-interleaved, zstd-compressed, Cloud Optimized GeoTIFF that will perform well in Earth Engine: gdal translate in .tif out.tif \ -co COPY SRC OVERVIEWS = YES \ -co TILED = YES \ -co BLOCKXSIZE = 512 \ -co BLOCKYSIZE = 512 \ -co COMPRESS = ZSTD \ -co ZSTD LEVEL = 22 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS It may be possible to reduce the output file size further by specifying a predictor ( -co PREDICTOR=2 for integer data types and -co PREDICTOR=3 for floating point data types).
- COGs must be properly configured (tiled, with IFDs at the beginning) and storage location/class requirements are outlined.
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- This example creates a simple composite using default parameters and compares it to a composite using custom parameters for the cloud score threshold and the percentile: Code Editor (JavaScript) // Load a raw Landsat 5 ImageCollection for a single year. var collection = ee .
- Landsat . simpleComposite ( collection ); // Create a cloud-free composite with custom parameters for // cloud score threshold and percentile. var customComposite = ee .
- Landsat . simpleComposite ( collection ) Create a cloud-free composite with custom parameters for cloud score threshold and percentile. custom composite = ee .
- Landsat . simpleComposite ( collection = collection , percentile = 75 , cloudScoreRange = 5 ) Display the composites. m = geemap .

