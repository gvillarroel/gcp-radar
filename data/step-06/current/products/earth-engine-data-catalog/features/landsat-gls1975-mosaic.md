---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.423Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "LANDSAT/GLS1975_MOSAIC"
feature_slug: "landsat-gls1975-mosaic"
latest_feature_date: "2012-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975_MOSAIC"
keywords:
  - "landsat"
  - "gls1975"
  - "mosaic"
  - "global"
  - "land"
  - "survey"
  - "1975"
  - "provides"
---

# LANDSAT/GLS1975_MOSAIC

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Landsat Global Land Survey 1975 Mosaic provides a mosaic of 1975 Landsat imagery.

## Extended Definition

Landsat Global Land Survey 1975 Mosaic provides a mosaic of 1975 Landsat imagery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975_MOSAIC](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975_MOSAIC)

## Supporting Pages

### Landsat Global Land Survey 1975 Mosaic | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975_MOSAIC](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975_MOSAIC)
- Source ID: `feature-recovery-direct-http`
- Final score: 519
- Re-rank relevance: N/A

Evidence snippets:
- A few gaps in the Landsat 1&ndash;3 data have been filled with scenes acquired by Landsat 4&ndash;5 during the years … LANDSAT/GLS1975_MOSAIC, gls,landsat,radiance,satellite-imagery,usgs 1975-01-01T00:00:00Z/1976-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Global Land Survey (GLS) 1975 dataset, provided by USGS, offers Landsat imagery primarily from 1972-1983, with some data from 1982-1987 filling gaps.
- ImageCollection ( 'LANDSAT/GLS1975_MOSAIC' ); var falseColor = dataset . select ([ '30' , '20' , '10' ]); var falseColorVis = { gamma : 1.6 , }; Map . setCenter ( 44.517 , 25.998 , 5 ); Map . addLayer ( falseColor , falseColorVis , 'False Color' ); Open in Code Editor Landsat Global Land Survey 1975 Mosaic The Global Land Survey (GLS) 1975 is a global collection of imagery from the Landsat Multispectral Scanner (MSS).
- Dataset Availability 1975-01-01T00:00:00Z–1976-01-01T00:00:00Z Dataset Producer USGS Earth Engine Snippet ee.ImageCollection("LANDSAT/GLS1975_MOSAIC") open_in_new Cadence 1 Year Tags gls landsat radiance satellite-imagery usgs Description The Global Land Survey (GLS) 1975 is a global collection of imagery from the Landsat Multispectral Scanner (MSS).
- The data, available from 1975-01-01T00:00:00Z to 1976-01-01T00:00:00Z, is accessible via Earth Engine, utilizing the code `ee.ImageCollection(\"LANDSAT/GLS1975_MOSAIC\")`.\n"]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어

### "ee.Algorithms.Landsat.calibratedRadiance \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Landsat.calibratedRadiance Stay organized with collections Save and categorize content based on your preferences.
- Usage Returns ee.Algorithms.Landsat.calibratedRadiance(image) Image Argument Type Details image Image The input Landsat image.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Landsat . simpleCloudScore ( mosaic ); Map . addLayer ( scored mosaic , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'TOA mosaic' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. mosaic = ( ee .
- ImageCollection ( 'LANDSAT/LC09/C02/T1 L2' ) Simple cloud score For scoring Landsat pixels by their relative cloudiness, Earth Engine provides a rudimentary cloud scoring algorithm in the ee.Algorithms.Landsat.simpleCloudScore() method. (For details on the implementation, see this Code Editor sample script ).
- To apply this algorithm to an Earth Engine mosaic of Landsat scenes, set the SENSOR ID property: Code Editor (JavaScript) // Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. var mosaic = ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterDate ( '2019-06-01' , '2019-06-16' ). mosaic () . set ( 'SENSOR ID' , 'OLI TIRS' ); // Cloud score the mosaic and display the result. var scored mosaic = ee .

