---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.602Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Asset metadata editing"
feature_slug: "asset-metadata-editing"
latest_feature_date: "2016-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/getstarted"
keywords:
  - "metadata"
  - "editing"
  - "edited"
  - "asset"
---

# Asset metadata editing

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Asset metadata can be edited.

## Extended Definition

Asset metadata can be edited.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specifically, collaborators must have the following permissions: storage.buckets.get on the bucket (to retrieve bucket metadata and location, allowing Earth Engine to properly resolve the asset's source). storage.objects.get on the bucket (to read the actual COG-backed asset data).
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- An advantage of COG-backed assets is that the spatial and metadata fields of the image will be indexed at asset creation time, making the image more performant in collections.
- Generations When a COG-backed asset is created, Earth Engine reads the metadata of TIFFs specified in the manifest and creates an asset store entry.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- The special user identifier AllUsers may be used to grant or revoke read permission to or from all users. (Note that revoking AllUsers permissions does not revoke any additional permissions you may have also granted to individual users.) asset Prints or updates metadata associated with the an Earth Engine asset.
- This will mask any pixels in the image with that value: earthengine upload image --asset id=users/myuser/asset --nodata value=255 gs://bucket/image.tif You may also specify metadata properties to set on the asset using the same flags that are accepted by the asset set command described above .
- Examples: earthengine asset info projects/my-project/assets/asset id earthengine asset set -p name=value projects/my-project/assets/asset id The info sub-command prints detailed information about the asset, including its metadata, in JSON form.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- The lowercase image means that a variable named image refers to an instance of the ee.Image class. 'Hello world!' JavaScript Printing out information to the console is a basic task for getting information about an object, displaying the numeric result of a computation, displaying object metadata or helping with debugging.
- Date ( '2014-10-01' ); Filter the Landsat 8 collection using the point and the dates, then sort using a metadata property (discovered during inspection of the Landsat 8 scene metadata): Code Editor (JavaScript) var filteredCollection = ee .
- The Code Editor is an interactive environment for developing Earth Engine applications where you can write and run JavaScript code, visualize data on a map, and manage assets.
- Image ( 'LANDSAT/LC08/C02/T1 TOA/LC08 044034 20140318' )); Carefully inspect the output in the console to see metadata available for Landsat images.

