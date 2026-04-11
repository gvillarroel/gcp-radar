---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.442Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite"
feature_slug: "landsat-collection-2-tier-1-level-2-8-day-nbr-composite"
latest_feature_date: "2024-06-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/datasets/tags/fire"
  - "https://developers.google.com/earth-engine/datasets/tags/vegetation-indices"
keywords:
  - "landsat"
  - "collection"
  - "tier"
  - "level"
  - "day"
  - "nbr"
  - "composite"
  - "an"
---

# Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

An 8-day Landsat Collection 2 Tier 1 Level 2 NBR composite.

## Extended Definition

An 8-day Landsat Collection 2 Tier 1 Level 2 NBR composite.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/datasets/tags/fire](https://developers.google.com/earth-engine/datasets/tags/fire)
- [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Map . setCenter ( - 122.3578 , 37.7726 , 10 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' ); Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'Custom TOA composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat 5 ImageCollection for a single year. collection = ee .
- Landsat . simpleCloudScore ( mosaic ); Map . addLayer ( scored mosaic , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'TOA mosaic' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. mosaic = ( ee .
- ID Description LANDSAT/LC08/C02/T1 RT TOA Landsat 8, Collection 2, Tier 1 + Real Time, TOA LANDSAT/LC08/C02/T1 TOA Landsat 8, Collection 2, Tier 1 only, TOA LANDSAT/LC08/C02/T1 L2 Landsat 8, Collection 2, Tier 1 only, SR and LST LANDSAT/LC08/C02/T2 TOA Landsat 8, Collection 2, Tier 2 only, TOA These data exist for Landsat 4, 5, 7, 8, and 9.
- Landsat collection structure The USGS produces data in 3 tiers (categories) for each satellite: Tier 1 (T1) - Data that meets geometric and radiometric quality requirements Tier 2 (T2) - Data that doesn't meet the Tier 1 requirements Real Time (RT) - Data that hasn't yet been evaluated (it takes as much as a month).

### "Datasets tagged fire in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/fire](https://developers.google.com/earth-engine/datasets/tags/fire)
- Source ID: `site-docs-root-3`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- See … fire landsat landsat-composite nbrt usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 8-Day BAI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

### "Datasets tagged vegetation-indices in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- Source ID: `site-docs-root-3`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- See Huete … evi landsat landsat-composite usgs vegetation vegetation-indices Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- See … fire landsat landsat-composite nbrt usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 32-Day NDVI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- See … fire landsat landsat-composite nbrt usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 8-Day NDVI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

