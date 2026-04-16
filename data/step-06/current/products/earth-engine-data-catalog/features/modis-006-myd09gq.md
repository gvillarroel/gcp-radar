---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.223Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MYD09GQ"
feature_slug: "modis-006-myd09gq"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09GQ"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "modis"
  - "006"
  - "myd09gq"
  - "aqua"
  - "daily"
  - "surface"
  - "reflectance"
  - "250"
---

# MODIS/006/MYD09GQ

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS Aqua daily surface reflectance at 250 m.

## Extended Definition

MODIS Aqua daily surface reflectance at 250 m.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09GQ](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09GQ)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### MYD09GQ.006 Aqua Surface Reflectance Daily Global 250m [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09GQ](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09GQ)
- Source ID: `feature-recovery-direct-http`
- Final score: 359
- Re-rank relevance: N/A

Evidence snippets:
- MYD09GQ version 6 provides bands 1 and 2 at a 250m resolution … MODIS/006/MYD09GQ, aqua,daily,global,modis,nasa,satellite-imagery,sr,surface-reflectance,usgs 2002-07-04T00:00:00Z/2023-02-25T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MYD09GQ.006 https://doi.org/10.5067/MODIS/MYD09GQ.006 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["This dataset, MYD09GQ version 6, offers daily estimates of surface spectral reflectance, corrected for atmospheric gases and aerosols, from 2002-07-04 to 2023-02-25.
- Dataset Availability 2002-07-04T00:00:00Z–2023-02-25T00:00:00Z Dataset Producer NASA LP DAAC at the USGS EROS Center Earth Engine Snippet ee.ImageCollection("MODIS/006/MYD09GQ") open_in_new Cadence 1 Day Tags aqua daily global modis myd09gq nasa satellite-imagery sr surface-reflectance usgs Description The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- MYD09GQ.006 Aqua Surface Reflectance Daily Global 250m [deprecated] | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog Categories Send feedback MYD09GQ.006 Aqua Surface Reflectance Daily Global 250m [deprecated] Stay organized with collections Save and categorize content based on your preferences.
- Filter . date ( '2018-01-01' , '2018-05-01' )); var falseColorVis = { min : - 100.0 , max : 8000.0 , bands : [ 'sur_refl_b02' , 'sur_refl_b02' , 'sur_refl_b01' ], }; Map . setCenter ( 6.746 , 46.529 , 2 ); Map . addLayer ( dataset , falseColorVis , 'False Color' ); Open in Code Editor MYD09GQ.006 Aqua Surface Reflectance Daily Global 250m [deprecated] The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- MYD09GA version 6.1 provides bands 1-7 in a daily gridded L2G product in the sinusoidal projection, including 500m reflectance values and 1km observation and geolocation statistics. photo library MODIS/061/MYD09GA MYD09GQ.061 Aqua Surface Reflectance Daily Global 250m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- For each pixel, a value is selected from all the acquisitions within the 8-day composite on the basis of high observation coverage, low view angle, the absence of clouds or cloud shadow, and aerosol loading. photo library MODIS/061/MYD09A1 MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- Additional details regarding the methodology used to create the data are available in the Algorithm Theoretical Basis Document photo library MODIS/061/MCD18C2 MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.
- This product is meant to be used in conjunction with the MYD09GA where important quality and viewing geometry information is stored. photo library MODIS/061/MYD09GQ MYD09Q1.061 Aqua Surface Reflectance 8-Day Global 250m The MYD09Q1 product provides an estimate of the surface spectral reflectance of bands 1 and 2 at 250m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- MYD09GQ version 6.1 provides bands 1 and … aqua daily global modis nasa satellite-imagery MYD09Q1.061 Aqua Surface Reflectance 8-Day Global 250m The MYD09Q1 product provides an estimate of the surface spectral reflectance of bands 1 and 2 at 250m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- MYD09GA version 6.1 provides bands 1-7 in … aqua daily global modis nasa satellite-imagery MYD09GQ.061 Aqua Surface Reflectance Daily Global 250m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day aqua global modis nasa satellite-imagery MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG The MYD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.

