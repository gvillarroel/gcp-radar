---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.333Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Copernicus Global Ocean Biogeochemical Forecast - CAR"
feature_slug: "copernicus-global-ocean-biogeochemical-forecast-car"
latest_feature_date: "2025-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO"
keywords:
  - "copernicus"
  - "global"
  - "ocean"
  - "biogeochemical"
  - "forecast"
  - "car"
  - "carbon"
  - "related"
---

# Copernicus Global Ocean Biogeochemical Forecast - CAR

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Carbon-related forecasts in the Copernicus global ocean biogeochemical forecast product.

## Extended Definition

Carbon-related forecasts in the Copernicus global ocean biogeochemical forecast product.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO)

## Supporting Pages

### "Copernicus Global Ocean Bio-Geo-Chemical Forecast - CAR \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CAR)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter . date ( '2022-01-01' , '2023-01-01' )); var ph = dataset . select ( 'ph depth1' ); var phVis = { min : 8 , max : 8.2 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 140.5 , 52.2 , 2 ); Map . addLayer ( ph , phVis , 'Global BGC CAR Forecast' ); Open in Code Editor Copernicus Global Ocean Bio-Geo-Chemical Forecast - CAR The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Dataset Availability 2022-01-01T00:00:00Z–2025-09-19T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CAR") open in new Cadence 1 Day Tags copernicus daily forecast marine ocean oceans Description The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- This product includes daily and monthly … COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CAR, copernicus,daily,forecast,marine,ocean,oceans 2022-01-01T00:00:00Z/2025-09-19T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- This product includes daily and monthly mean files of biogeochemical parameters (chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved iron, primary production, phytoplankton, zooplankton, PH, and surface partial pressure of carbon dioxide) over the global ocean.

### "Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2 \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter . date ( '2022-01-01' , '2023-01-01' )); var spco2 = dataset . select ( 'spco2 depth1' ); var spco2Vis = { min : 20 , max : 40 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 140.5 , 52.2 , 2 ); Map . addLayer ( spco2 , spco2Vis , 'Global BGC CO2 Forecast' ); Open in Code Editor Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2 The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Dataset Availability 2022-01-01T00:00:00Z–2025-09-19T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/CO2") open in new Cadence 1 Day Tags copernicus daily forecast marine ocean oceans Description The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- This product includes daily and monthly mean files of biogeochemical parameters (chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved iron, primary production, phytoplankton, zooplankton, PH, and surface partial pressure of carbon dioxide) over the global ocean.
- Page Summary outlined flag This dataset provides a 10-day forecast of surface partial pressure of carbon dioxide over the global ocean, updated weekly.

### "Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Page Summary outlined flag This dataset provides global ocean biogeochemical analysis and forecasts with daily and monthly mean files for parameters like chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved iron, primary production, phytoplankton, zooplankton, PH, and surface partial pressure of carbon dioxide.
- Filter . date ( '2022-01-01' , '2023-01-01' )); var nppv = dataset . select ( 'nppv depth1' ); var nppvVis = { min : 1 , max : 50 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 140.5 , 52.2 , 2 ); Map . addLayer ( nppv , nppvVis , 'Global BGC BIO Forecast' ); Open in Code Editor Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Dataset Availability 2022-01-01T00:00:00Z–2025-09-19T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO") open in new Cadence 1 Day Tags copernicus daily forecast marine ocean oceans Description The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- This product includes daily and monthly mean files of biogeochemical parameters (chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved iron, primary production, phytoplankton, zooplankton, PH, and surface partial pressure of carbon dioxide) over the global ocean.

