---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.855Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USGS Landsat 8 Level 2"
feature_slug: "usgs-landsat-8-level-2"
latest_feature_date: "2021-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "usgs"
  - "landsat"
  - "level"
  - "collection"
  - "tier"
  - "imagery"
---

# USGS Landsat 8 Level 2

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

USGS Landsat 8 Level 2 Collection 2 Tier 1 imagery.

## Extended Definition

USGS Landsat 8 Level 2 Collection 2 Tier 1 imagery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- These composites are created from all the scenes in each 32-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 8-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These composites are created from all the scenes in each 8-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 Annual Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- Note that Landsat 7's orbit has been drifting to an earlier acquisition time since 2017. c2 global landsat satellite-imagery toa usgs USGS Landsat 7 Level 2, Collection 2, Tier 1 This dataset contains atmospherically corrected surface reflectance and land surface temperature derived from the data produced by the Landsat 7 ETM+ sensor.
- Generated from the TEMPO instrument on the IS-40e platform, the data is created by combining and re-gridding Level 2 … air-quality nasa ozone pollution satellite-imagery tempo USGS Landsat 1 MSS Collection 2 Tier 1 Raw Scenes Landsat 1 MSS Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Note that Landsat 7's orbit has been drifting to an earlier acquisition time since 2017. c2 global landsat satellite-imagery toa usgs USGS Landsat 7 Level 2, Collection 2, Tier 1 This dataset contains atmospherically corrected surface reflectance and land surface temperature derived from the data produced by the Landsat 7 ETM+ sensor.
- See Chander et al. (2009) for details on the TOA computation. global landsat satellite-imagery toa usgs USGS Landsat 5 Level 2, Collection 2, Tier 1 This dataset contains atmospherically corrected surface reflectance and land surface temperature derived from the data produced by the Landsat TM sensor.
- These composites are created from all the scenes in each 32-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- These composites are created from all the scenes in each annual period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 Annual EVI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Landsat collection structure The USGS produces data in 3 tiers (categories) for each satellite: Tier 1 (T1) - Data that meets geometric and radiometric quality requirements Tier 2 (T2) - Data that doesn't meet the Tier 1 requirements Real Time (RT) - Data that hasn't yet been evaluated (it takes as much as a month).
- TOA ( raw ) m . add layer ( toa , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.2 }, 'toa reflectance' ) m Surface reflectance Landsat surface reflectance (SR) data are available in Earth Engine as a copy of the USGS Collection 2, Level 2 archive.
- You can access a USGS Collection 2, Level 2 Landsat 8 image like this: Code Editor (JavaScript) var srImage = ee .
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.

