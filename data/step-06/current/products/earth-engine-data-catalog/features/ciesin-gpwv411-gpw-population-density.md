---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.022Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CIESIN/GPWv411/GPW_Population_Density"
feature_slug: "ciesin-gpwv411-gpw-population-density"
latest_feature_date: "2019-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count"
keywords:
  - "ciesin"
  - "gpwv411"
  - "gpw"
  - "population"
  - "density"
---

# CIESIN/GPWv411/GPW_Population_Density

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

GPWv411 population density.

## Extended Definition

GPWv411 population density.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count)

## Supporting Pages

### "GPWv411: Population Density (Gridded Population of the World Version 4.11)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 338
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, … CIESIN/GPWv411/GPW Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H49C6VHW https://doi.org/10.7927/H49C6VHW Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- ImageCollection ( 'CIESIN/GPWv411/GPW Population Density' ). first (); var raster = dataset . select ( 'population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 200.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'population density' ); Open in Code Editor GPWv411: Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description population density 0 810694 927.67 meters The estimated number of persons per square kilometer. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

### "GPWv411: UN-Adjusted Population Density (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density' ). first (); var raster = dataset . select ( 'unwpp-adjusted population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'unwpp-adjusted population density' ); Open in Code Editor GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- General … CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4F47M65 https://doi.org/10.7927/H4F47M65 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description unwpp-adjusted population density 0 778120 927.67 meters The estimated number of persons per square kilometer. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

### "GPWv411: Population Count (Gridded Population of the World Version 4.11)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calculations need to … CIESIN/GPWv411/GPW Population Count, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4JW8BX5 https://doi.org/10.7927/H4JW8BX5 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset from NASA SEDAC, accessible via Earth Engine, provides gridded population data (GPWv4) from 2000 to 2020, updated every five years.
- ImageCollection ( 'CIESIN/GPWv411/GPW Population Count' ). first (); var raster = dataset . select ( 'population count' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'population count' ); Open in Code Editor GPWv411: Population Count (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Population Count") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell consistent with national censuses and population registers.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description population count 0 627597 927.67 meters The estimated number of persons per 30 arc-second grid cell. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

