---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.517Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Uploaded asset descriptions and titles"
feature_slug: "uploaded-asset-descriptions-and-titles"
latest_feature_date: "2016-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/help"
  - "https://developers.google.com/earth-engine/guides/command_line"
keywords:
  - "uploaded"
  - "asset"
  - "descriptions"
  - "titles"
  - "assets"
  - "can"
  - "include"
  - "both"
---

# Uploaded asset descriptions and titles

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Uploaded assets can include both a title and a description.

## Extended Definition

Uploaded assets can include both a title and a description.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/help](https://developers.google.com/earth-engine/help)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The band order of the resulting asset is mixed from the input COGs (e.g. output band 0 is from Tileset 0, while output band 1 is from Tileset 1). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo2' , 'uriPrefix' : 'gs://ee-docs-demos/external image demo/' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'b4b3b2.tif' ] } ] }, { 'id' : '1' , 'sources' : [ { 'uris' : [ 'b5b6b7.tif' ] } ] }, ], 'bands' : [ { 'id' : 'red' , 'tilesetId' : '0' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge3' , 'tilesetId' : '1' , 'tilesetBandIndex' : 2 }, { 'id' : 'rededge2' , 'tilesetId' : '1' , 'tilesetBandIndex' : 1 }, { 'id' : 'green' , 'tilesetId' : '0' , 'tilesetBandIndex' : 1 }, { 'id' : 'blue' , 'tilesetId' : '1' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge1' , 'tilesetId' : '0' , 'tilesetBandIndex' : 2 }, ], }, } pprint ( request ) Details on COG-backed assets Location The Cloud Storage bucket location must be one of: The US multi-region Any US dual-region that includes US-CENTRAL1 The region US-CENTRAL1 Storage class The storage class of the bucket must be "Standard storage".
- When sharing COG-backed assets with collaborators for reading, it is the owner's responsibility to ensure that read access is granted to both the Earth Engine asset and the underlying COG files.
- Sharing COG-backed assets requires granting read access to both the Earth Engine asset and the underlying COG files in Google Cloud Storage by assigning appropriate permissions.
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- Example: earthengine mv projects/my-project/assets/asset id projects/my-project/assets/new asset id project config Preview: setting the project configuration is a Preview feature, so invocations must include the alpha keyword.
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.

### Get help \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/help](https://developers.google.com/earth-engine/help)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Report a bug What kind of bug did you find? (click links to learn more or expand for examples) An API bug : script errors or incorrect results Unexpected or incorrect function result Unfamiliar error Internal error messages Errors not resolved by common debugging methods An unchanged, working script from some time ago, now does NOT work API documentation is missing critical information Issues regarding Data Catalog assets A Code Editor interface bug : UI display and functionality issues Scripts not loading Buttons not working Strange layout Missing page elements Map interaction not working Data Catalog search not working A dataset bug Missing assets Projection issues Unclear dataset descriptions Don't expect any response to bug reports .
- If your script includes imports, share the assets .
- When asking for help, provide a meaningful title, enough information about what you are trying to do, simplify your code, remove unnecessary comments, add a script link, and ensure assets are publicly accessible.
- Make sure your assets are publicly accessible If others cannot run your code and reproduce your results, it will be harder for them to help.

