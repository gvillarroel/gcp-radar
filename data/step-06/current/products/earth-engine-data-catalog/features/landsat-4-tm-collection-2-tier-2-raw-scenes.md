---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.703Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Landsat 4 TM Collection 2 Tier 2 raw scenes"
feature_slug: "landsat-4-tm-collection-2-tier-2-raw-scenes"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite"
keywords:
  - "landsat"
  - "tm"
  - "collection"
  - "tier"
  - "raw"
  - "scenes"
---

# Landsat 4 TM Collection 2 Tier 2 raw scenes

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Raw Landsat 4 TM scenes in Collection 2 Tier 2.

## Extended Definition

Raw Landsat 4 TM scenes in Collection 2 Tier 2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite)

## Supporting Pages

### "ee.Algorithms.Landsat.pathRowLimit \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage Returns ee.Algorithms.Landsat.pathRowLimit(collection, maxScenesPerPathRow , maxScenesTotal ) ImageCollection Argument Type Details collection ImageCollection The Landsat ImageCollection to limit. maxScenesPerPathRow Integer, default: 25 The max number of scenes to return per path/row. maxScenesTotal Integer, default: 100 The max number of scenes to return per request total.
- Limits requests to an ImageCollection of Landsat scenes to return a controllable number of the best scenes for each request.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Landsat.pathRowLimit Stay organized with collections Save and categorize content based on your preferences.
- Note that in rare circumstances, when the tile boundary aligns with a Landsat WRS cell boundary, queries for adjacent tiles may yield conflicting results.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Sentinel-2 is a wide-swath, high-resolution, multi-spectral imaging mission supporting Copernicus … copernicus esa eu msi reflectance satellite-imagery Landsat Collection 2 Tier 1 Level 2 32-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These composites are created from all the scenes in each 32-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 8-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These composites are created from all the scenes in each 8-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 Annual Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These images contain 4 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal infrared … cfmask cloud fmask global landsat lasrc USGS Landsat 4 MSS Collection 2 Tier 1 Raw Scenes Landsat 4 MSS Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

### "ee.Algorithms.Landsat.simpleComposite \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.Landsat.simpleComposite(collection, percentile , cloudScoreRange , maxDepth , asFloat ) Image Argument Type Details collection ImageCollection The raw Landsat ImageCollection to composite. percentile Integer, default: 50 The percentile value to use when compositing each band. cloudScoreRange Integer, default: 10 The size of the range of cloud scores to accept per pixel. maxDepth Integer, default: 40 An approximate limit on the maximum number of scenes used to compute each pixel. asFloat Boolean, default: false If true, output bands are in the same units as the Landsat.TOA algorithm; if false, TOA values are converted to uint8 by multiplying by 255 (reflective bands) or subtracting 100 (thermal bands) and rounding to the nearest integer.
- Computes a Landsat TOA composite from a collection of raw Landsat scenes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The algorithm creates a Landsat TOA composite from raw scenes.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Landsat.simpleComposite Stay organized with collections Save and categorize content based on your preferences.

