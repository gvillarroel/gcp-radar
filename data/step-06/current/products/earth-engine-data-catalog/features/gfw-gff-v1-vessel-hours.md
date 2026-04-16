---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.129Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GFW/GFF/V1/vessel_hours"
feature_slug: "gfw-gff-v1-vessel-hours"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_vessel_hours"
  - "https://developers.google.com/earth-engine/datasets/tags/oceans"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY"
keywords:
  - "gfw"
  - "gff"
  - "v1"
  - "vessel"
  - "hours"
  - "daily"
  - "global"
  - "fishing"
---

# GFW/GFF/V1/vessel_hours

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Daily vessel hours from Global Fishing Watch.

## Extended Definition

Daily vessel hours from Global Fishing Watch.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_vessel_hours](https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_vessel_hours)
- [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY)

## Supporting Pages

### GFW (Global Fishing Watch) Daily Vessel Hours | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_vessel_hours](https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_vessel_hours)
- Source ID: `feature-recovery-direct-http`
- Final score: 338
- Re-rank relevance: N/A

Evidence snippets:
- Also see the main GFW site for program information, fully interactive visualization maps, … GFW/GFF/V1/vessel_hours, fishing,gfw,marine,monthly,ocean,oceans 2012-01-01T00:00:00Z/2017-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset from Global Fishing Watch (GFW) provides daily fishing vessel presence data from 2012 to 2017, measured in hours per square kilometer.
- Dataset Availability 2012-01-01T00:00:00Z–2017-01-01T00:00:00Z Dataset Producer Global Fishing Watch Earth Engine Snippet ee.ImageCollection("GFW/GFF/V1/vessel_hours") open_in_new Cadence 1 Day Tags fishing gfw marine monthly ocean oceans Description Fishing vessel presence, measured in hours per square km.
- GFW (Global Fishing Watch) Daily Vessel Hours | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog All Datasets Send feedback GFW (Global Fishing Watch) Daily Vessel Hours Stay organized with collections Save and categorize content based on your preferences.
- Filter . date ( '2016-12-01' , '2017-01-01' )); var trawlers = dataset . select ( 'trawlers' ); var trawlersVis = { min : 0.0 , max : 5.0 , }; Map . setCenter ( 130.61 , 34.287 , 8 ); Map . addLayer ( trawlers . max (), trawlersVis , 'Trawlers' ); Open in Code Editor GFW (Global Fishing Watch) Daily Vessel Hours Fishing vessel presence, measured in hours per square km.

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

### "Datasets tagged oceans in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)
- Source ID: `site-docs-root-3`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Also see the main GFW site for program … fishing gfw marine monthly ocean oceans GFW (Global Fishing Watch) Daily Vessel Hours Fishing vessel presence, measured in hours per square km.
- Global Fishing Watch datasets track daily fishing and vessel hours based on inferred activity and presence.
- GCOM-C conducts long-term and continuous global observation and data collection to elucidate the mechanism behind fluctuations in radiation budget and carbon cycle needed to make accurate … climate g-portal gcom gcom-c jaxa ocean GFW (Global Fishing Watch) Daily Fishing Hours Fishing effort, measured in hours of inferred fishing activity.
- The dataset spans from 2020 to 2150 and includes projections for various … ipcc ocean oceans Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.

