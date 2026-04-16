---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.210Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MCD43A2"
feature_slug: "modis-006-mcd43a2"
latest_feature_date: "2017-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A2"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "modis"
  - "006"
  - "mcd43a2"
  - "brdf"
  - "albedo"
  - "quality"
  - "daily"
  - "global"
---

# MODIS/006/MCD43A2

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS BRDF/albedo quality daily global 500 m product.

## Extended Definition

MODIS BRDF/albedo quality daily global 500 m product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A2](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A2)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A2](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A2)
- Source ID: `feature-recovery-direct-http`
- Final score: 395
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2000-02-24T00:00:00Z–2023-02-10T00:00:00Z Dataset Producer NASA LP DAAC at the USGS EROS Center Earth Engine Snippet ee.ImageCollection("MODIS/006/MCD43A2") open_in_new Cadence 1 Day Tags albedo brdf daily global modis nasa quality reflectance satellite-imagery usgs Description The MCD43A2 V6 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter daily 16-day product.
- The MCD43A2 contains individual band quality and observation information for the MODIS land … MODIS/006/MCD43A2, albedo,brdf,daily,global,modis,nasa,reflectance,satellite-imagery,usgs 2000-02-24T00:00:00Z/2023-02-10T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MCD43A2.006 https://doi.org/10.5067/MODIS/MCD43A2.006 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Filter . date ( '2018-01-01' , '2018-05-01' )); var defaultVisualization = dataset . select ( 'Snow_BRDF_Albedo' ); var defaultVisualizationVis = { min : 0.0 , max : 1.0 , }; Map . setCenter ( 6.746 , 46.529 , 6 ); Map . addLayer ( defaultVisualization , defaultVisualizationVis , 'Default visualization' ); Open in Code Editor MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated] The MCD43A2 V6 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter daily 16-day product.
- The MCD43A2 contains individual band quality and observation information for the MODIS land bands 1-7, along with the overall BRDF/Albedo quality information.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- The MCD43A1 algorithm, as is with all combined products, chooses the best representative pixel from a pool that includes all the acquisitions from both the Terra and Aqua sensors from the retrieval period. photo library MODIS/061/MCD43A1 MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m The MCD43A2 V6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter daily 16-day product.
- This product combines data from both the Terra and Aqua spacecrafts, choosing the best representative pixel from the 16-day period. photo library MODIS/061/MCD43A4 MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG The MCD43C3 Version 6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Albedo dataset is produced daily using 16 days of Terra and Aqua MODIS data in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG).
- For more information see the MAIAC user guide . photo library MODIS/061/MCD19A2 GRANULES MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m The MCD43A1 V6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Model Parameters dataset is a 500 meter daily 16-day product.
- It contains all the quality information for the corresponding 16-day MCD43A3 Albedo and the MCD43A4 Nadir-BRDF (NBAR) products. photo library MODIS/061/MCD43A2 MCD43A3.061 MODIS Albedo Daily 500m The MCD43A3 V6.1 Albedo Model dataset is a daily 16-day product.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- The Julian date represents the 9th day of the 16-day retrieval period, and consequently the observations are weighted to estimate the BRDF/Albedo for that day. … albedo brdf daily global modis nasa MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m The MCD43A2 V6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter daily 16-day product.
- These are adjusted using a bidirectional reflectance distribution function to model the values as if they were collected from a nadir view. … albedo brdf daily global modis nasa MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG The MCD43C3 Version 6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Albedo dataset is produced daily using 16 days of Terra and Aqua MODIS data in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG).
- The VNP43IA2 product is produced daily using 16 days of VIIRS … land nasa noaa satellite-imagery surface viirs VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid The NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP) Visible Infrared Imaging Radiometer Suite (VIIRS) Nadir Bidirectional Reflectance Distribution Function (BRDF) Adjusted Reflectance (NBAR) Version 2 product provides NBAR estimates at 500 meter resolution.
- The VNP43IA1 product is produced daily using 16 days of VIIRS … land nasa noaa satellite-imagery surface viirs VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid The Suomi National Polar-Orbiting Partnership (Suomi NPP) NASA Visible Infrared Imaging Radiometer Suite (VIIRS) Bidirectional Reflectance Distribution Function (BRDF) and Albedo Quality (VNP43IA2) Version 1 product provides BRDF and Albedo quality at 500m resolution.

