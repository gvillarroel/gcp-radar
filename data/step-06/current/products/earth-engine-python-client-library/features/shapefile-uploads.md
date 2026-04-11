---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.817Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Shapefile uploads"
feature_slug: "shapefile-uploads"
latest_feature_date: "2017-06-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/playground"
keywords:
  - "shapefile"
  - "uploads"
  - "allows"
  - "uploading"
  - "shapefiles"
---

# Shapefile uploads

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Allows uploading shapefiles.

## Extended Definition

Allows uploading shapefiles.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- June 20, 2017 Earth Engine Data Catalog Feature Added MODIS/006/MOD09A1 (no longer available) Added MODIS/006/MOD09Q1 (no longer available) Added MODIS/006/MOD11A2 (no longer available) Added MODIS/006/MYD09A1 (no longer available) Added MODIS/006/MYD09Q1 (no longer available) Added MODIS/006/MYD11A2 (no longer available) Added NASA/OCEANDATA/MODIS-Terra/L3SMI : Ocean Color SMI: Standard Mapped Image MODIS Terra Data June 13, 2017 Earth Engine Data Catalog Feature Added NASA/GPM L3/IMERG V04 (no longer available) Added NASA/OCEANDATA (no longer available) Added NASA/OCEANDATA/MODIS-Aqua/L3SMI : Ocean Color SMI: Standard Mapped Image MODIS Aqua Data Added UMD/hansen/global forest change 2015 v1 3 (no longer available) June 12, 2017 Earth Engine Code Editor Fixed Added support for uploading shapefiles. ui.Map.addLayer() now returns the ui.Map.Layer instance.
- Earth Engine JavaScript Client Library 0.1.116 Feature Added support for uploading shapefiles.
- Earth Engine Python Client Library 0.1.116 Feature Added support for uploading shapefiles.
- October 22, 2019 Earth Engine Data Catalog Feature Added NOAA/NHC/HURDAT2/atlantic v2019 (no longer available) October 15, 2019 Earth Engine Data Catalog Feature Added MODIS/006/MOD44B (no longer available) Added NOAA/GOES/16/FDCF : GOES-16 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk Added NOAA/GOES/17/FDCF : GOES-17 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk October 08, 2019 Earth Engine Data Catalog Feature Added ECMWF/ERA5/DAILY : ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service Added ECMWF/ERA5/MONTHLY : ERA5 Monthly Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service September 17, 2019 Earth Engine Data Catalog Feature Added OpenLandMap/CLM/CLM LST MOD11A2-DAYNIGHT M/v01 : OpenLandMap Long-term Land Surface Temperature Monthly Day-Night Difference Added OpenLandMap/CLM/CLM LST MOD11A2-DAY M/v01 : OpenLandMap Long-term Land Surface Temperature Daytime Monthly Median Added OpenLandMap/CLM/CLM LST MOD11A2-DAY SD/v01 : OpenLandMap Long-term Land Surface Temperature Daytime Monthly Standard Deviation Added OpenLandMap/CLM/CLM PRECIPITATION SM2RAIN M/v01 : OpenLandMap Precipitation Monthly Added OpenLandMap/PNV/PNV BIOME-TYPE BIOME00K C/v01 : OpenLandMap Potential Distribution of Biomes Added OpenLandMap/PNV/PNV FAPAR PROBA-V D/v01 : OpenLandMap Potential FAPAR Monthly Added OpenLandMap/SOL/SOL BULKDENS-FINEEARTH USDA-4A1H M/v02 : OpenLandMap Soil Bulk Density Added OpenLandMap/SOL/SOL CLAY-WFRACTION USDA-3A1A1A M/v02 : OpenLandMap Clay Content Added OpenLandMap/SOL/SOL GRTGROUP USDA-SOILTAX-HAPLUDALFS P/v01 : OpenLandMap Predicted Hapludalfs Probability Added OpenLandMap/SOL/SOL GRTGROUP USDA-SOILTAX C/v01 : OpenLandMap USDA Soil Taxonomy Great Groups Added OpenLandMap/SOL/SOL ORGANIC-CARBON USDA-6A1C M/v02 : OpenLandMap Soil Organic Carbon Content Added OpenLandMap/SOL/SOL PH-H2O USDA-4C1A2A M/v02 : OpenLandMap Soil pH in H2O Added OpenLandMap/SOL/SOL SAND-WFRACTION USDA-3A1A1A M/v02 : OpenLandMap Sand Content Added OpenLandMap/SOL/SOL TEXTURE-CLASS USDA-TT M/v02 : OpenLandMap Soil Texture Class (USDA System) Added OpenLandMap/SOL/SOL WATERCONTENT-33KPA USDA-4B1C M/v01 : OpenLandMap Soil Water Content at 33kPa (Field Capacity) September 13, 2019 Earth Engine Code Editor Feature Added support for uploading CSV files.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.
- You can learn more about the options for uploading images to Earth Engine in Uploading image assets: Advanced options .

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-08-05 UTC."],[],["The Earth Engine Code Editor, a web-based IDE, allows geospatial workflow development.
- The Code Editor allows importing and managing your own image assets in the Asset Manager, and you can control script execution and appearance when sharing links.
- Script link URL parameters The ui.url module allows programmatic manipulation of the script URL's fragment identifier via get and set methods.
- The visualization tool that appears (Figure 6) allows you to interactively configure layer display parameters.

