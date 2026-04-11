---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:59.151Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NOAA/DMSP-OLS/NIGHTTIME_LIGHTS"
feature_slug: "noaa-dmsp-ols-nighttime-lights"
latest_feature_date: "2014-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/population"
  - "https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "noaa"
  - "dmsp"
  - "ols"
  - "nighttime"
  - "lights"
  - "this"
  - "dataset"
  - "provides"
---

# NOAA/DMSP-OLS/NIGHTTIME_LIGHTS

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

This dataset provides DMSP OLS nighttime lights time series data.

## Extended Definition

This dataset provides DMSP OLS nighttime lights time series data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- [https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1](https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### "Datasets tagged population in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- Source ID: `site-docs-root-3`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- A series of methods was used to mitigate the impact of inter-annual inconsistency, saturation, and blooming effects and to improve data … dmsp eog imagery lights nighttime ols CSP gHM: Global Human Modification The global Human Modification dataset (gHM) provides a cumulative measure of human modification of terrestrial lands globally at 1 square-kilometer resolution.
- Version 4 of the DMSP-OLS Nighttime Lights Time Series consists of cloud-free composites made using all the available archived DMSP-OLS smooth resolution … dmsp eog imagery lights nighttime ols Forest proximate people (FPP) 1.0 The "Forest Proximate People" (FPP) dataset is one of the data layers contributing to the development of indicator #13, "number of forest-dependent people in extreme poverty," of the Collaborative Partnership on Forests (CPF) Global Core Set of forest-related indicators (GCS).
- CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- As these data are composited monthly, there are many areas of the globe where it is impossible to get good quality data coverage for that month. … dnb eog lights monthly nighttime noaa VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night The Suomi National Polar-orbiting Partnership (SNPP) Visible Infrared Imaging Radiometer Suite (VIIRS) supports a Day-Night Band (DNB) sensor that provides global daily measurements of nocturnal visible and near-infrared (NIR) light that are suitable for Earth system science and applications.

### "CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1](https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CCNL Version 1 spans … BNU/FGS/CCNL/v1, dmsp,eog,imagery,lights,nighttime,ols,population,visible,yearly 1992-01-01T00:00:00Z/2014-01-01T00:00:00Z -65 -180 75 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Consistent and Corrected Nighttime Lights (CCNL) dataset, provided by Beijing Normal University, spans from 1992 to 2014, offering yearly data.
- Filter . date ( '2010-01-01' , '2010-12-31' )); var nighttimeLights = dataset . select ( 'b1' ); var nighttimeLightsVis = { min : 3.0 , max : 60.0 , }; Map . setCenter ( 31.4 , 30 , 6 ); Map . addLayer ( nighttimeLights , nighttimeLightsVis , 'Nighttime Lights' ); Open in Code Editor CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- Dataset Availability 1992-01-01T00:00:00Z–2014-01-01T00:00:00Z Dataset Producer Beijing Normal University Earth Engine Snippet ee.ImageCollection("BNU/FGS/CCNL/v1") open in new Cadence 1 Year Tags dmsp eog imagery lights nighttime ols population visible yearly bnu Description The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4 .
- Page Summary outlined flag The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the DMSP Operational Line-Scan System (OLS) data, improved to mitigate inconsistencies and effects like saturation and blooming.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- It couples an atmospheric radiative transfer model and artificial neural network with forcings from MODIS atmospheric products to generate 5-km daily products. … climate evapotranspiration gpp modis-derived par radiation CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1 The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4.
- Version 4 of the DMSP-OLS Nighttime Lights Time Series consists of cloud-free composites made using all the available archived DMSP-OLS smooth resolution … dmsp eog imagery lights nighttime ols Daymet V4: Daily Surface Weather and Climatological Summaries Daymet V4 provides gridded estimates of daily weather parameters for Continental North America, Hawaii, and Puerto Rico (Data for Puerto Rico is available starting in 1950).
- This first … agriculture landcover landuse landuse-landcover tsinghua DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System The Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) has a unique capability to detect visible and near-infrared (VNIR) emission sources at night.
- A series of methods was used to mitigate the impact of inter-annual inconsistency, saturation, and blooming effects and to improve data … dmsp eog imagery lights nighttime ols CFSR: Climate Forecast System Reanalysis The National Centers for Environmental Prediction (NCEP) Climate Forecast System Reanalysis (CFSR) was designed and executed as a global, high-resolution, coupled atmosphere-ocean-land surface-sea ice system to provide the best estimate of the state of these coupled domains over the 32-year period of record from January … climate daylight flux forecast geophysical ncep CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized The National Centers for Environmental Prediction (NCEP) Climate Forecast System (CFS) is a fully coupled model representing the interaction between the Earth's atmosphere, oceans, land, and sea ice.

