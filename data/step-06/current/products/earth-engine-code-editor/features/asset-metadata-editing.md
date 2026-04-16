---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:18:07.522Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Asset metadata editing"
feature_slug: "asset-metadata-editing"
latest_feature_date: "2016-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/command_line"
keywords:
  - "asset"
  - "metadata"
  - "editing"
  - "can"
  - "edited"
---

# Asset metadata editing

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Asset metadata can be edited.

## Extended Definition

Asset metadata can be edited.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifically, collaborators must have the following permissions: storage.buckets.get on the bucket (to retrieve bucket metadata and location, allowing Earth Engine to properly resolve the asset's source). storage.objects.get on the bucket (to read the actual COG-backed asset data).
- Page Summary outlined flag Earth Engine supports assets backed by Cloud Optimized GeoTIFFs (COGs), which improve performance in collections by indexing spatial and metadata fields at creation time.
- An advantage of COG-backed assets is that the spatial and metadata fields of the image will be indexed at asset creation time, making the image more performant in collections.
- Generations When a COG-backed asset is created, Earth Engine reads the metadata of TIFFs specified in the manifest and creates an asset store entry.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Point ([ - 122.47555371521855 , 37.76884708376152 ]); var s2 = sentinel2 . filterBounds ( sf ) . filterDate ( '2018-01-01' , '2019-12-31' ); var withDoys = s2 . map ( function ( image ) { var ndvi = image . normalizedDifference ([ 'B4' , 'B8' ]). rename ( 'ndvi' ); var date = image . date (); var doy = date . getRelative ( 'day' , 'year' ); var time = image . metadata ( 'system:time start' ); var doyImage = ee .
- This block is commented because the export is complete. / var link = '0b8023b0af6c1b0ac7b5be649b54db06' var desc = 'Logistic regression stack ' + link; Export.image.toAsset({ image: stack, description: desc, assetId: desc, region: geometry, scale: 30, maxPixels: 1e10 }) / // Load the exported image. var exportedStack = ee .
- Also note that if you want to export toAsset , you will need to supply a geometry, which can be anything, for example the image centroid, which is small and cheap to compute. (i.e. don't use a complex geometry if you don't need it).
- Feature ( null , stats )]), description : 'exported stats demo ' + link , fileFormat : 'CSV' }); Note that the link is embedded into the asset name, for reproducibility.

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

