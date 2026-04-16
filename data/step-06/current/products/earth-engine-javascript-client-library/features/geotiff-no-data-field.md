---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.967Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "GeoTIFF no_data field"
feature_slug: "geotiff-no-data-field"
latest_feature_date: "2023-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/apidocs"
keywords:
  - "geotiff"
  - "no"
  - "field"
  - "exports"
  - "javascript"
  - "python"
  - "client"
  - "libraries"
---

# GeoTIFF no_data field

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

GeoTIFF exports support the no_data field in the JavaScript and Python client libraries.

## Extended Definition

GeoTIFF exports support the no_data field in the JavaScript and Python client libraries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).
- The following gdal translate command will convert a raster into a band-interleaved, zstd-compressed, Cloud Optimized GeoTIFF that will perform well in Earth Engine: gdal translate in .tif out.tif \ -co COPY SRC OVERVIEWS = YES \ -co TILED = YES \ -co BLOCKXSIZE = 512 \ -co BLOCKYSIZE = 512 \ -co COMPRESS = ZSTD \ -co ZSTD LEVEL = 22 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS It may be possible to reduce the output file size further by specifying a predictor ( -co PREDICTOR=2 for integer data types and -co PREDICTOR=3 for floating point data types).

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Set a default project for each new Colab session or if the virtual machine expires from inactivity (credentials are not saved across sessions). !earthengine set project my-project Command Reference authenticate Authenticates the command line tool and Python client library to Earth Engine.
- Import the Python client library and call ee.Authenticate() to trigger the authentication flow.
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The following settings can be configured: max concurrent exports , to control the project's maximum batch task parallelism requires the correct permissions For example, to configure a project to only ever allow 10 tasks to run in parallel for the given project: earthengine alpha project config set --max concurrent exports=10 The output displays the updated project configuration, identical to what get returns.

### API Reference \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client Libraries The open source JavaScript and Python Client libraries ( GitHub repo ) translate Earth Engine code into request objects sent to Earth Engine servers.
- The API reference is divided into sections: The Client Libraries section is the API reference for both JavaScript and Python clients.
- The Client Libraries section provides reference for both JavaScript and Python clients.
- Client Libraries (JavaScript and Python) translate code into server requests.

