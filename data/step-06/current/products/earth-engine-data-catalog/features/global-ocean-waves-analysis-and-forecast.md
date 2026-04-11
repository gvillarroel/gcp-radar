---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.336Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Global Ocean Waves Analysis and Forecast"
feature_slug: "global-ocean-waves-analysis-and-forecast"
latest_feature_date: "2025-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR"
keywords:
  - "global"
  - "ocean"
  - "waves"
  - "analysis"
  - "and"
  - "forecast"
  - "wave"
---

# Global Ocean Waves Analysis and Forecast

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Global ocean wave analysis and forecast data.

## Extended Definition

Global ocean wave analysis and forecast data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR)

## Supporting Pages

### "Global Ocean Physics Analysis and Forecast Daily \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The time series is aggregated in time in order to reach … COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY, copernicus,daily,forecast,marine,oceans 2022-06-01T00:00:00Z/2026-04-19T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Filter . date ( '2024-07-01' , '2024-07-15' )); var elevation = dataset . select ( 'zos' ); var elevationVis = { min : - 2.0 , max : 1.5 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 140.5 , 52.2 , 2 ); Map . addLayer ( elevation , elevationVis , 'Sea Surface Height' ); Open in Code Editor Global Ocean Physics Analysis and Forecast Daily Copernicus Marine Physics 2D Daily Mean Fields (cmems mod glo phy anfc 0.083deg P1D-m) deliver global daily-averaged ocean surface and bottom variables at 8km resolution.
- Dataset Availability 2022-06-01T00:00:00Z–2026-04-19T00:00:00Z Dataset Producer Copernicus Marine Service Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY") open in new Cadence 1 Day Tags copernicus daily forecast marine oceans Description Copernicus Marine Physics 2D Daily Mean Fields (cmems mod glo phy anfc 0.083deg P1D-m) deliver global daily-averaged ocean surface and bottom variables at 8km resolution.
- Global Ocean Physics Analysis and Forecast. doi:10.48670/moi-00016 Explore with Earth Engine Important: Earth Engine is a platform for petabyte-scale scientific analysis and visualization of geospatial datasets, both for public benefit and for business and government users.

### "Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This product includes daily and monthly … COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO, copernicus,daily,forecast,marine,ocean,oceans 2022-01-01T00:00:00Z/2025-09-19T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Filter . date ( '2022-01-01' , '2023-01-01' )); var nppv = dataset . select ( 'nppv depth1' ); var nppvVis = { min : 1 , max : 50 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 140.5 , 52.2 , 2 ); Map . addLayer ( nppv , nppvVis , 'Global BGC BIO Forecast' ); Open in Code Editor Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Dataset Availability 2022-01-01T00:00:00Z–2025-09-19T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO") open in new Cadence 1 Day Tags copernicus daily forecast marine ocean oceans Description The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Page Summary outlined flag This dataset provides global ocean biogeochemical analysis and forecasts with daily and monthly mean files for parameters like chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved iron, primary production, phytoplankton, zooplankton, PH, and surface partial pressure of carbon dioxide.

### "Copernicus Global Ocean Bio-Geo-Chemical Forecast - CAR \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This product includes daily and monthly … COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CAR, copernicus,daily,forecast,marine,ocean,oceans 2022-01-01T00:00:00Z/2025-09-19T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Filter . date ( '2022-01-01' , '2023-01-01' )); var ph = dataset . select ( 'ph depth1' ); var phVis = { min : 8 , max : 8.2 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 140.5 , 52.2 , 2 ); Map . addLayer ( ph , phVis , 'Global BGC CAR Forecast' ); Open in Code Editor Copernicus Global Ocean Bio-Geo-Chemical Forecast - CAR The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Dataset Availability 2022-01-01T00:00:00Z–2025-09-19T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CAR") open in new Cadence 1 Day Tags copernicus daily forecast marine ocean oceans Description The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Home Earth Engine Data Catalog All Datasets Send feedback Copernicus Global Ocean Bio-Geo-Chemical Forecast - CAR Stay organized with collections Save and categorize content based on your preferences.

