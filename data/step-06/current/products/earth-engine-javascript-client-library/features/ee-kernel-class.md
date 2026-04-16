---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:21.002Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "ee.Kernel class"
feature_slug: "ee-kernel-class"
latest_feature_date: "2013-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides"
keywords:
  - "ee"
  - "kernel"
  - "class"
  - "provides"
  - "javascript"
  - "client"
  - "library"
---

# ee.Kernel class

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

The ee.Kernel class provides kernel support in the JavaScript client library.

## Extended Definition

The ee.Kernel class provides kernel support in the JavaScript client library.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)

## Supporting Pages

### API Reference \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code Editor The Code Editor provides the Earth Engine JavaScript client library plus: Display of geographic data on the Map .
- The Client Libraries section provides reference for both JavaScript and Python clients.
- Tip: See the Single-Page API Reference if you would like to search the client library and Code Editor API reference material using your browser's find functionality (Ctrl+F).
- Client Libraries The open source JavaScript and Python Client libraries ( GitHub repo ) translate Earth Engine code into request objects sent to Earth Engine servers.

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- The band order of the resulting asset is mixed from the input COGs (e.g. output band 0 is from Tileset 0, while output band 1 is from Tileset 1). request = { 'imageManifest' : { 'name' : f 'projects/ { ee project } /assets/cogdemo2' , 'uriPrefix' : 'gs://ee-docs-demos/external image demo/' , 'tilesets' : [ { 'id' : '0' , 'sources' : [ { 'uris' : [ 'b4b3b2.tif' ] } ] }, { 'id' : '1' , 'sources' : [ { 'uris' : [ 'b5b6b7.tif' ] } ] }, ], 'bands' : [ { 'id' : 'red' , 'tilesetId' : '0' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge3' , 'tilesetId' : '1' , 'tilesetBandIndex' : 2 }, { 'id' : 'rededge2' , 'tilesetId' : '1' , 'tilesetBandIndex' : 1 }, { 'id' : 'green' , 'tilesetId' : '0' , 'tilesetBandIndex' : 1 }, { 'id' : 'blue' , 'tilesetId' : '1' , 'tilesetBandIndex' : 0 }, { 'id' : 'rededge1' , 'tilesetId' : '0' , 'tilesetBandIndex' : 2 }, ], }, } pprint ( request ) Details on COG-backed assets Location The Cloud Storage bucket location must be one of: The US multi-region Any US dual-region that includes US-CENTRAL1 The region US-CENTRAL1 Storage class The storage class of the bucket must be "Standard storage".
- Assign the following roles: "Storage Legacy Bucket Reader" (provides storage.buckets.get and other bucket-level read permissions). "Storage Legacy Object Reader" (provides storage.objects.get ). (Alternatively, you could create a new custom role with just the storage.buckets.get and storage.objects.get permissions and assign that.) Save 2.
- COGs must be properly configured (tiled, with IFDs at the beginning) and storage location/class requirements are outlined.
- If you are new to Earth Engine, we recommend getting started with the JavaScript guide .

### About Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Development environments Developers can choose between two primary development environments: Python client library : A flexible interface to Earth Engine for integration with the broader Python ecosystem, facilitating advanced workflows, and interactive analysis in Jupyter notebooks.
- Access is available for both commercial and noncommercial use, with noncommercial use being free, and integration with Google Cloud projects provides robust access, management, and security features.
- Its efficient tiling and computation system, integrated with interactive map widgets, provides rapid visualization and inspection capabilities in both the Code Editor and Python environments.
- Key Features Geospatial analysis, simplified and scalable Earth Engine integrates an extensive geospatial data catalog with distributed computing, accessible through client libraries.

