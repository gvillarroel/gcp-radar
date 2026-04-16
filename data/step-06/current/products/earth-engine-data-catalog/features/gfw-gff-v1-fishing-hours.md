---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.128Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GFW/GFF/V1/fishing_hours"
feature_slug: "gfw-gff-v1-fishing-hours"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_fishing_hours"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY"
keywords:
  - "gfw"
  - "gff"
  - "v1"
  - "fishing"
  - "hours"
  - "daily"
  - "global"
  - "watch"
---

# GFW/GFF/V1/fishing_hours

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Daily fishing hours from Global Fishing Watch.

## Extended Definition

Daily fishing hours from Global Fishing Watch.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_fishing_hours](https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_fishing_hours)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY)

## Supporting Pages

### GFW (Global Fishing Watch) Daily Fishing Hours | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_fishing_hours](https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_fishing_hours)
- Source ID: `feature-recovery-direct-http`
- Final score: 356
- Re-rank relevance: N/A

Evidence snippets:
- Also see the main GFW site for program information, fully interactive visualization maps, … GFW/GFF/V1/fishing_hours, fishing,gfw,marine,monthly,ocean,oceans 2012-01-01T00:00:00Z/2017-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Global Fishing Watch dataset, available from 2012 to 2017, provides daily fishing effort data, measured in hours, from various gear types.
- Dataset Availability 2012-01-01T00:00:00Z–2017-01-01T00:00:00Z Dataset Producer Global Fishing Watch Earth Engine Snippet ee.ImageCollection("GFW/GFF/V1/fishing_hours") open_in_new Cadence 1 Day Tags fishing gfw marine monthly ocean oceans Description Fishing effort, measured in hours of inferred fishing activity.
- GFW (Global Fishing Watch) Daily Fishing Hours | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog All Datasets Send feedback GFW (Global Fishing Watch) Daily Fishing Hours Stay organized with collections Save and categorize content based on your preferences.
- Filter . date ( '2016-12-01' , '2017-01-01' )); var trawlers = dataset . select ( 'trawlers' ); var trawlersVis = { min : 0.0 , max : 5.0 , }; Map . setCenter ( 16.201 , 36.316 , 7 ); Map . addLayer ( trawlers . max (), trawlersVis , 'Trawlers' ); Open in Code Editor GFW (Global Fishing Watch) Daily Fishing Hours Fishing effort, measured in hours of inferred fishing activity.

### "Global Ocean Physics Analysis and Forecast Daily \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The time series is aggregated in time in order to reach … COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY, copernicus,daily,forecast,marine,oceans 2022-06-01T00:00:00Z/2026-04-19T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Filter . date ( '2024-07-01' , '2024-07-15' )); var elevation = dataset . select ( 'zos' ); var elevationVis = { min : - 2.0 , max : 1.5 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 140.5 , 52.2 , 2 ); Map . addLayer ( elevation , elevationVis , 'Sea Surface Height' ); Open in Code Editor Global Ocean Physics Analysis and Forecast Daily Copernicus Marine Physics 2D Daily Mean Fields (cmems mod glo phy anfc 0.083deg P1D-m) deliver global daily-averaged ocean surface and bottom variables at 8km resolution.
- Dataset Availability 2022-06-01T00:00:00Z–2026-04-19T00:00:00Z Dataset Producer Copernicus Marine Service Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY") open in new Cadence 1 Day Tags copernicus daily forecast marine oceans Description Copernicus Marine Physics 2D Daily Mean Fields (cmems mod glo phy anfc 0.083deg P1D-m) deliver global daily-averaged ocean surface and bottom variables at 8km resolution.
- Home Earth Engine Data Catalog All Datasets Send feedback Global Ocean Physics Analysis and Forecast Daily Stay organized with collections Save and categorize content based on your preferences.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The GFSAD products are derived through multi-sensor remote sensing data (e.g., Landsat, MODIS, AVHRR), secondary data, and field-plot data … agriculture crop landcover usgs GFW (Global Fishing Watch) Daily Fishing Hours Fishing effort, measured in hours of inferred fishing activity.
- Also see the main GFW site for program … fishing gfw marine monthly ocean oceans GFW (Global Fishing Watch) Daily Vessel Hours Fishing vessel presence, measured in hours per square km.
- The algorithm chooses the best pixel available from all the … fpar global lai modis nasa plant-productivity MCD18A1.062 Surface Radiation Daily/3-Hour The MCD18A1 Version 6.2 is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Downward Shortwave Radiation (DSR) gridded Level 3 product produced daily at 1 kilometer pixel resolution with estimates of DSR every 3 hours.
- This Level-3 (L3) soil moisture product provides a daily composite of global land surface conditions retrieved by the Soil Moisture Active Passive (SMAP) L-Band … drought nasa smap soil soil-moisture surface SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture The SMAP Level-4 (L4) Soil Moisture product includes surface soil moisture (0-5 cm vertical average), root-zone soil moisture (0-100 cm vertical average), and additional research products (not validated), including surface meteorological forcing variables, soil temperature, evapotranspiration, and net radiation.

