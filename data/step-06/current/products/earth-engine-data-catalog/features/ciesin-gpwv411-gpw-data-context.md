---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.013Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CIESIN/GPWv411/GPW_Data_Context"
feature_slug: "ciesin-gpwv411-gpw-data-context"
latest_feature_date: "2019-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid"
keywords:
  - "ciesin"
  - "gpwv411"
  - "gpw"
  - "context"
---

# CIESIN/GPWv411/GPW_Data_Context

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

GPWv411 data context.

## Extended Definition

GPWv411 data context.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid)

## Supporting Pages

### "GPWv411: Data Context (Gridded Population of the World Version 4.11) \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context)
- Source ID: `site-docs-root-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second (approximately 1 km) … CIESIN/GPWv411/GPW Data Context, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H42Z13KG https://doi.org/10.7927/H42Z13KG Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- ImageCollection ( 'CIESIN/GPWv411/GPW Data Context' ); var raster = dataset . select ( 'data context' ); var raster vis = { 'min' : 200.0 , 'palette' : [ 'ffffff' , '099506' , 'f04923' , 'e62440' , '706984' , 'a5a5a5' , 'ffe152' , 'd4cc11' , '000000' ], 'max' : 207.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'data context' ); Open in Code Editor GPWv411: Data Context (Gridded Population of the World Version 4.11) This dataset categorizes pixels with estimated zero population based on information provided in the census documents.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Data Context") open in new Tags ciesin gpw nasa population Description This dataset categorizes pixels with estimated zero population based on information provided in the census documents.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description data context 0 207 927.67 meters Categorizes pixels with estimated zero population based on information provided in the census documents. estimated min or max value data context Class Table Value Color Description 0 #ffffff Not Applicable 201 #099506 Park or protected area 202 #f04923 Military district, airport zone, or other infrastructure 203 #e62440 Not enumerated or not reported in census 204 #706984 No households 205 #a5a5a5 Uninhabited 206 #d4cc11 Population not gridded 207 #000000 Missing age or sex data Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

### "GPWv411: Basic Demographic Characteristics (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics)
- Source ID: `site-docs-root-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision … CIESIN/GPWv411/GPW Basic Demographic Characteristics, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H46M34XX https://doi.org/10.7927/H46M34XX Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset provides gridded population estimates from 2000 to 2020, updated every five years, sourced from NASA SEDAC.
- ImageCollection ( 'CIESIN/GPWv411/GPW Basic Demographic Characteristics' ). first (); var raster = dataset . select ( 'basic demographic characteristics' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'basic demographic characteristics' ); Open in Code Editor GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11) This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Basic Demographic Characteristics") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- Users can access the data via Earth Engine using ee.ImageCollection(\"CIESIN/GPWv411/GPW Basic Demographic Characteristics\") and visualize it.\n"]]

### "GPWv411: National Identifier Grid (Gridded Population of the World Version\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid)
- Source ID: `site-docs-root-2`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human … CIESIN/GPWv411/GPW National Identifier Grid, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4TD9VDP https://doi.org/10.7927/H4TD9VDP Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset from NASA SEDAC, available from 2000 to 2020, provides census data sources for GPWv4 population estimates.
- ImageCollection ( 'CIESIN/GPWv411/GPW National Identifier Grid' ); var raster = dataset . select ( 'national identifier grid' ); var raster vis = { 'min' : 4.0 , 'palette' : [ '000000' , 'ffffff' ], 'max' : 999.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'national identifier grid' ); Open in Code Editor GPWv411: National Identifier Grid (Gridded Population of the World Version 4.11) This dataset represents the Census data source used to produce the GPW v4.11 populations estimates.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW National Identifier Grid") open in new Tags ciesin gpw nasa population Description This dataset represents the Census data source used to produce the GPW v4.11 populations estimates.
- Note that these data represent the area covered by the statistical data as provided, and are not official representations of country or territory boundaries. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

