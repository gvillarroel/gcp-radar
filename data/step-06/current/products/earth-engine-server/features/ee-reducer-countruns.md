---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.415Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Reducer.countRuns"
feature_slug: "ee-reducer-countruns"
latest_feature_date: "2020-01-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon"
keywords:
  - "ee"
  - "reducer"
  - "countruns"
  - "computes"
  - "the"
  - "number"
  - "of"
  - "runs"
---

# ee.Reducer.countRuns

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes the number of runs of distinct, non-null inputs.

## Extended Definition

Computes the number of runs of distinct, non-null inputs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- January 14, 2020 Earth Engine Data Catalog Feature Added COPERNICUS/CORINE/V20/100m : Copernicus CORINE Land Cover January 09, 2020 Earth Engine Server Feature Added ee.Reducer.countRuns() , which computes the number of runs of distinct, non-null inputs.
- November 15, 2016 Earth Engine Data Catalog Feature Added ASTER/AST L1T 003 : ASTER L1T Radiance November 03, 2016 Earth Engine Server Fixed Fixed a bug that sometimes caused ee.Image.reduceResolution() to overestimate the number of input pixels per output pixel.
- July 16, 2013 Earth Engine Data Catalog Feature Added LANDSAT/LC8 (no longer available) Added LANDSAT/LC8 L1T (no longer available) Added LANDSAT/LC8 L1T 32DAY BAI (no longer available) Added LANDSAT/LC8 L1T 32DAY EVI (no longer available) Added LANDSAT/LC8 L1T 32DAY NBRT (no longer available) Added LANDSAT/LC8 L1T 32DAY NDSI (no longer available) Added LANDSAT/LC8 L1T 32DAY NDVI (no longer available) Added LANDSAT/LC8 L1T 32DAY NDWI (no longer available) Added LANDSAT/LC8 L1T 32DAY RAW (no longer available) Added LANDSAT/LC8 L1T 32DAY TOA (no longer available) Added LANDSAT/LC8 L1T 8DAY BAI (no longer available) Added LANDSAT/LC8 L1T 8DAY EVI (no longer available) Added LANDSAT/LC8 L1T 8DAY NBRT (no longer available) Added LANDSAT/LC8 L1T 8DAY NDSI (no longer available) Added LANDSAT/LC8 L1T 8DAY NDVI (no longer available) Added LANDSAT/LC8 L1T 8DAY NDWI (no longer available) Added LANDSAT/LC8 L1T 8DAY RAW (no longer available) Added LANDSAT/LC8 L1T 8DAY TOA (no longer available) Added LANDSAT/LC8 L1T ANNUAL BAI (no longer available) Added LANDSAT/LC8 L1T ANNUAL EVI (no longer available) Added LANDSAT/LC8 L1T ANNUAL GREENEST TOA (no longer available) Added LANDSAT/LC8 L1T ANNUAL NBRT (no longer available) Added LANDSAT/LC8 L1T ANNUAL NDSI (no longer available) Added LANDSAT/LC8 L1T ANNUAL NDVI (no longer available) Added LANDSAT/LC8 L1T ANNUAL NDWI (no longer available) Added LANDSAT/LC8 L1T ANNUAL RAW (no longer available) Added LANDSAT/LC8 L1T ANNUAL TOA (no longer available) Added LANDSAT/LC8 L1T TOA (no longer available) July 11, 2013 Earth Engine Server Fixed Fixed the type name of Reducers.
- January 10, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMSLCFG : VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1 Added VITO/PROBAV/C1/S1 TOC 100M : PROBA-V C1 Top Of Canopy Daily Synthesis 100m Added VITO/PROBAV/C1/S1 TOC 333M : PROBA-V C1 Top Of Canopy Daily Synthesis 333m January 03, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMCFG : VIIRS Nighttime Day/Night Band Composites Version 1 December 20, 2016 Earth Engine Data Catalog Feature Added WORLDCLIM/V1/BIO : WorldClim BIO Variables V1 Added WORLDCLIM/V1/MONTHLY : WorldClim Climatology V1 December 19, 2016 Earth Engine Server Fixed Added ee.Image.arrayCat() to easily concatenate two array images with the same number of dimensions.

### "ee.Algorithms.GeometryConstructors.MultiPolygon \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiPolygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of Polygons, or for one simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The MultiPolygon constructor creates a geometry from a list of polygon coordinates.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state. evenOdd Boolean, default: true If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "ee.Algorithms.GeometryConstructors.Polygon \_|\_ Google Earth Engine \_\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.Polygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of LinearRings where the first is the shell and the rest are holes, or for a simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state. evenOdd Boolean, default: true If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

