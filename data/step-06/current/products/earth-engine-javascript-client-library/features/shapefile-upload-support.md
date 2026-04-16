---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.973Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Shapefile upload support"
feature_slug: "shapefile-upload-support"
latest_feature_date: "2017-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
keywords:
  - "shapefile"
  - "upload"
  - "javascript"
  - "client"
  - "library"
  - "supports"
  - "uploading"
  - "shapefiles"
---

# Shapefile upload support

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

The JavaScript client library supports uploading shapefiles.

## Extended Definition

The JavaScript client library supports uploading shapefiles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- Set a default project for each new Colab session or if the virtual machine expires from inactivity (credentials are not saved across sessions). !earthengine set project my-project Command Reference authenticate Authenticates the command line tool and Python client library to Earth Engine.
- You can learn more about the options for uploading images to Earth Engine in Uploading image assets: Advanced options .
- Import the Python client library and call ee.Authenticate() to trigger the authentication flow.

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Write an image upload manifest Use the earthengine command-line utility to send an upload command: earthengine upload external image --manifest my manifest.json Sample image manifest with one Tileset The simplest ImageManifest is one with a single Tileset .
- Key actions involve: placing COG files in a designated Google Cloud Storage (GCS) bucket, writing an image upload manifest, and using the earthengine command-line tool or REST API to send an upload command or a POST request to import the external image.
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- To create a COG-backed asset, you need to place COG files in a specific GCS bucket location, write an image upload manifest, and use the earthengine command-line utility.

### About Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)
- Source ID: `site-docs-reference`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Development environments Developers can choose between two primary development environments: Python client library : A flexible interface to Earth Engine for integration with the broader Python ecosystem, facilitating advanced workflows, and interactive analysis in Jupyter notebooks.
- Key Features Geospatial analysis, simplified and scalable Earth Engine integrates an extensive geospatial data catalog with distributed computing, accessible through client libraries.
- Earth Engine offers both interactive and batch processing modes, as well as Python and JavaScript development environments to support different analytical and development needs.
- The platform simplifies geospatial analysis by providing an extensive data catalog, supporting user data uploads, and automatically handling data processing and scaling.

