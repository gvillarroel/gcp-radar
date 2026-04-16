---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.502Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USGS RCMAP Trends Year v06"
feature_slug: "usgs-rcmap-trends-year-v06"
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
  - "year"
  - "v06"
  - "detected"
  - "trend"
  - "rangeland"
---

# USGS RCMAP Trends Year v06

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Year of detected trend for the RCMAP rangeland component time series.

## Extended Definition

Year of detected trend for the RCMAP rangeland component time series.

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
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends Year for Component Timeseries (1985-2023), v06 This collection includes RCMAP yearly products from 1985 through 2023.
- The RCMAP product suite consists of ten fractional components: annual … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06 The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.
- There are about 74,000 polygon features … census infrastructure-boundaries table tiger us TOMS and OMI Merged Ozone Data The Total Ozone Mapping Spectrometer (TOMS) data represent the primary long-term, continuous record of satellite-based observations available for use in monitoring global and regional trends in total ozone over the past 25 years.
- These methane emission fluxes were produced using a point source detection and emissions quantification framework specialized to exploit the high spatial resolution, wide spatial coverage, and high precision of … atmosphere climate edf edf-methanesat-ee emissions ghg Monitoring Trends in Burn Severity (MTBS) Burn Severity Images The burn severity mosaics consist of thematic raster images of MTBS burn severity classes for all currently completed MTBS fires for the continental United States, Alaska, Hawaii and Puerto Rico.

### "Datasets tagged landuse-landcover in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- Source ID: `site-docs-root-3`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends Year for Component Timeseries (1985-2023), v06 This collection includes RCMAP yearly products from 1985 through 2023.
- The RCMAP product suite consists of ten fractional components: annual … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06 The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland SBTN Natural Lands Map v1 The SBTN Natural Lands Map v1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri SBTN Natural Lands Map v1.1 The SBTN Natural Lands Map v1.1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri TUBerlin/BigEarthNet/v1 BigEarthNet is a new large-scale Sentinel-2 benchmark archive, consisting of 590,326 Sentinel-2 image patches.
- This data was converted from its categorical format, which has a ≈500 meter resolution, to a fractional product indicating the integer percentage (0-100) of the output … landcover landuse-landcover map RCMAP Rangeland Component Timeseries (1985-2023), v06 'The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.

### "ee.Algorithms.TemporalSegmentation.LandTrendr \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr](https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detecting trends in forest disturbance and recovery using yearly Landsat time series: 1.
- Usage Returns ee.Algorithms.TemporalSegmentation.LandTrendr(timeSeries, maxSegments, spikeThreshold , vertexCountOvershoot , preventOneYearRecovery , recoveryThreshold , pvalThreshold , bestModelProportion , minObservationsNeeded ) Image Argument Type Details timeSeries ImageCollection Yearly time-series from which to extract breakpoints.
- Landsat-based detection of Trends in Disturbance and Recovery: temporally segments a time-series of images by extracting the spectral trajectories of change over time.
- Page Summary outlined flag LandTrendr detects disturbance and recovery trends in a time-series of Landsat images by spectrally segmenting them over time.

