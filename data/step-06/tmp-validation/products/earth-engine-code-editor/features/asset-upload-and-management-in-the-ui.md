---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.605Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Asset upload and management in the UI"
feature_slug: "asset-upload-and-management-in-the-ui"
latest_feature_date: "2015-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/command_line"
keywords:
  - "management"
  - "uploading"
  - "upload"
  - "supports"
  - "asset"
---

# Asset upload and management in the UI

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Code Editor UI supports uploading and managing assets.

## Extended Definition

The Code Editor UI supports uploading and managing assets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- To create a COG-backed asset, you need to place COG files in a specific GCS bucket location, write an image upload manifest, and use the earthengine command-line utility.
- For more information on setting Earth Engine asset permissions, refer to the Earth Engine asset management guide .
- Run in Google Colab View source on GitHub Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs).

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Use the Asset Manager (Figure 3) to upload and manage your own image assets in Earth Engine.
- Import tasks in the upload phase will show their progress in the Unsubmitted tasks section and automatically submit to the server once the file upload is complete.
- The Code Editor allows importing and managing your own image assets in the Asset Manager, and you can control script execution and appearance when sharing links.
- Import tasks can be used to upload images or upload tables into Earth Engine from a variety of filetypes ( .csv , .tif , etc.).

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- You can learn more about the options for uploading images to Earth Engine in Uploading image assets: Advanced options .
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- This will control how Earth Engine generates the pyramid of lower-resolution versions of your image: earthengine upload image --asset id=projects/my-project/assets/asset id --pyramiding policy=sample gs://bucket/image.tif You can use the --last band alpha to indicate that the mask for the image should be taken from an alpha channel in the last band: earthengine upload image --asset id=projects/my-project/assets/asset id --last band alpha gs://bucket/image.tif You can specify a no-data value using the --nodata value flag.

