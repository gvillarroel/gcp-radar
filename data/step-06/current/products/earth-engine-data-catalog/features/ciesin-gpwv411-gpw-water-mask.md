---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.027Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CIESIN/GPWv411/GPW_Water_Mask"
feature_slug: "ciesin-gpwv411-gpw-water-mask"
latest_feature_date: "2019-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Area"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area"
keywords:
  - "ciesin"
  - "gpwv411"
  - "gpw"
  - "water"
  - "mask"
---

# CIESIN/GPWv411/GPW_Water_Mask

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

GPWv411 water mask.

## Extended Definition

GPWv411 water mask.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Area)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area)

## Supporting Pages

### "GPWv411: Water Mask (Gridded Population of the World Version 4.11) \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask)
- Source ID: `site-docs-root-2`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, … CIESIN/GPWv411/GPW Water Mask, ciesin,gpw,nasa,population,surface-ground-water 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H42Z13KG https://doi.org/10.7927/H42Z13KG Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, models global human population distribution from 2000 to 2020 at approximately 1km resolution.
- ImageCollection ( 'CIESIN/GPWv411/GPW Water Mask' ); var raster = dataset . select ( 'water mask' ); var raster vis = { 'min' : 0.0 , 'palette' : [ '005ce6' , '00ffc5' , 'bed2ff' , 'aed0f1' ], 'max' : 3.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'water mask' ); Open in Code Editor GPWv411: Water Mask (Gridded Population of the World Version 4.11) This dataset identifies water pixels; non-water pixels are masked.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Water Mask") open in new Tags ciesin gpw nasa population surface-ground-water Description This dataset identifies water pixels; non-water pixels are masked.
- Home Earth Engine Data Catalog All Datasets Send feedback GPWv411: Water Mask (Gridded Population of the World Version 4.11) Stay organized with collections Save and categorize content based on your preferences.

### "GPWv411: Water Area (Gridded Population of the World Version 4.11) \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Area)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, … CIESIN/GPWv411/GPW Water Area, ciesin,gpw,nasa,population,surface-ground-water 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4Z60M4Z https://doi.org/10.7927/H4Z60M4Z Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- ImageCollection ( 'CIESIN/GPWv411/GPW Water Area' ); var raster = dataset . select ( 'water area' ); var raster vis = { 'min' : 0.0 , 'palette' : [ 'f5f6da' , '180d02' ], 'max' : 0.860558 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'water area' ); Open in Code Editor GPWv411: Water Area (Gridded Population of the World Version 4.11) This dataset contains estimates of the water area (permanent ice and water) within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Water Area") open in new Tags ciesin gpw nasa population surface-ground-water Description This dataset contains estimates of the water area (permanent ice and water) within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description water area 0 0.860558 927.67 meters Estimates for water area within each 30-arc second pixel. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

### "GPWv411: Land Area (Gridded Population of the World Version 4.11) \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution … CIESIN/GPWv411/GPW Land Area, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4Z60M4Z https://doi.org/10.7927/H4Z60M4Z Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, estimates land surface area per pixel (excluding permanent ice/water) from 2000 to 2020.
- ImageCollection ( 'CIESIN/GPWv411/GPW Land Area' ); var raster = dataset . select ( 'land area' ); var raster vis = { 'min' : 0.0 , 'palette' : [ 'ecefb7' , '745638' ], 'max' : 0.86 }; Map . setCenter ( 26.4 , 19.81 , 1 ); Map . addLayer ( raster , raster vis , 'land area' ); Open in Code Editor GPWv411: Land Area (Gridded Population of the World Version 4.11) This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Land Area") open in new Tags ciesin gpw nasa population Description This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Users can access it via Earth Engine with the ee.ImageCollection(\"CIESIN/GPWv411/GPW Land Area\") snippet, under a CC-BY-4.0 license, and explore it using a provided JavaScript code.\n"]]

