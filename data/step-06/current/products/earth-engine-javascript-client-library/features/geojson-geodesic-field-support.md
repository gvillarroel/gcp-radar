---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:21.001Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "GeoJSON geodesic field support"
feature_slug: "geojson-geodesic-field-support"
latest_feature_date: "2013-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
keywords:
  - "geojson"
  - "geodesic"
  - "field"
  - "can"
  - "include"
  - "distinguish"
  - "lines"
  - "projected"
---

# GeoJSON geodesic field support

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

GeoJSON can include a geodesic field to distinguish geodesic lines from projected lines.

## Extended Definition

GeoJSON can include a geodesic field to distinguish geodesic lines from projected lines.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)

## Supporting Pages

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- The band order of the resulting asset is mixed from the input COGs (e.g. output band 0 is from Tileset 0, while output band 1 is from Tileset 1). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo2' , 'uriPrefix' : 'gs://ee-docs-demos/external image demo/' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'b4b3b2.tif' ] } ] }, { 'id' : '1' , 'sources' : [ { 'uris' : [ 'b5b6b7.tif' ] } ] }, ], 'bands' : [ { 'id' : 'red' , 'tilesetId' : '0' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge3' , 'tilesetId' : '1' , 'tilesetBandIndex' : 2 }, { 'id' : 'rededge2' , 'tilesetId' : '1' , 'tilesetBandIndex' : 1 }, { 'id' : 'green' , 'tilesetId' : '0' , 'tilesetBandIndex' : 1 }, { 'id' : 'blue' , 'tilesetId' : '1' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge1' , 'tilesetId' : '0' , 'tilesetBandIndex' : 2 }, ], }, } pprint ( request ) Details on COG-backed assets Location The Cloud Storage bucket location must be one of: The US multi-region Any US dual-region that includes US-CENTRAL1 The region US-CENTRAL1 Storage class The storage class of the bucket must be "Standard storage".
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- For optimal performance and compatibility with Earth Engine, COGs should be tiled (512x512 or higher recommended), have IFDs at the beginning, include power of 2 overviews, and use BAND interleave.

