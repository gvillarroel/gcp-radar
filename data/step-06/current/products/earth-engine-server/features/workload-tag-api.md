---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.410Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Workload tag API"
feature_slug: "workload-tag-api"
latest_feature_date: "2022-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
keywords:
  - "workload"
  - "tag"
  - "api"
  - "this"
  - "labels"
  - "computations"
  - "and"
  - "exports"
---

# Workload tag API

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

This API labels computations and exports with a workload tag that is visible in Google Cloud Console.

## Extended Definition

This API labels computations and exports with a workload tag that is visible in Google Cloud Console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- June 22, 2022 Earth Engine Python Client Library 0.1.316 Feature Added the workload tag API ( ee.data.getWorkloadTag() and ee.data.setWorkloadTag() ) to label computation and exports with a workload tag, which is viewable from the Google Cloud Console.
- Earth Engine Server Feature Added the workload tag API ( ee.data.getWorkloadTag() and ee.data.setWorkloadTag() ) to label computation and exports with a workload tag, which is viewable from the Google Cloud Console.
- May 02, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP46A1 : VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night Added OpenET/DISALEXI/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET DisALEXI Monthly Evapotranspiration v2.0 Added OpenET/EEMETRIC/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0 Added OpenET/GEESEBAL/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0 Added OpenET/PTJPL/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET PT-JPL Monthly Evapotranspiration v2.0 Added OpenET/SIMS/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET SIMS Monthly Evapotranspiration v2.0 Added OpenET/SSEBOP/CONUS/GRIDMET/MONTHLY/v2 0 : OpenET SSEBop Monthly Evapotranspiration v2.0 April 25, 2023 Earth Engine Data Catalog Feature Added Estonia/Maamet/orthos/mono : Estonia mono orthophotos Added Estonia/Maamet/orthos/rgb : Estonia RGB orthophotos April 18, 2023 Earth Engine Data Catalog Feature Added ECMWF/ERA5 LAND/DAILY AGGR : ERA5-Land Daily Aggregated - ECMWF Climate Reanalysis April 14, 2023 Earth Engine JavaScript Client Library 0.1.349 Breaking Removed support for dots (.) in workload tags , which will now throw an error.
- October 07, 2025 Earth Engine Data Catalog Feature Added projects/gcpm041u-lemur/assets/scanfi v12/SCANFI v1 2 : SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2 Added projects/global-pasture-watch/assets/gsvh-30m/v1/short-veg-height m : GPW Annual short vegetation height v1 September 30, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO : Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO Added COPERNICUS/MARINE/GLOBAL SEA SURFACE/NRT DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Added COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Added NASA/ECOSTRESS/L2T STARS/V2 : ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002 September 16, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY : Global Ocean Physics Analysis and Forecast Daily September 09, 2025 Earth Engine Data Catalog Feature Added ECMWF/ERA5/HOURLY : ERA5 Hourly - ECMWF Climate Reanalysis September 02, 2025 Earth Engine Data Catalog Feature Added JRC/CEMS GLOFAS/FloodHazard/v2 1 : JRC Global River Flood Hazard Maps Version 2.1 August 26, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/OC GLO BGC/PLANKTON MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, Multi-Sensor, 4KM Added COPERNICUS/MARINE/OC GLO BGC/PLANKTON OLCI 300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, OLCI, 300M Added COPERNICUS/MARINE/OC GLO BGC/REFLECTANCE OLCI 300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M Added COPERNICUS/MARINE/OC GLO BGC/TRANSPARENCY MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, Multi-Sensor, 4KM Added COPERNICUS/MARINE/OC GLO BGC/TRANSPARENCY OLCI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, OLCI, 4KM Added JRC/CEMS GLOFAS/FloodHazard/v2 (no longer available) Added projects/global-pasture-watch/assets/ggpp-30m/v1/ugpp m : GPW Annual uncalibrated Gross Primary Productivity (uGPP) v1 Added projects/malariaatlasproject/assets/EVI v061/1km/8-Daily : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (8-Daily 1km) Added projects/malariaatlasproject/assets/EVI v061/1km/Annual : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Annual 1km) Added projects/malariaatlasproject/assets/EVI v061/1km/Monthly : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Monthly 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/8-Daily : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (8-Daily 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/Annual : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Annual 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/Monthly : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Monthly 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/8-Daily : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/Annual : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Annual 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/Monthly : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Monthly 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/8-Daily : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (8-Daily 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/Annual : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Annual 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/Monthly : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Monthly 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/8-Daily : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (8-Daily 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/Annual : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Annual 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/Monthly : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Monthly 1km) August 19, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/OC GLO BGC/OPTICS MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Optics, Multi-Sensor 4KM Added COPERNICUS/MARINE/OC GLO BGC/PRIMARY PRODUCTION MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Primary Production, Multi-Sensor 4KM Added COPERNICUS/MARINE/OC GLO BGC/REFLECTANCE MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, Multi-Sensor 4KM Added USGS/3DEP/10m collection : USGS 3DEP 10m National Map Seamless (1/3 Arc-Second) August 05, 2025 Earth Engine Data Catalog Feature Added MODIS/061/MYD16A2 : MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061 Added NASA/SMAP/SPL4SMGP/008 : SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture July 29, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/TreeMap/v2020 : USFS TreeMap v2020 Added USFS/GTAC/TreeMap/v2022 : USFS TreeMap v2022 Added projects/nature-trace/assets/farmscapes/england v1 0 : Farmscapes 2020 Added projects/nature-trace/assets/forest typology/natural forest 2020 v1 0 collection : Natural Forests of the World 2020 July 22, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/SATELLITE OCEAN COLOR/V6 : Copernicus Satellite Ocean Color Daily Data July 21, 2025 Earth Engine Server Breaking BACKWARD INCOMPATIBLE The Google Drive main OAuth scope , https://www.googleapis.com/auth/drive has to be requested explicitly for Earth Engine requests that interact with Google Drive.

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- Before you begin Follow these instructions to: Apply for Earth Engine Create a Google Cloud project Enable the Earth Engine API on the project Create a service account Give the service account project level permission to perform Earth Engine computations Note : To complete this tutorial, you will need a service account that is registered for Earth Engine access.
- Home Products Google Earth Engine Reference Send feedback Image computations with the Earth Engine REST API Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag This guide shows how to prototype a computation with one of the client libraries, serialize the computation graph and use the REST API to obtain the computed result.

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Follow these instructions to: Apply for Earth Engine Create a Google Cloud project Enable the Earth Engine API on the project Create a service account Give the service account project level permission to perform Earth Engine computations Note : To complete this tutorial, you will need a service account that is registered for Earth Engine access.
- Accessing Earth Engine data and performing computations through the REST API requires setting up a Google Cloud project, enabling the Earth Engine API, creating and registering a service account, and obtaining a private key file.
- Page Summary outlined flag The Earth Engine REST API can be used to apply computations to data and obtain results, as demonstrated by calculating the mean of pixels in an ImageCollection within features of a FeatureCollection.
- Home Products Google Earth Engine Reference Send feedback Table computations with the Earth Engine REST API Stay organized with collections Save and categorize content based on your preferences.

