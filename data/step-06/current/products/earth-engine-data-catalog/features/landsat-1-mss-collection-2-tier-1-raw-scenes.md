---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.690Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Landsat 1 MSS Collection 2 Tier 1 raw scenes"
feature_slug: "landsat-1-mss-collection-2-tier-1-raw-scenes"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit"
keywords:
  - "landsat"
  - "mss"
  - "collection"
  - "tier"
  - "raw"
  - "scenes"
---

# Landsat 1 MSS Collection 2 Tier 1 raw scenes

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Raw Landsat 1 MSS scenes in Collection 2 Tier 1.

## Extended Definition

Raw Landsat 1 MSS scenes in Collection 2 Tier 1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit)

## Supporting Pages

### "ee.Algorithms.Landsat.pathRowLimit \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit)
- Source ID: `site-docs-reference`
- Final score: 132
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
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Sentinel-2 is a wide-swath, high-resolution, multi-spectral imaging mission supporting Copernicus … copernicus esa eu msi reflectance satellite-imagery Landsat Collection 2 Tier 1 Level 2 32-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These composites are created from all the scenes in each 32-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 8-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These composites are created from all the scenes in each 8-day period beginning from … landsat landsat-composite satellite-imagery sr usgs Landsat Collection 2 Tier 1 Level 2 Annual Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- These images contain 4 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal infrared … cfmask cloud fmask global landsat lasrc USGS Landsat 4 MSS Collection 2 Tier 1 Raw Scenes Landsat 4 MSS Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 32-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 Annual Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the … bai fire landsat landsat-composite usgs vegetation-indices Landsat Collection 2 Tier 1 Level 2 8-Day Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes, and include the SR bands: blue, green, red, nir, swir1, swir2, and thermal.
- The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in … landsat landsat-composite ndvi usgs vegetation vegetation-indices Landsat Collection 2 Tier 1 Level 2 32-Day NDWI Composite These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

