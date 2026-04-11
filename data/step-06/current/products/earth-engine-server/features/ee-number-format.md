---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.437Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Number.format()"
feature_slug: "ee-number-format"
latest_feature_date: "2016-03-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
keywords:
  - "ee"
  - "number"
  - "format"
  - "formats"
  - "as"
  - "string"
---

# ee.Number.format()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Formats a number as a string.

## Extended Definition

Formats a number as a string.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats](https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)

## Supporting Pages

### "Hosted Model Payload Formats Supported on Earth Engine \_|\_ Google Earth\

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats](https://developers.google.com/earth-engine/guides/ee-vertex-payload-formats)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Earth Engine also supports HTTP API payloads with formats like SERIALIZED TF TENSORS (default for TensorFlow), RAW JSON (flexible for other frameworks like PyTorch and AutoML but converts numbers to strings), and ND ARRAYS (similar to RAW JSON but without keys, suitable for PyTorch).
- Home Products Google Earth Engine Guides Send feedback Hosted Model Payload Formats Supported on Earth Engine Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-01 UTC."],[],["Earth Engine (EE) interacts with custom models on Vertex AI via inference requests.
- Users configure the payload format using payloadFormat in ee.Model.fromVertexAi. gRPC is preferred for lower latency and higher reliability, using formats like GRPC TF TENSORS, GRPC SERIALIZED TF TENSORS, or GRPC SERIALIZED TF EXAMPLES.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- July 22, 2014 Earth Engine Data Catalog Feature Added MODIS/MYD09A1 (no longer available) Added MODIS/MYD11A2 (no longer available) Added NASA/ORNL/DAYMET (no longer available) July 18, 2014 Earth Engine JavaScript Client Library 0.1.32 Fixed Fixed casting of numbers when calling the ee.String constructor.
- Earth Engine Python Client Library 0.1.32 Fixed Fixed casting of numbers when calling the ee.String constructor.
- January 10, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMSLCFG : VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1 Added VITO/PROBAV/C1/S1 TOC 100M : PROBA-V C1 Top Of Canopy Daily Synthesis 100m Added VITO/PROBAV/C1/S1 TOC 333M : PROBA-V C1 Top Of Canopy Daily Synthesis 333m January 03, 2017 Earth Engine Data Catalog Feature Added NOAA/VIIRS/DNB/MONTHLY V1/VCMCFG : VIIRS Nighttime Day/Night Band Composites Version 1 December 20, 2016 Earth Engine Data Catalog Feature Added WORLDCLIM/V1/BIO : WorldClim BIO Variables V1 Added WORLDCLIM/V1/MONTHLY : WorldClim Climatology V1 December 19, 2016 Earth Engine Server Fixed Added ee.Image.arrayCat() to easily concatenate two array images with the same number of dimensions.
- March 23, 2021 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C02/T1 L2 : USGS Landsat 8 Level 2, Collection 2, Tier 1 Added NASA/ORNL/DAYMET V4 : Daymet V4: Daily Surface Weather and Climatological Summaries March 16, 2021 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2020-5 (no longer available) March 09, 2021 Earth Engine Data Catalog Feature Added NOAA/NCEP DOE RE2/total cloud coverage : NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage February 23, 2021 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V3 2 (no longer available) Added USGS/NLCD RELEASES/2016 REL (no longer available) February 12, 2021 Earth Engine Server Change Added ee.Number.signum() , ee.Image.signum() , and ee.Array.signum() .

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiLineString Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

