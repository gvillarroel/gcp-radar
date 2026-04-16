---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.164Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MCD43A4_006_NDVI"
feature_slug: "modis-mcd43a4-006-ndvi"
latest_feature_date: "2018-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDVI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "mcd43a4"
  - "006"
  - "ndvi"
  - "combined"
  - "16"
  - "day"
  - "normalized"
---

# MODIS/MCD43A4_006_NDVI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS combined 16-day normalized difference vegetation index dataset.

## Extended Definition

A MODIS combined 16-day normalized difference vegetation index dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDVI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDVI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Combined 16-Day NDVI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDVI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_NDVI)
- Source ID: `feature-recovery-direct-http`
- Final score: 396
- Re-rank relevance: N/A

Evidence snippets:
- MODIS/MCD43A4_006_NDVI, albedo,brdf,daily,global,mcd43a4,modis,nasa,ndvi,reflectance,usgs,vegetation-indices 2000-02-24T00:00:00Z/2023-02-10T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The MODIS/MCD43A4_006_NDVI dataset, available from 2000-02-24 to 2023-02-10 via Google Earth Engine, provides the Normalized Difference Vegetation Index (NDVI) derived from surface reflectance composites.
- Dataset Availability 2000-02-24T00:00:00Z–2023-02-10T00:00:00Z Dataset Producer Google Earth Engine Snippet ee.ImageCollection("MODIS/MCD43A4_006_NDVI") open_in_new Cadence 1 Day Tags albedo brdf daily global mcd43a4 modis nasa ndvi reflectance usgs vegetation-indices Description The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.
- ImageCollection ( 'MODIS/MCD43A4_006_NDVI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var colorized = dataset . select ( 'NDVI' ); var colorizedVis = { min : 0 , max : 1 , palette : [ 'ffffff' , 'ce7e45' , 'df923d' , 'f1b555' , 'fcd163' , '99b718' , '74a901' , '66a000' , '529400' , '3e8601' , '207401' , '056201' , '004c00' , '023b01' , '012e01' , '011d01' , '011301' ], }; Map . setCenter ( - 7.03125 , 31.0529339857 , 2 ); Map . addLayer ( colorized , colorizedVis , 'Colorized' ); Open in Code Editor MODIS Combined 16-Day NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDVI MODIS Combined 16-Day NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDSI MODIS Combined 16-Day NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 EVI MODIS Combined 16-Day NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MOD13A1 MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day evi global modis nasa ndvi MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km The MYD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day evi global modis nasa ndvi MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km The MOD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km The MYD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.

