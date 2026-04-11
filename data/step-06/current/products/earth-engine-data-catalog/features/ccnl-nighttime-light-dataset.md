---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.577Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CCNL nighttime light dataset"
feature_slug: "ccnl-nighttime-light-dataset"
latest_feature_date: "2022-08-16"
deprecation_date: ""
coverage_status: "LOW"
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
  - "from"
  - "dmsp"
---

# CCNL nighttime light dataset

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

A corrected nighttime light dataset derived from DMSP-OLS observations from 1992 to 2013.

## Extended Definition

A corrected nighttime light dataset derived from DMSP-OLS observations from 1992 to 2013.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1](https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1)
- [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### "CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1](https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CCNL Version 1 spans … BNU/FGS/CCNL/v1, dmsp,eog,imagery,lights,nighttime,ols,population,visible,yearly 1992-01-01T00:00:00Z/2014-01-01T00:00:00Z -65 -180 75 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Consistent and Corrected Nighttime Lights (CCNL) dataset, provided by Beijing Normal University, spans from 1992 to 2014, offering yearly data.
- Filter . date ( '2010-01-01' , '2010-12-31' )); var nighttimeLights = dataset . select ( 'b1' ); var nighttimeLightsVis = { min : 3.0 , max : 60.0 , }; Map . setCenter ( 31.4 , 30 , 6 ); Map . addLayer ( nighttimeLights , nighttimeLightsVis , 'Nighttime Lights' ); Open in Code Editor CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- Home Earth Engine Data Catalog All Datasets Send feedback CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 Stay organized with collections Save and categorize content based on your preferences.
- A Consistent and Corrected Nighttime Light dataset (CCNL 1992-2013) from DMSP-OLS data (Version 1.0) [Data set].

### "Datasets tagged population in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- Source ID: `site-docs-root-3`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- Nighttime light datasets from DMSP-OLS and VIIRS are provided, some of which are corrected or calibrated.
- The gHM values range from 0.0-1.0 and are calculated by estimating the proportion of a given location (pixel) that is modified, the estimated intensity … csp fragmentation human-modification landcover landscape-gradient population DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System The Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) has a unique capability to detect visible and near-infrared (VNIR) emission sources at night.
- Version 4 of the DMSP-OLS Nighttime Lights Time Series consists of cloud-free composites made using all the available archived DMSP-OLS smooth resolution … dmsp eog imagery lights nighttime ols Forest proximate people (FPP) 1.0 The "Forest Proximate People" (FPP) dataset is one of the data layers contributing to the development of indicator #13, "number of forest-dependent people in extreme poverty," of the Collaborative Partnership on Forests (CPF) Global Core Set of forest-related indicators (GCS).

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- It couples an atmospheric radiative transfer model and artificial neural network with forcings from MODIS atmospheric products to generate 5-km daily products. … climate evapotranspiration gpp modis-derived par radiation CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- A series of methods was used to mitigate the impact of inter-annual inconsistency, saturation, and blooming effects and to improve data … dmsp eog imagery lights nighttime ols CFSR: Climate Forecast System Reanalysis The National Centers for Environmental Prediction (NCEP) Climate Forecast System Reanalysis (CFSR) was designed and executed as a global, high-resolution, coupled atmosphere-ocean-land surface-sea ice system to provide the best estimate of the state of these coupled domains over the 32-year period of record from January … climate daylight flux forecast geophysical ncep CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized The National Centers for Environmental Prediction (NCEP) Climate Forecast System (CFS) is a fully coupled model representing the interaction between the Earth's atmosphere, oceans, land, and sea ice.
- The 8-daily composites are converted to degrees Celsius and then gap-filled using the approach outlined in Weiss et al (2014) to eliminate missing data caused by factors such as cloud cover. … climate lst malariaatlasproject map publisher-dataset surface-temperature LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km) Nighttime Land Surface Temperature (LST) are derived from the 1km MODIS MOD11A2 v6.1 products.
- The 8-daily composites are converted to degrees Celsius and then gap-filled using the approach outlined in Weiss et al (2014) to eliminate missing data caused by factors such as cloud cover. … climate lst malariaatlasproject map publisher-dataset surface-temperature LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Monthly 1km) Nighttime Land Surface Temperature (LST) are derived from the 1km MODIS MOD11A2 v6.1 products.

