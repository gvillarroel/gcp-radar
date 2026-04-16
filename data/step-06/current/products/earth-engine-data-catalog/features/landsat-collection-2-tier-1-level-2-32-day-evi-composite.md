---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.457Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite"
feature_slug: "landsat-collection-2-tier-1-level-2-32-day-evi-composite"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "landsat"
  - "collection"
  - "tier"
  - "level"
  - "32"
  - "day"
  - "evi"
  - "composite"
---

# Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A 32-day Landsat Collection 2 Tier 1 Level 2 EVI composite.

## Extended Definition

A 32-day Landsat Collection 2 Tier 1 Level 2 EVI composite.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### "ee.Algorithms.Landsat.simpleComposite \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.Landsat.simpleComposite(collection, percentile , cloudScoreRange , maxDepth , asFloat ) Image Argument Type Details collection ImageCollection The raw Landsat ImageCollection to composite. percentile Integer, default: 50 The percentile value to use when compositing each band. cloudScoreRange Integer, default: 10 The size of the range of cloud scores to accept per pixel. maxDepth Integer, default: 40 An approximate limit on the maximum number of scenes used to compute each pixel. asFloat Boolean, default: false If true, output bands are in the same units as the Landsat.TOA algorithm; if false, TOA values are converted to uint8 by multiplying by 255 (reflective bands) or subtracting 100 (thermal bands) and rounding to the nearest integer.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Landsat.simpleComposite Stay organized with collections Save and categorize content based on your preferences.
- Computes a Landsat TOA composite from a collection of raw Landsat scenes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The algorithm creates a Landsat TOA composite from raw scenes.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Map . setCenter ( - 122.3578 , 37.7726 , 10 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' ); Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'Custom TOA composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat 5 ImageCollection for a single year. collection = ee .
- ID Description LANDSAT/LC08/C02/T1 RT TOA Landsat 8, Collection 2, Tier 1 + Real Time, TOA LANDSAT/LC08/C02/T1 TOA Landsat 8, Collection 2, Tier 1 only, TOA LANDSAT/LC08/C02/T1 L2 Landsat 8, Collection 2, Tier 1 only, SR and LST LANDSAT/LC08/C02/T2 TOA Landsat 8, Collection 2, Tier 2 only, TOA These data exist for Landsat 4, 5, 7, 8, and 9.
- Landsat collection structure The USGS produces data in 3 tiers (categories) for each satellite: Tier 1 (T1) - Data that meets geometric and radiometric quality requirements Tier 2 (T2) - Data that doesn't meet the Tier 1 requirements Real Time (RT) - Data that hasn't yet been evaluated (it takes as much as a month).
- Examples for Landsat 8 are as follows: ID Description LANDSAT/LC08/C02/T1 RT Landsat 8, Collection 2, Tier 1 + Real Time LANDSAT/LC08/C02/T1 Landsat 8, Collection 2, Tier 1 only LANDSAT/LC08/C02/T2 Landsat 8, Collection 2, Tier 2 only Newly acquired scenes are added to the T1 RT collection daily.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Sentinel-2 is a wide-swath, high-resolution, multi-spectral imaging mission supporting Copernicus … copernicus esa eu msi reflectance satellite-imagery Landsat Collection 2 Tier 1 Level 2 32-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These composites are created from all the scenes in each 32-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 8-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These composites are created from all the scenes in each 8-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 Annual Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These images contain 4 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal infrared … cfmask cloud fmask global landsat lasrc USGS Landsat 4 Level 2, Collection 2, Tier 2 This dataset contains atmospherically corrected surface reflectance and land surface temperature derived from the data produced by the Landsat TM sensor.

