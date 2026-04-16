---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.754Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Tier 1"
feature_slug: "tier-1"
latest_feature_date: "2022-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/datasets/tags/fire"
keywords:
  - "tier"
  - "level"
  - "landsat"
  - "collection"
  - "usgs"
  - "image"
---

# Tier 1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Level 2 Landsat 9 data in Collection 2, Tier 1; A USGS Landsat 4 Level 2 image collection in Collection 2, Tier 1.

## Extended Definition

Level 2 Landsat 9 data in Collection 2, Tier 1; A USGS Landsat 4 Level 2 image collection in Collection 2, Tier 1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/datasets/tags/fire](https://developers.google.com/earth-engine/datasets/tags/fire)

## Supporting Pages

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- These images contain 4 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal infrared … cfmask cloud fmask global landsat lasrc USGS Landsat 4 Level 2, Collection 2, Tier 2 This dataset contains atmospherically corrected surface reflectance and land surface temperature derived from the data produced by the Landsat TM sensor.
- These images contain 4 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal infrared … cfmask cloud fmask global landsat lasrc USGS Landsat 5 Level 2, Collection 2, Tier 2 This dataset contains atmospherically corrected surface reflectance and land surface temperature derived from the data produced by the Landsat TM sensor.
- These images contain 5 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal … cfmask cloud fmask global l8sr landsat USGS Landsat 8 Level 2, Collection 2, Tier 2 This dataset contains atmospherically corrected surface reflectance and land surface temperature derived from the data produced by the Landsat 8 OLI/TIRS sensors.
- These images contain 5 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal … cfmask cloud fmask global l9sr landsat USGS Landsat 9 Level 2, Collection 2, Tier 2 This dataset contains atmospherically corrected surface reflectance and land surface temperature derived from the data produced by the Landsat 9 OLI/TIRS sensors.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access a USGS Collection 2, Level 2 Landsat 8 image like this: Code Editor (JavaScript) var srImage = ee .
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.
- Landsat collection structure The USGS produces data in 3 tiers (categories) for each satellite: Tier 1 (T1) - Data that meets geometric and radiometric quality requirements Tier 2 (T2) - Data that doesn't meet the Tier 1 requirements Real Time (RT) - Data that hasn't yet been evaluated (it takes as much as a month).
- TOA ( raw ) m . add layer ( toa , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.2 }, 'toa reflectance' ) m Surface reflectance Landsat surface reflectance (SR) data are available in Earth Engine as a copy of the USGS Collection 2, Level 2 archive.

### "Datasets tagged fire in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/fire](https://developers.google.com/earth-engine/datasets/tags/fire)
- Source ID: `site-docs-root-3`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- Landfire (LF) Historical fire regimes, intervals, and … doi fire landfire nature-conservancy usda usgs Landsat Collection 2 Tier 1 Level 2 32-Day BAI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

