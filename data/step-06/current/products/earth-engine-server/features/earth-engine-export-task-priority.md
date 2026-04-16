---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.022Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Earth Engine export task priority"
feature_slug: "earth-engine-export-task-priority"
latest_feature_date: "2024-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
  - "https://developers.google.com/earth-engine/guides/exporting_map_tiles"
keywords:
  - "earth"
  - "engine"
  - "export"
  - "task"
  - "priority"
  - "batch"
  - "tasks"
  - "can"
---

# Earth Engine export task priority

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Export batch tasks can now be assigned a priority value when using a paid Earth Engine project.

## Extended Definition

Export batch tasks can now be assigned a priority value when using a paid Earth Engine project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- [https://developers.google.com/earth-engine/guides/exporting_map_tiles](https://developers.google.com/earth-engine/guides/exporting_map_tiles)

## Supporting Pages

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Earth Engine commercially or operationally, exporting data to BigQuery charges you for the EECU-time that the tasks use.
- Export . table . toBigQuery ( collection = features , table = 'myproject.mydataset.mytable' , description = 'put my data in bigquery' , append = True , overwrite = False , ) task . start () Automatic or manual schema specification If there's no table present in BigQuery, Earth Engine attempts to determine a schema using the properties of the first ee.Feature in the collection.
- Export . table . toBigQuery ( collection = annotated states , table = 'myproject.mydataset.mytable' ) task . start () Geometry conversion BigQuery has limited support for different projections , so all Earth Engine geometries are transformed to geodesic EPSG:4326 using an error margin of 1 meter.
- Permissions In addition to the standard roles and permissions required to use Earth Engine, callers also need the correct BigQuery permissions on the Cloud project or dataset. bigquery.tables.get bigquery.tables.create bigquery.tables.updateData bigquery.tables.delete bigquery.jobs.create Any of the following combinations of predefined Identity and Access Management (IAM) roles include the necessary permissions: bigquery.dataEditor plus bigquery.jobUser bigquery.dataOwner plus bigquery.jobUser bigquery.user bigquery.admin Pricing BigQuery is a paid Google Cloud service, so you will incur charges for your usage of BigQuery, including storage and analysis of any Earth Engine data that you export to BigQuery.

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export . image . toAsset ({ image : band4 , description : 'imageToAssetExample' , assetId : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry , pyramidingPolicy : { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get band 4 from the Landsat image, copy it. band 4 = ( landsat . select ( 'B4' ) . rename ( 'b4 mean' ) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 sample' )) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 max' )) ) Export the image to an Earth Engine asset. task = ee . batch .
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .
- Export . image . toCloudStorage ({ image : landsat , description : 'imageToCloudExample' , bucket : 'your-bucket-name' , fileNamePrefix : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Export the image to Cloud Storage. task = ee . batch .
- Export . image . toDrive ({ image : landsat , description : 'imageToCOGeoTiffExample' , crs : projection . crs , crsTransform : projection . transform , region : geometry , fileFormat : 'GeoTIFF' , formatOptions : { cloudOptimized : true } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Export a cloud-optimized GeoTIFF. task = ee . batch .

### Exporting Map Tiles \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_map_tiles](https://developers.google.com/earth-engine/guides/exporting_map_tiles)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export . map . toCloudStorage ( image = landsat image , description = 'mapTilesForEE' , bucket = 'yourBucketName' , # replace with your GCS bucket name fileFormat = 'auto' , maxZoom = 13 , region = export region , writePublicTiles = True , bucketCorsUris = [ 'https://code.earthengine.google.com' , 'https:// .earthengine.app' , ], ) task . start () Viewing a Google Maps Preview To preview your map tiles on Google Maps, go to the output folder on Google Cloud Storage, and open the "index.html" file in your browser.
- Using map tiles in Earth Engine (Code Editor or EE Apps) If you want to export map tiles only for re-use in Google Earth Engine or EE Apps, then set "Access Level" to 'Publicly Accessible', and set "JS Access Level" (in the task dialog) to 'Add Earth Engine Access' or 'Add Public Access'.
- The output in the code editor Tasks tab (shown below) provides the URL for your tiles with the appropriate variables for use in Google Earth, for example: https://storage.googleapis.com/my bucket/my test tiles/$[level]/$[x]/$[y] Output URLs from a tile export task.
- Export . map . toCloudStorage ( image = landsat image , description = 'mapTilesForMapsPlatform' , bucket = 'yourBucketName' , # replace with your GCS bucket name fileFormat = 'auto' , maxZoom = 13 , region = export region , writePublicTiles = True , bucketCorsUris = [ ' ' ], # ' ' = All domains = risk of misuse For better protection, specify the domain(s) where the tiles will be used, eg: ['https://mysite.mydomain.com'] mapsApiKey = 'fakeMapsApiKey012345' , # replace with a valid API Key ) task . start () Publishing to Google Earth (on the web) To create a set of map tiles for publishing publicly via Google Earth, you will need to set the Access Level to 'Publicly Accessible', and set the JS Access Level to allow 'https://earth.google.com' (or 'Publicly Accessible').

