---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.174Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MCD43A4"
feature_slug: "modis-006-mcd43a4"
latest_feature_date: "2017-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "modis"
  - "006"
  - "mcd43a4"
  - "brdf"
  - "albedo"
  - "surface"
  - "reflectance"
---

# MODIS/006/MCD43A4

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS BRDF/albedo surface reflectance product.

## Extended Definition

A MODIS BRDF/albedo surface reflectance product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4)
- Source ID: `feature-recovery-direct-http`
- Final score: 323
- Re-rank relevance: N/A

Evidence snippets:
- The data are produced daily … MODIS/006/MCD43A4, albedo,brdf,daily,global,modis,nasa,reflectance,satellite-imagery,usgs 2000-02-24T00:00:00Z/2023-02-10T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MCD43A4.006 https://doi.org/10.5067/MODIS/MCD43A4.006 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Dataset Availability 2000-02-24T00:00:00Z–2023-02-10T00:00:00Z Dataset Producer NASA LP DAAC at the USGS EROS Center Earth Engine Snippet ee.ImageCollection("MODIS/006/MCD43A4") open_in_new Cadence 1 Day Tags albedo brdf daily global modis nasa reflectance satellite-imagery usgs Description The MCD43A4 V6 Nadir Bidirectional Reflectance Distribution Function Adjusted Reflectance (NBAR) product provides 500 meter reflectance data of the MODIS "land" bands 1-7.
- ImageCollection ( 'MODIS/006/MCD43A4' ) . filter ( ee .
- Documentation: User's Guide Algorithm Theoretical Basis Document (ATBD) General Documentation Bands Bands Pixel size: 500 meters (all bands) Name Min Max Scale Pixel Size Wavelength Description Nadir_Reflectance_Band1 0 32766 0.0001 500 meters 620-670nm NBAR at local solar noon for band 1 Nadir_Reflectance_Band2 0 32766 0.0001 500 meters 841-876nm NBAR at local solar noon for band 2 Nadir_Reflectance_Band3 0 32766 0.0001 500 meters 459-479nm NBAR at local solar noon for band 3 Nadir_Reflectance_Band4 0 32766 0.0001 500 meters 545-565nm NBAR at local solar noon for band 4 Nadir_Reflectance_Band5 0 32766 0.0001 500 meters 1230-1250nm NBAR at local solar noon for band 5 Nadir_Reflectance_Band6 0 32766 0.0001 500 meters 1628-1652nm NBAR at local solar noon for band 6 Nadir_Reflectance_Band7 0 32766 0.0001 500 meters 2105-2155nm NBAR at local solar noon for band 7 BRDF_Albedo_Band_Mandatory_Quality_Band1 500 meters None BRDF albedo mandatory quality for band 1 Bitmask for BRDF_Albedo_Band_Mandatory_Quality_Band1 Bit 0: Mandatory QA bit index 0: Processed, good quality (full BRDF inversions) 1: Processed, see other QA (magnitude BRDF inversions) BRDF_Albedo_Band_Mandatory_Quality_Band2 500 meters None BRDF albedo mandatory quality for band 2 Bitmask for BRDF_Albedo_Band_Mandatory_Quality_Band2 Bit 0: Mandatory QA bit index 0: Processed, good quality (full BRDF inversions) 1: Processed, see other QA (magnitude BRDF inversions) BRDF_Albedo_Band_Mandatory_Quality_Band3 500 meters None BRDF albedo mandatory quality for band 3 Bitmask for BRDF_Albedo_Band_Mandatory_Quality_Band3 Bit 0: Mandatory QA bit index 0: Processed, good quality (full BRDF inversions) 1: Processed, see other QA (magnitude BRDF inversions) BRDF_Albedo_Band_Mandatory_Quality_Band4 500 meters None BRDF albedo mandatory quality for band 4 Bitmask for BRDF_Albedo_Band_Mandatory_Quality_Band4 Bit 0: Mandatory QA bit index 0: Processed, good quality (full BRDF inversions) 1: Processed, see other QA (magnitude BRDF inversions) BRDF_Albedo_Band_Mandatory_Quality_Band5 500 meters None BRDF albedo mandatory quality for band 5 Bitmask for BRDF_Albedo_Band_Mandatory_Quality_Band5 Bit 0: Mandatory QA bit index 0: Processed, good quality (full BRDF inversions) 1: Processed, see other QA (magnitude BRDF inversions) BRDF_Albedo_Band_Mandatory_Quality_Band6 500 meters None BRDF albedo mandatory quality for band 6 Bitmask for BRDF_Albedo_Band_Mandatory_Quality_Band6 Bit 0: Mandatory QA bit index 0: Processed, good quality (full BRDF inversions) 1: Processed, see other QA (magnitude BRDF inversions) BRDF_Albedo_Band_Mandatory_Quality_Band7 500 meters None BRDF albedo mandatory quality for band 7 Bitmask for BRDF_Albedo_Band_Mandatory_Quality_Band7 Bit 0: Mandatory QA bit index 0: Processed, good quality (full BRDF inversions) 1: Processed, see other QA (magnitude BRDF inversions) Terms of Use Terms of Use MODIS data and products acquired through the LP DAAC have no restrictions on subsequent use, sale, or redistribution.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This product combines data from both the Terra and Aqua spacecrafts, choosing the best representative pixel from the 16-day period. photo library MODIS/061/MCD43A4 MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG The MCD43C3 Version 6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Albedo dataset is produced daily using 16 days of Terra and Aqua MODIS data in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG).
- The MCD43A1 algorithm, as is with all combined products, chooses the best representative pixel from a pool that includes all the acquisitions from both the Terra and Aqua sensors from the retrieval period. photo library MODIS/061/MCD43A1 MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m The MCD43A2 V6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter daily 16-day product.
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 NDWI MODIS Terra Daily BAI The Burn Area Index (BAI) is generated from the Red and Near-IR bands, and measures the spectral distance of each pixel from a reference spectral point (the measured reflectance of charcoal).
- This product is generated from the MODIS/006/MCD43A4 surface reflectance composites. photo library MODIS/MCD43A4 006 EVI MODIS Combined 16-Day NDSI The Normalized Difference Snow Index is used to identify snow, based on its characteristically higher reflectance in the visible portion of the spectrum compared to the mid-IR.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- These are adjusted using a bidirectional reflectance distribution function to model the values as if they were collected from a nadir view. … albedo brdf daily global modis nasa MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG The MCD43C3 Version 6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Albedo dataset is produced daily using 16 days of Terra and Aqua MODIS data in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG).
- The VNP43IA2 product is produced daily using 16 days of VIIRS … land nasa noaa satellite-imagery surface viirs VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid The NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP) Visible Infrared Imaging Radiometer Suite (VIIRS) Nadir Bidirectional Reflectance Distribution Function (BRDF) Adjusted Reflectance (NBAR) Version 2 product provides NBAR estimates at 500 meter resolution.
- The VNP43IA1 product is produced daily using 16 days of VIIRS … land nasa noaa satellite-imagery surface viirs VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid The Suomi National Polar-Orbiting Partnership (Suomi NPP) NASA Visible Infrared Imaging Radiometer Suite (VIIRS) Bidirectional Reflectance Distribution Function (BRDF) and Albedo Quality (VNP43IA2) Version 1 product provides BRDF and Albedo quality at 500m resolution.
- The Julian date represents the 9th day of the 16-day retrieval period, and consequently the observations are weighted to estimate the BRDF/Albedo for that day. … albedo brdf daily global modis nasa MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m The MCD43A2 V6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter daily 16-day product.

