---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.138Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MOD44W"
feature_slug: "modis-006-mod44w"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD44W"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/surface-ground-water"
keywords:
  - "modis"
  - "006"
  - "mod44w"
  - "srtm"
  - "derived"
  - "global"
  - "land"
  - "water"
---

# MODIS/006/MOD44W

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS and SRTM-derived global land/water mask.

## Extended Definition

A MODIS and SRTM-derived global land/water mask.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD44W](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD44W)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/surface-ground-water](https://developers.google.com/earth-engine/datasets/tags/surface-ground-water)

## Supporting Pages

### MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD44W](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD44W)
- Source ID: `feature-recovery-direct-http`
- Final score: 409
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2000-01-01T00:00:00Z–2015-01-01T00:00:00Z Dataset Producer NASA LP DAAC at the USGS EROS Center Earth Engine Snippet ee.ImageCollection("MODIS/006/MOD44W") open_in_new Cadence 1 Year Tags geophysical mod44w modis nasa srtm surface-ground-water usgs water-mask Description The MOD44W V6 land/water mask 250m product is derived using a decision tree classifier trained with MODIS data and validated with the MOD44W V5 product.
- MODIS/006/MOD44W, geophysical,mod44w,modis,nasa,srtm,surface-ground-water,usgs,water-mask 2000-01-01T00:00:00Z/2015-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MOD44W.006 https://doi.org/10.5067/MODIS/MOD44W.006 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The MOD44W V6 dataset, provided by NASA LP DAAC, offers a yearly land/water mask product from 2000 to 2015 at a 250-meter resolution, and can be accessed using the Earth Engine snippet.
- Filter . date ( '2015-01-01' , '2015-05-01' )); var waterMask = dataset . select ( 'water_mask' ); var waterMaskVis = { min : 0 , max : 1 , palette : [ 'bcba99' , '2d0491' ], }; Map . setCenter ( 6.746 , 46.529 , 2 ); Map . addLayer ( waterMask , waterMaskVis , 'Water Mask' ); Open in Code Editor MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m The MOD44W V6 land/water mask 250m product is derived using a decision tree classifier trained with MODIS data and validated with the MOD44W V5 product.
- MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog All Datasets Send feedback MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m Stay organized with collections Save and categorize content based on your preferences.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- VCF products provide a continuous, quantitative portrayal of land surface cover with improved spatial detail, and hence, are widely used in environmental modeling and monitoring applications. photo library MODIS/006/MOD44B MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m The MOD44W V6 land/water mask 250m product is derived using a decision tree classifier trained with MODIS data and validated with the MOD44W V5 product.
- This product is generated from the MODIS/006/MOD09GA surface reflectance composites. photo library MODIS/MOD09GA 006 NDWI MOD44W.005 Land Water Mask Derived From MODIS and SRTM The Global Water Mask uses the SWBD (SRTM Water Body Data) in combination with MODIS 250m data to create a complete global map of surface water at 250m spatial resolution, circa 2000-2002.
- A series of masks are applied to address known issues caused by terrain shadow, burn scars, cloudiness, or ice cover in oceans. photo library MODIS/006/MOD44W MODOCGA.006 Terra Ocean Reflectance Daily Global 1km The MODOCGA V6 ocean reflectance product consists of 1 kilometer reflectance data from Terra MODIS bands 8-16.
- The date is encoded in a single data layer as the ordinal day of the calendar year on which the burn occurred, with values assigned to unburned land pixels and additional special values reserved for missing data and water grid cells. photo library MODIS/061/MCD64A1 MOD08 M3.061 Terra Atmosphere Monthly Global Product MOD08 M3 V6.1 is an atmosphere global product that contains monthly 1 x 1 degree grid average values of atmospheric parameters.

### "Datasets tagged surface-ground-water in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/surface-ground-water](https://developers.google.com/earth-engine/datasets/tags/surface-ground-water)
- Source ID: `site-docs-root-3`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- This dataset is intended for use in processing of raster data and for … geophysical mod44w modis srtm surface-ground-water water-mask MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m The MOD44W V6 land/water mask 250m product is derived using a decision tree classifier trained with MODIS data and validated with the MOD44W V5 product.
- MERIT Hydro contains the output of a new … dem elevation flow-direction hand hydrography hydrosheds MERIT Hydro: Supplementary Visualization Layers Supplementary visualization layers for MERIT Hydro dem elevation flow-direction hand hydrography hydrosheds MOD44W.005 Land Water Mask Derived From MODIS and SRTM The Global Water Mask uses the SWBD (SRTM Water Body Data) in combination with MODIS 250m data to create a complete global map of surface water at 250m spatial resolution, circa 2000-2002.
- A series of masks are applied to address known issues caused by terrain shadow, burn scars, cloudiness, or ice cover … geophysical mod44w modis nasa srtm surface-ground-water Murray Global Intertidal Change Classification The Murray Global Intertidal Change Dataset contains global maps of tidal flat ecosystems produced via a supervised classification of 707,528 Landsat Archive images.
- The 250m floodplain dataset is derived by processing the NASA SRTM Digital Elevation model gathered from http://srtm.csi.cgiar.org/, and in particular the 250-m SRTM version 4.1 … flood monitoring surface-ground-water GLCF: Landsat Global Inland Water The Global Inland Water dataset shows inland surface water bodies, including fresh and saline lakes, rivers, and reservoirs.

