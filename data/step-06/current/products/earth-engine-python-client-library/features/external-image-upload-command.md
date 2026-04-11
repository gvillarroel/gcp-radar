---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.804Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "external_image upload command"
feature_slug: "external-image-upload-command"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "external"
  - "image"
  - "upload"
  - "command"
  - "promotes"
  - "the"
  - "alpha"
  - "in"
---

# external_image upload command

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Promotes the alpha external_image upload command in the Earth Engine CLI to Preview.

## Extended Definition

Promotes the alpha external_image upload command in the Earth Engine CLI to Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.
- This will control how Earth Engine generates the pyramid of lower-resolution versions of your image: earthengine upload image --asset id=projects/my-project/assets/asset id --pyramiding policy=sample gs://bucket/image.tif You can use the --last band alpha to indicate that the mask for the image should be taken from an alpha channel in the last band: earthengine upload image --asset id=projects/my-project/assets/asset id --last band alpha gs://bucket/image.tif You can specify a no-data value using the --nodata value flag.
- This will mask any pixels in the image with that value: earthengine upload image --asset id=users/myuser/asset --nodata value=255 gs://bucket/image.tif You may also specify metadata properties to set on the asset using the same flags that are accepted by the asset set command described above .

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Write an image upload manifest Use the earthengine command-line utility to send an upload command: earthengine upload external image --manifest my manifest.json Sample image manifest with one Tileset The simplest ImageManifest is one with a single Tileset .
- Key actions involve: placing COG files in a designated Google Cloud Storage (GCS) bucket, writing an image upload manifest, and using the earthengine command-line tool or REST API to send an upload command or a POST request to import the external image.
- Send the request Make the POST request to the Earth Engine projects.images.importExternal endpoint. url = f 'https://earthengine.googleapis.com/v1alpha/projects/ { ee project } /image:importExternal' response = session . post ( url = url , data = json . dumps ( request ) ) pprint ( json . loads ( response . content )) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To create a COG-backed asset, you need to place COG files in a specific GCS bucket location, write an image upload manifest, and use the earthengine command-line utility.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- December 10, 2024 Earth Engine Data Catalog Feature Added projects/gcp-public-data-weathernext/assets/59572747 4 0 : WeatherNext Graph Forecasts December 03, 2024 Earth Engine Data Catalog Feature Added JRC/GFC2020/V2 (no longer available) Added projects/forestdatapartnership/assets/cocoa/model 2024a (no longer available) Added projects/forestdatapartnership/assets/community forests/ForestPersistence 2020 : Forest Persistence v0 Added projects/forestdatapartnership/assets/palm/model 2024a (no longer available) Added projects/forestdatapartnership/assets/rubber/model 2024a (no longer available) November 18, 2024 Earth Engine Python Client Library 1.4.0 Feature Released the alpha upload external image CLI command to Preview.
- December 14, 2021 Earth Engine Data Catalog Feature Added JAXA/GCOM-C/L3/LAND/LAI/V3 : GCOM-C/SGLI L3 Leaf Area Index (V3) Added JAXA/GCOM-C/L3/LAND/LST/V3 : GCOM-C/SGLI L3 Land Surface Temperature (V3) Added JAXA/GCOM-C/L3/OCEAN/CHLA/V3 : GCOM-C/SGLI L3 Chlorophyll-a Concentration (V3) Added JAXA/GCOM-C/L3/OCEAN/SST/V3 : GCOM-C/SGLI L3 Sea Surface Temperature (V3) Added LANDSAT/LC08/C02/T1 RT TOA : USGS Landsat 8 Collection 2 Tier 1 and Real-Time data TOA Reflectance Added LANDSAT/LC08/C02/T1 TOA : USGS Landsat 8 Collection 2 Tier 1 TOA Reflectance Added LANDSAT/LC08/C02/T2 TOA : USGS Landsat 8 Collection 2 Tier 2 TOA Reflectance Added LANDSAT/LE07/C02/T1 RT TOA : USGS Landsat 7 Collection 2 Tier 1 and Real-Time data TOA Reflectance Added LANDSAT/LE07/C02/T1 TOA : USGS Landsat 7 Collection 2 Tier 1 TOA Reflectance Added LANDSAT/LE07/C02/T2 TOA : USGS Landsat 7 Collection 2 Tier 2 TOA Reflectance Added LANDSAT/LT05/C02/T1 TOA : USGS Landsat 5 TM Collection 2 Tier 1 TOA Reflectance Added LANDSAT/LT05/C02/T2 TOA : USGS Landsat 5 TM Collection 2 Tier 2 TOA Reflectance Added USFS/GTAC/LCMS/v2020-6 (no longer available) December 13, 2021 Earth Engine Code Editor Change Reinstated the allowHtml option for ui.Chart , while continuing to disallow external image display.
- June 20, 2017 Earth Engine Data Catalog Feature Added MODIS/006/MOD09A1 (no longer available) Added MODIS/006/MOD09Q1 (no longer available) Added MODIS/006/MOD11A2 (no longer available) Added MODIS/006/MYD09A1 (no longer available) Added MODIS/006/MYD09Q1 (no longer available) Added MODIS/006/MYD11A2 (no longer available) Added NASA/OCEANDATA/MODIS-Terra/L3SMI : Ocean Color SMI: Standard Mapped Image MODIS Terra Data June 13, 2017 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG V04 (no longer available) Added NASA/OCEANDATA (no longer available) Added NASA/OCEANDATA/MODIS-Aqua/L3SMI : Ocean Color SMI: Standard Mapped Image MODIS Aqua Data Added UMD/hansen/global forest change 2015 v1 3 (no longer available) June 12, 2017 Earth Engine Code Editor Fixed Added support for uploading shapefiles. ui.Map.addLayer() now returns the ui.Map.Layer instance.
- November 22, 2016 Earth Engine Server Feature Added support for uploading images with mask band of types other than byte, interpreting integer types in the range [0, maxint] and float types in the range [0.0, 1.0] .

