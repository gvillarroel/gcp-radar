---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.131Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "JAXA/ALOS/AVNIR-2/ORI"
feature_slug: "jaxa-alos-avnir-2-ori"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AVNIR-2_ORI"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "jaxa"
  - "alos"
  - "avnir"
  - "ori"
  - "orthorectified"
  - "imagery"
---

# JAXA/ALOS/AVNIR-2/ORI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Orthorectified ALOS AVNIR-2 imagery.

## Extended Definition

Orthorectified ALOS AVNIR-2 imagery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AVNIR-2_ORI](https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AVNIR-2_ORI)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### ALOS/AVNIR-2 ORI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AVNIR-2_ORI](https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AVNIR-2_ORI)
- Source ID: `feature-recovery-direct-http`
- Final score: 292
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2006-04-26T00:00:00Z–2011-04-18T00:00:00Z Dataset Producer JAXA Earth Observation Research Center Earth Engine Snippet ee.ImageCollection("JAXA/ALOS/AVNIR-2/ORI") open_in_new Tags alos jaxa orthophoto satellite-imagery visible avnir-2 eorc Description This dataset is contains orthorectified imagery from the Advanced Visible and Near Infrared Radiometer type 2 (AVNIR-2) sensor on-board the Advanced Land Observing Satellite (ALOS) "DAICHI".
- The AVNIR-2 ORI product was created from AVNIR-2 1B1 data after stereo matching with reference to ALOS's Panchromatic Remote-sensing Instrument for Stereo Mapping (PRISM)-derived … JAXA/ALOS/AVNIR-2/ORI, alos,jaxa,orthophoto,satellite-imagery,visible 2006-04-26T00:00:00Z/2011-04-18T00:00:00Z 23.81 127.05 46.04 154.41 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- ImageCollection ( 'JAXA/ALOS/AVNIR-2/ORI' ) . filter ( ee .
- Filter . date ( '2011-01-01' , '2011-04-01' )); var avnir2OriRgb = dataset . select ([ 'B3' , 'B2' , 'B1' ]); var avnir2OriRgbVis = { min : 0.0 , max : 255.0 , }; Map . setCenter ( 138.7302 , 35.3641 , 12 ); Map . addLayer ( avnir2OriRgb , avnir2OriRgbVis , 'AVNIR-2 ORI RGB' ); Open in Code Editor ALOS/AVNIR-2 ORI This dataset is contains orthorectified imagery from the Advanced Visible and Near Infrared Radiometer type 2 (AVNIR-2) sensor on-board the Advanced Land Observing Satellite (ALOS) "DAICHI".

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Since JAXA expects these emergency observation data to be extremely useful for disaster management, JAXA decided to open these data on … alos2 eroc jaxa palsar2 radar sar ALOS/AVNIR-2 ORI This dataset is contains orthorectified imagery from the Advanced Visible and Near Infrared Radiometer type 2 (AVNIR-2) sensor on-board the Advanced Land Observing Satellite (ALOS) "DAICHI".
- The AVNIR-2 ORI product was created from AVNIR-2 1B1 data after stereo matching with reference to ALOS's Panchromatic Remote-sensing … alos jaxa orthophoto satellite-imagery visible ASTER L1T Radiance Note: There is a gap in data collection between November 28, 2024 and January 16, 2025 due to technical issues with the ASTER instrument.
- The brightness temperature … abi atmosphere goes goes-19 goes-east goes-u Global PALSAR-2/PALSAR Yearly Mosaic, version 1 A newer version of this dataset with data for 2015-2021 can be found in JAXA/ALOS/PALSAR/YEARLY/SAR EPOCH The global 25m PALSAR/PALSAR-2 mosaic is a seamless global SAR image created by mosaicking strips of SAR imagery from PALSAR/PALSAR-2.
- For each year and location, the strip data were selected … alos alos2 eroc jaxa palsar palsar2 Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0 The global 25m PALSAR/PALSAR-2 mosaic is a seamless global SAR image created by mosaicking strips of SAR imagery from PALSAR/PALSAR-2.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Since JAXA expects these emergency observation data to be extremely useful for disaster management, JAXA decided to open these data on … alos2 eroc jaxa palsar2 radar sar ALOS/AVNIR-2 ORI This dataset is contains orthorectified imagery from the Advanced Visible and Near Infrared Radiometer type 2 (AVNIR-2) sensor on-board the Advanced Land Observing Satellite (ALOS) "DAICHI".
- The AVNIR-2 ORI product was created from AVNIR-2 1B1 data after stereo matching with reference to ALOS's Panchromatic Remote-sensing … alos jaxa orthophoto satellite-imagery visible ASTER L1T Radiance Note: There is a gap in data collection between November 28, 2024 and January 16, 2025 due to technical issues with the ASTER instrument.
- MFWAM uses the computing code … bathymetry copernicus marine oceans Global PALSAR-2/PALSAR Yearly Mosaic, version 1 A newer version of this dataset with data for 2015-2021 can be found in JAXA/ALOS/PALSAR/YEARLY/SAR EPOCH The global 25m PALSAR/PALSAR-2 mosaic is a seamless global SAR image created by mosaicking strips of SAR imagery from PALSAR/PALSAR-2.
- For each year and location, the strip data were selected … alos alos2 eroc jaxa palsar palsar2 Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0 The global 25m PALSAR/PALSAR-2 mosaic is a seamless global SAR image created by mosaicking strips of SAR imagery from PALSAR/PALSAR-2.

