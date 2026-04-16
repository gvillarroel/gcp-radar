---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.231Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MOD09GA_006_NDWI"
feature_slug: "modis-mod09ga-006-ndwi"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_NDWI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "mod09ga"
  - "006"
  - "ndwi"
  - "terra"
  - "daily"
  - "normalized"
  - "difference"
---

# MODIS/MOD09GA_006_NDWI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS Terra daily normalized difference water index.

## Extended Definition

MODIS Terra daily normalized difference water index.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_NDWI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_NDWI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Terra Daily NDWI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_NDWI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_NDWI)
- Source ID: `feature-recovery-direct-http`
- Final score: 428
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2000-02-24T00:00:00Z–2023-02-17T00:00:00Z Dataset Producer Google Earth Engine Snippet ee.ImageCollection("MODIS/MOD09GA_006_NDWI") open_in_new Cadence 1 Day Tags daily global mod09ga modis ndwi surface-reflectance terra usgs vegetation-indices Description The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.
- See Gao (1996) … MODIS/MOD09GA_006_NDWI, daily,global,modis,ndwi,surface-reflectance,terra,usgs,vegetation-indices 2000-02-24T00:00:00Z/2023-02-17T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- ImageCollection ( 'MODIS/MOD09GA_006_NDWI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var colorized = dataset . select ( 'NDWI' ); var colorizedVis = { min : 0.0 , max : 1.0 , palette : [ '0000ff' , '00ffff' , 'ffff00' , 'ff0000' , 'ffffff' ], }; Map . setCenter ( - 7.03125 , 31.0529339857 , 2 ); Map . addLayer ( colorized , colorizedVis , 'Colorized' ); Open in Code Editor MODIS Terra Daily NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MOD09GA surface reflectance composites. photo library MODIS/MOD09GA 006 NDVI MODIS Terra Daily NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.
- This product is generated from the MODIS/006/MOD09GA surface reflectance composites. photo library MODIS/MOD09GA 006 NDWI MOD44W.005 Land Water Mask Derived From MODIS and SRTM The Global Water Mask uses the SWBD (SRTM Water Body Data) in combination with MODIS 250m data to create a complete global map of surface water at 250m spatial resolution, circa 2000-2002.
- This product is generated from the MODIS/006/MOD09GA surface reflectance composites. photo library MODIS/MOD09GA 006 EVI MODIS Terra Daily NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- This product is generated from the MODIS/006/MOD09GA surface reflectance composites. photo library MODIS/MOD09GA 006 NDSI MODIS Terra Daily NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.
- The MOD09CMG data … brightness-temperature ozone satellite-imagery surface-reflectance terra MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- MOD09GA version 6.1 provides bands 1-7 in … daily global modis nasa satellite-imagery sr MOD09GQ.061 Terra Surface Reflectance Daily Global 250m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day global modis nasa satellite-imagery sr MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

