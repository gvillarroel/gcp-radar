---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.415Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Earth Engine Cloud API support"
feature_slug: "earth-engine-cloud-api-support"
latest_feature_date: "2019-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "earth"
  - "engine"
  - "api"
  - "adds"
  - "to"
  - "the"
  - "javascript"
  - "client"
---

# Earth Engine Cloud API support

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Adds Cloud API support to the JavaScript client library and enables it by default for the Python client library.

## Extended Definition

Adds Cloud API support to the JavaScript client library and enables it by default for the Python client library.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before sending a request to compute something, the computation needs to be put into the Earth Engine expression graph format by serializing the computation defined with the client API.
- Credentials . from service account file ( KEY ) scoped credentials = credentials . with scopes ( [ 'https://www.googleapis.com/auth/cloud-platform' ]) session = AuthorizedSession ( scoped credentials ) url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT' response = session . get ( url ) from pprint import pprint import json pprint ( json . loads ( response . content )) Serialize a computation Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format.
- Before you begin Follow these instructions to: Apply for Earth Engine Create a Google Cloud project Enable the Earth Engine API on the project Create a service account Give the service account project level permission to perform Earth Engine computations Note : To complete this tutorial, you will need a service account that is registered for Earth Engine access.
- The Earth Engine REST API quickstart shows how to access blocks of pixels from an Earth Engine asset.

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Credentials . from service account file ( KEY ) scoped credentials = credentials . with scopes ( [ 'https://www.googleapis.com/auth/cloud-platform' ]) session = AuthorizedSession ( scoped credentials ) url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT' response = session . get ( url ) from pprint import pprint import json pprint ( json . loads ( response . content )) Serialize a computation Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format.
- Before you begin Follow these instructions to: Apply for Earth Engine Create a Google Cloud project Enable the Earth Engine API on the project Create a service account Give the service account project level permission to perform Earth Engine computations Note : To complete this tutorial, you will need a service account that is registered for Earth Engine access.
- Page Summary outlined flag The Earth Engine REST API can be used to apply computations to data and obtain results, as demonstrated by calculating the mean of pixels in an ImageCollection within features of a FeatureCollection.
- The Earth Engine REST API quickstart shows how to access blocks of pixels from an Earth Engine asset.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- June 24, 2025 Earth Engine Data Catalog Feature Added ECMWF/NRT FORECAST/IFS/SCWV : ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts Added ECMWF/NRT FORECAST/IFS/WAVE : ECMWF Near-Realtime IFS Wave Forecasts Added NASA/TEMPO/HCHO L3 : TEMPO gridded HCHO vertical columns V03 Added NASA/TEMPO/HCHO L3 QA : TEMPO gridded HCHO (QA filtered) vertical columns V03 June 17, 2025 Earth Engine Data Catalog Feature Added GOOGLE/SATELLITE EMBEDDING/V1/ANNUAL : Satellite Embedding V1 Added projects/forestdatapartnership/assets/cocoa/model 2025a : Cocoa Probability model 2025a Added projects/forestdatapartnership/assets/coffee/model 2025a : Coffee Probability model 2025a Added projects/forestdatapartnership/assets/palm/model 2025a : Palm Probability model 2025a Added projects/forestdatapartnership/assets/rubber/model 2025a : Rubber Tree Probability model 2025a June 10, 2025 Earth Engine Data Catalog Feature Added projects/edf-methanesat-ee/assets/public-preview/L4area v2 : MethaneSAT L4 Area Sources Public Preview V2.0.0 June 03, 2025 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V4 1 : ALOS DSM: Global 30m v4.1 Added UCSB/CHC/CMIP6/v1 : The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) Added UMD/hansen/global forest change 2024 v1 12 : Hansen Global Forest Change v1.12 (2000-2024) Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 1 2001 2023 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2001 2022 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2022 v1.0 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2 2001 2024 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2024 v1.2 May 27, 2025 Earth Engine Data Catalog Feature Added NASA/TEMPO/NO2 L3 QA : TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03 May 13, 2025 Earth Engine Data Catalog Feature Added USGS/NLCD RELEASES/2023 REL/TCC/v2023-5 : USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) May 06, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2024-10 : USFS Landscape Change Monitoring System v2024.10 (CONUS and OCONUS) April 29, 2025 Earth Engine Data Catalog Feature Added ISRIC/SoilGrids250m/v2 0 : SoilGrids250m 2.0 - Volumetric Water Content Added NASA/TEMPO/NO2 L3 : TEMPO gridded NO2 tropospheric and stratospheric columns V03 Added UMN/PGC/ArcticDEM/V4/2m mosaic : ArcticDEM Mosaic V4.1 April 22, 2025 Earth Engine JavaScript Client Library 1.5.12 Change Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization.
- March 05, 2024 Earth Engine Data Catalog Feature Added GOOGLE/AirView/California Unified 2015 2019 : Google Street View Air Quality: High Resolution Air Pollution Mapping in California Added USGS/NLCD RELEASES/2023 REL/RCMAP/V6/COVER : RCMAP Rangeland Component Timeseries (1985-2023), v06 Added USGS/NLCD RELEASES/2023 REL/RCMAP/V6/TRENDS : RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06 Added USGS/NLCD RELEASES/2023 REL/RCMAP/V6/TRENDS YEAR : RCMAP Rangeland Trends Year for Component Timeseries (1985-2023), v06 February 27, 2024 Earth Engine Data Catalog Feature Added GLIMS/20230607 : GLIMS 2023: Global Land Ice Measurements From Space February 20, 2024 Earth Engine Data Catalog Feature Added NASA/LANCE/NOAA20 VIIRS/C2 : VJ114IMGTDL NRT Daily Raster: VIIRS (NOAA-20) Band 375m Active Fire Added NASA/LANCE/SNPP VIIRS/C2 : VNP14IMGTDL NRT Daily Raster: VIIRS (S-NPP) Band 375m Active Fire Added NASA/SMAP/SPL3SMP E/006 : SPL3SMP E.006 SMAP L3 Radiometer Global Daily 9 km Soil Moisture Added NOAA/VIIRS/DNB/ANNUAL V22 : VIIRS Nighttime Day/Night Annual Band Composites V2.2 February 13, 2024 Earth Engine Data Catalog Feature Added EDF/MethaneSAT/MethaneAIR/methaneair-L4area-2021 (no longer available) Added EDF/MethaneSAT/MethaneAIR/methaneair-L4point-2021 (no longer available) Added EDF/OGIM/OGIM v2-4 RF06 RF08 (no longer available) February 06, 2024 Earth Engine Data Catalog Feature Added UK/EA/ENGLAND 1M TERRAIN/2022 : England 1m Composite DTM/DSM (Environment Agency) January 31, 2024 Earth Engine JavaScript Client Library 0.1.388 Change Migrated the authorization workflow in the JavaScript library from the Google API Client Library for JavaScript to Google Identity Services .
- Earth Engine JavaScript Client Library 0.1.55 Change Switched to new read & write scope ('https://www.googleapis.com/auth/earthengine' instead of 'https://www.googleapis.com/auth/earthengine.readonly') Earth Engine Python Client Library 0.1.55 Change Switched to new read & write scope ('https://www.googleapis.com/auth/earthengine' instead of 'https://www.googleapis.com/auth/earthengine.readonly') Earth Engine Server Fixed Fixed tile artifacts when using the countEvery reducer with FeatureCollection.reduceToImage .
- August 08, 2023 Earth Engine Data Catalog Feature Added NASA/GEOS-CF/v1/fcst/tavg1hr : GEOS-CF fcst tavg1hr v1: Goddard Earth Observing System Composition Forecast August 01, 2023 Earth Engine Data Catalog Feature Added JRC/GHSL/P2023A/GHS SMOD (no longer available) July 27, 2023 Earth Engine JavaScript Client Library 0.1.361 Breaking Upgraded the client libraries to use the v1 Earth Engine API.

