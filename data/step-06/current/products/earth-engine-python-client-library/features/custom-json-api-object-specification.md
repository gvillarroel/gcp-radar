---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.820Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Custom JSON API object specification"
feature_slug: "custom-json-api-object-specification"
latest_feature_date: "2013-03-14"
deprecation_date: "2013-03-14"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
keywords:
  - "custom"
  - "json"
  - "api"
  - "object"
  - "specification"
  - "deprecated"
  - "specifying"
  - "objects"
---

# Custom JSON API object specification

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Deprecated specifying API objects with custom JSON structures; deprecated on 2013-03-14.

## Extended Definition

Deprecated specifying API objects with custom JSON structures; deprecated on 2013-03-14.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- March 14, 2013 Earth Engine JavaScript Client Library 0.0.5 Deprecated Deprecated specifying API objects using custom JSON (e.g. specifying error margins using {type: 'ErrorMargin', value: 5} ).
- Earth Engine Python Client Library 0.0.5 Deprecated Deprecated specifying API objects using custom JSON (e.g. specifying error margins using {type: 'ErrorMargin', value: 5} ).
- Change Gave all API objects eq () and hash () Earth Engine Server Feature Added a few helper methods to Projection : Projection.atScale(projection, meters) Projection.crs(projection) Projection.scale(projection, x, y) Projection.transform(projection) Projection.translate(projection, x, y) Projection.wkt(projection) June 06, 2014 Earth Engine Server Change Added List.zip(other) function. exportImage() can now create TERRAIN assets when exporting to Google Maps Engine.
- Earth Engine Python Client Library 0.1.1 Breaking EE objects can no longer be initialized by providing JSON blocks (except GeoJSON).

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Console Tab When you print() something from your script, such as text, objects or charts, the result will be displayed in the Console .
- The cursor location and zoom level are displayed along with pixel values and a list of objects on the map.
- The console is interactive, so you can expand printed objects to get more details about them.
- Users can manage tasks, search datasets, visualize data on the map, and inspect map objects.

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Assign the following roles: "Storage Legacy Bucket Reader" (provides storage.buckets.get and other bucket-level read permissions). "Storage Legacy Object Reader" (provides storage.objects.get ). (Alternatively, you could create a new custom role with just the storage.buckets.get and storage.objects.get permissions and assign that.) Save 2.
- Send the request Make the POST request to the Earth Engine projects.images.importExternal endpoint. url = f 'https://earthengine.googleapis.com/v1alpha/projects/ { ee project } /image:importExternal' response = session . post ( url = url , data = json . dumps ( request ) ) pprint ( json . loads ( response . content )) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Specifically, collaborators must have the following permissions: storage.buckets.get on the bucket (to retrieve bucket metadata and location, allowing Earth Engine to properly resolve the asset's source). storage.objects.get on the bucket (to read the actual COG-backed asset data).
- Share the Earth Engine asset for reading After ensuring your collaborators have the necessary permissions on the underlying GCS bucket and objects, you must also share the Earth Engine asset itself.

