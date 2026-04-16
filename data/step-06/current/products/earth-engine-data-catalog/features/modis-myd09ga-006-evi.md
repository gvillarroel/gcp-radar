---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.234Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MYD09GA_006_EVI"
feature_slug: "modis-myd09ga-006-evi"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_EVI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "myd09ga"
  - "006"
  - "evi"
  - "aqua"
  - "daily"
  - "enhanced"
  - "vegetation"
---

# MODIS/MYD09GA_006_EVI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS Aqua daily enhanced vegetation index.

## Extended Definition

MODIS Aqua daily enhanced vegetation index.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_EVI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_EVI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Aqua Daily EVI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_EVI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_EVI)
- Source ID: `feature-recovery-direct-http`
- Final score: 396
- Re-rank relevance: N/A

Evidence snippets:
- MODIS/MYD09GA_006_EVI, aqua,daily,evi,global,modis,surface-reflectance,usgs,vegetation-indices 2002-07-04T00:00:00Z/2023-02-25T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, available from 2002-07-04 to 2023-02-25, provides the Enhanced Vegetation Index (EVI) derived from MODIS/MYD09GA surface reflectance composites, with a daily cadence.
- Dataset Availability 2002-07-04T00:00:00Z–2023-02-25T00:00:00Z Dataset Producer Google Earth Engine Snippet ee.ImageCollection("MODIS/MYD09GA_006_EVI") open_in_new Cadence 1 Day Tags aqua daily evi global modis myd09ga surface-reflectance usgs vegetation-indices Description The Enhanced Vegetation Index (EVI) is generated from the Near-IR, Red and Blue bands of each scene, and ranges in value from -1.0 to 1.0.
- ImageCollection ( 'MODIS/MYD09GA_006_EVI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var colorized = dataset . select ( 'EVI' ); var colorizedVis = { min : 0 , max : 1 , palette : [ 'ffffff' , 'ce7e45' , 'df923d' , 'f1b555' , 'fcd163' , '99b718' , '74a901' , '66a000' , '529400' , '3e8601' , '207401' , '056201' , '004c00' , '023b01' , '012e01' , '011d01' , '011301' ], }; Map . setCenter ( - 7.03 , 31.05 , 2 ); Map . addLayer ( colorized , colorizedVis , 'Colorized' ); Open in Code Editor MODIS Aqua Daily EVI The Enhanced Vegetation Index (EVI) is generated from the Near-IR, Red and Blue bands of each scene, and ranges in value from -1.0 to 1.0.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 EVI MODIS Aqua Daily NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 BAI MODIS Aqua Daily EVI The Enhanced Vegetation Index (EVI) is generated from the Near-IR, Red and Blue bands of each scene, and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDSI MODIS Aqua Daily NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDVI MODIS Aqua Daily NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The MYD09CMG data … aqua brightness-temperature ozone satellite-imagery surface-reflectance MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- MYD09GA version 6.1 provides bands 1-7 in … aqua daily global modis nasa satellite-imagery MYD09GQ.061 Aqua Surface Reflectance Daily Global 250m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day aqua global modis nasa satellite-imagery MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG The MYD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.

