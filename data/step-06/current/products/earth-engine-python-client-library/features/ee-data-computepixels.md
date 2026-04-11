---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.814Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "ee.data.computePixels()"
feature_slug: "ee-data-computepixels"
latest_feature_date: "2023-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation"
  - "https://developers.google.com/earth-engine/guides/data_extraction"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "ee"
  - "computepixels"
  - "computes"
  - "pixel"
  - "from"
  - "assets"
  - "or"
  - "image"
---

# ee.data.computePixels()

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Computes pixel data from assets or ee.Image objects.

## Extended Definition

Computes pixel data from assets or ee.Image objects.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- [https://developers.google.com/earth-engine/guides/data_extraction](https://developers.google.com/earth-engine/guides/data_extraction)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation](https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac ) Image Argument Type Details imageA Image First image, with N bands. imageB Image Second image, must have the same number of bands as imageA. maxGap Integer The greatest distance a pixel may shift in either X or Y. windowSize Integer Size of the window to be compared. maxMaskedFrac Float, default: 0 The maximum fraction of pixels within the correlation window that are allowed to be masked.
- The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB.
- Outputs a four-band image containing deltaX, deltaY, Euclidean distance, and the correlation coefficient for each pixel.
- Gives information on the quality of image registration between two (theoretically) co-registered images.

### Image Data Extraction \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/data_extraction](https://developers.google.com/earth-engine/guides/data_extraction)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Page Summary outlined flag The Export function handles image data export from Earth Engine to Google Drive, Cloud Storage, or Earth Engine assets, but manual methods using getPixels and computePixels can handle larger workloads and offer more control. getPixels is used to extract image data directly from existing Earth Engine assets without prior computation on the pixels. computePixels is used to extract image data from computed images, such as composites, allowing for an ee.Image object to be passed through the expression parameter.
- Run in Google Colab View source on GitHub Getting image data from computed images Use computePixels to get image data from a computed image, for example a composite.
- Specifically, this guide describes methods for manually making requests for image data using getPixels or computePixels .
- Getting image data from existing assets Use getPixels to get image data from existing Earth Engine assets.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The new methods will help with getting pixels from assets or ee.Image objects, and listing features from assets or ee.FeatureCollection objects.
- July 23, 2024 Earth Engine Data Catalog Feature Added MODIS/061/MOD17A2HGF : MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m Added NASA/EMIT/L1B/RAD : EMIT L1B At-Sensor Calibrated Radiance and Geolocation Data 60 m Added projects/neon-prod-earthengine/assets/CHM/001 : NEON Canopy Height Model (CHM) July 16, 2024 Earth Engine Code Editor Breaking Reduced the maximum allowable header size of a GeoTIFF (produced by the ee.Image.loadGeoTIFF() algorithm or by CreateAsset as a COG-backed asset) from 32mb to 10mb.
- Earth Engine Server Fixed Added ee.Model.fromAiPlatformPredictor() , which returns an ee.Model from a description of an AI Platform prediction model, and an ee.Model.predictImage() algorithm, which makes predictions from pixel tiles of an image.
- October 07, 2025 Earth Engine Data Catalog Feature Added projects/gcpm041u-lemur/assets/scanfi v12/SCANFI v1 2 : SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2 Added projects/global-pasture-watch/assets/gsvh-30m/v1/short-veg-height m : GPW Annual short vegetation height v1 September 30, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST BGC 001 028/BIO : Copernicus Global Ocean Bio-Geo-Chemical Forecast - BIO Added COPERNICUS/MARINE/GLOBAL SEA SURFACE/NRT DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Added COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY : Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Added NASA/ECOSTRESS/L2T STARS/V2 : ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002 September 16, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/GLOBAL ANALYSISFORECAST PHY DAILY : Global Ocean Physics Analysis and Forecast Daily September 09, 2025 Earth Engine Data Catalog Feature Added ECMWF/ERA5/HOURLY : ERA5 Hourly - ECMWF Climate Reanalysis September 02, 2025 Earth Engine Data Catalog Feature Added JRC/CEMS GLOFAS/FloodHazard/v2 1 : JRC Global River Flood Hazard Maps Version 2.1 August 26, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/OC GLO BGC/PLANKTON MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, Multi-Sensor, 4KM Added COPERNICUS/MARINE/OC GLO BGC/PLANKTON OLCI 300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, OLCI, 300M Added COPERNICUS/MARINE/OC GLO BGC/REFLECTANCE OLCI 300M : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M Added COPERNICUS/MARINE/OC GLO BGC/TRANSPARENCY MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, Multi-Sensor, 4KM Added COPERNICUS/MARINE/OC GLO BGC/TRANSPARENCY OLCI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Transparency, OLCI, 4KM Added JRC/CEMS GLOFAS/FloodHazard/v2 (no longer available) Added projects/global-pasture-watch/assets/ggpp-30m/v1/ugpp m : GPW Annual uncalibrated Gross Primary Productivity (uGPP) v1 Added projects/malariaatlasproject/assets/EVI v061/1km/8-Daily : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (8-Daily 1km) Added projects/malariaatlasproject/assets/EVI v061/1km/Annual : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Annual 1km) Added projects/malariaatlasproject/assets/EVI v061/1km/Monthly : EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Monthly 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/8-Daily : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (8-Daily 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/Annual : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Annual 1km) Added projects/malariaatlasproject/assets/LST Day v061/1km/Monthly : LST Day: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature (Monthly 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/8-Daily : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/Annual : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Annual 1km) Added projects/malariaatlasproject/assets/LST Night v061/1km/Monthly : LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Monthly 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/8-Daily : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (8-Daily 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/Annual : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Annual 1km) Added projects/malariaatlasproject/assets/TCB v061/1km/Monthly : TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Monthly 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/8-Daily : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (8-Daily 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/Annual : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Annual 1km) Added projects/malariaatlasproject/assets/TCW v061/1km/Monthly : TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness (Monthly 1km) August 19, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/OC GLO BGC/OPTICS MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Optics, Multi-Sensor 4KM Added COPERNICUS/MARINE/OC GLO BGC/PRIMARY PRODUCTION MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Primary Production, Multi-Sensor 4KM Added COPERNICUS/MARINE/OC GLO BGC/REFLECTANCE MULTI 4KM : Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, Multi-Sensor 4KM Added USGS/3DEP/10m collection : USGS 3DEP 10m National Map Seamless (1/3 Arc-Second) August 05, 2025 Earth Engine Data Catalog Feature Added MODIS/061/MYD16A2 : MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061 Added NASA/SMAP/SPL4SMGP/008 : SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture July 29, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/TreeMap/v2020 : USFS TreeMap v2020 Added USFS/GTAC/TreeMap/v2022 : USFS TreeMap v2022 Added projects/nature-trace/assets/farmscapes/england v1 0 : Farmscapes 2020 Added projects/nature-trace/assets/forest typology/natural forest 2020 v1 0 collection : Natural Forests of the World 2020 July 22, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/SATELLITE OCEAN COLOR/V6 : Copernicus Satellite Ocean Color Daily Data July 21, 2025 Earth Engine Server Breaking BACKWARD INCOMPATIBLE The Google Drive main OAuth scope , https://www.googleapis.com/auth/drive has to be requested explicitly for Earth Engine requests that interact with Google Drive.

