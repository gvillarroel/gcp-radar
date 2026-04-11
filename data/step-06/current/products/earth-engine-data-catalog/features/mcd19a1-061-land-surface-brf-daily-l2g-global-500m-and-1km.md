---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.501Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MCD19A1.061 Land Surface BRF Daily L2G Global 500m and 1km"
feature_slug: "mcd19a1-061-land-surface-brf-daily-l2g-global-500m-and-1km"
latest_feature_date: "2023-09-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY"
keywords:
  - "mcd19a1"
  - "061"
  - "land"
  - "surface"
  - "brf"
  - "daily"
  - "l2g"
  - "global"
---

# MCD19A1.061 Land Surface BRF Daily L2G Global 500m and 1km

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

MCD19A1.061 provides daily global land surface BRF at 500 m and 1 km resolution.

## Extended Definition

MCD19A1.061 provides daily global land surface BRF at 500 m and 1 km resolution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY)

## Supporting Pages

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Additional details regarding the methodology used to create the data are available in the Algorithm Theoretical Basis Document photo library MODIS/061/MCD18C2 MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.
- The MOD21A1N product contains the calculated LST as well as quality control, the three emissivity bands, view zenith angle, and time of observation. photo library MODIS/061/MOD21A1N MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG The MOD21C1 dataset is produced daily in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG) from daytime Level 2 Gridded (L2G) intermediate LST products.
- The MYD21A1N product contains the calculated LST as well as quality control, the three emissivity bands, view zenith angle, and time of observation. photo library MODIS/061/MYD21A1N MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG The MYD21C1 dataset is produced daily in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG) from daytime Level 2 Gridded (L2G) intermediate LST products.
- The MOD21A1D product contains the calculated LST as well as quality control, the three emissivity bands, view zenith angle, and time of observation. photo library MODIS/061/MOD21A1D MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km The MOD21A1N dataset is produced daily from nighttime Level 2 Gridded (L2G) intermediate LST products at a spatial resolution of 1,000 meters.

### "Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Filter . date ( '2025-03-01' , '2025-06-01' )); var NRT = dataset . select ( 'dos' ); var NRTVis = { min : 1020.41 , max : 1027.596 , palette : [ "040613" , "121328" , "3F59A5" , "3E80C0" , "3EADCB" , "8CCBD6" , "EAFDFD" ], }; Map . setCenter ( 71 , 52 , 2 ); Map . addLayer ( NRT , NRTVis , 'DOS' ); Open in Code Editor Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- This product is generated by blending observations from multiple … COPERNICUS/MARINE/GLOBAL SEA SURFACE/NRT DAILY, copernicus,marine,oceans 2023-01-01T00:00:00Z/2026-04-04T12:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Highlights and key features of the licence are provided in this document License Citations Citations: Copernicus Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density: Global Ocean Satellite and In-Situ Observations, CNR (Rome, Italy) is providing daily Sea Surface Salinity and Sea Surface Density analyses. doi:10.48670/moi-00051 Explore with Earth Engine Important: Earth Engine is a platform for petabyte-scale scientific analysis and visualization of geospatial datasets, both for public benefit and for business and government users.
- Dataset Availability 2023-01-01T00:00:00Z–2026-04-04T12:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL SEA SURFACE/NRT DAILY") open in new Cadence 1 Day Tags copernicus marine oceans Description Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.

### "Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Filter . date ( '2023-12-16' , '2023-12-17' )); var SOS = dataset . select ( 'sos' ); var SOSVis = { min : 27.869 , max : 36.981 , palette : [ "040613" , "121328" , "3F59A5" , "3E80C0" , "3EADCB" , "8CCBD6" , "EAFDFD" ], }; Map . setCenter ( 71 , 52 , 2 ); Map . addLayer ( SOS , SOSVis , 'SOS' ); Open in Code Editor Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- This product is generated by blending observations from multiple … COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY, copernicus,marine,oceans 1993-01-01T00:00:00Z/2024-12-15T12:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Highlights and key features of the licence are provided in this document License Citations Citations: Copernicus Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density: Global Ocean Satellite and In-Situ Observations, CNR (Rome, Italy) is providing daily Sea Surface Salinity and Sea Surface Density analyses. doi:10.48670/moi-00051 Explore with Earth Engine Important: Earth Engine is a platform for petabyte-scale scientific analysis and visualization of geospatial datasets, both for public benefit and for business and government users.
- Dataset Availability 1993-01-01T00:00:00Z–2024-12-15T12:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY") open in new Cadence 1 Day Tags copernicus marine oceans Description Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.

