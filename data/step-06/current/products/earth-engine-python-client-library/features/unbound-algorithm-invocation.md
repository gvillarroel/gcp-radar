---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.820Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Unbound algorithm invocation"
feature_slug: "unbound-algorithm-invocation"
latest_feature_date: "2013-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/landsat"
keywords:
  - "unbound"
  - "algorithm"
  - "invocation"
  - "added"
  - "for"
  - "calling"
  - "algorithms"
  - "with"
---

# Unbound algorithm invocation

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Added support for calling unbound algorithms with ee.Algorithms.algorithmName(...).

## Extended Definition

Added support for calling unbound algorithms with ee.Algorithms.algorithmName(...).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- July 24, 2013 Earth Engine JavaScript Client Library 0.1.3 Feature Added support for calling unbound algorithms using ee.Algorithms.algorithmName(...) .
- Earth Engine Python Client Library 0.1.3 Feature Added support for calling unbound algorithms using ee.Algorithms.algorithmName(...) .
- November 12, 2024 Earth Engine Data Catalog Feature Added NOAA/CPC/Precipitation : CPC Global Unified Gauge-Based Analysis of Daily Precipitation Added NOAA/CPC/Temperature : CPC Global Unified Temperature Added UCSB-CHG/CHIRTS/DAILY : CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product Added projects/geoscience-aus-cat/assets/ga ls8cls9c gm cyear 3 (no longer available) November 08, 2024 Earth Engine Server Breaking All Cloud Storage reads through the ee.Blob() and ee.Image.loadGeoTIFF() algorithms must now meet the following criteria: The bucket metadata must be accessible (check the storage.buckets.get permission) The bucket must be located in one of: The US multi-region A dual-region including US-CENTRAL1 The US-CENTRAL1 region Any bucket used in the month of October 2024 not meeting the criteria has been automatically allowed for future use.
- Added new algorithms for working with array shapes: Image.arrayLength() , and Image.arrayDimensions() .

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Operations in the API can be performed by calling methods attached to objects, calling algorithms, calling Code Editor specific functions, or defining new functions.
- Core actions include filtering data by space and time, performing band math, and using algorithms for specialized processing.
- The ee.Algorithms category contains a list of currently supported algorithms for specialized or domain specific processing.
- Earth Engine algorithms There are several ways to run operations in the API: Calling methods that are attached to objects.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- Home Products Google Earth Engine Reference Send feedback Landsat Algorithms Stay organized with collections Save and categorize content based on your preferences.
- Simple composite For creating simple cloud-free Landsat composites, Earth Engine provides the ee.Algorithms.Landsat.simpleComposite() method.
- The ee.Algorithms.Landsat.calibratedRadiance() method performs this conversion.

