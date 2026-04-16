---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.453Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "EMIT L1B Radiance and Geolocation Data"
feature_slug: "emit-l1b-radiance-and-geolocation-data"
latest_feature_date: "2024-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance"
keywords:
  - "emit"
  - "l1b"
  - "radiance"
  - "geolocation"
  - "level"
  - "1b"
  - "sensor"
  - "calibrated"
---

# EMIT L1B Radiance and Geolocation Data

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

An EMIT Level 1B at-sensor calibrated radiance and geolocation dataset at 60 m resolution.

## Extended Definition

An EMIT Level 1B at-sensor calibrated radiance and geolocation dataset at 60 m resolution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance)

## Supporting Pages

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Score+ S2 HARMONIZED dataset is being operationally produced from the harmonized Sentinel-2 L1C collection, and Cloud Score+ outputs can be used to identify relatively clear pixels and effectively remove clouds … cloud google satellite-imagery sentinel2-derived EMIT L1B At-Sensor Calibrated Radiance and Geolocation Data 60 m The EMIT Project is part of the Earth Venture-Instrument (EV-I) Program directed by the Program Director of the NASA Earth Science Division (ESD).
- Generated from the TEMPO instrument on the IS-40e platform, the data is created by combining and re-gridding Level 2 … air-quality nasa ozone pollution satellite-imagery tempo USGS Landsat 1 MSS Collection 2 Tier 1 Raw Scenes Landsat 1 MSS Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.
- Tier 1 includes Level-1 Precision Terrain (L1TP) processed data that … c2 global l1 landsat lm1 mss USGS Landsat 1 MSS Collection 2 Tier 2 Raw Scenes Landsat 1 MSS Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.
- Tier 1 includes Level-1 Precision Terrain (L1TP) processed data that … c2 global l2 landsat lm2 mss USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes Landsat 2 MSS Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- This ancillary product, essential for understanding plant water needs and stress, is created through a data fusion process that combines Visible … albedo land ndvi plant-productivity EMIT L1B At-Sensor Calibrated Radiance and Geolocation Data 60 m The EMIT Project is part of the Earth Venture-Instrument (EV-I) Program directed by the Program Director of the NASA Earth Science Division (ESD).
- Tier 1 includes Level-1 Precision Terrain (L1TP) processed data that … c2 global l1 landsat lm1 mss USGS Landsat 1 MSS Collection 2 Tier 2 Raw Scenes Landsat 1 MSS Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.
- Tier 1 includes Level-1 Precision Terrain (L1TP) processed data that … c2 global l2 landsat lm2 mss USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes Landsat 2 MSS Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.
- Tier 1 includes Level-1 Precision Terrain (L1TP) processed data that … c2 global l3 landsat lm3 mss USGS Landsat 3 MSS Collection 2 Tier 2 Raw Scenes Landsat 3 MSS Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.

### "ee.Algorithms.Landsat.calibratedRadiance \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Landsat.calibratedRadiance Stay organized with collections Save and categorize content based on your preferences.
- Usage Returns ee.Algorithms.Landsat.calibratedRadiance(image) Image Argument Type Details image Image The input Landsat image.
- Calibrates each band of an image by applying linear transformation with slope RADIANCE MULT BAND N and y-intercept RADIANCE ADD BAND N ; these values are extracted from the image metadata.

