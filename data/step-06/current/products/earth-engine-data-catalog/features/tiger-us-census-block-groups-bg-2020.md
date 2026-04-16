---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.710Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "TIGER: US Census Block Groups (BG) 2020"
feature_slug: "tiger-us-census-block-groups-bg-2020"
latest_feature_date: "2022-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics"
keywords:
  - "tiger"
  - "us"
  - "census"
  - "block"
  - "groups"
  - "bg"
  - "2020"
  - "dataset"
---

# TIGER: US Census Block Groups (BG) 2020

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

US Census Block Groups for 2020 from the TIGER dataset.

## Extended Definition

US Census Block Groups for 2020 from the TIGER dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics)

## Supporting Pages

### "Datasets tagged infrastructure-boundaries in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- Source ID: `site-docs-root-3`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are just … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Block Groups (BG) 2020 The United States Census Bureau regularly releases a geodatabase named TIGER.
- This dataset contains the 2020 census block groups, which is a cluster of blocks within the same census tract that have the same first digit of their four-digit census block number.
- There are just over eight million polygon features covering the United States, the District of Columbia, Puerto Rico, and the Island … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Block Groups (BG) 2010 The United States Census Bureau regularly releases a geodatabase named TIGER.
- This database is separated into … conservation-easements designation infrastructure-boundaries management ownership protected-areas TIGER: 2020 Tabulation (Census) Block The United States Census Bureau regularly releases a geodatabase named TIGER.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- There are just … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Block Groups (BG) 2020 The United States Census Bureau regularly releases a geodatabase named TIGER.
- This dataset contains the 2020 census block groups, which is a cluster of blocks within the same census tract that have the same first digit of their four-digit census block number.
- There are just over eight million polygon features covering the United States, the District of Columbia, Puerto Rico, and the Island … census city infrastructure-boundaries neighborhood table tiger TIGER: US Census Block Groups (BG) 2010 The United States Census Bureau regularly releases a geodatabase named TIGER.
- Generated from the TEMPO instrument on the IS-40e platform, the data is created by combining and re-gridding Level 2 … air-quality nasa ozone pollution satellite-imagery tempo TIGER: 2020 Tabulation (Census) Block The United States Census Bureau regularly releases a geodatabase named TIGER.

### "GPWv411: Basic Demographic Characteristics (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Basic Demographic Characteristics") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision … CIESIN/GPWv411/GPW Basic Demographic Characteristics, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H46M34XX https://doi.org/10.7927/H46M34XX Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset provides gridded population estimates from 2000 to 2020, updated every five years, sourced from NASA SEDAC.
- ImageCollection ( 'CIESIN/GPWv411/GPW Basic Demographic Characteristics' ). first (); var raster = dataset . select ( 'basic demographic characteristics' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'basic demographic characteristics' ); Open in Code Editor GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11) This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- Page Summary outlined flag This dataset provides gridded population estimates by age and sex for the years 2000, 2005, 2010, 2015, and 2020 at a 30 arc-second resolution.

