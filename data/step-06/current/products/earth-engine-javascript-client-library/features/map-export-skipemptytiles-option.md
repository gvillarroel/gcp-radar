---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.976Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Map export skipEmptyTiles option"
feature_slug: "map-export-skipemptytiles-option"
latest_feature_date: "2016-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides"
keywords:
  - "map"
  - "export"
  - "skipemptytiles"
  - "option"
  - "adds"
  - "tocloudstorage"
  - "skip"
  - "writing"
---

# Map export skipEmptyTiles option

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

Adds a skipEmptyTiles option to Export.map.toCloudStorage() to skip writing empty map tiles.

## Extended Definition

Adds a skipEmptyTiles option to Export.map.toCloudStorage() to skip writing empty map tiles.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- Authenticate () Command execution To run command line utilities, like the Earth Engine CLI, you need to prepend command calls with an exclamation point. !earthengine -h Set a Cloud project Use the --project option to set a Cloud project for each individual earthengine command. !earthengine --project my-project <command> Alternatively, set a default project to be used by all earthengine calls using the set project command.
- The following settings can be configured: max concurrent exports , to control the project's maximum batch task parallelism requires the correct permissions For example, to configure a project to only ever allow 10 tasks to run in parallel for the given project: earthengine alpha project config set --max concurrent exports=10 The output displays the updated project configuration, identical to what get returns.

### About Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more advanced options or externally trained models, integration with Vertex AI is provided, allowing models to be brought to Earth Engine's data or enabling the construction of deep learning models and neural network-based analyses.
- When ready, users can export raster and vector results to Google Cloud Storage, BigQuery, or Google Drive, as well as download data locally in formats compatible with pandas, NumPy, and Xarray.
- The platform facilitates the full analysis workflow, from interactive visualization and exploration to exporting results and creating interactive web applications.
- Results can be visualized, exported to various platforms (Google Cloud Storage, BigQuery, etc.), or integrated into interactive web applications.

