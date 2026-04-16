---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.274Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NOAA/CDR/AVHRR/SR/V4"
feature_slug: "noaa-cdr-avhrr-sr-v4"
latest_feature_date: "2017-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_SR_V4"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/plant-productivity"
keywords:
  - "noaa"
  - "cdr"
  - "avhrr"
  - "sr"
  - "v4"
  - "surface"
  - "reflectance"
  - "version"
---

# NOAA/CDR/AVHRR/SR/V4

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

NOAA AVHRR surface reflectance version 4.

## Extended Definition

NOAA AVHRR surface reflectance version 4.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_SR_V4](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_SR_V4)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/plant-productivity](https://developers.google.com/earth-engine/datasets/tags/plant-productivity)

## Supporting Pages

### NOAA CDR AVHRR: Surface Reflectance, Version 4 [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_SR_V4](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_SR_V4)
- Source ID: `feature-recovery-direct-http`
- Final score: 337
- Re-rank relevance: N/A

Evidence snippets:
- Known … NOAA/CDR/AVHRR/SR/V4, avhrr,cdr,daily,land,noaa,reflectance,satellite-imagery,sr 1981-06-24T00:00:00Z/2019-05-16T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7289/V5TM782M https://doi.org/10.7289/V5TM782M Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["This dataset, provided by NOAA, contains daily gridded surface reflectance and brightness temperatures from AVHRR sensors on NOAA satellites, spanning from June 24, 1981, to May 16, 2019.
- Dataset Availability 1981-06-24T00:00:00Z–2019-05-16T00:00:00Z Dataset Producer NOAA Earth Engine Snippet ee.ImageCollection("NOAA/CDR/AVHRR/SR/V4") open_in_new Cadence 1 Day Tags avhrr cdr daily land noaa reflectance satellite-imagery sr Description The NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance contains gridded daily surface reflectance and brightness temperatures derived from the Advanced Very High Resolution Radiometer (AVHRR) sensors onboard seven NOAA polar orbiting satellites.
- NOAA CDR AVHRR: Surface Reflectance, Version 4 [deprecated] | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog Categories Send feedback NOAA CDR AVHRR: Surface Reflectance, Version 4 [deprecated] Stay organized with collections Save and categorize content based on your preferences.
- Filter . date ( '2018-05-01' , '2018-06-01' )); var surfaceReflectance = dataset . select ( 'SREFL_CH1' ); var surfaceReflectanceVis = { min : - 1000.0 , max : 9000.0 , palette : [ '003b02' , '006a03' , '008d05' , '01be07' , '01ff09' , 'ffffff' ], }; Map . setCenter ( 52.48 , 71.72 , 0 ); Map . addLayer ( surfaceReflectance , surfaceReflectanceVis , 'Surface Reflectance' ); Open in Code Editor NOAA CDR AVHRR: Surface Reflectance, Version 4 [deprecated] The NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance contains gridded daily surface reflectance and brightness temperatures derived from the Advanced Very High Resolution Radiometer (AVHRR) sensors onboard seven NOAA polar orbiting satellites.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- It provides a measurement of surface vegetation coverage activity, gridded at a resolution of 0.05° and computed globally over land … avhrr cdr daily land ndvi noaa NOAA CDR AVHRR: Surface Reflectance, Version 5 The NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance contains gridded daily surface reflectance and brightness temperatures derived from the Advanced Very High Resolution Radiometer (AVHRR) sensors onboard seven NOAA polar orbiting satellites.
- This dataset is derived from the NOAA AVHRR Surface Reflectance product and … avhrr cdr daily fapar lai land NOAA CDR AVHRR NDVI: Normalized Difference Vegetation Index, Version 5 The NOAA Climate Data Record (CDR) of AVHRR Normalized Difference Vegetation Index (NDVI) contains gridded daily NDVI derived from the NOAA AVHRR Surface Reflectance product.
- Data are provided for three imagery bands (I1, I2, I3) at nominal 500 meter resolution ( 463 meter) … daily nasa noaa npp reflectance satellite-imagery VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m The 8-day Visible Infrared Imaging Radiometer Suite (VIIRS) Surface Reflectance (VNP09H1) Version 1 composite product provides an estimate of land surface reflectance from the Suomi National Polar-orbiting Partnership (Suomi NPP) VIIRS sensor for three imagery bands (I1, I2, I3) at nominal 500m resolution ( 463m).
- This dataset is the primary (default) forcing file (File A) for Phase … climate evaporation forcing geophysical hourly humidity NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature The AVHRR Pathfinder Version 5.3 Sea Surface Temperature dataset (PFV53) is a collection of global, twice-daily 4km sea surface temperature data produced in a partnership by the NOAA National Oceanographic Data Center and the University of Miami's Rosenstiel School of Marine and Atmospheric Science.

### "Datasets tagged plant-productivity in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/plant-productivity](https://developers.google.com/earth-engine/datasets/tags/plant-productivity)
- Source ID: `site-docs-root-3`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- This dataset is derived from the NOAA AVHRR Surface Reflectance product and … avhrr cdr daily fapar lai land NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1 This Climate Data Record (CDR) combines datasets for Leaf Area Index (LAI) and Fraction of Absorbed Photosynthetically Active Radiation (FAPAR), two biophysical variables that can be used to evaluate vegetation stress, forecast agricultural yields, and other modeling and resource management applications.
- Bands include 1) canopy nitrogen percent, 2) canopy nitrogen model uncertainty, 3) classification result for needle vs. non-needle model and … airborne canopy forest highres hyperspectral neon NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 5 The NOAA Climate Data Record (CDR) of AVHRR Leaf Area Index (LAI) and Fraction of Absorbed Photosynthetically Active Radiation (FAPAR) dataset contains derived values that characterize the canopy and photosynthetic activity of plants.
- The PSN value is the difference of … aqua global gpp nasa npp photosynthesis NEON Canopy Nitrogen Content (CNC) Modelled canopy nitrogen concentration calibrated with NEON plant foliar chemistry observations and predicted with L1 surface directional reflectance, derived from the NEON Imaging Spectrometer (NIS).
- The PSN value is the difference of … global gpp nasa npp photosynthesis plant-productivity MODIS Gross Primary Production CONUS The MODIS Gross Primary Production (GPP) CONUS dataset estimates GPP using MODIS Surface Reflectance for CONUS.

