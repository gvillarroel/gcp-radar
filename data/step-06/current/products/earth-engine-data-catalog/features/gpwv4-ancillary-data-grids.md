---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.306Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GPWv4 Ancillary Data Grids"
feature_slug: "gpwv4-ancillary-data-grids"
latest_feature_date: "2016-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density"
keywords:
  - "gpwv4"
  - "ancillary"
  - "grids"
  - "population"
  - "dataset"
---

# GPWv4 Ancillary Data Grids

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Ancillary data grids for the GPWv4 population dataset.

## Extended Definition

Ancillary data grids for the GPWv4 population dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)

## Supporting Pages

### "GPWv411: Mean Administrative Unit Area (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'CIESIN/GPWv411/GPW Mean Administrative Unit Area' ); var raster = dataset . select ( 'mean administrative unit area' ); var raster vis = { 'min' : 0.0 , 'palette' : [ 'ffffff' , '747474' , '656565' , '3c3c3c' , '2f2f2f' , '000000' ], 'max' : 40000.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'mean administrative unit area' ); Open in Code Editor GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11) This dataset contains the mean area of the input unit(s) from which population count and density grids are created.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Mean Administrative Unit Area") open in new Tags ciesin gpw nasa population Description This dataset contains the mean area of the input unit(s) from which population count and density grids are created.
- Page Summary outlined flag This dataset provides the mean area of input units used to create population count and density grids for the Gridded Population of the World Version 4 (GPWv4), Revision 11.
- General documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second … CIESIN/GPWv411/GPW Mean Administrative Unit Area, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H42Z13KG https://doi.org/10.7927/H42Z13KG Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, models global human population distribution from 2000 to 2020.

### "GPWv411: Population Count (Gridded Population of the World Version 4.11)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calculations need to … CIESIN/GPWv411/GPW Population Count, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4JW8BX5 https://doi.org/10.7927/H4JW8BX5 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset from NASA SEDAC, accessible via Earth Engine, provides gridded population data (GPWv4) from 2000 to 2020, updated every five years.
- ImageCollection ( 'CIESIN/GPWv411/GPW Population Count' ). first (); var raster = dataset . select ( 'population count' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'population count' ); Open in Code Editor GPWv411: Population Count (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Population Count") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell consistent with national censuses and population registers.
- Home Earth Engine Data Catalog All Datasets Send feedback GPWv411: Population Count (Gridded Population of the World Version 4.11) Stay organized with collections Save and categorize content based on your preferences.

### "GPWv411: Population Density (Gridded Population of the World Version 4.11)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, … CIESIN/GPWv411/GPW Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H49C6VHW https://doi.org/10.7927/H49C6VHW Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- ImageCollection ( 'CIESIN/GPWv411/GPW Population Density' ). first (); var raster = dataset . select ( 'population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 200.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'population density' ); Open in Code Editor GPWv411: Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- Home Earth Engine Data Catalog All Datasets Send feedback GPWv411: Population Density (Gridded Population of the World Version 4.11) Stay organized with collections Save and categorize content based on your preferences.

