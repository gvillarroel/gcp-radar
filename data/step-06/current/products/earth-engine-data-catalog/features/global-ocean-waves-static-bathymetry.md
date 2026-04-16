---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.294Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Global Ocean Waves Static Bathymetry"
feature_slug: "global-ocean-waves-static-bathymetry"
latest_feature_date: "2025-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/oceans"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO"
keywords:
  - "global"
  - "ocean"
  - "waves"
  - "static"
  - "bathymetry"
---

# Global Ocean Waves Static Bathymetry

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Static bathymetry for the global ocean waves product.

## Extended Definition

Static bathymetry for the global ocean waves product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO)

## Supporting Pages

### "Datasets tagged oceans in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)
- Source ID: `site-docs-root-3`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- This product includes 3-hourly instantaneous fields of integrated wave parameters from the total spectrum … copernicus forecast hourly marine oceans Global Ocean Waves Static Bathymetry Static bathymetry for the Global Ocean Waves Analysis and Forecast system.
- The time series is aggregated in … copernicus daily forecast marine oceans Global Ocean Waves Analysis and Forecast The operational global ocean analysis and forecast system of Meteo-France with a resolution of 1/12 degree is providing daily analyses and 10 days forecasts for the global ocean sea surface waves.
- Copernicus offers various global ocean datasets including bio-geo-chemical and physics forecasts, satellite ocean color data, and waves analysis.
- The dataset spans from 2020 to 2150 and includes projections for various … ipcc ocean oceans Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- This product includes 3-hourly instantaneous fields of integrated wave parameters from the total spectrum … copernicus forecast hourly marine oceans Global Ocean Waves Static Bathymetry Static bathymetry for the Global Ocean Waves Analysis and Forecast system.
- MFWAM uses the computing code … bathymetry copernicus marine oceans Global PALSAR-2/PALSAR Yearly Mosaic, version 1 A newer version of this dataset with data for 2015-2021 can be found in JAXA/ALOS/PALSAR/YEARLY/SAR EPOCH The global 25m PALSAR/PALSAR-2 mosaic is a seamless global SAR image created by mosaicking strips of SAR imagery from PALSAR/PALSAR-2.
- The WorldCover product comes with 11 land cover classes and has been generated in the framework of … esa landcover landuse landuse-landcover sentinel1-derived sentinel2-derived ETOPO1: Global 1 Arc-Minute Elevation ETOPO1 is a 1 arc-minute global relief model of Earth''s surface that integrates land topography and ocean bathymetry.
- The time series is aggregated in … copernicus daily forecast marine oceans Global Ocean Waves Analysis and Forecast The operational global ocean analysis and forecast system of Meteo-France with a resolution of 1/12 degree is providing daily analyses and 10 days forecasts for the global ocean sea surface waves.

### "Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_BIO)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- This product includes daily and monthly … COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO, copernicus,daily,forecast,marine,ocean,oceans 2022-01-01T00:00:00Z/2025-09-19T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Filter . date ( '2022-01-01' , '2023-01-01' )); var nppv = dataset . select ( 'nppv depth1' ); var nppvVis = { min : 1 , max : 50 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 140.5 , 52.2 , 2 ); Map . addLayer ( nppv , nppvVis , 'Global BGC BIO Forecast' ); Open in Code Editor Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Dataset Availability 2022-01-01T00:00:00Z–2025-09-19T00:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO") open in new Cadence 1 Day Tags copernicus daily forecast marine ocean oceans Description The Operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree is providing 10 days of 3D global ocean forecasts updated weekly.
- Page Summary outlined flag This dataset provides global ocean biogeochemical analysis and forecasts with daily and monthly mean files for parameters like chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved iron, primary production, phytoplankton, zooplankton, PH, and surface partial pressure of carbon dioxide.

