---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.374Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USDA/NAIP/DOQQ"
feature_slug: "usda-naip-doqq"
latest_feature_date: "2014-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/USDA_NAIP_DOQQ"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "usda"
  - "naip"
  - "doqq"
  - "dataset"
  - "provides"
  - "orthorectified"
  - "aerial"
  - "imagery"
---

# USDA/NAIP/DOQQ

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

This dataset provides NAIP orthorectified aerial imagery.

## Extended Definition

This dataset provides NAIP orthorectified aerial imagery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/USDA_NAIP_DOQQ](https://developers.google.com/earth-engine/datasets/catalog/USDA_NAIP_DOQQ)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### NAIP: National Agriculture Imagery Program | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/USDA_NAIP_DOQQ](https://developers.google.com/earth-engine/datasets/catalog/USDA_NAIP_DOQQ)
- Source ID: `feature-recovery-direct-http`
- Final score: 313
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2002-06-15T00:00:00Z–2023-11-17T00:00:00Z Dataset Producer USDA Farm Production and Conservation - Business Center, Geospatial Enterprise Operations Earth Engine Snippet ee.ImageCollection("USDA/NAIP/DOQQ") open_in_new Tags agriculture highres imagery orthophotos usda aerial fpac naip Description The National Agriculture Imagery Program (NAIP) acquires aerial imagery during the agricultural growing seasons in the continental U.S.
- 2008 was a transition year, and a … USDA/NAIP/DOQQ, agriculture,highres,imagery,orthophotos,usda 2002-06-15T00:00:00Z/2023-11-17T00:00:00Z 24.42 -124.84 49.72 -64.82 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- ImageCollection ( 'USDA/NAIP/DOQQ' ) . filter ( ee .
- Filter . date ( '2017-01-01' , '2018-12-31' )); var trueColor = dataset . select ([ 'R' , 'G' , 'B' ]); var trueColorVis = { min : 0 , max : 255 , }; Map . setCenter ( - 73.9958 , 40.7278 , 15 ); Map . addLayer ( trueColor , trueColorVis , 'True Color' ); Open in Code Editor NAIP: National Agriculture Imagery Program The National Agriculture Imagery Program (NAIP) acquires aerial imagery during the agricultural growing seasons in the continental U.S.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Digital orthophotos are digitally corrected aerial photos and show all objects that are visible from the air at the time of recording in … orthophotos Brazil Forest Imagery Dataset 2008: Analytic Basemap This dataset provides up to a 10-meter resolution multispectral (green, red, and near-infrared) basemap of Brazil, primarily captured in 2008, to support implementation of the Brazil Forest Code.
- Real-time data is any data that relates to a time that is no … climate forecast gcp-public-data-weathernext precipitation publisher-dataset temperature Wildfire Risk to Communities v0 This dataset depicts components of wildfire risk for all lands in the United States that: 1) are landscape-wide (i.e., measurable at every pixel across the landscape); and 2) represent in situ risk - risk at the location where the adverse effects take place on the … burn fire usda wildfire World Settlement Footprint 2015 The World Settlement Footprint (WSF) 2015 is a 10m resolution binary mask outlining the extent of human settlements globally derived by means of 2014-2015 multitemporal Landsat-8 and Sentinel-1 imagery (of which 217,000 and 107,000 scenes have been processed, respectively).
- Ice cover was mapped using a combination of orthorectified panchromatic (band 8) imagery from the Landsat 7 Enhanced Thematic Mapper Plus (ETM+), distributed by the USGS, and … arctic cryosphere gimp greenland ice nasa Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 12KM pixel size This dataset consists of near-global, analysis-ready, multi-resolution gridded vegetation structure metrics derived from NASA Global Ecosystem Dynamics Investigation (GEDI) Level 2 and 4A products associated with 25-m diameter lidar footprints.
- Each 10-meter pixel in this dataset is a 64-dimensional representation, or "embedding vector," that encodes temporal trajectories of surface conditions at and around that pixel as measured by various Earth observation … annual global google landsat-derived satellite-imagery sentinel1-derived Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling The Sentinel-1 mission provides data from a dual-polarization C-band Synthetic Aperture Radar (SAR) instrument at 5.405GHz (C band).

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Each 10-meter pixel in this dataset is a 64-dimensional representation, or "embedding vector," that encodes temporal trajectories of surface conditions at and around that pixel as measured by various Earth observation … annual global google landsat-derived satellite-imagery sentinel1-derived Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling The Sentinel-1 mission provides data from a dual-polarization C-band Synthetic Aperture Radar (SAR) instrument at 5.405GHz (C band).
- The Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER) is a multispectral imager that … aster imagery nasa nir radiance satellite-imagery Brazil Forest Imagery Dataset 2008: Analytic Basemap This dataset provides up to a 10-meter resolution multispectral (green, red, and near-infrared) basemap of Brazil, primarily captured in 2008, to support implementation of the Brazil Forest Code.
- Since JAXA expects these emergency observation data to be extremely useful for disaster management, JAXA decided to open these data on … alos2 eroc jaxa palsar2 radar sar ALOS/AVNIR-2 ORI This dataset is contains orthorectified imagery from the Advanced Visible and Near Infrared Radiometer type 2 (AVNIR-2) sensor on-board the Advanced Land Observing Satellite (ALOS) "DAICHI".
- It serves as a higher-resolution … brazil forest-code google imagery multispectral satellite-imagery Brazil Forest Imagery Dataset 2008: Visual Basemap This dataset provides a visual imagery basemap of Brazil with up to 5-meter resolution, primarily captured in 2008, to support implementation of the Brazil Forest Code.

