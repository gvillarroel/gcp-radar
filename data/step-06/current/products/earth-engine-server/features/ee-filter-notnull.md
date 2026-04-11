---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.429Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Filter.notNull()"
feature_slug: "ee-filter-notnull"
latest_feature_date: "2018-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
keywords:
  - "ee"
  - "filter"
  - "notnull"
  - "filters"
  - "values"
  - "or"
  - "features"
  - "where"
---

# ee.Filter.notNull()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Filters values or features where specified fields are not null.

## Extended Definition

Filters values or features where specified fields are not null.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine Server Fixed Fixed errors when applying number filters where some values are null.
- Fixed a filtering error that occurred when two intersecting time filters where applied on an ImageCollection .
- Added new filters ee.Filter.isContained() and ee.Filter.notNull() .
- June 24, 2025 Earth Engine Data Catalog Feature Added ECMWF/NRT FORECAST/IFS/SCWV : ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts Added ECMWF/NRT FORECAST/IFS/WAVE : ECMWF Near-Realtime IFS Wave Forecasts Added NASA/TEMPO/HCHO L3 : TEMPO gridded HCHO vertical columns V03 Added NASA/TEMPO/HCHO L3 QA : TEMPO gridded HCHO (QA filtered) vertical columns V03 June 17, 2025 Earth Engine Data Catalog Feature Added GOOGLE/SATELLITE EMBEDDING/V1/ANNUAL : Satellite Embedding V1 Added projects/forestdatapartnership/assets/cocoa/model 2025a : Cocoa Probability model 2025a Added projects/forestdatapartnership/assets/coffee/model 2025a : Coffee Probability model 2025a Added projects/forestdatapartnership/assets/palm/model 2025a : Palm Probability model 2025a Added projects/forestdatapartnership/assets/rubber/model 2025a : Rubber Tree Probability model 2025a June 10, 2025 Earth Engine Data Catalog Feature Added projects/edf-methanesat-ee/assets/public-preview/L4area v2 : MethaneSAT L4 Area Sources Public Preview V2.0.0 June 03, 2025 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V4 1 : ALOS DSM: Global 30m v4.1 Added UCSB/CHC/CMIP6/v1 : The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) Added UMD/hansen/global forest change 2024 v1 12 : Hansen Global Forest Change v1.12 (2000-2024) Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 1 2001 2023 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2001 2022 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2022 v1.0 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2 2001 2024 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2024 v1.2 May 27, 2025 Earth Engine Data Catalog Feature Added NASA/TEMPO/NO2 L3 QA : TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03 May 13, 2025 Earth Engine Data Catalog Feature Added USGS/NLCD RELEASES/2023 REL/TCC/v2023-5 : USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) May 06, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2024-10 : USFS Landscape Change Monitoring System v2024.10 (CONUS and OCONUS) April 29, 2025 Earth Engine Data Catalog Feature Added ISRIC/SoilGrids250m/v2 0 : SoilGrids250m 2.0 - Volumetric Water Content Added NASA/TEMPO/NO2 L3 : TEMPO gridded NO2 tropospheric and stratospheric columns V03 Added UMN/PGC/ArcticDEM/V4/2m mosaic : ArcticDEM Mosaic V4.1 April 22, 2025 Earth Engine JavaScript Client Library 1.5.12 Change Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization.

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It improves performance and reduces cost for queries that use spatial filters, most commonly for BigQuery operations like: WHERE ST DWithin ( < table column > , < constant geography > , < distance > ) WHERE ST Intersects ( < table column > , < constant geography > ) Adding clustering to an unclustered table also does not generally harm anything, though it might slightly increase the time to load data to the table.
- To have finer control over this transformation process, you can manually map over the features and transform their geometries, e.g.: Code Editor (JavaScript) var transformedCollection = originalCollection . map ( function transformGeo ( e ) { var myErrorMargin = 10 1000 ; // meters return e . setGeometry ( e . geometry ( myErrorMargin , 'EPSG:4326' , true )); }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def transform geo ( e ): my error margin = 10 1000 # meters return e . setGeometry ( e . geometry ( my error margin , 'EPSG:4326' , True )) transformed collection = original collection . map ( transform geo ) Caution: Polygons larger than a hemisphere may have their orientation reversed during export.
- The total number of values in the flattened array is $\sum {i=1}^n d i$, and the value at index $(i i, \ldots, i n)$ in the original Earth Engine array corresponds to the value at the following index in the flattened array: \[ \sum {j=1}^n \left( i j \cdot \prod {k=j+1}^n d k \right) \] For common cases, the indexing expression for the values array is as follows: Array Size Dimensions Indexing Expression 1-dimensional d1 [i1] 2-dimensional d1, d2 [(i1 d2) + i2] 3-dimensional d1, d2, d3 [(i1 d2 d3) + (i2 d3) + i3] For example, consider a 2x3x4 Earth Engine array: ee .
- Earth Engine type BigQuery type Notes ee.String STRING ee.Number FLOAT or INTEGER ee.Geometry GEOGRAPHY ee.Date TIMESTAMP ee.ByteString BYTES ee.Array STRUCT<ARRAY<INT64>, ARRAY<INT64 FLOAT64>> See the section on arrays Other ee. types not supported See the section on JSON values Arrays Earth Engine exports any multi-dimensional ee.Array to STRUCT<ARRAY<INT64> dimensions, ARRAY<INT64 FLOAT64> values> , similar to the format used by BigQuery's ML.DECODE IMAGE function.

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]
- The pixel is only considered for edge detection if the gradient magnitude is higher than this threshold. sigma Float, default: 1 Sigma value for a gaussian filter applied before edge detection.
- Usage Returns ee.Algorithms.CannyEdgeDetector(image, threshold, sigma ) Image Argument Type Details image Image The image on which to apply edge detection. threshold Float Threshold value.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.CannyEdgeDetector Stay organized with collections Save and categorize content based on your preferences.

