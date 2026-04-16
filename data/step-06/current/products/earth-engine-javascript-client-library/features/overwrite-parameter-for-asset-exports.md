---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.959Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Overwrite parameter for asset exports"
feature_slug: "overwrite-parameter-for-asset-exports"
latest_feature_date: "2025-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
keywords:
  - "overwrite"
  - "parameter"
  - "asset"
  - "exports"
  - "export"
  - "image"
  - "toasset"
  - "table"
---

# Overwrite parameter for asset exports

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

The Export.image.toAsset() and Export.table.toAsset() methods support an overwrite parameter to control replacement of existing destination assets.

## Extended Definition

The Export.image.toAsset() and Export.table.toAsset() methods support an overwrite parameter to control replacement of existing destination assets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The band order of the resulting asset is mixed from the input COGs (e.g. output band 0 is from Tileset 0, while output band 1 is from Tileset 1). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo2' , 'uriPrefix' : 'gs://ee-docs-demos/external image demo/' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'b4b3b2.tif' ] } ] }, { 'id' : '1' , 'sources' : [ { 'uris' : [ 'b5b6b7.tif' ] } ] }, ], 'bands' : [ { 'id' : 'red' , 'tilesetId' : '0' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge3' , 'tilesetId' : '1' , 'tilesetBandIndex' : 2 }, { 'id' : 'rededge2' , 'tilesetId' : '1' , 'tilesetBandIndex' : 1 }, { 'id' : 'green' , 'tilesetId' : '0' , 'tilesetBandIndex' : 1 }, { 'id' : 'blue' , 'tilesetId' : '1' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge1' , 'tilesetId' : '0' , 'tilesetBandIndex' : 2 }, ], }, } pprint ( request ) Details on COG-backed assets Location The Cloud Storage bucket location must be one of: The US multi-region Any US dual-region that includes US-CENTRAL1 The region US-CENTRAL1 Storage class The storage class of the bucket must be "Standard storage".
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- For users with GDAL >= 3.11, the COG driver can produce files without having to worry about creating and preserving overviews. gdal translate in .tif out.tif \ -of COG \ -co OVERVIEWS = IGNORE EXISTING \ -co COMPRESS = ZSTD \ -co LEVEL = 22 \ -co PREDICTOR = 2 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS \ Creating Cloud GeoTiff-Backed Assets using the REST API Note: The REST API contains new and advanced features that may not be suitable for all users.
- However, an image loaded through ee.Image.loadGeoTIFF and added to an image collection will require a read of the GeoTiff for filtering operations on the collection.) To create a COG-backed asset, Place your COG files into a GCS bucket (see below for allowed regions).

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Credentials . from service account file ( KEY ) scoped credentials = credentials . with scopes ( [ 'https://www.googleapis.com/auth/cloud-platform' ]) session = AuthorizedSession ( scoped credentials ) url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT' response = session . get ( url ) from pprint import pprint import json pprint ( json . loads ( response . content )) Serialize a computation Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format.
- Note that the request contains the Expression , which is the serialized computation. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /table:computeFeatures' response = session . post ( url = url . format ( PROJECT ), data = json . dumps ({ 'expression' : serialized }) ) import json pprint ( json . loads ( response . content )) The response contains the resultant FeatureCollection as GeoJSON, which can be consumed by other apps or processes.
- Reducer . mean (). setOutputs ( [ band ] ), scale = image . projection (). nominalScale () ) Print the value to test . print ( computation . first (). get ( band ). getInfo ()) Serialize the expression graph This will create an object that represents the Earth Engine expression graph (specifically, an Expression ).
- Page Summary outlined flag The Earth Engine REST API can be used to apply computations to data and obtain results, as demonstrated by calculating the mean of pixels in an ImageCollection within features of a FeatureCollection.

