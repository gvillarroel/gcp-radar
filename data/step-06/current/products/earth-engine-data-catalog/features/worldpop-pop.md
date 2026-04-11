---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:59.104Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "WorldPop/POP"
feature_slug: "worldpop-pop"
latest_feature_date: "2015-07-14"
deprecation_date: "2015-07-14"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density"
  - "https://developers.google.com/earth-engine/datasets/tags/population"
keywords:
  - "worldpop"
  - "pop"
  - "global"
  - "population"
  - "dataset"
  - "from"
  - "deprecated"
  - "on"
---

# WorldPop/POP

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Global population dataset from WorldPop; deprecated on 2015-07-14.

## Extended Definition

Global population dataset from WorldPop; deprecated on 2015-07-14.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)
- [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)

## Supporting Pages

### "GPWv411: Population Count (Gridded Population of the World Version 4.11)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Count)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Calculations need to … CIESIN/GPWv411/GPW Population Count, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4JW8BX5 https://doi.org/10.7927/H4JW8BX5 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset from NASA SEDAC, accessible via Earth Engine, provides gridded population data (GPWv4) from 2000 to 2020, updated every five years.
- Page Summary outlined flag This dataset provides global human population estimates for the years 2000, 2005, 2010, 2015, and 2020 at a 30 arc-second resolution.
- ImageCollection ( 'CIESIN/GPWv411/GPW Population Count' ). first (); var raster = dataset . select ( 'population count' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'population count' ); Open in Code Editor GPWv411: Population Count (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Population Count") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell consistent with national censuses and population registers.

### "GPWv411: Population Density (Gridded Population of the World Version 4.11)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, … CIESIN/GPWv411/GPW Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H49C6VHW https://doi.org/10.7927/H49C6VHW Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Page Summary outlined flag This dataset provides global population density estimates for the years 2000, 2005, 2010, 2015, and 2020 at a 30 arc-second resolution.
- ImageCollection ( 'CIESIN/GPWv411/GPW Population Density' ). first (); var raster = dataset . select ( 'population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 200.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'population density' ); Open in Code Editor GPWv411: Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.

### "Datasets tagged population in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- Source ID: `site-docs-root-3`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Residential population estimates between 1975 and 2020 in 5-year intervals and projections to 2025 and 2030 derived from CIESIN GPWv4.11 were disaggregated from census or … ghsl jrc population sdg GHSL: Global settlement characteristics (10 m) 2018 (P2023A) This spatial raster dataset delineates human settlements at 10 m resolution, and describes their inner characteristics in terms of the functional and height-related components of the built environment.
- The TPP dataset provides 4 different estimates … agriculture fao forest global plant-productivity population Tsinghua FROM-GLC Year of Change to Impervious Surface This dataset contains annual change information of global impervious surface area from 1985 to 2018 at a 30m resolution.
- Impervious pixels are defined as above 50% impervious. … built population tsinghua urban VIIRS Nighttime Day/Night Annual Band Composites V2.1 Annual global VIIRS nighttime lights dataset is a time series produced from monthly cloud-free average radiance grids spanning 2013 to 2021.
- Each place record includes location coordinates, names, categories, contact information (websites, social media, emails, phones), brand information, addresses, and … global infrastructure-boundaries map population publisher-dataset urban Tree proximate people (TPP) 1.0 The "Tree Proximate People" (TPP) is one of the datasets contributing to the development of indicator #13, number of forest-dependent people in extreme poverty, of the Collaborative Partnership on Forests (CPF) Global Core Set of forest-related indicators (GCS).

