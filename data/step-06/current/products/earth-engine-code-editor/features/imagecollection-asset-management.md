---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.522Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "ImageCollection asset management"
feature_slug: "imagecollection-asset-management"
latest_feature_date: "2015-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/access_control"
  - "https://developers.google.com/earth-engine/guides/apps"
keywords:
  - "imagecollection"
  - "asset"
  - "management"
  - "users"
  - "can"
  - "create"
  - "share"
  - "assets"
---

# ImageCollection asset management

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Users can create and share ImageCollection assets and add or remove Image assets from them.

## Extended Definition

Users can create and share ImageCollection assets and add or remove Image assets from them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],["This document details how to create Earth Engine assets backed by Cloud Optimized GeoTIFFs (COGs).
- For users with GDAL >= 3.11, the COG driver can produce files without having to worry about creating and preserving overviews. gdal translate in .tif out.tif \ -of COG \ -co OVERVIEWS = IGNORE EXISTING \ -co COMPRESS = ZSTD \ -co LEVEL = 22 \ -co PREDICTOR = 2 \ -co INTERLEAVE = BAND \ -co NUM THREADS = ALL CPUS \ Creating Cloud GeoTiff-Backed Assets using the REST API Note: The REST API contains new and advanced features that may not be suitable for all users.
- The band order of the resulting asset is mixed from the input COGs (e.g. output band 0 is from Tileset 0, while output band 1 is from Tileset 1). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo2' , 'uriPrefix' : 'gs://ee-docs-demos/external image demo/' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'b4b3b2.tif' ] } ] }, { 'id' : '1' , 'sources' : [ { 'uris' : [ 'b5b6b7.tif' ] } ] }, ], 'bands' : [ { 'id' : 'red' , 'tilesetId' : '0' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge3' , 'tilesetId' : '1' , 'tilesetBandIndex' : 2 }, { 'id' : 'rededge2' , 'tilesetId' : '1' , 'tilesetBandIndex' : 1 }, { 'id' : 'green' , 'tilesetId' : '0' , 'tilesetBandIndex' : 1 }, { 'id' : 'blue' , 'tilesetId' : '1' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge1' , 'tilesetId' : '0' , 'tilesetBandIndex' : 2 }, ], }, } pprint ( request ) Details on COG-backed assets Location The Cloud Storage bucket location must be one of: The US multi-region Any US dual-region that includes US-CENTRAL1 The region US-CENTRAL1 Storage class The storage class of the bucket must be "Standard storage".
- If no bands are specified, the resulting asset will contain all the bands of the GeoTIFF with the band names encoded in the GeoTIFF (in this case, "vis-red", "vis-green", and "vis-blue"). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo1' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'gs://ee-docs-demos/COG demo.tif' ] } ] } ], 'properties' : { 'version' : '1.1' }, 'startTime' : '2016-01-01T00:00:00.000000000Z' , 'endTime' : '2016-12-31T15:01:23.000000000Z' , }, } pprint ( request ) More than one Tileset It is possible to specify an ImageManifest with more than one Tileset where each band of the resulting asset is backed by one of the bands of a Tileset using the tilesetId and tilesetBandIndex fields.

### Control access to resources \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Full access to the Earth Engine API To give users full access to the Earth Engine service, either through the REST API directly, through the Code Editor or through a client library, users will need permission to perform operations like: Executing Earth Engine expressions Running batch computations (exports) Getting interactive results (online maps, thumbnails, charts, etc.) Creating/deleting Earth Engine assets Using OAuth Authentication via a Client Library to connect to Earth Engine Permissions needed clientauthconfig.clients.listWithSecrets earthengine.assets.get earthengine.assets.getIamPolicy earthengine.assets.list earthengine.computations.create earthengine.operations.get earthengine.operations.list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list serviceusage.operations.get serviceusage.operations.list serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.services.use Suggested roles Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) AND one of: Earth Engine Resource Viewer ( roles/earthengine.viewer ) OR Earth Engine Resource Writer ( roles/earthengine.writer ) OR Earth Engine Resource Admin ( roles/earthengine.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) is additionally required for users who access Earth Engine through a notebook environment and use the Notebook Authenticator.
- Set project level permissions To set permissions at the project level, assign a project IAM role to a user or group of users: Open the IAM page in the Google Cloud console Open the IAM Page Or hold the pointer over your project name on the Assets tab of the Code Editor and click the share icon.
- You can share assets at the project level by assigning the appropriate Identity and Access Management (IAM) role on your project's IAM admin page.
- You can share the assets or compute quota of your Earth Engine enabled project with other Earth Engine users at the project level.

### Earth Engine Apps \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps restricted to a Google Group, sharing an asset with that Google Group will not make it viewable by the App; the assets should be shared with the App or publicly, instead.
- To build an App, you can use most Code Editor functions along with the User Interface API, but any image or table assets used must be shared publicly.
- Important: Any image or table assets used in your App must be shared publicly for the App to display properly.
- Ensure all image or table assets used in your App are shared publicly or with the App.

