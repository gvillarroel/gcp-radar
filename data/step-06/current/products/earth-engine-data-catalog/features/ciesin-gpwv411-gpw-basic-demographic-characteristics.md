---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.790Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics"
feature_slug: "ciesin-gpwv411-gpw-basic-demographic-characteristics"
latest_feature_date: "2019-08-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area"
keywords:
  - "ciesin"
  - "gpwv411"
  - "gpw"
  - "basic"
  - "demographic"
  - "characteristics"
---

# CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

GPWv411 basic demographic characteristics.

## Extended Definition

GPWv411 basic demographic characteristics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area)

## Supporting Pages

### "GPWv411: Basic Demographic Characteristics (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics)
- Source ID: `site-docs-root-2`
- Final score: 282
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision … CIESIN/GPWv411/GPW Basic Demographic Characteristics, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H46M34XX https://doi.org/10.7927/H46M34XX Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset provides gridded population estimates from 2000 to 2020, updated every five years, sourced from NASA SEDAC.
- ImageCollection ( 'CIESIN/GPWv411/GPW Basic Demographic Characteristics' ). first (); var raster = dataset . select ( 'basic demographic characteristics' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'basic demographic characteristics' ); Open in Code Editor GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11) This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Basic Demographic Characteristics") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains population estimates, by age and sex, per 30 arc-second grid cell consistent with national censuses and population registers.
- Users can access the data via Earth Engine using ee.ImageCollection(\"CIESIN/GPWv411/GPW Basic Demographic Characteristics\") and visualize it.\n"]]

### "GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'CIESIN/GPWv411/GPW UNWPP-Adjusted Population Count' ). first (); var raster = dataset . select ( 'unwpp-adjusted population count' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , '86a192' , '509791' , '307296' , '2c4484' , '000066' ], 'min' : 0.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'unwpp-adjusted population count' ); Open in Code Editor GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- General … CIESIN/GPWv411/GPW UNWPP-Adjusted Population Count, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4PN93PB https://doi.org/10.7927/H4PN93PB Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW UNWPP-Adjusted Population Count") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per 30 arc-second grid cell, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals.
- Home Earth Engine Data Catalog All Datasets Send feedback GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11) Stay organized with collections Save and categorize content based on your preferences.

### "GPWv411: Land Area (Gridded Population of the World Version 4.11) \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution … CIESIN/GPWv411/GPW Land Area, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H4Z60M4Z https://doi.org/10.7927/H4Z60M4Z Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, estimates land surface area per pixel (excluding permanent ice/water) from 2000 to 2020.
- ImageCollection ( 'CIESIN/GPWv411/GPW Land Area' ); var raster = dataset . select ( 'land area' ); var raster vis = { 'min' : 0.0 , 'palette' : [ 'ecefb7' , '745638' ], 'max' : 0.86 }; Map . setCenter ( 26.4 , 19.81 , 1 ); Map . addLayer ( raster , raster vis , 'land area' ); Open in Code Editor GPWv411: Land Area (Gridded Population of the World Version 4.11) This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Land Area") open in new Tags ciesin gpw nasa population Description This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- Users can access it via Earth Engine with the ee.ImageCollection(\"CIESIN/GPWv411/GPW Land Area\") snippet, under a CC-BY-4.0 license, and explore it using a provided JavaScript code.\n"]]

