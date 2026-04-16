---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.512Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USGS LIMA SR_METADATA"
feature_slug: "usgs-lima-sr-metadata"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/USGS_LIMA_SR_METADATA"
keywords:
  - "usgs"
  - "lima"
  - "sr"
  - "metadata"
  - "processed"
  - "landsat"
  - "scenes"
  - "image"
---

# USGS LIMA SR_METADATA

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Metadata for processed Landsat scenes in the Landsat Image Mosaic of Antarctica.

## Extended Definition

Metadata for processed Landsat scenes in the Landsat Image Mosaic of Antarctica.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/USGS_LIMA_SR_METADATA](https://developers.google.com/earth-engine/datasets/catalog/USGS_LIMA_SR_METADATA)

## Supporting Pages

### Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/USGS_LIMA_SR_METADATA](https://developers.google.com/earth-engine/datasets/catalog/USGS_LIMA_SR_METADATA)
- Source ID: `feature-recovery-direct-http`
- Final score: 497
- Re-rank relevance: N/A

Evidence snippets:
- Each Landsat scene is … USGS/LIMA/SR_METADATA, antarctica,ice,landsat-derived,lima,mosaic,satellite-imagery,sr,table,usgs 1999-06-30T00:00:00Z/2002-09-04T00:00:00Z -90 -180 -55 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Landsat Image Mosaic of Antarctica (LIMA), provided by USGS, is a cloudless mosaic from processed Landsat 7 ETM+ scenes.
- Dataset Availability 1999-06-30T00:00:00Z–2002-09-04T00:00:00Z Dataset Producer USGS Earth Engine Snippet ee.FeatureCollection("USGS/LIMA/SR_METADATA") open_in_new Tags antarctica ice landsat-derived lima mosaic satellite-imagery sr table usgs Description The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- FeatureCollection ( 'USGS/LIMA/SR_METADATA' ); // Calculate the age of each feature by subtracting // the acquisition date from "today". var feature_ages = dataset . map ( function ( feature ) { var today = ee .
- Metadata for the collection can be accessed via `ee.FeatureCollection(\"USGS/LIMA/SR_METADATA\")` in Earth Engine, providing acquisition date, path, row, scene ID, sensor, and satellite information.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS scenes converted to 16 bit, processed with sun-angle correction, and converted to reflectance values (Bindschadler … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS scenes converted to 16 bit, processed with sun-angle correction, and converted to reflectance values (Bindschadler … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- GLS2005 uses mainly Landsat 5 and gap-filled Landsat 7 data with EO-1 ALI and Terra ASTER data filling in any … etm gls l7 landsat radiance satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- These images contain 4 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal infrared … cfmask cloud fmask global landsat lasrc USGS Landsat 4 MSS Collection 2 Tier 1 Raw Scenes Landsat 4 MSS Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS scenes converted to 16 bit, processed with sun-angle correction, and converted to reflectance values (Bindschadler … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- Real-time data is any data that relates to a time that is no … climate forecast gcp-public-data-weathernext precipitation publisher-dataset temperature Wildfire Risk to Communities v0 This dataset depicts components of wildfire risk for all lands in the United States that: 1) are landscape-wide (i.e., measurable at every pixel across the landscape); and 2) represent in situ risk - risk at the location where the adverse effects take place on the … burn fire usda wildfire World Settlement Footprint 2015 The World Settlement Footprint (WSF) 2015 is a 10m resolution binary mask outlining the extent of human settlements globally derived by means of 2014-2015 multitemporal Landsat-8 and Sentinel-1 imagery (of which 217,000 and 107,000 scenes have been processed, respectively).
- Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS scenes converted to 16 bit, processed with sun-angle correction, and converted to reflectance values (Bindschadler … antarctica ice landsat-derived lima mosaic satellite-imagery Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic The Landsat Image Mosaic of Antarctica (LIMA) is a seamless and virtually cloudless mosaic created from processed Landsat 7 ETM+ scenes.
- These images contain 4 visible and near-infrared (VNIR) bands and 2 short-wave infrared (SWIR) bands processed to orthorectified surface reflectance, and one thermal infrared … cfmask cloud fmask global landsat lasrc USGS Landsat 4 MSS Collection 2 Tier 1 Raw Scenes Landsat 4 MSS Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

