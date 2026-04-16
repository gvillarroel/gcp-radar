---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.466Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Landsat Collection 2 Tier 1 Level 2 Annual NDVI Composite"
feature_slug: "landsat-collection-2-tier-1-level-2-annual-ndvi-composite"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/vegetation-indices"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite"
keywords:
  - "landsat"
  - "collection"
  - "tier"
  - "level"
  - "annual"
  - "ndvi"
  - "composite"
---

# Landsat Collection 2 Tier 1 Level 2 Annual NDVI Composite

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

An annual Landsat Collection 2 Tier 1 Level 2 NDVI composite.

## Extended Definition

An annual Landsat Collection 2 Tier 1 Level 2 NDVI composite.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite)

## Supporting Pages

### "Datasets tagged vegetation-indices in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- Source ID: `site-docs-root-3`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in … landsat landsat-composite ndvi usgs vegetation vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual BAI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- See … fire landsat landsat-composite nbrt usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual NDVI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual EVI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in … landsat landsat-composite ndvi usgs vegetation vegetation-indices Landsat Collection 2 Tier 1 Level 2 8-Day BAI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in … landsat landsat-composite ndvi usgs vegetation vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual NDWI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- See … fire landsat landsat-composite nbrt usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual NDVI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in … landsat landsat-composite ndvi usgs vegetation vegetation-indices Landsat Collection 2 Tier 1 Level 2 32-Day NDWI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

### "ee.Algorithms.Landsat.simpleComposite \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.Landsat.simpleComposite(collection, percentile , cloudScoreRange , maxDepth , asFloat ) Image Argument Type Details collection ImageCollection The raw Landsat ImageCollection to composite. percentile Integer, default: 50 The percentile value to use when compositing each band. cloudScoreRange Integer, default: 10 The size of the range of cloud scores to accept per pixel. maxDepth Integer, default: 40 An approximate limit on the maximum number of scenes used to compute each pixel. asFloat Boolean, default: false If true, output bands are in the same units as the Landsat.TOA algorithm; if false, TOA values are converted to uint8 by multiplying by 255 (reflective bands) or subtracting 100 (thermal bands) and rounding to the nearest integer.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Landsat.simpleComposite Stay organized with collections Save and categorize content based on your preferences.
- Computes a Landsat TOA composite from a collection of raw Landsat scenes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The algorithm creates a Landsat TOA composite from raw scenes.

