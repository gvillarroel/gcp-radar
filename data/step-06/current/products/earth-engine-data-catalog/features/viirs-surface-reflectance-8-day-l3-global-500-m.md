---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.451Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "VIIRS Surface Reflectance 8-Day L3 Global 500 m"
feature_slug: "viirs-surface-reflectance-8-day-l3-global-500-m"
latest_feature_date: "2024-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "viirs"
  - "surface"
  - "reflectance"
  - "day"
  - "l3"
  - "global"
  - "500"
  - "level"
---

# VIIRS Surface Reflectance 8-Day L3 Global 500 m

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A VIIRS surface reflectance Level 3 dataset with 8-day global 500 m coverage.

## Extended Definition

A VIIRS surface reflectance Level 3 dataset with 8-day global 500 m coverage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### "Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Filter . date ( '2025-03-01' , '2025-06-01' )); var NRT = dataset . select ( 'dos' ); var NRTVis = { min : 1020.41 , max : 1027.596 , palette : [ "040613" , "121328" , "3F59A5" , "3E80C0" , "3EADCB" , "8CCBD6" , "EAFDFD" ], }; Map . setCenter ( 71 , 52 , 2 ); Map . addLayer ( NRT , NRTVis , 'DOS' ); Open in Code Editor Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- Dataset Availability 2023-01-01T00:00:00Z–2026-04-04T12:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL SEA SURFACE/NRT DAILY") open in new Cadence 1 Day Tags copernicus marine oceans Description Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- Page Summary outlined flag This dataset provides daily, global, and gap-free Level-4 analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at 1/8 degree resolution.
- This dataset provides the Near-Real-Time (NRT) version of the daily, global, Level-4 analysis for Sea Surface Salinity (SSS) and Sea Surface Density (SSD).

### "Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Filter . date ( '2023-12-16' , '2023-12-17' )); var SOS = dataset . select ( 'sos' ); var SOSVis = { min : 27.869 , max : 36.981 , palette : [ "040613" , "121328" , "3F59A5" , "3E80C0" , "3EADCB" , "8CCBD6" , "EAFDFD" ], }; Map . setCenter ( 71 , 52 , 2 ); Map . addLayer ( SOS , SOSVis , 'SOS' ); Open in Code Editor Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- Dataset Availability 1993-01-01T00:00:00Z–2024-12-15T12:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY") open in new Cadence 1 Day Tags copernicus marine oceans Description Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- This dataset provides the Multi-Year Reprocessed version of the daily, global, Level-4 analysis for Sea Surface Salinity (SSS) and Sea Surface Density (SSD).
- This product is generated by blending observations from multiple … COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY, copernicus,marine,oceans 1993-01-01T00:00:00Z/2024-12-15T12:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Data are provided for three imagery bands (I1, I2, I3) at nominal 500 meter resolution ( 463 meter) … daily nasa noaa npp reflectance satellite-imagery VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m The 8-day Visible Infrared Imaging Radiometer Suite (VIIRS) Surface Reflectance (VNP09H1) Version 1 composite product provides an estimate of land surface reflectance from the Suomi National Polar-orbiting Partnership (Suomi NPP) VIIRS sensor for three imagery bands (I1, I2, I3) at nominal 500m resolution ( 463m).
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.
- These images contain 5 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal … cfmask cloud fmask global l9sr landsat VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km The Visible Infrared Imaging Radiometer Suite (VIIRS) daily surface reflectance (VNP09GA) product provides an estimate of land surface reflectance from the Suomi National Polar-Orbiting Partnership (S-NPP) VIIRS sensor.
- The VNP43IA2 product is produced daily using 16 days of VIIRS … land nasa noaa satellite-imagery surface viirs VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid The NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP) Visible Infrared Imaging Radiometer Suite (VIIRS) Nadir Bidirectional Reflectance Distribution Function (BRDF) Adjusted Reflectance (NBAR) Version 2 product provides NBAR estimates at 500 meter resolution.

