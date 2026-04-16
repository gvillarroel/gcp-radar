---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.964Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "getMap() method"
feature_slug: "getmap-method"
latest_feature_date: "2023-12-08"
deprecation_date: "2023-12-08"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "getmap"
  - "method"
  - "deprecated"
  - "favor"
  - "getmapid"
  - "2023"
  - "12"
  - "08"
---

# getMap() method

Product: Earth Engine JavaScript Client Library
Coverage: LOW

## Step 02 Summary

GetMap() is deprecated in favor of getMapId(); deprecated on 2023-12-08.

## Extended Definition

GetMap() is deprecated in favor of getMapId(); deprecated on 2023-12-08.

## Evidence Summary

Fast-mode lexical matching selected 1 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- Earth Engine provides specific processing methods for Landsat data, including calculating at-sensor radiance, TOA reflectance, surface reflectance, simple cloud scoring, and creating cloud-free composites.
- This method selects a subset of scenes at each location, converts to TOA reflectance, applies the simple cloud score and takes the median of the least cloudy pixels.
- Specifically, there are methods to compute at-sensor radiance, top-of-atmosphere (TOA) reflectance, surface reflectance (SR), cloud score and cloud-free composites.

