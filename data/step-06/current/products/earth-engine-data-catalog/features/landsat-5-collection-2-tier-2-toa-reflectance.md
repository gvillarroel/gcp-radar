---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.641Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Landsat 5 Collection 2 Tier 2 TOA Reflectance"
feature_slug: "landsat-5-collection-2-tier-2-toa-reflectance"
latest_feature_date: "2021-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "landsat"
  - "collection"
  - "tier"
  - "toa"
  - "reflectance"
  - "provides"
  - "scenes"
---

# Landsat 5 Collection 2 Tier 2 TOA Reflectance

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Provides Landsat 5 Collection 2 Tier 2 TOA reflectance scenes.

## Extended Definition

Provides Landsat 5 Collection 2 Tier 2 TOA reflectance scenes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- ID Description LANDSAT/LC08/C02/T1 RT TOA Landsat 8, Collection 2, Tier 1 + Real Time, TOA LANDSAT/LC08/C02/T1 TOA Landsat 8, Collection 2, Tier 1 only, TOA LANDSAT/LC08/C02/T1 L2 Landsat 8, Collection 2, Tier 1 only, SR and LST LANDSAT/LC08/C02/T2 TOA Landsat 8, Collection 2, Tier 2 only, TOA These data exist for Landsat 4, 5, 7, 8, and 9.
- Examples for Landsat 8 are as follows: ID Description LANDSAT/LC08/C02/T1 RT Landsat 8, Collection 2, Tier 1 + Real Time LANDSAT/LC08/C02/T1 Landsat 8, Collection 2, Tier 1 only LANDSAT/LC08/C02/T2 Landsat 8, Collection 2, Tier 2 only Newly acquired scenes are added to the T1 RT collection daily.
- TOA ( raw ) m . add layer ( toa , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 0.2 }, 'toa reflectance' ) m Surface reflectance Landsat surface reflectance (SR) data are available in Earth Engine as a copy of the USGS Collection 2, Level 2 archive.
- To apply this algorithm to an Earth Engine mosaic of Landsat scenes, set the SENSOR ID property: Code Editor (JavaScript) // Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. var mosaic = ee .

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do … c2 global l4 landsat lt4 radiance USGS Landsat 4 TM Collection 2 Tier 2 TOA Reflectance Landsat 4 TM Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do … c2 global l5 landsat lt5 radiance USGS Landsat 5 TM Collection 2 Tier 2 TOA Reflectance Landsat 5 TM Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not … c2 global l8 landsat lc8 oli-tirs USGS Landsat 8 Collection 2 Tier 2 TOA Reflectance Landsat 8 Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not … c2 global l9 landsat lc9 oli-tirs USGS Landsat 9 Collection 2 Tier 2 TOA Reflectance Landsat 9 Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do … c2 global l4 landsat lt4 radiance USGS Landsat 4 TM Collection 2 Tier 2 TOA Reflectance Landsat 4 TM Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do … c2 global l5 landsat lt5 radiance USGS Landsat 5 TM Collection 2 Tier 2 TOA Reflectance Landsat 5 TM Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not … c2 global l8 landsat lc8 oli-tirs USGS Landsat 8 Collection 2 Tier 2 TOA Reflectance Landsat 8 Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.
- This includes Systematic terrain (L1GT) and Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not … c2 global l9 landsat lc9 oli-tirs USGS Landsat 9 Collection 2 Tier 2 TOA Reflectance Landsat 9 Collection 2 Tier 2 calibrated top-of-atmosphere (TOA) reflectance.

