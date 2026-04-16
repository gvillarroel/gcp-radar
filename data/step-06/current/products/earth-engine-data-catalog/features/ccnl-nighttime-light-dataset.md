---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.668Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CCNL nighttime light dataset"
feature_slug: "ccnl-nighttime-light-dataset"
latest_feature_date: "2022-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1"
  - "https://developers.google.com/earth-engine/datasets/tags/population"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "ccnl"
  - "nighttime"
  - "light"
  - "dataset"
  - "corrected"
  - "derived"
  - "dmsp"
  - "ols"
---

# CCNL nighttime light dataset

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A corrected nighttime light dataset derived from DMSP-OLS observations from 1992 to 2013.

## Extended Definition

A corrected nighttime light dataset derived from DMSP-OLS observations from 1992 to 2013.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1](https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1)
- [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### "CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1](https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CCNL Version 1 spans … BNU/FGS/CCNL/v1, dmsp,eog,imagery,lights,nighttime,ols,population,visible,yearly 1992-01-01T00:00:00Z/2014-01-01T00:00:00Z -65 -180 75 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Consistent and Corrected Nighttime Lights (CCNL) dataset, provided by Beijing Normal University, spans from 1992 to 2014, offering yearly data.
- Filter . date ( '2010-01-01' , '2010-12-31' )); var nighttimeLights = dataset . select ( 'b1' ); var nighttimeLightsVis = { min : 3.0 , max : 60.0 , }; Map . setCenter ( 31.4 , 30 , 6 ); Map . addLayer ( nighttimeLights , nighttimeLightsVis , 'Nighttime Lights' ); Open in Code Editor CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- Dataset Availability 1992-01-01T00:00:00Z–2014-01-01T00:00:00Z Dataset Producer Beijing Normal University Earth Engine Snippet ee.ImageCollection("BNU/FGS/CCNL/v1") open in new Cadence 1 Year Tags dmsp eog imagery lights nighttime ols population visible yearly bnu Description The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4 .
- Page Summary outlined flag The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the DMSP Operational Line-Scan System (OLS) data, improved to mitigate inconsistencies and effects like saturation and blooming.

### "Datasets tagged population in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- Source ID: `site-docs-root-3`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- Nighttime light datasets from DMSP-OLS and VIIRS are provided, some of which are corrected or calibrated.
- Version 4 of the DMSP-OLS Nighttime Lights Time Series consists of cloud-free composites made using all the available archived DMSP-OLS smooth resolution … dmsp eog imagery lights nighttime ols Forest proximate people (FPP) 1.0 The "Forest Proximate People" (FPP) dataset is one of the data layers contributing to the development of indicator #13, "number of forest-dependent people in extreme poverty," of the Collaborative Partnership on Forests (CPF) Global Core Set of forest-related indicators (GCS).
- A series of methods was used to mitigate the impact of inter-annual inconsistency, saturation, and blooming effects and to improve data … dmsp eog imagery lights nighttime ols CSP gHM: Global Human Modification The global Human Modification dataset (gHM) provides a cumulative measure of human modification of terrestrial lands globally at 1 square-kilometer resolution.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- It couples an atmospheric radiative transfer model and artificial neural network with forcings from MODIS atmospheric products to generate 5-km daily products. … climate evapotranspiration gpp modis-derived par radiation CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- A series of methods was used to mitigate the impact of inter-annual inconsistency, saturation, and blooming effects and to improve data … dmsp eog imagery lights nighttime ols CFSR: Climate Forecast System Reanalysis The National Centers for Environmental Prediction (NCEP) Climate Forecast System Reanalysis (CFSR) was designed and executed as a global, high-resolution, coupled atmosphere-ocean-land surface-sea ice system to provide the best estimate of the state of these coupled domains over the 32-year period of record from January … climate daylight flux forecast geophysical ncep CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized The National Centers for Environmental Prediction (NCEP) Climate Forecast System (CFS) is a fully coupled model representing the interaction between the Earth's atmosphere, oceans, land, and sea ice.
- Based on the unique LUCAS 2018 Copernicus in-situ survey, this dataset represents the first … agriculture crop eu jrc lucas sentinel1-derived EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (8-Daily 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.
- The 8-daily composites are converted to degrees Celsius and then gap-filled using the approach outlined in Weiss et al (2014) to eliminate missing data caused by factors such as cloud cover. … climate lst malariaatlasproject map publisher-dataset surface-temperature LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km) Nighttime Land Surface Temperature (LST) are derived from the 1km MODIS MOD11A2 v6.1 products.

