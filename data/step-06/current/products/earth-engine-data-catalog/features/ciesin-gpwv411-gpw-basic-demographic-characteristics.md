---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.012Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics"
feature_slug: "ciesin-gpwv411-gpw-basic-demographic-characteristics"
latest_feature_date: "2019-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context"
keywords:
  - "ciesin"
  - "gpwv411"
  - "gpw"
  - "basic"
  - "demographic"
  - "characteristics"
---

# CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

GPWv411 basic demographic characteristics.

## Extended Definition

GPWv411 basic demographic characteristics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context)

## Supporting Pages

### "GPWv411: Basic Demographic Characteristics (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics)
- Source ID: `site-docs-root-2`
- Final score: 378
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision … CIESIN/GPWv411/GPW Basic Demographic Characteristics, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H46M34XX https://doi.org/10.7927/H46M34XX Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset provides gridded population estimates from 2000 to 2020, updated every five years, sourced from NASA SEDAC.
- ImageCollection ( 'CIESIN/GPWv411/GPW Basic Demographic Characteristics' ). first (); var raster = dataset . select ( 'basic demographic characteristics' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'basic demographic characteristics' ); Open in Code Editor GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11) This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Basic Demographic Characteristics") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- Users can access the data via Earth Engine using ee.ImageCollection(\"CIESIN/GPWv411/GPW Basic Demographic Characteristics\") and visualize it.\n"]]

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- There is one image … ciesin gpw nasa population GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11) This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human … ciesin gpw nasa population GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on … ciesin gpw nasa population GPWv411: Land Area (Gridded Population of the World Version 4.11) This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Residential population estimates between 1975 and 2020 in 5-year intervals and projections to 2025 and 2030 derived from CIESIN GPWv4.11 were disaggregated from census or … ghsl jrc population sdg GHSL: Global settlement characteristics (10 m) 2018 (P2023A) This spatial raster dataset delineates human settlements at 10 m resolution, and describes their inner characteristics in terms of the functional and height-related components of the built environment.

### "GPWv411: Data Context (Gridded Population of the World Version 4.11) \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second (approximately 1 km) … CIESIN/GPWv411/GPW Data Context, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H42Z13KG https://doi.org/10.7927/H42Z13KG Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- ImageCollection ( 'CIESIN/GPWv411/GPW Data Context' ); var raster = dataset . select ( 'data context' ); var raster vis = { 'min' : 200.0 , 'palette' : [ 'ffffff' , '099506' , 'f04923' , 'e62440' , '706984' , 'a5a5a5' , 'ffe152' , 'd4cc11' , '000000' ], 'max' : 207.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'data context' ); Open in Code Editor GPWv411: Data Context (Gridded Population of the World Version 4.11) This dataset categorizes pixels with estimated zero population based on information provided in the census documents.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Data Context") open in new Tags ciesin gpw nasa population Description This dataset categorizes pixels with estimated zero population based on information provided in the census documents.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description data context 0 207 927.67 meters Categorizes pixels with estimated zero population based on information provided in the census documents. estimated min or max value data context Class Table Value Color Description 0 #ffffff Not Applicable 201 #099506 Park or protected area 202 #f04923 Military district, airport zone, or other infrastructure 203 #e62440 Not enumerated or not reported in census 204 #706984 No households 205 #a5a5a5 Uninhabited 206 #d4cc11 Population not gridded 207 #000000 Missing age or sex data Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

