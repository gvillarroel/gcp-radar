---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.598Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Landsat 4 TM Collection 2 Tier 1 raw scenes"
feature_slug: "landsat-4-tm-collection-2-tier-1-raw-scenes"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/datasets/tags/vegetation-indices"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "landsat"
  - "tm"
  - "collection"
  - "tier"
  - "raw"
  - "scenes"
  - "in"
---

# Landsat 4 TM Collection 2 Tier 1 raw scenes

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Raw Landsat 4 TM scenes in Collection 2 Tier 1.

## Extended Definition

Raw Landsat 4 TM scenes in Collection 2 Tier 1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- These images contain 4 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal … cfmask cloud etm fmask global landsat USGS Landsat 8 Collection 2 Tier 1 Raw Scenes Landsat 8 Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do … c2 global l4 landsat lm4 mss USGS Landsat 4 TM Collection 2 Tier 1 Raw Scenes Landsat 4 TM Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do … c2 global l5 landsat lm5 mss USGS Landsat 5 TM Collection 2 Tier 1 Raw Scenes Landsat 5 TM Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.
- See Chander et al. (2009) for details on the TOA computation. global landsat satellite-imagery toa usgs USGS Landsat 4 TM Collection 2 Tier 2 Raw Scenes Landsat 4 TM Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.

### "Datasets tagged vegetation-indices in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- Source ID: `site-docs-root-3`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual EVI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 8-Day EVI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in … landsat landsat-composite ndvi usgs vegetation vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual BAI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Map . setCenter ( - 122.3578 , 37.7726 , 10 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' ); Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'Custom TOA composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat 5 ImageCollection for a single year. collection = ee .
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.
- Landsat collection structure The USGS produces data in 3 tiers (categories) for each satellite: Tier 1 (T1) - Data that meets geometric and radiometric quality requirements Tier 2 (T2) - Data that doesn't meet the Tier 1 requirements Real Time (RT) - Data that hasn't yet been evaluated (it takes as much as a month).
- Examples for Landsat 8 are as follows: ID Description LANDSAT/LC08/C02/T1 RT Landsat 8, Collection 2, Tier 1 + Real Time LANDSAT/LC08/C02/T1 Landsat 8, Collection 2, Tier 1 only LANDSAT/LC08/C02/T2 Landsat 8, Collection 2, Tier 2 only Newly acquired scenes are added to the T1 RT collection daily.

