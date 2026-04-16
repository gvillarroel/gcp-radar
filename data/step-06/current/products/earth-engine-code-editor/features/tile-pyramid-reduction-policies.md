---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.520Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Tile pyramid reduction policies"
feature_slug: "tile-pyramid-reduction-policies"
latest_feature_date: "2016-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/charts_datatable"
keywords:
  - "tile"
  - "pyramid"
  - "reduction"
  - "policies"
  - "ingested"
  - "assets"
  - "can"
  - "use"
---

# Tile pyramid reduction policies

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Ingested assets can use MIN, MAX, or MODE when generating tile pyramids.

## Extended Definition

Ingested assets can use MIN, MAX, or MODE when generating tile pyramids.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- This will control how Earth Engine generates the pyramid of lower-resolution versions of your image: earthengine upload image --asset id=projects/my-project/assets/asset id --pyramiding policy=sample gs://bucket/image.tif You can use the --last band alpha to indicate that the mask for the image should be taken from an alpha channel in the last band: earthengine upload image --asset id=projects/my-project/assets/asset id --last band alpha gs://bucket/image.tif You can specify a no-data value using the --nodata value flag.
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.
- You can specify the pyramid reduction policy using the --pyramiding policy flag, which can be set to one of mean (the default), sample , mode , min , or max .

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The band order of the resulting asset is mixed from the input COGs (e.g. output band 0 is from Tileset 0, while output band 1 is from Tileset 1). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo2' , 'uriPrefix' : 'gs://ee-docs-demos/external image demo/' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'b4b3b2.tif' ] } ] }, { 'id' : '1' , 'sources' : [ { 'uris' : [ 'b5b6b7.tif' ] } ] }, ], 'bands' : [ { 'id' : 'red' , 'tilesetId' : '0' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge3' , 'tilesetId' : '1' , 'tilesetBandIndex' : 2 }, { 'id' : 'rededge2' , 'tilesetId' : '1' , 'tilesetBandIndex' : 1 }, { 'id' : 'green' , 'tilesetId' : '0' , 'tilesetBandIndex' : 1 }, { 'id' : 'blue' , 'tilesetId' : '1' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge1' , 'tilesetId' : '0' , 'tilesetBandIndex' : 2 }, ], }, } pprint ( request ) Details on COG-backed assets Location The Cloud Storage bucket location must be one of: The US multi-region Any US dual-region that includes US-CENTRAL1 The region US-CENTRAL1 Storage class The storage class of the bucket must be "Standard storage".
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- The performance of COG-backed assets is comparable to that of ingested assets in typical use cases.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).

### DataTable Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reducer . first (), geometry : geometry , scale : 250 })); // Order the percentile reduction elements according to how you want columns // in the DataTable arranged (x-axis values need to be first). var row = ee .
- List ([ img . get ( 'doy' ), // x-axis, day of year. stats . get ( band + ' p50' ), // y-axis, median. stats . get ( band + ' p0' ), // y-axis, min interval. stats . get ( band + ' p25' ), // y-axis, 1st quartile interval. stats . get ( band + ' p75' ), // y-axis, 3rd quartile interval. stats . get ( band + ' p100' ) // y-axis, max interval. ]); // Return the row as a property of an ee.Feature. return ee .
- Reducer . mean (), geometry : forest , scale : 500 }); // Extract the reduction results along with the image date. var date = formatDate ( img ); // x-axis values. var evi = stat . get ( 'EVI' ); // y-axis series 1 values. var ndvi = stat . get ( 'NDVI' ); // y-axis series 2 values. // Make a list of observation attributes to define a row in the DataTable. var row = ee .
- String ( 'Date(' ). cat ( millis ). cat ( ')' ); } // Build a feature collection where each feature has a property that represents // a DataFrame row. var reductionTable = vegIndices . map ( function ( img ) { // Reduce the image to the mean of pixels intersecting the forest ecoregion. var stat = img . reduceRegion ( { reducer : ee .

