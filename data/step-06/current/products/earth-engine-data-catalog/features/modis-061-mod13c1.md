---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.516Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/061/MOD13C1"
feature_slug: "modis-061-mod13c1"
latest_feature_date: "2024-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13C1"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/vegetation-indices"
keywords:
  - "modis"
  - "061"
  - "mod13c1"
  - "provides"
  - "terra"
  - "vegetation"
  - "indices"
  - "16"
---

# MODIS/061/MOD13C1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MOD13C1.061 provides Terra vegetation indices on a 16-day global 0.05-degree climate modeling grid.

## Extended Definition

MOD13C1.061 provides Terra vegetation indices on a 16-day global 0.05-degree climate modeling grid.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13C1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13C1)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)

## Supporting Pages

### MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13C1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13C1)
- Source ID: `feature-recovery-direct-http`
- Final score: 329
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2000-02-18T00:00:00Z–2026-03-22T00:00:00Z Dataset Producer NASA LP DAAC at the USGS EROS Center Earth Engine Snippet ee.ImageCollection("MODIS/061/MOD13C1") open_in_new Cadence 16 Days Tags 16-day global nasa terra usgs vegetation vegetation-indices Description The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- The first is the Normalized Difference Vegetation Index (NDVI), which maintains continuity with the existing National Oceanic and Atmospheric … MODIS/061/MOD13C1, 16-day,global,nasa,terra,usgs,vegetation,vegetation-indices 2000-02-18T00:00:00Z/2026-03-22T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MOD13C1.061 https://doi.org/10.5067/MODIS/MOD13C1.061 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Filter . date ( '2015-01-01' , '2015-05-01' )); var ndvi = dataset . select ( 'NDVI' ); print ( ndvi ); var ndviVis = { min : 0 , max : .9 , palette : [ 'ffffff' , 'ce7e45' , 'df923d' , 'f1b555' , 'fcd163' , '99b718' , '74a901' , '66a000' , '529400' , '3e8601' , '207401' , '056201' , '004c00' , '023b01' , '012e01' , '011d01' , '011301' ], }; Map . setCenter ( 6.746 , 46.529 , 2 ); Map . addLayer ( ndvi , ndviVis , 'NDVI' ); Open in Code Editor MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog All Datasets Send feedback MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid Stay organized with collections Save and categorize content based on your preferences.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- The MOD13C1 has data fields for NDVI, EVI, VI QA, reflectance data, angular information, and spatial statistics such as mean, standard deviation, and number of used input pixels at the 0.05 degree CMG resolution. photo library MODIS/061/MOD13C1 MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m The MOD13Q1 V6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- In generating this monthly product, the algorithm ingests all the MOD13A2 products that overlap the month and employs a weighted temporal average. photo library MODIS/061/MOD13A3 MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MOD13A1 MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- Each of the MOD11A2 QA values are set based on what majority of input daily QA values are for any given pixel. photo library MODIS/061/MOD11A2 MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m The MOD13A1 V6.1 product provides a Vegetation Index (VI) value at a per pixel basis.

### "Datasets tagged vegetation-indices in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- Source ID: `site-docs-root-3`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Vegetation indices are used for global monitoring of vegetation … evi global modis monthly nasa ndvi MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day evi global modis nasa ndvi MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km The MYD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- In generating this monthly product, the algorithm ingests all the MYD13A2 products that … aqua evi global modis monthly nasa MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MYD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.

