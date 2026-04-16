---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.118Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "UMT/NTSG/v2/LANDSAT/NPP"
feature_slug: "umt-ntsg-v2-landsat-npp"
latest_feature_date: "2018-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/UMT_NTSG_v2_LANDSAT_NPP"
  - "https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE"
  - "https://developers.google.com/earth-engine/datasets/tags/plant-productivity"
keywords:
  - "umt"
  - "ntsg"
  - "v2"
  - "landsat"
  - "npp"
  - "net"
  - "primary"
  - "production"
---

# UMT/NTSG/v2/LANDSAT/NPP

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A Landsat net primary production dataset for CONUS.

## Extended Definition

A Landsat net primary production dataset for CONUS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/UMT_NTSG_v2_LANDSAT_NPP](https://developers.google.com/earth-engine/datasets/catalog/UMT_NTSG_v2_LANDSAT_NPP)
- [https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE](https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE)
- [https://developers.google.com/earth-engine/datasets/tags/plant-productivity](https://developers.google.com/earth-engine/datasets/tags/plant-productivity)

## Supporting Pages

### Landsat Net Primary Production CONUS | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/UMT_NTSG_v2_LANDSAT_NPP](https://developers.google.com/earth-engine/datasets/catalog/UMT_NTSG_v2_LANDSAT_NPP)
- Source ID: `feature-recovery-direct-http`
- Final score: 294
- Re-rank relevance: N/A

Evidence snippets:
- NPP is calculated using the MOD17 algorithm (see MOD17 User Guide) with Landsat Surface Reflectance, … UMT/NTSG/v2/LANDSAT/NPP, conus,gridmet-derived,landsat,mod17,nlcd-derived,npp,photosynthesis,plant-productivity,production,productivity,yearly 1986-01-01T00:00:00Z/2020-01-01T00:00:00Z 24.42 -124.84 49.72 -64.82 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Landsat Net Primary Production (NPP) CONUS dataset, provided by the University of Montana NTSG, spans from 1986 to 2020.
- Dataset Availability 1986-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer University of Montana Numerical Terradynamic Simulation Group (NTSG) Earth Engine Snippet ee.ImageCollection("UMT/NTSG/v2/LANDSAT/NPP") open_in_new Cadence 1 Year Tags conus gridmet-derived landsat mod17 nlcd-derived npp photosynthesis plant-productivity production productivity yearly Description The Landsat Net Primary Production (NPP) CONUS dataset estimates NPP using Landsat Surface Reflectance for CONUS.
- Data is available via an Earth Engine snippet (`ee.ImageCollection(\"UMT/NTSG/v2/LANDSAT/NPP\")`) and includes bands for `annualNPP` (kg\\*C/m\\^2) and `QC`.
- ImageCollection ( 'UMT/NTSG/v2/LANDSAT/NPP' ) . filter ( ee .

### "Landsat-derived forest age for Canada 2019 \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE](https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE)
- Source ID: `site-docs-root-2`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Remotely-sensed data from Landsat (disturbances, surface reflectance composites, forest structure) and MODIS (Gross Primary Production) are utilized to determine age.
- Remotely-sensed data from Landsat (disturbances, surface reflectance composites, forest structure) and MODIS (Gross Primary Production) are utilized to determine age.
- ImageCollection ( 'CANADA/NFIS/NTEMS/CA FOREST AGE' ); Map . setCenter ( - 107.94 , 58.18 , 3 ); Map . addLayer ( dataset , { palette : [ '006600' , '002200' , 'fff700' , 'ab7634' , 'c4d0ff' , 'ffffff' ]}, 'Canada Primary Forest Data' ); Open in Code Editor Landsat-derived forest age for Canada 2019 Canadian primary forest dataset is a satellite-based forest age map for 2019 across Canada's forested ecozones at a 30-m spatial resolution.
- Dataset Availability 2019-01-01T01:00:00Z–2020-01-01T01:00:00Z Dataset Producer National Forest Information System Earth Engine Snippet ee.ImageCollection("CANADA/NFIS/NTEMS/CA FOREST AGE") open in new Tags canada forest forest-biomass Description Canadian primary forest dataset is a satellite-based forest age map for 2019 across Canada's forested ecozones at a 30-m spatial resolution.

### "Datasets tagged plant-productivity in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/plant-productivity](https://developers.google.com/earth-engine/datasets/tags/plant-productivity)
- Source ID: `site-docs-root-3`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- GPP values … global global-pasture-watch land landcover landuse plant-productivity Landsat Gross Primary Production CONUS The Landsat Gross Primary Production (GPP) CONUS dataset estimates GPP using Landsat Surface Reflectance for CONUS.
- GPP is calculated using … 16-day conus gpp gridmet-derived landsat mod17 Landsat Net Primary Production CONUS The Landsat Net Primary Production (NPP) CONUS dataset estimates NPP using Landsat Surface Reflectance for CONUS.
- The product is based on the radiation-use efficiency concept and can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water cycle processes, … 8-day global gpp modis nasa photosynthesis MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m The MOD17A2HGF Version 6.1 Gross Primary Productivity (GPP) product is a cumulative 8-day composite of values with 500 meter (m) pixel size based on the radiation use efficiency concept that can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water … 8-day global gpp modis nasa photosynthesis MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m The MOD17A3HGF V6.1 product provides information about annual Gross and Net Primary Productivity (GPP and NPP) at 500m pixel resolution.
- The PML-V2.2a product provides 500m 8-day resolution global terrestrial evapotranspiration (ET) and gross primary production (GPP) from … evapotranspiration gpp plant-productivity publisher-dataset water-vapor Tree proximate people (TPP) 1.0 The "Tree Proximate People" (TPP) is one of the datasets contributing to the development of indicator #13, number of forest-dependent people in extreme poverty, of the Collaborative Partnership on Forests (CPF) Global Core Set of forest-related indicators (GCS).

