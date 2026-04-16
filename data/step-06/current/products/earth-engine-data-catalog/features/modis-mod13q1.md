---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.395Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MOD13Q1"
feature_slug: "modis-mod13q1"
latest_feature_date: "2013-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD13Q1"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/vegetation-indices"
keywords:
  - "modis"
  - "mod13q1"
  - "vegetation"
  - "index"
---

# MODIS/MOD13Q1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS vegetation index product.

## Extended Definition

A MODIS vegetation index product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD13Q1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD13Q1)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)

## Supporting Pages

### MOD13Q1.005 Vegetation Indices 16-Day Global 250m [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD13Q1](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD13Q1)
- Source ID: `feature-recovery-direct-http`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2000-02-18T00:00:00Z–2017-03-06T00:00:00Z Dataset Producer NASA LP DAAC at the USGS EROS Center Earth Engine Snippet ee.ImageCollection("MODIS/MOD13Q1") open_in_new Cadence 16 Days Tags 16-day evi global mod13q1 modis ndvi terra vegetation vegetation-indices Description The MODIS Normalized Difference Vegetation Index (NDVI) complements NOAA's Advanced Very High Resolution Radiometer (AVHRR) NDVI products and provides continuity for time series historical applications.
- The EVI also uses … MODIS/MOD13Q1, 16-day,evi,global,modis,ndvi,terra,vegetation,vegetation-indices 2000-02-18T00:00:00Z/2017-03-06T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- MOD13Q1.005 Vegetation Indices 16-Day Global 250m [deprecated] The MODIS Normalized Difference Vegetation Index (NDVI) complements NOAA's Advanced Very High Resolution Radiometer (AVHRR) NDVI products and provides continuity for time series historical applications.
- MOD13AQ1 is comprised of the following layers: NDVI: Normalized Difference Vegetation Index, Scale 0.0001 EVI: Enhanced Vegetation Index, Scale 0.0001 DetailedQA: VI Quality, see MOD13Q1 VI Quality sur_refl_b01: Red surface reflectance, scale 0.0001 sur_refl_b02: NIR surface reflectance, scale 0.0001 sur_refl_b03: Blue surface reflectance, scale 0.0001 sur_refl_b07: MIR surface reflectance, scale 0.0001 ViewZenith: View zenith angle, scale 0.01 SolarZenith: Solar zenith angle, scale 0.01 RelativeAzimuth: Relative azimuth angle, scale 0.1 DayOfYear: Julian day of year SummaryQA: Pixel reliability summary QA -1 Fill/No data: Not processed 0 Good data: Use with confidence 1 Marginal data: Useful but look at detailed QA for more information 2 Snow/ice: Pixel covered with snow/ice 3: Cloudy: Pixel is cloudy MOD13Q1 IV Quality Bits 0-1: MODLAND_QA 00 (0): VI produced, good quality 01 (1): VI produced, check other QA 10 (2): Pixel produced, probably cloudy 11 (3): Pixel not produced due to other reason (not clouds) Bits 2-5: VI Usefulness 0000 (0): Highest quality 0001 (1): Lower quality 0010 (2): Decreasing quality 0100 (4): Decreasing quality 1000 (8): Decreasing quality 1001 (9): Decreasing quality 1010 (10): Decreasing quality 1100 (12): Lowest quality 1101 (13): Quality so low that it is not useful 1110 (14): L1B data faulty 1111 (15): Not useful for any other reason/not processed Bits 6-7: Aerosol quantity 00 (0): Climatology 01 (1): Low 10 (2): Average 11 (3): High Bit 8: Adjacent cloud detected 0: No 1: Yes Bit 9: Atmosphere BRDF correction performed 0: No 1: Yes Bit 10: Mixed Clouds 0: No 1: Yes Bits 11-13: Land/Water flag 000 (0): Shallow ocean 001 (1): Land 010 (2): Ocean coastlines and lake shorelines 011 (3): Shallow inland water 100 (4): Ephemeral water 101 (5): Deep inland water 110 (6): Moderate or continental ocean 111 (7): Deep ocean Bit 14: Possible snow/ice 0: No 1: Yes Bit 15: Possible shadow 0: No 1: Yes Please visit LP DAAC 'Citing Our Data' page for information on citing LP DAAC datasets.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- The MOD13C1 has data fields for NDVI, EVI, VI QA, reflectance data, angular information, and spatial statistics such as mean, standard deviation, and number of used input pixels at the 0.05 degree CMG resolution. photo library MODIS/061/MOD13C1 MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m The MOD13Q1 V6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- For pixels with more than two valid vegetation cycles, the data represent the two cycles with the largest NBAR-EVI2 amplitudes. photo library MODIS/061/MCD12Q2 MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m The MCD15A3H Version 6.1 Moderate Resolution Imaging Spectroradiometer (MODIS) Level 4, Combined Fraction of Photosynthetically Active Radiation (FPAR), and Leaf Area Index (LAI) product is a 4-day composite data set with 500 meter pixel size.
- In generating this monthly product, the algorithm ingests all the MOD13A2 products that overlap the month and employs a weighted temporal average. photo library MODIS/061/MOD13A3 MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MOD13A1 MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).

### "Datasets tagged vegetation-indices in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- Source ID: `site-docs-root-3`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The NDVI is referred to as the continuity index to the existing National Oceanic and Atmospheric Administration-Advanced Very High Resolution Radiometer (NOAA-AVHRR) derived NDVI. … 16-day aqua evi global modis nasa MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices (MYD13A3) Version 6.1 data are provided monthly at 1 kilometer (km) spatial resolution as a gridded Level 3 product in the sinusoidal projection.
- After gap-filling the data was clipped to … evi malariaatlasproject map publisher-dataset vegetation vegetation-indices EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Monthly 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.
- After gap-filling the data was clipped to … evi malariaatlasproject map publisher-dataset vegetation vegetation-indices EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Annual 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa NOAA CDR AVHRR NDVI: Normalized Difference Vegetation Index, Version 5 The NOAA Climate Data Record (CDR) of AVHRR Normalized Difference Vegetation Index (NDVI) contains gridded daily NDVI derived from the NOAA AVHRR Surface Reflectance product.

