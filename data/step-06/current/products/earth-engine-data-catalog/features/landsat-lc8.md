---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.407Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "LANDSAT/LC8"
feature_slug: "landsat-lc8"
latest_feature_date: "2013-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC8"
  - "https://developers.google.com/earth-engine/guides/charts_image_collection"
  - "https://developers.google.com/earth-engine/datasets/catalog/landsat"
keywords:
  - "landsat"
  - "lc8"
  - "image"
  - "collection"
---

# LANDSAT/LC8

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A Landsat 8 image collection.

## Extended Definition

A Landsat 8 image collection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC8](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC8)
- [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- [https://developers.google.com/earth-engine/datasets/catalog/landsat](https://developers.google.com/earth-engine/datasets/catalog/landsat)

## Supporting Pages

### USGS Landsat 8 Raw Scenes [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC8](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC8)
- Source ID: `feature-recovery-direct-http`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2013-04-11T00:14:45Z–2017-05-01T08:14:12Z Dataset Producer USGS Earth Engine Snippet ee.ImageCollection("LANDSAT/LC8") open_in_new Tags global l8 landsat lc8 oli-tirs radiance usgs Description Landsat 8 DN values, representing scaled, calibrated at-sensor radiance.
- LANDSAT/LC8, global,l8,landsat,lc8,oli-tirs,radiance,usgs 2013-04-11T00:14:45Z/2017-05-01T08:14:12Z Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Format: LXSS_LLLL_PPPRRR_YYYYMMDD_yyyymmdd_CC_TX L = Landsat X = Sensor (O = Operational Land Imager, T = Thermal Infrared Sensor, C = Combined OLI/TIRS) SS = Satellite (08 = Landsat 8) LLLL = Processing Correction Level (L1TP = precision and terrain, L1GT = systematic terrain, L1GS = systematic) PPP = WRS Path RRR = WRS Row YYYYMMDD = Acquisition Date expressed in Year, Month, Day yyyymmdd = Processing Date expressed in Year, Month, Day CC = Collection Number (01) TX = Collection Category (RT = Real Time, T1 = Tier 1, T2 = Tier 2) LANDSAT_SCENE_ID STRING The Pre-Collection naming convention of each image is based on acquisition parameters.
- LANDSAT_PRODUCT_ID STRING The naming convention of each Landsat Collection 1 Level-1 image based on acquisition parameters and processing parameters.

### ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_image_collection](https://developers.google.com/earth-engine/guides/charts_image_collection)
- Source ID: `site-docs-reference-3`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series. ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions. ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years. ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles. ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]) . setOptions ({ title : 'Average Vegetation Index Value by Day of Year for Grassland' , hAxis : { title : 'Day of year' , titleTextStyle : { italic : false , bold : true } }, vAxis : { title : 'Vegetation index (x1e4)' , titleTextStyle : { italic : false , bold : true } }, lineWidth : 5 , colors : [ 'e37d05' , '1d6b99' ], }); print ( chart ); ui.Chart.image.doySeriesByYear Use ui.Chart.image.doySeriesByYear to display a day-of-year time series for a given region and image band, where each distinct year in the image collection is presented as a unique series.
- Region reduction is performed on ecoregions defined by features in a FeatureCollection designed for demonstration purposes ( learn how it was made ). ui.Chart.image.series Use ui.Chart.image.series to display an image time series for a given region; each image band is presented as a unique series.
- Chart functions Use the following plot diagrams as a visual guide to understand how each function arranges spatiotemporal image collection reduction results in a chart; i.e., what elements define x values, y values, and series.

### "Landsat Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/landsat](https://developers.google.com/earth-engine/datasets/catalog/landsat)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- In addition to raw imagery, Earth Engine contains several collections of Landsat composites : SR, BAI, EVI, NBR, NDVI, and NDWI at 8-day, 32-day, and annual cadences.
- Collection 2 Landsat Collection 2 , the second major reprocessing effort on the Landsat archive, resulted in several data product improvements that applied advancements in data processing and algorithm development.
- Home Earth Engine Data Catalog Landsat Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Landsat Collections The USGS/NASA Landsat Program has been observing Earth continuously since 1972.

