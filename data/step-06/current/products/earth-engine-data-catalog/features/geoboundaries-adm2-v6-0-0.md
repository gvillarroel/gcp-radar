---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.494Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "geoBoundaries ADM2 v6.0.0"
feature_slug: "geoboundaries-adm2-v6-0-0"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area"
keywords:
  - "geoboundaries"
  - "adm2"
  - "v6"
  - "municipality"
  - "level"
  - "political"
  - "administrative"
  - "boundaries"
---

# geoBoundaries ADM2 v6.0.0

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Municipality-level political administrative boundaries.

## Extended Definition

Municipality-level political administrative boundaries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area)

## Supporting Pages

### "Datasets tagged infrastructure-boundaries in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries](https://developers.google.com/earth-engine/datasets/tags/infrastructure-boundaries)
- Source ID: `site-docs-root-3`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Comprehensive Global … borders countries infrastructure-boundaries table geoBoundaries: Political administrative boundaries at Municipality level (ADM2), v6.0.0 The geoBoundaries Global Database of Political Administrative Boundaries Database is an online, open license resource of boundaries (i.e., state, county) for every country in the world.
- The United Nations Geodata is provided to facilitate the preparation of cartographic materials in the United Nations includes geometry, attributes and labels to facilitate the adequate depiction and naming … borders countries infrastructure-boundaries table geoBoundaries: Political administrative boundaries at Country level (ADM0), v6.0.0 The geoBoundaries Global Database of Political Administrative Boundaries Database is an online, open license resource of boundaries (i.e., state, county) for every country in the world.
- Comprehensive Global … borders countries infrastructure-boundaries table geoBoundaries: Political administrative boundaries at District level (ADM1), v6.0.0 The geoBoundaries Global Database of Political Administrative Boundaries Database is an online, open license resource of boundaries (i.e., state, county) for every country in the world.
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders departments fao gaul infrastructure-boundaries provinces FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units This version of GAUL dataset is simplified at 500m.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Comprehensive Global … borders countries infrastructure-boundaries table geoBoundaries: Political administrative boundaries at Municipality level (ADM2), v6.0.0 The geoBoundaries Global Database of Political Administrative Boundaries Database is an online, open license resource of boundaries (i.e., state, county) for every country in the world.
- The dataset was created using the MODIS 8-day TERRA and AQUA land surface temperature (LST) products, the Landscan urban extent … climate uhi urban yale geoBoundaries: Political administrative boundaries at Country level (ADM0), v6.0.0 The geoBoundaries Global Database of Political Administrative Boundaries Database is an online, open license resource of boundaries (i.e., state, county) for every country in the world.
- Comprehensive Global … borders countries infrastructure-boundaries table geoBoundaries: Political administrative boundaries at District level (ADM1), v6.0.0 The geoBoundaries Global Database of Political Administrative Boundaries Database is an online, open license resource of boundaries (i.e., state, county) for every country in the world.
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders departments fao gaul infrastructure-boundaries provinces FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Second-Level Administrative Units This version of GAUL dataset is simplified at 500m.

### "GPWv411: Mean Administrative Unit Area (Gridded Population of the World\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Mean_Administrative_Unit_Area)
- Source ID: `site-docs-root-2`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- General documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on 30 arc-second … CIESIN/GPWv411/GPW Mean Administrative Unit Area, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H42Z13KG https://doi.org/10.7927/H42Z13KG Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The dataset, provided by NASA SEDAC, models global human population distribution from 2000 to 2020.
- ImageCollection ( 'CIESIN/GPWv411/GPW Mean Administrative Unit Area' ); var raster = dataset . select ( 'mean administrative unit area' ); var raster vis = { 'min' : 0.0 , 'palette' : [ 'ffffff' , '747474' , '656565' , '3c3c3c' , '2f2f2f' , '000000' ], 'max' : 40000.0 }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( raster , raster vis , 'mean administrative unit area' ); Open in Code Editor GPWv411: Mean Administrative Unit Area (Gridded Population of the World Version 4.11) This dataset contains the mean area of the input unit(s) from which population count and density grids are created.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description mean administrative unit area 0 767642 927.67 meters Displays a quantitative surface that indicates the size of the input units in square kilometers from which population count and density grids are derived. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Mean Administrative Unit Area") open in new Tags ciesin gpw nasa population Description This dataset contains the mean area of the input unit(s) from which population count and density grids are created.

