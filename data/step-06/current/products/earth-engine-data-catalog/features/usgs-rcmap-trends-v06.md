---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.501Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USGS RCMAP Trends v06"
feature_slug: "usgs-rcmap-trends-v06"
latest_feature_date: "2024-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/landuse-landcover"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr"
keywords:
  - "usgs"
  - "rcmap"
  - "trends"
  - "v06"
  - "rangeland"
  - "component"
  - "trend"
  - "1985"
---

# USGS RCMAP Trends v06

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Rangeland component trend data for 1985-2023.

## Extended Definition

Rangeland component trend data for 1985-2023.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr](https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr)

## Supporting Pages

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The RCMAP product suite consists of ten fractional components: annual … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06 The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends Year for Component Timeseries (1985-2023), v06 This collection includes RCMAP yearly products from 1985 through 2023.
- This database is separated into … conservation-easements designation infrastructure-boundaries management ownership protected-areas RCMAP Rangeland Component Timeseries (1985-2023), v06 'The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.
- The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.

### "Datasets tagged landuse-landcover in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- Source ID: `site-docs-root-3`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The RCMAP product suite consists of ten fractional components: annual … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06 The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends Year for Component Timeseries (1985-2023), v06 This collection includes RCMAP yearly products from 1985 through 2023.
- This data was converted from its categorical format, which has a ≈500 meter resolution, to a fractional product indicating the integer percentage (0-100) of the output … landcover landuse-landcover map RCMAP Rangeland Component Timeseries (1985-2023), v06 'The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.
- The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.

### "ee.Algorithms.TemporalSegmentation.LandTrendr \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr](https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Landsat-based detection of Trends in Disturbance and Recovery: temporally segments a time-series of images by extracting the spectral trajectories of change over time.
- Page Summary outlined flag LandTrendr detects disturbance and recovery trends in a time-series of Landsat images by spectrally segmenting them over time.
- Detecting trends in forest disturbance and recovery using yearly Landsat time series: 1.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["The LandTrendr algorithm segments a time-series of images, using the first band to find breakpoints that identify spectral changes.

