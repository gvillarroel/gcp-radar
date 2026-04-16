---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.235Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MYD09GA_006_NDSI"
feature_slug: "modis-myd09ga-006-ndsi"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDSI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "myd09ga"
  - "006"
  - "ndsi"
  - "aqua"
  - "daily"
  - "normalized"
  - "difference"
---

# MODIS/MYD09GA_006_NDSI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS Aqua daily normalized difference snow index.

## Extended Definition

MODIS Aqua daily normalized difference snow index.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDSI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDSI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Aqua Daily NDSI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDSI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GA_006_NDSI)
- Source ID: `feature-recovery-direct-http`
- Final score: 454
- Re-rank relevance: N/A

Evidence snippets:
- Dataset Availability 2002-07-04T00:00:00Z–2023-02-25T00:00:00Z Dataset Producer Google Earth Engine Snippet ee.ImageCollection("MODIS/MYD09GA_006_NDSI") open_in_new Cadence 1 Day Tags aqua daily global modis myd09ga ndsi surface-reflectance usgs vegetation-indices Description The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- See Riggs et al. (1994) for … MODIS/MYD09GA_006_NDSI, aqua,daily,global,modis,ndsi,surface-reflectance,usgs,vegetation-indices 2002-07-04T00:00:00Z/2023-02-25T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The MODIS/MYD09GA_006_NDSI dataset, provided by Google, spans from July 4, 2002, to February 25, 2023.
- ImageCollection ( 'MODIS/MYD09GA_006_NDSI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var colorized = dataset . select ( 'NDSI' ); var colorizedVis = { palette : [ '000088' , '0000ff' , '8888ff' , 'ffffff' ], }; Map . setCenter ( - 7.03 , 31.05 , 2 ); Map . addLayer ( colorized , colorizedVis , 'Colorized' ); Open in Code Editor MODIS Aqua Daily NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDSI MODIS Aqua Daily NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 EVI MODIS Aqua Daily NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.
- Snow cover data are based on a snow mapping algorithm that employs a Normalized Difference Snow Index (NDSI) and other criteria tests. photo library MODIS/061/MYD10A1 MYD11A1.061 Aqua Land Surface Temperature and Emissivity Daily Global 1km The MYD11A1 V6.1 product provides daily land surface temperature (LST) and emissivity values in a 1200 x 1200 kilometer grid.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDVI MODIS Aqua Daily NDWI The Normalized Difference Water Index (NDWI) is sensitive to changes in liquid water content of vegetation canopies.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km The MYD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km The MYD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day evi global modis nasa ndvi MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km The MOD14A1 V6.1 dataset provides daily fire mask composites at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
- The MYD09CMG data … aqua brightness-temperature ozone satellite-imagery surface-reflectance MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.

