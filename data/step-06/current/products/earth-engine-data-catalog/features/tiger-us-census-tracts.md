---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.602Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "TIGER: US Census Tracts"
feature_slug: "tiger-us-census-tracts"
latest_feature_date: "2022-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density"
keywords:
  - "tiger"
  - "us"
  - "census"
  - "tracts"
  - "from"
  - "the"
  - "dataset"
---

# TIGER: US Census Tracts

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

US Census tracts from the TIGER dataset.

## Extended Definition

US Census tracts from the TIGER dataset.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density)

## Supporting Pages

### "Datasets tagged infrastructure-boundaries in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- Source ID: `site-docs-root-3`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Alaska has governmental entities called "boroughs" which fill a similar governmental … census county infrastructure-boundaries table tiger us TIGER: US Census Roads This United States Census Bureau TIGER dataset contains all road segments from the 2016 release, containing more than 19 million individual line features covering the United States, the District of Columbia, Puerto Rico, and the Island Areas.
- In addition to the fifty states, the Census Bureau treats the District of Columbia, Puerto Rico, and each of the island areas (American Samoa, the … census infrastructure-boundaries state states table tiger TIGER: US Census States 2018 The United States Census Bureau TIGER dataset contains the 2018 boundaries for the primary governmental divisions of the United States.
- There are just over 11 million polygon features covering the United States, the District of Columbia, Puerto Rico, and the Island … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Counties 2016 The United States Census Bureau TIGER dataset contains the 2016 boundaries for primary legal divisions of US states.
- In addition to the fifty states, the Census Bureau treats the District of Columbia, Puerto Rico, and each of the island areas (American Samoa, the … census infrastructure-boundaries state states table tiger TIGER: US Census Tracts The United States Census Bureau regularly releases a geodatabase named TIGER.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Alaska has governmental entities called "boroughs" which fill a similar governmental … census county infrastructure-boundaries table tiger us TIGER: US Census Roads This United States Census Bureau TIGER dataset contains all road segments from the 2016 release, containing more than 19 million individual line features covering the United States, the District of Columbia, Puerto Rico, and the Island Areas.
- Residential population estimates between 1975 and 2020 in 5-year intervals and projections to 2025 and 2030 derived from CIESIN GPWv4.11 were disaggregated from census or … ghsl jrc population sdg GHSL: Global settlement characteristics (10 m) 2018 (P2023A) This spatial raster dataset delineates human settlements at 10 m resolution, and describes their inner characteristics in terms of the functional and height-related components of the built environment.
- In addition to the fifty states, the Census Bureau treats the District of Columbia, Puerto Rico, and each of the island areas (American Samoa, the … census infrastructure-boundaries state states table tiger TIGER: US Census States 2018 The United States Census Bureau TIGER dataset contains the 2018 boundaries for the primary governmental divisions of the United States.
- There are just over 11 million polygon features covering the United States, the District of Columbia, Puerto Rico, and the Island … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Counties 2016 The United States Census Bureau TIGER dataset contains the 2016 boundaries for primary legal divisions of US states.

### "GPWv411: UN-Adjusted Population Density (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density' ). first (); var raster = dataset . select ( 'unwpp-adjusted population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'unwpp-adjusted population density' ); Open in Code Editor GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- Population input data are collected at the most detailed spatial resolution available from the results of the 2010 round of censuses, which occurred between 2005 and 2014.
- General … CIESIN/GPWv411/GPW UNWPP-Adjusted Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4F47M65 https://doi.org/10.7927/H4F47M65 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

