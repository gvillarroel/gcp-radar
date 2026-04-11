---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.790Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CIESIN/GPWv411/GPW_Data_Context"
feature_slug: "ciesin-gpwv411-gpw-data-context"
latest_feature_date: "2019-08-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area"
keywords:
  - "ciesin"
  - "gpwv411"
  - "gpw"
  - "context"
---

# CIESIN/GPWv411/GPW_Data_Context

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

GPWv411 data context.

## Extended Definition

GPWv411 data context.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area)

## Supporting Pages

### "GPWv411: Data Context (Gridded Population of the World Version 4.11) \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second (approximately 1 km) … CIESIN/GPWv411/GPW Data Context, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H42Z13KG https://doi.org/10.7927/H42Z13KG Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- ImageCollection ( 'CIESIN/GPWv411/GPW Data Context' ); var raster = dataset . select ( 'data context' ); var raster vis = { 'min' : 200.0 , 'palette' : [ 'ffffff' , '099506' , 'f04923' , 'e62440' , '706984' , 'a5a5a5' , 'ffe152' , 'd4cc11' , '000000' ], 'max' : 207.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'data context' ); Open in Code Editor GPWv411: Data Context (Gridded Population of the World Version 4.11) This dataset categorizes pixels with estimated zero population based on information provided in the census documents.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Data Context") open in new Tags ciesin gpw nasa population Description This dataset categorizes pixels with estimated zero population based on information provided in the census documents.
- Home Earth Engine Data Catalog All Datasets Send feedback GPWv411: Data Context (Gridded Population of the World Version 4.11) Stay organized with collections Save and categorize content based on your preferences.

### "GPWv411: Land Area (Gridded Population of the World Version 4.11) \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution … CIESIN/GPWv411/GPW Land Area, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4Z60M4Z https://doi.org/10.7927/H4Z60M4Z Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, estimates land surface area per pixel (excluding permanent ice/water) from 2000 to 2020.
- ImageCollection ( 'CIESIN/GPWv411/GPW Land Area' ); var raster = dataset . select ( 'land area' ); var raster vis = { 'min' : 0.0 , 'palette' : [ 'ecefb7' , '745638' ], 'max' : 0.86 }; Map . setCenter ( 26.4 , 19.81 , 1 ); Map . addLayer ( raster , raster vis , 'land area' ); Open in Code Editor GPWv411: Land Area (Gridded Population of the World Version 4.11) This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Land Area") open in new Tags ciesin gpw nasa population Description This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Users can access it via Earth Engine with the ee.ImageCollection(\"CIESIN/GPWv411/GPW Land Area\") snippet, under a CC-BY-4.0 license, and explore it using a provided JavaScript code.\n"]]

### "GPWv411: Mean Administrative Unit Area (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- General documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second … CIESIN/GPWv411/GPW Mean Administrative Unit Area, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H42Z13KG https://doi.org/10.7927/H42Z13KG Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, models global human population distribution from 2000 to 2020.
- ImageCollection ( 'CIESIN/GPWv411/GPW Mean Administrative Unit Area' ); var raster = dataset . select ( 'mean administrative unit area' ); var raster vis = { 'min' : 0.0 , 'palette' : [ 'ffffff' , '747474' , '656565' , '3c3c3c' , '2f2f2f' , '000000' ], 'max' : 40000.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'mean administrative unit area' ); Open in Code Editor GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11) This dataset contains the mean area of the input unit(s) from which population count and density grids are created.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Mean Administrative Unit Area") open in new Tags ciesin gpw nasa population Description This dataset contains the mean area of the input unit(s) from which population count and density grids are created.
- It is accessible via Earth Engine, using the snippet ee.ImageCollection(\"CIESIN/GPWv411/GPW Mean Administrative Unit Area\"), with a CC-BY-4.0 license.\n"]]

