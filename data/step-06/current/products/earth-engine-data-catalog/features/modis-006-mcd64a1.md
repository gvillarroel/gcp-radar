---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.134Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MCD64A1"
feature_slug: "modis-006-mcd64a1"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD64A1"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/geophysical"
keywords:
  - "modis"
  - "006"
  - "mcd64a1"
  - "burned"
  - "area"
  - "dataset"
---

# MODIS/006/MCD64A1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS burned area dataset.

## Extended Definition

A MODIS burned area dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD64A1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD64A1)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)

## Supporting Pages

### MCD64A1.006 MODIS Burned Area Monthly Global 500m [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD64A1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD64A1)
- Source ID: `feature-recovery-direct-http`
- Final score: 333
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2000-11-01T00:00:00Z–2022-12-01T00:00:00Z Dataset Producer NASA LP DAAC at the USGS EROS Center Earth Engine Snippet ee.ImageCollection("MODIS/006/MCD64A1") open_in_new Cadence 1 Month Tags burn fire geophysical global mcd64a1 modis monthly nasa usgs Description The Terra and Aqua combined MCD64A1 Version 6 Burned Area data product is a monthly, global gridded 500m product containing per-pixel burned-area and quality information.
- The algorithm uses a burn sensitive vegetation … MODIS/006/MCD64A1, burn,fire,geophysical,global,mcd64a1,modis,monthly,nasa,usgs 2000-11-01T00:00:00Z/2022-12-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MCD64A1.006 https://doi.org/10.5067/MODIS/MCD64A1.006 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- MCD64A1.006 MODIS Burned Area Monthly Global 500m [deprecated] | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog Categories Send feedback MCD64A1.006 MODIS Burned Area Monthly Global 500m [deprecated] Stay organized with collections Save and categorize content based on your preferences.
- Filter . date ( '2017-01-01' , '2018-05-01' )); var burnedArea = dataset . select ( 'BurnDate' ); var burnedAreaVis = { min : 30 , max : 341 , palette : [ '4e0400' , '951003' , 'c61503' , 'ff1901' ], }; Map . setCenter ( 6.746 , 46.529 , 2 ); Map . addLayer ( burnedArea , burnedAreaVis , 'Burned Area' ); Open in Code Editor MCD64A1.006 MODIS Burned Area Monthly Global 500m [deprecated] The Terra and Aqua combined MCD64A1 Version 6 Burned Area data product is a monthly, global gridded 500m product containing per-pixel burned-area and quality information.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- This CMG product covers the entire globe for use in climate simulation models. photo library MODIS/061/MCD43C3 MCD64A1.061 MODIS Burned Area Monthly Global 500m The Terra and Aqua combined MCD64A1 Version 6.1 Burned Area data product is a monthly, global gridded 500m product containing per-pixel burned-area and quality information.
- The MCD64A1 burned-area mapping approach employs 500m MODIS Surface Reflectance imagery coupled with 1km MODIS active fire observations.
- The date is encoded in a single data layer as the ordinal day of the calendar year on which the burn occurred, with values assigned to unburned land pixels and additional special values reserved for missing data and water grid cells. photo library MODIS/061/MCD64A1 MOD08 M3.061 Terra Atmosphere Monthly Global Product MOD08 M3 V6.1 is an atmosphere global product that contains monthly 1 x 1 degree grid average values of atmospheric parameters.
- This dataset is intended for use in processing of raster data and for masking out water in final raster data products. photo library MODIS/MOD44W/MOD44W 005 2000 02 24 MODIS Aqua Daily BAI The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the measured reflectance of charcoal).

### "Datasets tagged geophysical in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- The Multivariate Adaptive Constructed Analogs (MACA) method is a statistical downscaling method which utilizes a training dataset (i.e. a meteorological observation dataset) to remove historical biases and match spatial patterns … climate conus geophysical idaho maca monthly MCD64A1.061 MODIS Burned Area Monthly Global 500m The Terra and Aqua combined MCD64A1 Version 6.1 Burned Area data product is a monthly, global gridded 500m product containing per-pixel burned-area and quality information.
- Each … eosdis fire firms geophysical hotspot lance FireCCI51: MODIS Fire cci Burned Area Pixel Product, Version 5.1 The MODIS Fire cci Burned Area pixel product version 5.1 (FireCCI51) is a monthly global 250m spatial resolution dataset containing information on burned area as well as ancillary data.
- The MCD64A1 burned-area mapping approach employs 500m MODIS Surface Reflectance imagery coupled with 1km MODIS active fire observations.
- This dataset is intended for use in processing of raster data and for … geophysical mod44w modis srtm surface-ground-water water-mask MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m The MOD44W V6 land/water mask 250m product is derived using a decision tree classifier trained with MODIS data and validated with the MOD44W V5 product.

