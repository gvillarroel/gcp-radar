---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.195Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MOD09A1"
feature_slug: "modis-006-mod09a1"
latest_feature_date: "2017-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09A1"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "modis"
  - "006"
  - "mod09a1"
  - "terra"
  - "surface"
  - "reflectance"
  - "composite"
---

# MODIS/006/MOD09A1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS Terra surface reflectance composite product.

## Extended Definition

A MODIS Terra surface reflectance composite product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09A1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09A1)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### MOD09A1.006 Terra Surface Reflectance 8-Day Global 500m [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09A1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09A1)
- Source ID: `feature-recovery-direct-http`
- Final score: 325
- Re-rank relevance: N/A

Evidence snippets:
- For each pixel, a … MODIS/006/MOD09A1, 8-day,global,modis,nasa,satellite-imagery,sr,surface-reflectance,terra,usgs 2000-02-18T00:00:00Z/2023-02-10T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MOD09A1.006 https://doi.org/10.5067/MODIS/MOD09A1.006 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Dataset Availability 2000-02-18T00:00:00Z–2023-02-10T00:00:00Z Dataset Producer NASA LP DAAC at the USGS EROS Center Earth Engine Snippet ee.ImageCollection("MODIS/006/MOD09A1") open_in_new Cadence 8 Days Tags 8-day global mod09a1 modis nasa satellite-imagery sr surface-reflectance terra usgs Description The MOD09A1 V6 product provides an estimate of the surface spectral reflectance of Terra MODIS bands 1-7 at 500m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- MOD09A1.006 Terra Surface Reflectance 8-Day Global 500m [deprecated] | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog Categories Send feedback MOD09A1.006 Terra Surface Reflectance 8-Day Global 500m [deprecated] Stay organized with collections Save and categorize content based on your preferences.
- Filter . date ( '2018-01-01' , '2018-05-01' )); var trueColor = dataset . select ([ 'sur_refl_b01' , 'sur_refl_b04' , 'sur_refl_b03' ]); var trueColorVis = { min : - 100.0 , max : 3000.0 , }; Map . setCenter ( 6.746 , 46.529 , 6 ); Map . addLayer ( trueColor , trueColorVis , 'True Color' ); Open in Code Editor MOD09A1.006 Terra Surface Reflectance 8-Day Global 500m [deprecated] The MOD09A1 V6 product provides an estimate of the surface spectral reflectance of Terra MODIS bands 1-7 at 500m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- For each pixel, a value is selected from all the acquisitions within the 8-day composite on the basis of high observation coverage, low view angle, the absence of clouds or cloud shadow, and aerosol loading. photo library MODIS/061/MOD09A1 MOD09CMG.061 Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MOD13Q1 MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km The MOD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- Below is a subset of the bands, for a complete list see the MOD08 Band List . photo library MODIS/061/MOD08 M3 MOD09A1.061 Terra Surface Reflectance 8-Day Global 500m The MOD09A1 V6.1 product provides an estimate of the surface spectral reflectance of Terra MODIS bands 1-7 at 500m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDWI MODIS Terra Daily BAI The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the measured reflectance of charcoal).

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Data are temporally weighted to the ninth … albedo black-sky brdf daily global modis MOD09A1.061 Terra Surface Reflectance 8-Day Global 500m The MOD09A1 V6.1 product provides an estimate of the surface spectral reflectance of Terra MODIS bands 1-7 at 500m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day global modis nasa satellite-imagery sr MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- The mosaic consists of pan-sharpened normalized surface reflectance scenes (Landsat ETM+ bands 1, 2, 3, and … antarctica ice landsat-derived lima mosaic satellite-imagery MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter and 1 kilometer resolution.
- MOD09GQ version 6.1 provides bands 1 and … daily global modis nasa satellite-imagery sr MOD09Q1.061 Terra Surface Reflectance 8-Day Global 250m The MOD09Q1 product provides an estimate of the surface spectral reflectance of bands 1 and 2 at 250m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

