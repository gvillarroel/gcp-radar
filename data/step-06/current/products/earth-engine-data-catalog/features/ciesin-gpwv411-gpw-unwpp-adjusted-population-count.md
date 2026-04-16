---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.023Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count"
feature_slug: "ciesin-gpwv411-gpw-unwpp-adjusted-population-count"
latest_feature_date: "2019-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density"
keywords:
  - "ciesin"
  - "gpwv411"
  - "gpw"
  - "unwpp"
  - "adjusted"
  - "population"
  - "count"
  - "un"
---

# CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

GPWv411 population count adjusted to UN World Population Prospects 2015 totals.

## Extended Definition

GPWv411 population count adjusted to UN World Population Prospects 2015 totals.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density)

## Supporting Pages

### "GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count)
- Source ID: `site-docs-root-2`
- Final score: 425
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'CIESIN/GPWv411/GPW UNWPP-Adjusted Population Count' ). first (); var raster = dataset . select ( 'unwpp-adjusted population count' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'unwpp-adjusted population count' ); Open in Code Editor GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- General … CIESIN/GPWv411/GPW UNWPP-Adjusted Population Count, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4PN93PB https://doi.org/10.7927/H4PN93PB Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW UNWPP-Adjusted Population Count") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description unwpp-adjusted population count 0 602380 927.67 meters The estimated number of persons per 30 arc-second grid cell. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

### "GPWv411: UN-Adjusted Population Density (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density' ). first (); var raster = dataset . select ( 'unwpp-adjusted population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'unwpp-adjusted population density' ); Open in Code Editor GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- General … CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4F47M65 https://doi.org/10.7927/H4F47M65 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description unwpp-adjusted population density 0 778120 927.67 meters The estimated number of persons per square kilometer. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

### "GPWv411: National Identifier Grid (Gridded Population of the World Version\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human … CIESIN/GPWv411/GPW National Identifier Grid, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4TD9VDP https://doi.org/10.7927/H4TD9VDP Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset from NASA SEDAC, available from 2000 to 2020, provides census data sources for GPWv4 population estimates.
- ImageCollection ( 'CIESIN/GPWv411/GPW National Identifier Grid' ); var raster = dataset . select ( 'national identifier grid' ); var raster vis = { 'min' : 4.0 , 'palette' : [ '000000' , 'ffffff' ], 'max' : 999.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'national identifier grid' ); Open in Code Editor GPWv411: National Identifier Grid (Gridded Population of the World Version 4.11) This dataset represents the Census data source used to produce the GPW v4.11 populations estimates.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW National Identifier Grid") open in new Tags ciesin gpw nasa population Description This dataset represents the Census data source used to produce the GPW v4.11 populations estimates.
- Note that these data represent the area covered by the statistical data as provided, and are not official representations of country or territory boundaries. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

