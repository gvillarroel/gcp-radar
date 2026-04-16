---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.506Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "CSV upload"
feature_slug: "csv-upload"
latest_feature_date: "2019-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
keywords:
  - "csv"
  - "upload"
  - "code"
  - "editor"
  - "supports"
  - "uploading"
  - "files"
---

# CSV upload

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Code Editor supports uploading CSV files.

## Extended Definition

The Code Editor supports uploading CSV files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model](https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)

## Supporting Pages

### "Hosted Custom Model for Earth Engine \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model](https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before saving and uploading, ensure your model accepts data in a payload format that Earth Engine supports.
- An example of that is here: torch-model-archiver -f \ --model-name model \ --version 1 .0 \ --serialized-file $model file \ --handler $hander file \ --extra-files $index to name file \ --export-path $model path Model Deployment to Vertex AI Once your model files are saved the next step is to upload your model to Vertex AI.
- Performing inference with a custom trained model using a machine learning framework such as TensorFlow or PyTorch requires saving and uploading the model to Vertex AI, creating a prediction endpoint and deploying the model to serve traffic at the created endpoint.
- Model deployment involves uploading your saved model artifact to Google Cloud Storage and then using Vertex AI's Model Registry or gcloud commands to upload and deploy the model to an endpoint.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.
- You can learn more about the options for uploading images to Earth Engine in Uploading image assets: Advanced options .

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Key actions involve: placing COG files in a designated Google Cloud Storage (GCS) bucket, writing an image upload manifest, and using the earthengine command-line tool or REST API to send an upload command or a POST request to import the external image.
- To create a COG-backed asset, you need to place COG files in a specific GCS bucket location, write an image upload manifest, and use the earthengine command-line utility.
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).

