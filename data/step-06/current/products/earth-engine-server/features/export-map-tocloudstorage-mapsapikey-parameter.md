---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.418Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Export.map.toCloudStorage() mapsApiKey parameter"
feature_slug: "export-map-tocloudstorage-mapsapikey-parameter"
latest_feature_date: "2018-12-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/exporting_map_tiles"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "export"
  - "map"
  - "tocloudstorage"
  - "mapsapikey"
  - "parameter"
  - "lets"
  - "exports"
  - "specify"
---

# Export.map.toCloudStorage() mapsApiKey parameter

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Lets map exports specify a Google Maps API key for the export viewer.

## Extended Definition

Lets map exports specify a Google Maps API key for the export viewer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/exporting_map_tiles](https://developers.google.com/earth-engine/guides/exporting_map_tiles)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### Exporting Map Tiles \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_map_tiles](https://developers.google.com/earth-engine/guides/exporting_map_tiles)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export . map . toCloudStorage ({ image : landsatImage , description : 'mapTilesForMapsPlatform' , bucket : 'yourBucketName' , // replace with your GCS bucket name fileFormat : 'auto' , maxZoom : 13 , region : exportRegion , writePublicTiles : true , bucketCorsUris : [ ' ' ], // ' ' = All domains = risk of misuse // For better protection, specify the domain(s) where the // tiles will be used, eg: ['https://mysite.mydomain.com'] mapsApiKey : 'fakeMapsApiKey012345' // replace with a valid API Key }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) --- Export Map Tiles for use with Maps Platform APIs --- Use image setup code from example at top of the page.
- Export . map . toCloudStorage ( image = landsat image , description = 'mapTilesForMapsPlatform' , bucket = 'yourBucketName' , # replace with your GCS bucket name fileFormat = 'auto' , maxZoom = 13 , region = export region , writePublicTiles = True , bucketCorsUris = [ ' ' ], # ' ' = All domains = risk of misuse For better protection, specify the domain(s) where the tiles will be used, eg: ['https://mysite.mydomain.com'] mapsApiKey = 'fakeMapsApiKey012345' , # replace with a valid API Key ) task . start () Publishing to Google Earth (on the web) To create a set of map tiles for publishing publicly via Google Earth, you will need to set the Access Level to 'Publicly Accessible', and set the JS Access Level to allow 'https://earth.google.com' (or 'Publicly Accessible').
- Export . map . toCloudStorage ({ image : landsatImage , description : 'mapTilesForMapPreview' , bucket : 'yourBucketName' , // replace with your GCS bucket name fileFormat : 'auto' , maxZoom : 13 , region : exportRegion , writePublicTiles : true , mapsApiKey : 'fakeMapsApiKey012345' // replace with a valid API Key }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) --- Export Map Tiles for use with Map Preview --- Use image setup code from example at top of the page.
- Export . map . toCloudStorage ({ image : landsatImage , description : 'mapTilesForEE' , bucket : 'yourBucketName' , // replace with your GCS bucket name fileFormat : 'auto' , maxZoom : 13 , region : exportRegion , writePublicTiles : true }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) --- Example Export Map Tiles - basic --- Specify area to clip/export, setup image and preview on map. export region = ee .

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Export . image . toCloudStorage ({ image : landsat , description : 'imageToCloudExample' , bucket : 'your-bucket-name' , fileNamePrefix : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Export the image to Cloud Storage. task = ee . batch .
- Export . image . toDrive ({ image : landsat , description : 'imageToDriveExample transform' , crs : projection . crs , crsTransform : projection . transform , region : geometry }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Export the image, specifying the CRS, transform, and region. task = ee . batch .
- Export . image . toCloudStorage ( image = landsat , description = 'imageToCloudExample' , bucket = 'your-bucket-name' , fileNamePrefix = 'exampleExport' , crs = projection [ 'crs' ], crsTransform = projection [ 'transform' ], region = geometry , ) task . start () As with exports to Drive, start the export from the Tasks tab.
- Since the Code Editor uses the 'EPSG:3857' CRS, specify a CRS of 'EPSG:3857' in the export to get an image in the same projection as that displayed in the Code Editor map.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- December 25, 2018 Earth Engine Data Catalog Feature Added UQ/murray/Intertidal/v1 1/data mask : Murray Global Intertidal Change Data Mask Added UQ/murray/Intertidal/v1 1/global intertidal : Murray Global Intertidal Change Classification Added UQ/murray/Intertidal/v1 1/qa pixel count : Murray Global Intertidal Change QA Pixel Count December 11, 2018 Earth Engine Data Catalog Feature Added COPERNICUS/S5P/NRTI/L3 HCHO : Sentinel-5P NRTI HCHO: Near Real-Time Formaldehyde Added COPERNICUS/S5P/NRTI/L3 O3 : Sentinel-5P NRTI O3: Near Real-Time Ozone Added COPERNICUS/S5P/NRTI/L3 SO2 : Sentinel-5P NRTI SO2: Near Real-Time Sulfur Dioxide December 07, 2018 Earth Engine Server Feature Added optional mapsApiKey parameter to Export.map.toCloudStorage() , to allow callers to specify a Google Maps API key for the map viewer in those exports.
- October 27, 2016 Earth Engine JavaScript Client Library 0.1.99 Feature Added optional shardSize and fileDimensions arguments to Export.image.toDrive() and Export.image.toCloudStorage() , to specify the computation shard size and the output file dimensions for multi-file image exports.
- Earth Engine Python Client Library 0.1.99 Feature Added optional shardSize and fileDimensions arguments to Export.image.toDrive() and Export.image.toCloudStorage() , to specify the computation shard size and the output file dimensions for multi-file image exports.
- August 02, 2016 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG (no longer available) July 28, 2016 Earth Engine Code Editor Change Updated Export.map.toCloudStorage() to make the 'path' parameter default to the export task's description.

