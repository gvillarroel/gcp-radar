---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.339Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual"
feature_slug: "oxford-map-igbp-fractional-landcover-5km-annual"
latest_feature_date: "2015-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_IGBP_Fractional_Landcover_5km_Annual"
  - "https://developers.google.com/earth-engine/datasets/tags/landuse-landcover"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "oxford"
  - "map"
  - "igbp"
  - "fractional"
  - "landcover"
  - "5km"
  - "annual"
  - "kilometer"
---

# Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Annual 5-kilometer fractional land cover dataset for the Malaria Atlas Project.

## Extended Definition

Annual 5-kilometer fractional land cover dataset for the Malaria Atlas Project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_IGBP_Fractional_Landcover_5km_Annual](https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_IGBP_Fractional_Landcover_5km_Annual)
- [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_IGBP_Fractional_Landcover_5km_Annual](https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_IGBP_Fractional_Landcover_5km_Annual)
- Source ID: `feature-recovery-direct-http`
- Final score: 357
- Re-rank relevance: N/A

Evidence snippets:
- This data was converted from its categorical format, which has a &asymp;500 meter resolution, to a fractional product indicating the integer percentage (0-100) of the output pixel covered by each of … Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual, landcover,landuse-landcover,map 2001-01-01T00:00:00Z/2013-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Oxford Malaria Atlas Project provides an annual fractional landcover dataset from 2001 to 2013, derived from the MODIS IGBP layer (MCD12Q1).
- Dataset Availability 2001-01-01T00:00:00Z–2013-01-01T00:00:00Z Dataset Producer Oxford Malaria Atlas Project Earth Engine Snippet ee.ImageCollection("Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual") open_in_new Cadence 1 Year Tags landcover landuse-landcover map igbp Description The underlying dataset for this landcover product is the IGBP layer found within the MODIS annual landcover product (MCD12Q1).
- ImageCollection ( 'Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual' ) . filter ( ee .
- Filter . date ( '2012-01-01' , '2012-12-31' )); var landcover = dataset . select ( 'Overall_Class' ); var landcoverVis = { min : 1.0 , max : 19.0 , palette : [ '032f7e' , '02740b' , '02740b' , '8cf502' , '8cf502' , 'a4da01' , 'ffbd05' , 'ffbd05' , '7a5a02' , 'f0ff0f' , '869b36' , '6091b4' , '999999' , 'ff4e4e' , 'ff4e4e' , 'ffffff' , 'feffc0' , '020202' , '020202' ], }; Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( landcover , landcoverVis , 'Landcover' ); Open in Code Editor Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover The underlying dataset for this landcover product is the IGBP layer found within the MODIS annual landcover product (MCD12Q1).

### "Datasets tagged landuse-landcover in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- Source ID: `site-docs-root-3`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Beginning with the 2016 release, land cover products were created for two-to-three-year intervals … blm landcover landuse-landcover mrlc nlcd usgs Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover The underlying dataset for this landcover product is the IGBP layer found within the MODIS annual landcover product (MCD12Q1).
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland SBTN Natural Lands Map v1 The SBTN Natural Lands Map v1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri SBTN Natural Lands Map v1.1 The SBTN Natural Lands Map v1.1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri TUBerlin/BigEarthNet/v1 BigEarthNet is a new large-scale Sentinel-2 benchmark archive, consisting of 590,326 Sentinel-2 image patches.
- This dataset was developed in collaboration with the Oxford Leverhulme Centre for Nature Recovery to serve as a baseline for applications including … biodiversity climate conservation forest landuse-landcover nature-trace GPW Annual Dominant Class of Grasslands v1 This dataset provides global annual dominant class maps of grasslands (cultivated and natural/semi-natural) from 2000 to 2022 at 30-m spatial resolution.
- The RCMAP product suite consists of ten fractional components: annual … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06 The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Each place record includes location coordinates, names, categories, contact information (websites, social media, emails, phones), brand information, addresses, and … global infrastructure-boundaries map population publisher-dataset urban Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover The underlying dataset for this landcover product is the IGBP layer found within the MODIS annual landcover product (MCD12Q1).
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland REMA Mosaic The Reference Elevation Model of Antarctica (REMA) is a high resolution, time-stamped Digital Surface Model (DSM) of Antarctica at 2-meter and 8-meter spatial resolutions.
- The RCMAP product suite consists of ten fractional components: annual … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06 The RCMAP (Rangeland Condition Monitoring Assessment and Projection) dataset quantifies the percent cover of rangeland components across western North America using Landsat imagery from 1985-2023.
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland RCMAP Rangeland Trends Year for Component Timeseries (1985-2023), v06 This collection includes RCMAP yearly products from 1985 through 2023.

