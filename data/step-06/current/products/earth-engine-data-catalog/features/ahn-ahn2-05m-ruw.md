---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:59.085Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "AHN/AHN2_05M_RUW"
feature_slug: "ahn-ahn2-05m-ruw"
latest_feature_date: "2015-08-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_RUW"
  - "https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_INT"
  - "https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_NON"
keywords:
  - "ahn"
  - "ahn2"
  - "05m"
  - "ruw"
  - "raw"
  - "sample"
  - "netherlands"
  - "meter"
---

# AHN/AHN2_05M_RUW

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Raw-sample Netherlands AHN2 0.5-meter digital elevation model.

## Extended Definition

Raw-sample Netherlands AHN2 0.5-meter digital elevation model.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_RUW](https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_RUW)
- [https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_INT](https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_INT)
- [https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_NON](https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_NON)

## Supporting Pages

### "AHN Netherlands 0.5m DEM, Raw Samples \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_RUW](https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_RUW)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'AHN/AHN2 05M RUW' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 5.0 , max : 30.0 , }; Map . setCenter ( 5.76583 , 51.855276 , 16 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor AHN Netherlands 0.5m DEM, Raw Samples The AHN DEM is a 0.5m DEM covering the Netherlands.
- The point cloud was converted to a 0.5m … AHN/AHN2 05M RUW, ahn,dem,elevation,elevation-topography,geophysical,lidar,netherlands 2012-01-01T00:00:00Z/2012-01-01T00:00:00Z 50.74 3.35 53.55 7.24 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Dataset Availability 2012-01-01T00:00:00Z–2012-01-01T00:00:00Z Dataset Producer AHN Earth Engine Snippet ee.Image("AHN/AHN2 05M RUW") open in new Tags ahn dem elevation elevation-topography geophysical lidar netherlands Description The AHN DEM is a 0.5m DEM covering the Netherlands.
- Home Earth Engine Data Catalog All Datasets Send feedback AHN Netherlands 0.5m DEM, Raw Samples Stay organized with collections Save and categorize content based on your preferences.

### "AHN Netherlands 0.5m DEM, Interpolated \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_INT](https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_INT)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This version is interpolated; the areas where objects … AHN/AHN2 05M INT, ahn,dem,elevation,elevation-topography,geophysical,lidar,netherlands 2012-01-01T00:00:00Z/2012-01-01T00:00:00Z 50.74 3.35 53.55 7.24 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The AHN dataset provides a 0.5-meter Digital Elevation Model (DEM) of the Netherlands, derived from LIDAR data collected between 2007 and 2012.
- Image ( 'AHN/AHN2 05M INT' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 5.0 , max : 30.0 , }; Map . setCenter ( 5.76583 , 51.855276 , 16 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor AHN Netherlands 0.5m DEM, Interpolated The AHN DEM is a 0.5m DEM covering the Netherlands.
- Dataset Availability 2012-01-01T00:00:00Z–2012-01-01T00:00:00Z Dataset Producer AHN Earth Engine Snippet ee.Image("AHN/AHN2 05M INT") open in new Tags ahn dem elevation elevation-topography geophysical lidar netherlands Description The AHN DEM is a 0.5m DEM covering the Netherlands.
- Bands Bands Pixel size: 0.5 meters (all bands) Name Units Pixel Size Description elevation m 0.5 meters Elevation Terms of Use Terms of Use The datasets of the AHN are available as Open Data.

### "AHN Netherlands 0.5m DEM, Non-Interpolated \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_NON](https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_NON)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This version is non-interpolated; the areas where objects … AHN/AHN2 05M NON, ahn,dem,elevation,elevation-topography,geophysical,lidar,netherlands 2012-01-01T00:00:00Z/2012-01-01T00:00:00Z 50.74 3.35 53.55 7.24 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Image ( 'AHN/AHN2 05M NON' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 5.0 , max : 30.0 , }; Map . setCenter ( 5.80258 , 51.78547 , 14 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor AHN Netherlands 0.5m DEM, Non-Interpolated The AHN DEM is a 0.5m DEM covering the Netherlands.
- Dataset Availability 2012-01-01T00:00:00Z–2012-01-01T00:00:00Z Dataset Producer AHN Earth Engine Snippet ee.Image("AHN/AHN2 05M NON") open in new Tags ahn dem elevation elevation-topography geophysical lidar netherlands Description The AHN DEM is a 0.5m DEM covering the Netherlands.
- Bands Bands Pixel size: 0.5 meters (all bands) Name Units Pixel Size Description elevation m 0.5 meters Elevation Terms of Use Terms of Use The datasets of the AHN are available as Open Data.

