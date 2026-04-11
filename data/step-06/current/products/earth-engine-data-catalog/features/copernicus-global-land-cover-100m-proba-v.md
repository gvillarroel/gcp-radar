---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.757Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Copernicus Global Land Cover 100m Proba-V"
feature_slug: "copernicus-global-land-cover-100m-proba-v"
latest_feature_date: "2019-12-03"
deprecation_date: "2019-12-03"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
  - "https://developers.google.com/earth-engine/datasets/tags/landuse-landcover"
  - "https://developers.google.com/earth-engine/datasets/tags/landcover"
keywords:
  - "copernicus"
  - "global"
  - "land"
  - "cover"
  - "100m"
  - "proba"
  - "provides"
  - "100"
---

# Copernicus Global Land Cover 100m Proba-V

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Provides a global 100 m land cover map derived from Proba-V imagery; deprecated on 2019-12-03.

## Extended Definition

Provides a global 100 m land cover map derived from Proba-V imagery; deprecated on 2019-12-03.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- [https://developers.google.com/earth-engine/datasets/tags/landcover](https://developers.google.com/earth-engine/datasets/tags/landcover)

## Supporting Pages

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 306
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Dynamic Land Cover map at 100 m resolution (CGLS-LC100) is … COPERNICUS/Landcover/100m/Proba-V-C3/Global, copernicus,eea,esa,eu,landcover,landuse-landcover,proba,probav,vito 2015-01-01T00:00:00Z/2019-12-31T23:59:59Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5281/zenodo.3939050 https://doi.org/10.5281/zenodo.3939050 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus Global Land Service provides global land cover maps (CGLS-LC100) at 100m resolution from 2015 to 2019, derived from PROBA-V 100m time-series data.
- Dataset Availability 2015-01-01T00:00:00Z–2019-12-31T23:59:59Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/Landcover/100m/Proba-V-C3/Global") open in new Tags copernicus eea esa eu landcover landuse-landcover proba probav vito Description The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- Page Summary outlined flag The Copernicus Global Land Service provides a 100m resolution global land cover map (CGLS-LC100) for 2015-2019, derived from PROBA-V time-series data.
- Image ( 'COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019' ) . select ( 'discrete classification' ); Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( dataset , {}, 'Land Cover' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) dataset = ee .

### "Datasets tagged landuse-landcover in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- Source ID: `site-docs-root-3`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- The project is coordinated by the European Environment Agency (EEA) in the frame of the EU … copernicus eea esa eu landcover landuse-landcover Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- Produced by the Land & Carbon Lab Global Pasture Watch initiative, the mapped grassland extent includes any land cover type, which contains at least 30% of dry … global global-pasture-watch land landcover landuse landuse-landcover GPW Annual Probabilities of Natural/Semi-natural Grasslands v1 This dataset provides global annual probability maps of natural/semi-natural grassland from 2000 to 2022 at 30-m spatial resolution.
- Produced by the Land & Carbon Lab Global Pasture Watch initiative, the mapped grassland extent includes any land cover type, which contains at least … global global-pasture-watch land landcover landuse landuse-landcover GPW Annual Probabilities of Cultivated Grasslands v1 This dataset provides global annual probability maps of cultivated grassland from 2000 to 2022 at 30-m spatial resolution.
- This global map of Local Climate Zones, at 100m pixel size and … climate landcover landuse-landcover urban Google Global Landsat-based CCDC Segments (1999-2019) This collection contains precomputed results from running the Continuous Change Detection and Classification (CCDC) algorithm on 20 years of Landsat surface reflectance data.

### "Datasets tagged landcover in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landcover](https://developers.google.com/earth-engine/datasets/tags/landcover)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The project is coordinated by the European Environment Agency (EEA) in the frame of the EU … copernicus eea esa eu landcover landuse-landcover Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- The active cropland products indicate whether or not a pixel identified as temporary crops has been actively … agriculture copernicus crop esa global landcover ESA WorldCover 10m v100 The European Space Agency (ESA) WorldCover 10 m 2020 product provides a global land cover map for 2020 at 10 m resolution based on Sentinel-1 and Sentinel-2 data.
- Produced by the Land & Carbon Lab Global Pasture Watch initiative, the mapped grassland extent includes any land cover type, which contains at least 30% of dry … global global-pasture-watch land landcover landuse landuse-landcover GPW Annual Probabilities of Natural/Semi-natural Grasslands v1 This dataset provides global annual probability maps of natural/semi-natural grassland from 2000 to 2022 at 30-m spatial resolution.
- Produced by the Land & Carbon Lab Global Pasture Watch initiative, the mapped grassland extent includes any land cover type, which contains at least … global global-pasture-watch land landcover landuse landuse-landcover GPW Annual Probabilities of Cultivated Grasslands v1 This dataset provides global annual probability maps of cultivated grassland from 2000 to 2022 at 30-m spatial resolution.

