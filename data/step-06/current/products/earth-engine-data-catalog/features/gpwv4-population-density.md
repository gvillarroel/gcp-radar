---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.309Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GPWv4 Population Density"
feature_slug: "gpwv4-population-density"
latest_feature_date: "2016-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area"
keywords:
  - "gpwv4"
  - "population"
  - "density"
  - "global"
  - "dataset"
---

# GPWv4 Population Density

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A GPWv4 global population density dataset.

## Extended Definition

A GPWv4 global population density dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area)

## Supporting Pages

### "GPWv411: Population Density (Gridded Population of the World Version 4.11)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, … CIESIN/GPWv411/GPW Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H49C6VHW https://doi.org/10.7927/H49C6VHW Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- ImageCollection ( 'CIESIN/GPWv411/GPW Population Density' ). first (); var raster = dataset . select ( 'population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 200.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'population density' ); Open in Code Editor GPWv411: Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- Home Earth Engine Data Catalog All Datasets Send feedback GPWv411: Population Density (Gridded Population of the World Version 4.11) Stay organized with collections Save and categorize content based on your preferences.

### "GPWv411: UN-Adjusted Population Density (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density' ). first (); var raster = dataset . select ( 'unwpp-adjusted population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'unwpp-adjusted population density' ); Open in Code Editor GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- General … CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4F47M65 https://doi.org/10.7927/H4F47M65 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- Home Earth Engine Data Catalog All Datasets Send feedback GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11) Stay organized with collections Save and categorize content based on your preferences.

### "GPWv411: Mean Administrative Unit Area (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second … CIESIN/GPWv411/GPW Mean Administrative Unit Area, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H42Z13KG https://doi.org/10.7927/H42Z13KG Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, models global human population distribution from 2000 to 2020.
- ImageCollection ( 'CIESIN/GPWv411/GPW Mean Administrative Unit Area' ); var raster = dataset . select ( 'mean administrative unit area' ); var raster vis = { 'min' : 0.0 , 'palette' : [ 'ffffff' , '747474' , '656565' , '3c3c3c' , '2f2f2f' , '000000' ], 'max' : 40000.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'mean administrative unit area' ); Open in Code Editor GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11) This dataset contains the mean area of the input unit(s) from which population count and density grids are created.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Mean Administrative Unit Area") open in new Tags ciesin gpw nasa population Description This dataset contains the mean area of the input unit(s) from which population count and density grids are created.
- Page Summary outlined flag This dataset provides the mean area of input units used to create population count and density grids for the Gridded Population of the World Version 4 (GPWv4), Revision 11.

