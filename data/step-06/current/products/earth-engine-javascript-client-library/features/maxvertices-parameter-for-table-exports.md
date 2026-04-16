---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.968Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "maxVertices parameter for table exports"
feature_slug: "maxvertices-parameter-for-table-exports"
latest_feature_date: "2021-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
keywords:
  - "maxvertices"
  - "parameter"
  - "table"
  - "exports"
---

# maxVertices parameter for table exports

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

Table exports support a maxVertices parameter.

## Extended Definition

Table exports support a maxVertices parameter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Note that the request contains the Expression , which is the serialized computation. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /table:computeFeatures' response = session . post ( url = url . format ( PROJECT ), data = json . dumps ({ 'expression' : serialized }) ) import json pprint ( json . loads ( response . content )) The response contains the resultant FeatureCollection as GeoJSON, which can be consumed by other apps or processes.
- Home Products Google Earth Engine Reference Send feedback Table computations with the Earth Engine REST API Stay organized with collections Save and categorize content based on your preferences.
- Run in Google Colab View source on GitHub Note: The REST API contains new and advanced features that may not be suitable for all users.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- This example creates a simple composite using default parameters and compares it to a composite using custom parameters for the cloud score threshold and the percentile: Code Editor (JavaScript) // Load a raw Landsat 5 ImageCollection for a single year. var collection = ee .
- Landsat . simpleComposite ( collection ); // Create a cloud-free composite with custom parameters for // cloud score threshold and percentile. var customComposite = ee .
- ImageCollection ( 'LANDSAT/LT05/C02/T1' ) . filterDate ( '2010-01-01' , '2010-12-31' ); // Create a cloud-free composite with default parameters. var composite = ee .
- Landsat . simpleComposite ( collection ) Create a cloud-free composite with custom parameters for cloud score threshold and percentile. custom composite = ee .

