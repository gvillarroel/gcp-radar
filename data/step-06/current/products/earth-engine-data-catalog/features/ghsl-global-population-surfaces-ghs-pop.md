---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.550Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GHSL Global population surfaces (GHS_POP)"
feature_slug: "ghsl-global-population-surfaces-ghs-pop"
latest_feature_date: "2023-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP"
keywords:
  - "ghsl"
  - "global"
  - "population"
  - "surfaces"
  - "ghs"
  - "pop"
  - "map"
  - "distribution"
---

# GHSL Global population surfaces (GHS_POP)

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

GHSL Global population surfaces map population distribution globally from 1975 to 2030.

## Extended Definition

GHSL Global population surfaces map population distribution globally from 1975 to 2030.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP)

## Supporting Pages

### GHSL: Global population surfaces 1975-2030 (P2023A) | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP)
- Source ID: `feature-recovery-direct-http`
- Final score: 398
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'JRC/GHSL/P2023A/GHS_POP/2020' ); var populationCountVis = { min : 0.0 , max : 100.0 , palette : [ '000004' , '320A5A' , '781B6C' , 'BB3654' , 'EC6824' , 'FBB41A' , 'FCFFA4' ] }; Map . setCenter ( 8 , 48 , 7 ); image1975 = image1975 . updateMask ( image1975 . gt ( 0 )); image1990 = image1990 . updateMask ( image1990 . gt ( 0 )); image2020 = image2020 . updateMask ( image2020 . gt ( 0 )); Map . addLayer ( image1975 , populationCountVis , 'Population count, 1975' ); Map . addLayer ( image1990 , populationCountVis , 'Population count, 1990' ); Map . addLayer ( image2020 , populationCountVis , 'Population count, 2020' ); Open in Code Editor GHSL: Global population surfaces 1975-2030 (P2023A) This raster dataset depicts the spatial distribution of residential population, expressed as the absolute number of inhabitants of the cell.
- Residential population estimates between 1975 and 2020 in 5-year intervals and projections to 2025 and 2030 derived from CIESIN GPWv4.11 were disaggregated from census or administrative units to grid cells, … JRC/GHSL/P2023A/GHS_POP, ghsl,jrc,population,sdg 1975-01-01T00:00:00Z/2030-12-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.2905/2FF68A52-5B5B-4A22-8F40-C41DA8332CFE https://doi.org/10.2905/2FF68A52-5B5B-4A22-8F40-C41DA8332CFE Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset provides spatial distribution of residential population, counting inhabitants per cell from 1975 to 2020 in 5-year intervals, with projections to 2025 and 2030.
- Dataset Availability 1975-01-01T00:00:00Z–2030-12-31T00:00:00Z Dataset Producer EC JRC Earth Engine Snippet ee.ImageCollection("JRC/GHSL/P2023A/GHS_POP") open_in_new Tags ghsl jrc population sdg ciesin-derived Description This raster dataset depicts the spatial distribution of residential population, expressed as the absolute number of inhabitants of the cell.
- Image ( 'JRC/GHSL/P2023A/GHS_POP/1975' ); var image1990 = ee .

### "Datasets tagged population in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- Source ID: `site-docs-root-3`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Data are spatially-temporally interpolated or … built built-environment builtup copernicus ghsl jrc GHSL: Global population surfaces 1975-2030 (P2023A) This raster dataset depicts the spatial distribution of residential population, expressed as the absolute number of inhabitants of the cell.
- The datasets measure: a) the total built-up surface, and b) the built-up surface allocated to grid cells of … built built-environment builtup copernicus ghsl jrc GHSL: Global built-up surface 1975-2030 (P2023A) This raster dataset depicts the distribution of built-up surfaces, expressed in square metres per 100 m grid cell.
- Estimates are based on the built-up … alos building built-environment copernicus dem ghsl GHSL: Global built-up surface 10m (P2023A) This raster dataset depicts the distribution of built-up surfaces, expressed in square metres per 10 m grid cell, for 2018 as observed from the S2 image data.
- The Degree … ghsl jrc population sdg settlement GHSL: Global building height 2018 (P2023A) This spatial raster dataset depicts the global distribution of building heights at a resolution of 100 m, referred to the year 2018.

### "GPWv411: National Identifier Grid (Gridded Population of the World Version\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human … CIESIN/GPWv411/GPW National Identifier Grid, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4TD9VDP https://doi.org/10.7927/H4TD9VDP Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset from NASA SEDAC, available from 2000 to 2020, provides census data sources for GPWv4 population estimates.
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second (approximately 1 km) grid cells.
- The dataset, Gridded Population of World Version 4 (GPWv4), Revision 11, models global human population distribution for the years 2000, 2005, 2010, 2015, and 2020 at a resolution of 30 arc-seconds.
- It models global population distribution on a 1km grid for 2000, 2005, 2010, 2015, and 2020.

