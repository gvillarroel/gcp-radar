---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.226Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MOD09GA_006_BAI"
feature_slug: "modis-mod09ga-006-bai"
latest_feature_date: "2017-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_BAI"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
keywords:
  - "modis"
  - "mod09ga"
  - "006"
  - "bai"
  - "terra"
  - "daily"
  - "burned"
  - "area"
---

# MODIS/MOD09GA_006_BAI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

MODIS Terra daily burned area index.

## Extended Definition

MODIS Terra daily burned area index.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_BAI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_BAI)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)

## Supporting Pages

### MODIS Terra Daily BAI | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_BAI](https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_BAI)
- Source ID: `feature-recovery-direct-http`
- Final score: 394
- Re-rank relevance: N/A

Evidence snippets:
- See Chuvieco et al. (2002) for details. … MODIS/MOD09GA_006_BAI, bai,daily,global,modis,surface-reflectance,terra,usgs,vegetation-indices 2000-02-24T00:00:00Z/2023-02-17T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The MODIS/MOD09GA_006_BAI dataset, available from 2000-02-24 to 2023-02-17 via Google Earth Engine, provides a daily Burn Area Index (BAI) at a 463.313-meter pixel resolution, globally.
- Dataset Availability 2000-02-24T00:00:00Z–2023-02-17T00:00:00Z Dataset Producer Google Earth Engine Snippet ee.ImageCollection("MODIS/MOD09GA_006_BAI") open_in_new Cadence 1 Day Tags bai daily global mod09ga modis surface-reflectance terra usgs vegetation-indices Description The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the measured reflectance of charcoal).
- ImageCollection ( 'MODIS/MOD09GA_006_BAI' ) . filter ( ee .
- Filter . date ( '2018-04-01' , '2018-06-01' )); var scaled = dataset . select ( 'BAI' ); var scaledVis = { min : 0.0 , max : 100.0 , }; Map . setCenter ( - 7.03125 , 31.0529339857 , 2 ); Map . addLayer ( scaled , scaledVis , 'Scaled' ); Open in Code Editor MODIS Terra Daily BAI The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the measured reflectance of charcoal).

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- This product is generated from the MODIS/006/MOD09GA surface reflectance composites. photo library MODIS/MOD09GA 006 BAI MODIS Terra Daily EVI The Enhanced Vegetation Index (EVI) is generated from the Near-IR, Red and Blue bands of each scene, and ranges in value from -1.0 to 1.0.
- MOD09GA version 6.1 provides bands 1-7 in a daily gridded L2G product in the sinusoidal projection, including 500m reflectance values and 1km observation and geolocation statistics. photo library MODIS/061/MOD09GA MOD09GQ.061 Terra Surface Reflectance Daily Global 250m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- This product is based on a Climate Modeling Grid (CMG) for use in climate simulation models. photo library MODIS/061/MOD09CMG MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDWI MODIS Terra Daily BAI The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the measured reflectance of charcoal).

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Data are temporally weighted to the ninth … albedo black-sky brdf daily global modis MCD64A1.061 MODIS Burned Area Monthly Global 500m The Terra and Aqua combined MCD64A1 Version 6.1 Burned Area data product is a monthly, global gridded 500m product containing per-pixel burned-area and quality information.
- The product is referred to as ocean reflectance, because bands 8-16 are used primarily to produce ocean products, but this is not an ocean product as the tiles … daily global modis nasa ocean reflectance MTBS Burned Area Boundaries The Monitoring Trends in Burn Severity (MTBS) burned area boundaries dataset contains the extent polygons of the burned areas of all currently completed MTBS fires for the continental United States, Alaska, Hawaii, and Puerto Rico.
- The MOD09CMG data … brightness-temperature ozone satellite-imagery surface-reflectance terra MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.
- MOD09GA version 6.1 provides bands 1-7 in … daily global modis nasa satellite-imagery sr MOD09GQ.061 Terra Surface Reflectance Daily Global 250m The MODIS Surface Reflectance products provide an estimate of the surface spectral reflectance as it would be measured at ground level in the absence of atmospheric scattering or absorption.

