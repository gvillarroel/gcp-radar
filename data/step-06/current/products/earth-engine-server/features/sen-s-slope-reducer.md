---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.440Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Sen's slope reducer"
feature_slug: "sen-s-slope-reducer"
latest_feature_date: "2016-02-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/sentinel1"
  - "https://developers.google.com/earth-engine/guides/charts_style"
keywords:
  - "sen"
  - "slope"
  - "reducer"
  - "estimates"
  - "trend"
---

# Sen's slope reducer

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Estimates a Sen's slope trend.

## Extended Definition

Estimates a Sen's slope trend.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)
- [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Add several correlation reducers: ee.Reducer.kendallsCorrelation() , ee.Reducer.pearsonsCorrelation() , ee.Reducer.spearmansCorrelation() , and ee.Reducer.sensSlope() .
- Earth Engine Server Feature Added new correlation reducers: Kendall, Spearman, Pearsons and Sen's slope.
- February 19, 2019 Earth Engine Data Catalog Feature Added CAS/IGSNRR/PML/V2 (no longer available) February 12, 2019 Earth Engine Data Catalog Feature Added COPERNICUS/S5P/NRTI/L3 CLOUD : Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties Added COPERNICUS/S5P/OFFL/L3 CLOUD : Sentinel-5P OFFL CLOUD: Offline Cloud Properties Added NASA/FLDAS/NOAH01/C/GL/M/V001 : FLDAS: Famine Early Warning Systems Network (FEWS NET) Land Data Assimilation System February 05, 2019 Earth Engine Data Catalog Feature Added COPERNICUS/S5P/NRTI/L3 CO : Sentinel-5P NRTI CO: Near Real-Time Carbon Monoxide Added COPERNICUS/S5P/OFFL/L3 HCHO : Sentinel-5P OFFL HCHO: Offline Formaldehyde Added COPERNICUS/S5P/OFFL/L3 SO2 : Sentinel-5P OFFL SO2: Offline Sulfur Dioxide Added CSP/HM/GlobalHumanModification : CSP gHM: Global Human Modification Earth Engine Server Fixed Fixed Image.reduceRegions internal server error.
- November 14, 2017 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C01/T1 SR (no longer available) November 07, 2017 Earth Engine Data Catalog Feature Added AU/GA/DEM 1SEC/v10/DEM-H : DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model Added AU/GA/DEM 1SEC/v10/DEM-S : DEM-S: Australian Smoothed Digital Elevation Model Added COPERNICUS/S3/OLCI : Sentinel-3 OLCI EFR: Ocean and Land Color Instrument Earth Observation Full Resolution October 26, 2017 Earth Engine Server Feature Added last reducers ee.Reducer.last() and ee.Reducer.lastNonNull() which select the last element.

### Sentinel-1 Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Map . addLayer ( vvIwAscDescMean , { min : - 12 , max : - 4 }, 'vvIwAscDescMean' ); Map . addLayer ( vhIwAscDescMean , { min : - 18 , max : - 10 }, 'vhIwAscDescMean' ); Map . addLayer ( vhIwAscMean , { min : - 18 , max : - 10 }, 'vhIwAscMean' ); Map . addLayer ( vhIwDescMean , { min : - 18 , max : - 10 }, 'vhIwDescMean' ); Map . setCenter ( - 73.8719 , 4.512 , 9 ); // Bogota, Colombia Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load the Sentinel-1 ImageCollection, filter to Jun-Sep 2020 observations. sentinel 1 = ee .
- Map () m . add layer ( vv iw asc desc mean , { 'min' : - 12 , 'max' : - 4 }, 'vv iw asc desc mean' ) m . add layer ( vh iw asc desc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw asc desc mean' ) m . add layer ( vh iw asc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw asc mean' ) m . add layer ( vh iw desc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw desc mean' ) m . set center ( - 73.8719 , 4.512 , 9 ) # Bogota, Colombia m Sentinel-1 Preprocessing Imagery in the Earth Engine 'COPERNICUS/S1 GRD' Sentinel-1 ImageCollection is consists of Level-1 Ground Range Detected (GRD) scenes processed to backscatter coefficient (σ°) in decibels (dB).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-03-06 UTC."],[],["Sentinel-1 data, collected by the European Space Agency, is pre-processed in Earth Engine to obtain calibrated imagery.
- GRD border noise removal Removes low intensity noise and invalid data on scene edges. (As of January 12, 2018) Thermal noise removal Removes additive noise in sub-swaths to help reduce discontinuities between sub-swaths for scenes in multi-swath acquisition modes. (This operation cannot be applied to images produced before July 2015) Application of radiometric calibration values Computes backscatter intensity using sensor calibration parameters in the GRD metadata.

### Chart Styling \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_style](https://developers.google.com/earth-engine/guides/charts_style)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See this page for full details. { trendlines : { 0 : { // add a trend line to the 1st series type : 'linear' , // or 'polynomial', 'exponential' color : 'green' , lineWidth : 5 , opacity : 0.2 , visibleInLegend : true , } } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Reducer . mean (), startDay : 1 , endDay : 365 }) . setSeriesNames ([ 'EVI' , 'NDVI' ]); // Apply custom style properties to the chart. chart . setOptions ( chartStyle ); // Print the chart to the console. print ( chart ); Note: setting individual series properties overrides top-level properties.
- Additional features include applying log scales, smoothing functions, enabling chart zooming/panning, altering opacity, rotating axes, setting text styles, changing background/grid line colors, formatting axis labels, interpolating null values, and adding trend lines.\n"]]
- Home Products Google Earth Engine Guides Send feedback Chart Styling Stay organized with collections Save and categorize content based on your preferences.

